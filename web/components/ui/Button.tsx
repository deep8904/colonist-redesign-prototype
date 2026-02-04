"use client";

import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "destructive";
    size?: "sm" | "md" | "lg";
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            loading = false,
            disabled,
            leftIcon,
            rightIcon,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium rounded-lg
      transition-all duration-150 ease-out
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

        const variants = {
            primary: `
        bg-[var(--color-primary-500)] text-white
        hover:bg-[var(--color-primary-600)]
        active:bg-[var(--color-primary-700)]
        focus-visible:ring-[var(--color-primary-500)]
      `,
            secondary: `
        bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]
        hover:bg-[var(--color-neutral-200)]
        active:bg-[var(--color-neutral-300)]
        focus-visible:ring-[var(--color-neutral-400)]
        border border-[var(--color-border-default)]
      `,
            ghost: `
        bg-transparent text-[var(--color-neutral-700)]
        hover:bg-[var(--color-neutral-100)]
        active:bg-[var(--color-neutral-200)]
        focus-visible:ring-[var(--color-neutral-400)]
      `,
            destructive: `
        bg-[var(--color-error-500)] text-white
        hover:bg-[var(--color-error-700)]
        focus-visible:ring-[var(--color-error-500)]
      `,
        };

        const sizes = {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || loading}
                {...props}
            >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {!loading && leftIcon}
                {children}
                {!loading && rightIcon}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
