// Arquivo: creator.js (Versão segura que gera o arquivo data.js completo)

document.addEventListener('DOMContentLoaded', () => {
    // --- Referências aos elementos do DOM ---
    const categorySelect = document.getElementById('category');
    const titleInput = document.getElementById('topic-title');
    const descriptionInput = document.getElementById('topic-description');
    const addTopicBtn = document.getElementById('add-topic-btn');
    const resultArea = document.getElementById('result-area');
    const outputArea = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');
    const successArea = document.getElementById('success-area');

    // --- Inicialização do Editor Pell ---
    const editor = pell.init({
      element: document.getElementById('editor'),
      actions: ['bold', 'italic', 'underline', 'heading2', 'paragraph', 'olist', 'ulist', 'link', 'image'],
      defaultParagraphSeparator: 'p'
    });

    // 1. Popula o seletor de categorias com base no data.js carregado
    forumData.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.title;
        categorySelect.appendChild(option);
    });
    
    /**
     * Limpa os campos do formulário para facilitar a adição de um novo tópico em sequência.
     */
    function clearForm() {
        titleInput.value = '';
        descriptionInput.value = '';
        editor.content.innerHTML = ''; // Limpa o conteúdo do editor Pell
    }

    /**
     * Função principal que é chamada ao clicar no botão.
     */
    addTopicBtn.addEventListener('click', () => {
        // Obter os valores do formulário
        const selectedCategoryId = categorySelect.value;
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const content = editor.content.innerHTML.trim();

        // Validação simples
        if (!title || !content) {
            alert('Por favor, preencha pelo menos o Título e o Conteúdo do Artigo.');
            return;
        }

        // --- A LÓGICA SEGURA COMEÇA AQUI ---

        // Encontrar a categoria correta no array 'forumData' que está em memória
        const targetCategory = forumData.find(category => category.id === selectedCategoryId);

        if (!targetCategory) {
            alert('Erro: Categoria selecionada não foi encontrada. Por favor, recarregue a página.');
            return;
        }

        // Criar o novo objeto de tópico
        const newTopic = {
            id: title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-'),
            title: title,
            description: description,
            content: `\n${content}\n` // Adiciona quebras de linha para melhor formatação
        };

        // Adicionar (push) o novo tópico à lista de tópicos da categoria encontrada
        targetCategory.topics.push(newTopic);

        // --- GERAÇÃO DO NOVO `data.js` ---

        // Converter o objeto 'forumData' MODIFICADO de volta para uma string formatada
        // JSON.stringify com 'null, 2' formata o JSON de forma legível
        const newForumDataString = `const forumData = ${JSON.stringify(forumData, null, 2)};`;

        // Exibir o resultado
        outputArea.value = newForumDataString;
        resultArea.style.display = 'block';

        // Limpar o formulário e mostrar mensagem de sucesso
        clearForm();
        successArea.innerHTML = `<div class="success-message">Tópico "${title}" adicionado com sucesso! O código abaixo foi atualizado.</div>`;

        // Scroll para a área de resultado
        resultArea.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Lógica para o botão de copiar o conteúdo inteiro
    copyBtn.addEventListener('click', () => {
        outputArea.select(); // Seleciona todo o texto na textarea
        document.execCommand('copy'); // Copia o texto selecionado
        
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 2000);
    });
});