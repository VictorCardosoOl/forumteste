// O arquivo script.js agora contém apenas a LÓGICA da aplicação.
// Ele assume que a constante 'forumData' já foi carregada a partir do arquivo data.js

const app = document.getElementById('app');
const appContainer = document.getElementById('app-container');
const sidebarNav = document.getElementById('sidebar-nav');

/**
 * Aplica uma animação de "fade-in" ao contêiner principal da aplicação.
 * A função força o navegador a reiniciar a animação CSS.
 */
function triggerAnimation() {
  app.classList.remove('animate-in');
  void app.offsetWidth; // Truque para forçar o reinício da animação
  app.classList.add('animate-in');
}

/**
 * Renderiza a barra de navegação lateral com links para cada categoria.
 * Os dados são lidos da variável global 'forumData'.
 */
function renderSidebar() {
  sidebarNav.innerHTML = forumData.map(category => `
    <a onclick="renderTopics('${category.id}')" class="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer group">
      <div class="w-6 h-6 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">${category.icon || ''}</div>
      <p class="text-sm font-medium leading-normal opacity-70 group-hover:opacity-100 transition-opacity">${category.title}</p>
    </a>
  `).join('');
}

/**
 * Renderiza a página inicial, mostrando todos os módulos (categorias) como cartões.
 */
