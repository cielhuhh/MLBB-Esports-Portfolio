"use client";
import Link from "next/link";
import { useState } from "react";
import LangSwitch from "@/i18n/LangSwitch";
import { useI18n } from "@/i18n/LangProvider";
import clsx from "clsx";

/**
 * Ubah ke "left" kalau ingin tombol bahasa di kiri (setelah logo).
 * Opsi: "right" | "left"
 */
const LANG_POS: "right" | "left" = "right";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const Links = () => (
    <>
      <li>
        <Link href="/teams" className="relative pb-1 text-white/85 hover:text-white">
          {t("teams")}
          <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-brand-600 transition-transform duration-200 hover:scale-x-100" />
        </Link>
      </li>
      <li>
        <Link href="/players" className="relative pb-1 text-white/85 hover:text-white">
          {t("players")}
          <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-brand-600 transition-transform duration-200 hover:scale-x-100" />
        </Link>
      </li>
      <li>
        <Link href="/tournaments" className="relative pb-1 text-white/85 hover:text-white">
          {t("tournaments")}
          <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-brand-600 transition-transform duration-200 hover:scale-x-100" />
        </Link>
      </li>
      <li>
        <Link href="/contact" className="relative pb-1 text-white/85 hover:text-white">
          {t("contact")}
          <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-brand-600 transition-transform duration-200 hover:scale-x-100" />
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between rounded-b-2xl border border-white/10 bg-white/5 px-4 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,.25)]">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold text-brand-50">
            MLBB<span className="text-brand-500">Esports</span>
          </Link>

          {/* LangSwitch di kiri (desktop) */}
          {LANG_POS === "left" && (
            <div className="hidden md:block">
              <LangSwitch />
            </div>
          )}
        </div>

        {/* Links (desktop) */}
        <ul className="hidden items-center gap-6 md:flex">
          <Links />
        </ul>

        {/* Right controls */}
        <div className={clsx("flex items-center gap-3", LANG_POS === "right" ? "" : "md:ml-auto")}>
          {/* LangSwitch di kanan (desktop) */}
          {LANG_POS === "right" && (
            <div className="hidden md:block">
              <LangSwitch />
            </div>
          )}
          {/* burger */}
          <button
            className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm ring-1 ring-white/15 md:hidden"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="nav-links"
          >
            Menu
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          id="nav-links"
          className={clsx(
            "absolute left-0 right-0 top-16 hidden flex-col gap-3 border-b border-white/10 bg-black/70 p-4 backdrop-blur md:hidden",
            open && "flex"
          )}
        >
          {/* Lang switch di mobile selalu di atas agar mudah dijangkau */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/60">Language</span>
            <LangSwitch />
          </div>
          <ul className="mt-2 flex flex-col gap-2">
            <Links />
          </ul>
        </div>
      </nav>
    </header>
  );
}
