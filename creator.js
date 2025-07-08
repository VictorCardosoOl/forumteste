// creator.js (Versão de Emergência - Simples e Sem Dependências de Editor)
document.addEventListener('DOMContentLoaded', () => {
    // --- Referências aos Elementos ---
    const modeRadios = document.querySelectorAll('input[name="mode"]');
    const topicForm = document.getElementById('topic-form');
    const moduleForm = document.getElementById('module-form');
    const generateBtn = document.getElementById('generate-btn');
    const insertImageBtn = document.getElementById('insert-image-btn');

    // Campos do formulário de Tópico
    const categorySelect = document.getElementById('category-select');
    const topicTitleInput = document.getElementById('topic-title');
    const topicDescriptionInput = document.getElementById('topic-description');
    const contentEditor = document.getElementById('content-editor'); // Agora um textarea simples

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

    // --- Lógica Principal ---

    function populateCategoryDropdown() {
        if (typeof forumData === 'undefined' || !Array.isArray(forumData)) {
            alert("ERRO: A variável 'forumData' não foi encontrada. Verifique se o arquivo 'data.js' está sendo carregado corretamente.");
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

    // Botão para ajudar a inserir a tag de imagem
    insertImageBtn.addEventListener('click', () => {
        const imageName = prompt("Digite o nome do arquivo da imagem (ex: fluxograma.png).\nA imagem deve estar na pasta 'images'.");
        if (imageName) {
            const imageTag = `<img src="images/${imageName}" alt="Descrição da imagem aqui">`;
            // Insere a tag de imagem onde o cursor estiver no textarea
            contentEditor.value = contentEditor.value.substring(0, contentEditor.selectionStart) + imageTag + contentEditor.value.substring(contentEditor.selectionEnd);
        }
    });

    generateBtn.addEventListener('click', () => {
        let generatedCode = '';
        
        if (currentMode === 'topic') {
            const title = topicTitleInput.value.trim();
            const content = contentEditor.value;

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