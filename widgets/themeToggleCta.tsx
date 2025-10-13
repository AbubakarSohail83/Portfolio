'use client'

import { useTheme } from 'next-themes'
import { GoSun, GoMoon } from "react-icons/go"
import clsx from 'clsx'

const ThemeToggleCta = ({ className }: { className?: string }) => {
    const { theme, setTheme } = useTheme()

    return (
        <div 
            id="home" 
            className={clsx('z-50 group', className)} 
            title={`Switch to ${theme == 'dark' ? 'light' : 'dark'} mode`}
        >
            <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative p-3 sm:p-4 glass rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:scale-110 btn-modern overflow-hidden"
                style={{
                    background: 'var(--hero-badge-bg)',
                    border: '1px solid var(--hero-badge-border)'
                }}
            >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Icon container - mobile responsive */}
                <div className="relative z-10 flex items-center justify-center">
                    {theme === 'dark' ? (
                        <GoSun 
                            className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300 group-hover:rotate-180 group-hover:scale-110" 
                        />
                    ) : (
                        <GoMoon 
                            className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110" 
                        />
                    )}
                </div>

                {/* Tooltip - mobile responsive */}
                <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 px-2 sm:px-3 py-1 bg-black/80 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                </div>
            </button>
        </div>
    )
}

export default ThemeToggleCta