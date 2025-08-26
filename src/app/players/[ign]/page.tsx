"use client";
import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Container } from "@/components/Container";
import { useMplData } from "@/lib/useMplData";
import { useI18n } from "@/i18n/LangProvider";
import Image from "next/image";
import type { MplData, PlayerHero, PlayerRecent, PlayerStats } from "@/types/mpl";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, Radar,
} from "recharts";
import { ROLE_HERO_POOLS } from "@/data/roleHeroPools";

function hashStr(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}
function buildFallbackRecent(ign: string): PlayerRecent[] {
  const base = hashStr(ign) % 7;
  return Array.from({ length: 8 }).map((_, i) => ({
    match: `M${i + 1}`,
    kda: Number(((base + 2 + (i % 3)) / 2 + (i % 2 ? 0.6 : 0.2)).toFixed(2)),
    gpm: 520 + ((base * 37 + i * 23) % 160),
  }));
}
function buildRoleHeroes(role: string, seedName: string): PlayerHero[] {
  const base = ROLE_HERO_POOLS[role as keyof typeof ROLE_HERO_POOLS] ?? [];
  const seed = hashStr(seedName);
  return base.slice(0, 5).map((hero, i) => ({
    hero,
    picks: 2 + ((seed >> (i * 3)) % 5),
    winrate: 50 + ((seed >> (i * 5)) % 25),
  }));
}

export default function PlayerDetailPage() {
  const { ign } = useParams<{ ign: string }>();
  const router = useRouter();
  const { data, loading } = useMplData();
  const { t } = useI18n();

  const player = useMemo(() => {
    const list = data?.players ?? [];
    return list.find((p) => p.ign.toLowerCase() === decodeURIComponent(ign).toLowerCase());
  }, [data, ign]);

  const team = useMemo(() => {
    if (!player) return null;
    return data?.teams.find((t) => t.id === player.teamId) ?? null;
  }, [data, player]);

  const playerStats: PlayerStats | undefined = useMemo(() => {
    if (!data || !player) return undefined;
    const typed = data as MplData;
    return typed.playerStats?.[player.ign];
  }, [data, player]);

  const recent: PlayerRecent[] = playerStats?.recent ?? (player ? buildFallbackRecent(player.ign) : []);
  const heroes: PlayerHero[] =
    playerStats?.heroes?.map((h) => ({
      hero: h.hero,
      picks: Number(h.picks ?? 3),
      winrate: Number(h.winrate ?? 60),
    })) ??
    (player ? buildRoleHeroes(player.role, player.ign) : []);

  return (
    <main>
      <Navbar />
      <Container className="py-10">
        <button
          onClick={() => router.back()}
          className="mb-6 rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5"
        >
          ← {t("back")}
        </button>

        {loading && <p className="text-white/60">Loading...</p>}
        {!loading && !player && <p className="text-red-300">Player tidak ditemukan.</p>}

        {player && (
          <section className="card p-6 hover-glow">
            <div className="flex items-center gap-4">
              {team?.logo && (
                <Image
                  src={team.logo}
                  alt={team.name}
                  width={56}
                  height={56}
                  className="rounded-md border border-white/10 bg-white/5"
                />
              )}
              <div>
                <h1 className="text-2xl font-semibold">{player.ign}</h1>
                <p className="text-white/70">
                  {t("role")}: {player.role} · {t("team")}: {team?.tag ?? player.teamId.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="card p-4">
                <h3 className="mb-3 font-semibold">Recent KDA</h3>
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={recent}>
                      <XAxis dataKey="match" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="kda" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="mb-3 font-semibold">Recent GPM</h3>
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={recent}>
                      <XAxis dataKey="match" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="gpm" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="md:col-span-2 card p-4">
                <h3 className="mb-3 font-semibold">Hero Pool (Winrate)</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={heroes.map((h) => ({ metric: h.hero, score: h.winrate }))}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="metric" />
                      <Radar dataKey="score" />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <a
              href={`/teams/${player.teamId}`}
              className="mt-6 inline-block rounded-md border border-white/15 bg-white/5 px-4 py-3 hover:bg-white/10"
            >
              {t("details")} {t("teams")} → {team?.name ?? player.teamId.toUpperCase()}
            </a>
          </section>
        )}
      </Container>
    </main>
  );
}
