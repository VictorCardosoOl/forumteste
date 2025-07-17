// Constantes globais
const app = document.getElementById('app');
const sidebarNav = document.getElementById('sidebar-nav');
const searchInput = document.getElementById('search-input');
const searchFiltersContainer = document.getElementById('search-filters-container');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIconContainer = document.getElementById('theme-icon-container');
let currentCategory = null;
let scrollInstance = null;
let searchScope = 'all'; // 'all' ou o id de uma categoria

// Ícones de Sol e Lua para o botão de tema
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

// Função para disparar animação de transição
function triggerAnimation() {
  app.classList.remove('animate-in');
  void app.offsetWidth;
  app.classList.add('animate-in');
}

// Inicializa e atualiza o Locomotive Scroll
function initSmoothScroll() {
  if (scrollInstance) scrollInstance.destroy();
  scrollInstance = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
}
function updateScroll() {
  if (scrollInstance) {
    setTimeout(() => scrollInstance.update(), 50);
  }
}

/**
 * Renderiza a página inicial com os módulos em uma grade
 */
function renderCategories() {
  currentCategory = null;
  triggerAnimation();
  
  app.innerHTML = `
    <div class="text-center">
      <h1 class="text-4xl font-bold">Base de Conhecimento</h1>
      <p class="mt-2 text-lg max-w-2xl mx-auto">Navegue pelos módulos para encontrar guias, soluções e respostas para suas dúvidas.</p>
    </div>
    <div class="module-grid">
      ${forumData.map(category => `
        <a onclick="renderTopics('${category.id}')" 
           class="card-link flex cursor-pointer flex-1 gap-4 rounded-xl p-5 flex-col group">
          <div class="w-7 h-7">${category.icon}</div>
          <div class="flex flex-col gap-1 mt-2">
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

/**
 * Renderiza os tópicos de uma categoria com agrupamento
 */
function renderTopics(categoryId) {
  currentCategory = categoryId;
  const category = forumData.find(c => c.id === categoryId);
  if (!category) { renderCategories(); return; }

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
      <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
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
    <div class="mt-8">
      ${category.topics.length === 0 ? `<p class="opacity-70">Nenhum artigo encontrado.</p>` : topicsHTML}
    </div>
  `;
  
  updateScroll();
  renderSidebar();
}

/**
 * Renderiza um artigo completo
 */
function renderArticle(categoryId, topicId) {
  const category = forumData.find(c => c.id === categoryId);
  const topic = category ? category.topics.find(t => t.id === topicId) : null;
  if (!topic) { renderCategories(); return; }

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

/**
 * Sistema de busca
 */
function handleSearch(event) {
  const query = event.target.value.trim();
  if (event.key === 'Enter' && query) {
    performSearch(query);
  }
  if (!query) {
    if (currentCategory) {
      renderTopics(currentCategory);
    } else {
      renderCategories();
    }
  }
}

function performSearch(query = searchInput.value.trim()) {
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
    </a>
  `).join('');

  app.innerHTML = `
    <div>
      <h1 class="text-3xl font-bold mb-4">Resultados para: <span class="opacity-70">"${query}"</span></h1>
      <p class="text-sm opacity-70 mb-6">${results.length} resultado(s) encontrado(s).</p>
      ${results.length === 0 
          ? `<p class="opacity-70">Nenhum resultado. Tente uma busca diferente ou altere o filtro de módulo.</p>`
          : `<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">${resultsHTML}</div>`
      }
    </div>
  `;
  updateScroll();
}

/**
 * NOVO: Filtros de Busca
 */
function renderSearchFilters() {
    const filters = [
        { id: 'all', title: 'Todos' },
        ...forumData.map(c => ({ id: c.id, title: c.title }))
    ];
    
    searchFiltersContainer.innerHTML = filters.map(filter => `
        <button class="filter-btn ${searchScope === filter.id ? 'active' : ''}" onclick="setSearchScope('${filter.id}', this)">
            ${filter.title}
        </button>
    `).join('');
}

function setSearchScope(scopeId, element) {
    searchScope = scopeId;
    // Atualiza a classe 'active' em todos os botões
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    // Se já houver uma pesquisa, executa novamente com o novo escopo
    if (searchInput.value.trim()) {
        performSearch();
    }
}

function toggleSearchFilters(isVisible) {
    if (isVisible) {
        searchFiltersContainer.classList.add('visible');
    } else {
        // Pequeno delay para permitir o clique em um filtro antes de esconder
        setTimeout(() => {
            if (document.activeElement !== searchInput) {
                searchFiltersContainer.classList.remove('visible');
            }
        }, 200);
    }
}


/**
 * Outras Funções
 */
function addCopyButtons() {
  document.querySelectorAll('pre').forEach(pre => {
    if (pre.querySelector('.copy-button')) return;
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

function renderSidebar() {
  sidebarNav.innerHTML = forumData.map(category => `
    <a onclick="renderTopics('${category.id}')" class="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer group ${currentCategory === category.id ? 'bg-gray-100 dark:bg-gray-800' : ''}">
      <div class="w-6 h-6 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">${category.icon || ''}</div>
      <p class="text-sm font-medium leading-normal opacity-70 group-hover:opacity-100 transition-opacity">${category.title}</p>
    </a>
  `).join('');
}

/**
 * NOVO: Sistema de tema claro/escuro aprimorado
 */
function setTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    themeIconContainer.innerHTML = isDark ? sunIcon : moonIcon;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  renderCategories();
  renderSearchFilters();
  
  // Configura o botão de alternar tema
  themeToggleBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark);
  });
  
  // Define o tema inicial com base no localStorage ou preferência do sistema
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);
});