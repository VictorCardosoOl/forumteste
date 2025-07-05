// ===================================================================================
// DADOS DO FÓRUM - AQUI VOCÊ EDITA E ADICIONA TODO O CONTEÚDO
// ===================================================================================
// Estrutura para adicionar conteúdo:
// - Cada categoria principal é um objeto {}.
// - 'id': um identificador único para a categoria (use minúsculas e hífens).
// - 'title': O título que aparece no card da categoria.
// - 'description': A descrição que aparece no card.
// - 'icon': O código SVG do ícone.
// - 'topics': Uma lista [] de tópicos/artigos dentro da categoria.
//   - Cada tópico é um objeto {} com 'id', 'title', 'description' e 'icon'.
//   - 'content': O conteúdo HTML do artigo. Você pode usar tags como <h3>, <p>, <ul>, <pre> para código, etc.
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
        title: 'Exemplo de Artigo',
        description: 'Um exemplo de como um artigo será exibido.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path></svg>`,
        content: `
          <h3>Este é o Título do Artigo</h3>
          <p>Este é um parágrafo de exemplo explicando um processo interno. Você pode detalhar os passos que a equipe de suporte deve seguir. Use listas para facilitar a leitura:</p>
          <ul>
            <li>Primeiro passo do processo.</li>
            <li>Segundo passo do processo.</li>
            <li>Terceiro passo, com algum detalhe importante.</li>
          </ul>
          <h3>Exemplo de Código</h3>
          <p>Você pode incluir blocos de código ou comandos que precisam ser copiados:</p>
          <pre><code>SELECT * FROM users WHERE status = 'active';</code></pre>
          <p>E aqui continua a explicação do processo...</p>
        `
      }
    ]
  },
  {
    id: 'gestao-de-processos',
    title: 'Gestão de Processos',
    description: 'Gerenciamento de fluxos de trabalho e tarefas.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"></path></svg>`,
    topics: [
      {
        id: 'cadastro-de-processos',
        title: 'Cadastro de Processos',
        description: 'Organize e registre todos os processos da sua empresa.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"></path></svg>`,
        content: `<h3>Como Cadastrar um Novo Processo</h3><p>O cadastro de novos processos é fundamental para a organização...</p>`
      },
      {
        id: 'fluxos-de-trabalho',
        title: 'Fluxos de Trabalho',
        description: 'Automatize o fluxo de trabalho para maior eficiência.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,181.66l-32,32a8,8,0,0,1-11.32-11.32L188.69,184H48a8,8,0,0,1,0-16H188.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64a8,8,0,0,0,11.32-11.32L67.31,88H208a8,8,0,0,0,0-16H67.31L85.66,53.66A8,8,0,0,0,74.34,42.34l-32,32a8,8,0,0,0,0,11.32Z"></path></svg>`,
        content: `<h3>Criando Fluxos de Trabalho Automatizados</h3><p>Para criar um fluxo de trabalho, vá até o menu...</p>`
      }
    ]
  },
  // <<< PARA ADICIONAR UMA NOVA CATEGORIA, COPIE E COLE UM BLOCO COMO O ACIMA E ALTERE OS DADOS AQUI >>>
];


// ===================================================================================
// LÓGICA DA APLICAÇÃO - NÃO É NECESSÁRIO EDITAR DAQUI PARA BAIXO
// ===================================================================================

const app = document.getElementById('app');

// Função para renderizar a página inicial com todas as categorias
function renderCategories() {
  app.innerHTML = `
    <div class="flex flex-wrap justify-between gap-3 p-4">
      <p class="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">Fórum de Suporte Técnico</p>
    </div>
    <h2 class="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Categorias</h2>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-4">
      ${forumData.map(category => `
        <a onclick="renderTopics('${category.id}')" class="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-white p-4 flex-col hover:border-blue-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
          <div class="text-[#0d141c]">${category.icon}</div>
          <div class="flex flex-col gap-1">
            <h2 class="text-[#0d141c] text-base font-bold leading-tight">${category.title}</h2>
            <p class="text-[#49739c] text-sm font-normal leading-normal">${category.description}</p>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

// Função para renderizar a lista de tópicos de uma categoria específica
function renderTopics(categoryId) {
  const category = forumData.find(c => c.id === categoryId);
  if (!category) {
    renderCategories(); // Se a categoria não for encontrada, volta para o início
    return;
  }

  app.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 p-4">
      <a onclick="renderCategories()" class="text-blue-600 hover:underline text-base font-medium leading-normal">Categorias</a>
      <span class="text-[#49739c] text-base font-medium leading-normal">/</span>
      <span class="text-[#0d141c] text-base font-medium leading-normal">${category.title}</span>
    </div>

    <div class="flex flex-wrap justify-between gap-3 p-4">
      <p class="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">${category.title}</p>
    </div>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-4">
      ${category.topics.map(topic => `
        <a onclick="renderArticle('${category.id}', '${topic.id}')" class="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-white p-4 flex-col hover:border-blue-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
          <div class="text-[#0d141c]">${topic.icon}</div>
          <div class="flex flex-col gap-1">
            <h2 class="text-[#0d141c] text-base font-bold leading-tight">${topic.title}</h2>
            <p class="text-[#49739c] text-sm font-normal leading-normal">${topic.description}</p>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

// Função para renderizar o conteúdo de um artigo específico
function renderArticle(categoryId, topicId) {
  const category = forumData.find(c => c.id === categoryId);
  const topic = category ? category.topics.find(t => t.id === topicId) : null;

  if (!topic) {
    renderCategories(); // Se o tópico não for encontrado, volta para o início
    return;
  }

  app.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 p-4">
      <a onclick="renderCategories()" class="text-blue-600 hover:underline text-base font-medium leading-normal">Categorias</a>
      <span class="text-[#49739c] text-base font-medium leading-normal">/</span>
      <a onclick="renderTopics('${category.id}')" class="text-blue-600 hover:underline text-base font-medium leading-normal">${category.title}</a>
      <span class="text-[#49739c] text-base font-medium leading-normal">/</span>
      <span class="text-[#0d141c] text-base font-medium leading-normal">${topic.title}</span>
    </div>

    <div class="p-4 bg-white rounded-lg border border-[#cedbe8] mt-4">
        <h1 class="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight">${topic.title}</h1>
        <p class="text-[#49739c] text-base mt-2">${topic.description}</p>
        <hr class="my-6">
        <div class="article-content text-[#0d141c]">
            ${topic.content}
        </div>
    </div>
  `;
}


// Inicia a aplicação renderizando a página inicial de categorias
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
});