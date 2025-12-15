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
  renderFilterMenuItems();

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

function setSearchScope(scopeId) {
  currentSearchScope = scopeId;

  // Update Filter Button Text
  const selectedModule = database.find(m => m.id === scopeId);

  const iconHtml = selectedModule
    ? `<div class="w-3.5 h-3.5">${selectedModule.icon || ''}</div>`
    : `<svg class="w-3.5 h-3.5 opacity-60" viewBox="0 0 256 256"><path fill="currentColor" d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>`;

  if (filterButton) {
    filterButton.innerHTML = `
      <div class="flex items-center gap-2">
        ${iconHtml}
        <span class="truncate max-w-[100px]">${selectedModule ? selectedModule.title : 'Todos'}</span>
        <svg class="w-3 h-3 opacity-40 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    `;
  }

  // Update Router state manually
  if (Router.setSearchScope) {
    Router.setSearchScope(scopeId);
  }

  // Re-trigger search to apply filter immediately
  const query = searchInput.value;
  if (query.trim() !== '') {
    Router.performSearch(query);
  }

  // Update active state in menu
  renderFilterMenuItems(filterMenuInput ? filterMenuInput.value : '');

  // Close menu
  if (filterMenu) filterMenu.classList.remove('visible');
}

function renderFilterMenuItems(filterText = '') {
  if (!filterMenuList) return;
  const lowerFilterText = filterText.toLowerCase();
  const allModules = [{ id: 'all', title: 'Todos os Módulos', icon: '' }, ...database];

  const filteredModules = allModules.filter(module =>
    module.title.toLowerCase().includes(lowerFilterText)
  );

  filterMenuList.innerHTML = View.templates_FilterMenu(filteredModules, currentSearchScope);
}


/**
 * Theme Logic
 */
function initTheme() {
  if (!themeToggleBtn) return;

  const setTheme = (isDark) => {
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Update Icons (simple toggle logic)
    const sun = themeToggleBtn.querySelector('.sun-icon');
    const moon = themeToggleBtn.querySelector('.moon-icon');
    if (sun && moon) {
      sun.classList.toggle('hidden', !isDark);   // In dark mode, we usually show Sun to switch to light? 
      // Wait, original: dark mode -> sun icon visible (to switch to light).
      // Original: sun icon style.display = isDark ? block : none
      // My CSS classes: sun-icon has SVG, moon-icon has SVG.
      // Let's stick to class toggle 'hidden'
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
    setTheme(!document.body.classList.contains('dark-mode'));
  });

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
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
