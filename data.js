// Arquivo: data.js (CORRIGIDO)
const forumData = [
  {
    id: 'instalacao',
    title: 'Instalação',
    description: 'Guias e passo-a-passos para instalação do sistema.',
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor"></path></svg>`,
    topics: [
      {
        id: 'instalacao-windows',
        title: 'Instalando no Windows 10/11',
        description: 'Passo a passo completo para o ambiente Windows.',
        content: `<h2>Requisitos Mínimos</h2><p>O sistema requer Windows 10 ou superior, 8GB de RAM e 2GB de espaço em disco.</p>`
      }
    ]

  },
  {
    id: 'teste',
    title: 'Teste',
    description: 'Modulo destinado a Testes',
    icon: ``,
    topics: [
      {
        id: 'batata',
        title: 'Batata',
        description: 'Batata 123',
        content: `
          <h2>Festa</h2>

<p>Ao tentar criar um tópico do novo modulo o sistema apresenta o seguinte erro no console:
creator.js:73 Uncaught TypeError: Cannot read properties of undefined (reading 'innerHTML')
    at HTMLButtonElement.<anonymous> (creator.js:73:48)
Alem disso poderia melhorar o editor de texto?
Não há como informar se um texto é titulo, tipo de titulo, subtítulo, além disso não há como alterar a cor de uma palavra se for necessário e etc.</p>
        `
      },
      {
        id: 'teste',
        title: 'Teste',
        description: 'Teste Victor',
        content: `
          <h2>Teste</h2>

<p>Certo chato eu não consigo selecionar o modulo do tópico, e ao selecionar o radio Criar novo modulo não me habilita lugar algum para incluir o nome do novo modulo.<img src="images/"D:\Fotos\wallpapers\windows-11-stock-grey-abstract-dark-background-1080x2340-8957.png"" alt="Descrição da imagem aqui"></p>
        `
      },
    ]
  },


];