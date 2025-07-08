// creator.js (Versão simplificada e corrigida)
document.addEventListener('DOMContentLoaded', () => {
    // --- Referências aos Elementos ---
    const modeRadios = document.querySelectorAll('input[name="mode"]');
    const topicForm = document.getElementById('topic-form');
    const moduleForm = document.getElementById('module-form');
    const generateBtn = document.getElementById('generate-btn');

    // Campos do formulário de Tópico
    const categorySelect = document.getElementById('category-select');
    const topicTitleInput = document.getElementById('topic-title');
    const topicDescriptionInput = document.getElementById('topic-description');

    // Campos do formulário de Módulo
    const moduleTitleInput = document.getElementById('module-title');
    const moduleDescriptionInput = document.getElementById('module-description');
    const moduleIconInput = document.getElementById('module-icon');

    // Área de Resultado
    const resultArea = document.getElementById('result-area');
    const resultTitle = document.getElementById('result-title');
    const resultInstruction = document.getElementById('result-instruction');
    const outputArea = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');

    let currentMode = 'topic';

    // --- Inicialização do Editor Pell ---
    const pellEditor = pell.init({
        element: document.getElementById('editor'),
        actions: ['bold', 'italic', 'underline', 'heading2', 'paragraph', 'olist', 'ulist', 'link', 'image'],
        defaultParagraphSeparator: 'p'
    });

    // --- Lógica Principal ---

    // Popula o dropdown com os módulos existentes do data.js
    function populateCategoryDropdown() {
        // Verifica se forumData existe e é um array
        if (typeof forumData === 'undefined' || !Array.isArray(forumData)) {
            console.error("A variável 'forumData' não foi encontrada ou não é um array. Verifique se o arquivo 'data.js' está sendo carregado corretamente.");
            alert("ERRO: Não foi possível carregar os módulos. Verifique o console do navegador.");
            return;
        }
        
        categorySelect.innerHTML = ''; // Limpa antes de preencher
        forumData.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.title;
            categorySelect.appendChild(option);
        });
    }

    // Alterna a visibilidade dos formulários
    modeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentMode = e.target.value;
            if (currentMode === 'topic') {
                topicForm.style.display = 'block';
                moduleForm.style.display = 'none';
            } else {
                topicForm.style.display = 'none';
                moduleForm.style.display = 'block';
            }
            resultArea.style.display = 'none';
        });
    });

    // Gera o código ao clicar no botão
    generateBtn.addEventListener('click', () => {
        let generatedCode = '';
        
        if (currentMode === 'topic') {
            const title = topicTitleInput.value.trim();
            const content = pellEditor.content.innerHTML;

            if (!title || !content.trim()) {
                alert('O Título e o Conteúdo do Tópico são obrigatórios.');
                return;
            }
            if (!categorySelect.value) {
                alert('Por favor, selecione um módulo para adicionar o tópico.');
                return;
            }

            const topicId = title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
            
            // Usando JSON.stringify para garantir que as aspas sejam tratadas corretamente
            const topicObject = {
                id: topicId,
                title: title,
                description: topicDescriptionInput.value.trim(),
                content: `\n          ${content.trim()}\n        `
            };

            let tempString = JSON.stringify(topicObject, null, 2);
            // Substitui aspas duplas das chaves por nada, e formata o content com crases
            tempString = tempString.replace(/"([^"]+)":/g, '$1:');
            tempString = tempString.replace(/content: "((.|\n|\r)*?)"/g, (match, p1) => `content: \`${p1.replace(/\\n/g, '\n').replace(/\\"/g, '"')}\``);
            generatedCode = tempString + ',';
            
            resultTitle.textContent = "Código do Novo Tópico";
            resultInstruction.textContent = `Copie o código abaixo e cole-o DENTRO do array 'topics' do módulo "${categorySelect.options[categorySelect.selectedIndex].text}" no seu arquivo data.js.`;

        } else { // currentMode === 'module'
            const title = moduleTitleInput.value.trim();
            if (!title) {
                alert('O Título do Módulo é obrigatório.');
                return;
            }
            const moduleId = title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
            const moduleObject = {
                id: moduleId,
                title: title,
                description: moduleDescriptionInput.value.trim(),
                icon: moduleIconInput.value.trim() || '<svg></svg>',
                topics: []
            };

            let tempString = JSON.stringify(moduleObject, null, 2);
            // Formatação para se parecer com um objeto JS
            tempString = tempString.replace(/"([^"]+)":/g, '$1:');
            tempString = tempString.replace(/icon: "((.|\n|\r)*?)"/g, (match, p1) => `icon: \`${p1.replace(/\\"/g, '"')}\``);
            generatedCode = tempString + ',';

            resultTitle.textContent = "Código do Novo Módulo";
            resultInstruction.textContent = "Copie este código e cole-o DENTRO do array principal 'forumData' no seu arquivo data.js.";
        }
        
        outputArea.value = generatedCode;
        resultArea.style.display = 'block';
    });

    // Função para copiar o código
    copyBtn.addEventListener('click', () => {
        outputArea.select();
        document.execCommand('copy');
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 2000);
    });

    // --- Execução Inicial ---
    // Popula o dropdown assim que a página carrega
    populateCategoryDropdown();
});