/**
 * Base de Conhecimento - JavaScript Refatorado
 * 
 * Este arquivo contém toda a lógica da aplicação de base de conhecimento
 * com código moderno, organizado e bem documentado.
 */

import { forumData } from './data/index.js';

// ==============================================
// CONSTANTES E ELEMENTOS DO DOM
// ==============================================
const DOM = {
  app: document.getElementById('app'),
  sidebarNav: document.getElementById('sidebar-nav'),
  searchInput: document.getElementById('search-input'),
  themeToggleBtn: document.getElementById('theme-toggle'),
  filterButton: document.getElementById('search-filter-button'),
  filterMenu: document.getElementById('search-filter-menu'),
  filterMenuInput: document.getElementById('filter-menu-input'),
  filterMenuList: document.getElementById('filter-menu-list'),
};

// Ícones SVG como constantes
const ICONS = {
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>`,
};

// ==============================================
// ESTADO DA APLICAÇÃO
// ==============================================
const state = {
  currentCategory: null,
  scrollInstance: null,
  searchScope: 'all',
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

// ==============================================
// FUNÇÕES UTILITÁRIAS
// ==============================================

/**
 * Inicia o scroll suave com Locomotive Scroll
 */
function initSmoothScroll() {
  if (state.scrollInstance) {
    state.scrollInstance.destroy();
  }
  
  state.scrollInstance = new LocomotiveScroll({
    el: document.querySelector('#content-wrapper'),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true }
  });
}

/**
 * Atualiza a instância do scroll
 */
function updateScroll() {
  setTimeout(() => {
    if (state.scrollInstance) {
      state.scrollInstance.update();
    }
  }, 150);
}

/**
 * Dispara animação de entrada no conteúdo
 */
function triggerContentAnimation() {
  DOM.app.classList.remove('animate-in');
  void DOM.app.offsetWidth; // Trigger reflow
  DOM.app.classList.add('animate-in');
}

/**
 * Aplica o efeito glass nos componentes
 */
function applyGlassEffect() {
  const searchContainer = document.querySelector('.search-bar__wrapper');
  const filterMenu = document.querySelector('.search-filter-menu');

  if (searchContainer) {
    searchContainer.style.backgroundColor = state.isDarkMode 
      ? 'rgba(40, 40, 40, 0.3)' 
      : 'rgba(255, 255, 255, 0.2)';
    
    searchContainer.style.borderColor = state.isDarkMode 
      ? 'rgba(255, 255, 255, 0.15)' 
      : 'rgba(255, 255, 255, 0.3)';
  }

  if (filterMenu) {
    filterMenu.style.backgroundColor = state.isDarkMode 
      ? 'rgba(40, 40, 40, 0.3)' 
      : 'rgba(255, 255, 255, 0.25)';
    
    filterMenu.style.borderColor = state.isDarkMode 
      ? 'rgba(255, 255, 255, 0.15)' 
      : 'rgba(255, 255, 255, 0.3)';
  }
}

// ==============================================
// FUNÇÕES DE RENDERIZAÇÃO
// ==============================================

/**
 * Renderiza as categorias na página principal
 */
function renderCategories() {
  state.currentCategory = null;
  manageFloatingButton('destroy');
  triggerContentAnimation();

  DOM.app.innerHTML = `
    <div class="text-center">
      <h1 class="text-4xl font-bold">Base de Conhecimento</h1>
      <p class="mt-2 text-lg max-w-2xl mx-auto">Navegue pelos módulos para encontrar guias, soluções e respostas.</p>
    </div>
    <div class="module-grid">
      ${forumData.map(category => `
        <div onclick="renderTopics('${category.id}')" class="card-link" role="button" aria-label="Abrir categoria ${category.title}">
          <div class="card-link__icon">${category.icon}</div>
          <div class="flex flex-col gap-1 mt-1">
            <h3 class="card-link__title">${category.title}</h3>
            <p class="card-link__description">${category.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  updateScroll();
  renderSidebar();
}

/**
 * Renderiza os tópicos de uma categoria
 * @param {string} categoryId - ID da categoria
 */
function renderTopics(categoryId) {
  state.currentCategory = categoryId;
  const category = forumData.find(c => c.id === categoryId);
  
  if (!category) {
    renderCategories();
    return;
  }

  triggerContentAnimation();

  // Agrupa tópicos por grupo
  const groups = category.topics.reduce((acc, topic) => {
    const groupName = topic.group || 'Geral';
    if (!acc[groupName]) acc[groupName] = [];
    acc[groupName].push(topic);
    return acc;
  }, {});

  const groupNames = Object.keys(groups);

  // HTML dos grupos de tópicos
  const topicsHTML = Object.entries(groups).map(([groupName, topics]) => `
    <div class="article-group" id="group-${groupName.replace(/\s+/g, '-').toLowerCase()}">
      <h3 class="article-group__title">${groupName}</h3>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        ${topics.map(topic => `
          <div onclick="renderArticle('${category.id}', '${topic.id}')" class="card-link" role="button" aria-label="Abrir artigo ${topic.title}">
            <h3 class="card-link__title">${topic.title}</h3>
            ${topic.description ? `<p class="card-link__description">${topic.description}</p>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // HTML dos links do menu de grupos
  const groupLinksHTML = groupNames.map(name =>
    `<div onclick="scrollToGroup('${name.replace(/\s+/g, '-').toLowerCase()}'); this.closest('.group-filter-menu').classList.remove('visible');" 
      class="group-filter-item" role="button" aria-label="Ir para grupo ${name}">
      ${name}
    </div>`
  ).join('');

  // Renderiza a página de tópicos
  DOM.app.innerHTML = `
    <div class="breadcrumb">
      <span onclick="renderCategories()" class="breadcrumb__item" role="button" aria-label="Voltar para início">Início</span>
      <span class="breadcrumb__separator">/</span>
      <span class="breadcrumb__current">${category.title}</span>
    </div>
    
    <div class="flex justify-between items-start mt-4">
      <h1 class="text-4xl font-bold">${category.title}</h1>
      
      ${groupNames.length > 1 ? `
        <div class="group-filter-container">
          <button class="group-filter-btn" aria-label="Filtrar grupos">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div class="group-filter-menu">
            <div class="group-filter-menu__header">GRUPOS</div>
            ${groupLinksHTML}
          </div>
        </div>
      ` : ''}
    </div>
    
    <div class="mt-8">
      ${category.topics.length === 0 
        ? `<p class="opacity-70">Nenhum artigo encontrado.</p>` 
        : topicsHTML}
    </div>
  `;

  updateScroll();
  renderSidebar();
  manageFloatingButton('create');
}

/**
 * Renderiza um artigo específico
 * @param {string} categoryId - ID da categoria
 * @param {string} topicId - ID do tópico
 */
function renderArticle(categoryId, topicId) {
  const category = forumData.find(c => c.id === categoryId);
  const topic = category?.topics.find(t => t.id === topicId);
  
  if (!topic) {
    renderCategories();
    return;
  }

  state.currentCategory = categoryId;
  manageFloatingButton('destroy');
  triggerContentAnimation();

  DOM.app.innerHTML = `
    <div class="breadcrumb">
      <span onclick="renderCategories()" class="breadcrumb__item" role="button" aria-label="Voltar para início">Início</span>
      <span class="breadcrumb__separator">/</span>
      <span onclick="renderTopics('${category.id}')" class="breadcrumb__item" role="button" aria-label="Voltar para ${category.title}">${category.title}</span>
      <span class="breadcrumb__separator">/</span>
      <span class="breadcrumb__current">${topic.title}</span>
    </div>
    
    <div class="article-content mt-8">
      <h1>${topic.title}</h1>
      ${topic.description ? `<p class="text-xl mt-4 opacity-80">${topic.description}</p>` : ''}
      <hr>
      <div>${topic.content}</div>
    </div>
  `;

  addCopyButtons();
  updateScroll();
  renderSidebar();
}

/**
 * Renderiza a sidebar com as categorias
 */
function renderSidebar() {
  DOM.sidebarNav.innerHTML = forumData.map(category => `
    <div onclick="renderTopics('${category.id}')" class="sidebar__nav-link" role="button" aria-label="Abrir categoria ${category.title}">
      <div class="sidebar__nav-icon">${category.icon || ''}</div>
      <p>${category.title}</p>
    </div>
  `).join('');
}

// ==============================================
// FUNÇÕES DE BUSCA
// ==============================================

/**
 * Manipula o evento de busca
 * @param {Event} event - Evento de teclado
 */
function handleSearch(event) {
  if (event.key === 'Enter') {
    performSearch(event.target.value.trim());
  } else if (!event.target.value.trim() && document.activeElement === DOM.searchInput) {
    if (state.currentCategory) {
      renderTopics(state.currentCategory);
    } else {
      renderCategories();
    }
  }
}

/**
 * Executa a busca com o termo fornecido
 * @param {string} query - Termo de busca
 */
function performSearch(query) {
  if (query === '%') {
    if (state.searchScope === 'all') {
      renderCategories();
    } else {
      renderTopics(state.searchScope);
    }
    return;
  }

  if (!query) return;

  const lowerCaseQuery = query.toLowerCase();
  const searchPool = state.searchScope === 'all' 
    ? forumData 
    : forumData.filter(c => c.id === state.searchScope);

  const results = searchPool.flatMap(category => 
    category.topics.filter(topic => {
      const contentText = topic.content.replace(/<[^>]*>/g, ' ');
      const fullText = `${category.title} ${topic.title} ${topic.description || ''} ${topic.group || ''} ${contentText}`.toLowerCase();
      return fullText.includes(lowerCaseQuery);
    }).map(topic => ({
      ...topic,
      categoryId: category.id,
      categoryTitle: category.title
    }))
  );

  renderSearchResults(results, query);
}

/**
 * Renderiza os resultados da busca
 * @param {Array} results - Array de resultados
 * @param {string} query - Termo de busca
 */
function renderSearchResults(results, query) {
  triggerContentAnimation();
  manageFloatingButton('destroy');
  
  const queryRegex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  
  const resultsHTML = results.map(item => `
    <div onclick="renderArticle('${item.categoryId}', '${item.id}')" class="card-link" role="button" aria-label="Abrir artigo ${item.title}">
      <p class="text-sm font-semibold opacity-60">${item.categoryTitle.replace(queryRegex, `<mark>$1</mark>`)}</p>
      <h3 class="text-lg font-semibold mt-1">${item.title.replace(queryRegex, `<mark>$1</mark>`)}</h3>
      ${item.description ? `<p class="text-sm mt-2 opacity-70">${item.description.replace(queryRegex, `<mark>$1</mark>`)}</p>` : ''}
    </div>
  `).join('');

  DOM.app.innerHTML = `
    <div>
      <h1 class="text-3xl font-bold mb-4">Resultados para: <span class="opacity-70">"${query}"</span></h1>
      <p class="text-sm opacity-70 mb-6">${results.length} resultado(s) encontrado(s).</p>
      
      ${results.length === 0 
        ? `<p class="opacity-70">Nenhum resultado. Tente uma busca diferente ou altere o filtro de módulo.</p>` 
        : `<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">${resultsHTML}</div>`}
    </div>
  `;
  
  updateScroll();
}

// ==============================================
// FUNÇÕES DO MENU DE FILTRO
// ==============================================

/**
 * Alterna a visibilidade do menu de filtro
 * @param {boolean} [forceState] - Força um estado específico (opcional)
 */
function toggleFilterMenu(forceState) {
  const isVisible = DOM.filterMenu.classList.contains('visible');
  const newState = forceState !== undefined ? forceState : !isVisible;
  
  DOM.filterMenu.classList.toggle('visible', newState);
}

/**
 * Renderiza os itens do menu de filtro
 * @param {string} [filterText] - Texto para filtrar os itens (opcional)
 */
function renderFilterMenuItems(filterText = '') {
  const lowerFilterText = filterText.toLowerCase();
  const allModules = [
    { id: 'all', title: 'Todos os Módulos', icon: ICONS.search },
    ...forumData
  ];
  
  const filteredModules = allModules.filter(module => 
    module.title.toLowerCase().includes(lowerFilterText)
  );

  DOM.filterMenuList.innerHTML = filteredModules.map(module => `
    <div onclick="setSearchScope('${module.id}')" 
         class="search-filter-menu__item ${state.searchScope === module.id ? 'active' : ''}"
         role="button" 
         aria-label="Filtrar por ${module.title}">
      <div class="search-filter-menu__item-icon">${module.icon}</div>
      <span>${module.title}</span>
    </div>
  `).join('');
}

/**
 * Define o escopo da busca
 * @param {string} scopeId - ID do escopo ('all' ou ID da categoria)
 */
function setSearchScope(scopeId) {
  state.searchScope = scopeId;
  const selectedModule = forumData.find(m => m.id === scopeId);
  
  if (selectedModule) {
    DOM.filterButton.innerHTML = `${selectedModule.icon} <span>${selectedModule.title}</span>`;
  } else {
    DOM.filterButton.innerHTML = `${ICONS.search} <span>Todos</span>`;
  }
  
  renderFilterMenuItems(DOM.filterMenuInput.value);
  toggleFilterMenu(false);
  DOM.searchInput.focus();
  
  if (DOM.searchInput.value.trim()) {
    performSearch(DOM.searchInput.value.trim());
  }
}

// ==============================================
// FUNÇÕES DE INTERFACE
// ==============================================

/**
 * Adiciona botões de copiar em blocos de código
 */
function addCopyButtons() {
  document.querySelectorAll('pre:not(:has(.copy-button))').forEach(pre => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copiar';
    button.ariaLabel = 'Copiar código';
    
    button.onclick = () => {
      const code = pre.querySelector('code')?.textContent || pre.textContent;
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copiado!';
        setTimeout(() => button.textContent = 'Copiar', 2000);
      });
    };
    
    pre.appendChild(button);
  });
}

/**
 * Gerencia o botão flutuante de filtro
 * @param {'create' | 'destroy'} action - Ação a ser executada
 */
function manageFloatingButton(action) {
  const existingButton = document.getElementById('floating-group-filter');
  
  if (existingButton) {
    existingButton.remove();
  }
  
  if (action === 'create') {
    const buttonInApp = DOM.app.querySelector('.group-filter-container');
    
    if (buttonInApp) {
      const floatingButton = buttonInApp.cloneNode(true);
      floatingButton.id = 'floating-group-filter';
      floatingButton.classList.add('floating-group-filter');
      document.body.appendChild(floatingButton);
      
      const menu = floatingButton.querySelector('.group-filter-menu');
      const btn = floatingButton.querySelector('.group-filter-btn');
      
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('visible');
      });
      
      document.addEventListener('click', (e) => {
        if (!floatingButton.contains(e.target)) {
          menu.classList.remove('visible');
        }
      });
      
      buttonInApp.style.display = 'none';
    }
  }
}

/**
 * Define o tema da aplicação
 * @param {boolean} isDark - Se o tema deve ser escuro
 */
function setTheme(isDark) {
  state.isDarkMode = isDark;
  document.body.classList.toggle('dark-mode', isDark);
  DOM.themeToggleBtn.setAttribute('aria-pressed', isDark);
  DOM.themeToggleBtn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  applyGlassEffect();
}

/**
 * Rola a página até um grupo específico
 * @param {string} groupId - ID do grupo (sem o prefixo 'group-')
 */
function scrollToGroup(groupId) {
  const element = document.getElementById(`group-${groupId}`);
  
  if (element && state.scrollInstance) {
    state.scrollInstance.scrollTo(element, {
      offset: -20,
      duration: 600
    });
  }
}

// ==============================================
// INICIALIZAÇÃO
// ==============================================

/**
 * Inicializa a aplicação
 */
function initApp() {
  // Configura o scroll suave
  initSmoothScroll();
  
  // Renderiza a página inicial
  renderCategories();
  
  // Configura o escopo padrão da busca
  setSearchScope('all');
  
  // Configura o input do menu de filtro
  const filterMenuInputWrapper = document.createElement('div');
  filterMenuInputWrapper.className = 'filter-menu-input-wrapper';
  filterMenuInputWrapper.innerHTML = ICONS.search;
  DOM.filterMenuInput.parentNode.insertBefore(filterMenuInputWrapper, DOM.filterMenuInput);
  filterMenuInputWrapper.appendChild(DOM.filterMenuInput);
  
  // Renderiza os itens do menu de filtro
  renderFilterMenuItems();
  
  // Event listeners
  DOM.filterButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFilterMenu();
  });
  
  DOM.filterMenuInput.addEventListener('input', () => {
    renderFilterMenuItems(DOM.filterMenuInput.value);
  });
  
  document.addEventListener('click', (e) => {
    if (!DOM.filterMenu.contains(e.target) && !DOM.filterButton.contains(e.target)) {
      toggleFilterMenu(false);
    }
  });
  
  DOM.themeToggleBtn.addEventListener('click', () => {
    setTheme(!state.isDarkMode);
  });
  
  // Verifica o tema salvo ou preferido do sistema
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);
  
  // Aplica o efeito glass inicial
  applyGlassEffect();
}

// Exporta funções para o escopo global
window.renderCategories = renderCategories;
window.renderTopics = renderTopics;
window.renderArticle = renderArticle;
window.handleSearch = handleSearch;
window.setSearchScope = setSearchScope;
window.scrollToGroup = scrollToGroup;

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initApp);