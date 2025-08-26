"use client";
import Navbar from "@/components/Navbar";
import { Container } from "@/components/Container";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* subtle gradient ring */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-600/25 to-brand-500/10 blur-3xl" />
        </div>

        <Container className="relative mx-auto max-w-[1100px] px-4 py-24 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-brand-50 sm:text-6xl">
              MLBB Esports — <span className="text-white/80">Portfolio</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-white/70">
              Website Sederhana. Dibangun dengan Next.js App Router & Tailwind v4.
            </p>

            <div className="mt-10 flex items-center justify-center gap-3">
              <Link
                href="/players"
                className="btn"
              >
                Explore Players
              </Link>
              <Link
                href="/teams"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-medium backdrop-blur transition hover:bg-white/10"
              >
                Browse Teams
              </Link>
            </div>
          </div>

          {/* stats strip */}
          <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Teams", "9"],
              ["Players", "50+"],
              ["Season", "MPL ID S16"],
              ["Charts", "Live UI"],
            ].map(([k, v]) => (
              <div key={k} className="card hover-glow px-4 py-3 text-center">
                <div className="text-2xl font-semibold">{v}</div>
                <div className="mt-1 text-xs text-white/60">{k}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Divider glow */}
      <div className="mx-auto my-12 h-px max-w-[1100px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Footer mini */}
      <footer className="px-4 py-10">
        <div className="mx-auto max-w-[1100px] text-center text-sm text-white/60">
          © {new Date().getFullYear()} MLBB Esports Portfolio — Dibuat untuk showcase.
        </div>
      </footer>
    </main>
  );
}
