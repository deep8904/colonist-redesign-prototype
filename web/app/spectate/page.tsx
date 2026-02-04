"use client";

import { SpectateCard } from "@/components/domain/SpectateCard";
import { Chip } from "@/components/ui/Chip";
import { spectateGames } from "@/data/games";
import { Eye, Users } from "lucide-react";
import { useState } from "react";

export default function SpectatePage() {
    const [selectedMode, setSelectedMode] = useState<string>("all");

    const filteredGames =
        selectedMode === "all"
            ? spectateGames
            : spectateGames.filter(
                (game) =>
                    game.mode.toLowerCase().replace(/\s+/g, "-") ===
                    selectedMode.toLowerCase()
            );

    return (
        <div className="container py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-3">
                    <Eye className="w-8 h-8 text-[var(--color-info-500)]" />
                    Spectate Games
                </h1>
                <p className="text-[var(--color-text-secondary)]">
                    Watch live games and learn from the pros
                </p>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-6 mb-8 text-sm text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>
                        {spectateGames.reduce((sum, g) => sum + g.viewerCount, 0)} watching
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{spectateGames.length} live games</span>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {["all", "Base Game", "Cities & Knights", "Seafarers"].map((mode) => (
                    <Chip
                        key={mode}
                        variant={
                            (selectedMode === "all" && mode === "all") ||
                                selectedMode === mode
                                ? "selected"
                                : "default"
                        }
                        onClick={() => setSelectedMode(mode)}
                    >
                        {mode === "all" ? "All Modes" : mode}
                    </Chip>
                ))}
            </div>

            {/* Games Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGames.map((game) => (
                    <SpectateCard
                        key={game.id}
                        game={game}
                        onWatch={(id) => {
                            alert(`Watching game ${id} (demo only)`);
                        }}
                    />
                ))}
            </div>

            {filteredGames.length === 0 && (
                <div className="text-center py-12 text-[var(--color-text-muted)]">
                    <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No games found for this mode</p>
                </div>
            )}
        </div>
    );
}
