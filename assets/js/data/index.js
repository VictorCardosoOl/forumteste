import { eSocial } from './modules/eSocial.js';
import { financeiro } from './modules/financeiro.js';
import { gerenciamentoderiscos } from './modules/gerenciamento_de_riscos.js';
import { Duvidas } from './modules/duvidas.js';
import { Coletivo } from './modules/coletivo.js';
import { problemas } from './modules/problemas.js';

// Aggregate all modules into a single array
// Note: We wrap the single objects in an array if they are not already, 
// but based on the file structure, each export is a CATEGORY object with a .topics array.
// The user request implied flattening, but for the View layer to work with Categories, 
// we actually want a list of Categories, each containing topics.
export const database = [
  eSocial,
  financeiro,
  gerenciamentoderiscos,
  Duvidas,
  Coletivo,
  problemas
];

/**
 * Flattens all topics for search functionality
 */
export const allTopics = database.flatMap(category =>
  (category.topics || []).map(topic => ({
    ...topic,
    categoryId: category.id,
    categoryTitle: category.title,
    categoryIcon: category.icon
  }))
);

/**
 * Find a category by its ID
 * @param {string} id 
 * @returns {object|undefined}
 */
export function findCategoryById(id) {
  return database.find(cat => cat.id === id);
}

/**
 * Find a topic (article) by its ID
 * @param {string} id 
 * @returns {object|undefined}
 */
export function findTopicById(id) {
  return allTopics.find(topic => topic.id === id);
}

/**
 * Search topics by query string
 * @param {string} query 
 * @returns {Array}
 */
export function searchTopics(query) {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();

  return allTopics.filter(topic => {
    const titleMatch = topic.title.toLowerCase().includes(lowerQuery);
    const descMatch = topic.description && topic.description.toLowerCase().includes(lowerQuery);
    const tagsMatch = topic.tags && topic.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    const contentMatch = topic.content && topic.content.toLowerCase().includes(lowerQuery);

    return titleMatch || descMatch || tagsMatch || contentMatch;
  });
}