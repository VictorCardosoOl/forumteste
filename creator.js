/**
 * creator.js - Lógica para a Ferramenta de Gerenciamento de Conteúdo do Fórum
 * * Este arquivo controla a interface de criação e edição de módulos e tópicos,
 * gerando snippets de código JSON para serem inseridos manualmente no arquivo `data.js`.
 * * Criado por: Parceiro de Programacao (para seu projeto)
 * Versão: 2.0 (Reestruturada)
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. REFERÊNCIAS AOS ELEMENTOS DO DOM ---
    // Mapeamos todos os elementos HTML com os quais vamos interagir para fácil acesso.

    // Seletores de Modo
    const modeRadios = document.querySelectorAll('input[name="mode"]');

    // Contêineres dos Formulários
    const createModuleFormContainer = document.getElementById('create-module-form');
    const editTopicSelectorContainer = document.getElementById('edit-topic-selector');
    const topicFormContainer = document.getElementById('topic-form-area');

    // Campos do Formulário de Módulo
    const moduleTitleInput = document.getElementById('module-title');
    const moduleDescriptionInput = document.getElementById('module-description');
    const moduleIconInput = document.getElementById('module-icon');

    // Campos do Formulário de Tópico
    const topicCategorySelect = document.getElementById('topic-category');
    const topicTitleInput = document.getElementById('topic-title');
    const topicDescriptionInput = document.getElementById('topic-description');

    // Campos do Seletor de Edição
    const editCategorySelect = document.getElementById('edit-category-select');
    const editTopicSelect = document.getElementById('edit-topic-select');
    const loadTopicBtn = document.getElementById('load-topic-btn');

    // Botões de Ação Principais
    const generateCodeBtn = document.getElementById('generate-code-btn');
    const copyBtn = document.getElementById('copy-btn');

    // Área de Resultados
    const resultArea = document.getElementById('result-area');
    const resultTitle = document.getElementById('result-title');
    const resultInstruction = document.getElementById('result-instruction');
    const outputArea = document.getElementById('output');

    // --- 2. INICIALIZAÇÃO DO EDITOR E ESTADO DA APLICAÇÃO ---

    // Inicializa o editor de texto rico "Pell"
    const editor = pell.init({
        element: document.getElementById('editor'),
        actions: ['bold', 'italic', 'underline', 'heading2', 'paragraph', 'olist', 'ulist', 'link', 'image'],
        defaultParagraphSeparator: 'p'
    });

    // Variáveis que guardam o estado atual da aplicação
    let currentMode = 'topic'; // 'topic', 'module', ou 'edit'
    let editingTopicId = null; // Guarda o ID do tópico que está sendo editado

    // --- 3. FUNÇÕES AUXILIARES ---
    // Funções reutilizáveis que realizam tarefas específicas.

    /**
     * Gera um ID único a partir de um texto base.
     * Se o ID já existir na lista de itens, adiciona um sufixo numérico (-1, -2, etc).
     * @param {string} baseText - O texto para basear o ID (ex: "Meu Novo Tópico").
     * @param {Array} existingItems - O array de objetos a ser verificado para duplicação (ex: forumData ou category.topics).
     * @returns {string} Um ID único e formatado (ex: "meu-novo-topico-1").
     */
    const generateUniqueId = (baseText, existingItems) => {
        const baseId = baseText.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
        let newId = baseId;
        let counter = 1;
        while (existingItems.some(item => item.id === newId)) {
            newId = `${baseId}-${counter}`;
            counter++;
        }
        return newId;
    };

    /**
     * Popula um elemento <select> com opções de um array.
     * @param {HTMLSelectElement} selectElement - O elemento dropdown a ser populado.
     * @param {Array} items - O array de dados (com 'id' and 'title').
     * @param {string} defaultOptionText - O texto para a primeira opção (ex: "Selecione...").
     */
    const populateDropdown = (selectElement, items, defaultOptionText) => {
        selectElement.innerHTML = `<option value="">${defaultOptionText}</option>`;
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.title;
            selectElement.appendChild(option);
        });
    };

    /**
     * Limpa todos os campos dos formulários e reseta o estado.
     */
    const clearAllForms = () => {
        // Limpa formulário de módulo
        moduleTitleInput.value = '';
        moduleDescriptionInput.value = '';
        moduleIconInput.value = '';
        
        // Limpa formulário de tópico
        topicTitleInput.value = '';
        topicDescriptionInput.value = '';
        editor.content.innerHTML = '';
        topicCategorySelect.value = '';
        topicCategorySelect.disabled = false; // Garante que o select seja reativado

        // Reseta estado de edição
        editingTopicId = null;
    };


    // --- 4. FUNÇÕES PRINCIPAIS DE LÓGICA ---

    /**
     * Alterna a visibilidade dos formulários com base no modo selecionado.
     * @param {string} mode - O modo para o qual alternar ('topic', 'module', 'edit').
     */
    const toggleMode = (mode) => {
        currentMode = mode;
        clearAllForms();
        resultArea.style.display = 'none';

        // Esconde todos os contêineres primeiro
        createModuleFormContainer.style.display = 'none';
        editTopicSelectorContainer.style.display = 'none';
        topicFormContainer.style.display = 'none';

        // Mostra os contêineres corretos e ajusta a UI
        switch (mode) {
            case 'topic':
                topicFormContainer.style.display = 'block';
                generateCodeBtn.textContent = 'Gerar Código do Novo Tópico';
                populateDropdown(topicCategorySelect, forumData, 'Selecione um módulo...');
                break;
            case 'module':
                createModuleFormContainer.style.display = 'block';
                generateCodeBtn.textContent = 'Gerar Código do Novo Módulo';
                break;
            case 'edit':
                editTopicSelectorContainer.style.display = 'block';
                topicFormContainer.style.display = 'block'; // Mostra para receber dados carregados
                generateCodeBtn.textContent = 'Gerar Código Atualizado do Tópico';
                populateDropdown(editCategorySelect, forumData, 'Selecione um módulo...');
                editTopicSelect.innerHTML = '<option value="">Primeiro, selecione um módulo</option>';
                break;
        }
    };

    /**
     * Carrega os dados de um tópico existente nos campos do formulário para edição.
     */
    const handleLoadTopic = () => {
        const categoryId = editCategorySelect.value;
        const topicId = editTopicSelect.value;

        if (!categoryId || !topicId) {
            alert('Por favor, selecione um módulo e um tópico para carregar.');
            return;
        }

        const category = forumData.find(c => c.id === categoryId);
        const topic = category?.topics.find(t => t.id === topicId);

        if (topic) {
            // Preenche o formulário com os dados do tópico
            topicTitleInput.value = topic.title;
            topicDescriptionInput.value = topic.description || '';
            editor.content.innerHTML = topic.content.trim();
            
            // Preenche e trava o seletor de categoria
            populateDropdown(topicCategorySelect, forumData, '');
            topicCategorySelect.value = categoryId;
            topicCategorySelect.disabled = true; // Impede a troca de categoria durante a edição

            // Salva o ID original para garantir que ele não seja alterado
            editingTopicId = topic.id;

            alert(`Tópico "${topic.title}" carregado com sucesso!`);
        } else {
            alert("Tópico não encontrado. Tente novamente.");
        }
    };
    
    /**
     * Gera o snippet de código JSON com base no modo e nos dados do formulário.
     */
    const handleGenerateCode = () => {
        let codeSnippet = '';
        let newObject = {};
        
        if (currentMode === 'module') {
            const title = moduleTitleInput.value.trim();
            if (!title) { alert('O título do módulo é obrigatório.'); return; }

            newObject = {
                id: generateUniqueId(title, forumData),
                title: title,
                description: moduleDescriptionInput.value.trim(),
                icon: moduleIconInput.value.trim() || `<svg viewBox="0 0 48 48"><path d="M0 0h48v48H0z" fill="none"/></svg>`, // SVG placeholder
                topics: []
            };
            
            resultTitle.textContent = "Código do Novo Módulo";
            resultInstruction.textContent = "Copie este código e cole-o DENTRO do array `forumData` no seu arquivo data.js. Lembre-se de adicionar uma vírgula no final se não for o último item.";

        } else if (currentMode === 'topic' || (currentMode === 'edit' && editingTopicId)) {
            const title = topicTitleInput.value.trim();
            const categoryId = topicCategorySelect.value;
            if (!title) { alert('O título do tópico é obrigatório.'); return; }
            if (!categoryId) { alert('O módulo do tópico é obrigatório.'); return; }

            const category = forumData.find(c => c.id === categoryId);
            if (!category) { alert('Módulo selecionado é inválido.'); return; }

            newObject = {
                // Se estiver editando, usa o ID salvo. Se for novo, gera um ID único.
                id: currentMode === 'edit' ? editingTopicId : generateUniqueId(title, category.topics),
                title: title,
                description: topicDescriptionInput.value.trim(),
                content: `\n${editor.content.innerHTML.trim()}\n`
            };

            if (currentMode === 'edit') {
                resultTitle.textContent = "Código do Tópico Atualizado";
                resultInstruction.textContent = `No arquivo data.js, encontre o módulo com id: "${categoryId}" e SUBSTITUA o objeto inteiro do tópico com id: "${editingTopicId}" por este novo código.`;
            } else {
                resultTitle.textContent = "Código do Novo Tópico";
                resultInstruction.textContent = `No arquivo data.js, encontre o módulo com id: "${categoryId}" e cole este código DENTRO do seu array 'topics'.`;
            }
        } else {
            alert("Modo inválido ou tópico para edição não carregado. Tente novamente.");
            return;
        }
        
        codeSnippet = JSON.stringify(newObject, null, 2) + ',';
        outputArea.value = codeSnippet;
        resultArea.style.display = 'block';
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    // --- 5. OUVINTES DE EVENTOS (EVENT LISTENERS) ---
    // Conectam as ações do usuário (cliques, mudanças) às nossas funções.

    // Alterna o modo quando um botão de rádio é selecionado
    modeRadios.forEach(radio => radio.addEventListener('change', (e) => toggleMode(e.target.value)));

    // Popula a lista de tópicos quando um módulo é selecionado no modo de edição
    editCategorySelect.addEventListener('change', () => {
        const categoryId = editCategorySelect.value;
        const category = forumData.find(c => c.id === categoryId);
        if (category) {
            populateDropdown(editTopicSelect, category.topics, 'Selecione um tópico...');
        } else {
            editTopicSelect.innerHTML = '<option value="">Primeiro, selecione um módulo</option>';
        }
    });

    // Associa as funções de clique aos seus respectivos botões
    loadTopicBtn.addEventListener('click', handleLoadTopic);
    generateCodeBtn.addEventListener('click', handleGenerateCode);
    copyBtn.addEventListener('click', () => {
        outputArea.select();
        navigator.clipboard.writeText(outputArea.value).then(() => {
            copyBtn.textContent = 'Copiado!';
            setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 2000);
        });
    });

    // --- 6. INICIALIZAÇÃO ---
    // Define o estado inicial da aplicação ao carregar a página.
    toggleMode('topic');
});