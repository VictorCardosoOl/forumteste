// ===================================================================================
// DADOS DO FÓRUM
// Adicione e edite o conteúdo aqui.
// O campo 'content' agora aceita HTML para formatação rica.
// ===================================================================================
const forumData = [
  {
    id: 'configuracao-do-sistema',
    title: 'Configuração do Sistema',
    description: 'Ajustes e personalizações do Sigo Web.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Z"></path></svg>`,
    topics: [
      {
        id: 'exemplo-config',
        title: 'Exemplo de Artigo de Sistema',
        description: 'Um exemplo de como um artigo será exibido.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path></svg>`,
        content: `<h3>Este é o Título do Artigo sobre Sistema</h3><p>Este é um parágrafo de exemplo explicando um processo interno. Você pode detalhar os passos que a equipe de suporte deve seguir. Use listas para facilitar a leitura:</p><ul><li>Primeiro passo do processo.</li><li>Segundo passo do processo.</li><li>Terceiro passo, com algum detalhe importante.</li></ul><h3>Exemplo de Código</h3><p>Você pode incluir blocos de código ou comandos que precisam ser copiados:</p><pre><code>SELECT * FROM users WHERE status = 'active';</code></pre><p>E aqui continua a explicação do processo...</p>`
      }
    ]
  },
  {
    id: 'gestao-de-processos',
    title: 'Gestão de Processos',
    description: 'Gerenciamento de fluxos de trabalho e tarefas.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"></path></svg>`,
    topics: [
      { id: 'cadastro-de-processos', title: 'Cadastro de Processos', description: 'Organize e registre todos os processos da sua empresa.', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"></path></svg>`, content: `<h3>Como Cadastrar um Novo Processo</h3><p>O cadastro de novos processos é fundamental para a organização...</p>`},
      { id: 'fluxos-de-trabalho', title: 'Fluxos de Trabalho', description: 'Automatize o fluxo de trabalho para maior eficiência.', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,181.66l-32,32a8,8,0,0,1-11.32-11.32L188.69,184H48a8,8,0,0,1,0-16H188.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64a8,8,0,0,0,11.32-11.32L67.31,88H208a8,8,0,0,0,0-16H67.31L85.66,53.66A8,8,0,0,0,74.34,42.34l-32,32a8,8,0,0,0,0,11.32Z"></path></svg>`, content: `<h3>Criando Fluxos de Trabalho Automatizados</h3><p>Para criar um fluxo de trabalho, vá até o menu...</p>`}
    ]
  },
];

// ===================================================================================
// LÓGICA DA APLICAÇÃO
// ===================================================================================
const app = document.getElementById('app');
const appContainer = document.getElementById('app-container');
let locomotiveScroll;

// Inicializa ou atualiza o Locomotive Scroll
function initOrUpdateScroll() {
  if (locomotiveScroll) {
    locomotiveScroll.destroy();
  }
  locomotiveScroll = new LocomotiveScroll({
    el: appContainer,
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
  });
  setTimeout(() => locomotiveScroll.update(), 500);
}

// Destroi a instância do Locomotive Scroll
function destroyScroll() {
  if (locomotiveScroll) {
    locomotiveScroll.destroy();
    locomotiveScroll = null;
  }
  appContainer.scrollTop = 0; // Reseta a posição do scroll manual
}

// -------- FUNÇÕES DE RENDERIZAÇÃO --------

const searchBarHTML = `
  <div class="px-4 py-3">
    <label class="flex flex-col min-w-40 h-12 w-full">
      <div class="flex w-full flex-1 items-stretch rounded-lg h-full">
        <div class="text-[#49739c] flex border-none bg-white items-center justify-center pl-4 rounded-l-lg border border-r-0 border-[#cedbe8]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
        </div>
        <input id="search-input" onkeyup="handleSearch(event)" placeholder="Pesquisar por títulos, categorias ou conteúdo..." class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#0d141c] focus:outline-0 focus:ring-2 focus:ring-blue-500 border border-l-0 border-[#cedbe8] bg-white h-full placeholder:text-[#49739c] px-4 text-base font-normal leading-normal"/>
      </div>
    </label>
  </div>
`;

function renderCategories() {
  destroyScroll();
  app.innerHTML = `
    ${searchBarHTML}
    <div class="flex flex-wrap justify-between items-center gap-3 p-4">
      <h2 class="text-[#0d141c] text-[28px] font-bold leading-tight min-w-72">Categorias</h2>
    </div>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-4">
      ${forumData.map(category => `
        <a onclick="renderTopics('${category.id}')" class="flex cursor-pointer flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-white p-4 flex-col hover:border-blue-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
          <div class="text-[#0d141c]">${category.icon}</div>
          <div class="flex flex-col gap-1">
            <h3 class="text-[#0d141c] text-base font-bold leading-tight">${category.title}</h3>
            <p class="text-[#49739c] text-sm font-normal leading-normal">${category.description}</p>
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
    ${searchBarHTML}
    <div class="flex flex-wrap items-center gap-2 p-4 text-base font-medium">
      <a onclick="renderCategories()" class="cursor-pointer text-blue-600 hover:underline">Categorias</a>
      <span class="text-[#49739c]">/</span>
      <span class="text-[#0d141c]">${category.title}</span>
    </div>
    <div class="flex flex-wrap justify-between items-center gap-3 p-4">
      <h2 class="text-[#0d141c] tracking-light text-[28px] font-bold leading-tight min-w-72">${category.title}</h2>
    </div>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-4">
      ${category.topics.map(topic => `
        <a onclick="renderArticle('${category.id}', '${topic.id}')" class="flex cursor-pointer flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-white p-4 flex-col hover:border-blue-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
          <div class="text-[#0d141c]">${topic.icon}</div>
          <div class="flex flex-col gap-1">
            <h3 class="text-[#0d141c] text-base font-bold leading-tight">${topic.title}</h3>
            <p class="text-[#49739c] text-sm font-normal leading-normal">${topic.description}</p>
          </div>
        </a>
      `).join('')}
    </div>
  `;
  document.getElementById('search-input').focus();
}

function renderArticle(categoryId, topicId) {
  const category = forumData.find(c => c.id === categoryId);
  const topic = category ? category.topics.find(t => t.id === topicId) : null;
  if (!topic) { renderCategories(); return; }

  app.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 p-4 text-base font-medium">
      <a onclick="renderCategories()" class="cursor-pointer text-blue-600 hover:underline">Categorias</a>
      <span class="text-[#49739c]">/</span>
      <a onclick="renderTopics('${category.id}')" class="cursor-pointer text-blue-600 hover:underline">${category.title}</a>
      <span class="text-[#49739c]">/</span>
      <span class="text-[#0d141c]">${topic.title}</span>
    </div>
    <div class="p-6 bg-white rounded-lg border border-[#cedbe8] mt-4">
        <h1 class="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight">${topic.title}</h1>
        <p class="text-[#49739c] text-base mt-2">${topic.description}</p>
        <hr class="my-6">
        <div class="article-content">${topic.content}</div>
    </div>
  `;
  initOrUpdateScroll(); // Ativa a rolagem suave para o artigo
}

function renderSearchResults(results, query) {
    destroyScroll();
    const queryRegex = new RegExp(`(${query})`, 'gi');
    
    app.innerHTML = `
        ${searchBarHTML}
        <div class="p-4">
            <h2 class="text-[#0d141c] text-[28px] font-bold leading-tight mb-4">
                Resultados da busca por "${query}"
            </h2>
            ${results.length === 0 
                ? `<p class="text-slate-500">Nenhum resultado encontrado.</p>`
                : results.map(item => `
                    <a onclick="renderArticle('${item.categoryId}', '${item.id}')" class="block cursor-pointer bg-white p-4 rounded-lg border border-[#cedbe8] mb-4 hover:border-blue-500 hover:shadow-lg transition-all">
                        <p class="text-sm text-blue-600 font-semibold">${item.categoryTitle.replace(queryRegex, `<span class="search-highlight">$1</span>`)}</p>
                        <h3 class="text-lg font-bold text-[#0d141c] mt-1">${item.title.replace(queryRegex, `<span class="search-highlight">$1</span>`)}</h3>
                        <p class="text-sm text-slate-600 mt-2">${(item.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...').replace(queryRegex, `<span class="search-highlight">$1</span>`)}</p>
                    </a>
                `).join('')
            }
        </div>
    `;
    document.getElementById('search-input').value = query;
}


// -------- LÓGICA DE BUSCA --------

function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();

    if (!query) {
        renderCategories();
        return;
    }

    if (query.length < 3) {
        return; // Não busca com menos de 3 caracteres
    }
    
    const results = [];
    forumData.forEach(category => {
        category.topics.forEach(topic => {
            const fullText = `${category.title} ${topic.title} ${topic.description} ${topic.content}`.toLowerCase();
            if (fullText.includes(query)) {
                results.push({
                    ...topic,
                    categoryId: category.id,
                    categoryTitle: category.title
                });
            }
        });
    });

    renderSearchResults(results, event.target.value.trim());
}

// Inicia a aplicação
document.addEventListener('DOMContentLoaded', renderCategories);

