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

    function populateDropdown(selectElement, items, defaultOption) {
        selectElement.innerHTML = `<option value="">${defaultOption}</option>`;
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
    }
    
    function toggleMode(mode) {
        currentMode = mode;
        resultArea.style.display = 'none';
        clearTopicForm();

        createModuleForm.style.display = 'none';
        editTopicSelector.style.display = 'none';
        topicFormArea.style.display = 'none';
        
        generateCodeBtn.textContent = 'Gerar Código';

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

    editCategorySelect.addEventListener('change', () => {
        const categoryId = editCategorySelect.value;
        const category = forumData.find(c => c.id === categoryId);
        if (category) {
            populateDropdown(editTopicSelect, category.topics, 'Selecione um tópico...');
        } else {
            editTopicSelect.innerHTML = '<option value="">Selecione um tópico...</option>';
        }
    });

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
            editingTopicId = topic.id;
            populateDropdown(topicCategorySelect, forumData, '');
            topicCategorySelect.value = categoryId;
            topicCategorySelect.disabled = true;
            alert(`Tópico "${topic.title}" carregado. Faça suas alterações e gere o código.`);
        }
    });

    generateCodeBtn.addEventListener('click', () => {
        let codeSnippet = '';
        
        if (currentMode === 'module') {
            const title = moduleTitleInput.value.trim();
            if (!title) { alert('O título do módulo é obrigatório.'); return; }
            const newModule = {
                id: title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-'),
                title: title,
                description: moduleDescriptionInput.value.trim(),
                icon: moduleIconInput.value.trim() || '<svg></svg>',
                topics: []
            };
            // Usando JSON.stringify para formatar e depois ajustando para ser um objeto JS
            codeSnippet = JSON.stringify(newModule, null, 2).replace(/"([^"]+)":/g, '$1:') + ',';
            
            resultTitle.textContent = "Código do Novo Módulo";
            resultInstruction.textContent = "Copie este código e cole-o dentro do array principal `forumData` no seu arquivo data.js.";

        } else if (currentMode === 'topic' || currentMode === 'edit') {
            const title = topicTitleInput.value.trim();
            const content = pellEditor.content.innerHTML;
            if (!title) { alert('O título do tópico é obrigatório.'); return; }

            const newTopic = {
                id: currentMode === 'edit' ? editingTopicId : title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-'),
                title: title,
                description: topicDescriptionInput.value.trim(),
                content: `\n          ${content.trim()}\n        `
            };
            
            let tempString = JSON.stringify(newTopic, null, 2);
            // Remove aspas das chaves e formata 'content' com crases
            tempString = tempString.replace(/"([^"]+)":/g, '$1:');
            tempString = tempString.replace(/content: "((.|\n)*)"/g, 'content: `$1`');
            
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

    copyBtn.addEventListener('click', () => {
        outputArea.select();
        document.execCommand('copy');
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 2000);
    });

    // Inicializa a ferramenta no modo 'Criar Tópico'
    toggleMode('topic');
});