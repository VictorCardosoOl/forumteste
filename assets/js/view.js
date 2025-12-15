/**
 * @module view
 * @description Pure functions that return HTML strings for the application.
 * All logic using 'onclick' is replaced by data-attributes for Event Delegation.
 */

// Icons used in templates
const ICONS = {
    SEARCH: `<svg class="w-3.5 h-3.5 opacity-60" viewBox="0 0 256 256"><path fill="currentColor" d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>`,
    ARROW_RIGHT: `<svg class="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`,
    CHEVRON_LEFT: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
    CHEVRON_RIGHT: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`,
};

/**
 * Renders the Home page (Category list).
 * @param {Array} categories 
 * @returns {string} HTML string
 */
export function templates_Home(categories) {
    return `
    <div class="text-center animate-in">
      <h1 class="text-4xl font-bold">Base de Conhecimento</h1>
      <p class="mt-2 text-lg max-w-2xl mx-auto">Navegue pelos módulos para encontrar guias, soluções e respostas.</p>
    </div>
    <div class="module-grid animate-in">
      ${categories.map(category => `
        <button data-action="view-topics" data-id="${category.id}" 
                class="card-link flex text-left flex-col gap-4 rounded-xl p-5 group w-full">
          <div class="w-8 h-8 module-icon">${category.icon}</div>
          <div class="flex flex-col gap-1 mt-1">
            <h3 class="text-base font-semibold">${category.title}</h3>
            <p class="text-sm font-normal">${category.description}</p>
          </div>
        </button>
      `).join('')}
    </div>
  `;
}

/**
 * Renders the formatted Topics List (Grouped).
 * @param {Object} category 
 * @param {Object} groupedTopics - topics grouped by group name
 * @returns {string} HTML string
 */
export function templates_Category(category, groupedTopics) {
    const groupNames = Object.keys(groupedTopics);

    const groupsHTML = Object.entries(groupedTopics).map(([groupName, topics]) => `
    <div class="article-group" id="group-${groupName.replace(/\s+/g, '-').toLowerCase()}">
      <h3 class="article-group-title">${groupName}</h3>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        ${topics.map(topic => `
          <button data-action="view-article" data-category="${category.id}" data-id="${topic.id}" 
                  class="card-link flex text-left flex-col gap-3 rounded-xl p-5 group w-full">
            <h3 class="text-base font-semibold">${topic.title}</h3>
            <p class="text-sm font-normal">${topic.description || ''}</p>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

    const filterLinksHTML = groupNames.map(name =>
        `<button data-action="scroll-to-group" data-id="group-${name.replace(/\s+/g, '-').toLowerCase()}" 
             class="group-filter-item w-full text-left">${name}</button>`
    ).join('');

    return `
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium animate-in">
      <button data-action="go-home" class="opacity-70 hover:opacity-100">Início</button>
      <span class="opacity-50">/</span>
      <span class="font-semibold">${category.title}</span>
    </div>

    <div class="flex justify-between items-start mt-4 animate-in">
      <h1 class="text-4xl font-bold">${category.title}</h1>
      ${groupNames.length > 1 ? `
        <div class="relative group-filter-container">
          <button class="group-filter-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div class="group-filter-menu">
            <div class="font-semibold text-xs px-3 py-2 opacity-60">GRUPOS</div>
            ${filterLinksHTML}
          </div>
        </div>
      ` : ''}
    </div>
    
    <div class="mt-8 animate-in">${category.topics.length === 0 ? `<p class="opacity-70">Nenhum artigo encontrado.</p>` : groupsHTML}</div>
  `;
}

/**
 * Renders the Single Article view.
 * @param {Object} category 
 * @param {Object} topic 
 * @param {Array} relatedArticles 
 * @returns {string} HTML string
 */
export function templates_Article(category, topic, relatedArticles = []) {
    return `
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium animate-in">
      <button data-action="go-home" class="opacity-70 hover:opacity-100">Início</button>
      <span class="opacity-50">/</span>
      <button data-action="view-topics" data-id="${category.id}" class="opacity-70 hover:opacity-100">${category.title}</button>
      <span class="opacity-50">/</span>
      <span class="font-semibold">${topic.title}</span>
    </div>

    <div class="article-content mt-8 relative animate-in">
      <h1>${topic.title}</h1>
      ${topic.description ? `<p class="text-xl mt-4 opacity-80">${topic.description}</p>` : ''}
      
      ${topic.tags ? `
        <div class="mt-6 flex flex-wrap gap-2">
          ${topic.tags.map(tag => `
            <button data-action="filter-by-tag" data-id="${tag}" 
                    class="text-xs px-2 py-1 rounded-full bg-primary/20 hover:bg-primary/30 cursor-pointer">
              ${tag}
            </button>
          `).join('')}
        </div>
      ` : ''}
      
      <hr class="my-8 opacity-20 border-[var(--border-color)]">
      <div>${topic.content}</div>
      
      ${relatedArticles.length > 0 ? `
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-6">Recomendados para você</h2>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          ${relatedArticles.map(article => `
            <button data-action="view-article" data-category="${article.categoryId}" data-id="${article.id}"
               class="card-link flex text-left flex-col gap-3 rounded-xl p-6 group hover:border-primary transition-all w-full">
              <h3 class="text-lg font-semibold">${article.title}</h3>
              <p class="text-sm font-normal opacity-80">${article.description || ''}</p>
              <p class="text-xs mt-2 opacity-60">${article.categoryTitle}</p>
            </button>
          `).join('')}
        </div>
      </div>
      ` : ''}
    </div>
  `;
}

/**
 * Renders Search Results.
 * @param {Array} results 
 * @param {string} query 
 * @returns {string} HTML string
 */
export function templates_SearchResults(results, query) {
    const resultsHTML = results.map(result => {
        return `
      <button data-action="view-article" data-category="${result.categoryId}" data-id="${result.id}"
         class="card-link block text-left p-5 rounded-xl group hover:border-primary w-full">
        <p class="text-sm font-semibold opacity-60 group-hover:opacity-100 mb-1">
          ${result.categoryTitle}
        </p>
        <h3 class="text-lg font-semibold">
          ${result.displayTitle}
        </h3>
        ${result.displayDescription ? `
          <p class="text-sm mt-2 opacity-70">
            ${result.displayDescription}
          </p>
        ` : ''}
      </button>
    `;
    }).join('');

    return `
    <div class="animate-in">
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
}

/**
 * Renders Filter Menu Items.
 * @param {Array} modules 
 * @param {string} currentScope 
 * @returns {string} HTML string
 */
export function templates_FilterMenu(modules, currentScope) {
    return modules.map(module => `
    <button data-action="set-scope" data-id="${module.id}" 
            class="filter-menu-item w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${currentScope === module.id ? 'active bg-black/5 dark:bg-white/10' : ''}">
      <div class="item-icon w-4 h-4">${module.icon || ICONS.SEARCH}</div>
      <span>${module.title}</span>
    </button>
  `).join('');
}

export function templates_TagResults(tag, articles) {
    return `
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium animate-in">
      <button data-action="go-home" class="opacity-70 hover:opacity-100">Início</button>
      <span class="opacity-50">/</span>
      <span class="font-semibold">Tag: ${tag}</span>
    </div>
    <div class="mt-8 animate-in">
      <h1 class="text-3xl font-bold mb-6">Artigos marcados com "${tag}"</h1>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        ${articles.map(article => `
          <button data-action="view-article" data-category="${article.categoryId}" data-id="${article.id}"
             class="card-link flex text-left flex-col gap-3 rounded-xl p-5 group w-full">
            <h3 class="text-base font-semibold">${article.title}</h3>
            <p class="text-sm font-normal">${article.description || ''}</p>
            <p class="text-xs mt-2 opacity-60">${article.categoryTitle}</p>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}
