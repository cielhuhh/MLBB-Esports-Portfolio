"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import type { TeamStats } from "@/types/mpl";

export default function TeamStatsChart({ stats }: { stats?: TeamStats }) {
  if (!stats) return null;

  const wl = [
    { name: "Wins", value: stats.wins },
    { name: "Losses", value: stats.losses },
  ];

  // Normalisasi agar radar enak dilihat (skala 0..100)
  const radar = [
    { metric: "KDA", score: Math.min(100, stats.kdaAvg * 20) },     // kda 5 → 100
    { metric: "GPM", score: Math.min(100, (stats.gpmAvg / 700) * 100) }, // gpm 700 → 100
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-card shadow-glow bg-white/5 border border-white/10 backdrop-blur p-4">
        <h3 className="mb-3 font-semibold">Wins / Losses</h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={wl}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-card shadow-glow bg-white/5 border border-white/10 backdrop-blur p-4">
        <h3 className="mb-3 font-semibold">KDA & GPM (normalized)</h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radar}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <Radar dataKey="score" />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
