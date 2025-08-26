export type Player = {
  id: string;
  ign: string;
  role: "Gold" | "Exp" | "Jungle" | "Mid" | "Roam";
  teamId: "ae" | "btr" | "dewa" | "evos" | "geek" | "navi" | "onic" | "rrq" | "tlid";
  rating: number; // 1..5 (dummy untuk UI)
  avatar?: string;
};

// SAMPLE roster ringkas (silakan tambah/lengkapi sesuai update resmi)
export const players: Player[] = [
  // ONIC
  { id: "kairi", ign: "Kairi", role: "Jungle", teamId: "onic", rating: 4.9 },
  { id: "sanz",  ign: "Sanz",  role: "Mid",    teamId: "onic", rating: 4.7 },
  // RRQ
  { id: "albert", ign: "Albert", role: "Jungle", teamId: "rrq",  rating: 4.7 },
  { id: "lemon",  ign: "Lemon",  role: "Mid",    teamId: "rrq",  rating: 4.6 },
  // EVOS
  { id: "xorizo", ign: "Xorizo", role: "Exp",    teamId: "evos", rating: 4.5 },
  // GEEK
  { id: "godsiva", ign: "GodSiva", role: "Roam", teamId: "geek", rating: 4.4 },
  // AE
  { id: "nino", ign: "Nino", role: "Exp", teamId: "ae", rating: 4.6 },
  { id: "hijumee", ign: "Hijumee", role: "Mid", teamId: "ae", rating: 4.5 },
  // NAVI (ID div)
  { id: "karss", ign: "Karss", role: "Exp", teamId: "navi", rating: 4.3 },
  // DEWA
  { id: "kabuki", ign: "Kabuki", role: "Gold", teamId: "dewa", rating: 4.5 },
  // BTR
  { id: "shogun", ign: "Shogun", role: "Exp", teamId: "btr", rating: 4.2 },
  // TLID
  { id: "maxxx", ign: "Maxxx", role: "Jungle", teamId: "tlid", rating: 4.2 },
];
