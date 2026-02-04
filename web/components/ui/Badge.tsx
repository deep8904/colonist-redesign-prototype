"use client";

import { cn } from "@/lib/cn";

export interface BadgeProps {
    variant?: "default" | "success" | "warning" | "error" | "info";
    children: React.ReactNode;
    className?: string;
}

const variants = {
    default: "bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)]",
    success: "bg-[var(--color-success-100)] text-[var(--color-success-700)]",
    warning: "bg-[var(--color-warning-100)] text-[var(--color-warning-700)]",
    error: "bg-[var(--color-error-100)] text-[var(--color-error-700)]",
    info: "bg-[var(--color-info-100)] text-[var(--color-info-700)]",
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}

// Count badge variant
export interface CountBadgeProps {
    count: number;
    max?: number;
    className?: string;
}

export function CountBadge({ count, max = 99, className }: CountBadgeProps) {
    const displayCount = count > max ? `${max}+` : count;

    if (count === 0) return null;

    return (
        <span
            className={cn(
                "inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full",
                "bg-[var(--color-error-500)] text-white text-xs font-bold",
                className
            )}
        >
            {displayCount}
        </span>
    );
}
