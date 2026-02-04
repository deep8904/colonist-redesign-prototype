"use client";

import { cn } from "@/lib/cn";
import { Trophy } from "lucide-react";

export interface RatingBadgeProps {
    rating: number;
    division: "bronze" | "silver" | "gold" | "platinum" | "diamond";
    divisionTier?: 1 | 2 | 3;
    showDivision?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const divisionColors = {
    bronze: "text-[#CD7F32]",
    silver: "text-[#C0C0C0]",
    gold: "text-[#FFD700]",
    platinum: "text-[#E5E4E2]",
    diamond: "text-[#B9F2FF]",
};

const divisionBgs = {
    bronze: "bg-[#CD7F32]/10",
    silver: "bg-[#C0C0C0]/10",
    gold: "bg-[#FFD700]/10",
    platinum: "bg-[#E5E4E2]/10",
    diamond: "bg-[#B9F2FF]/10",
};

const tierLabels = {
    1: "I",
    2: "II",
    3: "III",
};

export function RatingBadge({
    rating,
    division,
    divisionTier = 3,
    showDivision = true,
    size = "md",
    className,
}: RatingBadgeProps) {
    const sizes = {
        sm: "px-2 py-1 text-xs gap-1",
        md: "px-3 py-1.5 text-sm gap-1.5",
        lg: "px-4 py-2 text-base gap-2",
    };

    const iconSizes = {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5",
    };

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full font-medium",
                divisionBgs[division],
                sizes[size],
                className
            )}
        >
            <Trophy className={cn(iconSizes[size], divisionColors[division])} />
            {showDivision && (
                <span className={cn("capitalize", divisionColors[division])}>
                    {division} {tierLabels[divisionTier]}
                </span>
            )}
            <span className="text-[var(--color-text-primary)]">{rating.toLocaleString()}</span>
        </div>
    );
}
