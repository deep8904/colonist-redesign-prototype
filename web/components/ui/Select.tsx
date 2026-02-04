"use client";

import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import { SelectHTMLAttributes, forwardRef } from "react";

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps
    extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
    label?: string;
    error?: string;
    options: SelectOption[];
    placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, error, options, placeholder, id, ...props }, ref) => {
        const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={selectId}
                        className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
                    >
                        {label}
                    </label>
                )}
                <div className="relative">
                    <select
                        ref={ref}
                        id={selectId}
                        className={cn(
                            "w-full h-11 px-3 py-2 pr-10",
                            "rounded-lg border",
                            "bg-[var(--color-bg-primary)]",
                            "text-[var(--color-text-primary)]",
                            "appearance-none cursor-pointer",
                            "transition-all duration-150 ease-out",
                            "focus:outline-none focus:ring-2 focus:ring-offset-0",
                            error
                                ? "border-[var(--color-error-500)] focus:ring-[var(--color-error-500)]"
                                : "border-[var(--color-border-default)] focus:border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)]/30",
                            "disabled:bg-[var(--color-bg-tertiary)] disabled:cursor-not-allowed",
                            className
                        )}
                        aria-invalid={!!error}
                        {...props}
                    >
                        {placeholder && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]">
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
                {error && (
                    <p className="mt-1.5 text-sm text-[var(--color-error-500)]" role="alert">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Select.displayName = "Select";

export { Select };
