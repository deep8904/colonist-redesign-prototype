"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/ui/Avatar";
import { RatingBadge } from "@/components/domain/RatingBadge";
import { currentUser } from "@/data/user";
import {
    X,
    Gamepad2,
    Trophy,
    Eye,
    ShoppingBag,
    User,
    Settings,
    HelpCircle,
    LogOut,
} from "lucide-react";
import { useEffect, useCallback } from "react";

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    isLoggedIn: boolean;
    onLogout: () => void;
}

const navItems = [
    { href: "/play", label: "Play", icon: Gamepad2 },
    { href: "/ranked", label: "Ranked", icon: Trophy },
    { href: "/spectate", label: "Spectate", icon: Eye },
    { href: "/store/membership", label: "Store", icon: ShoppingBag },
    { href: "/profile", label: "Profile", icon: User },
];

const secondaryItems = [
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/help", label: "Help", icon: HelpCircle },
];

export function MobileDrawer({
    isOpen,
    onClose,
    isLoggedIn,
    onLogout,
}: MobileDrawerProps) {
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

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[var(--z-overlay)] bg-black/50"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer */}
            <div
                className={cn(
                    "fixed top-0 left-0 bottom-0 z-[var(--z-modal)] w-72 bg-[var(--color-bg-primary)] shadow-xl",
                    "animate-in slide-in-from-left duration-200"
                )}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[var(--color-border-default)]">
                    <span className="font-bold text-lg text-[var(--color-primary-500)]">
                        Colonist
                    </span>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* User info */}
                {isLoggedIn && (
                    <div className="p-4 border-b border-[var(--color-border-default)]">
                        <div className="flex items-center gap-3">
                            <Avatar size="lg" />
                            <div>
                                <p className="font-semibold text-[var(--color-text-primary)]">
                                    {currentUser.username}
                                </p>
                                <RatingBadge
                                    rating={currentUser.rating}
                                    division={currentUser.division}
                                    divisionTier={currentUser.divisionTier}
                                    size="sm"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Nav items */}
                <nav className="p-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--color-text-primary)] hover:bg-[var(--color-neutral-100)] transition-colors"
                            >
                                <Icon className="w-5 h-5 text-[var(--color-text-secondary)]" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Secondary items */}
                <div className="border-t border-[var(--color-border-default)] p-2 mt-2">
                    {secondaryItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-neutral-100)] transition-colors"
                            >
                                <Icon className="w-5 h-5" />
                                {item.label}
                            </Link>
                        );
                    })}

                    {isLoggedIn && (
                        <button
                            onClick={() => {
                                onLogout();
                                onClose();
                            }}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--color-error-500)] hover:bg-[var(--color-error-50)] transition-colors w-full"
                        >
                            <LogOut className="w-5 h-5" />
                            Log Out
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
