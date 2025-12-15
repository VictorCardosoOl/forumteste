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
 * 1. HOME VIEW
 */
export function templates_Home(categories) {
  return `
    <div class="flex flex-col items-center text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div class="inline-flex items-center justify-center p-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4 ring-1 ring-blue-500/20">
        <span class="text-xs font-bold uppercase tracking-wider px-2">Base de Conhecimento</span>
      </div>
      <h1 class="text-5xl font-extrabold tracking-tight bg-gradient-to-br from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500 bg-clip-text text-transparent sm:text-6xl text-balance">
        Como podemos ajudar?
      </h1>
      <p class="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed text-balance">
        Explore nossos guias detalhados e documentação para encontrar respostas rápidas.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
      ${categories.map(category => `
        <button data-action="view-topics" data-id="${category.id}" class="${CARD_CLASS}">
          <div class="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-inner">
            ${category.icon || ICONS.HOME}
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              ${category.title}
            </h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
              ${category.description || 'Acesse os guias e documentação deste módulo.'}
            </p>
          </div>
          <div class="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Ver tópicos</span>
            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </div>
        </button>
      `).join('')}
    </div>
  `;
}

/**
 * 2. CATEGORY VIEW (Grouped Topics)
 */
export function templates_Category(category, groupedTopics) {
  const groupsHTML = Object.entries(groupedTopics).map(([groupName, topics]) => `
    <div id="group-${groupName.replace(/\s+/g, '-').toLowerCase()}" class="scroll-mt-32 mb-16">
      <div class="flex items-center gap-4 mb-8">
        <h2 class="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">${groupName}</h2>
        <div class="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        ${topics.map(topic => `
          <button data-action="view-article" data-category="${category.id}" data-id="${topic.id}" class="${CARD_CLASS}">
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              ${topic.title}
            </h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3">
              ${topic.description || ''}
            </p>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  return `
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8 animate-in fade-in slide-in-from-top-2">
      <button data-action="go-home" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Início</button>
      ${ICONS.CHEVRON_RIGHT}
      <span class="font-semibold text-zinc-900 dark:text-white">${category.title}</span>
    </nav>

    <!-- Header -->
    <header class="mb-12 animate-in fade-in slide-in-from-bottom-2">
      <div class="flex items-start justify-between gap-8">
        <div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">${category.title}</h1>
          <p class="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">${category.description || 'Explore os tópicos abaixo.'}</p>
        </div>
        <div class="hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm">
           ${category.icon || ICONS.HOME}
        </div>
      </div>
    </header>

    <!-- Content -->
    <div class="animate-in fade-in slide-in-from-bottom-4 delay-100">
      ${category.topics.length === 0
      ? `<div class="p-12 text-center bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
             <p class="text-zinc-500">Nenhum artigo encontrado nesta categoria.</p>
           </div>`
      : groupsHTML}
    </div>
  `;
}

/**
 * 3. ARTICLE VIEW
 */
export function templates_Article(category, topic, relatedArticles = []) {
  return `
    <nav class="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8 animate-in fade-in slide-in-from-top-2">
      <button data-action="go-home" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Início</button>
      ${ICONS.CHEVRON_RIGHT}
      <button data-action="view-topics" data-id="${category.id}" class="hover:text-zinc-900 dark:hover:text-white transition-colors">${category.title}</button>
      ${ICONS.CHEVRON_RIGHT}
      <span class="font-semibold text-zinc-900 dark:text-white truncate max-w-[200px]">${topic.title}</span>
    </nav>

    <article class="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
      <header class="mb-12 pb-8 border-b border-zinc-200 dark:border-zinc-800">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6 leading-tight">
          ${topic.title}
        </h1>
        
        ${topic.description ? `
          <p class="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            ${topic.description}
          </p>
        ` : ''}

        ${topic.tags ? `
          <div class="flex flex-wrap gap-2">
            ${topic.tags.map(tag => `
              <button data-action="filter-by-tag" data-id="${tag}" 
                      class="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                ${tag}
              </button>
            `).join('')}
          </div>
        ` : ''}
      </header>
      
      <!-- Article Body - Styled via Tailwind Typography (prose) equivalent classes -->
      <div class="prose prose-zinc dark:prose-invert max-w-none 
                  prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                  prose-img:rounded-2xl prose-img:shadow-lg
                  prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-pre:rounded-xl prose-pre:shadow-lg text-lg leading-relaxed">
        ${topic.content}
      </div>

      ${relatedArticles.length > 0 ? `
        <div class="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Artigos Relacionados</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
             ${relatedArticles.map(article => `
              <button data-action="view-article" data-category="${article.categoryId}" data-id="${article.id}" class="${CARD_CLASS} py-5">
                <p class="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                  ${article.categoryTitle}
                </p>
                <h3 class="text-base font-bold text-zinc-900 dark:text-white leading-tight">
                  ${article.title}
                </h3>
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
