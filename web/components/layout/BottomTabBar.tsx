"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Gamepad2, Trophy, Eye, ShoppingBag, User } from "lucide-react";

const tabItems = [
    { href: "/", label: "Play", icon: Gamepad2 },
    { href: "/ranked", label: "Ranked", icon: Trophy },
    { href: "/spectate", label: "Watch", icon: Eye },
    { href: "/store/membership", label: "Store", icon: ShoppingBag },
    { href: "/profile", label: "Profile", icon: User },
];

export function BottomTabBar() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-[var(--z-fixed)] bg-[var(--color-bg-primary)] border-t border-[var(--color-border-default)] md:hidden safe-area-bottom">
            <div className="flex items-center justify-around h-14">
                {tabItems.map((item) => {
                    // Check if active - for home, only match exact
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-0.5 flex-1 py-2 transition-colors",
                                isActive
                                    ? "text-[var(--color-primary-500)]"
                                    : "text-[var(--color-text-muted)]"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="text-xs font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
