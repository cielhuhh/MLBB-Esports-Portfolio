"use client";
import { useI18n } from "@/i18n/LangProvider";
import type { Lang } from "@/i18n/dictionaries";

export default function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <select
      aria-label="Language"
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
      className="rounded-xl border border-white/15 bg-white/5 px-2.5 py-1 text-xs leading-none outline-none hover:bg-white/10"
    >
      <option value="id">ID</option>
      <option value="en">EN</option>
    </select>
  );
}
