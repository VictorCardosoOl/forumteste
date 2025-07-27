import { forumData } from './data/index.js';
import { initSidebar } from './sidebar.js';
import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js';

// Exporte as funções para o escopo global
window.renderCategories = renderCategories;
window.renderTopics = renderTopics;
window.renderArticle = renderArticle;
window.handleSearch = handleSearch;
window.setSearchScope = setSearchScope;
window.scrollToGroup = scrollToGroup;
window.navigateArticle = navigateArticle;

// Constantes Globais
const app = document.getElementById('app');
const sidebarNav = document.getElementById('sidebar-nav');
const searchInput = document.getElementById('search-input');
const themeToggleBtn = document.getElementById('theme-toggle');
const filterButton = document.getElementById('search-filter-button');
const filterMenu = document.getElementById('search-filter-menu');
const filterMenuInput = document.getElementById('filter-menu-input');
const filterMenuList = document.getElementById('filter-menu-list');
const sidebar = document.getElementById('sidebar');

// Ícones
const icons = {
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>`
};

// Configuração da busca fuzzy
const searchOptions = {
  keys: [
    { name: 'title', weight: 0.6 },
    { name: 'description', weight: 0.3 },
    { name: 'group', weight: 0.2 },
    { name: 'contentText', weight: 0.1 }
  ],
  includeMatches: true,
  threshold: 0.4,
  ignoreLocation: true,
  minMatchCharLength: 2,
  shouldSort: true
};

// Estado da aplicação
const state = {
  currentCategory: null,
  scrollInstance: null,
  searchScope: 'all',
  currentArticleIndex: 0,
  currentGroupArticles: [],
  fuseInstance: null
};

// Funções Auxiliares
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function triggerAnimation() {
  app.classList.remove('animate-in');
  void app.offsetWidth;
  app.classList.add('animate-in');
}

function initSmoothScroll() {
  if (state.scrollInstance) state.scrollInstance.destroy();
  state.scrollInstance = new LocomotiveScroll({
    el: document.querySelector('#content-wrapper'),
    smooth: true,
  });
}

function updateScroll() {
  setTimeout(() => state.scrollInstance?.update(), 50);
}

function updateSearchInputPadding() {
  const buttonWidth = filterButton.offsetWidth;
  searchInput.style.paddingLeft = `${buttonWidth + 10}px`;
}

function highlightMatchesWithIndices(text, indices) {
  if (!indices || indices.length === 0) return text;
  
  const sortedIndices = [...indices].sort((a, b) => b[0] - a[0]);
  
  let highlightedText = text;
  sortedIndices.forEach(([start, end]) => {
    const matchedText = text.substring(start, end + 1);
    highlightedText = highlightedText.substring(0, start) + 
                     `<mark>${matchedText}</mark>` + 
                     highlightedText.substring(end + 1);
  });
  
  return highlightedText;
}

function highlightMatches(text, query) {
  if (!query || !text) return text;
  
  const words = query.split(/\s+/).filter(w => w.length > 2);
  if (words.length === 0) return text;
  
  const regex = new RegExp(`(${words.join('|')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// Gerenciamento de Botões Flutuantes
function manageFloatingButton(action) {
  const existingFloatingButton = document.getElementById('floating-group-filter');
  if (existingFloatingButton) existingFloatingButton.remove();

  const existingNavButtons = document.querySelectorAll('.article-navigation');
  existingNavButtons.forEach(btn => btn.remove());

  if (action === 'create_group_filter') {
    const buttonInApp = app.querySelector('.group-filter-container');
    if (buttonInApp) {
      const floatingButton = buttonInApp.cloneNode(true);
      floatingButton.id = 'floating-group-filter';
      document.body.appendChild(floatingButton);
      const menu = floatingButton.querySelector('.group-filter-menu');
      floatingButton.addEventListener('mouseenter', () => menu.classList.add('visible'));
      floatingButton.addEventListener('mouseleave', () => menu.classList.remove('visible'));
      buttonInApp.style.display = 'none';
    }
  } else if (action === 'create_article_nav') {
    const prevButton = document.createElement('button');
    prevButton.className = 'article-navigation prev-button';
    prevButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`;
    prevButton.onclick = () => navigateArticle(-1);
    document.body.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.className = 'article-navigation next-button';
    nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`;
    nextButton.onclick = () => navigateArticle(1);
    document.body.appendChild(nextButton);
  }
}

// Funções de Renderização
function renderCategories() {
  state.currentCategory = null;
  manageFloatingButton('destroy');
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
  state.currentCategory = categoryId;
  const category = forumData.find(c => c.id === categoryId);
  if (!category) return renderCategories();

  manageFloatingButton('destroy');
  triggerAnimation();
  
  const groups = category.topics.reduce((acc, topic) => {
    const groupName = topic.group || 'Geral';
    if (!acc[groupName]) acc[groupName] = [];
    acc[groupName].push(topic);
    return acc;
  }, {});

  const groupNames = Object.keys(groups);

  const topicsHTML = Object.entries(groups).map(([groupName, topics]) => `
    <div class="article-group" id="group-${groupName.replace(/\s+/g, '-').toLowerCase()}">
      <h3 class="article-group-title">${groupName}</h3>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        ${topics.map(topic => `
          <a onclick="renderArticle('${category.id}', '${topic.id}')" class="card-link flex cursor-pointer flex-col gap-3 rounded-xl p-5 group">
            <h3 class="text-base font-semibold">${topic.title}</h3>
            <p class="text-sm font-normal">${topic.description || ''}</p>
            ${topic.tags ? `<div class="mt-2 flex flex-wrap gap-2">${topic.tags.slice(0, 3).map(tag => `<span class="text-xs px-2 py-1 rounded-full bg-opacity-20 bg-primary">${tag}</span>`).join('')}</div>` : ''}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');

  const groupLinksHTML = groupNames.map(name =>
    `<a onclick="scrollToGroup('${name.replace(/\s+/g, '-').toLowerCase()}'); this.closest('.group-filter-menu').classList.remove('visible');" 
       class="group-filter-item">${name}</a>`
  ).join('');

  app.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a onclick="renderCategories()" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
      <span class="opacity-50">/</span>
      <span class="font-semibold">${category.title}</span>
    </div>
    <div class="flex justify-between items-start mt-4">
      <h1 class="text-4xl font-bold">${category.title}</h1>
      ${groupNames.length > 1 ? `
        <div class="relative group-filter-container">
          <button class="group-filter-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div class="group-filter-menu">
            <div class="font-semibold text-xs px-3 py-2 opacity-60">GRUPOS</div>
            ${groupLinksHTML}
          </div>
        </div>
      ` : ''}
    </div>
    <div class="mt-8">${category.topics.length === 0 ? `<p class="opacity-70">Nenhum artigo encontrado.</p>` : topicsHTML}</div>`;

  updateScroll();
  renderSidebar();
  manageFloatingButton('create_group_filter');
}

function renderArticle(categoryId, topicId) {
  const category = forumData.find(c => c.id === categoryId);
  const topic = category?.topics.find(t => t.id === topicId);
  if (!topic) return renderCategories();

  state.currentCategory = categoryId;
  manageFloatingButton('create_article_nav');
  triggerAnimation();

  updateArticleNavigation(category, topicId);
  const relatedArticles = getRelatedArticles(topic, categoryId);
  
  app.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a onclick="renderCategories()" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
      <span class="opacity-50">/</span>
      <a onclick="renderTopics('${category.id}')" class="cursor-pointer opacity-70 hover:opacity-100">${category.title}</a>
      <span class="opacity-50">/</span>
      <span class="font-semibold">${topic.title}</span>
    </div>
    <div class="article-content mt-8 relative">
      <h1>${topic.title}</h1>
      ${topic.description ? `<p class="text-xl mt-4 opacity-80">${topic.description}</p>` : ''}
      <hr class="my-8 opacity-20">
      <div>${topic.content}</div>
      
      ${relatedArticles.length > 0 ? `
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-4">Veja Também</h2>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
          ${relatedArticles.map(article => `
            <a onclick="renderArticle('${article.categoryId}', '${article.id}')" 
               class="card-link flex cursor-pointer flex-col gap-3 rounded-xl p-5 group">
              <h3 class="text-base font-semibold">${article.title}</h3>
              <p class="text-sm font-normal">${article.description || ''}</p>
              ${article.tags ? `<div class="mt-2 flex flex-wrap gap-2">${article.tags.slice(0, 3).map(tag => `<span class="text-xs px-2 py-1 rounded-full bg-opacity-20 bg-primary">${tag}</span>`).join('')}</div>` : ''}
            </a>
          `).join('')}
        </div>
      </div>
      ` : ''}
    </div>
  `;
  
  addCopyButtons();
  updateScroll();
  renderSidebar();
}

function getRelatedArticles(currentTopic, currentCategoryId) {
  // 1. Verifica se há sugestões manuais
  if (currentTopic.manualSuggestions && currentTopic.manualSuggestions.length > 0) {
    const manualSuggestions = [];
    
    for (const suggestion of currentTopic.manualSuggestions) {
      const category = forumData.find(c => c.id === suggestion.categoryId);
      if (category) {
        const topic = category.topics.find(t => t.id === suggestion.topicId);
        if (topic) {
          manualSuggestions.push({
            ...topic,
            categoryId: category.id,
            categoryTitle: category.title
          });
        }
      }
    }
    
    return manualSuggestions.slice(0, 4);
  }

  // 2. Gera automaticamente por tags
  if (!currentTopic.tags || currentTopic.tags.length === 0) return [];

  const relatedArticles = [];
  const currentTags = currentTopic.tags;

  for (const category of forumData) {
    for (const topic of category.topics) {
      if (topic.id === currentTopic.id || !topic.tags || topic.tags.length === 0) continue;

      const commonTags = topic.tags.filter(tag => currentTags.includes(tag));
      const relevanceScore = commonTags.length;

      if (relevanceScore > 0) {
        relatedArticles.push({
          ...topic,
          categoryId: category.id,
          categoryTitle: category.title,
          relevanceScore
        });
      }
    }
  }

  relatedArticles.sort((a, b) => b.relevanceScore - a.relevanceScore);
  return relatedArticles.slice(0, 4);
}

function updateArticleNavigation(category, topicId) {
  const allModuleArticles = category.topics;
  const currentIndex = allModuleArticles.findIndex(t => t.id === topicId);
  if (currentIndex !== -1) {
    state.currentGroupArticles = allModuleArticles;
    state.currentArticleIndex = currentIndex;
  }
}

function navigateArticle(direction) {
  const newIndex = state.currentArticleIndex + direction;
  if (newIndex >= 0 && newIndex < state.currentGroupArticles.length) {
    const topic = state.currentGroupArticles[newIndex];
    renderArticle(state.currentCategory, topic.id);
  }
}

// Lógica de Busca Inteligente
function initializeFuse() {
  const searchPool = forumData.flatMap(category => 
    category.topics.map(topic => ({
      ...topic,
      categoryId: category.id,
      categoryTitle: category.title,
      contentText: topic.content.replace(/<[^>]*>/g, ' ')
    }))
  );
  
  state.fuseInstance = new Fuse(searchPool, searchOptions);
}

const debouncedSearch = debounce((query) => {
  if (query.length > 0) {
    performSearch(query);
  } else {
    if (state.currentCategory) {
      renderTopics(state.currentCategory);
    } else {
      renderCategories();
    }
  }
}, 250);

function handleSearch(query) {
  debouncedSearch(query.trim());
}

function performSearch(query) {
  if (!query || query.length < 2) {
    if (state.currentCategory) {
      renderTopics(state.currentCategory);
    } else {
      renderCategories();
    }
    return;
  }

  // Se não tiver uma instância Fuse, inicializa
  if (!state.fuseInstance) {
    initializeFuse();
  }

  // Aplica filtro de escopo se necessário
  let results;
  if (state.searchScope === 'all') {
    results = state.fuseInstance.search(query);
  } else {
    const filteredData = state.fuseInstance._docs.filter(
      item => item.categoryId === state.searchScope
    );
    const tempFuse = new Fuse(filteredData, searchOptions);
    results = tempFuse.search(query);
  }

  // Mapeia os resultados para o formato esperado
  const formattedResults = results.map(result => ({
    ...result.item,
    matches: result.matches
  }));

  renderSearchResults(formattedResults, query);
}

function renderSearchResults(results, query) {
  triggerAnimation();
  manageFloatingButton('destroy');

  const resultsHTML = results.map(item => {
    // Encontrar o melhor match para destacar no título
    const titleMatch = item.matches.find(m => m.key === 'title') || 
                      item.matches.find(m => m.key === 'description') || 
                      item.matches[0];
    
    // Extrair trecho do conteúdo mais relevante
    const contentMatch = item.matches.find(m => m.key === 'contentText');
    let contentSnippet = '';
    
    if (contentMatch) {
      const firstMatch = contentMatch.indices[0];
      const start = Math.max(0, firstMatch[0] - 20);
      const end = Math.min(item.contentText.length, firstMatch[1] + 20);
      contentSnippet = item.contentText.substring(start, end);
      
      // Destacar correspondências no snippet
      contentMatch.indices.forEach(([startIdx, endIdx]) => {
        const matchedText = contentSnippet.substring(
          Math.max(0, startIdx - start),
          Math.min(contentSnippet.length, endIdx - start + 1)
        );
        contentSnippet = contentSnippet.replace(
          matchedText, 
          `<mark>${matchedText}</mark>`
        );
      });
      
      if (start > 0) contentSnippet = '...' + contentSnippet;
      if (end < item.contentText.length) contentSnippet += '...';
    } else {
      contentSnippet = item.contentText.substring(0, 150) + '...';
    }

    return `
      <a onclick="renderArticle('${item.categoryId}', '${item.id}')" 
         class="card-link block cursor-pointer p-5 rounded-xl group hover:border-primary">
        <p class="text-sm font-semibold opacity-60 group-hover:opacity-100 mb-1">
          ${item.categoryTitle}
        </p>
        <h3 class="text-lg font-semibold">
          ${highlightMatchesWithIndices(item.title, titleMatch?.indices)}
        </h3>
        ${item.description ? `
          <p class="text-sm mt-2 opacity-70">
            ${highlightMatches(item.description, query)}
          </p>
        ` : ''}
        <p class="text-sm mt-2 opacity-70">
          ${contentSnippet}
        </p>
      </a>
    `;
  }).join('');

  app.innerHTML = `
    <div>
      <h1 class="text-3xl font-bold mb-4">Resultados para: <span class="opacity-70">"${query}"</span></h1>
      <p class="text-sm opacity-70 mb-6">${results.length} resultado(s) encontrado(s).</p>
      ${results.length === 0 ? `
        <div class="p-8 text-center">
          <p class="opacity-70 mb-4">Nenhum resultado encontrado.</p>
          <p class="text-sm opacity-50">Tente uma busca diferente ou altere o filtro de módulo.</p>
        </div>
      ` : `
        <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">${resultsHTML}</div>
      `}
    </div>`;

  updateScroll();
}

// Funções do Menu de Filtro
function toggleFilterMenu(forceState) {
  const isVisible = filterMenu.classList.contains('visible');
  filterMenu.classList.toggle('visible', forceState !== undefined ? forceState : !isVisible);
}

function renderFilterMenuItems(filterText = '') {
  const lowerFilterText = filterText.toLowerCase();
  const allModules = [{ id: 'all', title: 'Todos os Módulos', icon: icons.search }, ...forumData];
  const filteredModules = allModules.filter(module => module.title.toLowerCase().includes(lowerFilterText));
  
  filterMenuList.innerHTML = filteredModules.map(module => `
    <div class="filter-menu-item ${state.searchScope === module.id ? 'active' : ''}" 
         onclick="setSearchScope('${module.id}')">
      <div class="item-icon">${module.icon}</div>
      <span>${module.title}</span>
    </div>
  `).join('');
}

function setSearchScope(scopeId) {
  state.searchScope = scopeId;
  const selectedModule = forumData.find(m => m.id === scopeId);
  
  if (selectedModule) {
    filterButton.innerHTML = `${selectedModule.icon} <span>${selectedModule.title}</span>`;
  } else {
    filterButton.innerHTML = `${icons.search} <span>Todos</span>`;
  }
  
  renderFilterMenuItems(filterMenuInput.value);
  toggleFilterMenu(false);
  searchInput.focus();
  updateSearchInputPadding();
  
  if (searchInput.value.trim()) {
    performSearch(searchInput.value.trim());
  }
}

// Funções da Interface
function renderSidebar() {
  sidebarNav.innerHTML = forumData.map(category => `
    <a onclick="renderTopics('${category.id}')" 
       class="sidebar-nav-link flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer group ${state.currentCategory === category.id ? 'active' : ''}"
       data-category-id="${category.id}">
      <div class="w-6 h-6 flex-shrink-0 module-icon">${category.icon || ''}</div>
      <p class="text-sm font-medium leading-normal">${category.title}</p>
      <span class="tooltip">${category.title}</span>
    </a>
  `).join('');
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
  const sunIconElement = themeToggleBtn.querySelector('.sun-icon');
  const moonIconElement = themeToggleBtn.querySelector('.moon-icon');
  
  document.body.classList.toggle('dark-mode', isDark);
  
  if (sunIconElement && moonIconElement) {
    sunIconElement.style.display = isDark ? 'block' : 'none';
    moonIconElement.style.display = isDark ? 'none' : 'block';
  }
  
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function scrollToGroup(groupId) {
  const element = document.getElementById(`group-${groupId}`);
  if (element && state.scrollInstance) {
    state.scrollInstance.scrollTo(element, { offset: -20, duration: 600 });
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initSidebar({
    onNavLinkClick: (categoryId) => renderTopics(categoryId),
    onHomeClick: () => renderCategories()
  });

  renderCategories();
  setSearchScope('all');
  renderFilterMenuItems();
  updateSearchInputPadding();

  // Event Listeners
  searchInput.addEventListener('keyup', (e) => handleSearch(e.target.value));
  filterButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFilterMenu();
  });
  
  filterMenuInput.addEventListener('input', () => renderFilterMenuItems(filterMenuInput.value));
  
  document.addEventListener('click', (e) => {
    if (!filterMenu.contains(e.target)) {
      toggleFilterMenu(false);
    }
  });

  // Tema
  themeToggleBtn.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('dark-mode'));
  });
  
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

  // Menu Mobile
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenuOverlay = document.getElementById('sidebar-overlay');

  if (mobileMenuButton && mobileMenuOverlay && sidebar) {
    mobileMenuButton.addEventListener('click', () => {
      sidebar.classList.toggle('visible');
      mobileMenuOverlay.classList.toggle('visible');
    });
    
    mobileMenuOverlay.addEventListener('click', () => {
      sidebar.classList.remove('visible');
      mobileMenuOverlay.classList.remove('visible');
    });

    sidebarNav.addEventListener('click', (e) => {
      if (e.target.closest('.sidebar-nav-link') && window.innerWidth < 1024) {
        sidebar.classList.remove('visible');
        mobileMenuOverlay.classList.remove('visible');
      }
    });
  }

  // Navegação por teclado
  document.addEventListener('keydown', (e) => {
    const isArticleView = document.querySelector('.article-navigation');
    if (!isArticleView) return;

    if (e.key === 'ArrowLeft') {
      navigateArticle(-1);
    } else if (e.key === 'ArrowRight') {
      navigateArticle(1);
    }
  });

  // Inicializa o Fuse.js para busca
  initializeFuse();
});