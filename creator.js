// Arquivo: creator.js

// Inicializa o editor de texto visual (WYSIWYG)
tinymce.init({
  selector: 'textarea#topic-content',
  plugins: 'code lists link image table fullscreen preview',
  toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image | code | fullscreen preview',
  height: 400,
});

document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const titleInput = document.getElementById('topic-title');
    const descriptionInput = document.getElementById('topic-description');
    const generateBtn = document.getElementById('generate-btn');
    const resultArea = document.getElementById('result-area');
    const outputCode = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');

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
        // Pega o conteúdo HTML do editor TinyMCE
        const content = tinymce.get('topic-content').getContent();

        if (!title || !content) {
            alert('Por favor, preencha pelo menos o Título e o Conteúdo do Artigo.');
            return;
        }

        // Cria um ID único baseado no título (simplificado)
        // Ex: "Instalando no Windows" -> "instalando-no-windows"
        const topicId = title.toLowerCase()
                             .replace(/[^\w\s-]/g, '') // remove caracteres especiais
                             .trim()
                             .replace(/\s+/g, '-'); // troca espaços por hífens

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
        
        // Exibe o resultado
        outputCode.textContent = generatedCode;
        resultArea.style.display = 'block';
    });
    
    // 3. Função para copiar o código gerado
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(outputCode.textContent.trim()).then(() => {
            copyBtn.textContent = 'Copiado!';
            setTimeout(() => {
                copyBtn.textContent = 'Copiar';
            }, 2000);
        });
    });
});