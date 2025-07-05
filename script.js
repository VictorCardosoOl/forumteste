// ===================================================================================
// DADOS DO FÓRUM
// ===================================================================================
const forumData = [
  { id: 'instalacao', title: 'Instalação', description: 'Guias e passo-a-passos para instalação do sistema.', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H88a8,8,0,0,0-6.13,2.81L46.8,80H40a16,16,0,0,0-16,16V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V74.83l-20.73-20A8,8,0,0,0,188.7,56H88a16,16,0,0,0-13.86,8H216ZM40,96H80a16,16,0,0,0,13.86-8L104,72.43l18.14,18.14a8,8,0,0,0,11.32-11.32L113.31,59.1A16,16,0,0,0,102.14,56H89.5L81.87,42.81A8,8,0,0,1,88,40a.39.39,0,0,1,.13,0h0a.39.39,0,0,1,.13,0H216a15.93,15.93,0,0,0-2.3-6.5l.3.5V56h.17A16,16,0,0,1,216,56V192H40Z"></path></svg>`,
    topics: [ { id: 'instalacao-windows', title: 'Instalando no Windows 10/11', description: 'Passo a passo completo para o ambiente Windows.', content: `<h3>Requisitos Mínimos</h3><p>Antes de começar, garanta que o computador atende aos seguintes requisitos:</p><ul><li>Windows 10 ou 11 (64-bit)</li><li>8GB de RAM</li><li>10GB de espaço livre em disco</li></ul><h3>Exemplo de Fluxograma de Instalação</h3><p>Siga o fluxo visual abaixo para entender o processo de decisão durante a instalação.</p><img class="article-image" src="images/placeholder-fluxograma.png" alt="Fluxograma do processo de instalação"><h3>Passo a Passo</h3><p>1. Baixe o instalador a partir do link fornecido...</p><p>2. Execute o arquivo <strong>setup.exe</strong> como administrador...</p>` } ]
  },
  { id: 'erros-eventos', title: 'Erros e Eventos', description: 'Soluções para os erros mais comuns e eventos do sistema.', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-40V88a8,8,0,0,1,16,0v88a8,8,0,0,1-16,0Zm8,72a12,12,0,1,1,12-12A12,12,0,0,1,128,200Z"></path></svg>`, topics: [] },
  { id: 'duvidas-frequentes', title: 'Dúvidas Frequentes', description: 'Respostas rápidas para as perguntas mais comuns.', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>`, topics: [] },
];

// ===================================================================================
// LÓGICA DA APLICAÇÃO
// ===================================================================================
const app = document.getElementById('app');
const appContainer = document.getElementById('app-container');
const sidebarNav = document.getElementById('sidebar-nav');
let locomotiveScroll;

function initOrUpdateScroll() {
  if (locomotiveScroll) locomotiveScroll.destroy();
  locomotiveScroll = new LocomotiveScroll({ el: appContainer, smooth: true });
  setTimeout(() => locomotiveScroll.update(), 500);
}

function destroyScroll() {
  if (locomotiveScroll) {
    locomotiveScroll.destroy();
    locomotiveScroll = null;
  }
  appContainer.scrollTop = 0;
}

// -------- FUNÇÕES DE RENDERIZAÇÃO --------

function renderSidebar() {
  sidebarNav.innerHTML = forumData.map(category => `
    <a onclick="renderTopics('${category.id}')" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer group">
      <div class="text-gray-500 w-6 h-6 flex-shrink-0 group-hover:text-gray-900">${category.icon || ''}</div>
      <p class="text-gray-600 text-sm font-medium leading-normal group-hover:text-gray-900">${category.title}</p>
    </a>
  `).join('');
}

function renderCategories() {
  destroyScroll();
  // MODIFICAÇÃO: Barra de busca foi removida daqui
  app.innerHTML = `
    <div class="flex flex-wrap justify-between items-center gap-3">
      <h2 class="text-3xl font-bold">Módulos do Sistema</h2>
    </div>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 mt-6">
      ${forumData.map(category => `
        <a onclick="renderTopics('${category.id}')" class="flex cursor-pointer flex-1 gap-4 rounded-xl border border-gray-200 bg-white p-5 flex-col hover:border-gray-900 hover:shadow-lg transition-all transform hover:-translate-y-1 group">
          <div class="text-gray-900 w-7 h-7">${category.icon}</div>
          <div class="flex flex-col gap-1">
            <h3 class="text-base font-bold">${category.title}</h3>
            <p class="text-sm font-normal text-gray-500">${category.description}</p>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

function renderTopics(categoryId) {
  destroyScroll();
  const category = forumData.find(c => c.id === categoryId);
  if (!category) { renderCategories(); return; }

  app.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500">
      <a onclick="renderCategories()" class="cursor-pointer hover:text-gray-900">Início</a>
      <span>/</span>
      <span class="text-gray-900 font-semibold">${category.title}</span>
    </div>
    <div class="mt-4">
      <h2 class="text-3xl font-bold">${category.title}</h2>
    </div>
    ${category.topics.length === 0 
      ? `<p class="mt-6 text-gray-500">Nenhum artigo encontrado nesta categoria ainda.</p>`
      : `<div class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 mt-6">
          ${category.topics.map(topic => `
            <a onclick="renderArticle('${category.id}', '${topic.id}')" class="flex cursor-pointer flex-1 gap-3 rounded-xl border border-gray-200 bg-white p-5 flex-col hover:border-gray-900 hover:shadow-lg transition-all transform hover:-translate-y-1 group">
              <div class="flex flex-col gap-1">
                <h3 class="text-base font-bold">${topic.title}</h3>
                <p class="text-sm font-normal text-gray-500">${topic.description || ''}</p>
              </div>
            </a>
          `).join('')}
        </div>`
    }
  `;
}

function renderArticle(categoryId, topicId) {
  const category = forumData.find(c => c.id === categoryId);
  const topic = category ? category.topics.find(t => t.id === topicId) : null;
  if (!topic) { renderCategories(); return; }

  app.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500">
      <a onclick="renderCategories()" class="cursor-pointer hover:text-gray-900">Início</a>
      <span>/</span>
      <a onclick="renderTopics('${category.id}')" class="cursor-pointer hover:text-gray-900">${category.title}</a>
      <span>/</span>
      <span class="text-gray-900 font-semibold">${topic.title}</span>
    </div>
    <div class="bg-white mt-6">
        <h1 class="text-4xl font-bold">${topic.title}</h1>
        ${topic.description ? `<p class="text-gray-500 text-lg mt-3">${topic.description}</p>` : ''}
        <hr class="my-8 border-gray-200">
        <div class="article-content">${topic.content}</div>
    </div>
  `;
  initOrUpdateScroll();
}

function renderSearchResults(results, query) {
    destroyScroll();
    const queryRegex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    
    app.innerHTML = `
        <div>
            <h2 class="text-3xl font-bold mb-6">
                Resultados da busca por: <span class="text-gray-600">"${query}"</span>
            </h2>
            ${results.length === 0 
                ? `<p class="text-gray-500">Nenhum resultado encontrado.</p>`
                : results.map(item => `
                    <a onclick="renderArticle('${item.categoryId}', '${item.id}')" class="block cursor-pointer bg-white p-5 rounded-xl border border-gray-200 mb-4 hover:border-gray-900 hover:shadow-lg transition-all">
                        <p class="text-sm font-semibold text-gray-500">${item.categoryTitle.replace(queryRegex, `<span class="search-highlight">$1</span>`)}</p>
                        <h3 class="text-lg font-bold mt-1">${item.title.replace(queryRegex, `<span class="search-highlight">$1</span>`)}</h3>
                        <p class="text-sm text-gray-600 mt-2">${(item.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...').replace(queryRegex, `<span class="search-highlight">$1</span>`)}</p>
                    </a>
                `).join('')
            }
        </div>
    `;
}

// -------- LÓGICA DE BUSCA --------
function handleSearch(event) {
    const query = event.target.value.trim();
    if (event.key === 'Enter' && query) {
      performSearch(query);
    }
    if (event.key === 'Escape' || !query) {
      event.target.value = '';
      renderCategories();
    }
}

function performSearch(query) {
    if (!query || query.length < 2) return;
    
    const results = [];
    forumData.forEach(category => {
        category.topics.forEach(topic => {
            const fullText = `${category.title} ${topic.title} ${topic.description} ${topic.content}`.toLowerCase();
            if (fullText.includes(query.toLowerCase())) {
                results.push({ ...topic, categoryId: category.id, categoryTitle: category.title });
            }
        });
    });
    renderSearchResults(results, query);
}

// Inicia a aplicação
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderCategories();
});