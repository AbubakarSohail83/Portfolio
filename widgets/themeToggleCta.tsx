'use client'

import { useTheme } from 'next-themes'
import { GoSun, GoMoon } from "react-icons/go"

import clsx from 'clsx'

const ThemeToggleCta = ({ className }: { className?: string }) => {
    const { theme, setTheme } = useTheme()

    return (
        <div id="home" className={clsx('z-50', className)} title={`Switch to ${theme == 'dark' ? 'light' : 'dark'} mode`}>
            {theme == 'dark' ? (
                <button onClick={() => setTheme('light')}>
                    <GoSun className="size-7 fill-dark-day cursor-pointer" />
                </button>
            ) : (
                <button onClick={() => setTheme('dark')}>
                    <GoMoon className="size-7 fill-dark-night cursor-pointer" />
                </button>
            )}
        </div>
    )
}

export default ThemeToggleCta