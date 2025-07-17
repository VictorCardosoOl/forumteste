document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const elements = {
        formContent: document.getElementById('form-content'),
        previewContent: document.getElementById('preview-content'),
        generateBtn: document.getElementById('generate-btn'),
        themeToggle: document.getElementById('theme-toggle'),
        modalOverlay: document.getElementById('modal-overlay'),
        closeModalBtn: document.getElementById('close-modal-btn'),
        output: document.getElementById('output'),
        copyBtn: document.getElementById('copy-btn'),
        resultInstruction: document.getElementById('result-instruction'),
        clearFormBtn: document.getElementById('clear-form-btn'),
        toast: document.getElementById('toast-notification'),
        toastMessage: document.getElementById('toast-message'),
        modeTopic: document.getElementById('mode-topic'),
        modeModule: document.getElementById('mode-module'),
        helpToggle: document.getElementById('help-toggle'),
        tagsGuide: document.getElementById('tags-guide'),
        closeTagsGuide: document.getElementById('close-tags-guide')
    };

    // Estado da aplicação
    let currentMode = 'topic';
    const autoSaveKey = 'studioProAutoSave';
    let autoSaveInterval;
    let debounceTimer;

    // Inicialização
    initTheme();
    renderForm();
    setupEventListeners();
    checkAutoSave();

    // Função para padronizar SVGs
    function standardizeSVG(svgString) {
        if (!svgString || !svgString.includes('<svg')) return svgString;
        
        // Adiciona classe module-icon se não existir
        if (!svgString.includes('class="module-icon"')) {
            svgString = svgString.replace('<svg', '<svg class="module-icon"');
        }
        
        // Garante fill="currentColor" se não tiver fill definido
        if (!svgString.includes('fill="')) {
            svgString = svgString.replace('<svg', '<svg fill="currentColor"');
        }
        
        return svgString;
    }

    // Funções principais
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
        
        document.body.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    function toggleTheme() {
        const isDark = !document.body.classList.contains('dark');
        document.body.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        showToast(`Tema ${isDark ? 'escuro' : 'claro'} ativado`);
    }

    function renderForm() {
        if (currentMode === 'topic') {
            renderTopicForm();
        } else {
            renderModuleForm();
        }
    }

    function renderTopicForm() {
        const categories = forumData?.map(cat => 
            `<option value="${cat.id}">${cat.title}</option>`
        ).join('') || '';

        elements.formContent.innerHTML = `
            <div class="space-y-6">
                <div class="form-card">
                    <div class="form-header">
                        <i class="fas fa-info-circle text-blue-500"></i>
                        <h3>Informações do Tópico</h3>
                    </div>
                    <div class="space-y-4">
                        <div class="form-group">
                            <label for="category-select">Módulo</label>
                            <select id="category-select" class="form-control">
                                <option value="" disabled selected>Selecione um módulo</option>
                                ${categories}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="topic-title">Título</label>
                            <input type="text" id="topic-title" class="form-control" placeholder="Título do tópico">
                        </div>
                        <div class="form-group">
                            <label for="topic-description">Descrição</label>
                            <input type="text" id="topic-description" class="form-control" placeholder="Breve descrição do tópico">
                        </div>
                    </div>
                </div>

                <div class="editor-wrapper">
                    <div class="editor-header">
                        <h3>
                            <i class="fas fa-edit text-blue-500"></i>
                            Conteúdo
                        </h3>
                        <button id="show-tags-guide" title="Ajuda com formatação" aria-label="Ajuda com formatação">
                            <i class="fas fa-question-circle text-gray-500 hover:text-gray-700"></i>
                        </button>
                    </div>
                    <div class="editor-toolbar">
                        <button class="toolbar-btn" data-command="h2" title="Título Principal (h2)" aria-label="Adicionar título">
                            <i class="fas fa-heading"></i>
                        </button>
                        <button class="toolbar-btn" data-command="h3" title="Subtítulo (h3)" aria-label="Adicionar subtítulo">
                            <i class="fas fa-heading" style="font-size: 0.8em"></i>
                        </button>
                        <button class="toolbar-btn" data-command="p" title="Parágrafo (p)" aria-label="Adicionar parágrafo">
                            <i class="fas fa-paragraph"></i>
                        </button>
                        <div class="toolbar-divider"></div>
                        <button class="toolbar-btn" data-command="bold" title="Negrito (strong)" aria-label="Negrito">
                            <i class="fas fa-bold"></i>
                        </button>
                        <button class="toolbar-btn" data-command="italic" title="Itálico (em)" aria-label="Itálico">
                            <i class="fas fa-italic"></i>
                        </button>
                        <button class="toolbar-btn" data-command="underline" title="Sublinhado (u)" aria-label="Sublinhado">
                            <i class="fas fa-underline"></i>
                        </button>
                        <div class="toolbar-divider"></div>
                        <button class="toolbar-btn" data-command="ul" title="Lista não ordenada (ul)" aria-label="Lista não ordenada">
                            <i class="fas fa-list-ul"></i>
                        </button>
                        <button class="toolbar-btn" data-command="ol" title="Lista ordenada (ol)" aria-label="Lista ordenada">
                            <i class="fas fa-list-ol"></i>
                        </button>
                        <div class="toolbar-divider"></div>
                        <button class="toolbar-btn" data-command="link" title="Link (a)" aria-label="Adicionar link">
                            <i class="fas fa-link"></i>
                        </button>
                        <button class="toolbar-btn" data-command="image" title="Imagem (img)" aria-label="Adicionar imagem">
                            <i class="fas fa-image"></i>
                        </button>
                        <button class="toolbar-btn" data-command="color" title="Texto colorido (span)" aria-label="Texto colorido">
                            <i class="fas fa-palette"></i>
                        </button>
                    </div>
                    <textarea id="content-editor" class="editor-content" placeholder="Escreva seu conteúdo aqui..."></textarea>
                    <div class="editor-stats">0 palavras | 0 caracteres</div>
                </div>
            </div>
        `;

        setupEditor();
    }

    function renderModuleForm() {
        elements.formContent.innerHTML = `
            <div class="form-card">
                <div class="form-header">
                    <i class="fas fa-folder-open text-blue-500"></i>
                    <h3>Novo Módulo</h3>
                </div>
                <div class="space-y-4">
                    <div class="form-group">
                        <label for="module-title">Título</label>
                        <input type="text" id="module-title" class="form-control" placeholder="Título do módulo">
                    </div>
                    <div class="form-group">
                        <label for="module-description">Descrição</label>
                        <input type="text" id="module-description" class="form-control" placeholder="Descrição do módulo">
                    </div>
                    <div class="form-group">
                        <label for="module-icon">
                            Ícone (SVG)
                            <button type="button" id="icon-help" aria-label="Ajuda com ícone SVG">
                                <i class="fas fa-question-circle text-gray-500 hover:text-gray-700"></i>
                            </button>
                        </label>
                        <textarea id="module-icon" rows="6" class="form-control" placeholder='<svg viewBox="0 0 24 24" fill="currentColor" class="module-icon">\n  <!-- Seu SVG aqui -->\n</svg>'></textarea>
                        <p class="text-xs text-gray-500 mt-1">Use SVG inline com viewBox="0 0 24 24" e fill="currentColor"</p>
                    </div>
                </div>
            </div>
        `;

        // Adiciona ajuda para ícones SVG
        document.getElementById('icon-help').addEventListener('click', () => {
            alert(`Dicas para ícones SVG:
1. Use viewBox="0 0 24 24" para tamanho consistente
2. Sempre inclua class="module-icon"
3. Use fill="currentColor" para herdar a cor do tema
4. Mantenha o SVG simples e limpo`);
        });

        // Atualiza o preview quando o ícone é alterado
        document.getElementById('module-icon').addEventListener('input', () => {
            updateModulePreview();
        });
    }

    function setupEditor() {
        const editor = document.getElementById('content-editor');
        const toolbar = document.querySelector('.editor-toolbar');
        const stats = document.querySelector('.editor-stats');

        // Atualizar pré-visualização e estatísticas com debounce
        editor.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                updateTopicPreview();
                updateStats();
                autoSave();
            }, 300);
        });

        // Botões da toolbar
        toolbar.addEventListener('click', (e) => {
            if (e.target.closest('[data-command]')) {
                const btn = e.target.closest('[data-command]');
                const command = btn.getAttribute('data-command');
                formatText(command);
            }
        });

        // Atualizar estatísticas inicialmente
        updateStats();
    }

    function formatText(command) {
        const editor = document.getElementById('content-editor');
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const selectedText = editor.value.substring(start, end);
        let replacement = '';
        let cursorOffset = 0;

        switch (command) {
            case 'h2':
                replacement = `\n<h2>${selectedText || 'Título Principal'}</h2>\n`;
                cursorOffset = selectedText ? 0 : -13;
                break;
            case 'h3':
                replacement = `\n<h3>${selectedText || 'Subtítulo'}</h3>\n`;
                cursorOffset = selectedText ? 0 : -11;
                break;
            case 'p':
                replacement = `\n<p>${selectedText || 'Parágrafo de texto...'}</p>\n`;
                cursorOffset = selectedText ? 0 : -19;
                break;
            case 'bold':
                replacement = `<strong>${selectedText || 'texto em negrito'}</strong>`;
                cursorOffset = selectedText ? 0 : -16;
                break;
            case 'italic':
                replacement = `<em>${selectedText || 'texto em itálico'}</em>`;
                cursorOffset = selectedText ? 0 : -16;
                break;
            case 'underline':
                replacement = `<u>${selectedText || 'texto sublinhado'}</u>`;
                cursorOffset = selectedText ? 0 : -17;
                break;
            case 'ul':
                replacement = `\n<ul>\n  <li>${selectedText || 'Item da lista'}</li>\n  <li>Item 2</li>\n</ul>\n`;
                cursorOffset = selectedText ? 0 : -13;
                break;
            case 'ol':
                replacement = `\n<ol>\n  <li>${selectedText || 'Item 1'}</li>\n  <li>Item 2</li>\n</ol>\n`;
                cursorOffset = selectedText ? 0 : -7;
                break;
            case 'link':
                const url = prompt('URL do link:', 'https://');
                if (url) {
                    replacement = `<a href="${url}" target="_blank" rel="noopener">${selectedText || 'Texto do Link'}</a>`;
                    cursorOffset = selectedText ? 0 : -12;
                }
                break;
            case 'image':
                const imgUrl = prompt('URL da imagem:', 'https://');
                if (imgUrl) {
                    const altText = prompt('Texto alternativo (descrição da imagem):', 'Imagem');
                    replacement = `<img src="${imgUrl}" alt="${altText}" class="content-image" loading="lazy">`;
                }
                break;
            case 'color':
                const color = prompt('Cor do texto (nome ou código hexadecimal):', 'blue');
                if (color) {
                    replacement = `<span style="color: ${color};">${selectedText || 'Texto colorido'}</span>`;
                    cursorOffset = selectedText ? 0 : -15;
                }
                break;
        }

        if (replacement) {
            editor.value = editor.value.substring(0, start) + replacement + editor.value.substring(end);
            editor.dispatchEvent(new Event('input'));
            
            // Posicionar o cursor corretamente
            const newCursorPos = start + replacement.length + cursorOffset;
            editor.setSelectionRange(newCursorPos, newCursorPos);
            editor.focus();
        }
    }

    function updateStats() {
        const editor = document.getElementById('content-editor');
        const stats = document.querySelector('.editor-stats');
        if (!editor || !stats) return;

        const content = editor.value;
        const charCount = content.length;
        const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;

        stats.textContent = `${wordCount} ${wordCount === 1 ? 'palavra' : 'palavras'} | ${charCount} ${charCount === 1 ? 'caractere' : 'caracteres'}`;
    }

    function updateTopicPreview() {
        const title = document.getElementById('topic-title')?.value || 'Título do Tópico';
        const description = document.getElementById('topic-description')?.value || 'Descrição breve do tópico';
        const content = document.getElementById('content-editor')?.value || '<p>Seu conteúdo aparecerá aqui...</p>';

        elements.previewContent.innerHTML = `
            <article class="space-y-6">
                <header class="border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h1 class="text-2xl font-bold">${title}</h1>
                    <p class="text-gray-600 dark:text-gray-400">${description}</p>
                </header>
                <div class="prose-content">
                    ${content}
                </div>
            </article>
        `;
    }

    function updateModulePreview() {
        if (currentMode !== 'module') return;
        
        const title = document.getElementById('module-title')?.value || 'Novo Módulo';
        const description = document.getElementById('module-description')?.value || 'Descrição do módulo';
        let icon = document.getElementById('module-icon')?.value || '';
        
        // Padroniza o SVG antes de exibir
        icon = standardizeSVG(icon) || 
               `<svg viewBox="0 0 24 24" fill="currentColor" class="module-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>`;

        elements.previewContent.innerHTML = `
            <div class="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div class="flex items-start gap-5">
                    <div class="w-14 h-14 flex items-center justify-center text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 rounded-lg p-2 border border-gray-200 dark:border-gray-600">
                        ${icon}
                    </div>
                    <div class="space-y-2">
                        <h3 class="text-xl font-bold">${title}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${description}</p>
                    </div>
                </div>
            </div>
        `;
    }

    function generateCode() {
        if (currentMode === 'topic') {
            generateTopicCode();
        } else {
            generateModuleCode();
        }
    }

    function generateTopicCode() {
        const categoryId = document.getElementById('category-select').value;
        const title = document.getElementById('topic-title').value;
        const description = document.getElementById('topic-description').value;
        const content = document.getElementById('content-editor').value;

        if (!categoryId || !title || !description || !content) {
            showToast('Preencha todos os campos obrigatórios', 3000);
            return;
        }

        const topicId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        
        const code = `{
    id: '${topicId}',
    title: '${escapeSingleQuotes(title)}',
    description: '${escapeSingleQuotes(description)}',
    content: \`${content}\`
}`;

        showResult(code, 'Copie o código abaixo e cole no array "topics" do módulo correspondente no arquivo data.js');
    }

    function generateModuleCode() {
        const title = document.getElementById('module-title').value;
        const description = document.getElementById('module-description').value;
        let icon = document.getElementById('module-icon').value;

        if (!title || !description) {
            showToast('Preencha todos os campos obrigatórios', 3000);
            return;
        }

        // Padroniza o SVG antes de gerar o código
        icon = standardizeSVG(icon) || '<svg viewBox="0 0 24 24" fill="currentColor" class="module-icon"></svg>';

        const moduleId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

        const code = `{
    id: '${moduleId}',
    title: '${escapeSingleQuotes(title)}',
    description: '${escapeSingleQuotes(description)}',
    icon: \`${icon}\`,
    topics: []
}`;

        showResult(code, 'Copie o código abaixo e cole no array forumData no arquivo data.js');
    }

    function escapeSingleQuotes(str) {
        return str.replace(/'/g, "\\'");
    }

    function showResult(code, instruction) {
        elements.output.value = code;
        elements.resultInstruction.textContent = instruction;
        elements.modalOverlay.classList.add('active');
        
        // Destaca a parte do SVG no código gerado
        setTimeout(() => {
            const svgStart = elements.output.value.indexOf('<svg');
            if (svgStart !== -1) {
                const svgEnd = elements.output.value.indexOf('</svg>') + 6;
                elements.output.setSelectionRange(svgStart, svgEnd);
            }
        }, 100);
    }

    function closeModal() {
        elements.modalOverlay.classList.remove('active');
    }

    function showTagsGuide() {
        elements.tagsGuide.classList.add('active');
    }

    function closeTagsGuide() {
        elements.tagsGuide.classList.remove('active');
    }

    function showToast(message, duration = 3000) {
        elements.toastMessage.textContent = message;
        elements.toast.classList.add('show');
        
        setTimeout(() => {
            elements.toast.classList.remove('show');
        }, duration);
    }

    function autoSave() {
        const data = {
            mode: currentMode,
            fields: {}
        };

        document.querySelectorAll('#form-content input, #form-content textarea, #form-content select').forEach(el => {
            if (el.id) {
                data.fields[el.id] = el.value;
            }
        });

        localStorage.setItem(autoSaveKey, JSON.stringify(data));
    }

    function checkAutoSave() {
        const savedData = localStorage.getItem(autoSaveKey);
        if (!savedData) return;

        try {
            const data = JSON.parse(savedData);
            if (confirm('Dados não salvos encontrados. Deseja restaurar?')) {
                currentMode = data.mode;
                renderForm();
                
                setTimeout(() => {
                    Object.entries(data.fields).forEach(([id, value]) => {
                        const el = document.getElementById(id);
                        if (el) {
                            el.value = value;
                            el.dispatchEvent(new Event('input'));
                        }
                    });
                    showToast('Dados restaurados com sucesso');
                }, 100);
            } else {
                clearAutoSave();
            }
        } catch (e) {
            console.error('Erro ao restaurar dados:', e);
            clearAutoSave();
        }
    }

    function clearAutoSave() {
        localStorage.removeItem(autoSaveKey);
    }

    function clearForm() {
        if (confirm('Tem certeza que deseja limpar todos os campos?')) {
            document.querySelectorAll('#form-content input, #form-content textarea, #form-content select').forEach(el => {
                el.value = '';
                el.dispatchEvent(new Event('input'));
            });
            showToast('Formulário limpo');
            clearAutoSave();
        }
    }

    function setupEventListeners() {
        // Toggle tema
        elements.themeToggle.addEventListener('click', toggleTheme);

        // Toggle modo (tópico/módulo)
        elements.modeTopic.addEventListener('click', () => {
            if (currentMode !== 'topic') {
                currentMode = 'topic';
                elements.modeTopic.classList.add('active');
                elements.modeModule.classList.remove('active');
                renderForm();
                showToast('Modo tópico ativado');
            }
        });

        elements.modeModule.addEventListener('click', () => {
            if (currentMode !== 'module') {
                currentMode = 'module';
                elements.modeModule.classList.add('active');
                elements.modeTopic.classList.remove('active');
                renderForm();
                showToast('Modo módulo ativado');
            }
        });

        // Botões
        elements.generateBtn.addEventListener('click', generateCode);
        elements.clearFormBtn.addEventListener('click', clearForm);
        elements.closeModalBtn.addEventListener('click', closeModal);
        elements.modalOverlay.addEventListener('click', (e) => {
            if (e.target === elements.modalOverlay) closeModal();
        });
        elements.copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(elements.output.value).then(() => {
                elements.copyBtn.textContent = 'Copiado!';
                setTimeout(() => {
                    elements.copyBtn.textContent = 'Copiar';
                }, 2000);
            });
        });

        // Guia de Tags
        document.addEventListener('click', (e) => {
            if (e.target.closest('#show-tags-guide') || e.target.closest('#help-toggle')) {
                showTagsGuide();
            }
        });
        elements.closeTagsGuide.addEventListener('click', closeTagsGuide);
        elements.tagsGuide.addEventListener('click', (e) => {
            if (e.target === elements.tagsGuide) {
                closeTagsGuide();
            }
        });

        // Auto-save a cada 5 segundos
        autoSaveInterval = setInterval(autoSave, 5000);
    }

    // Limpar intervalo ao sair da página
    window.addEventListener('beforeunload', () => {
        clearInterval(autoSaveInterval);
    });
});