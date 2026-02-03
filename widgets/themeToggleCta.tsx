'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from "lucide-react"
import clsx from 'clsx'

const ThemeToggleCta = ({ className }: { className?: string }) => {
    const { theme, setTheme } = useTheme()

    return (
        <div 
            className={clsx('z-50', className)} 
        >
            <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-primary)] hover:border-[var(--border-secondary)] transition-all hover:scale-105 shadow-sm"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
                {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-[var(--text-secondary)]" />
                ) : (
                    <Moon className="w-5 h-5 text-[var(--text-secondary)]" />
                )}
            </button>
        </div>
    )
}

export default ThemeToggleCta
