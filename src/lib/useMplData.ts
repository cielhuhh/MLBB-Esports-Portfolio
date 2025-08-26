"use client";
import { useEffect, useState } from "react";
import type { MplData } from "@/types/mpl";

export function useMplData() {
  const [data, setData] = useState<MplData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let canceled = false;

    (async () => {
      try {
        const res = await fetch("/mpl-id-s16.json");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as MplData;
        if (!canceled) setData(json);
      } catch (e) {
        if (!canceled) setError(e instanceof Error ? e.message : "Failed to load data");
      } finally {
        if (!canceled) setLoading(false);
      }
    })();

    return () => {
      canceled = true;
    };
  }, []);

  return { data, loading, error };
}
