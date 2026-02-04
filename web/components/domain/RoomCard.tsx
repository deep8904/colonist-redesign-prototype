"use client";

import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { Users, Clock, Lock } from "lucide-react";
import type { Room } from "@/data/rooms";

export interface RoomCardProps {
    room: Room;
    onJoin?: (roomId: string) => void;
    className?: string;
}

const modeLabels = {
    base: "Base Game",
    "cities-knights": "Cities & Knights",
    seafarers: "Seafarers",
};

export function RoomCard({ room, onJoin, className }: RoomCardProps) {
    const isFull = room.currentPlayers >= room.maxPlayers;

    return (
        <Card
            variant="interactive"
            className={cn("flex flex-col sm:flex-row sm:items-center gap-4", className)}
        >
            <div className="flex-1 min-w-0">
                {/* Mode and settings */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Chip variant="selected">{modeLabels[room.mode]}</Chip>
                    <Chip>{room.map}</Chip>
                    <Chip>
                        <Clock className="w-3 h-3" />
                        {room.timer}s
                    </Chip>
                    {room.isPrivate && (
                        <Chip>
                            <Lock className="w-3 h-3" />
                            Private
                        </Chip>
                    )}
                </div>

                {/* Players and host */}
                <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)]">
                    <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span className={cn(isFull && "text-[var(--color-error-500)]")}>
                            {room.currentPlayers}/{room.maxPlayers} players
                        </span>
                    </span>
                    <span>Host: {room.host.username}</span>
                </div>
            </div>

            {/* Join button */}
            <div className="flex-shrink-0">
                <Button
                    variant={isFull ? "secondary" : "primary"}
                    size="md"
                    disabled={isFull}
                    onClick={() => onJoin?.(room.id)}
                >
                    {isFull ? "Full" : "Join"}
                </Button>
            </div>
        </Card>
    );
}
