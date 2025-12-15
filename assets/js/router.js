/**
 * @module router
 * @description Manages application state and navigation between views.
 */

import { forumData } from './data/index.js';
import * as View from './view.js';
import * as Search from './search.js';
import { updateActiveLink } from './sidebar.js';

const state = {
    currentCategory: null,
    currentTopic: null,
    searchScope: 'all',
    currentScroll: null, // assigned from app.js
    appContainer: null
};

// --- Initialization ---

export function initRouter(container, scrollInstance) {
    state.appContainer = container;
    state.currentScroll = scrollInstance;

    // Index data for search
    Search.initSearch(forumData);
}

// --- State Setters ---

export function setSearchScope(scope) {
    state.searchScope = scope;
}

// --- Navigation Actions ---

export function navigateHome() {
    state.currentCategory = null;
    state.currentTopic = null;
    updateActiveLink(null);

    render(View.templates_Home(forumData));
}

export function navigateCategory(categoryId) {
    const category = forumData.find(c => c.id === categoryId);
    if (!category) return navigateHome();

    state.currentCategory = categoryId;
    state.currentTopic = null;
    updateActiveLink(categoryId);

    // Group topics
    const groupedTopics = category.topics.reduce((acc, topic) => {
        const groupName = topic.group || 'Geral';
        if (!acc[groupName]) acc[groupName] = [];
        acc[groupName].push(topic);
        return acc;
    }, {});

    render(View.templates_Category(category, groupedTopics));
}

export function navigateArticle(categoryId, topicId) {
    const category = forumData.find(c => c.id === categoryId);
    if (!category) return navigateHome();

    const topic = category.topics.find(t => t.id === topicId);
    if (!topic) return navigateCategory(categoryId); // Fallback to category

    state.currentCategory = categoryId; // Ensure sidebar highlight
    updateActiveLink(categoryId);

    const related = getRelatedArticles(topic, categoryId);
    render(View.templates_Article(category, topic, related));
}

export function navigateTag(tagName) {
    const articlesWithTag = forumData.flatMap(category =>
        category.topics
            .filter(topic => topic.tags && topic.tags.includes(tagName))
            .map(topic => ({
                ...topic,
                categoryId: category.id,
                categoryTitle: category.title
            }))
    );

    render(View.templates_TagResults(tagName, articlesWithTag));
}

export function performSearch(query) {
    if (!query || query.trim() === '') {
        if (state.currentCategory) return navigateCategory(state.currentCategory);
        return navigateHome();
    }

    const results = Search.performSearch(query, state.searchScope);
    render(View.templates_SearchResults(results, query));
}

// --- Helper Functions ---

function render(html) {
    if (!state.appContainer) return;

    state.appContainer.innerHTML = html;

    // Update scroll
    if (state.currentScroll) {
        setTimeout(() => state.currentScroll.update(), 50);
        state.currentScroll.scrollTo('top', { duration: 0, disableLerp: true });
    }

    // Trigger copy buttons logic (could be moved to a View mount hook)
    addCopyButtons();
}

function getRelatedArticles(currentTopic, currentCategoryId) {
    // 1. Manual suggestions
    if (currentTopic.manualSuggestions?.length > 0) {
        return currentTopic.manualSuggestions
            .map(s => {
                const cat = forumData.find(c => c.id === s.categoryId);
                if (!cat) return null;
                const top = cat.topics.find(t => t.id === s.topicId);
                return top ? { ...top, categoryId: cat.id, categoryTitle: cat.title } : null;
            })
            .filter(Boolean)
            .slice(0, 3);
    }

    // 2. Tag based
    if (currentTopic.tags?.length) {
        const related = forumData.flatMap(cat =>
            cat.topics
                .filter(t => t.id !== currentTopic.id && t.tags?.length)
                .map(t => {
                    const common = t.tags.filter(tag => currentTopic.tags.includes(tag));
                    return common.length ? { ...t, categoryId: cat.id, categoryTitle: cat.title, score: common.length } : null;
                })
                .filter(Boolean)
                .sort((a, b) => b.score - a.score)
        );
        if (related.length) return related.slice(0, 3);
    }

    // 3. Random/Same Category fallback
    const sameCat = forumData.find(c => c.id === currentCategoryId);
    return sameCat?.topics
        .filter(t => t.id !== currentTopic.id)
        .slice(0, 3)
        .map(t => ({ ...t, categoryId: currentCategoryId, categoryTitle: sameCat.title })) || [];
}


function addCopyButtons() {
    document.querySelectorAll('pre:not(:has(.copy-button))').forEach(pre => {
        const button = document.createElement('button');
        button.className = 'copy-button absolute top-3 right-3 px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded hover:bg-zinc-700 hover:text-white transition-colors opacity-0 group-hover:opacity-100'; // Pure Tailwind
        button.textContent = 'Copiar';
        button.onclick = (e) => {
            e.stopPropagation();
            const code = pre.querySelector('code')?.textContent || pre.textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = 'Copiado!';
                setTimeout(() => button.textContent = 'Copiar', 2000);
            });
        };
        // Ensure Pre has compatible classes
        pre.classList.add('relative', 'group');
        pre.appendChild(button);
    });
}
