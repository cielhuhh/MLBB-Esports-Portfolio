export type Team = {
  id: "ae" | "btr" | "dewa" | "evos" | "geek" | "navi" | "onic" | "rrq" | "tlid";
  name: string;
  tag: string;
  region: "ID";
  tier: "MPL";
  founded?: number;
  logo?: string;
};

export const teams: Team[] = [
  { id: "ae",   name: "Alter Ego",            tag: "AE",   region: "ID", tier: "MPL", founded: 2018 },
  { id: "btr",  name: "Bigetron by Vitality", tag: "BTR",  region: "ID", tier: "MPL", founded: 2011 },
  { id: "dewa", name: "Dewa United Esports",  tag: "DEWA", region: "ID", tier: "MPL", founded: 2021 },
  { id: "evos", name: "EVOS",                 tag: "EVOS", region: "ID", tier: "MPL", founded: 2016 },
  { id: "geek", name: "Geek Fam ID",          tag: "GEEK", region: "ID", tier: "MPL", founded: 2016 },
  { id: "navi", name: "Natus Vincere",        tag: "NAVI", region: "ID", tier: "MPL", founded: 2009 },
  { id: "onic", name: "ONIC Esports",         tag: "ONIC", region: "ID", tier: "MPL", founded: 2018 },
  { id: "rrq",  name: "RRQ Hoshi",            tag: "RRQ",  region: "ID", tier: "MPL", founded: 2013 },
  { id: "tlid", name: "Team Liquid ID",       tag: "TLID", region: "ID", tier: "MPL", founded: 2000 },
];
