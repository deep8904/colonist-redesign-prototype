"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { RoomCard, FilterBar } from "@/components/domain";
import { rooms, type GameMode } from "@/data/rooms";
import { Plus, Search } from "lucide-react";

export default function RoomsPage() {
    const [selectedMode, setSelectedMode] = useState<GameMode | "all">("all");

    const filteredRooms = useMemo(() => {
        if (selectedMode === "all") return rooms;
        return rooms.filter((room) => room.mode === selectedMode);
    }, [selectedMode]);

    return (
        <div className="container py-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold mb-1">Join a Room</h1>
                    <p className="text-[var(--color-text-secondary)]">
                        Find a game to join
                    </p>
                </div>
                <Link href="/rooms/create">
                    <Button leftIcon={<Plus className="w-4 h-4" />}>Create Room</Button>
                </Link>
            </div>

            {/* Filters */}
            <FilterBar
                selectedMode={selectedMode}
                onModeChange={setSelectedMode}
                className="mb-6"
            />

            {/* Room List */}
            {filteredRooms.length > 0 ? (
                <div className="space-y-4">
                    {filteredRooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            room={room}
                            onJoin={(id) => {
                                // Navigate to room
                                window.location.href = `/rooms/${id}`;
                            }}
                        />
                    ))}
                </div>
            ) : (
                <EmptyState
                    icon={<Search className="w-8 h-8" />}
                    title="No rooms found"
                    description="Try adjusting your filters or create a new room"
                    action={{
                        label: "Create Room",
                        onClick: () => (window.location.href = "/rooms/create"),
                    }}
                />
            )}
        </div>
    );
}
