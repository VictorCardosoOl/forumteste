const forumData = [
  { id: 'instalacao', title: 'Instalação', description: 'Guias e passo-a-passos para instalação do sistema.', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H88a8,8,0,0,0-6.13,2.81L46.8,80H40a16,16,0,0,0-16,16V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V74.83l-20.73-20A8,8,0,0,0,188.7,56H88a16,16,0,0,0-13.86,8H216ZM40,96H80a16,16,0,0,0,13.86-8L104,72.43l18.14,18.14a8,8,0,0,0,11.32-11.32L113.31,59.1A16,16,0,0,0,102.14,56H89.5L81.87,42.81A8,8,0,0,1,88,40a.39.39,0,0,1,.13,0h0a.39.39,0,0,1,.13,0H216a15.93,15.93,0,0,0-2.3-6.5l.3.5V56h.17A16,16,0,0,1,216,56V192H40Z"></path></svg>`,
    topics: [ { id: 'instalacao-windows', title: 'Instalando no Windows 10/11', description: 'Passo a passo completo para o ambiente Windows.', content: `<h2>Requisitos Mínimos</h2><p>Antes de começar, garanta que o computador atende aos seguintes requisitos: <strong>Windows 10 ou 11 (64-bit)</strong>, <strong>8GB de RAM</strong> e pelo menos <strong>10GB de espaço livre em disco</strong>.</p><h2>Exemplo de Fluxograma</h2><p>Siga o fluxo visual abaixo para entender o processo de decisão durante a instalação.</p><img class="article-image" src="images/placeholder-fluxograma.png" alt="Fluxograma do processo de instalação"><h2>Passo a Passo com Código</h2><p>Use o comando abaixo no terminal para verificar a versão. Clique em "Copiar" para facilitar.</p><pre><code>systeminfo | findstr /B /C:"OS Name" /C:"OS Version"</code></pre><p>Após a verificação, prossiga para a próxima etapa de configuração do banco de dados.</p>` } ]
  },
  { id: 'erros-eventos', title: 'Erros e Eventos', description: 'Soluções para os erros mais comuns e eventos do sistema.', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-40V88a8,8,0,0,1,16,0v88a8,8,0,0,1-16,0Zm8,72a12,12,0,1,1,12-12A12,12,0,0,1,128,200Z"></path></svg>`, topics: [] },
  { id: 'duvidas-frequentes', title: 'Dúvidas Frequentes', description: 'Respostas rápidas para as perguntas mais comuns.', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>`, topics: [] },
];

const app = document.getElementById('app');
const appContainer = document.getElementById('app-container');
const sidebarNav = document.getElementById('sidebar-nav');

function triggerAnimation() {
  app.classList.remove('animate-in');
  void app.offsetWidth;
  app.classList.add('animate-in');
}

function renderSidebar() {
  sidebarNav.innerHTML = forumData.map(category => `
    <a onclick="renderTopics('${category.id}')" class="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer group">
      <div class="w-6 h-6 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">${category.icon || ''}</div>
      <p class="text-sm font-medium leading-normal opacity-70 group-hover:opacity-100 transition-opacity">${category.title}</p>
    </a>
  `).join('');
}

function renderCategories() {
  appContainer.scrollTop = 0;
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
  addCopyButtons();
}

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
                    <p class="text-sm font-semibold opacity-50 group-hover:opacity-100">${item.categoryTitle.replace(queryRegex, `<span class="search-highlight">$1</span>`)}</p>
                    <h3 class="text-lg font-semibold mt-1">${item.title.replace(queryRegex, `<span class="search-highlight">$1</span>`)}</h3>
                    <p class="text-sm mt-2 opacity-70">${(item.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...').replace(queryRegex, `<span class="search-highlight">$1</span>`)}</p>
                </a>
            `).join('')
        }
      </div>
    `;
}

function handleSearch(event) {
    const query = event.target.value.trim();
    if (event.key === 'Enter' && query) { performSearch(query); }
    if (event.key === 'Escape' || (event.type === 'keyup' && !query)) { event.target.value = ''; renderCategories(); }
}

function performSearch(query) {
    if (!query || query.length < 2) return;
    const results = [];
    forumData.forEach(category => {
        category.topics.forEach(topic => {
            const fullText = `${category.title} ${topic.title} ${topic.description} ${topic.content}`.toLowerCase();
            if (fullText.includes(query.toLowerCase())) { results.push({ ...topic, categoryId: category.id, categoryTitle: category.title }); }
        });
    });
    renderSearchResults(results, query);
}

function addCopyButtons() {
    document.querySelectorAll('pre').forEach(block => {
        const button = document.createElement('button');
        button.innerText = 'Copiar';
        button.className = 'copy-button';
        block.appendChild(button);
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(block.querySelector('code').innerText);
            button.innerText = 'Copiado!';
            setTimeout(() => { button.innerText = 'Copiar'; }, 2000);
        });
    });
}

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

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderCategories();
  setTheme(localStorage.getItem('theme') === 'dark');
});