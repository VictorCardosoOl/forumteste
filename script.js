/**
 * Script principal para a Base de Conhecimento interativa.
 * Organizado para clareza, estabilidade e manutenção.
 */

// Envolve todo o script em uma função para proteger o escopo e garantir que o código rode após o carregamento da página.
(function() {
  // ===================================================================
  // --- ELEMENTOS DO DOM ---
  // Captura de todos os elementos HTML necessários no início.
  // ===================================================================
  const app = document.getElementById('app');
  const sidebarNav = document.getElementById('sidebar-nav');
  const searchInput = document.getElementById('search-input');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const filterButton = document.getElementById('search-filter-button');
  const filterMenu = document.getElementById('search-filter-menu');
  const filterMenuInput = document.getElementById('filter-menu-input');
  const filterMenuList = document.getElementById('filter-menu-list');
  const scrollContainer = document.querySelector('#content-wrapper');

  // ===================================================================
  // --- ESTADO DA APLICAÇÃO ---
  // Variáveis que controlam o estado atual da interface.
  // ===================================================================
  let currentCategory = null;
  let scrollInstance = null;
  let searchScope = 'all';

  // --- Ícones (Apenas os necessários para o JS) ---
  const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>`;

  // ===================================================================
  // --- FUNÇÕES DE UTILIDADE E ANIMAÇÃO ---
  // ===================================================================

  /** Dispara a animação de fade-in no container principal. */
  function triggerAnimation() {
    if (!app) return;
    app.classList.remove('animate-in');
    void app.offsetWidth; // Força um reflow para reiniciar a animação
    app.classList.add('animate-in');
  }

  /** Inicializa a biblioteca de scroll suave (Locomotive Scroll). Roda apenas uma vez. */
  function initSmoothScroll() {
    if (scrollContainer && !scrollInstance) {
      scrollInstance = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true
      });
    }
  }

  /** Atualiza as dimensões do scroll. Essencial após mudanças de conteúdo. */
  function updateScroll() {
    // Um pequeno delay garante que o DOM foi renderizado antes de atualizar o scroll.
    setTimeout(() => {
      scrollInstance?.update();
    }, 150);
  }

  /** Ajusta dinamicamente o padding esquerdo do campo de busca para não sobrepor o botão de filtro. */
  function updateSearchInputPadding() {
    if (!searchInput || !filterButton) return;
    const buttonWidth = filterButton.offsetWidth;
    searchInput.style.paddingLeft = `${buttonWidth + 10}px`;
  }

  // ===================================================================
  // --- LÓGICA DE TEMA (CLARO/ESCURO) ---
  // ===================================================================

  /**
   * Aplica o tema (claro ou escuro) na aplicação.
   * @param {boolean} isDark - True se o tema a ser aplicado é o escuro.
   */
  function setTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // ===================================================================
  // --- FUNÇÕES DE RENDERIZAÇÃO ---
  // Responsáveis por desenhar as diferentes telas da aplicação.
  // ===================================================================

  /** Renderiza a tela inicial com todos os módulos. */
  function renderCategories() {
    currentCategory = null;
    triggerAnimation();
    app.innerHTML = `
      <div class="text-center">
        <h1 class="text-4xl font-bold">Base de Conhecimento</h1>
        <p class="mt-2 text-lg max-w-2xl mx-auto">Navegue pelos módulos para encontrar guias, soluções e respostas.</p>
      </div>
      <div class="module-grid">
        ${forumData.map(category => `
          <a onclick="renderTopics('${category.id}')" class="card-link flex cursor-pointer flex-col gap-4 rounded-xl p-5 group">
            <div class="w-8 h-8 module-icon">${category.icon}</div>
            <div class="flex flex-col gap-1 mt-1">
              <h3 class="text-base font-semibold">${category.title}</h3>
              <p class="text-sm font-normal">${category.description}</p>
            </div>
          </a>
        `).join('')}
      </div>
    `;
    updateScroll();
    renderSidebar();
  }

  /** Renderiza a lista de tópicos de uma categoria específica. */
  function renderTopics(categoryId) {
    currentCategory = categoryId;
    const category = forumData.find(c => c.id === categoryId);
    if (!category) return renderCategories();

    triggerAnimation();
    const groups = category.topics.reduce((acc, topic) => {
      const groupName = topic.group || 'Geral';
      if (!acc[groupName]) acc[groupName] = [];
      acc[groupName].push(topic);
      return acc;
    }, {});

    const topicsHTML = Object.entries(groups).map(([groupName, topics]) => `
      <div class="article-group">
        <h3 class="article-group-title">${groupName}</h3>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
          ${topics.map(topic => `
            <a onclick="renderArticle('${category.id}', '${topic.id}')" class="card-link flex cursor-pointer flex-col gap-3 rounded-xl p-5 group">
              <h3 class="text-base font-semibold">${topic.title}</h3>
              <p class="text-sm font-normal">${topic.description || ''}</p>
            </a>
          `).join('')}
        </div>
      </div>
    `).join('');

    app.innerHTML = `
      <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
        <a onclick="renderCategories()" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
        <span class="opacity-50">/</span>
        <span class="font-semibold">${category.title}</span>
      </div>
      <div class="mt-4"><h1 class="text-4xl font-bold">${category.title}</h1></div>
      <div class="mt-8">${category.topics.length === 0 ? `<p class="opacity-70">Nenhum artigo encontrado.</p>` : topicsHTML}</div>`;

    updateScroll();
    renderSidebar();
  }

  /** Renderiza o conteúdo completo de um artigo. */
  function renderArticle(categoryId, topicId) {
    const category = forumData.find(c => c.id === categoryId);
    const topic = category?.topics.find(t => t.id === topicId);
    if (!topic) return renderCategories();

    currentCategory = categoryId;
    triggerAnimation();
    app.innerHTML = `
      <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
        <a onclick="renderCategories()" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
        <span class="opacity-50">/</span>
        <a onclick="renderTopics('${category.id}')" class="cursor-pointer opacity-70 hover:opacity-100">${category.title}</a>
        <span class="opacity-50">/</span>
        <span class="font-semibold">${topic.title}</span>
      </div>
      <div class="article-content mt-8">
          <h1>${topic.title}</h1>
          ${topic.description ? `<p class="text-xl mt-4 opacity-80">${topic.description}</p>` : ''}
          <hr class="my-8 opacity-20">
          <div>${topic.content}</div>
      </div>
    `;
    addCopyButtons();
    updateScroll();
    renderSidebar();
  }

  /** Renderiza a navegação da barra lateral. */
  function renderSidebar() {
    sidebarNav.innerHTML = forumData.map(category => `
      <a onclick="renderTopics('${category.id}')" class="sidebar-nav-link flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer group">
        <div class="w-6 h-6 flex-shrink-0 module-icon">${category.icon || ''}</div>
        <p class="text-sm font-medium leading-normal">${category.title}</p>
      </a>`).join('');
  }

  /** Adiciona botões de "Copiar" aos blocos de código. */
  function addCopyButtons() {
    document.querySelectorAll('pre:not(:has(.copy-button))').forEach(pre => {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copiar';
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


  // ===================================================================
  // --- LÓGICA DE BUSCA ---
  // ===================================================================

  /** Lida com a entrada de texto no campo de busca. */
  function handleSearch(event) {
    const query = event.target.value.trim();
    if (event.key === 'Enter') {
      performSearch(query);
    } else if (!query && document.activeElement === searchInput) {
      if (currentCategory) renderTopics(currentCategory);
      else renderCategories();
    }
  }

  /** Executa a busca com base na query e no escopo selecionado. */
  function performSearch(query) {
    if (query === '%') {
      if (searchScope === 'all') { renderCategories(); } else { renderTopics(searchScope); }
      return;
    }
    if (!query) return;

    const lowerCaseQuery = query.toLowerCase();
    const searchPool = searchScope === 'all' 
      ? forumData 
      : forumData.filter(c => c.id === searchScope);
    
    const results = [];
    searchPool.forEach(category => {
      category.topics.forEach(topic => {
        const fullText = `${topic.title} ${topic.description} ${topic.content}`.toLowerCase();
        if (fullText.includes(lowerCaseQuery)) {
          results.push({ ...topic, categoryId: category.id, categoryTitle: category.title });
        }
      });
    });
    renderSearchResults(results, query);
  }

  /** Renderiza a tela com os resultados da busca. */
  function renderSearchResults(results, query) {
    triggerAnimation();
    const queryRegex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const resultsHTML = results.map(item => `
      <a onclick="renderArticle('${item.categoryId}', '${item.id}')" class="card-link block cursor-pointer p-5 rounded-xl group">
        <p class="text-sm font-semibold opacity-60 group-hover:opacity-100">${item.categoryTitle.replace(queryRegex, `<mark>$1</mark>`)}</p>
        <h3 class="text-lg font-semibold mt-1">${item.title.replace(queryRegex, `<mark>$1</mark>`)}</h3>
        <p class="text-sm mt-2 opacity-70">${(item.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...').replace(queryRegex, `<mark>$1</mark>`)}</p>
      </a>`).join('');

    app.innerHTML = `
      <div>
        <h1 class="text-3xl font-bold mb-4">Resultados para: <span class="opacity-70">"${query}"</span></h1>
        <p class="text-sm opacity-70 mb-6">${results.length} resultado(s) encontrado(s).</p>
        ${results.length === 0 
            ? `<p class="opacity-70">Nenhum resultado. Tente uma busca diferente ou altere o filtro de módulo.</p>`
            : `<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">${resultsHTML}</div>`
        }
      </div>`;
    updateScroll();
  }

  /** Mostra ou esconde o menu de filtros de busca. */
  function toggleFilterMenu(forceState) {
    const isVisible = filterMenu.classList.contains('visible');
    filterMenu.classList.toggle('visible', forceState !== undefined ? forceState : !isVisible);
  }
  
  /** Renderiza os itens dentro do menu de filtros de busca. */
  function renderFilterMenuItems(filterText = '') {
    const lowerFilterText = filterText.toLowerCase();
    const allModules = [{ id: 'all', title: 'Todos os Módulos', icon: searchIcon }, ...forumData];
    const filteredModules = allModules.filter(module => module.title.toLowerCase().includes(lowerFilterText));

    filterMenuList.innerHTML = filteredModules.map(module => `
        <div class="filter-menu-item ${searchScope === module.id ? 'active' : ''}" onclick="setSearchScope('${module.id}')">
            <div class="item-icon">${module.icon}</div>
            <span>${module.title}</span>
        </div>`).join('');
  }

  /** Define o escopo da busca (qual módulo pesquisar). */
  function setSearchScope(scopeId) {
    searchScope = scopeId;
    const selectedModule = forumData.find(m => m.id === scopeId);

    if (selectedModule) {
      filterButton.innerHTML = `${selectedModule.icon} <span>${selectedModule.title}</span>`;
    } else {
      filterButton.innerHTML = `${searchIcon} <span>Todos</span>`;
    }

    renderFilterMenuItems(filterMenuInput.value);
    toggleFilterMenu(false);
    searchInput.focus();
    updateSearchInputPadding();
    
    if (searchInput.value.trim()) {
      performSearch(searchInput.value.trim());
    }
  }


  // ===================================================================
  // --- INICIALIZAÇÃO ---
  // Função principal que amarra todos os eventos e configurações.
  // ===================================================================
  function init() {
    // Garante que todos os elementos do DOM existem antes de adicionar eventos.
    if (!app || !sidebarNav || !searchInput || !themeToggleBtn || !filterButton || !filterMenu) {
      console.error("Erro Crítico: Um ou mais elementos essenciais do DOM não foram encontrados. Verifique os IDs no seu index.html.");
      return;
    }

    // 1. Configurar o tema inicial
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);
    
    // 2. Adicionar o event listener para o botão de tema
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.body.classList.contains('dark-mode');
      setTheme(!isCurrentlyDark);
    });

    // 3. Configurar a busca e seus filtros
    setSearchScope('all');
    renderFilterMenuItems();
    filterButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFilterMenu();
    });
    filterMenuInput.addEventListener('keyup', () => renderFilterMenuItems(filterMenuInput.value));
    
    // 4. Configurar o scroll suave
    initSmoothScroll();
    
    // 5. Renderizar a página inicial
    renderCategories();

    // 6. Configurar eventos globais
    document.addEventListener('click', () => toggleFilterMenu(false));
  }

  // ===================================================================
  // --- PONTO DE ENTRADA ---
  // Garante que o script só roda quando o DOM está pronto.
  // ===================================================================
  document.addEventListener('DOMContentLoaded', init);

  // Expor funções globais que são chamadas pelo HTML (onclick)
  window.renderCategories = renderCategories;
  window.renderTopics = renderTopics;
  window.renderArticle = renderArticle;
  window.setSearchScope = setSearchScope;
  window.handleSearch = handleSearch;

})();