/**
 * sidebar.js - Logic for the Tailwind Sidebar
 */

export function initSidebar({ onNavLinkClick, onHomeClick }) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    const mobileCloseBtn = document.getElementById('mobile-close-button');
    const overlay = document.getElementById('sidebar-overlay');

    // Configura os links de navegação
    document.querySelectorAll('[data-action="view-topics"]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Fechar mobile sidebar se necessário
            closeMobileSidebar();
        });
    });

    // Mobile Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Show Sidebar
            // remove -ml-[280px] to slide it in
            sidebar.classList.remove('-ml-[280px]');
            sidebar.classList.add('ml-0');

            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.classList.add('opacity-100', 'pointer-events-auto');
        });
    }

    const closeMobileSidebar = () => {
        // Hide Sidebar
        sidebar.classList.add('-ml-[280px]');
        sidebar.classList.remove('ml-0');

        overlay.classList.remove('opacity-100', 'pointer-events-auto');
        overlay.classList.add('opacity-0', 'pointer-events-none');
    };

    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileSidebar);
    if (overlay) overlay.addEventListener('click', closeMobileSidebar);

    // Desktop Collapse Logic
    if (toggleBtn) {
        let isExpanded = true;

        toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;

            if (isExpanded) {
                // Expandido: w-[280px]
                sidebar.classList.remove('lg:w-20');
                sidebar.classList.add('lg:w-[280px]');

                // Show text labels
                document.querySelectorAll('.sidebar-label').forEach(el => {
                    el.classList.remove('hidden', 'opacity-0');
                    el.classList.add('block', 'opacity-100');
                });

                // Adjust footer search pos
                const footer = document.getElementById('footer-search');
                if (footer) footer.style.left = '280px';

            } else {
                // Recolhido: w-20
                sidebar.classList.remove('lg:w-[280px]');
                sidebar.classList.add('lg:w-20');

                // Hide labels
                document.querySelectorAll('.sidebar-label').forEach(el => {
                    el.classList.add('hidden', 'opacity-0');
                    el.classList.remove('block', 'opacity-100');
                });

                // Adjust footer search pos
                const footer = document.getElementById('footer-search');
                if (footer) footer.style.left = '80px';
            }
        });
    }
}

export function updateActiveLink(categoryId) {
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
        const isActive = link.getAttribute('data-id') === categoryId;

        // Tailwind active classes
        if (isActive) {
            link.classList.add('bg-zinc-100', 'dark:bg-zinc-800', 'text-blue-600', 'dark:text-blue-400', 'font-semibold');
            link.classList.remove('text-zinc-500', 'dark:text-zinc-400');
        } else {
            link.classList.remove('bg-zinc-100', 'dark:bg-zinc-800', 'text-blue-600', 'dark:text-blue-400', 'font-semibold');
            link.classList.add('text-zinc-500', 'dark:text-zinc-400');
        }
    });
}