export const financeiro = {
  id: 'financeiro',
  title: 'Financeiro e Faturamento',
  description: 'Este módulo tem como objetivo apoiar o processo de solução de problemas relacionados a processos financeiros e de faturamento.',
  icon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <path fill="currentColor" d="M19.72 10.47a11.65 11.65 0 0 0-6.31.52a.8.8 0 1 0 .59 1.49a10.11 10.11 0 0 1 5.44-.48a.8.8 0 1 0 .28-1.57Z" class="clr-i-outline clr-i-outline-path-1"/>
    <circle cx="25.38" cy="16.71" r="1.36" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"/>
    <path fill="currentColor" d="M35.51 18.63a1 1 0 0 0-.84-.44a3.42 3.42 0 0 1-2.09-1.12a17.35 17.35 0 0 1-2.63-3.78l2.88-4.5A1.89 1.89 0 0 0 33 7a1.77 1.77 0 0 0-1.33-1a10.12 10.12 0 0 0-5.39.75a12.72 12.72 0 0 0-2.72 1.63a16.94 16.94 0 0 0-5.16-1.39C11.31 6.3 4.83 10.9 4 17a2.56 2.56 0 0 1-1.38-1.53a1.81 1.81 0 0 1 .14-1.4a1.19 1.19 0 0 1 .43-.43a1.08 1.08 0 0 0-1.12-1.85A3.31 3.31 0 0 0 .91 13a4 4 0 0 0-.33 3.08A4.76 4.76 0 0 0 3 18.95l.92.46a17.58 17.58 0 0 0 1.82 7l.17.38a23 23 0 0 0 3.29 5.09a1 1 0 0 0 .75.34h4.52a1 1 0 0 0 .92-1.38l-.39-.9l1.18.13a20.33 20.33 0 0 0 4 0c.37.6.77 1.2 1.21 1.79a1 1 0 0 0 .8.41h4.34a1 1 0 0 0 .92-1.39c-.17-.4-.34-.83-.47-1.2c-.18-.53-.32-1-.43-1.45A13.18 13.18 0 0 0 29.56 26a12.5 12.5 0 0 0 3 0a1 1 0 0 0 .78-.62l2.26-5.81a1 1 0 0 0-.09-.94Zm-3.78 5.44a11.37 11.37 0 0 1-2.35-.11a8.2 8.2 0 0 1-2.53-.87a1 1 0 0 0-.93 1.77a11.72 11.72 0 0 0 1.29.58a8 8 0 0 1-1.8 1.16l-1.06.48s.49 2.19.82 3.16h-2.38c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.53 18.53 0 0 1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63 2.43.75 2.74h-2.58A20.57 20.57 0 0 1 7.76 26l-.18-.39A14.62 14.62 0 0 1 6 17.48c.54-5.19 6.12-9.11 12.19-8.54a15.47 15.47 0 0 1 5.08 1.48l.62.29l.5-.47A10.29 10.29 0 0 1 27 8.54a8.25 8.25 0 0 1 4-.65l-3.38 5.29l.25.5a21.16 21.16 0 0 0 3.31 4.84a6.49 6.49 0 0 0 2.14 1.39Z" class="clr-i-outline clr-i-outline-path-3"/>
    <path fill="none" d="M0 0h36v36H0z"/>
</svg>`,
  topics: [
    {
      id: 'cnab-remessa-retorno',
      title: 'CNAB - Remessa e Retorno: Guia Completo',
      description: 'Entenda os fundamentos do padrão CNAB, a diferença entre layouts 240 e 400, e o fluxo padrão de remessa e retorno bancário.',
      tags: ['Financeiro', 'Bancário'],
      group: 'Financeiro',
      content: `
<div class="welcome-banner">
  <h1>Guia de Processamento CNAB</h1>
  <p>O CNAB (Centro Nacional de Automação Bancária) é o padrão utilizado para troca digital de informações entre empresas e bancos. Este guia aborda os conceitos essenciais para geração e processamento desses arquivos.</p>
</div>

<section class="core-concepts">
  <h2>Conceitos Fundamentais</h2>
  
  <div class="grid-container">
    <div class="concept-card">
      <h3>O que é Remessa?</h3>
      <p>Arquivo enviado pela empresa ao banco contendo instruções como:</p>
      <ul>
        <li>Registrar novos boletos para cobrança</li>
        <li>Instruções de baixa ou cancelamento</li>
        <li>Alterações de vencimento ou abatimentos</li>
      </ul>
    </div>

    <div class="concept-card">
      <h3>O que é Retorno?</h3>
      <p>Arquivo disponibilizado pelo banco para a empresa contendo:</p>
      <ul>
        <li>Confirmação de entrada de títulos</li>
        <li>Informações de boletos quitados (liquidação)</li>
        <li>Recusas ou rejeições de operações</li>
      </ul>
    </div>
  </div>
</section>

<section class="layouts-section">
  <h2>Layouts CNAB: 400 vs 240</h2>
  <div class="comparison-table">
    <table>
      <thead>
        <tr>
          <th>Característica</th>
          <th>CNAB 400</th>
          <th>CNAB 240</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Estrutura</strong></td>
          <td>Registro simplificado, menos detalhado.</td>
          <td>Estrutura segmentada, permite maior detalhamento.</td>
        </tr>
        <tr>
          <td><strong>Tamanho do Registro</strong></td>
          <td>400 caracteres por linha.</td>
          <td>240 caracteres por linha.</td>
        </tr>
        <tr>
          <td><strong>Versatilidade</strong></td>
          <td>Geralmente usado para Cobrança Simples.</td>
          <td>Usado para múltiplos serviços (Cobrança, Pagamentos, Extratos, Conciliação).</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="process-flow">
  <h2>Fluxo de Operação</h2>
  <div class="step-by-step">
    <div class="step">
      <h3>1. Geração da Remessa</h3>
      <p>O sistema ERP gera um arquivo .REM ou .TXT com os dados dos boletos emitidos. É crucial validar se os dados cadastrais (CPF/CNPJ, Endereço) estão completos para evitar rejeição bancária.</p>
    </div>
    <div class="step">
      <h3>2. Transmissão</h3>
      <p>O arquivo é enviado ao banco via internet banking ou transmitido automaticamente (VAN/API).</p>
    </div>
    <div class="step">
      <h3>3. Processamento Bancário</h3>
      <p>O banco valida o arquivo. Se houver erros, eles serão apontados no arquivo de retorno.</p>
    </div>
    <div class="step">
      <h3>4. Processamento do Retorno</h3>
      <p>A empresa baixa o arquivo .RET do banco e processa no sistema ERP. O sistema lê as informações de liquidação e baixa automaticamente os títulos pagos.</p>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    border-left: 4px solid #2196F3;
  }
  .comparison-table table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background: white;
  }
  .comparison-table th, .comparison-table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }
  .comparison-table th {
    background-color: #f5f5f5;
  }
  .step-by-step .step {
    background: #f8f9fa;
    padding: 15px;
    margin-bottom: 15px;
    border-left: 4px solid #4caf50;
    border-radius: 4px;
  }
