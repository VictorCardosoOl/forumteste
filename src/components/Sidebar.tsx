'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { modules } from '@/lib/data';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Menu, X, Sun, Moon, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false); // Validar sistema dps

    useEffect(() => {
        // Check local storage or system preference
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <>
            {/* Mobile Toggle */}
            <div className="md:hidden fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center glass border-b border-border/50">
                <span className="font-bold text-lg">Victor Cardoso</span>
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Sidebar Container */}
            <AnimatePresence>
                {(isOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && (
                    <motion.aside
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        className={cn(
                            "fixed inset-y-0 left-0 z-40 w-64 glass border-r border-border/50 flex flex-col transition-transform duration-300 md:translate-x-0 md:static",
                            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
                            "pt-20 md:pt-0" // Add padding for mobile header
                        )}
                    >
                        <div className="p-6 md:h-20 flex items-center border-b border-border/50">
                            <div className="flex items-center gap-3 font-bold text-xl">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                    VC
                                </div>
                                <span>Knowledge</span>
                            </div>
                        </div>

                        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                            <Link
                                href="/"
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group text-sm font-medium",
                                    pathname === '/' ? "bg-primary/10 text-primary" : "hover:bg-black/5 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                <LayoutDashboard className="w-5 h-5" />
                                Início
                            </Link>

                            <div className="px-3 pt-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Módulos
                            </div>

                            {modules.map((module) => (
                                <Link
                                    key={module.id}
                                    href={`/docs/${module.id}`}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group text-sm font-medium",
                                        pathname.startsWith(`/docs/${module.id}`)
                                            ? "bg-primary/10 text-primary"
                                            : "hover:bg-black/5 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                                        {module.icon}
                                    </span>
                                    {module.title}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-4 border-t border-border/50">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center justify-center w-full gap-2 px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                            >
                                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                {isDark ? 'Modo Claro' : 'Modo Escuro'}
                            </button>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
