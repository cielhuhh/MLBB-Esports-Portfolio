"use client";
import Navbar from "@/components/Navbar";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useMplData } from "@/lib/useMplData";

function fmt(dateISO: string) {
  const d = new Date(dateISO);
  return d.toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short" });
}

export default function TournamentsPage() {
  const { data, loading, error } = useMplData();
  const matches = (data?.matches ?? []).slice().sort((a, b) => a.dateISO.localeCompare(b.dateISO));

  return (
    <main>
      <Navbar />
      <Container className="py-10">
        <SectionHeading title="Tournaments" subtitle="Jadwal Regular Season MPL ID S16 (ambil dari JSON)." />

        {loading && <p className="text-white/60">Loading data...</p>}
        {error && <p className="text-red-300">Gagal memuat data.</p>}

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-3">
            <thead className="text-left text-white/70">
              <tr>
                <th className="px-4">Tanggal</th>
                <th className="px-4">Stage</th>
                <th className="px-4">Match</th>
                <th className="px-4">BO</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m) => (
                <tr key={m.id}>
                  <td className="px-4 py-3 rounded-card bg-white/5 border border-white/10 backdrop-blur">
                    {fmt(m.dateISO)}
                  </td>
                  <td className="px-4 py-3 rounded-card bg-white/5 border border-white/10 backdrop-blur">
                    {m.stage}
                  </td>
                  <td className="px-4 py-3 rounded-card bg-white/5 border border-white/10 backdrop-blur">
                    {m.teamA} <span className="text-white/40">vs</span> {m.teamB}
                  </td>
                  <td className="px-4 py-3 rounded-card bg-white/5 border border-white/10 backdrop-blur">BO{m.bo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-white/50">
          Perbarui file <code>public/mpl-id-s16.json</code> tiap pekan agar jadwal tetap up to date.
        </p>
      </Container>
    </main>
  );
}
