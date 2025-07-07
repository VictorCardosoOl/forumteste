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
    id: 'testes',
    title: 'Testes de Conteúdo',
    description: 'Exemplos de tópicos para demonstração.',
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 32C19 33.1046 18.1046 34 17 34C15.8954 34 15 33.1046 15 32C15 30.8954 15.8954 30 17 30C18.1046 30 19 30.8954 19 32Z" fill="currentColor"/><path d="M33 32C33 33.1046 32.1046 34 31 34C29.8954 34 29 33.1046 29 32C29 30.8954 29.8954 30 31 30C32.1046 30 33 30.8954 33 32Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 9.34315 5.34315 8 7 8H34.5098L44 24V38C44 39.6569 42.6569 41 41 41H7C5.34315 41 4 39.6569 4 38V11Z" fill="currentColor"/></svg>`,
    topics: [
      {
        id: 'batata-1',
        title: 'Artigo de Teste Batata 1',
        description: 'Primeiro artigo de teste com um fluxograma.',
        content: `
          <h2>Teste de Título</h2>
          <p>Suspendisse tellus justo, varius vel sapien ac, laoreet sodales lectus. Nunc ut gravida sapien, sit amet congue sem. Cras convallis malesuada suscipit. Vivamus egestas pharetra tristique. Sed porttitor fringilla congue.</p>
          <p><strong>Ut quis elementum nulla.</strong> Nam sagittis ipsum vitae mollis viverra. Nunc quis venenatis velit. Mauris facilisis dignissim augue, sed consequat nulla varius eget.</p>
          <img src="images/placeholder-fluxograma.png" alt="Exemplo de Fluxograma" class="article-image">
        `
      },
      {
        id: 'batata-2',
        title: 'Artigo de Teste Batata 2',
        description: 'Segundo artigo de teste, apenas com texto.',
        content: `
          <h2>Outro Título de Teste</h2>
          <p>Maecenas sit amet mauris posuere mi venenatis auctor eget vel velit. Vestibulum nec nibh quis lectus convallis consequat. Sed sodales, metus eget volutpat ullamcorper, tortor libero rutrum risus, in feugiat arcu diam a lacus.</p>
          <p>Nullam quis mattis mauris, vel aliquam eros. Donec fermentum ante id elementum elementum. Pellentesque dictum hendrerit sem, eu bibendum augue mattis vitae. Fusce scelerisque neque in turpis ultricies consequat. Duis nec lobortis elit, et vulputate sem.</p>
        `
      }
    ]
  }
];