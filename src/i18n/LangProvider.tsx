"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { dict, type Lang } from "./dictionaries";

type Ctx = { lang: Lang; t: (k: string) => string; setLang: (l: Lang) => void };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang | null) ?? "id";
    setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (k: string) => dict[lang][k] ?? k;

  return <LangCtx.Provider value={{ lang, t, setLang }}>{children}</LangCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useI18n must be used inside <LangProvider>");
  return ctx;
}
