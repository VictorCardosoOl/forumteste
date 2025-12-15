const problemas = {
  id: 'resolu-o-de-problemas',
  title: 'Resolução de problemas',
  description: 'Este módulo tem como objetivo apoiar o processo de solução de problemas.',
  icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 14h-2v-2h2v2m0-4h-2V5h2"/>
</svg>`,
  topics: [
    {
      id: 'resolucao-erros-s2240',
      title: 'Resolução de Erros no Evento S-2240',
      description: 'Guia de diagnóstico e correção para inconsistências comuns no evento de Condições Ambientais do Trabalho.',
      group: 'eSocial',
      tags: ['S-2240', 'Erro'],
      content: `
<div class="welcome-banner">
  <h1>Diagnóstico S-2240</h1>
  <p>O evento S-2240 registra as condições ambientais de trabalho. Fatores de risco mal cadastrados ou inconsistências de datas são as principais causas de rejeição.</p>
</div>

<section class="common-errors">
  <h2>Principais Mensagens de Erro</h2>

  <div class="error-card">
    <h3>"Trabalhador sem vínculo ativo na data do evento"</h3>
    <p><strong>Causa:</strong> A data de início da condição ambiental (Data de Início da Condição) é anterior à data de admissão do trabalhador.</p>
    <p><strong>Solução:</strong> Ajuste a data de início do risco para ser igual ou posterior à admissão.</p>
  </div>

  <div class="error-card">
    <h3>"Descrição da atividade não informada"</h3>
    <p><strong>Causa:</strong> O campo de descrição das atividades desempenhadas está vazio no cadastro do cargo ou função.</p>
    <p><strong>Solução:</strong> Preencha a descrição detalhada das atividades no cadastro do colaborador.</p>
  </div>

  <div class="error-card">
    <h3>"Agente Nocivo Inválido"</h3>
    <p><strong>Causa:</strong> Código do agente nocivo informado não existe na Tabela 24 do eSocial.</p>
    <p><strong>Solução:</strong> Verifique a tabela oficial e utilize apenas códigos vigentes. Para ausência de riscos, use o código específico (09.01.001).</p>
  </div>
</section>
      `
    },
    {
      id: 'erros-impressao-pgr',
      title: 'Erros na Impressão do PGR: Solução para Problemas de Formatação',
      description: 'Como resolver problemas comuns de quebra de página, cabeçalhos cortados e formatação ao gerar o PDF do PGR.',
      group: 'Documentos',
      tags: ['PGR', 'Impressão'],
      content: `
<div class="welcome-banner">
  <h1>Problemas de Formatação no PGR</h1>
  <p>Dificuldades ao imprimir ou gerar PDF do Programa de Gerenciamento de Riscos geralmente estão ligadas a configurações do navegador ou do driver de impressão.</p>
</div>

<section class="troubleshooting-steps">
  <h2>Ajustes Recomendados</h2>
  
  <div class="step-card">
    <h3>1. Configurações de Margem</h3>
    <p>Ao abrir a janela de impressão do navegador (Ctrl+P):</p>
    <ul>
      <li>Defina as margens como "Nenhuma" ou "Mínima".</li>
      <li>Verifique se a escala está em 100% ou "Ajustar à página".</li>
    </ul>
  </div>

  <div class="step-card">
    <h3>2. Gráficos de Plano de Fundo</h3>
    <p>Para que cores e cabeçalhos apareçam corretamente:</p>
    <ul>
      <li>Marque a opção <strong>"Gráficos de plano de fundo"</strong> nas configurações avançadas de impressão.</li>
    </ul>
  </div>

  <div class="step-card">
    <h3>3. Orientação da Página</h3>
    <p>O PGR costuma ter tabelas largas. Certifique-se de que a orientação está definida como <strong>Retrato</strong>, a menos que haja tabelas específicas que exijam Paisagem.</p>
  </div>
</section>
      `
    },
    {
      id: 'erros-s2210',
      title: 'Erros no Evento S-2210 - Comunicação de Acidente de Trabalho',
      description: 'Correção de falhas no envio da CAT: prazos, campos obrigatórios e inconsistências médicas.',
      group: 'eSocial',
      tags: ['S-2210', 'CAT'],
      content: `
<div class="welcome-banner">
  <h1>Envio da CAT (S-2210)</h1>
  <p>A Comunicação de Acidente de Trabalho exige precisão nos dados médicos e do acidente. Veja como corrigir rejeições comuns.</p>
</div>

<section class="cat-errors">
  <h2>Inconsistências Frequentes</h2>

  <div class="error-card critical">
    <h3>Prazo de Envio</h3>
    <p>A CAT deve ser enviada até o <strong>primeiro dia útil seguinte</strong> ao da ocorrência. Em caso de morte, o envio é imediato.</p>
  </div>

  <div class="error-card">
    <h3>"Parte do corpo atingida incompatível"</h3>
    <p>O eSocial valida a coerência entre a parte do corpo e o agente causador. Verifique se os códigos selecionados na Tabela 13 e 14/15 fazem sentido lógico.</p>
  </div>

  <div class="error-card">
    <h3>Dados do Atestado Médico</h3>
    <p>É obrigatório informar:</p>
    <ul>
      <li>Data do atendimento</li>
      <li>Hora do atendimento</li>
      <li>CID (Código Internacional de Doenças)</li>
      <li>CRM do médico atendente</li>
    </ul>
    <p>A falta de qualquer um destes campos impedirá o envio.</p>
  </div>
</section>

<style>
  .welcome-banner { background: #ffebee; padding: 20px; border-radius: 6px; text-align: center; color: #b71c1c; }
  .error-card { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #b71c1c; margin: 10px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  .step-card { background: #f5f5f5; padding: 15px; border-radius: 6px; margin: 10px 0; }
  .critical { border-left-color: #d32f2f; background: #ffebee; }
</style>
      `
    }



  ]
};
