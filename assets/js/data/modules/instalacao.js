export const instalacaoModule = {
  id: 'instalacao',
  title: 'Instalação',
  description: 'Módulo de Instalação de Programas e Sistemas',
  icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,12H22V14H19V17H17V14H14V12H17V9H19V12M10,15V17H5V15H10M19,4H5A2,2 0 0,0 3,6V18A2,2 0 0,0 5,20H12V18H5V8H19V11H21V6A2,2 0 0,0 19,4Z"/></svg>`,
  topics: [
    {
      id: 'instalacao-windows-terminal',
      title: 'Instalação de Programas no Windows via Terminal',
      description: 'Guia completo para instalar programas no Windows usando o terminal com Winget',
      group: 'Windows',
      content: `<h2>Instalando Programas no Windows com Terminal</h2>
      <!-- Conteúdo mantido igual -->`
    },
    {
      id: 'instalacao-linux-guia',
      title: 'Guia Completo: Instalação no Linux',
      description: 'Métodos de instalação em distribuições Linux para iniciantes',
      group: 'Linux',
      content: `<!-- Conteúdo mantido igual -->`
    }
  ]
};