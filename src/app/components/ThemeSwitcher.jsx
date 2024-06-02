import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import Button3D from "./Button3D";

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
    <Button3D resolvedTheme={resolvedTheme} onClick={toggleTheme}>
      {resolvedTheme === "dark" ? (
        <MoonIcon className="h-6 w-6 text-white" />
      ) : (
        <SunIcon className="h-6 w-6 text-white" />
      )}
    </Button3D>
  );
}
