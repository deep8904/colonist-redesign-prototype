// Mock Room Data
export interface Room {
    id: string;
    code: string;
    host: { username: string; rating: number };
    mode: "base" | "cities-knights" | "seafarers";
    map: string;
    timer: number;
    currentPlayers: number;
    maxPlayers: number;
    isPrivate: boolean;
}

export const rooms: Room[] = [
    {
        id: "1",
        code: "ABC123",
        host: { username: "SettlerPro", rating: 1543 },
        mode: "base",
        map: "Standard",
        timer: 60,
        currentPlayers: 3,
        maxPlayers: 4,
        isPrivate: false,
    },
    {
        id: "2",
        code: "DEF456",
        host: { username: "CatanKing", rating: 1892 },
        mode: "base",
        map: "Balanced",
        timer: 90,
        currentPlayers: 2,
        maxPlayers: 4,
        isPrivate: false,
    },
    {
        id: "3",
        code: "GHI789",
        host: { username: "BoardGamer99", rating: 1205 },
        mode: "cities-knights",
        map: "Standard",
        timer: 120,
        currentPlayers: 4,
        maxPlayers: 6,
        isPrivate: false,
    },
    {
        id: "4",
        code: "JKL012",
        host: { username: "TradeQueen", rating: 1678 },
        mode: "seafarers",
        map: "Islands",
        timer: 90,
        currentPlayers: 2,
        maxPlayers: 4,
        isPrivate: true,
    },
    {
        id: "5",
        code: "MNO345",
        host: { username: "NewPlayer42", rating: 1100 },
        mode: "base",
        map: "River",
        timer: 60,
        currentPlayers: 1,
        maxPlayers: 4,
        isPrivate: false,
    },
    {
        id: "6",
        code: "PQR678",
        host: { username: "StrategyMaster", rating: 2104 },
        mode: "cities-knights",
        map: "Balanced",
        timer: 120,
        currentPlayers: 3,
        maxPlayers: 4,
        isPrivate: false,
    },
];

export type GameMode = "base" | "cities-knights" | "seafarers";

export const gameModes = [
    { id: "base", name: "Base Game", description: "Classic Settlers of Catan", requiresMembership: false },
    { id: "cities-knights", name: "Cities & Knights", description: "Advanced expansion with knights", requiresMembership: true },
    { id: "seafarers", name: "Seafarers", description: "Explore the seas", requiresMembership: true },
] as const;

export const maps = [
    { id: "standard", name: "Standard", players: "3-4" },
    { id: "balanced", name: "Balanced", players: "3-4" },
    { id: "river", name: "River", players: "3-4" },
    { id: "desert", name: "Desert", players: "3-4" },
    { id: "islands", name: "Islands", players: "3-6" },
] as const;
