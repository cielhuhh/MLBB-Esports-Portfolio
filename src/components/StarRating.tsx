"use client";
import { useState } from "react";

export default function StarRating({ initial = 0, onChange }: { initial?: number; onChange?: (v:number)=>void }) {
  const [value, setValue] = useState(initial);
  return (
    <div className="inline-flex gap-1">
      {[1,2,3,4,5].map(n => (
        <button
          key={n}
          aria-label={`set rating ${n}`}
          onClick={() => { setValue(n); onChange?.(n); }}
          className={`h-4 w-4 rounded-[2px] ${n <= Math.round(value) ? "bg-yellow-400" : "bg-white/20"}`}
        />
      ))}
    </div>
  );
}
