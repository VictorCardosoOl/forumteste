// Constantes globais
const app = document.getElementById('app');
const appContainer = document.getElementById('app-container');
const sidebarNav = document.getElementById('sidebar-nav');
const searchInput = document.getElementById('search-input');
const searchScopeToggle = document.getElementById('search-scope-toggle');
let currentCategory = null;
let scrollInstance = null;

// Função para disparar animação de transição
function triggerAnimation() {
  // Remove a classe de animação se já existir
  app.classList.remove('animate-in');
  
  // Força um reflow (reinicia a animação)
  void app.offsetWidth;
  
  // Adiciona a classe de animação novamente
  app.classList.add('animate-in');
}

// Inicializa Locomotive Scroll
function initSmoothScroll() {
  scrollInstance = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'vertical',
    multiplier: 0.8
  });
}

// Atualiza o scroll quando o conteúdo muda
function updateScroll() {
  if (scrollInstance) {
    scrollInstance.update();
  }
}

/**
 * Renderiza a barra de navegação lateral
 */
function renderSidebar() {
  sidebarNav.innerHTML = forumData.map(category => `
    <a onclick="renderTopics('${category.id}')" 
       class="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer group
              ${currentCategory === category.id ? 'bg-gray-100 dark:bg-gray-800' : ''}">
      <div class="w-6 h-6 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
        ${category.icon || ''}
      </div>
      <p class="text-sm font-medium leading-normal opacity-70 group-hover:opacity-100 transition-opacity">
        ${category.title}
      </p>
    </a>
  `).join('');
}

/**
 * Renderiza a página inicial com os módulos
 */
function renderCategories() {
  currentCategory = null;
  triggerAnimation();
  
  app.innerHTML = `
    <div class="text-center">
      <h1 class="text-4xl font-bold">Módulos do Sistema</h1>
      <p class="mt-2 text-lg max-w-2xl mx-auto">Navegue pelas categorias abaixo para encontrar guias, soluções de erros e respostas para as suas dúvidas.</p>
    </div>
    <div class="horizontal-scroll mt-10">
      ${forumData.map(category => `
        <div class="horizontal-scroll-item">
          <a onclick="renderTopics('${category.id}')" 
             class="card-link flex cursor-pointer flex-1 gap-4 rounded-xl p-5 flex-col group">
            <div class="w-7 h-7">${category.icon}</div>
            <div class="flex flex-col gap-1 mt-2">
              <h3 class="text-base font-semibold">${category.title}</h3>
              <p class="text-sm font-normal">${category.description}</p>
            </div>
          </a>
        </div>
      `).join('')}
    </div>
  `;
  
  updateScroll();
}

/**
 * Renderiza os tópicos de uma categoria com agrupamento
 */
