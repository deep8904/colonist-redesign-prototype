"use client";

import { cn } from "@/lib/cn";
import { Chip } from "@/components/ui/Chip";
import type { GameMode } from "@/data/rooms";

export interface FilterBarProps {
    selectedMode: GameMode | "all";
    onModeChange: (mode: GameMode | "all") => void;
    className?: string;
}

const modes = [
    { id: "all", label: "All Modes" },
    { id: "base", label: "Base Game" },
    { id: "cities-knights", label: "Cities & Knights" },
    { id: "seafarers", label: "Seafarers" },
] as const;

export function FilterBar({
    selectedMode,
    onModeChange,
    className,
}: FilterBarProps) {
    return (
        <div className={cn("flex flex-wrap items-center gap-2", className)}>
            <span className="text-sm font-medium text-[var(--color-text-secondary)] mr-2">
                Filter:
            </span>
            {modes.map((mode) => (
                <Chip
                    key={mode.id}
                    variant={selectedMode === mode.id ? "selected" : "default"}
                    onClick={() => onModeChange(mode.id as GameMode | "all")}
                >
                    {mode.label}
                </Chip>
            ))}
        </div>
    );
}
