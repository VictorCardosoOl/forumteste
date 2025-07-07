document.addEventListener('DOMContentLoaded', () => {
    // --- Referências aos elementos do DOM ---
    const modeRadios = document.querySelectorAll('input[name="mode"]');
    const generateCodeBtn = document.getElementById('generate-code-btn');
    const resultArea = document.getElementById('result-area');
    const outputArea = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');
    const resultTitle = document.getElementById('result-title');
    const resultInstruction = document.getElementById('result-instruction');

    const createModuleFormContainer = document.getElementById('create-module-form');
    const editTopicSelectorContainer = document.getElementById('edit-topic-selector');
    const topicFormContainer = document.getElementById('topic-form-area');

    let currentMode = 'topic';
    let editingTopicId = null; // Guarda o ID original do tópico em edição

    // --- Re-cria os campos de formulário dinamicamente para evitar duplicação ---
    topicFormContainer.innerHTML = `
        <div>
            <label for="topic-category" class="block text-sm font-medium text-gray-700">Módulo do Tópico</label>
            <select id="topic-category" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></select>
        </div>
        <div>
            <label for="topic-title" class="block text-sm font-medium text-gray-700">Título do Tópico</label>
            <input type="text" id="topic-title" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>
        <div>
            <label for="topic-description" class="block text-sm font-medium text-gray-700">Descrição Curta do Tópico</label>
            <input type="text" id="topic-description" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700">Conteúdo do Artigo</label>
            <div id="editor" class="mt-1"></div>
        </div>
    `;

    createModuleFormContainer.innerHTML = `
        <p class="text-sm text-gray-600">Use este modo para criar uma nova categoria no menu principal.</p>
        <div>
            <label for="module-title" class="block text-sm font-medium text-gray-700">Título do Novo Módulo</label>
            <input type="text" id="module-title" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>
        <div>
            <label for="module-description" class="block text-sm font-medium text-gray-700">Descrição do Módulo</label>
            <input type="text" id="module-description" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>
        <div>
            <label for="module-icon" class="block text-sm font-medium text-gray-700">Ícone do Módulo (código SVG)</label>
            <textarea id="module-icon" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm font-mono text-sm" placeholder="Cole o código <svg>...</svg> aqui"></textarea>
        </div>
    `;
    
    // --- Referências aos campos criados dinamicamente ---
    const topicCategorySelect = document.getElementById('topic-category');
    const topicTitleInput = document.getElementById('topic-title');
    const topicDescriptionInput = document.getElementById('topic-description');
    const moduleTitleInput = document.getElementById('module-title');
    const moduleDescriptionInput = document.getElementById('module-description');
    const moduleIconInput = document.getElementById('module-icon');
    const editCategorySelect = document.getElementById('edit-category-select');
    const editTopicSelect = document.getElementById('edit-topic-select');
    const loadTopicBtn = document.getElementById('load-topic-btn');
    
    const editor = pell.init({
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
        editor.content.innerHTML = '';
        editingTopicId = null;
    }
    
    function toggleMode(mode) {
        currentMode = mode;
        resultArea.style.display = 'none';
        clearTopicForm();

        createModuleFormContainer.style.display = 'none';
        editTopicSelectorContainer.style.display = 'none';
        topicFormContainer.style.display = 'none';
        document.getElementById('topic-category').disabled = false;

        if (mode === 'topic') {
            topicFormContainer.style.display = 'block';
            generateCodeBtn.textContent = 'Gerar Código do Novo Tópico';
            populateDropdown(topicCategorySelect, forumData, 'Selecione um módulo...');
        } else if (mode === 'module') {
            createModuleFormContainer.style.display = 'block';
            generateCodeBtn.textContent = 'Gerar Código do Novo Módulo';
        } else if (mode === 'edit') {
            editTopicSelectorContainer.style.display = 'block';
            topicFormContainer.style.display = 'block';
            generateCodeBtn.textContent = 'Gerar Código Atualizado do Tópico';
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
            editor.content.innerHTML = topic.content.trim();
            editingTopicId = topic.id; // Salva o ID original
            populateDropdown(topicCategorySelect, forumData, '');
            topicCategorySelect.value = categoryId;
            topicCategorySelect.disabled = true; // Trava a categoria durante a edição
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
            codeSnippet = JSON.stringify(newModule, null, 2) + ',';
            resultTitle.textContent = "Código do Novo Módulo";
            resultInstruction.textContent = "Copie este código e cole-o dentro do array principal `forumData` no seu arquivo data.js (lembre-se da vírgula no final).";
        } 
        else if (currentMode === 'topic' || currentMode === 'edit') {
            const title = topicTitleInput.value.trim();
            if (!title) { alert('O título do tópico é obrigatório.'); return; }
            const newTopic = {
                id: currentMode === 'edit' ? editingTopicId : title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-'),
                title: title,
                description: topicDescriptionInput.value.trim(),
                content: `\n${editor.content.innerHTML.trim()}\n`
            };
            codeSnippet = JSON.stringify(newTopic, null, 2) + ',';

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