function renderTopics(categoryId) {
  currentCategory = categoryId;
  const category = forumData.find(c => c.id === categoryId);
  if (!category) { renderCategories(); return; }

  triggerAnimation();
  
  // Verifica se há grupos definidos
  const hasGroups = category.topics.some(topic => topic.group);
  
  let topicsHTML = '';
  
  if (hasGroups) {
    // Agrupa os tópicos
    const groups = {};
    category.topics.forEach(topic => {
      const groupName = topic.group || 'Outros';
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(topic);
    });
    
    // Renderiza cada grupo
    topicsHTML = Object.entries(groups).map(([groupName, topics]) => `
      <div class="article-group">
        <h3 class="article-group-title">${groupName}</h3>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          ${topics.map(topic => `
            <a onclick="renderArticle('${category.id}', '${topic.id}')" 
               class="card-link flex cursor-pointer flex-1 gap-3 rounded-xl p-5 flex-col group">
              <div class="flex flex-col gap-1">
                <h3 class="text-base font-semibold">${topic.title}</h3>
                <p class="text-sm font-normal">${topic.description || ''}</p>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    `).join('');
  } else {
    // Renderização padrão sem grupos
    topicsHTML = `
      <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        ${category.topics.map(topic => `
          <a onclick="renderArticle('${category.id}', '${topic.id}')" 
             class="card-link flex cursor-pointer flex-1 gap-3 rounded-xl p-5 flex-col group">
            <div class="flex flex-col gap-1">
              <h3 class="text-base font-semibold">${topic.title}</h3>
              <p class="text-sm font-normal">${topic.description || ''}</p>
            </div>
          </a>
        `).join('')}
      </div>
    `;
  }
  
  app.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a onclick="renderCategories()" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
      <span class="opacity-50">/</span>
      <span class="font-semibold">${category.title}</span>
    </div>
    <div class="mt-4"><h1 class="text-4xl font-bold">${category.title}</h1></div>
    ${category.topics.length === 0 
      ? `<p class="mt-8 opacity-70">Nenhum artigo encontrado neste módulo ainda.</p>`
      : topicsHTML
    }
  `;
  
  updateScroll();
}

/**
 * Renderiza um artigo completo
 */
function renderArticle(categoryId, topicId) {
  const category = forumData.find(c => c.id === categoryId);
  const topic = category ? category.topics.find(t => t.id === topicId) : null;
  if (!topic) { renderCategories(); return; }

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
}

/**
 * Adiciona botões de copiar em blocos de código
 */
function addCopyButtons() {
  document.querySelectorAll('pre').forEach(pre => {
    // Verifica se já tem botão de copiar
    if (!pre.querySelector('.copy-button')) {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copiar';
      button.addEventListener('click', () => {
        const code = pre.querySelector('code')?.textContent || pre.textContent;
        navigator.clipboard.writeText(code).then(() => {
          button.textContent = 'Copiado!';
          setTimeout(() => {
            button.textContent = 'Copiar';
          }, 2000);
        });
      });
      pre.appendChild(button);
    }
  });
}

/**
 * Sistema de busca avançada
 */
let searchScope = 'all'; // 'all' ou 'current'

function toggleSearchScope() {
  searchScope = searchScope === 'all' ? 'current' : 'all';
  searchScopeToggle.textContent = searchScope === 'all' ? 'Todos os módulos' : 'Módulo atual';
  searchScopeToggle.classList.toggle('active', searchScope === 'current');
  
  // Se houver uma pesquisa ativa, refaz a busca
  if (searchInput.value.trim()) {
    performSearch(searchInput.value.trim());
  }
}

function handleSearch(event) {
  const query = event.target.value.trim();
  
  if (event.key === 'Enter' && query) {
    performSearch(query);
  }
  if (event.key === 'Escape' || (event.type === 'keyup' && !query)) {
    event.target.value = '';
    if (currentCategory) {
      renderTopics(currentCategory);
    } else {
      renderCategories();
    }
  }
}

function performSearch(query) {
  if (!query || query.length < 2) return;
  
  const results = [];
  const lowerCaseQuery = query.toLowerCase();
  const searchCategories = searchScope === 'current' && currentCategory 
    ? forumData.filter(c => c.id === currentCategory)
    : forumData;

  searchCategories.forEach(category => {
    category.topics.forEach(topic => {
      const fullText = `${category.title} ${topic.title} ${topic.description} ${topic.content}`.toLowerCase();
      if (fullText.includes(lowerCaseQuery)) {
        results.push({ 
          ...topic, 
          categoryId: category.id, 
          categoryTitle: category.title,
          group: topic.group || null
        });
      }
    });
  });
  
  renderSearchResults(results, query);
}

function renderSearchResults(results, query) {
  triggerAnimation();
  const queryRegex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  
  // Agrupa resultados por categoria se a busca for global
  let resultsHTML = '';
  
  if (searchScope === 'all') {
    const resultsByCategory = {};
    results.forEach(item => {
      if (!resultsByCategory[item.categoryTitle]) {
        resultsByCategory[item.categoryTitle] = [];
      }
      resultsByCategory[item.categoryTitle].push(item);
    });
    
    resultsHTML = Object.entries(resultsByCategory).map(([categoryTitle, items]) => `
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">${categoryTitle}</h3>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          ${items.map(item => renderSearchResultItem(item, queryRegex)).join('')}
        </div>
      </div>
    `).join('');
  } else {
    // Busca no módulo atual - mantém os grupos se existirem
    const hasGroups = results.some(item => item.group);
    
    if (hasGroups) {
      const groups = {};
      results.forEach(item => {
        const groupName = item.group || 'Outros';
        if (!groups[groupName]) {
          groups[groupName] = [];
        }
        groups[groupName].push(item);
      });
      
      resultsHTML = Object.entries(groups).map(([groupName, items]) => `
        <div class="article-group">
          <h3 class="article-group-title">${groupName}</h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
            ${items.map(item => renderSearchResultItem(item, queryRegex)).join('')}
          </div>
        </div>
      `).join('');
    } else {
      resultsHTML = `
        <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          ${results.map(item => renderSearchResultItem(item, queryRegex)).join('')}
        </div>
      `;
    }
  }
  
  app.innerHTML = `
    <div>
      <h1 class="text-3xl font-bold mb-4">Resultados para: <span class="opacity-70">"${query}"</span></h1>
      <p class="text-sm opacity-70 mb-6">${results.length} resultado(s) encontrado(s) ${searchScope === 'current' ? 'neste módulo' : 'em todos os módulos'}</p>
      ${results.length === 0 
          ? `<p class="opacity-70">Nenhum resultado encontrado. Tente alterar os termos da busca.</p>`
          : resultsHTML
      }
    </div>
  `;
  
  updateScroll();
}

function renderSearchResultItem(item, queryRegex) {
  return `
    <a onclick="renderArticle('${item.categoryId}', '${item.id}')" 
       class="card-link block cursor-pointer p-5 rounded-xl group">
        <p class="text-sm font-semibold opacity-50 group-hover:opacity-100">
          ${item.categoryTitle.replace(queryRegex, `<mark>$1</mark>`)}
        </p>
        <h3 class="text-lg font-semibold mt-1">
          ${item.title.replace(queryRegex, `<mark>$1</mark>`)}
        </h3>
        <p class="text-sm mt-2 opacity-70">
          ${(item.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...').replace(queryRegex, `<mark>$1</mark>`)}
        </p>
    </a>
  `;
}

/**
 * Sistema de tema claro/escuro
 */
function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  renderSidebar();
  renderCategories();
  
  // Configura o toggle de escopo de busca
  searchScopeToggle.addEventListener('click', toggleSearchScope);
  searchScopeToggle.classList.add('search-scope-btn');
  
  // Mostra opções de busca quando o input recebe foco
  searchInput.addEventListener('focus', () => {
    document.getElementById('search-options').classList.remove('hidden');
  });
  
  // Esconde opções de busca quando o input perde foco (com delay para permitir clique no toggle)
  searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      if (!document.activeElement === searchScopeToggle) {
        document.getElementById('search-options').classList.add('hidden');
      }
    }, 200);
  });
  
  // Configura o botão de alternar tema
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark);
  });
  
  // Define o tema com base no localStorage
  const savedThemeIsDark = localStorage.getItem('theme') === 'dark';
  setTheme(savedThemeIsDark);
});