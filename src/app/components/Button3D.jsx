import React from "react";

export default function Button3D({
  children,
  resolvedTheme = "light",
  onClick,
}) {
  return (
    <button
      className={`pushable ${
        resolvedTheme === "dark"
          ? "bg-customBackgroundShadow"
          : "bg-customDarkBackgroundShadow"
      } rounded-xl border-none p-0 cursor-pointer outline-offset-4`}
      onClick={onClick}
    >
      <span
        className={`front block px-3 py-1 border-1 text-xl rounded-xl ${
          resolvedTheme === "dark"
            ? "bg-customBackground"
            : "bg-customDarkBackground"
        } text-white -translate-y-2 pushable-active:transform pushable-active:translate-y-[-2px]`}
      >
        {children}
      </span>
    </button>
  );
}
