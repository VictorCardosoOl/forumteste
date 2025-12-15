/**
 * @module utils
 * @description Helper functions for the application.
 */

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed.
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @returns {Function} - The debounced function.
 */
export function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Escapes special characters in a string for use in a regular expression.
 * @param {string} string - The string to escape.
 * @returns {string} - The escaped string.
 */
export function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Wraps matching text with <mark> tags.
 * @param {string} text - The text to search within.
 * @param {string} query - The search query.
 * @returns {string} - HTML string with highlighted matches.
 */
export function highlightMatches(text, query) {
    if (!query || !text || query === '%') return text;

    const words = query.split(/\s+/).filter(w => w.length > 1);
    if (words.length === 0) return text;

    const regex = new RegExp(`(${words.map(w => escapeRegExp(w)).join('|')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}
