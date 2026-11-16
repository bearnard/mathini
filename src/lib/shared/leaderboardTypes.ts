// The contract of the leaderboard endpoints (docs/notes/leaderboard.md). NO field here is an id, a real name, accuracy or a count of right answers:
// a board shows a nickname, an avatar, weekly points and a rank, nothing more. Area boards hold schools only, never a child.

export interface BoardEntry { rank: number; nickname: string; avatar: string; points: number; isMe: boolean }

/** A class or school board. `entries` are the learners with points this week (best first, at most `shown`) plus the learner's own row if it is not among them. */
export interface PeopleBoard {
  name: string;
  /** Monday 00:00 SAST of the week shown, epoch ms. */
  weekStart: number;
  entries: BoardEntry[];
  /** Learners in the class or school. */
  size: number;
  /** The learner's own place; null while they have no points this week. */
  myRank: number | null;
  myPoints: number;
}

export interface AreaSchoolRow { rank: number; name: string; activeLearners: number; score: number; isMine: boolean }
export interface AreaBoard {
  level: 'district' | 'province';
  /** The district or province name. */
  area: string;
  weekStart: number;
  schools: AreaSchoolRow[];
  /** The learner's own school: its place, or why it is not ranked yet. */
  mine: { name: string; activeLearners: number; score: number | null; rank: number | null; minActive: number };
}
/** A district board is `{ available: false }` when the school has no district set. */
export type AreaResponse = { available: true; board: AreaBoard } | { available: false; reason: 'no-district' | 'no-school' };

export interface PersonalBests { weekPoints: number; bestWeekPoints: number; streakDays: number }

export interface LeaderboardOverview {
  weekStart: number;
  /** Week ends (exclusive), epoch ms. */
  weekEnd: number;
  classes: { id: string; name: string }[];
  schools: { id: string; name: string; hasDistrict: boolean; hasProvince: boolean }[];
  personal: PersonalBests;
}
