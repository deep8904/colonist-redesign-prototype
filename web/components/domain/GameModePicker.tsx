"use client";

import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";
import { Check, Lock, Gamepad2, Castle, Ship } from "lucide-react";

export interface GameModeOption {
    id: string;
    name: string;
    description: string;
    requiresMembership: boolean;
}

export interface GameModePickerProps {
    modes: GameModeOption[];
    selectedMode: string;
    onSelect: (modeId: string) => void;
    hasMembership?: boolean;
    className?: string;
}

const icons: Record<string, React.ReactNode> = {
    base: <Gamepad2 className="w-8 h-8" />,
    "cities-knights": <Castle className="w-8 h-8" />,
    seafarers: <Ship className="w-8 h-8" />,
};

export function GameModePicker({
    modes,
    selectedMode,
    onSelect,
    hasMembership = false,
    className,
}: GameModePickerProps) {
    return (
        <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", className)}>
            {modes.map((mode) => {
                const isSelected = selectedMode === mode.id;
                const isLocked = mode.requiresMembership && !hasMembership;

                return (
                    <button
                        key={mode.id}
                        type="button"
                        onClick={() => !isLocked && onSelect(mode.id)}
                        disabled={isLocked}
                        className="text-left focus:outline-none"
                    >
                        <Card
                            variant={isSelected ? "selected" : "interactive"}
                            className={cn(
                                "relative flex flex-col items-center p-6 text-center",
                                isLocked && "opacity-60 cursor-not-allowed"
                            )}
                        >
                            {/* Selected check */}
                            {isSelected && (
                                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[var(--color-primary-500)] flex items-center justify-center">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                            )}

                            {/* Lock icon */}
                            {isLocked && (
                                <div className="absolute top-3 right-3">
                                    <Lock className="w-5 h-5 text-[var(--color-text-muted)]" />
                                </div>
                            )}

                            {/* Icon */}
                            <div
                                className={cn(
                                    "w-16 h-16 rounded-xl flex items-center justify-center mb-4",
                                    isSelected
                                        ? "bg-[var(--color-primary-100)] text-[var(--color-primary-600)]"
                                        : "bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)]"
                                )}
                            >
                                {icons[mode.id] || <Gamepad2 className="w-8 h-8" />}
                            </div>

                            {/* Name */}
                            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                                {mode.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                {mode.description}
                            </p>

                            {/* Membership required note */}
                            {mode.requiresMembership && !hasMembership && (
                                <p className="text-xs text-[var(--color-secondary-600)] mt-2">
                                    Requires Membership
                                </p>
                            )}
                        </Card>
                    </button>
                );
            })}
        </div>
    );
}
