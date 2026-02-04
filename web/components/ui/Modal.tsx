"use client";

import { cn } from "@/lib/cn";
import { X } from "lucide-react";
import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function Modal({
    isOpen,
    onClose,
    title,
    size = "md",
    children,
}: ModalProps) {
    // Handle escape key
    const handleEscape = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, handleEscape]);

    if (!isOpen) return null;

    const sizes = {
        sm: "max-w-sm",
        md: "max-w-lg",
        lg: "max-w-2xl",
    };

    const modalContent = (
        <div
            className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal */}
            <div
                className={cn(
                    "relative w-full bg-[var(--color-bg-primary)] rounded-2xl shadow-2xl",
                    "animate-in fade-in zoom-in-95 duration-200",
                    sizes[size]
                )}
            >
                {/* Header */}
                {title && (
                    <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border-default)]">
                        <h2
                            id="modal-title"
                            className="text-lg font-semibold text-[var(--color-text-primary)]"
                        >
                            {title}
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5 text-[var(--color-text-secondary)]" />
                        </button>
                    </div>
                )}

                {/* Content */}
                <div className={cn("px-6 py-4", !title && "pt-6")}>
                    {!title && (
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5 text-[var(--color-text-secondary)]" />
                        </button>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );

    // Only render portal on client
    if (typeof window === "undefined") return null;

    return createPortal(modalContent, document.body);
}
