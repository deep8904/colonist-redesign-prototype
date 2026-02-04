"use client";

import { cn } from "@/lib/cn";
import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "interactive" | "selected";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const baseStyles = `
      rounded-xl border border-[var(--color-border-default)]
      bg-[var(--color-bg-primary)]
      p-4
      transition-all duration-150 ease-out
    `;

        const variants = {
            default: "shadow-sm",
            interactive: `
        shadow-sm cursor-pointer
        hover:shadow-md hover:border-[var(--color-border-strong)]
      `,
            selected: `
        shadow-md
        border-[var(--color-primary-500)]
        ring-1 ring-[var(--color-primary-500)]
      `,
        };

        return (
            <div
                ref={ref}
                className={cn(baseStyles, variants[variant], className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

export { Card };
