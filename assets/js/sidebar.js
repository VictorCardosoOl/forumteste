// Este arquivo contém toda a lógica para a sidebar inteligente.

// Array com os possíveis estados da sidebar.
const sidebarStates = ['sidebar-estado-expandido', 'sidebar-estado-recolhido', 'sidebar-estado-flutuante'];

/**
 * Define o estado da sidebar, aplicando a classe CSS correta ao body
 * e salvando a preferência do usuário no localStorage.
 * @param {string} state - O estado a ser definido (ex: 'sidebar-estado-expandido').
 */
function setSidebarState(state) {
  // Garante que o estado fornecido é válido.
  if (!sidebarStates.includes(state)) {
    console.error('Estado da sidebar inválido:', state);
    return;
  }
  
  // Remove todas as classes de estado anteriores do body.
  document.body.classList.remove(...sidebarStates);
  
  // Adiciona a nova classe de estado.
  document.body.classList.add(state);
  
  // Salva a escolha no armazenamento local do navegador para persistência.
  localStorage.setItem('sidebarState', state);
  
  // Dispara um evento de 'resize'. Isso é útil para bibliotecas de terceiros
  // (como a de scroll) se ajustarem ao novo layout da página.
  window.dispatchEvent(new Event('resize'));
}

/**
 * Inicializa a funcionalidade da sidebar.
 * Encontra os elementos necessários e adiciona os ouvintes de evento.
 */
export function initSidebar() {
  const sidebarToggleBtn = document.getElementById('sidebar-toggle');

  // Se o botão de controle não existir, não faz nada.
  if (!sidebarToggleBtn) {
    return;
  }

  // Adiciona o evento de clique ao botão.
  sidebarToggleBtn.addEventListener('click', () => {
    // Descobre qual é o estado atual da sidebar.
    const currentState = sidebarStates.find(s => document.body.classList.contains(s));
    const currentIndex = sidebarStates.indexOf(currentState);
    
    // Calcula o próximo estado no ciclo (0 -> 1 -> 2 -> 0).
    const nextIndex = (currentIndex + 1) % sidebarStates.length;
    const nextState = sidebarStates[nextIndex];
    
    // Aplica o próximo estado.
    setSidebarState(nextState);
  });

  // Ao carregar a página, verifica se há um estado salvo.
  const savedState = localStorage.getItem('sidebarState');
  
  // Se houver um estado salvo e ele for válido, aplica-o.
  if (savedState && sidebarStates.includes(savedState)) {
    setSidebarState(savedState);
  } else {
    // Senão, aplica o estado padrão.
    setSidebarState('sidebar-estado-expandido');
  }
}