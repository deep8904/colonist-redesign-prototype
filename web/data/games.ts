// Mock Spectate Games Data
export interface SpectateGame {
    id: string;
    players: { username: string; rating: number }[];
    mode: string;
    turnNumber: number;
    viewerCount: number;
}

export const spectateGames: SpectateGame[] = [
    {
        id: "1",
        players: [
            { username: "ProPlayer1", rating: 2341 },
            { username: "ProPlayer2", rating: 2287 },
            { username: "ProPlayer3", rating: 2198 },
            { username: "ProPlayer4", rating: 2156 },
        ],
        mode: "Base Game",
        turnNumber: 34,
        viewerCount: 127,
    },
    {
        id: "2",
        players: [
            { username: "CatanMaster", rating: 1987 },
            { username: "SettlerKing", rating: 1865 },
            { username: "TradeExpert", rating: 1823 },
            { username: "RoadRunner", rating: 1798 },
        ],
        mode: "Cities & Knights",
        turnNumber: 21,
        viewerCount: 45,
    },
    {
        id: "3",
        players: [
            { username: "SeafarerPro", rating: 1756 },
            { username: "IslandHopper", rating: 1723 },
            { username: "OceanBuilder", rating: 1698 },
        ],
        mode: "Seafarers",
        turnNumber: 18,
        viewerCount: 23,
    },
];
