// Mock Player Data
export interface Player {
    id: string;
    username: string;
    rating: number;
    division: "bronze" | "silver" | "gold" | "platinum" | "diamond";
    divisionTier: 1 | 2 | 3;
    isOnline: boolean;
    status: "online" | "in-game" | "offline";
}

export const friends: Player[] = [
    {
        id: "1",
        username: "AlexTheSettler",
        rating: 1456,
        division: "gold",
        divisionTier: 2,
        isOnline: true,
        status: "online",
    },
    {
        id: "2",
        username: "CatanChamp2024",
        rating: 1823,
        division: "platinum",
        divisionTier: 1,
        isOnline: true,
        status: "in-game",
    },
    {
        id: "3",
        username: "WoodForSheep",
        rating: 1289,
        division: "silver",
        divisionTier: 3,
        isOnline: false,
        status: "offline",
    },
    {
        id: "4",
        username: "RoadBuilder",
        rating: 1567,
        division: "gold",
        divisionTier: 1,
        isOnline: true,
        status: "online",
    },
];
