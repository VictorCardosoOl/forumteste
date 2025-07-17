// Arquivo: data.js (Reformulado)
const forumData = [
  {
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
        <!-- Conteúdo mantido igual -->
        `
      },
      {
        id: 'instalacao-linux-guia',
        title: 'Guia Completo: Instalação no Linux',
        description: 'Métodos de instalação em distribuições Linux para iniciantes',
        group: 'Linux',
        content: `<!-- Conteúdo mantido igual -->`
      }
    ]
  },
  {
    id: 'formatacao',
    title: 'Formatação',
    description: 'Módulo de Formatação e Configuração de Sistemas',
    icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,18H7V16H17V18M15,14H9V12H15V14M15,10H9V8H15V10M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/></svg>`,
    topics: [
      {
        id: 'guia-instalacao-sistemas',
        title: 'Guia Completo: Instalação de Sistemas',
        description: 'Passo a passo para instalar sistemas operacionais',
        group: 'Instalação',
        content: `<!-- Conteúdo mantido igual -->`
      },
      {
        id: 'pos-formatacao-checklist',
        title: 'Checklist Pós-Formatação',
        description: '7 cuidados essenciais após formatar o computador',
        group: 'Configuração',
        content: `<!-- Conteúdo mantido igual -->`
      }
    ]
  },
  {
    id: 'redes',
    title: 'Redes',
    description: 'Módulo de Estrutura e Configuração de Redes',
    icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13,18H14A1,1 0 0,1 15,19H15.73L13,21.7V22A1,1 0 0,1 12,23A1,1 0 0,1 11,22V18H10A1,1 0 0,1 9,17V15.27L6.3,18H6A1,1 0 0,1 5,17V16H2A1,1 0 0,1 1,15A1,1 0 0,1 2,14H6A1,1 0 0,1 7,15V16H8.73L11,13.73V13A1,1 0 0,1 12,12A1,1 0 0,1 13,13V14H14A1,1 0 0,1 15,15V17A1,1 0 0,1 14,18H13V20.27L15.73,17.5H16A1,1 0 0,1 17,18.5V22H18A1,1 0 0,1 19,23A1,1 0 0,1 20,22H22A1,1 0 0,1 23,21A1,1 0 0,1 22,20H18A1,1 0 0,1 17,19V17.27L14.27,20H14A1,1 0 0,1 13,19V18Z"/></svg>`,
    topics: [
      {
        id: 'tipos-redes',
        title: 'Tipos de Redes: LAN, WAN e MAN',
        description: 'Diferenças fundamentais entre redes locais e de longa distância',
        group: 'Conceitos',
        content: `<!-- Conteúdo mantido igual -->`
      },
      {
        id: 'modelos-osi-tcpip',
        title: 'Modelos OSI e TCP/IP',
        description: 'Entendendo as camadas da comunicação de rede',
        group: 'Protocolos',
        content: `<!-- Conteúdo mantido igual -->`
      },
      {
        id: 'hardware-rede',
        title: 'Hardware de Rede Essencial',
        description: 'Função de roteadores, switches e outros componentes',
        group: 'Infraestrutura',
        content: `<!-- Conteúdo mantido igual -->`
      }
    ]
  },
  {
    id: 'programacao',
    title: 'Programação',
    description: 'Módulo de Fundamentos de Programação',
    icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3,3H21V21H3V3M5,5V19H19V5H5M13.39,17.24L16.58,12.92L13.39,8.76L12,10.34L14.2,12.92L12,15.5L13.39,17.24M10.61,17.24L7.42,12.92L10.61,8.76L12,10.34L9.8,12.92L12,15.5L10.61,17.24Z"/></svg>`,
    topics: [
      {
        id: 'linguagens-programacao',
        title: 'Linguagens de Alto vs. Baixo Nível',
        description: 'Diferenças fundamentais entre tipos de linguagens',
        group: 'Fundamentos',
        content: `<!-- Conteúdo mantido igual -->`
      },
      {
        id: 'logica-programacao',
        title: 'Lógica de Programação',
        description: '5 pilares para começar a programar',
        group: 'Fundamentos',
        content: `<!-- Conteúdo mantido igual -->`
      }
    ]
  },
  {
    id: 'resolucao-problemas',
    title: 'Resolução de Problemas',
    description: 'Soluções para erros e problemas comuns',
    icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,17H11V15H13V17M13,13H11V7H13V13Z"/></svg>`,
    topics: [
      {
        id: 'erro-instalacao-windows',
        title: 'Erros Comuns de Instalação no Windows',
        description: 'Solução para problemas frequentes durante instalações',
        group: 'Windows',
        content: `<h2>Erros Comuns de Instalação no Windows</h2>
        <p>Este guia aborda os problemas mais frequentes encontrados durante a instalação de programas no Windows e como resolvê-los.</p>
        
        <h3>1. "Instalação Bloqueada pelo Administrador"</h3>
        <p><strong>Sintoma:</strong> Mensagem indicando que a instalação foi bloqueada pela política do sistema.</p>
        <p><strong>Solução:</strong></p>
        <ol>
          <li>Execute o instalador como administrador (botão direito > Executar como administrador)</li>
          <li>Verifique as políticas de grupo (gpedit.msc) se estiver em um ambiente corporativo</li>
          <li>Desative temporariamente o controle de contas de usuário (UAC)</li>
        </ol>
        
        <h3>2. "Arquivo Corrompido" ou "Assinatura Inválida"</h3>
        <p><strong>Sintoma:</strong> O instalador não inicia ou exibe mensagem de arquivo inválido.</p>
        <p><strong>Solução:</strong></p>
        <ol>
          <li>Baixe novamente o instalador do site oficial</li>
          <li>Verifique o hash SHA-256 do arquivo</li>
          <li>Desative o antivírus temporariamente</li>
        </ol>`
      },
      {
        id: 'problemas-sondagem',
        title: 'Problemas com Sondagem de Cadastro',
        description: 'Resolver falhas na verificação de cadastros existentes',
        group: 'Cadastros',
        content: `<h2>Problemas com Sondagem de Cadastro</h2>
        <p>Quando o sistema não consegue verificar corretamente se um cadastro já existe.</p>
        
        <h3>Sintomas Comuns</h3>
        <ul>
          <li>Cadastro duplicado de usuários</li>
          <li>Mensagens de erro durante o cadastro</li>
          <li>Lentidão no processo de verificação</li>
        </ul>
        
        <h3>Soluções</h3>
        <ol>
          <li>Verifique a conexão com o banco de dados</li>
          <li>Confira os índices das tabelas de cadastro</li>
          <li>Analise os logs do sistema para identificar falhas</li>
        </ol>`
      },
      {
        id: 'cadastro-duplicado',
        title: 'Cadastro Duplicado no Sistema',
        description: 'Como identificar e resolver registros duplicados',
        group: 'Cadastros',
        content: `<h2>Resolvendo Cadastros Duplicados</h2>
        <p>Procedimentos para identificar e consolidar registros duplicados.</p>
        
        <h3>Identificação</h3>
        <p>Use consultas SQL para encontrar duplicatas:</p>
        <pre><code>SELECT email, COUNT(*) 
FROM usuarios 
GROUP BY email 
HAVING COUNT(*) > 1</code></pre>
        
        <h3>Resolução</h3>
        <ol>
          <li>Determine qual registro deve ser mantido</li>
          <li>Atualize as referências nos relacionamentos</li>
          <li>Remova os registros duplicados</li>
        </ol>`
      }
    ]
  },
  {
    id: 'analise-dados',
    title: 'Análise de Dados',
    description: 'Módulo de Estruturas e Processamento de Dados',
    icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z"/></svg>`,
    topics: [
      {
        id: 'introducao-sql',
        title: 'Introdução ao SQL para Análise',
        description: 'Conceitos básicos de SQL para análise de dados',
        group: 'Banco de Dados',
        content: `<h2>Introdução ao SQL para Análise</h2>
        <p>Fundamentos de SQL para extrair insights de bancos de dados.</p>`
      },
      {
        id: 'introducao-sql',
        title: 'Introdução ao SQL para Análise',
        description: 'Conceitos básicos de SQL para análise de dados',
        group: 'Banco de Dados',
        content: `<h2>Introdução ao SQL para Análise</h2>
        <p>Fundamentos de SQL para extrair insights de bancos de dados.</p>`
      },
      {
        id: 'introducao-sql',
        title: 'Introdução ao SQL para Análise',
        description: 'Conceitos básicos de SQL para análise de dados',
        group: 'Banco de Dados',
        content: `<h2>Introdução ao SQL para Análise</h2>
        <p>Fundamentos de SQL para extrair insights de bancos de dados.</p>`
      },
      {
        id: 'introducao-sql',
        title: 'Introdução ao SQL para Análise',
        description: 'Conceitos básicos de SQL para análise de dados',
        group: 'Banco de Dados',
        content: `<h2>Introdução ao SQL para Análise</h2>
        <p>Fundamentos de SQL para extrair insights de bancos de dados.</p>`
      },
      {
        id: 'introducao-sql',
        title: 'Introdução ao SQL para Análise',
        description: 'Conceitos básicos de SQL para análise de dados',
        group: 'Banco de Dados',
        content: `<h2>Introdução ao SQL para Análise</h2>
        <p>Fundamentos de SQL para extrair insights de bancos de dados.</p>`
      },
      {
        id: 'ferramentas-analise',
        title: 'Ferramentas de Análise de Dados',
        description: 'Comparativo entre as principais ferramentas do mercado',
        group: 'Ferramentas',
        content: `<h2>Ferramentas de Análise de Dados</h2>
        <p>Visão geral das ferramentas mais utilizadas na análise de dados.</p>`
      },
      {
        id: 'ferramentas-analise',
        title: 'Ferramentas de Análise de Dados',
        description: 'Comparativo entre as principais ferramentas do mercado',
        group: 'Ferramentas',
        content: `<h2>Ferramentas de Análise de Dados</h2>
        <p>Visão geral das ferramentas mais utilizadas na análise de dados.</p>`
      },
      {
        id: 'ferramentas-analise',
        title: 'Ferramentas de Análise de Dados',
        description: 'Comparativo entre as principais ferramentas do mercado',
        group: 'Ferramentas',
        content: `<h2>Ferramentas de Análise de Dados</h2>
        <p>Visão geral das ferramentas mais utilizadas na análise de dados.</p>`
      },
      {
        id: 'ferramentas-analise',
        title: 'Ferramentas de Análise de Dados',
        description: 'Comparativo entre as principais ferramentas do mercado',
        group: 'Ferramentas',
        content: `<h2>Ferramentas de Análise de Dados</h2>
        <p>Visão geral das ferramentas mais utilizadas na análise de dados.</p>`
      },
      {
        id: 'ferramentas-analise',
        title: 'Ferramentas de Análise de Dados',
        description: 'Comparativo entre as principais ferramentas do mercado',
        group: 'Ferramentas',
        content: `<h2>Ferramentas de Análise de Dados</h2>
        <p>Visão geral das ferramentas mais utilizadas na análise de dados.</p>`
      }
    ]
  },
];