</style>
      `
    },
    {
      id: 'processo-faturamento-empresarial',
      title: 'Processo de Faturamento Empresarial',
      description: 'Visão geral e melhores práticas para o ciclo de faturamento de serviços e contratos corporativos.',
      tags: ['Faturamento', 'Gestão'],
      group: 'Faturamento',
      content: `
<div class="welcome-banner">
  <h1>Fluxo de Faturamento Corporativo</h1>
  <p>O faturamento é o coração financeiro da empresa. Este artigo detalha as etapas essenciais para garantir um ciclo de receita eficiente e sem erros.</p>
</div>

<section class="invoice-types">
  <h2>Modelos de Faturamento</h2>
  
  <div class="grid-container">
    <div class="type-card">
      <h3>Faturamento Contratual (Recorrente)</h3>
      <p>Cobrança periódica baseada em contratos de longo prazo.</p>
      <ul>
        <li><strong>Cobrança Fixa:</strong> Valor mensal pré-estabelecido.</li>
        <li><strong>Cobrança Variável (Postecipada):</strong> Baseada no consumo (ex: quantidade de vidas ativas, exames realizados no período).</li>
      </ul>
    </div>
    
    <div class="type-card">
      <h3>Faturamento Avulso (Spot)</h3>
      <p>Cobrança pontual por serviços específicos ou vendas de produtos, gerada imediatamente após a entrega ou execução.</p>
    </div>
  </div>
</section>

<section class="best-practices">
  <h2>Etapas de Conferência</h2>
  <p>Para evitar cancelamentos de notas e refaturamento, recomenda-se seguir este checklist antes da emissão:</p>
  
  <div class="checkpoint-list">
    <div class="checkpoint">
      <h4>1. Cadastro da Empresa</h4>
      <p>Verifique se os dados fiscais (CNPJ, Razão Social, Endereço e Inscrição Municipal) estão atualizados. Divergências aqui são a causa nº 1 de rejeição de notas fiscais.</p>
    </div>
    
    <div class="checkpoint">
      <h4>2. Parametrização de Impostos</h4>
      <p>Confira as alíquotas de ISS e retenções federais (PIS, COFINS, CSLL, IR). Empresas do Simples Nacional ou com regras específicas de município requerem atenção redobrada.</p>
    </div>
    
    <div class="checkpoint">
      <h4>3. Conferência de Valores</h4>
      <p>Gere relatórios prévios (demonstrativos) e confira os itens cobrados. Valide se todos os serviços prestados no período foram apontados corretamente.</p>
    </div>
  </div>
</section>

<section class="fiscal-documents">
  <h2>Documentos Fiscais Envolvidos</h2>
  <div class="doc-grid">
    <div class="doc-card">
      <h3>RPS (Recibo Provisório de Serviços)</h3>
      <p>Documento inicial gerado pelo sistema ERP numerado sequencialmente. É convertido em Nota Fiscal (NFS-e) após a transmissão para a Prefeitura.</p>
    </div>
    
    <div class="doc-card">
      <h3>NFS-e (Nota Fiscal de Serviços Eletrônica)</h3>
      <p>Documento oficial digital, armazenado nacionalmente ou municipalmente, que serve para fins de fiscalização tributária.</p>
    </div>
    
    <div class="doc-card">
      <h3>Boleto Bancário</h3>
      <p>Título de cobrança vinculado à nota fiscal, registrado no banco via arquivo de Remessa CNAB.</p>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #fff3e0;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border: 1px solid #ffe0b2;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
  .type-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    border-top: 4px solid #ff9800;
  }
  .checkpoint {
    background: #fdfdfd;
    padding: 15px;
    margin-bottom: 10px;
    border-left: 4px solid #9e9e9e;
    border-radius: 0 4px 4px 0;
  }
  .doc-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .doc-card {
    background: #f1f8e9;
    padding: 15px;
    border-radius: 6px;
  }
</style>
      `
    }
  ]
};