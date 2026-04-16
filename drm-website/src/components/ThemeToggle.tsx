"use client";

import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newDark = !prev;
      if (newDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newDark;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-surface border border-surface-border text-foreground hover:bg-surface-border transition-colors flex items-center justify-center shadow-sm"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
           {/* Sun Icon */}
           <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 3.78a1 1 0 011.415 0l.708.707a1 1 0 01-1.414 1.414l-.708-.707a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-3.78 4.22a1 1 0 010 1.415l-.707.708a1 1 0 01-1.414-1.414l.707-.708a1 1 0 011.414 0zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zm-4.22-3.78a1 1 0 01-1.415 0l-.708-.707a1 1 0 011.414-1.414l.708.707a1 1 0 010 1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm3.78-4.22a1 1 0 010-1.415l.707-.708a1 1 0 011.414 1.414l-.707.708a1 1 0 01-1.414 0zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
           {/* Moon Icon */}
           <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}
