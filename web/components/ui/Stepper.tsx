"use client";

import { cn } from "@/lib/cn";
import { Check } from "lucide-react";

export interface Step {
    id: string;
    label: string;
}

export interface StepperProps {
    steps: Step[];
    currentStep: number;
    className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
    return (
        <div className={cn("flex items-center justify-center gap-2", className)}>
            {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isCurrent = index === currentStep;
                const isUpcoming = index > currentStep;

                return (
                    <div key={step.id} className="flex items-center">
                        {/* Step indicator */}
                        <div className="flex flex-col items-center">
                            <div
                                className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                                    isCompleted &&
                                    "bg-[var(--color-primary-500)] text-white",
                                    isCurrent &&
                                    "bg-[var(--color-primary-500)] text-white ring-4 ring-[var(--color-primary-100)]",
                                    isUpcoming &&
                                    "bg-[var(--color-neutral-200)] text-[var(--color-neutral-500)]"
                                )}
                            >
                                {isCompleted ? (
                                    <Check className="w-4 h-4" />
                                ) : (
                                    index + 1
                                )}
                            </div>
                            <span
                                className={cn(
                                    "mt-2 text-xs font-medium",
                                    isCurrent
                                        ? "text-[var(--color-text-primary)]"
                                        : "text-[var(--color-text-muted)]"
                                )}
                            >
                                {step.label}
                            </span>
                        </div>

                        {/* Connector line */}
                        {index < steps.length - 1 && (
                            <div
                                className={cn(
                                    "w-12 h-0.5 mx-2 mb-6",
                                    index < currentStep
                                        ? "bg-[var(--color-primary-500)]"
                                        : "bg-[var(--color-neutral-200)]"
                                )}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
