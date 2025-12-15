/**
 * @module search
 * @description Manages search functionality using Fuse.js.
 */

import Fuse from 'fuse.js';
import { highlightMatches } from './utils.js';

const SEARCH_OPTIONS = {
    keys: [
        { name: 'title', weight: 0.6 },
        { name: 'description', weight: 0.3 },
        { name: 'group', weight: 0.2 },
        { name: 'contentText', weight: 0.1 }
    ],
    includeMatches: true,
    threshold: 0.4,
    ignoreLocation: false,
    minMatchCharLength: 2,
    shouldSort: true,
    findAllMatches: false
};

let fuseInstance = null;

/**
 * Initializes the Fuse.js instance with forum data.
 * @param {Array} forumData - The raw data to likely flatten and index.
 * @returns {Fuse} - The initialized Fuse instance.
 */
export function initSearch(forumData) {
    const searchPool = forumData.flatMap(category =>
        category.topics.map(topic => ({
            ...topic,
            categoryId: category.id,
            categoryTitle: category.title,
            // Remove HTML tags for better text search
            contentText: topic.content ? topic.content.replace(/<[^>]*>/g, ' ') : ''
        }))
    );

    fuseInstance = new Fuse(searchPool, SEARCH_OPTIONS);
    return fuseInstance;
}

/**
 * Performs a search against the initialized index.
 * @param {string} query - The search query.
 * @param {string} scope - 'all' or a category ID.
 * @returns {Array} - Formatted result objects.
 */
export function performSearch(query, scope = 'all') {
    if (!fuseInstance) {
        console.error("Fuse instance not initialized. Call initSearch first.");
        return [];
    }

    if (!query || query === '%') {
        // If query is empty or wildcard, return everything (or filtered by scope)
        // Note: Fuse don't usually return everything on empty string, we might handle this in logic
        // But here we can simulate a "match all" if needed, or simply return empty.
        // However, the original logic had specific handling for %.
        // Let's stick to Fuse search for actual queries.
        return [];
    }

    let results;
    if (scope === 'all') {
        results = fuseInstance.search(query);
    } else {
        // Fuse doesn't natively support dynamic scoping without re-indexing or complex queries.
        // The original logic filtered _docs and re-instantiated Fuse.
        const filteredData = fuseInstance._docs.filter(
            item => item.categoryId === scope
        );
        const tempFuse = new Fuse(filteredData, SEARCH_OPTIONS);
        results = tempFuse.search(query);
    }

    return results.map(result => processResult(result, query));
}

/**
 * Prepares results for display, including highlighting.
 * @param {Object} item - The search result item.
 * @param {string} query - The search query.
 */
function processResult(fuseResult, query) {
    const item = fuseResult.item;
    const titleMatch = fuseResult.matches?.find(m => m.key === 'title');

    return {
        ...item,
        displayTitle: (titleMatch || query === '%') ? highlightMatches(item.title, query) : item.title,
        displayDescription: item.description ? highlightMatches(item.description, query) : ''
    };
}
