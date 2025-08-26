"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme-dark");
    const enabled =
      saved === "true" ||
      (saved === null && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", enabled);
    setDark(enabled);
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme-dark", String(next));
    setDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />} {dark ? "Light" : "Dark"}
    </button>
  );
}
