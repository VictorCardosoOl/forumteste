document.addEventListener('DOMContentLoaded', () => {
    // --- Referências aos elementos do DOM ---
    const modeRadios = document.querySelectorAll('input[name="mode"]');
    const generateCodeBtn = document.getElementById('generate-code-btn');
    const resultArea = document.getElementById('result-area');
    const outputArea = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');
    const resultTitle = document.getElementById('result-title');
    const resultInstruction = document.getElementById('result-instruction');

    const createModuleForm = document.getElementById('create-module-form');
    const editTopicSelector = document.getElementById('edit-topic-selector');
    const topicFormArea = document.getElementById('topic-form-area');

    // Campos do formulário de Tópico
    const topicCategorySelect = document.getElementById('topic-category');
    const topicTitleInput = document.getElementById('topic-title');
    const topicDescriptionInput = document.getElementById('topic-description');

    // Campos do formulário de Módulo
    const moduleTitleInput = document.getElementById('module-title');
    const moduleDescriptionInput = document.getElementById('module-description');
    const moduleIconInput = document.getElementById('module-icon');

    // Campos de Edição
    const editCategorySelect = document.getElementById('edit-category-select');
    const editTopicSelect = document.getElementById('edit-topic-select');
    const loadTopicBtn = document.getElementById('load-topic-btn');
    
    let currentMode = 'topic';
    let editingTopicId = null;

    // --- Inicialização do Editor Pell ---
    const pellEditor = pell.init({
        element: document.getElementById('editor'),
        actions: ['bold', 'italic', 'underline', 'heading2', 'paragraph', 'olist', 'ulist', 'link', 'image'],
        defaultParagraphSeparator: 'p'
    });

    // --- LÓGICA DE GERENCIAMENTO ---

    function populateDropdown(selectElement, items, defaultOptionText) {
        selectElement.innerHTML = `<option value="">${defaultOptionText}</option>`;
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.title;
            selectElement.appendChild(option);
        });
    }

    function clearTopicForm() {
        topicTitleInput.value = '';
        topicDescriptionInput.value = '';
        pellEditor.content.innerHTML = '';
        editingTopicId = null;
        topicCategorySelect.disabled = false;
        // Limpa também o formulário de módulo para garantir consistência
        moduleTitleInput.value = '';
        moduleDescriptionInput.value = '';
        moduleIconInput.value = '';
    }
    
    function toggleMode(mode) {
        currentMode = mode;
        resultArea.style.display = 'none';
        clearTopicForm();

        // Esconde todos os formulários e seções
        createModuleForm.style.display = 'none';
        editTopicSelector.style.display = 'none';
        topicFormArea.style.display = 'none';
        
        generateCodeBtn.textContent = 'Gerar Código';

        // Mostra os formulários corretos para o modo selecionado
        if (mode === 'topic') {
            topicFormArea.style.display = 'block';
            populateDropdown(topicCategorySelect, forumData, 'Selecione um módulo...');
        } else if (mode === 'module') {
            createModuleForm.style.display = 'block';
        } else if (mode === 'edit') {
            editTopicSelector.style.display = 'block';
            topicFormArea.style.display = 'block';
            populateDropdown(editCategorySelect, forumData, 'Selecione um módulo...');
            editTopicSelect.innerHTML = '<option value="">Selecione um tópico...</option>';
        }
    }

    // --- EVENT LISTENERS ---

    // Listener para os botões de rádio que trocam o modo
    modeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => toggleMode(e.target.value));
    });

    // Popula o dropdown de tópicos quando um módulo é selecionado no modo de edição
    editCategorySelect.addEventListener('change', () => {
        const categoryId = editCategorySelect.value;
        const category = forumData.find(c => c.id === categoryId);
        if (category) {
            populateDropdown(editTopicSelect, category.topics, 'Selecione um tópico...');
        } else {
            editTopicSelect.innerHTML = '<option value="">Selecione um tópico...</option>';
        }
    });

    // Carrega os dados de um tópico selecionado para o formulário
    loadTopicBtn.addEventListener('click', () => {
        const categoryId = editCategorySelect.value;
        const topicId = editTopicSelect.value;
        if (!categoryId || !topicId) {
            alert('Por favor, selecione um módulo e um tópico para carregar.');
            return;
        }

        const category = forumData.find(c => c.id === categoryId);
        const topic = category.topics.find(t => t.id === topicId);

        if (topic) {
            topicTitleInput.value = topic.title;
            topicDescriptionInput.value = topic.description;
            pellEditor.content.innerHTML = topic.content.trim();
            editingTopicId = topic.id; // Salva o ID original
            
            // Preenche e desabilita o dropdown de categoria no formulário principal
            populateDropdown(topicCategorySelect, forumData, '');
            topicCategorySelect.value = categoryId;
            topicCategorySelect.disabled = true;
            
            alert(`Tópico "${topic.title}" carregado. Faça suas alterações e gere o código.`);
        }
    });

    // Botão principal para gerar os fragmentos de código
    generateCodeBtn.addEventListener('click', () => {
        let codeSnippet = '';
        
        if (currentMode === 'module') {
            const title = moduleTitleInput.value.trim();
            if (!title) { alert('O título do módulo é obrigatório.'); return; }

            const moduleObject = {
                id: title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-'),
                title: title,
                description: moduleDescriptionInput.value.trim(),
                icon: moduleIconInput.value.trim() || '<svg></svg>',
                topics: []
            };
            codeSnippet = JSON.stringify(moduleObject, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/icon: "((.|\n)*)"/g, 'icon: `$1`') + ',';
            
            resultTitle.textContent = "Código do Novo Módulo";
            resultInstruction.textContent = "Copie este código e cole-o dentro do array principal `forumData` no seu arquivo data.js.";

        } else if (currentMode === 'topic' || currentMode === 'edit') {
            const title = topicTitleInput.value.trim();
            const content = pellEditor.content.innerHTML;
            if (!title) { alert('O título do tópico é obrigatório.'); return; }

            const topicObject = {
                id: currentMode === 'edit' ? editingTopicId : title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-'),
                title: title,
                description: topicDescriptionInput.value.trim(),
                content: `\n          ${content.trim()}\n        `
            };
            
            let tempString = JSON.stringify(topicObject, null, 2);
            tempString = tempString.replace(/"([^"]+)":/g, '$1:');
            tempString = tempString.replace(/content: "((.|\n|\r)*?)"/g, (match, p1) => `content: \`${p1.replace(/\\n/g, '\n').replace(/\\"/g, '"')}\``);
            codeSnippet = tempString + ',';

            if (currentMode === 'edit') {
                resultTitle.textContent = "Código do Tópico Atualizado";
                resultInstruction.textContent = `No arquivo data.js, encontre o tópico com id: "${editingTopicId}" e SUBSTITUA o objeto inteiro por este código.`;
            } else {
                resultTitle.textContent = "Código do Novo Tópico";
                const categoryId = topicCategorySelect.value;
                resultInstruction.textContent = `No arquivo data.js, encontre o módulo com id: "${categoryId}" e cole este código DENTRO do seu array 'topics'.`;
            }
        }
        
        if (codeSnippet) {
            outputArea.value = codeSnippet;
            resultArea.style.display = 'block';
            resultArea.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Botão para copiar o código gerado
    copyBtn.addEventListener('click', () => {
        outputArea.select();
        document.execCommand('copy');
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 2000);
    });

    // --- INICIALIZAÇÃO ---
    // Inicia a ferramenta no modo 'Criar Tópico' por padrão
    toggleMode('topic');
});