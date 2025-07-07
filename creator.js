// Arquivo: creator.js (versão simplificada, sem dependências externas)

document.addEventListener('DOMContentLoaded', () => {
    // --- Referências aos elementos do formulário ---
    const categorySelect = document.getElementById('category');
    const titleInput = document.getElementById('topic-title');
    const descriptionInput = document.getElementById('topic-description');
    const contentEditor = document.getElementById('topic-content-editor');
    
    // --- Referências aos botões e área de resultado ---
    const generateBtn = document.getElementById('generate-btn');
    const resultArea = document.getElementById('result-area');
    const outputCode = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');
    
    // --- Lógica do Editor de Texto Simples ---
    const editorToolbar = document.getElementById('editor-toolbar');
    
    editorToolbar.addEventListener('click', (e) => {
        // Verifica se o clique foi em um botão com o atributo 'data-tag'
        const button = e.target.closest('button[data-tag]');
        if (!button) return;

        const tag = button.dataset.tag;
        const selectedText = contentEditor.value.substring(contentEditor.selectionStart, contentEditor.selectionEnd);
        
        // Envolve o texto selecionado com a tag HTML apropriada
        const newText = `<${tag}>${selectedText}</${tag}>`;
        
        // Insere o texto formatado de volta no textarea
        contentEditor.setRangeText(newText, contentEditor.selectionStart, contentEditor.selectionEnd, 'end');
        contentEditor.focus();
    });

    // --- Lógica para o botão de Adicionar Imagem ---
    document.getElementById('add-image-btn').addEventListener('click', () => {
        const filename = prompt("Por favor, digite o nome do arquivo da imagem (ex: meu-fluxograma.png).\nA imagem já deve estar na pasta 'images'.");
        if (!filename) return; // Usuário cancelou

        const altText = prompt("Digite um texto descritivo para a imagem (importante para acessibilidade).", "Fluxograma");
        
        // Cria a tag de imagem com o caminho correto e uma classe padrão
        const imageTag = `<img src="images/${filename}" alt="${altText}" class="article-image">\n`;
        
        // Insere a tag da imagem na posição atual do cursor
        contentEditor.setRangeText(imageTag, contentEditor.selectionStart, contentEditor.selectionEnd, 'end');
        contentEditor.focus();
    });

    // 1. Popula o seletor de categorias com base no data.js
    forumData.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.title;
        categorySelect.appendChild(option);
    });

    // 2. Função para gerar o código quando o botão é clicado
    generateBtn.addEventListener('click', () => {
        const title = titleInput.value;
        const description = descriptionInput.value;
        const content = contentEditor.value;

        if (!title || !content) {
            alert('Por favor, preencha pelo menos o Título e o Conteúdo do Artigo.');
            return;
        }

        const topicId = title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

        // Monta o objeto JavaScript como uma string
        const generatedCode = `
{
  id: '${topicId}',
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description.replace(/'/g, "\\'")}',
  content: \`
${content.replace(/`/g, "\\`")}
  \`
},`;
        
        outputCode.textContent = generatedCode;
        resultArea.style.display = 'block';
    });
    
    // 3. Função para copiar o código gerado
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(outputCode.textContent.trim()).then(() => {
            copyBtn.textContent = 'Copiado!';
            setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 2000);
        });
    });
});