"use client";

import { cn } from "@/lib/cn";

export interface ToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
}

export function Toggle({
    checked,
    onChange,
    label,
    disabled = false,
    className,
}: ToggleProps) {
    return (
        <label
            className={cn(
                "inline-flex items-center gap-3 cursor-pointer",
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
        >
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                disabled={disabled}
                onClick={() => !disabled && onChange(!checked)}
                className={cn(
                    "relative w-11 h-6 rounded-full transition-colors duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2",
                    checked
                        ? "bg-[var(--color-primary-500)]"
                        : "bg-[var(--color-neutral-300)]"
                )}
            >
                <span
                    className={cn(
                        "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm",
                        "transition-transform duration-200",
                        checked && "translate-x-5"
                    )}
                />
            </button>
            {label && (
                <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    {label}
                </span>
            )}
        </label>
    );
}
