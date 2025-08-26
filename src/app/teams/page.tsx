"use client";
import Navbar from "@/components/Navbar";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";
import { useMplData } from "@/lib/useMplData";

export default function TeamsPage() {
  const { data, loading, error } = useMplData();

  return (
    <main>
      <Navbar />
      <Container className="py-10">
        <SectionHeading title="Teams" subtitle="Daftar tim MPL ID S16." />

        {loading && <p className="text-white/60">Loading data...</p>}
        {error && <p className="text-red-300">Gagal memuat data.</p>}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(data?.teams ?? []).map((t) => (
            <article key={t.id} className="rounded-card shadow-glow bg-white/5 border border-white/10 backdrop-blur p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <Badge>MPL</Badge>
              </div>
              <p className="mt-2 text-white/70 text-sm">Tag: {t.tag} · Region: ID</p>
              <a
                href={`/teams/${t.id}`}
                className="mt-4 inline-block rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5"
              >
                Detail
              </a>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
