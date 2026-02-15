'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from "lucide-react"
import clsx from 'clsx'

const ThemeToggleCta = ({ className }: { className?: string }) => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    // Match server render (defaultTheme="dark") until hydrated to avoid mismatch
    const resolved = mounted ? theme : 'dark'

    return (
        <div 
            className={clsx('z-50', className)} 
        >
            <button 
                onClick={() => setTheme(resolved === 'dark' ? 'light' : 'dark')}
                className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-primary)] hover:border-[var(--border-secondary)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-105 hover:shadow-lg active:scale-95"
                title={mounted ? `Switch to ${resolved === 'dark' ? 'light' : 'dark'} mode` : 'Switch theme'}
                aria-label={mounted ? `Switch to ${resolved === 'dark' ? 'light' : 'dark'} mode` : 'Switch theme'}
            >
                {resolved === 'dark' ? (
                    <Sun className="w-5 h-5 text-[var(--text-secondary)] transition-transform duration-300 hover:rotate-12" />
                ) : (
                    <Moon className="w-5 h-5 text-[var(--text-secondary)] transition-transform duration-300 hover:-rotate-12" />
                )}
            </button>
        </div>
    )
}

export default ThemeToggleCta
