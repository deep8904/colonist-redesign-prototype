"use client";

import { cn } from "@/lib/cn";
import { HTMLAttributes, forwardRef } from "react";
import { X } from "lucide-react";

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "selected";
    removable?: boolean;
    onRemove?: () => void;
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
    (
        {
            className,
            variant = "default",
            removable = false,
            onRemove,
            children,
            onClick,
            ...props
        },
        ref
    ) => {
        const baseStyles = `
      inline-flex items-center gap-1.5
      px-3 py-1.5
      text-sm font-medium
      rounded-full
      transition-all duration-150 ease-out
    `;

        const variants = {
            default: `
        bg-[var(--color-neutral-100)]
        text-[var(--color-neutral-700)]
        ${onClick ? "cursor-pointer hover:bg-[var(--color-neutral-200)]" : ""}
      `,
            selected: `
        bg-[var(--color-primary-500)]
        text-white
        ${onClick ? "cursor-pointer hover:bg-[var(--color-primary-600)]" : ""}
      `,
        };

        return (
            <div
                ref={ref}
                className={cn(baseStyles, variants[variant], className)}
                onClick={onClick}
                role={onClick ? "button" : undefined}
                tabIndex={onClick ? 0 : undefined}
                {...props}
            >
                {children}
                {removable && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove?.();
                        }}
                        className="p-0.5 rounded-full hover:bg-black/10"
                        aria-label="Remove"
                    >
                        <X className="w-3 h-3" />
                    </button>
                )}
            </div>
        );
    }
);

Chip.displayName = "Chip";

export { Chip };
