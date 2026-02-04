// Mock User Data
export interface User {
    id: string;
    username: string;
    rating: number;
    division: "bronze" | "silver" | "gold" | "platinum" | "diamond";
    divisionTier: 1 | 2 | 3;
    seasonProgress: number; // 0-100
    gamesPlayed: number;
    wins: number;
}

export const currentUser: User = {
    id: "current",
    username: "You",
    rating: 1247,
    division: "gold",
    divisionTier: 3,
    seasonProgress: 67,
    gamesPlayed: 142,
    wins: 71,
};

export interface RecentGame {
    id: string;
    result: "win" | "loss" | "2nd" | "3rd";
    mode: string;
    date: string;
    ratingChange: number;
}

export const recentGames: RecentGame[] = [
    { id: "1", result: "win", mode: "Base Game", date: "Today", ratingChange: 15 },
    { id: "2", result: "2nd", mode: "Ranked", date: "Today", ratingChange: -8 },
    { id: "3", result: "win", mode: "Base Game", date: "Yesterday", ratingChange: 12 },
    { id: "4", result: "loss", mode: "Cities & Knights", date: "Yesterday", ratingChange: -10 },
];
