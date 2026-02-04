"use client";

import { cn } from "@/lib/cn";
import { Button } from "./Button";

export interface EmptyStateProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    className?: string;
}

export function EmptyState({
    icon,
    title,
    description,
    action,
    className,
}: EmptyStateProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center py-12 px-6 text-center",
                className
            )}
        >
            {icon && (
                <div className="w-16 h-16 rounded-full bg-[var(--color-neutral-100)] flex items-center justify-center mb-4 text-[var(--color-text-muted)]">
                    {icon}
                </div>
            )}
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                {title}
            </h3>
            {description && (
                <p className="text-sm text-[var(--color-text-secondary)] max-w-sm mb-4">
                    {description}
                </p>
            )}
            {action && (
                <Button variant="primary" onClick={action.onClick}>
                    {action.label}
                </Button>
            )}
        </div>
    );
}
