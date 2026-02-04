"use client";

import { cn } from "@/lib/cn";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type ToastVariant = "success" | "error" | "info" | "warning";

export interface ToastProps {
    id: string;
    message: string;
    variant?: ToastVariant;
    duration?: number;
    onClose: (id: string) => void;
}

const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle,
};

const variants = {
    success: "bg-[var(--color-success-50)] border-[var(--color-success-500)] text-[var(--color-success-700)]",
    error: "bg-[var(--color-error-50)] border-[var(--color-error-500)] text-[var(--color-error-700)]",
    info: "bg-[var(--color-info-50)] border-[var(--color-info-500)] text-[var(--color-info-700)]",
    warning: "bg-[var(--color-warning-50)] border-[var(--color-warning-500)] text-[var(--color-warning-700)]",
};

export function Toast({
    id,
    message,
    variant = "info",
    duration = 4000,
    onClose,
}: ToastProps) {
    const [isExiting, setIsExiting] = useState(false);
    const Icon = icons[variant];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => onClose(id), 200);
        }, duration);

        return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    return (
        <div
            className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg min-w-[300px]",
                "transition-all duration-200",
                isExiting ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0",
                variants[variant]
            )}
            role={variant === "error" ? "alert" : "status"}
        >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <p className="flex-1 text-sm font-medium">{message}</p>
            <button
                onClick={() => {
                    setIsExiting(true);
                    setTimeout(() => onClose(id), 200);
                }}
                className="p-1 rounded hover:bg-black/5 transition-colors"
                aria-label="Dismiss"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}

// Toast Data type (without onClose, since container passes it)
export interface ToastData {
    id: string;
    message: string;
    variant?: ToastVariant;
    duration?: number;
}

// Toast Container
interface ToastContainerProps {
    toasts: ToastData[];
    onClose: (id: string) => void;
}


export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return createPortal(
        <div className="fixed top-4 right-4 z-[var(--z-toast)] flex flex-col gap-2">
            {toasts.map((toast) => (
                <Toast key={toast.id} {...toast} onClose={onClose} />
            ))}
        </div>,
        document.body
    );
}

// Hook for managing toasts
export function useToast() {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const addToast = (
        message: string,
        variant: ToastVariant = "info",
        duration = 4000
    ) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, variant, duration }]);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return { toasts, addToast, removeToast };
}
