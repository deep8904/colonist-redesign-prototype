"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { RatingBadge } from "@/components/domain/RatingBadge";
import { currentUser } from "@/data/user";
import { Trophy, Clock, Users, Activity, TrendingUp } from "lucide-react";

export default function RankedPage() {
    const [isQueueing, setIsQueueing] = useState(false);
    const [queueTime, setQueueTime] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isQueueing) {
            interval = setInterval(() => {
                setQueueTime((t) => t + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isQueueing]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <div className="container max-w-4xl py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-3">
                    <Trophy className="w-8 h-8 text-[var(--color-secondary-500)]" />
                    Ranked Play
                </h1>
                <p className="text-[var(--color-text-secondary)]">
                    Compete for glory and climb the leaderboard
                </p>
            </div>

            {/* Your Rating */}
            <Card className="p-6 mb-8 text-center">
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                    Your Current Rating
                </p>
                <RatingBadge
                    rating={currentUser.rating}
                    division={currentUser.division}
                    divisionTier={currentUser.divisionTier}
                    size="lg"
                />

                {/* Progress bar */}
                <div className="mt-6 max-w-md mx-auto">
                    <div className="flex items-center justify-between text-sm text-[var(--color-text-secondary)] mb-2">
                        <span>Gold III</span>
                        <span>Gold II</span>
                    </div>
                    <div className="h-2 bg-[var(--color-neutral-200)] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-[var(--color-secondary-400)] to-[var(--color-secondary-500)] transition-all"
                            style={{ width: `${currentUser.seasonProgress}%` }}
                        />
                    </div>
                    <p className="text-xs text-[var(--color-text-muted)] mt-2">
                        {currentUser.seasonProgress}% to next division
                    </p>
                </div>
            </Card>

            {/* Queue Button */}
            <div className="text-center mb-8">
                {!isQueueing ? (
                    <Button size="lg" onClick={() => setIsQueueing(true)}>
                        <Activity className="w-5 h-5 mr-2" />
                        Find Ranked Match
                    </Button>
                ) : (
                    <div>
                        <Button
                            size="lg"
                            variant="secondary"
                            onClick={() => {
                                setIsQueueing(false);
                                setQueueTime(0);
                            }}
                        >
                            Cancel Queue
                        </Button>
                        <p className="flex items-center justify-center gap-2 mt-4 text-[var(--color-text-secondary)]">
                            <Clock className="w-4 h-4 animate-pulse" />
                            Searching... {formatTime(queueTime)}
                        </p>
                    </div>
                )}
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <Card className="p-6 text-center">
                    <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                        {currentUser.gamesPlayed}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">Games Played</p>
                </Card>
                <Card className="p-6 text-center">
                    <p className="text-2xl font-bold text-[var(--color-success-500)]">
                        {currentUser.wins}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">Wins</p>
                </Card>
                <Card className="p-6 text-center">
                    <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                        {Math.round((currentUser.wins / currentUser.gamesPlayed) * 100)}%
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">Win Rate</p>
                </Card>
            </div>

            {/* Season Info */}
            <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[var(--color-text-muted)]" />
                    Season 12
                </h2>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            Ends in 23 days
                        </p>
                        <p className="text-sm text-[var(--color-text-muted)]">
                            Reach Platinum to earn Season Rewards!
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-[var(--color-text-muted)]" />
                            <span className="text-sm text-[var(--color-text-secondary)]">
                                12,847 players queuing
                            </span>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Queue Modal */}
            <Modal
                isOpen={queueTime >= 8}
                onClose={() => { }}
                size="sm"
            >
                <div className="text-center py-4">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-success-100)] flex items-center justify-center mx-auto mb-4">
                        <Activity className="w-8 h-8 text-[var(--color-success-500)] animate-pulse" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Match Found!</h2>
                    <p className="text-[var(--color-text-secondary)] mb-4">
                        Your ranked match is ready
                    </p>
                    <Button
                        onClick={() => {
                            setIsQueueing(false);
                            setQueueTime(0);
                            // Would navigate to game
                        }}
                    >
                        Join Match
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
