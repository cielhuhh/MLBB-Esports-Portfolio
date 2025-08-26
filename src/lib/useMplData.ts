"use client";
import { useEffect, useState } from "react";
import type { MplData } from "@/types/mpl";

export function useMplData() {
  const [data, setData] = useState<MplData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let canceled = false;

    fetch("/mpl-id-s16.json")
      .then((r) => r.json() as Promise<MplData>)
      .then((d) => {
        if (!canceled) setData(d);
      })
      .finally(() => {
        if (!canceled) setLoading(false);
      });

    return () => {
      canceled = true;
    };
  }, []);

  return { data, loading };
}
