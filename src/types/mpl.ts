export type TeamId = "ae" | "btr" | "dewa" | "evos" | "geek" | "navi" | "onic" | "rrq" | "tlid";
export type Role = "Gold" | "Exp" | "Jungle" | "Mid" | "Roam";

export type Team = { id: TeamId; name: string; tag: string; logo?: string };
export type Player = { ign: string; role: Role; teamId: TeamId; avatar?: string };

export type TeamStats = {
  matches: number;
  wins: number;
  losses: number;
  kdaAvg: number;
  gpmAvg: number;
};

export type MatchItem = {
  id: string;
  dateISO: string;
  stage: "Regular" | "Playoffs";
  teamA: string;
  teamB: string;
  bo: 1 | 3 | 5 | 7;
};

export type PlayerRecent = { match: string; kda: number; gpm: number };
export type PlayerHero = { hero: string; picks: number; winrate: number };
export type PlayerStats = { recent?: PlayerRecent[]; heroes?: PlayerHero[] };

export type MplData = {
  season: string;
  updatedAt: string;
  teams: Team[];
  players: Player[];
  matches?: MatchItem[];
  teamStats?: Record<TeamId, TeamStats>;
  /** player stats override by IGN */
  playerStats?: Record<string, PlayerStats>;
};
