
/**
 * sidebar.js - Lógica para o novo comportamento da sidebar (Expandida, Flutuante, Recolhida)
 */

export function initSidebar({ onNavLinkClick, onHomeClick }) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    const mobileCloseBtn = document.getElementById('mobile-close-button');
    const overlay = document.getElementById('sidebar-overlay');

    // Configura os links de navegação
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const categoryId = link.getAttribute('data-category-id');
            onNavLinkClick(categoryId);

            // Fecha sidebar no mobile ao clicar
            if (window.innerWidth < 1024) {
                sidebar.classList.remove('translate-x-0');
                sidebar.classList.add('-translate-x-full'); // Esconde sidebar
                overlay.classList.remove('opacity-100', 'pointer-events-auto');
                overlay.classList.add('opacity-0', 'pointer-events-none');
            }
        });
    });

    // Mobile Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Mobile: Mostra sidebar removendo a margem negativa ou transform
            sidebar.classList.remove('-ml-[280px]');
            sidebar.classList.add('ml-0');

            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.classList.add('opacity-100', 'pointer-events-auto');
        });
    }

    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', () => {
            // Mobile: Esconde sidebar
            sidebar.classList.add('-ml-[280px]');
            sidebar.classList.remove('ml-0');

            overlay.classList.remove('opacity-100', 'pointer-events-auto');
            overlay.classList.add('opacity-0', 'pointer-events-none');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            // Mobile: Esconde sidebar ao clicar fora
            sidebar.classList.add('-ml-[280px]');
            sidebar.classList.remove('ml-0');

            overlay.classList.remove('opacity-100', 'pointer-events-auto');
            overlay.classList.add('opacity-0', 'pointer-events-none');
        });
    }

    // Desktop Collapse Logic
    if (toggleBtn) {
        let isExpanded = true;

        toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;

            if (isExpanded) {
                // Expandido
                sidebar.classList.remove('lg:w-20');
                sidebar.classList.add('lg:w-[280px]');

                document.querySelectorAll('.sidebar-text').forEach(el => {
                    el.classList.remove('opacity-0', 'w-0', 'hidden');
                    el.classList.add('opacity-100', 'w-auto');
                });

                // Ajuste footer search
                const footer = document.getElementById('footer-search');
                if (footer) footer.style.left = '280px';

            } else {
                // Recolhido
                sidebar.classList.remove('lg:w-[280px]');
                sidebar.classList.add('lg:w-20');

                document.querySelectorAll('.sidebar-text').forEach(el => {
                    el.classList.remove('opacity-100', 'w-auto');
                    el.classList.add('opacity-0', 'w-0', 'hidden');
                });

                // Ajuste footer search
                const footer = document.getElementById('footer-search');
                if (footer) footer.style.left = '80px';
            }
        });
    }
}

export function updateActiveLink(categoryId) {
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
        if (link.getAttribute('data-category-id') === categoryId) {
            link.classList.add('bg-black/5', 'dark:bg-white/10', 'font-semibold', 'text-black', 'dark:text-white');
        } else {
            link.classList.remove('bg-black/5', 'dark:bg-white/10', 'font-semibold', 'text-black', 'dark:text-white');
        }
    });
}