"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Gamepad2, Users, Trophy, Bot, ArrowRight } from "lucide-react";

const playModes = [
    {
        id: "quick",
        name: "Quick Play",
        description: "Jump into a game with other players",
        icon: Gamepad2,
        color: "primary",
        href: "/rooms",
    },
    {
        id: "friends",
        name: "Play with Friends",
        description: "Create a private room and invite friends",
        icon: Users,
        color: "secondary",
        href: "/rooms/create",
    },
    {
        id: "ranked",
        name: "Ranked",
        description: "Compete for rating and climb the leaderboard",
        icon: Trophy,
        color: "warning",
        href: "/ranked",
    },
    {
        id: "bots",
        name: "Play vs Bots",
        description: "Practice against AI opponents",
        icon: Bot,
        color: "info",
        href: "/rooms/create?bots=true",
    },
];

const colorMap = {
    primary: {
        bg: "bg-[var(--color-primary-100)]",
        text: "text-[var(--color-primary-600)]",
    },
    secondary: {
        bg: "bg-[var(--color-secondary-100)]",
        text: "text-[var(--color-secondary-600)]",
    },
    warning: {
        bg: "bg-[var(--color-warning-100)]",
        text: "text-[var(--color-warning-600)]",
    },
    info: {
        bg: "bg-[var(--color-info-100)]",
        text: "text-[var(--color-info-600)]",
    },
};

export default function PlayPage() {
    return (
        <div className="container max-w-3xl py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">How do you want to play?</h1>
                <p className="text-[var(--color-text-secondary)]">
                    Choose your game mode
                </p>
            </div>

            {/* Mode Selection */}
            <div className="grid sm:grid-cols-2 gap-4">
                {playModes.map((mode) => {
                    const Icon = mode.icon;
                    const colors = colorMap[mode.color as keyof typeof colorMap];

                    return (
                        <Link key={mode.id} href={mode.href}>
                            <Card variant="interactive" className="p-6 h-full">
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0`}
                                    >
                                        <Icon className={`w-7 h-7 ${colors.text}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-semibold mb-1 flex items-center justify-between">
                                            {mode.name}
                                            <ArrowRight className="w-4 h-4 text-[var(--color-text-muted)]" />
                                        </h2>
                                        <p className="text-sm text-[var(--color-text-secondary)]">
                                            {mode.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            {/* New to Catan */}
            <Card className="mt-8 p-6 text-center bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)]">
                <h2 className="text-lg font-semibold mb-2">New to Catan?</h2>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    Learn the rules in just 3 minutes with our interactive tutorial
                </p>
                <Button variant="secondary">Start Tutorial</Button>
            </Card>

            {/* Browse rooms */}
            <div className="mt-8 text-center">
                <p className="text-sm text-[var(--color-text-muted)]">
                    Or{" "}
                    <Link
                        href="/rooms"
                        className="text-[var(--color-primary-500)] hover:underline"
                    >
                        browse open rooms →
                    </Link>
                </p>
            </div>
        </div>
    );
}
