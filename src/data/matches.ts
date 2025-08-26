export type MatchItem = {
  id: string;
  dateISO: string;            // ISO string utk sort
  stage: "Regular" | "Playoffs";
  teamA: string;              // tag tim
  teamB: string;
  bo: 1 | 3 | 5 | 7;
  stream?: string;            // url jika ada
};

// Contoh data dummy; ganti sesuai jadwal minggu ini.
export const upcomingMatches: MatchItem[] = [
  { id: "m1", dateISO: "2025-08-29T13:00:00+07:00", stage: "Regular", teamA: "GFID", teamB: "TLID", bo: 3 },
  { id: "m2", dateISO: "2025-08-29T16:00:00+07:00", stage: "Regular", teamA: "BTR",  teamB: "ONIC", bo: 3 },
  { id: "m3", dateISO: "2025-08-29T19:00:00+07:00", stage: "Regular", teamA: "AE",   teamB: "RRQ",  bo: 3 },
];
