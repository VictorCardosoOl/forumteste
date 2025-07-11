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
      },
      {
        id: 'batata',
        title: 'Batata',
        description: 'Batata 123',
        content: `
<h2>Teste do Victor</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit sagittis, molestie ante id, maximus nunc. Maecenas venenatis felis ipsum, ac varius eros luctus at. Vestibulum quis ipsum sed odio pretium bibendum. Vivamus eleifend sollicitudin finibus. Quisque facilisis mauris vitae magna maximus, non finibus augue luctus. In hac habitasse platea dictumst. Maecenas eget vestibulum velit, a volutpat augue. Donec tristique feugiat sapien a suscipit. Phasellus fringilla non dui nec auctor. Praesent nunc lacus, pharetra nec mauris ac, accumsan gravida justo. Maecenas mollis luctus ultricies. Integer ultrices nunc at sem lacinia consequat. Nam ipsum tortor, posuere eget diam et, sollicitudin placerat nisl. Ut a volutpat purus. Ut ut tincidunt metus, sit amet egestas sapien.</p>

<p>Phasellus dictum neque id nulla ultrices, vitae luctus neque mollis. Aenean tempor, arcu sed ornare varius, eros nisi tincidunt metus, ut semper arcu odio ut mauris. Donec ut dolor ultricies, egestas justo ac, scelerisque felis. Maecenas et tempor elit. Suspendisse quis eros commodo, mollis urna nec, aliquam magna. Mauris suscipit accumsan vestibulum. Mauris tristique erat sed magna scelerisque malesuada. Proin elementum mattis est, ut iaculis magna sollicitudin in. In condimentum eget lorem et vestibulum. Donec pellentesque ex tortor, a pulvinar dolor dictum id. Sed porttitor mi non neque laoreet, et malesuada nibh vestibulum. Cras a orci tempus, ultrices nisl tempus, rhoncus lorem. Ut rhoncus, diam eget malesuada condimentum, arcu metus posuere libero, at consequat velit leo mattis metus. Donec cursus eros ac neque pellentesque, ut maximus mauris volutpat. Curabitur ultricies justo fermentum eleifend pretium.</p>

<h3>Teste PT 1</h3>

<p>Mauris sed mattis dolor, quis commodo nisi. Maecenas tortor lectus, gravida in mi a, faucibus suscipit magna. Suspendisse potenti. Donec vitae aliquet justo, a ullamcorper massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec commodo risus, a posuere diam. Ut eget odio libero. Vivamus fringilla felis facilisis elit feugiat gravida. Nam eu scelerisque tortor, id ornare nisl. Aliquam iaculis rutrum ornare. Vestibulum euismod ligula nec purus volutpat, pharetra sollicitudin magna placerat. Ut maximus urna sed nibh semper pulvinar. Ut eu sem congue ipsum vestibulum blandit. Suspendisse eu leo sapien. Quisque rhoncus lacus et lacus imperdiet, sit amet egestas justo luctus.</p>
  `
      },
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