function renderCategories() {
  appContainer.scrollTop = 0; // Leva o scroll para o topo
  triggerAnimation();
  app.innerHTML = `
    <div class="text-center">
      <h1 class="text-4xl font-bold">Módulos do Sistema</h1>
      <p class="mt-2 text-lg max-w-2xl mx-auto">Navegue pelas categorias abaixo para encontrar guias, soluções de erros e respostas para as suas dúvidas.</p>
    </div>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mt-10">
      ${forumData.map(category => `
        <a onclick="renderTopics('${category.id}')" class="card-link flex cursor-pointer flex-1 gap-4 rounded-xl p-5 flex-col group">
          <div class="w-7 h-7">${category.icon}</div>
          <div class="flex flex-col gap-1 mt-2">
            <h3 class="text-base font-semibold">${category.title}</h3>
            <p class="text-sm font-normal">${category.description}</p>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

/**
 * Renderiza a lista de tópicos para uma categoria específica.
 * @param {string} categoryId - O ID da categoria a ser exibida.
 */
function renderTopics(categoryId) {
  appContainer.scrollTop = 0;
  triggerAnimation();
  const category = forumData.find(c => c.id === categoryId);
  if (!category) { renderCategories(); return; }

  app.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a onclick="renderCategories()" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
      <span class="opacity-50">/</span>
      <span class="font-semibold">${category.title}</span>
    </div>
    <div class="mt-4"><h1 class="text-4xl font-bold">${category.title}</h1></div>
    ${category.topics.length === 0 
      ? `<p class="mt-8 opacity-70">Nenhum artigo encontrado neste módulo ainda.</p>`
      : `<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mt-8">
          ${category.topics.map(topic => `
            <a onclick="renderArticle('${category.id}', '${topic.id}')" class="card-link flex cursor-pointer flex-1 gap-3 rounded-xl p-5 flex-col group">
              <div class="flex flex-col gap-1">
                <h3 class="text-base font-semibold">${topic.title}</h3>
                <p class="text-sm font-normal">${topic.description || ''}</p>
              </div>
            </a>
          `).join('')}
        </div>`
    }
  `;
}

/**
 * Renderiza o conteúdo completo de um artigo/tópico.
 * @param {string} categoryId - O ID da categoria pai.
 * @param {string} topicId - O ID do tópico a ser exibido.
 */
function renderArticle(categoryId, topicId) {
  appContainer.scrollTop = 0;
  triggerAnimation();
  const category = forumData.find(c => c.id === categoryId);
  const topic = category ? category.topics.find(t => t.id === topicId) : null;
  if (!topic) { renderCategories(); return; }

  app.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a onclick="renderCategories()" class="cursor-pointer opacity-70 hover:opacity-100">Início</a><span class="opacity-50">/</span>
      <a onclick="renderTopics('${category.id}')" class="cursor-pointer opacity-70 hover:opacity-100">${category.title}</a><span class="opacity-50">/</span>
      <span class="font-semibold">${topic.title}</span>
    </div>
    <div class="article-content mt-8">
        <h1>${topic.title}</h1>
        ${topic.description ? `<p class="text-xl mt-4 opacity-80">${topic.description}</p>` : ''}
        <hr class="my-8 opacity-20">
        <div>${topic.content}</div>
    </div>
  `;
  addCopyButtons(); // Adiciona os botões de copiar aos blocos de código
}

/**
 * Renderiza a página de resultados da busca.
 * @param {Array} results - Um array de objetos de tópico que correspondem à busca.
 * @param {string} query - O termo que foi pesquisado.
 */
function renderSearchResults(results, query) {
    appContainer.scrollTop = 0;
    triggerAnimation();
    const queryRegex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    
    app.innerHTML = `
      <div>
        <h1 class="text-3xl font-bold mb-8">Resultados para: <span class="opacity-70">"${query}"</span></h1>
        ${results.length === 0 
            ? `<p class="opacity-70">Nenhum resultado encontrado.</p>`
            : results.map(item => `
                <a onclick="renderArticle('${item.categoryId}', '${item.id}')" class="card-link block cursor-pointer p-5 rounded-xl mb-4 group">
                    <p class="text-sm font-semibold opacity-50 group-hover:opacity-100">${item.categoryTitle.replace(queryRegex, `<mark>$1</mark>`)}</p>
                    <h3 class="text-lg font-semibold mt-1">${item.title.replace(queryRegex, `<mark>$1</mark>`)}</h3>
                    <p class="text-sm mt-2 opacity-70">${(item.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...').replace(queryRegex, `<mark>$1</mark>`)}</p>
                </a>
            `).join('')
        }
      </div>
    `;
}

/**
 * Manipula os eventos de teclado no campo de busca.
 * @param {Event} event - O objeto do evento de teclado.
 */
function handleSearch(event) {
    const query = event.target.value.trim();
    if (event.key === 'Enter' && query) {
        performSearch(query);
    }
    if (event.key === 'Escape' || (event.type === 'keyup' && !query)) {
        event.target.value = '';
        renderCategories();
    }
}

/**
 * Realiza a busca por um termo nos dados do fórum.
 * @param {string} query - O termo a ser pesquisado.
 */
function performSearch(query) {
    if (!query || query.length < 2) return;
    const results = [];
    const lowerCaseQuery = query.toLowerCase();

    forumData.forEach(category => {
        category.topics.forEach(topic => {
            const fullText = `${category.title} ${topic.title} ${topic.description} ${topic.content}`.toLowerCase();
            if (fullText.includes(lowerCaseQuery)) {
                results.push({ ...topic, categoryId: category.id, categoryTitle: category.title });
            }
        });
    });
    renderSearchResults(results, query);
}

/**
 * Adiciona botões de "Copiar" a todos os blocos de código (`<pre>`).
 */
function addCopyButtons() {
    document.querySelectorAll('pre').forEach(block => {
        const button = document.createElement('button');
        button.innerText = 'Copiar';
        button.className = 'copy-button';
        block.appendChild(button);
        
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique no botão dispare outros eventos
            const code = block.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.innerText);
                button.innerText = 'Copiado!';
                setTimeout(() => { button.innerText = 'Copiar'; }, 2000);
            }
        });
    });
}

// --- LÓGICA DO TEMA (Claro/Escuro) ---
const themeToggle = document.getElementById('theme-toggle');
const themeIconContainer = document.getElementById('theme-icon-container');
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

function setTheme(isDark) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', isDark);
    themeIconContainer.innerHTML = isDark ? sunIcon : moonIcon;
}

themeToggle.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('dark-mode'));
});

/**
 * Função de inicialização que é chamada quando o DOM está totalmente carregado.
 */
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderCategories();
  // Define o tema com base no que está salvo no localStorage do usuário
  const savedThemeIsDark = localStorage.getItem('theme') === 'dark';
  setTheme(savedThemeIsDark);
});