"use client";
import { useI18n } from "@/i18n/LangProvider";

export default function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <select
      aria-label="Language"
      value={lang}
      onChange={(e) => setLang(e.target.value as any)}
      className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-sm"
    >
      <option value="id">ID</option>
      <option value="en">EN</option>
    </select>
  );
}
