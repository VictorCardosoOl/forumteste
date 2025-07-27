export const resolucaoProblemasModule = {
  id: 'resolucao-problemas',
  title: 'Resolução de Problemas',
  description: 'Soluções para erros e problemas comuns no ambiente de trabalho.',
  icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,17H11V15H13V17M13,13H11V7H13V13Z"/></svg>`,
  topics: [
    // === GRUPO: SISTEMA E DESEMPENHO ===

    // Artigo Original 1
    {
      id: 'diagnostico-lentidao-computador',
      title: 'Diagnóstico de Lentidão no Computador',
      description: 'Guia passo a passo para identificar e resolver as principais causas de um computador lento, melhorando a produtividade.',
      group: 'Sistema e Desempenho',
      content: `
      <div class="welcome-banner"><h1>Seu computador está lento? Vamos resolver!</h1><p>Este guia foi criado para ajudar você a diagnosticar e solucionar problemas de lentidão de forma autônoma.</p></div>
      <section class="core-concepts"><h2>Entendendo os Vilões do Desempenho</h2><div class="concept-card"><ul><li><strong>Muitos Programas na Inicialização:</strong> Softwares que iniciam com o Windows e consomem recursos sem necessidade.</li><li><strong>Disco Rígido Cheio ou Lento:</strong> Um HD antigo ou com pouco espaço livre sofre para ler e escrever dados.</li><li><strong>Pouca Memória RAM:</strong> Se a RAM está no limite, o sistema usa o disco como memória virtual, o que é muito mais lento.</li><li><strong>Vírus e Malwares:</strong> Softwares maliciosos que rodam em segundo plano.</li></ul></div></section>
      <section class="documents-section"><h2>Passo a Passo: O Diagnóstico Completo</h2><div class="document-card"><h3 class="document-title">Passo 1: Analise o Gerenciador de Tarefas</h3><div class="document-content"><p>O Gerenciador de Tarefas (atalho: <strong>Ctrl + Shift + Esc</strong>) é seu melhor amigo para encontrar o culpado.</p><ol><li>Abra a aba <strong>"Processos"</strong> e ordene pelas colunas <strong>"CPU"</strong>, <strong>"Memória"</strong> e <strong>"Disco"</strong>.</li><li>Identifique quais aplicativos estão consumindo mais recursos e finalize a tarefa se não estiver em uso.</li><li>Vá para a aba <strong>"Inicializar"</strong> e desabilite programas que não precisam iniciar com o sistema.</li></ol></div></div><div class="document-card"><h3 class="document-title">Passo 2: Verifique a Saúde e o Espaço em Disco</h3><div class="document-content"><p>Um disco sobrecarregado é uma das maiores causas de lentidão.</p><ul><li><strong>Limpeza de Disco:</strong> Pesquise por "Limpeza de Disco" no menu Iniciar para remover arquivos temporários.</li><li><strong>Desfragmentação (para HDs):</strong> Pesquise por "Desfragmentar e Otimizar Unidades" e otimize seu disco rígido. <strong>Não faça isso em SSDs!</strong></li></ul></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .concept-card, .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .concept-card .document-content, .document-card .document-content { padding: 25px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;}</style>`
    },
    // Novo Artigo 1.1
    {
      id: 'tela-azul-bsod',
      title: 'Tela Azul da Morte (BSOD): O que Fazer?',
      description: 'Entenda o que é a Tela Azul (BSOD) e siga os passos para diagnosticar e resolver a causa do erro.',
      group: 'Sistema e Desempenho',
      content: `
      <div class="welcome-banner"><h1>Enfrentando a temida Tela Azul?</h1><p>A Tela Azul da Morte (BSOD) indica um erro crítico do sistema. Este guia ajuda a identificar a causa e a encontrar a solução.</p></div>
      <section class="documents-section"><h2>Primeiros Passos ao ver uma Tela Azul</h2><div class="document-card"><h3 class="document-title">1. Anote o Código do Erro</h3><div class="document-content"><p>A tela azul geralmente exibe um código de parada (Stop Code), como <code>IRQL_NOT_LESS_OR_EQUAL</code> ou <code>MEMORY_MANAGEMENT</code>. Anotar ou tirar uma foto desse código é o passo mais importante para o diagnóstico.</p></div></div><div class="document-card"><h3 class="document-title">2. Pense nas Mudanças Recentes</h3><div class="document-content"><p>O problema começou após instalar um novo hardware (como um pente de memória RAM), um novo software ou um novo driver? Desfazer a mudança mais recente pode resolver o problema.</p></div></div><div class="document-card"><h3 class="document-title">3. Verificação de Componentes</h3><div class="document-content"><ul><li><strong>Memória RAM:</strong> Pesquise por "Diagnóstico de Memória do Windows" no menu Iniciar e execute a verificação para encontrar erros na sua memória.</li><li><strong>Drivers:</strong> Verifique no "Gerenciador de Dispositivos" se algum componente está com um triângulo amarelo, indicando problema no driver. Tente atualizar ou reinstalar o driver.</li><li><strong>Temperatura:</strong> Superaquecimento da CPU pode causar telas azuis. Verifique se as ventoinhas do computador estão funcionando e limpas.</li></ul></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },
    // Novo Artigo 1.2
    {
      id: 'otimizando-inicializacao-windows',
      title: 'Otimizando a Inicialização do Windows',
      description: 'Aprenda a gerenciar os programas que iniciam com o sistema para ter um boot muito mais rápido.',
      group: 'Sistema e Desempenho',
      content: `
      <div class="welcome-banner"><h1>Acelere o Boot do seu Windows!</h1><p>Uma inicialização lenta é frustrante. Veja como gerenciar os programas que carregam com o sistema e ganhe velocidade.</p></div>
      <section class="documents-section"><h2>Gerenciando Programas de Inicialização</h2><div class="document-card"><h3 class="document-title">Usando o Gerenciador de Tarefas</h3><div class="document-content"><p>Pressione <strong>Ctrl + Shift + Esc</strong> e vá para a aba <strong>"Inicializar"</strong>.</p><p>Você verá uma lista de todos os programas configurados para iniciar com o Windows. Analise as seguintes colunas:</p><ul><li><strong>Nome do Programa:</strong> Identifique o software.</li><li><strong>Fornecedor:</strong> Ajuda a saber se é um programa confiável ou desconhecido.</li><li><strong>Impacto na inicialização:</strong> Mostra se o programa tem um impacto "Alto", "Médio" ou "Baixo" no tempo de boot.</li></ul><p>Para desativar um programa, clique sobre ele com o botão direito e selecione <strong>"Desabilitar"</strong>. Desabilite com segurança programas como Spotify, Steam, Discord e atualizadores de software (Adobe, Java).</p></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },
    // Novo Artigo 1.3
    {
      id: 'liberando-espaco-disco-avancado',
      title: 'Liberando Espaço em Disco: Guia Avançado',
      description: 'Vá além da Limpeza de Disco padrão e aprenda a encontrar e remover arquivos grandes e desnecessários.',
      group: 'Sistema e Desempenho',
      content: `
      <div class="welcome-banner"><h1>Seu disco C: está sempre cheio?</h1><p>Descubra técnicas avançadas para liberar gigabytes de espaço no seu disco rígido ou SSD.</p></div>
      <section class="documents-section"><h2>Ferramentas e Técnicas de Limpeza</h2><div class="document-card"><h3 class="document-title">Analisando o Uso do Disco</h3><div class="document-content"><p>Use um software como o <strong>WinDirStat</strong> ou <strong>TreeSize Free</strong>. Esses programas escaneiam seu disco e mostram graficamente quais pastas e arquivos estão ocupando mais espaço, facilitando a identificação de "vilões" de espaço.</p></div></div><div class="document-card"><h3 class="document-title">Limpando Arquivos Ocultos do Sistema</h3><div class="document-content"><ul><li><strong>Cache de Atualizações do Windows:</strong> Exclua os arquivos da pasta <code>C:\\Windows\\SoftwareDistribution\\Download</code>. São instaladores de atualizações antigas que não são mais necessários.</li><li><strong>Arquivos de Hibernação:</strong> Se você não usa o modo de hibernação, pode desativá-lo e liberar espaço. Abra o Prompt de Comando como administrador e digite <code>powercfg /hibernate off</code>.</li></ul></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },

    // === GRUPO: CONECTIVIDADE E REDES ===
    
    // Artigo Original 2
    {
      id: 'solucao-problemas-conectividade',
      title: 'Solução de Problemas de Conexão com a Internet',
      description: 'Não consegue se conectar? Siga este guia para diagnosticar e resolver problemas de rede e acesso à internet de forma eficaz.',
      group: 'Conectividade e Redes',
      content: `
      <div class="welcome-banner"><h1>Sem Conexão? Vamos Restaurá-la!</h1><p>Problemas de rede podem ser frustrantes. Este guia oferece um checklist prático para você verificar os pontos essenciais e resolver a maioria dos problemas de conexão.</p></div>
      <section class="nr-overview"><h2>Checklist Rápido: O Básico que Resolve</h2><div class="grid-container"><div class="nr-card"><h3>1. Verifique os Ícones e Cabos</h3><p>O ícone de rede mostra um "X" ou um triângulo amarelo? Verifique se o cabo de rede está bem conectado.</p></div><div class="nr-card"><h3>2. Reinicie Seus Equipamentos</h3><p>Reinicie seu computador e também o seu roteador.</p></div><div class="nr-card"><h3>3. Tente se Conectar via Wi-Fi</h3><p>Se você está no cabo, tente se conectar à rede Wi-Fi (e vice-versa).</p></div></div></section>
      <section class="esocial-integration"><h2>Diagnóstico Avançado via Prompt de Comando</h2><p>Se o básico não funcionou, pesquise por <strong>"cmd"</strong> no menu Iniciar e execute como administrador.</p><div class="event-grid"><div class="event-card"><h4>Comando: <code>ipconfig /release</code> e <code>ipconfig /renew</code></h4><p>Use esses dois comandos em sequência para obter um novo endereço de IP.</p></div><div class="event-card"><h4>Comando: <code>ping 8.8.8.8</code></h4><p>Testa a conexão com os servidores do Google.</p></div><div class="event-card"><h4>Comando: <code>ipconfig /flushdns</code></h4><p>Limpa o cache de resolução de nomes de sites.</p></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .grid-container, .event-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin: 25px 0; } .nr-card, .event-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #2196F3; }</style>`
    },
    // Novo Artigo 2.1
    {
      id: 'configurando-vpn-corporativa',
      title: 'Configurando uma Conexão VPN Corporativa',
      description: 'Passo a passo para configurar e solucionar problemas de conexão com a VPN da empresa no Windows.',
      group: 'Conectividade e Redes',
      content: `
      <div class="welcome-banner"><h1>Conecte-se à rede da empresa de qualquer lugar!</h1><p>Aprenda a configurar a VPN (Rede Privada Virtual) para acessar os sistemas e arquivos da empresa de forma segura.</p></div>
      <section class="documents-section"><h2>Configurando a Conexão VPN</h2><div class="document-card"><h3 class="document-title">Passo a Passo no Windows</h3><div class="document-content"><ol><li>Vá para "Configurações" > "Rede e Internet" > "VPN".</li><li>Clique em "Adicionar uma conexão VPN".</li><li>Preencha os campos solicitados pelo seu time de TI:<ul><li><strong>Provedor de VPN:</strong> Windows (interno)</li><li><strong>Nome da conexão:</strong> Ex: VPN Empresa</li><li><strong>Nome ou endereço do servidor:</strong> Ex: vpn.suaempresa.com.br</li><li><strong>Tipo de VPN:</strong> Geralmente "Automático" ou um tipo específico como L2TP/IPsec.</li><li><strong>Tipo de informações de entrada:</strong> Nome de usuário e senha.</li></ul></li><li>Salve e, na tela de VPN, selecione a conexão criada e clique em "Conectar".</li></ol></div></div><div class="document-card"><h3 class="document-title">Erros Comuns</h3><div class="document-content"><p>Se a conexão falhar, verifique se o endereço do servidor está correto, se sua internet está funcionando e se o tipo de VPN e suas credenciais estão corretas.</p></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },
    // Novo Artigo 2.2
    {
      id: 'problemas-wifi-sinal-fraco',
      title: 'Problemas com Wi-Fi: Sinal Fraco ou Quedas Constantes',
      description: 'Soluções para melhorar a qualidade do seu sinal Wi-Fi e evitar desconexões.',
      group: 'Conectividade e Redes',
      content: `
      <div class="welcome-banner"><h1>Seu Wi-Fi vive caindo?</h1><p>Descubra os principais motivos para um sinal Wi-Fi instável e como resolver esse problema.</p></div>
      <section class="documents-section"><h2>Melhorando seu Sinal Wi-Fi</h2><div class="document-card"><h3 class="document-title">Fatores que Afetam o Sinal</h3><div class="document-content"><ul><li><strong>Distância e Obstáculos:</strong> Paredes, lajes e grandes objetos metálicos enfraquecem o sinal.</li><li><strong>Interferência:</strong> Outras redes Wi-Fi, telefones sem fio e fornos de micro-ondas podem interferir.</li><li><strong>Drivers Desatualizados:</strong> O driver do adaptador de rede do seu computador pode estar desatualizado.</li></ul></div></div><div class="document-card"><h3 class="document-title">O que Fazer?</h3><div class="document-content"><ol><li><strong>Aproxime-se do Roteador:</strong> Se possível, trabalhe mais perto do roteador ou mova o roteador para um local mais central.</li><li><strong>Atualize o Driver de Rede:</strong> Vá ao "Gerenciador de Dispositivos", encontre seu "Adaptador de Rede" e clique em "Atualizar Driver".</li><li><strong>Mude o Canal do Wi-Fi:</strong> Acessando as configurações do seu roteador, você pode mudar o canal do Wi-Fi (ex: de 6 para 11) para fugir de interferências.</li></ol></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },
    // Novo Artigo 2.3
    {
      id: 'erro-ip-invalido',
      title: 'Erro "Endereço IP Inválido" ou "Conectividade Nula"',
      description: 'Entenda por que o erro de IP inválido acontece e como forçar o sistema a obter um endereço de rede correto.',
      group: 'Conectividade e Redes',
      content: `
      <div class="welcome-banner"><h1>Computador sem IP?</h1><p>O erro de "Conectividade Nula ou Limitada" geralmente significa que seu computador não conseguiu obter um endereço IP válido da rede.</p></div>
      <section class="documents-section"><h2>Resolvendo Conflitos de IP</h2><div class="document-card"><h3 class="document-title">O que é DHCP?</h3><div class="document-content"><p>DHCP é o serviço que roda no roteador e distribui endereços IP para os dispositivos da rede automaticamente. O erro ocorre quando essa comunicação falha.</p></div></div><div class="document-card"><h3 class="document-title">Solução via Prompt de Comando</h3><div class="document-content"><p>A solução mais eficaz é forçar a renovação do seu IP. Abra o Prompt de Comando (cmd) como administrador e execute os seguintes comandos, um de cada vez:</p><ol><li><code>ipconfig /release</code> - Libera o endereço IP atual.</li><li><code>ipconfig /renew</code> - Solicita um novo endereço IP ao servidor DHCP.</li></ol><p>Após os comandos, reinicie o computador. Se o problema persistir, pode ser uma falha no roteador.</p></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },

    // === GRUPO: SOFTWARE E APLICAÇÕES ===

    // Artigo Original 3
    {
      id: 'corrigindo-erros-sincronizacao-onedrive',
      title: 'Corrigindo Erros de Sincronização do OneDrive',
      description: 'Soluções para os problemas mais comuns do OneDrive, como arquivos que não atualizam, conflitos e status de erro.',
      group: 'Software e Aplicações',
      content: `
      <div class="welcome-banner"><h1>Problemas com o OneDrive? Sincronize a solução!</h1><p>O OneDrive é uma ferramenta fantástica, mas às vezes a sincronização pode falhar. Este guia ajuda você a entender os ícones de status e a resolver os erros mais comuns.</p></div>
      <section class="core-concepts"><h2>Decifrando os Ícones de Status</h2><div class="concept-card"><ul><li><strong>Nuvem Azul:</strong> O arquivo está apenas online.</li><li><strong>Check Verde (fundo branco):</strong> Disponível no PC e na nuvem.</li><li><strong>Check Verde (fundo verde):</strong> Sempre disponível offline.</li><li><strong>Setas Azuis Circulares:</strong> Sincronização em progresso.</li><li><strong>X Vermelho:</strong> Erro de sincronização.</li></ul></div></section>
      <section class="nr-overview"><h2>Soluções Comuns para Erros de Sincronização</h2><div class="grid-container"><div class="nr-card"><h3>1. Pausar e Retomar a Sincronização</h3><p>Clique com o botão direito no ícone do OneDrive e use a opção de pausar e retomar.</p></div><div class="nr-card"><h3>2. Verificar o Nome e o Caminho do Arquivo</h3><p>Não use caracteres especiais (como *, :, <, >) e mantenha o caminho do arquivo curto.</p></div><div class="nr-card"><h3>3. Verifique o Espaço de Armazenamento</h3><p>Verifique o espaço livre na nuvem e no seu disco local.</p></div><div class="nr-card"><h3>4. Redefinir o OneDrive</h3><p>Pressione <strong>Win + R</strong> e execute <code>%localappdata%\\\\Microsoft\\\\OneDrive\\\\onedrive.exe /reset</code>.</p></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .concept-card, .nr-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); } .grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 20px; } .nr-card { border-left: 4px solid #2196F3; }</style>`
    },
    // Novo Artigo 3.1
    {
      id: 'microsoft-office-reparo-instalacao',
      title: 'Microsoft Office: Como Reparar a Instalação',
      description: 'Aprenda a usar a ferramenta de reparo do Office para corrigir problemas como travamentos e falhas no Word, Excel e Outlook.',
      group: 'Software e Aplicações',
      content: `
      <div class="welcome-banner"><h1>O Word ou Excel não abre?</h1><p>Antes de reinstalar, tente o reparo da instalação do Microsoft Office. É um processo simples que resolve a maioria dos problemas.</p></div>
      <section class="documents-section"><h2>Usando a Ferramenta de Reparo do Office</h2><div class="document-card"><h3 class="document-title">Passo a Passo</h3><div class="document-content"><ol><li>Feche todos os aplicativos do Office.</li><li>Abra o "Painel de Controle" e vá para "Programas e Recursos" (ou "Configurações" > "Aplicativos" no Windows 10/11).</li><li>Encontre sua versão do Microsoft Office na lista, clique sobre ela e escolha "Alterar" ou "Modificar".</li><li>Você verá duas opções:<ul><li><strong>Reparo Rápido:</strong> Executa rapidamente, verificando arquivos corrompidos. Tente esta opção primeiro.</li><li><strong>Reparo Online:</strong> Um reparo mais completo que baixa arquivos de instalação novamente. Demora mais e exige conexão com a internet, mas é mais eficaz.</li></ul></li><li>Selecione uma das opções e siga as instruções na tela.</li></ol></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },
    // Novo Artigo 3.2
    {
      id: 'navegador-lento-popups',
      title: 'Navegador Lento ou com Pop-ups Indesejados',
      description: 'Soluções para otimizar seu navegador (Chrome, Edge, Firefox) e remover extensões maliciosas.',
      group: 'Software e Aplicações',
      content: `
      <div class="welcome-banner"><h1>Seu navegador virou uma carroça?</h1><p>Recupere a velocidade e a segurança do seu navegador com estas dicas de limpeza e otimização.</p></div>
      <section class="documents-section"><h2>Limpando e Otimizando seu Navegador</h2><div class="document-card"><h3 class="document-title">1. Limpeza de Cache e Cookies</h3><div class="document-content"><p>Pressione <strong>Ctrl + Shift + Del</strong> no seu navegador para abrir a tela de limpeza de dados. Marque as opções "Cookies" e "Imagens e arquivos armazenados em cache" e execute a limpeza.</p></div></div><div class="document-card"><h3 class="document-title">2. Gerencie suas Extensões</h3><div class="document-content"><p>Extensões consomem memória e podem ser maliciosas. Vá ao menu de extensões do seu navegador e remova todas que você não conhece ou não usa. Principalmente "toolbars" e "buscadores" que você não instalou.</p></div></div><div class="document-card"><h3 class="document-title">3. Redefinir o Navegador</h3><div class="document-content"><p>Se tudo falhar, a opção "Redefinir configurações" (disponível nas configurações avançadas) restaura o navegador ao seu estado original de fábrica, resolvendo problemas persistentes.</p></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },
    // Novo Artigo 3.3
    {
      id: 'erro-instalar-software-permissoes',
      title: 'Erro ao Instalar Software: Permissões e Pré-requisitos',
      description: 'Entenda os erros mais comuns durante a instalação de programas e como resolvê-los.',
      group: 'Software e Aplicações',
      content: `
      <div class="welcome-banner"><h1>Não consegue instalar um programa?</h1><p>Veja as causas mais comuns para falhas de instalação e como superá-las.</p></div>
      <section class="documents-section"><h2>Solucionando Falhas de Instalação</h2><div class="document-card"><h3 class="document-title">1. Execute como Administrador</h3><div class="document-content"><p>A causa mais comum de falha. Clique com o botão direito no arquivo de instalação (setup.exe) e selecione <strong>"Executar como administrador"</strong>. Isso concede ao instalador as permissões necessárias para modificar o sistema.</p></div></div><div class="document-card"><h3 class="document-title">2. Verifique os Pré-requisitos</h3><div class="document-content"><p>Muitos programas dependem de outros componentes para funcionar, como o <strong>.NET Framework</strong> ou o <strong>Visual C++ Redistributable</strong>. A mensagem de erro geralmente informa qual componente está faltando. Baixe e instale o pré-requisito antes de tentar novamente.</p></div></div><div class="document-card"><h3 class="document-title">3. Antivírus e Firewall</h3><div class="document-content"><p>Ocasionalmente, o software de segurança pode bloquear uma instalação por engano. Tente desativar temporariamente seu antivírus ou firewall antes de executar o instalador. <strong>Lembre-se de reativá-lo depois!</strong></p></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },

    // === GRUPO: HARDWARE E PERIFÉRICOS ===

    // Artigo Original 4
    {
      id: 'resolvendo-problemas-impressao',
      title: 'Resolvendo Problemas de Impressão',
      description: 'Documentos presos na fila de impressão ou a impressora não responde? Siga este guia para solucionar falhas comuns de impressão.',
      group: 'Hardware e Periféricos',
      content: `
      <div class="welcome-banner"><h1>A Impressora não colabora? Vamos consertar!</h1><p>Problemas de impressão podem parar seu fluxo de trabalho. Este artigo aborda desde os erros mais simples até a limpeza do "spooler" de impressão.</p></div>
      <section class="nr-overview"><h2>Checklist Essencial de Impressão</h2><div class="grid-container"><div class="nr-card"><h3>1. Verificações Físicas</h3><p>Garanta que a impressora esteja ligada, com papel e sem atolamentos.</p></div><div class="nr-card"><h3>2. Conexão</h3><p>Se for uma impressora USB, verifique o cabo. Se for de rede, garanta que ela esteja na mesma rede.</p></div><div class="nr-card"><h3>3. Impressora Correta</h3><p>Ao imprimir, certifique-se de que a impressora selecionada é a correta e não está "Offline".</p></div><div class="nr-card"><h3>4. Reiniciar</h3><p>Reinicie o computador e a impressora. Desligue a impressora, espere um minuto e ligue-a novamente.</p></div></div></section>
      <section class="documents-section"><h2>Limpando a Fila de Impressão (Spooler)</h2><div class="document-card"><h3 class="document-title">Como Limpar o Spooler de Impressão Manualmente</h3><div class="document-content"><p>Às vezes, um documento corrompido pode travar toda a fila. Siga estes passos:</p><ol><li>Pare o serviço "Spooler de Impressão" em <strong>serviços.msc</strong>.</li><li>Exclua os arquivos da pasta <code>C:\\Windows\\System32\\spool\\PRINTERS</code>.</li><li>Inicie o serviço "Spooler de Impressão" novamente.</li></ol></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin: 25px 0; } .nr-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #2196F3; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },
    // Novo Artigo 4.1
    {
      id: 'webcam-nao-funciona',
      title: 'Webcam não Funciona em Aplicativos de Reunião',
      description: 'Soluções para quando sua webcam não é detectada no Teams, Zoom ou Google Meet.',
      group: 'Hardware e Periféricos',
      content: `
      <div class="welcome-banner"><h1>Sua câmera não aparece na reunião?</h1><p>Problemas de webcam são comuns. Este guia ajuda a resolver desde as configurações de privacidade até problemas de driver.</p></div>
      <section class="documents-section"><h2>Passos para Fazer sua Webcam Funcionar</h2><div class="document-card"><h3 class="document-title">1. Verifique as Permissões de Privacidade</h3><div class="document-content"><p>No Windows 10/11, vá para "Configurações" > "Privacidade e segurança" > "Câmera". Certifique-se de que a opção <strong>"Permitir que os aplicativos acessem sua câmera"</strong> esteja ativada.</p></div></div><div class="document-card"><h3 class="document-title">2. Selecione a Câmera no Aplicativo</h3><div class="document-content"><p>Dentro do Teams, Zoom ou Meet, vá para as configurações de áudio e vídeo e verifique se a câmera selecionada é a correta, especialmente se você tiver mais de uma (ex: uma integrada e uma USB).</p></div></div><div class="document-card"><h3 class="document-title">3. Verifique o Gerenciador de Dispositivos</h3><div class="document-content"><p>Abra o "Gerenciador de Dispositivos" e procure por "Câmeras". Se sua webcam estiver com um ícone de seta para baixo, clique com o botão direito e selecione "Habilitar dispositivo". Se houver um triângulo amarelo, tente "Atualizar driver".</p></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },
    // Novo Artigo 4.2
    {
      id: 'teclado-mouse-nao-reconhecido',
      title: 'Teclado ou Mouse USB não é Reconhecido',
      description: 'O que fazer quando você conecta um teclado ou mouse e nada acontece.',
      group: 'Hardware e Periféricos',
      content: `
      <div class="welcome-banner"><h1>Conectou o mouse e nada aconteceu?</h1><p>Siga estes passos simples de diagnóstico para resolver problemas com periféricos USB que não são detectados.</p></div>
      <section class="documents-section"><h2>Diagnóstico de Periféricos USB</h2><div class="document-card"><h3 class="document-title">1. Teste em Outra Porta USB</h3><div class="document-content"><p>A primeira e mais simples verificação. Desconecte o dispositivo e conecte-o em outra porta USB do mesmo computador. Isso ajuda a identificar se o problema é na porta específica.</p></div></div><div class="document-card"><h3 class="document-title">2. Teste em Outro Computador</h3><div class="document-content"><p>Se possível, teste o teclado ou mouse em outro computador. Se ele também não funcionar, o problema provavelmente é no próprio dispositivo.</p></div></div><div class="document-card"><h3 class="document-title">3. Verifique o Gerenciador de Dispositivos</h3><div class="document-content"><p>Abra o "Gerenciador de Dispositivos". Procure por "Teclados" ou "Mouse e outros dispositivos apontadores". Se houver um item como "Dispositivo Desconhecido", tente clicar com o botão direito e selecionar "Atualizar driver".</p></div></div><div class="document-card"><h3 class="document-title">4. Baterias (para dispositivos sem fio)</h3><div class="document-content"><p>Pode parecer óbvio, mas para dispositivos sem fio, a causa mais comum é a bateria fraca. Troque as pilhas ou recarregue a bateria interna.</p></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    },
    // Novo Artigo 4.3
    {
      id: 'problemas-audio-sem-som',
      title: 'Problemas de Áudio: Sem Som ou Microfone Mudo',
      description: 'Guia completo para diagnosticar e resolver problemas de áudio no Windows, desde fones que não funcionam até microfones mudos em reuniões.',
      group: 'Hardware e Periféricos',
      content: `
      <div class="welcome-banner"><h1>Ninguém te ouve ou você não ouve nada?</h1><p>Problemas de áudio são comuns. Aprenda a verificar as configurações essenciais do Windows para restaurar o som.</p></div>
      <section class="documents-section"><h2>Resolvendo Problemas de Áudio e Microfone</h2><div class="document-card"><h3 class="document-title">1. Verifique o Básico</h3><div class="document-content"><ul><li><strong>Conexões Físicas:</strong> O fone de ouvido está bem conectado? Se for USB, tente outra porta.</li><li><strong>Volume:</strong> Verifique o controle de volume no próprio fone e o ícone de som na barra de tarefas do Windows.</li><li><strong>Botão Mudo:</strong> Muitos fones e microfones têm um botão físico para "mutar". Verifique se ele não está ativado.</li></ul></div></div><div class="document-card"><h3 class="document-title">2. Configurações de Som do Windows</h3><div class="document-content"><p>Clique com o botão direito no ícone de som na barra de tarefas e selecione "Abrir configurações de som".</p><ul><li><strong>Saída:</strong> Na seção "Saída", certifique-se de que seu fone de ouvido ou alto-falante correto esteja selecionado no campo "Escolha seu dispositivo de saída".</li><li><strong>Entrada:</strong> Na seção "Entrada", faça o mesmo para "Escolha seu dispositivo de entrada", selecionando seu microfone. Fale algo para ver se a barra "Testar seu microfone" se move.</li></ul></div></div><div class="document-card"><h3 class="document-title">3. Solução de Problemas do Windows</h3><div class="document-content"><p>Nas mesmas configurações de som, role para baixo e clique em "Solucionar problemas" tanto para os dispositivos de saída quanto para os de entrada. O Windows fará uma verificação automática e tentará corrigir problemas comuns.</p></div></div></section>
      <style>.welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; } .document-card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; } .document-title { background: #f5f5f5; padding: 18px; margin: 0; font-size: 1.2em; border-bottom: 1px solid #e0e0e0; border-radius: 8px 8px 0 0;} .document-content { padding: 25px; }</style>`
    }
  ]
}; 