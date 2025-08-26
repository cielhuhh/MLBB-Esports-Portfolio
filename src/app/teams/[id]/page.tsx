"use client";
import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Container } from "@/components/Container";
import { useMplData } from "@/lib/useMplData";
import { useI18n } from "@/i18n/LangProvider";
import Image from "next/image";
import Link from "next/link";

// ✅ import grafik
import TeamStatsChart from "@/components/TeamStatsChart";
import type { TeamId } from "@/types/mpl";

export default function TeamDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { data, loading } = useMplData();
  const { t } = useI18n();

  const team = useMemo(() => (data?.teams ?? []).find(t => t.id === id), [data, id]);
  const roster = useMemo(() => (data?.players ?? []).filter(p => p.teamId === id), [data, id]);

  // ✅ ambil statistik tim dari JSON
  const stats = (data?.teamStats ?? {})[id as TeamId];

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
        {!loading && !team && <p className="text-red-300">Tim tidak ditemukan.</p>}

        {team && (
          <>
            <section className="rounded-card shadow-glow bg-white/5 border border-white/10 backdrop-blur p-6">
              <div className="flex items-center gap-4">
                {team.logo && (
                  <Image
                    src={team.logo}
                    alt={team.name}
                    width={72}
                    height={72}
                    className="rounded-md border border-white/10 bg-white/5"
                  />
                )}
                <div>
                  <h1 className="text-3xl font-semibold">{team.name}</h1>
                  <p className="text-white/70">Tag: {team.tag} · Region: ID</p>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">{t("roster")}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {roster.map((p) => (
                  <article
                    key={p.ign}
                    className="rounded-card shadow-glow bg-white/5 border border-white/10 backdrop-blur p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{p.ign}</h3>
                      <span className="rounded bg-white/10 px-2 py-0.5 text-xs">{p.role}</span>
                    </div>
                    <Link
                      href={`/players/${encodeURIComponent(p.ign)}`}
                      className="mt-3 inline-block rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5"
                    >
                      {t("details")}
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* ✅ render statistik tim */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Team Statistics</h2>
              <TeamStatsChart stats={stats} />
            </section>
          </>
        )}
      </Container>
    </main>
  );
}
