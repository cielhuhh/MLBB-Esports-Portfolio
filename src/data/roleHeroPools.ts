import type { Role } from "@/types/mpl";

/**
 * Pool default per role (Season 16 meta – disederhanakan agar konsisten).
 * Kamu bisa ubah/urutkan sesuai preferensi.
 */
export const ROLE_HERO_POOLS: Record<Role, string[]> = {
  Gold: [
    "Beatrix", "Brody", "Claude", "Bruno", "Karrie",
    "Wanwan", "Natan", "Moskov", "Irithel"
  ],
  Mid: [
    "Valentina", "Novaria", "Yve", "Lunox", "Pharsa",
    "Xavier", "Kagura", "Faramis", "Cecilion"
  ],
  Jungle: [
    "Ling", "Lancelot", "Hayabusa", "Nolan", "Fredrinn",
    "Roger", "Benedetta", "Alpha", "Akai"
  ],
  Exp: [
    "Paquito", "Yu Zhong", "Arlott", "Terizla", "X.Borg",
    "Esmeralda", "Lapu-Lapu", "Uranus", "Aldous"
  ],
  Roam: [
    "Chou", "Lolita", "Khufra", "Atlas", "Minotaur",
    "Tigreal", "Mathilda", "Grock", "Angela"
  ],
};
