/**
 * sidebar.js - Logic for the Tailwind Sidebar
 * Supports: Expanded (Pinned), Collapsed (Icon only), and Hover-to-Expand.
 */

export function initSidebar({ onNavLinkClick, onHomeClick }) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle'); // The button to pin/unpin
    const mobileCloseBtn = document.getElementById('mobile-close-button');
    const overlay = document.getElementById('sidebar-overlay'); // If we have one for mobile

    // State
    let isPinned = localStorage.getItem('sidebarPinned') === 'true'; // Default to collapsed if false? Let's default to true.
    if (localStorage.getItem('sidebarPinned') === null) isPinned = true;

    // Helper: Apply State
    const applyState = () => {
        if (isPinned) {
            sidebar.classList.remove('sidebar-collapsed');
            sidebar.classList.add('w-72');
            sidebar.classList.remove('w-20');
        } else {
            sidebar.classList.add('sidebar-collapsed');
            sidebar.classList.remove('w-72');
            sidebar.classList.add('w-20');
        }
        localStorage.setItem('sidebarPinned', isPinned);
    };

    // Initial Apply
    applyState();

    // Toggle Pin Logic
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isPinned = !isPinned;
            applyState();
        });
    }

    // Hover Logic (Only works if NOT pinned)
    sidebar.addEventListener('mouseenter', () => {
        if (!isPinned) {
            sidebar.classList.remove('w-20');
            sidebar.classList.add('w-72');
        }
    });

    sidebar.addEventListener('mouseleave', () => {
        if (!isPinned) {
            sidebar.classList.remove('w-72');
            sidebar.classList.add('w-20');
        }
    });

    // Mobile Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.remove('-translate-x-full');
        });
    }

    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
        });
    }

    // Link Clicks
    // Use event delegation on the nav container to handle clicks
    const nav = document.getElementById('sidebar-nav');
    if (nav) {
        nav.addEventListener('click', (e) => {
            const link = e.target.closest('button[data-action]');
            if (link) {
                // If mobile, close
                if (window.innerWidth < 1024) {
                    sidebar.classList.add('-translate-x-full');
                }

                // Active state styling is handled by global View updates or manual class toggles
                // Here we just ensure logic runs
                const action = link.dataset.action;
                const id = link.dataset.id;

                if (action === 'view-topics' && onNavLinkClick) onNavLinkClick(id);
                // Note: Articles are inside topics. The previous sidebar structure had categories -> topics. 
                // If the user wants "Only Modules" in sidebar, then it's just Categories.
            }
        });
    }
}

export function updateActiveLink(categoryId) {
    // Optional: Visual feedback for active category
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
        if (link.dataset.id === categoryId) {
            link.classList.add('bg-white/10', 'text-white');
            link.classList.remove('text-gray-400');
        } else {
            link.classList.remove('bg-white/10', 'text-white');
            link.classList.add('text-gray-400');
        }
    });
}