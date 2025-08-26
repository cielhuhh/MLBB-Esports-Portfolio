"use client";
import { useEffect, useMemo, useState } from "react";

export function SearchInput({ onChange, placeholder = "Cari pemain..." }: { onChange: (q: string) => void; placeholder?: string }) {
  const [value, setValue] = useState("");
  const debounced = useMemo(() => {
    let t: any;
    return (v: string) => { clearTimeout(t); t = setTimeout(() => onChange(v), 300); };
  }, [onChange]);
  useEffect(() => { debounced(value); }, [value, debounced]);
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-brand-600/40"
    />
  );
}
