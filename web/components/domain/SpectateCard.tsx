"use client";

import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Eye, Users } from "lucide-react";
import type { SpectateGame } from "@/data/games";

export interface SpectateCardProps {
    game: SpectateGame;
    onWatch?: (gameId: string) => void;
    className?: string;
}

export function SpectateCard({ game, onWatch, className }: SpectateCardProps) {
    const avgRating = Math.round(
        game.players.reduce((sum, p) => sum + p.rating, 0) / game.players.length
    );

    return (
        <Card variant="interactive" className={cn("p-4", className)}>
            <div className="flex items-start justify-between mb-3">
                <div>
                    <span className="text-sm font-medium text-[var(--color-primary-500)]">
                        {game.mode}
                    </span>
                    <div className="flex items-center gap-2 mt-1 text-sm text-[var(--color-text-secondary)]">
                        <span>Turn {game.turnNumber}</span>
                        <span>•</span>
                        <span>Avg. {avgRating}</span>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
                    <Eye className="w-4 h-4" />
                    {game.viewerCount}
                </div>
            </div>

            {/* Players */}
            <div className="mb-4">
                <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] mb-2">
                    <Users className="w-3 h-3" />
                    Players
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {game.players.map((player, i) => (
                        <div
                            key={i}
                            className="text-sm text-[var(--color-text-secondary)] truncate"
                        >
                            {player.username}
                            <span className="text-[var(--color-text-muted)]">
                                {" "}
                                ({player.rating})
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={() => onWatch?.(game.id)}
                leftIcon={<Eye className="w-4 h-4" />}
            >
                Watch
            </Button>
        </Card>
    );
}
