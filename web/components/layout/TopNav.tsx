"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import {
    Gamepad2,
    Trophy,
    Eye,
    ShoppingBag,
    Bell,
    Menu,
    LogIn
} from "lucide-react";

interface TopNavProps {
    isLoggedIn: boolean;
    onToggleAuth: () => void;
    onMenuOpen?: () => void;
}

const navItems = [
    { href: "/play", label: "Play", icon: Gamepad2 },
    { href: "/ranked", label: "Ranked", icon: Trophy },
    { href: "/spectate", label: "Spectate", icon: Eye },
    { href: "/store/membership", label: "Store", icon: ShoppingBag },
];

export function TopNav({ isLoggedIn, onToggleAuth, onMenuOpen }: TopNavProps) {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-[var(--z-sticky)] bg-[var(--color-bg-primary)] border-b border-[var(--color-border-default)]">
            <div className="container">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold text-xl text-[var(--color-primary-500)]"
                    >
                        <Gamepad2 className="w-7 h-7" />
                        <span className="hidden sm:inline">Colonist</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors",
                                        isActive
                                            ? "text-[var(--color-primary-500)] bg-[var(--color-primary-50)]"
                                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-neutral-100)]"
                                    )}
                                >
                                    <Icon className="w-4 h-4" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        {isLoggedIn ? (
                            <>
                                <button
                                    className="p-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors relative"
                                    aria-label="Notifications"
                                >
                                    <Bell className="w-5 h-5 text-[var(--color-text-secondary)]" />
                                </button>
                                <button
                                    onClick={onToggleAuth}
                                    className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors"
                                >
                                    <Avatar size="sm" />
                                    <span className="hidden sm:inline text-sm font-medium">You</span>
                                </button>
                            </>
                        ) : (
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={onToggleAuth}
                                leftIcon={<LogIn className="w-4 h-4" />}
                            >
                                <span className="hidden sm:inline">Log In</span>
                                <span className="sm:hidden">Login</span>
                            </Button>
                        )}

                        {/* Mobile menu button */}
                        <button
                            onClick={onMenuOpen}
                            className="p-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors md:hidden"
                            aria-label="Open menu"
                        >
                            <Menu className="w-5 h-5 text-[var(--color-text-secondary)]" />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
