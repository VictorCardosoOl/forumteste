document.addEventListener('DOMContentLoaded', () => {
    const elements = { /* ... referências aos elementos ... */ };
    // ... código do tema e outras funções ...
    // (O código completo está abaixo para evitar repetição)
});
// COLE O CONTEÚDO INTEIRO ABAIXO NO SEU creator.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Referências aos Elementos Globais ---
    const elements = {
        modeRadios: document.querySelectorAll('input[name="mode"]'),
        formContent: document.getElementById('form-content'),
        previewContent: document.getElementById('preview-content'),
        previewWrapper: document.getElementById('preview-wrapper'),
        generateBtn: document.getElementById('generate-btn'),
        resultArea: document.getElementById('result-area'),
        output: document.getElementById('output'),
        copyBtn: document.getElementById('copy-btn'),
        resultInstruction: document.getElementById('result-instruction'),
        themeToggle: document.getElementById('theme-toggle'),
        themeIconContainer: document.getElementById('theme-icon-container'),
    };

    let currentMode = 'topic';
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    function setTheme(isDark) {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.body.classList.toggle('dark-mode', isDark);
        elements.themeIconContainer.innerHTML = isDark ? sunIcon : moonIcon;
    }
    elements.themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark-mode')));

    function wrapSelectionWithTag(textarea, tag, isBlock) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        let replacement;

        if (tag === 'a') {
            const url = prompt('Digite a URL do link:', 'https://');
            if (!url) return;
            replacement = `<a href="${url}" target="_blank">${selectedText || 'texto do link'}</a>`;
        } else if (tag === 'ul') {
            replacement = `<ul>\n  <li>${selectedText || 'Item 1'}</li>\n  <li>Item 2</li>\n</ul>`;
        } else {
            replacement = `<${tag}>${selectedText}</${tag}>`;
        }

        const prefix = isBlock && start > 0 && textarea.value[start-1] !== '\n' ? '\n' : '';
        const suffix = isBlock ? '\n' : '';
        
        textarea.value = textarea.value.substring(0, start) + prefix + replacement + suffix + textarea.value.substring(end);
        
        // Dispara um evento de 'input' para que a pré-visualização seja atualizada
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function handleToolbarClick(event) {
        const button = event.target.closest('.toolbar-btn');
        if (!button) return;

        const tag = button.dataset.tag;
        const isBlock = button.dataset.block === 'true';
        const contentEditor = document.getElementById('content-editor');
        wrapSelectionWithTag(contentEditor, tag, isBlock);
    }

    function updateTopicPreview() { /* ... (código existente sem alterações) ... */ }
    function updateModulePreview() { /* ... (código existente sem alterações) ... */ }

    // ... (As funções de preview permanecem as mesmas da versão anterior)
    function updateTopicPreview() {
        const title = document.getElementById('topic-title')?.value || 'Título do seu artigo';
        const description = document.getElementById('topic-description')?.value || 'Descrição curta sobre o que o artigo aborda.';
        const content = document.getElementById('content-editor')?.value || '<p>O conteúdo do seu artigo aparecerá aqui.</p>';
        elements.previewContent.innerHTML = `<div class="article-content p-4 rounded-lg bg-[var(--card-bg-color)] border border-[var(--border-color)]"><h1>${title}</h1><p class="text-xl mt-4 opacity-80">${description}</p><hr class="my-6 opacity-20"><div>${content}</div></div>`;
    }
    function updateModulePreview() {
        const title = document.getElementById('module-title')?.value || 'Título do Módulo';
        const description = document.getElementById('module-description')?.value || 'Descrição do que este módulo contém.';
        const icon = document.getElementById('module-icon')?.value || '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>';
        elements.previewContent.innerHTML = `<div class="card-link flex flex-1 gap-4 rounded-xl p-5 flex-col group"><div class="w-8 h-8 text-[var(--text-color)]">${icon}</div><div class="flex flex-col gap-1 mt-2"><h3 class="text-base font-semibold">${title}</h3><p class="text-sm font-normal">${description}</p></div></div>`;
    }


    function renderForm() {
        let formHTML = '';
        if (currentMode === 'topic') {
            const categories = (typeof forumData !== 'undefined' && Array.isArray(forumData)) 
                ? forumData.map(cat => `<option value="${cat.id}">${cat.title}</option>`).join('')
                : '';
            formHTML = `
                <div>
                    <label for="category-select" class="text-sm font-medium text-[var(--text-color-light)]">Módulo do Tópico</label>
                    <select id="category-select" class="mt-1 block w-full form-input"></select>
                </div>
                <div>
                    <label for="topic-title" class="text-sm font-medium text-[var(--text-color-light)]">Título do Tópico</label>
                    <input type="text" id="topic-title" class="mt-1 block w-full form-input">
                </div>
                <div>
                    <label for="topic-description" class="text-sm font-medium text-[var(--text-color-light)]">Descrição Curta</label>
                    <input type="text" id="topic-description" class="mt-1 block w-full form-input">
                </div>
                <div>
                    <label class="text-sm font-medium text-[var(--text-color-light)]">Conteúdo</label>
                    <div id="editor-toolbar" class="editor-toolbar mt-1">
                        <button class="toolbar-btn" data-tag="h2" data-block="true">H2</button>
                        <button class="toolbar-btn" data-tag="h3" data-block="true">H3</button>
                        <button class="toolbar-btn" data-tag="p" data-block="true">P</button>
                        <button class="toolbar-btn" data-tag="strong"><b>B</b></button>
                        <button class="toolbar-btn" data-tag="ul" data-block="true">Lista</button>
                        <button class="toolbar-btn" data-tag="a">Link</button>
                    </div>
                    <textarea id="content-editor" rows="15" class="block w-full form-input font-mono text-sm" style="border-radius: 0 0 0.5rem 0.5rem;"></textarea>
                </div>
            `;
            elements.formContent.innerHTML = formHTML;
            document.getElementById('category-select').innerHTML = categories;
            updateTopicPreview();
            
            ['topic-title', 'topic-description', 'content-editor'].forEach(id => {
                document.getElementById(id).addEventListener('input', updateTopicPreview);
            });
            document.getElementById('editor-toolbar').addEventListener('click', handleToolbarClick);

        } else { // mode === 'module'
            formHTML = `
                <div>
                    <label for="module-title" class="text-sm font-medium text-[var(--text-color-light)]">Título do Módulo</label>
                    <input type="text" id="module-title" class="mt-1 block w-full form-input">
                </div>
                <div>
                    <label for="module-description" class="text-sm font-medium text-[var(--text-color-light)]">Descrição</label>
                    <input type="text" id="module-description" class="mt-1 block w-full form-input">
                </div>
                <div>
                    <label for="module-icon" class="text-sm font-medium text-[var(--text-color-light)]">Ícone (SVG)</label>
                    <textarea id="module-icon" rows="8" class="mt-1 block w-full form-input font-mono text-sm"></textarea>
                </div>
            `;
            elements.formContent.innerHTML = formHTML;
            updateModulePreview();
            ['module-title', 'module-description', 'module-icon'].forEach(id => {
                document.getElementById(id).addEventListener('input', updateModulePreview);
            });
        }
    }

    function switchMode(mode) { /* ... (código existente sem alterações) ... */ }
    // ... (A função switchMode permanece a mesma da versão anterior)
    function switchMode(mode) {
        currentMode = mode;
        elements.resultArea.classList.add('opacity-0', 'pointer-events-none');
        elements.previewWrapper.classList.remove('opacity-0');

        document.querySelectorAll('.mode-span').forEach(span => {
            const radio = span.parentElement.querySelector('input');
            span.classList.toggle('active', radio.value === mode);
            span.classList.toggle('inactive', radio.value !== mode);
        });
        renderForm();
    }

    elements.modeRadios.forEach(radio => radio.addEventListener('change', (e) => switchMode(e.target.value)));

    elements.generateBtn.addEventListener('click', () => { /* ... (código existente sem alterações, apenas na parte de UI) ... */ });
    // ... (A função de gerar código permanece a mesma, com pequena alteração na UI)
    elements.generateBtn.addEventListener('click', () => {
        let generatedCode = '', instructionText = '';
        if (currentMode === 'topic') {
            const categorySelect = document.getElementById('category-select');
            const title = document.getElementById('topic-title').value.trim();
            const description = document.getElementById('topic-description').value.trim();
            const content = document.getElementById('content-editor').value.trim();

            if (!categorySelect || categorySelect.selectedIndex < 0) { alert('Selecione um módulo.'); return; }
            if (!title || !content) { alert('Título e Conteúdo são obrigatórios.'); return; }

            const topicId = title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
            generatedCode = `{\n  id: '${topicId}',\n  title: '${title.replace(/'/g, "\\'")}',\n  description: '${description.replace(/'/g, "\\'")}',\n  content: \`\n${content.replace(/`/g, "\\`")}\n  \`\n},`;
            const selectedModuleText = categorySelect.options[categorySelect.selectedIndex].text;
            instructionText = `Copie e cole no array 'topics' do módulo "${selectedModuleText}" em data.js.`;
        } else {
            const title = document.getElementById('module-title').value.trim();
            const description = document.getElementById('module-description').value.trim();
            const icon = document.getElementById('module-icon').value.trim();
            if (!title) { alert('O Título do Módulo é obrigatório.'); return; }
            const moduleId = title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
            generatedCode = `{\n  id: '${moduleId}',\n  title: '${title.replace(/'/g, "\\'")}',\n  description: '${description.replace(/'/g, "\\'")}',\n  icon: \`${icon.replace(/`/g, "\\`")}\`,\n  topics: []\n},`;
            instructionText = `Copie e cole dentro do array principal 'forumData' em data.js.`;
        }
        elements.output.value = generatedCode;
        elements.resultInstruction.textContent = instructionText;
        elements.previewWrapper.classList.add('opacity-0');
        elements.resultArea.classList.remove('opacity-0', 'pointer-events-none');
    });


    elements.copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(elements.output.value).then(() => {
            elements.copyBtn.textContent = 'Copiado!';
            setTimeout(() => { elements.copyBtn.textContent = 'Copiar'; }, 2000);
        });
    });

    setTheme(localStorage.getItem('theme') === 'dark');
    switchMode('topic');
});