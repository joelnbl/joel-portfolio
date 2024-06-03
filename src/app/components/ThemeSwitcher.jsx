import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import Button3D from "./Button3D";
import Tooltip from "./Tooltip";

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
    <Tooltip text={theme === "dark" ? "Light theme" : "Dark theme"}>
      <Button3D resolvedTheme={resolvedTheme} onClick={toggleTheme}>
        {theme === "dark" ? (
          <MoonIcon className="h-6 w-6 text-white" />
        ) : (
          <SunIcon className="h-6 w-6 text-white" />
        )}
      </Button3D>
    </Tooltip>
  );
}
