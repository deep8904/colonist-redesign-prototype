"use client";

import { cn } from "@/lib/cn";
import { User } from "lucide-react";

export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    status?: "online" | "offline" | "in-game";
    className?: string;
}

const sizes = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-14 h-14 text-lg",
    xl: "w-20 h-20 text-xl",
};

const statusColors = {
    online: "bg-[var(--color-success-500)]",
    offline: "bg-[var(--color-neutral-400)]",
    "in-game": "bg-[var(--color-secondary-500)]",
};

export function Avatar({ src, alt, size = "md", status, className }: AvatarProps) {
    return (
        <div className={cn("relative inline-block", className)}>
            <div
                className={cn(
                    "rounded-full overflow-hidden bg-[var(--color-neutral-200)] flex items-center justify-center",
                    sizes[size]
                )}
            >
                {src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={src}
                        alt={alt || "User avatar"}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <User className="w-1/2 h-1/2 text-[var(--color-neutral-500)]" />
                )}
            </div>
            {status && (
                <span
                    className={cn(
                        "absolute bottom-0 right-0 block rounded-full ring-2 ring-white",
                        size === "xs" || size === "sm" ? "w-2 h-2" : "w-3 h-3",
                        statusColors[status]
                    )}
                    aria-label={status}
                />
            )}
        </div>
    );
}
