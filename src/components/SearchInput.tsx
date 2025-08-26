"use client";
import type { ChangeEvent } from "react";

export default function SearchInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-brand-600/40"
    />
  );
}
