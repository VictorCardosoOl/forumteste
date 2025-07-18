export const resolucaoProblemasModule = {
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
};