// --- Constantes Globais ---
const app = document.getElementById('app');
const sidebarNav = document.getElementById('sidebar-nav');
const searchInput = document.getElementById('search-input');
const themeToggleBtn = document.getElementById('theme-toggle');
const filterButton = document.getElementById('search-filter-button');
const filterMenu = document.getElementById('search-filter-menu');
const filterMenuInput = document.getElementById('filter-menu-input');
const filterMenuList = document.getElementById('filter-menu-list');

// --- Variáveis de Estado ---
let currentCategory = null;
let scrollInstance = null;
let searchScope = 'all'; 

// --- Ícones ---
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>`;

// --- Funções Auxiliares ---
function triggerAnimation() {
  app.classList.remove('animate-in');
  void app.offsetWidth;
  app.classList.add('animate-in');
}

// CORREÇÃO DE ANIMAÇÃO/RELOAD: A instância de scroll é criada apenas uma vez.
function initSmoothScroll() {
  if (!scrollInstance) {
    scrollInstance = new LocomotiveScroll({ 
      el: document.querySelector('#content-wrapper'),
      smooth: true 
    });
  }
}

function updateScroll() {
  setTimeout(() => {
    scrollInstance?.update();
  }, 150); // Aumentado o delay para garantir a renderização completa
}

// CORREÇÃO DE SOBREPOSIÇÃO: Nova função para ajustar dinamicamente o padding
function updateSearchInputPadding() {
    const buttonWidth = filterButton.offsetWidth;
    // Adiciona 10px de margem para o texto não ficar colado no botão
    searchInput.style.paddingLeft = `${buttonWidth + 10}px`;
}

// --- Funções de Renderização ---
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

// --- Lógica de Busca (sem alterações) ---
function handleSearch(event) {
  const query = event.target.value.trim();
  if (event.key === 'Enter') {
    performSearch(query);
  } else if (!query && document.activeElement === searchInput) {
    if (currentCategory) renderTopics(currentCategory);
    else renderCategories();
  }
}
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

// --- Funções do Menu de Filtro ---
function toggleFilterMenu(forceState) {
    const isVisible = filterMenu.classList.contains('visible');
    filterMenu.classList.toggle('visible', forceState !== undefined ? forceState : !isVisible);
}
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
    updateSearchInputPadding(); // <-- Chamada da nova função aqui
    if(searchInput.value.trim()) {
        performSearch(searchInput.value.trim());
    }
}

// --- Funções da Interface ---
function renderSidebar() {
  sidebarNav.innerHTML = forumData.map(category => `
    <a onclick="renderTopics('${category.id}')" class="sidebar-nav-link flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer group">
      <div class="w-6 h-6 flex-shrink-0 module-icon">${category.icon || ''}</div>
      <p class="text-sm font-medium leading-normal">${category.title}</p>
    </a>`).join('');
}
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
function setTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    themeToggleBtn.innerHTML = isDark ? sunIcon : moonIcon;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  renderCategories();
  
  setSearchScope('all');
  renderFilterMenuItems();
  
  filterButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFilterMenu();
  });
  filterMenuInput.addEventListener('keyup', () => renderFilterMenuItems(filterMenuInput.value));
  document.addEventListener('click', (e) => {
      if (!filterMenu.contains(e.target) && !filterButton.contains(e.target)) {
          toggleFilterMenu(false);
      }
  });

  themeToggleBtn.addEventListener('click', () => setTheme(!document.body.classList.contains('dark-mode')));
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);
});