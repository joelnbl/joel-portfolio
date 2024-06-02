import React from 'react'
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const { theme, setTheme, resolvedTheme } = useTheme();

    const toggleTheme = () => {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
  return (
    <button
    className={`pushable ${resolvedTheme === 'dark' ? 'bg-customBackgroundShadow' : 'bg-customDarkBackgroundShadow'} rounded-xl border-none p-0 cursor-pointer outline-offset-4`}
    onClick={toggleTheme}
  >
    <span className={`front block px-3 py-1 border-1 text-xl rounded-xl ${resolvedTheme === 'dark' ? 'bg-customBackground' : 'bg-customDarkBackground'} text-white -translate-y-2 pushable-active:transform pushable-active:translate-y-[-2px]`}>
      {resolvedTheme === "dark" ? (
        <MoonIcon className="h-6 w-6 text-white" />
      ) : (
        <SunIcon className="h-6 w-6 text-white" />
      )}
    </span>
  </button>
  )
}
