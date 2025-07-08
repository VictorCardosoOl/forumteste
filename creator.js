// creator.js (Versão final com CKEditor e correção de bugs)
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

    // --- Inicialização do CKEditor ---
    // Substitui o <textarea> pelo editor completo.
    const editor = CKEDITOR.replace('content-editor', {
        // Opções extras para um editor mais limpo
        height: 300,
        removeButtons: 'Subscript,Superscript,About', // Remove botões menos usados
    });

    // --- Lógica Principal ---

    function populateCategoryDropdown() {
        if (typeof forumData === 'undefined' || !Array.isArray(forumData)) {
            console.error("A variável 'forumData' não foi encontrada. Verifique o 'data.js'.");
            alert("ERRO: Não foi possível carregar os módulos.");
            return;
        }
        
        categorySelect.innerHTML = '';
        forumData.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.title;
            categorySelect.appendChild(option);
        });
    }

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

    generateBtn.addEventListener('click', () => {
        let generatedCode = '';
        
        if (currentMode === 'topic') {
            const title = topicTitleInput.value.trim();
            // CORREÇÃO: Usando a API do CKEditor para obter o conteúdo de forma segura
            const content = editor.getData();

            if (!title || !content.trim()) {
                alert('O Título e o Conteúdo do Tópico são obrigatórios.');
                return;
            }
            if (!categorySelect.value) {
                alert('Por favor, selecione um módulo para adicionar o tópico.');
                return;
            }

            const topicId = title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
            const description = topicDescriptionInput.value.trim().replace(/'/g, "\\'");
            
            generatedCode = `{
  id: '${topicId}',
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description}',
  content: \`
          ${content.trim().replace(/`/g, "\\`")}
        \`
},`;
            
            resultTitle.textContent = "Código do Novo Tópico";
            resultInstruction.textContent = `Copie o código abaixo e cole-o DENTRO do array 'topics' do módulo "${categorySelect.options[categorySelect.selectedIndex].text}" no seu arquivo data.js.`;

        } else { // currentMode === 'module'
            const title = moduleTitleInput.value.trim();
            if (!title) {
                alert('O Título do Módulo é obrigatório.');
                return;
            }
            const moduleId = title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
            const description = moduleDescriptionInput.value.trim().replace(/'/g, "\\'");
            const icon = moduleIconInput.value.trim().replace(/`/g, "\\`");

            generatedCode = `{
  id: '${moduleId}',
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description}',
  icon: \`${icon}\`,
  topics: []
},`;

            resultTitle.textContent = "Código do Novo Módulo";
            resultInstruction.textContent = "Copie este código e cole-o DENTRO do array principal 'forumData' no seu arquivo data.js.";
        }
        
        outputArea.value = generatedCode;
        resultArea.style.display = 'block';
    });

    copyBtn.addEventListener('click', () => {
        outputArea.select();
        document.execCommand('copy');
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 2000);
    });

    populateCategoryDropdown();
});