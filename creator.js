document.addEventListener('DOMContentLoaded', () => {
    // --- Referências aos Elementos ---
    const modeRadios = document.querySelectorAll('input[name="mode"]');
    const topicFormContainer = document.getElementById('topic-form');
    const moduleFormContainer = document.getElementById('module-form');
    const generateBtn = document.getElementById('generate-btn');
    const resultArea = document.getElementById('result-area');
    const resultTitle = document.getElementById('result-title');
    const resultInstruction = document.getElementById('result-instruction');
    const outputArea = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');

    let currentMode = 'topic';

    // --- TEMPLATES HTML PARA OS FORMULÁRIOS ---
    const topicFormHTML = `
        <div>
            <label for="category-select" class="block text-sm font-medium text-[var(--text-color-light)]">Adicionar Tópico Dentro do Módulo:</label>
            <select id="category-select" class="mt-1 block w-full rounded-md shadow-sm form-input"></select>
        </div>
        <div>
            <label for="topic-title" class="block text-sm font-medium text-[var(--text-color-light)]">Título do Tópico</label>
            <input type="text" id="topic-title" class="mt-1 block w-full rounded-md shadow-sm form-input">
        </div>
        <div>
            <label for="topic-description" class="block text-sm font-medium text-[var(--text-color-light)]">Descrição Curta do Tópico</label>
            <input type="text" id="topic-description" class="mt-1 block w-full rounded-md shadow-sm form-input">
        </div>
        <div>
            <label class="block text-sm font-medium text-[var(--text-color-light)] mb-2">Conteúdo do Artigo</label>
            <textarea id="content-editor" rows="12" class="mt-0 block w-full rounded-md shadow-sm form-input font-mono text-sm" placeholder="Escreva seu conteúdo em HTML aqui..."></textarea>
        </div>
    `;

    const moduleFormHTML = `
        <div>
            <label for="module-title" class="block text-sm font-medium text-[var(--text-color-light)]">Título do Novo Módulo</label>
            <input type="text" id="module-title" class="mt-1 block w-full rounded-md shadow-sm form-input">
        </div>
        <div>
            <label for="module-description" class="block text-sm font-medium text-[var(--text-color-light)]">Descrição do Módulo</label>
            <input type="text" id="module-description" class="mt-1 block w-full rounded-md shadow-sm form-input">
        </div>
        <div>
            <div class="flex justify-between items-center">
                <label for="module-icon" class="block text-sm font-medium text-[var(--text-color-light)]">Ícone do Módulo (código SVG)</label>
                <button id="clean-svg-btn" type="button" class="btn-secondary">Limpar SVG</button>
            </div>
            <textarea id="module-icon" rows="5" class="mt-1 block w-full rounded-md shadow-sm font-mono text-sm form-input" placeholder="Cole o código <svg>...</svg> aqui"></textarea>
        </div>
    `;

    // --- LÓGICA DO TEMA (Claro/Escuro) ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconContainer = document.getElementById('theme-icon-container');
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    function setTheme(isDark) {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.body.classList.toggle('dark-mode', isDark);
        themeIconContainer.innerHTML = isDark ? sunIcon : moonIcon;
    }

    themeToggle.addEventListener('click', () => {
        setTheme(!document.body.classList.contains('dark-mode'));
    });
    
    // --- LÓGICA PRINCIPAL DO GERADOR ---

    function populateCategoryDropdown() {
        const categorySelect = document.getElementById('category-select');
        if (!categorySelect) return;

        if (typeof forumData === 'undefined' || !Array.isArray(forumData)) {
            alert("ERRO: A variável 'forumData' não foi encontrada.");
            categorySelect.disabled = true;
            return;
        }
        categorySelect.innerHTML = forumData.map(cat => `<option value="${cat.id}">${cat.title}</option>`).join('');
    }

    /**
     * NOVA FUNÇÃO: Limpa o código SVG colado pelo usuário.
     */
    function cleanSVG() {
        const iconTextarea = document.getElementById('module-icon');
        if (!iconTextarea) return;

        let svgCode = iconTextarea.value;
        if (!svgCode.trim().startsWith('<svg')) {
            alert('Por favor, cole um código SVG válido.');
            return;
        }

        // 1. Remove width e height para permitir controle via CSS
        svgCode = svgCode.replace(/width="[^"]*"/g, '').replace(/height="[^"]*"/g, '');
        // 2. Substitui cores fixas por 'currentColor' para adaptar ao tema
        svgCode = svgCode.replace(/fill="[^"]*"/g, 'fill="currentColor"');
        svgCode = svgCode.replace(/stroke="[^"]*"/g, 'stroke="currentColor"');
        // 3. Garante que o fill principal do SVG seja 'none' se houver paths com 'currentColor'
        if (svgCode.includes('fill="currentColor"')) {
            svgCode = svgCode.replace(/<svg/g, '<svg fill="none"');
        }

        iconTextarea.value = svgCode;
        alert('SVG Limpo e otimizado!');
    }

    function switchFormMode(mode) {
        currentMode = mode;
        resultArea.style.display = 'none';

        // Atualiza a aparência do seletor
        document.querySelectorAll('.mode-span').forEach(span => {
            if (span.parentElement.querySelector(`input[value="${mode}"]`)) {
                span.style.backgroundColor = 'var(--bg-color)';
                span.style.color = 'var(--text-color)';
            } else {
                span.style.backgroundColor = 'transparent';
                span.style.color = 'var(--text-color-light)';
            }
        });
        
        if (currentMode === 'topic') {
            topicFormContainer.style.display = 'block';
            moduleFormContainer.style.display = 'none';
            topicFormContainer.innerHTML = topicFormHTML;
            populateCategoryDropdown();
        } else {
            topicFormContainer.style.display = 'none';
            moduleFormContainer.style.display = 'block';
            moduleFormContainer.innerHTML = moduleFormHTML;
            // Adiciona o listener para o novo botão "Limpar SVG"
            document.getElementById('clean-svg-btn').addEventListener('click', cleanSVG);
        }
    }
    
    generateBtn.addEventListener('click', () => {
        let generatedCode = '';
        
        if (currentMode === 'topic') {
            const categorySelect = document.getElementById('category-select');
            const titleInput = document.getElementById('topic-title');
            const descriptionInput = document.getElementById('topic-description');
            const contentEditor = document.getElementById('content-editor');

            if (categorySelect.selectedIndex < 0) {
                alert('Por favor, selecione um módulo.');
                return;
            }
            const title = titleInput.value.trim();
            if (!title || !contentEditor.value.trim()) {
                alert('O Título e o Conteúdo são obrigatórios.');
                return;
            }
            
            const topicId = title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
            generatedCode = `{\n  id: '${topicId}',\n  title: '${title.replace(/'/g, "\\'")}',\n  description: '${descriptionInput.value.trim().replace(/'/g, "\\'")}',\n  content: \`\n${contentEditor.value.trim().replace(/`/g, "\\`")}\n  \`\n},`;
            
            const selectedModuleText = categorySelect.options[categorySelect.selectedIndex].text;
            resultTitle.textContent = "Código do Novo Tópico";
            resultInstruction.innerHTML = `Copie o código e cole-o dentro do array <b>'topics'</b> do módulo <b>"${selectedModuleText}"</b> em <code>data.js</code>.`;

        } else { // mode === 'module'
            const titleInput = document.getElementById('module-title');
            const descriptionInput = document.getElementById('module-description');
            const iconInput = document.getElementById('module-icon');
            
            const title = titleInput.value.trim();
            if (!title) {
                alert('O Título do Módulo é obrigatório.');
                return;
            }
            
            const moduleId = title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
            generatedCode = `{\n  id: '${moduleId}',\n  title: '${title.replace(/'/g, "\\'")}',\n  description: '${descriptionInput.value.trim().replace(/'/g, "\\'")}',\n  icon: \`${iconInput.value.trim().replace(/`/g, "\\`")}\`,\n  topics: []\n},`;

            resultTitle.textContent = "Código do Novo Módulo";
            resultInstruction.innerHTML = `Copie este código e cole-o dentro do array <b>'forumData'</b> em <code>data.js</code>.`;
        }
        
        outputArea.value = generatedCode;
        resultArea.style.display = 'block';
        outputArea.focus();
        outputArea.select();
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(outputArea.value).then(() => {
            copyBtn.textContent = 'Copiado!';
            setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 2000);
        });
    });

    // --- Inicialização ---
    const savedThemeIsDark = localStorage.getItem('theme') === 'dark';
    setTheme(savedThemeIsDark);
    modeRadios.forEach(radio => radio.addEventListener('change', (e) => switchFormMode(e.target.value)));
    switchFormMode('topic'); // Inicia no modo Tópico
});