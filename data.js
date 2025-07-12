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
      {
  id: 'teste-2',
  title: 'Teste 2',
  description: 'Teste Victor 12/07',
  content: `
<h2>Teste de formatação</h2>
<h3> Teste teste</h3>

<p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet lacinia turpis. Vivamus sit amet ligula laoreet, egestas nisi et, porttitor purus. Praesent in eleifend purus, at viverra lorem. Aliquam erat volutpat. Vivamus finibus quam vel pellentesque lacinia. Duis vulputate hendrerit facilisis. Nunc id vehicula dui. Nullam euismod metus quis ex facilisis, id ultrices arcu ullamcorper. Integer fringilla id dolor sollicitudin ornare.</p>




<img src="https://br.freepik.com/imagem-ia-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_40965130.htm#fromView=keyword&page=1&position=0&uuid=e61414eb-6409-4627-a776-297540886957&query=Wallpaper+Desktop" alt="imagem" class="content-image">

<span style="color: red;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet lacinia turpis. Vivamus sit amet ligula laoreet, egestas nisi et, porttitor purus. Praesent in eleifend purus, at viverra lorem. Aliquam erat volutpat. Vivamus finibus quam vel pellentesque lacinia. Duis vulputate hendrerit facilisis. Nunc id vehicula dui. Nullam euismod metus quis ex facilisis, id ultrices arcu ullamcorper. Integer fringilla id dolor sollicitudin ornare.</span>
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
     
    ]
  },
  {
    id: 'refatorar',
    title: 'Refatorar',
    description: 'Modulo destinado a Testes',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-16.54-.917a6.59 6.59 0 0 1 6.55-5.833a6.585 6.585 0 0 1 5.242 2.592a.75.75 0 0 1-1.192.911a5.085 5.085 0 0 0-4.05-2.003a5.09 5.09 0 0 0-5.037 4.333h.364a.75.75 0 0 1 .53 1.281l-1.169 1.167a.75.75 0 0 1-1.06 0L4.47 12.364a.75.75 0 0 1 .53-1.28h.46Zm12.902-.614a.75.75 0 0 0-1.06 0l-1.168 1.167a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.037 4.334a5.084 5.084 0 0 1-4.037-1.986a.75.75 0 0 0-1.188.916a6.584 6.584 0 0 0 5.226 2.57a6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281l-1.168-1.167Z" clip-rule="evenodd"/>
</svg>`,
    topics: [{
    id: 'teste-3-12-07',
    title: 'Teste 3 12/07',
    description: 'Teste',
    content: `
<h2>Título Principal</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet lacinia turpis. Vivamus sit amet ligula laoreet, egestas nisi et, porttitor purus. Praesent in eleifend purus, at viverra lorem. Aliquam erat volutpat. Vivamus finibus quam vel pellentesque lacinia. Duis vulputate hendrerit facilisis. Nunc id vehicula dui. Nullam euismod metus quis ex facilisis, id ultrices arcu ullamcorper. Integer fringilla id dolor sollicitudin ornare.</p>

<p><span style="color: red;"><em><u>tLorem ipsum dolor sit amet, consectetur adipiscing elit</span></u></em>. Integer sit amet lacinia turpis. Vivamus sit amet ligula laoreet, egestas nisi et, porttitor purus. Praesent in eleifend purus, at viverra lorem. Aliquam erat volutpat. Vivamus finibus quam vel pellentesque lacinia. Duis vulputate hendrerit facilisis. Nunc id vehicula dui. Nullam euismod metus quis ex facilisis, id ultrices arcu ullamcorper. Integer fringilla id dolor sollicitudin ornare.</p>
<img src="https://br.freepik.com/imagem-ia-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_40965130.htm#fromView=keyword&page=1&position=0&uuid=e61414eb-6409-4627-a776-297540886957&query=Wallpaper+Desktop" alt="Imagem" class="content-image" loading="lazy">

<img src="https://wallpapers.com/images/hd/gon-freecss-bloody-face-03r8y6npn96sboad.webp" alt="Imagem" class="content-image" loading="lazy">`
}]
},


];