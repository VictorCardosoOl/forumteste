/**
 * @module view
 * @description Pure functions that return HTML strings for the application.
 * Rebuilt with Pure Tailwind CSS for the Emergency Reconstruction.
 */

// Icons for the UI
const ICONS = {
  SEARCH: `<svg class="w-4 h-4 opacity-50" viewBox="0 0 256 256"><path fill="currentColor" d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>`,
  HOME: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  CHEVRON_RIGHT: `<svg class="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`
};

/** Utility: Glass Card Class */
const CARD_CLASS = "group flex flex-col gap-4 p-6 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm cursor-pointer text-left w-full";

/**
 * SIDEBAR VIEW
 * Shows only Modules (Categories) as requested.
 */
export function templates_Sidebar(categories) {
  return `
    <ul class="space-y-2">
      ${categories.map(category => `
        <li>
          <button data-action="view-topics" data-id="${category.id}"
             class="sidebar-nav-link w-full flex items-center gap-3 px-3 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 group"
             title="${category.title}">
             
             <!-- Icon Placeholder if none provided -->
             <div class="w-6 h-6 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                ${category.icon || `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`}
             </div>
             
             <span class="sidebar-text truncate duration-200 opacity-100">${category.title}</span>
          </button>
        </li>
      `).join('')}
    </ul>
  `;
}

/**
 * 1. HOME VIEW
 */
export function templates_Home(categories) {
  return `
    <div class="flex flex-col items-center text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div class="inline-flex items-center justify-center p-2 rounded-full bg-blue-500/10 text-blue-400 mb-4 ring-1 ring-blue-500/20">
        <span class="text-xs font-bold uppercase tracking-wider px-2">WikiBase Docs</span>
      </div>
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Base de Conhecimento
      </h1>
      <p class="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Bem-vindo à documentação oficial. Selecione um módulo na barra lateral para começar.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${categories.map(category => `
            <div class="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                 <h3 class="text-lg font-bold text-white mb-2">${category.title}</h3>
                 <p class="text-sm text-gray-400 line-clamp-2">${category.description || ''}</p>
                 <button data-action="view-topics" data-id="${category.id}" class="mt-4 text-xs font-medium text-blue-400 hover:text-blue-300">Ver Tópicos &rarr;</button>
            </div>
        `).join('')}
    </div>
  `;
}

/**
 * 3. ARTICLE VIEW (PREMIUM SAAS STYLE)
 */
export function templates_Article(category, topic, relatedArticles = []) {
  return `
    <article class="prose prose-invert prose-lg max-w-none fade-in">
        <header class="mb-12 not-prose">
            <div class="flex items-center text-xs text-gray-500 font-medium uppercase tracking-widest mb-6">
                <button data-action="go-home" class="hover:text-blue-400 cursor-pointer transition-colors">Home</button>
                <span class="mx-2 text-gray-700">/</span>
                <span class="text-gray-300">${category.title}</span>
            </div>
            
            <h1 class="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                ${topic.title}
            </h1>
            
             ${topic.description ? `
            <div class="text-lg text-gray-300 mb-8 leading-relaxed border-l-2 border-blue-500/50 pl-6 py-1">
                ${topic.description}
            </div>` : ''}
        </header>

        <hr class="border-white/10 my-8">

        <div class="text-gray-400 font-light leading-7">
            ${topic.content}
        </div>
        
        ${relatedArticles.length > 0 ? `
            <div class="mt-16 pt-8 border-t border-white/10 not-prose">
                <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Leia também</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${relatedArticles.map(article => `
                        <button data-action="view-article" data-category="${article.categoryId}" data-id="${article.id}" class="text-left p-4 rounded-lg border border-white/5 bg-white/5 hover:border-blue-500/30 transition-all">
                            <h4 class="text-white font-medium text-sm mb-1">${article.title}</h4>
                            <p class="text-xs text-gray-500">${article.categoryTitle}</p>
                        </button>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    </article>
  `;
}


/**
 * 4. SEARCH & TAG RESULTS
 */
export function templates_SearchResults(results, query) {
  const resultsHTML = results.map(result => `
    <button data-action="view-article" data-category="${result.categoryId}" data-id="${result.id}" class="${CARD_CLASS}">
      <div class="flex items-center gap-2 mb-2">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
          ${result.categoryTitle}
        </span>
      </div>
      <h3 class="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        ${result.displayTitle}
      </h3>
      ${result.displayDescription ? `
        <p class="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
          ${result.displayDescription}
        </p>
      ` : ''}
    </button>
  `).join('');

  return `
    <div class="flex flex-col items-center mb-12 animate-in fade-in slide-in-from-bottom-4">
      <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
        Resultados para <span class="text-blue-600 dark:text-blue-400">"${query}"</span>
      </h1>
      <p class="text-zinc-500">${results.length} resultados encontrados</p>
    </div>

    ${results.length === 0 ? `
      <div class="max-w-md mx-auto text-center py-12 px-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
        <div class="text-4xl mb-4">🔍</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Nada encontrado</h3>
        <p class="text-zinc-500">Tente buscar por termos diferentes ou navegue pelas categorias.</p>
      </div>
    ` : `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8">
        ${resultsHTML}
      </div>
    `}
  `;
}

export function templates_TagResults(tag, articles) {
  return templates_SearchResults(articles.map(a => ({ ...a, displayTitle: a.title, displayDescription: a.description })), `#${tag}`);
}

export function templates_FilterMenu(modules, currentScope) {
  return modules.map(module => `
    <button data-action="set-scope" data-id="${module.id}" 
            class="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                   ${currentScope === module.id
      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-medium'
      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white'}">
      <div class="w-4 h-4 flex-shrink-0 opacity-70">${module.icon || ''}</div>
      <span class="text-sm">${module.title}</span>
      ${currentScope === module.id ? `<svg class="w-3 h-3 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>` : ''}
    </button>
  `).join('');
}
