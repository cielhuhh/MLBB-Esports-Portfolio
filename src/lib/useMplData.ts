"use client";

import { useEffect, useState } from "react";
import type { MplData } from "@/types/mpl";

export function useMplData() {
  const [data, setData] = useState<MplData | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/mpl-id-s16.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as MplData;
        if (alive) setData(json);
      } catch (e: any) {
        if (alive) setErr(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  return { data, loading, error: err };
}
