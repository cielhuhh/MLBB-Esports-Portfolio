"use client";
import { motion } from "framer-motion";
import StarRating from "@/components/StarRating";
import type { Player } from "@/types/mpl";
import Link from "next/link";
import { useI18n } from "@/i18n/LangProvider";

export default function PlayerCard({ p }: { p: Player }) {
  const { t } = useI18n();
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-card shadow-glow bg-white/5 border border-white/10 backdrop-blur p-5"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{p.ign}</h3>
        <span className="rounded bg-white/10 px-2 py-0.5 text-xs">{p.role}</span>
      </div>
      <p className="mt-1 text-white/70 text-sm">{t("team")}: {p.teamId.toUpperCase()}</p>
      <div className="mt-3"><StarRating initial={4.5} /></div>
      <Link
        href={`/players/${encodeURIComponent(p.ign)}`}
        className="mt-4 inline-block rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5"
      >
        {t("details")}
      </Link>
    </motion.article>
  );
}
