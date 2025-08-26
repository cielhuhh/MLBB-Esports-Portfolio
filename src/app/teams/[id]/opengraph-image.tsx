import { ImageResponse } from "next/og";
import { headers } from "next/headers";
import type { MplData } from "@/types/mpl";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function Image({ params }: { params: { id: string } }) {
  const h = await headers();            // ✅ await
  const host = h.get("host")!;
  const protocol = process.env.VERCEL ? "https" : "http";
  const base = `${protocol}://${host}`;

  const res  = await fetch(`${base}/mpl-id-s16.json`, { cache: "no-store" });
  const data = (await res.json()) as MplData;

  const team = data.teams.find((t) => t.id === params.id);
  const title = team ? `${team.name} (${team.tag})` : "Team";
  const logo = team?.logo ? `${base}${team.logo}` : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 56,
          color: "#e6eefc",
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(120deg, #0a0f1c, #0b1630)",
          padding: "40px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 32, opacity: 0.8, marginBottom: 8 }}>MPL ID S16</div>
          <div style={{ fontWeight: 700 }}>{title}</div>
        </div>
        {logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            width={170}
            height={170}
            alt="Team Logo"
            style={{ borderRadius: 16, background: "rgba(255,255,255,.06)", padding: 12 }}
          />
        )}
      </div>
    ),
    size
  );
}
