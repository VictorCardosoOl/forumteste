export const analiseDadosModule = {
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
      id: 'ferramentas-analise',
      title: 'Ferramentas de Análise de Dados',
      description: 'Comparativo entre as principais ferramentas do mercado',
      group: 'Ferramentas',
      content: `<h2>Ferramentas de Análise de Dados</h2>
      <p>Visão geral das ferramentas mais utilizadas na análise de dados.</p>`
    }
  ]
};