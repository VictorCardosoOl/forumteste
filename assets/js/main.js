/**
 * @module app
 * @description Main entry point. Initializes modules and handles global events.
 */

import LocomotiveScroll from 'locomotive-scroll';
import { database } from './data/index.js';
import { initSidebar } from './sidebar.js';
import * as Router from './router.js';
import * as View from './view.js'; // Imported for types/constants if needed
import { debounce } from './utils.js';

// DOM Elements
// DOM Elements
const appContainer = document.getElementById('app');
const searchInput = document.getElementById('sidebar-search-input');
const themeToggleBtn = document.getElementById('theme-toggle');

// Render Sidebar Immediately
const sidebarNav = document.getElementById('sidebar-nav');
if (sidebarNav) {
  sidebarNav.innerHTML = View.templates_Sidebar(database);
}

// State
let scrollInstance = null;
let currentSearchScope = 'all';

/**
 * Initialize Application
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Init Scroll
  scrollInstance = new LocomotiveScroll({
    el: document.querySelector('#content-wrapper'),
    smooth: true,
  });

  // 2. Init Router
  Router.initRouter(appContainer, scrollInstance);

  // 3. Init Sidebar
  initSidebar({
    onNavLinkClick: (catId) => Router.navigateCategory(catId),
    onHomeClick: () => Router.navigateHome()
  });

  // 4. Initial Render
  Router.navigateHome();
  // renderFilterMenuItems(); // Removed

  // 5. Setup Global Event Listeners (Event Delegation)
  setupEventListeners();

  // 6. Setup Theme
  initTheme();

  // 7. Setup Search Input
  setupSearch();

  // 8. Keybindings
  setupKeyboardShortcuts();
});


/**
 * Global Event Delegation
 * Handles clicks based on `data-action` attributes.
 */
function setupEventListeners() {
  document.addEventListener('click', (e) => {
    // Find closest element with data-action
    const target = e.target.closest('[data-action]');

    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;
    const category = target.dataset.category;

    switch (action) {
      case 'go-home':
        Router.navigateHome();
        break;
      case 'view-topics':
        if (id) Router.navigateCategory(id);
        break;
      case 'view-article':
        console.log('Navigating to article:', category, id);
        if (category && id) {
          // Close mobile sidebar if open
          document.getElementById('sidebar')?.classList.add('-translate-x-full');
          Router.navigateArticle(category, id);
        }
        break;
      case 'filter-by-tag':
        if (id) Router.navigateTag(id);
        break;
      case 'set-scope':
        setSearchScope(id);
        break;
    }
  });
}


/**
 * Search Logic
 */
function setupSearch() {
  if (!searchInput) return;

  const debouncedSearch = debounce((query) => {
    Router.performSearch(query);
  }, 300);

  searchInput.addEventListener('keyup', (e) => {
    const query = e.target.value;
    if (query.trim() === '') {
      Router.performSearch(''); // Will likely return home or current cat
    } else {
      debouncedSearch(query);
    }
  });
}

// Search Scope logic removed as the new premium UI relies on global search without the dropdown filter.
// If needed, it can be re-implemented with the new UI components.


/**
 * Theme Logic
 */
function initTheme() {
  if (!themeToggleBtn) return;

  const setTheme = (isDark) => {
    // Tailwind 'class' mode expects the class on the HTML element
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Update Icons
    const sun = themeToggleBtn.querySelector('.sun-icon');
    const moon = themeToggleBtn.querySelector('.moon-icon');
    if (sun && moon) {
      if (isDark) {
        sun.classList.remove('hidden');
        moon.classList.add('hidden');
      } else {
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
      }
    }
  };

  themeToggleBtn.addEventListener('click', () => {
    setTheme(!document.documentElement.classList.contains('dark'));
  });

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply initial theme
  setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);
}

/**
 * Keyboard Shortcuts
 */
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput?.focus();
    }
  });
}
