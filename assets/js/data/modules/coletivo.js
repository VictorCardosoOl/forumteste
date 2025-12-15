export const Coletivo = {

  id: 'coletivo',
  title: 'Coletivo',
  description: 'Módulo destinado ao tratamento de questões internas relacionadas ao suporte.',
  icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/>
  </g>
</svg>`,
  topics: [
    {
      id: 'analise-erros-saas',
      title: 'Análise de Erros em Sistemas SaaS',
      description: 'Metodologia para identificação, classificação e reporte de falhas em sistemas baseados em nuvem.',
      group: 'Suporte Técnico',
      tags: ['Análise', 'Debug'],
      content: `
<div class="welcome-banner">
  <h1>Análise Técnica de Erros</h1>
  <p>A capacidade de distinguir entre falhas de sistema, erros de operação e intermitências de conexão é fundamental para um suporte eficiente.</p>
</div>

<section class="analysis-framework">
  <h2>Framework de Análise</h2>
  
  <div class="step-card">
    <h3>1. Reprodução</h3>
    <p>O erro é reprodutível? Tente realizar a mesma ação em:</p>
    <ul>
      <li>Outro navegador (Chrome vs Firefox)</li>
      <li>Aba anônima (sem cache/extensões)</li>
      <li>Outro usuário ou perfil de acesso</li>
    </ul>
  </div>

  <div class="step-card">
    <h3>2. Isolamento</h3>
    <p>O problema ocorre apenas em um registro específico ou em todos? Apenas em uma máquina ou na rede inteira?</p>
  </div>

  <div class="step-card">
    <h3>3. Evidência</h3>
    <p>Sempre colete:</p>
    <ul>
      <li>Captura de tela inteira (incluindo URL e data/hora)</li>
      <li>Passo a passo exato para chegar ao erro</li>
      <li>Logs do Console do Desenvolvedor (F12) se possível</li>
    </ul>
  </div>
</section>
      `
    },
    {
      id: 'metodologia-testes',
      title: 'Metodologia de Testes de Problemas',
      description: 'Como estruturar testes lógicos para validar correções ou identificar a raiz de um problema reportado.',
      group: 'Suporte Técnico',
      tags: ['Testes', 'QA'],
      content: `
<div class="welcome-banner">
  <h1>Estratégia de Testes</h1>
  <p>Testar não é apenas clicar aleatoriamente. É um processo lógico de eliminação de variáveis.</p>
</div>

<section class="testing-methods">
  <h2>Abordagens de Teste</h2>
  
  <div class="method-card">
    <h3>Teste A/B</h3>
    <p>Compare um cenário que funciona com um que não funciona. O que há de diferente entre eles? (Permissões, dados, configurações).</p>
  </div>

  <div class="method-card">
    <h3>Teste de Regressão</h3>
    <p>Após uma atualização ou correção, verifique se as funcionalidades antigas continuam operando normalmente.</p>
  </div>

  <div class="method-card">
    <h3>Teste de Carga (Simplificado)</h3>
    <p>O sistema responde lentamente apenas quando processa grandes volumes de dados? Tente com um arquivo menor.</p>
  </div>
</section>
      `
    },
    {
      id: 'tecnicas-sondagem',
      title: 'Técnicas de Sondagem e Diagnóstico',
      description: 'Perguntas-chave para extrair as informações necessárias do usuário final e agilizar o atendimento.',
      group: 'Atendimento',
      tags: ['Soft Skills', 'Diagnóstico'],
      content: `
<div class="welcome-banner">
  <h1>A Arte da Sondagem</h1>
  <p>Muitas vezes, o que o usuário diz ser o problema é apenas um sintoma. A sondagem busca a causa raiz.</p>
</div>

<section class="questions-guide">
  <h2>As Perguntas de Ouro</h2>
  
  <div class="question-card">
    <h3>"Desde quando isso acontece?"</h3>
    <p>Ajuda a correlacionar o erro com atualizações recentes ou mudanças de configuração.</p>
  </div>

  <div class="question-card">
    <h3>"Funcionava antes?"</h3>
    <p>Identifica se é um erro novo ou se a funcionalidade nunca foi utilizada antes por aquele usuário.</p>
  </div>

  <div class="question-card">
    <h3>"O que você esperava que acontecesse?"</h3>
    <p>Alinha a expectativa. Às vezes não é um erro, mas um entendimento equivocado de como a ferramenta funciona.</p>
  </div>
</section>

<style>
  .welcome-banner { background: #e0f2f1; padding: 20px; border-radius: 6px; text-align: center; color: #00695c; }
  .step-card { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #009688; margin: 10px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  .method-card { background: #f5f5f5; padding: 15px; border-radius: 6px; margin: 10px 0; }
  .question-card { background: #e0f7fa; padding: 15px; border-radius: 6px; border-left: 4px solid #00bcd4; margin: 10px 0; }
</style>
      `
    }
  ]
};

