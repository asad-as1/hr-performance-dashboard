"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null); // null initially to avoid mismatch

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  if (darkMode === null) return null; // Prevent hydration mismatch

  return (
    <header className="flex justify-between p-4 border-b">
      <h1 className="text-xl font-bold">HR Performance Dashboard</h1>
      <button
        onClick={toggleTheme}
        className="text-sm px-2 py-1 border rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
