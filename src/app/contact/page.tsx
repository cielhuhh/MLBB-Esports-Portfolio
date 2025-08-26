"use client";
import Navbar from "@/components/Navbar";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { submitContact } from "./actions";   // ✅ named import & path benar
import { useActionState } from "react";

const initialState = { ok: false, error: "" };

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <main>
      <Navbar />
      <Container className="py-10">
        <SectionHeading title="Contact" subtitle="Tinggalkan pesan untuk kolaborasi atau rekrutmen." />
        <form action={formAction} className="max-w-xl space-y-4">
          <div>
            <label className="block text-sm text-white/70 mb-1">Nama</label>
            <input name="name" required className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-brand-600/40" />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input name="email" type="email" required className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-brand-600/40" />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Pesan</label>
            <textarea name="message" required rows={5} className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-brand-600/40" />
          </div>

          <button disabled={pending} className="rounded-lg bg-brand-600 px-5 py-2.5 text-white transition hover:bg-brand-500 active:scale-[.98] disabled:opacity-60">
            {pending ? "Mengirim..." : "Kirim"}
          </button>

          {state.ok && <p className="text-green-300/80 text-sm">Terima kasih! Pesanmu sudah terkirim.</p>}
          {!state.ok && state.error && <p className="text-red-300 text-sm">{state.error}</p>}
        </form>
      </Container>
    </main>
  );
}
