"use client";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import PlayerCard from "@/components/PlayerCard";
import { useMplData } from "@/lib/useMplData";

export default function PlayersPage() {
  const { data, loading, error } = useMplData();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const players = data?.players ?? [];
    return players.filter(p =>
      p.ign.toLowerCase().includes(q.toLowerCase()) ||
      p.role.toLowerCase().includes(q.toLowerCase()) ||
      p.teamId.toLowerCase().includes(q.toLowerCase())
    );
  }, [data, q]);

  return (
    <main>
      <Navbar />
      <Container className="py-10">
        <div className="flex items-center justify-between gap-3">
          <SectionHeading title="Players" subtitle="Cari pemain favoritmu dan lihat rating community." />
          <ThemeToggle />
        </div>

        <div className="mb-6">
          <input
            placeholder="Cari pemain..."
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-brand-600/40"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        {loading && <p className="text-white/60">Loading data...</p>}
        {error && <p className="text-red-300">Gagal memuat data.</p>}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PlayerCard key={`${p.teamId}-${p.ign}`} p={p} />
          ))}
        </div>
      </Container>
    </main>
  );
}
