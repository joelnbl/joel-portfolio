import React from "react";

export default function Tooltip({ children, text }) {
  return (
      <div class="group relative flex justify-center">
        <a class="px-4 py-2 text-sm">{children}</a>
        <span class="mt-2 absolute top-10 scale-0 rounded bg-gray-800 dark:bg-white p-1 text-xs text-white dark:text-black group-hover:scale-100">
          {text}
        </span>
      </div>
  );
}
