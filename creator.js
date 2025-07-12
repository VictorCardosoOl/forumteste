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
        modeTopic: document.getElementById('mode-topic'),
        modeModule: document.getElementById('mode-module')
    };

    // Estado da aplicação
    let currentMode = 'topic';
    const autoSaveKey = 'studioProAutoSave';
    let autoSaveInterval;

    // Inicialização
    initTheme();
    renderForm();
    setupEventListeners();
    checkAutoSave();

    // Funções principais
    function initTheme() {
        const isDark = localStorage.getItem('theme') === 'dark';
        document.body.classList.toggle('dark', isDark);
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
                <div class="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-4">Informações do Tópico</h3>
                    <div class="space-y-4">
                        <div>
                            <label for="category-select" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Módulo</label>
                            <select id="category-select" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                                ${categories}
                            </select>
                        </div>
                        <div>
                            <label for="topic-title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Título</label>
                            <input type="text" id="topic-title" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                        </div>
                        <div>
                            <label for="topic-description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Descrição</label>
                            <input type="text" id="topic-description" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                        </div>
                    </div>
                </div>

                <div class="editor-wrapper">
                    <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <h3 class="text-base font-semibold text-gray-900 dark:text-white">Conteúdo</h3>
                        <div class="tooltip">
                            <i class="fas fa-question-circle text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"></i>
                            <span class="tooltip-text">Dica: Use os botões abaixo para formatar seu conteúdo</span>
                        </div>
                    </div>
                    <div class="editor-toolbar">
                        <button class="toolbar-btn" data-command="h2" title="Título"><i class="fas fa-heading"></i></button>
                        <button class="toolbar-btn" data-command="h3" title="Subtítulo"><i class="fas fa-heading" style="font-size: 0.8em"></i></button>
                        <button class="toolbar-btn" data-command="p" title="Parágrafo"><i class="fas fa-paragraph"></i></button>
                        <div class="w-px h-6 bg-gray-200 dark:bg-gray-600 mx-1"></div>
                        <button class="toolbar-btn" data-command="bold" title="Negrito"><i class="fas fa-bold"></i></button>
                        <button class="toolbar-btn" data-command="italic" title="Itálico"><i class="fas fa-italic"></i></button>
                        <button class="toolbar-btn" data-command="underline" title="Sublinhado"><i class="fas fa-underline"></i></button>
                        <div class="w-px h-6 bg-gray-200 dark:bg-gray-600 mx-1"></div>
                        <button class="toolbar-btn" data-command="ul" title="Lista"><i class="fas fa-list-ul"></i></button>
                        <button class="toolbar-btn" data-command="ol" title="Lista numerada"><i class="fas fa-list-ol"></i></button>
                        <div class="w-px h-6 bg-gray-200 dark:bg-gray-600 mx-1"></div>
                        <button class="toolbar-btn" data-command="link" title="Link"><i class="fas fa-link"></i></button>
                        <button class="toolbar-btn" data-command="image" title="Imagem"><i class="fas fa-image"></i></button>
                    </div>
                    <textarea id="content-editor" class="editor-content"></textarea>
                    <div class="editor-stats">0 palavras | 0 caracteres</div>
                </div>
            </div>
        `;

        setupEditor();
    }

    function renderModuleForm() {
        elements.formContent.innerHTML = `
            <div class="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-4">
                <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-4">Novo Módulo</h3>
                <div>
                    <label for="module-title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Título</label>
                    <input type="text" id="module-title" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                </div>
                <div>
                    <label for="module-description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Descrição</label>
                    <input type="text" id="module-description" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                </div>
                <div>
                    <label for="module-icon" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ícone (SVG)</label>
                    <textarea id="module-icon" rows="6" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono text-sm"></textarea>
                </div>
            </div>
        `;

        setupModuleForm();
    }

    function setupEditor() {
        const editor = document.getElementById('content-editor');
        const toolbar = document.querySelector('.editor-toolbar');
        const stats = document.querySelector('.editor-stats');

        // Atualizar pré-visualização e estatísticas
        editor.addEventListener('input', () => {
            updateTopicPreview();
            updateStats();
            autoSave();
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

        switch (command) {
            case 'h2':
                replacement = `\n<h2>${selectedText || 'Título'}</h2>\n`;
                break;
            case 'h3':
                replacement = `\n<h3>${selectedText || 'Subtítulo'}</h3>\n`;
                break;
            case 'p':
                replacement = `\n<p>${selectedText || 'Parágrafo'}</p>\n`;
                break;
            case 'bold':
                replacement = `<strong>${selectedText || 'texto em negrito'}</strong>`;
                break;
            case 'italic':
                replacement = `<em>${selectedText || 'texto em itálico'}</em>`;
                break;
            case 'underline':
                replacement = `<u>${selectedText || 'texto sublinhado'}</u>`;
                break;
            case 'ul':
                replacement = `\n<ul>\n  <li>${selectedText || 'Item da lista'}</li>\n</ul>\n`;
                break;
            case 'ol':
                replacement = `\n<ol>\n  <li>${selectedText || 'Item numerado'}</li>\n</ol>\n`;
                break;
            case 'link':
                const url = prompt('URL do link:', 'https://');
                if (url) {
                    replacement = `<a href="${url}" target="_blank">${selectedText || 'Link'}</a>`;
                }
                break;
            case 'image':
                const imgUrl = prompt('URL da imagem:', 'https://');
                if (imgUrl) {
                    const altText = prompt('Texto alternativo:', 'Imagem');
                    replacement = `<img src="${imgUrl}" alt="${altText}" class="content-image">`;
                }
                break;
        }

        if (replacement) {
            editor.value = editor.value.substring(0, start) + replacement + editor.value.substring(end);
            editor.dispatchEvent(new Event('input'));
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

        stats.textContent = `${wordCount} palavras | ${charCount} caracteres`;
    }

    function updateTopicPreview() {
        const title = document.getElementById('topic-title')?.value || 'Título do Tópico';
        const description = document.getElementById('topic-description')?.value || 'Descrição breve do tópico';
        const content = document.getElementById('content-editor')?.value || '<p class="text-gray-500 dark:text-gray-400">Seu conteúdo aparecerá aqui...</p>';

        elements.previewContent.innerHTML = `
            <article class="space-y-4">
                <h1 class="text-2xl font-bold">${title}</h1>
                <p class="text-lg text-gray-600 dark:text-gray-300">${description}</p>
                <hr class="border-gray-200 dark:border-gray-700">
                <div class="prose dark:prose-invert max-w-none">${content}</div>
            </article>
        `;
    }

    function updateModulePreview() {
        if (currentMode !== 'module') return;
        
        const title = document.getElementById('module-title')?.value || 'Novo Módulo';
        const description = document.getElementById('module-description')?.value || 'Descrição do módulo';
        const icon = document.getElementById('module-icon')?.value || '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/></svg>';

        elements.previewContent.innerHTML = `
            <div class="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 flex items-center justify-center text-gray-800 dark:text-gray-200">
                        ${icon}
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">${title}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300">${description}</p>
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

        if (!title || !description || !content) {
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
        const icon = document.getElementById('module-icon').value;

        if (!title || !description) {
            showToast('Preencha todos os campos obrigatórios', 3000);
            return;
        }

        const moduleId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

        const code = `{
    id: '${moduleId}',
    title: '${escapeSingleQuotes(title)}',
    description: '${escapeSingleQuotes(description)}',
    icon: \`${icon || '<svg viewBox="0 0 24 24" fill="currentColor"></svg>'}\`,
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
        elements.modalOverlay.classList.add('opacity-100', 'pointer-events-auto');
        document.querySelector('#modal-content').classList.remove('scale-95');
    }

    function closeModal() {
        elements.modalOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        document.querySelector('#modal-content').classList.add('scale-95');
    }

    function showToast(message, duration = 3000) {
        elements.toast.textContent = message;
        elements.toast.classList.add('translate-y-0');
        
        setTimeout(() => {
            elements.toast.classList.remove('translate-y-0');
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
        elements.themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Toggle modo (tópico/módulo)
        elements.modeTopic.addEventListener('click', () => {
            if (currentMode !== 'topic') {
                currentMode = 'topic';
                elements.modeTopic.classList.add('active');
                elements.modeModule.classList.remove('active');
                renderForm();
            }
        });

        elements.modeModule.addEventListener('click', () => {
            if (currentMode !== 'module') {
                currentMode = 'module';
                elements.modeModule.classList.add('active');
                elements.modeTopic.classList.remove('active');
                renderForm();
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

        // Auto-save a cada 5 segundos
        autoSaveInterval = setInterval(autoSave, 5000);
    }

    // Limpar intervalo ao sair da página
    window.addEventListener('beforeunload', () => {
        clearInterval(autoSaveInterval);
    });
});