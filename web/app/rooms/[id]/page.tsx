"use client";

import { useState } from "react";
import { use } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Modal } from "@/components/ui/Modal";
import { Avatar } from "@/components/ui/Avatar";
import { useToast, ToastContainer } from "@/components/ui/Toast";
import { RatingBadge } from "@/components/domain/RatingBadge";
import { currentUser } from "@/data/user";
import { friends } from "@/data/players";
import {
    Copy,
    Users,
    MessageSquare,
    Settings,
    LogOut,
    Play,
    Clock,
    Check,
} from "lucide-react";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function RoomLobbyPage({ params }: PageProps) {
    const { id } = use(params);
    const [isInviteOpen, setIsInviteOpen] = useState(false);
    const { toasts, addToast, removeToast } = useToast();

    // Mock room data
    const roomCode = id === "demo123" ? "ABC123" : id.toUpperCase().slice(0, 6);
    const inviteLink = `https://colonist.io/room/${roomCode}`;

    const players = [
        { id: "1", username: currentUser.username, rating: currentUser.rating, isHost: true, isReady: true },
        { id: "2", username: "WaitingPlayer", rating: 1456, isHost: false, isReady: false },
    ];

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(inviteLink);
            addToast("Link copied to clipboard!", "success");
        } catch {
            addToast("Failed to copy link", "error");
        }
    };

    const handleStartGame = () => {
        addToast("Starting game...", "info");
        // In real app, would start the game
    };

    return (
        <div className="container max-w-4xl py-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-2xl font-bold">Room {roomCode}</h1>
                        <button
                            onClick={handleCopyLink}
                            className="p-1.5 rounded hover:bg-[var(--color-neutral-100)] transition-colors"
                            aria-label="Copy room code"
                        >
                            <Copy className="w-4 h-4 text-[var(--color-text-muted)]" />
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <Chip>Base Game</Chip>
                        <Chip>Standard Map</Chip>
                        <Chip>
                            <Clock className="w-3 h-3" />
                            60s
                        </Chip>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        leftIcon={<Settings className="w-4 h-4" />}
                    >
                        Settings
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        leftIcon={<LogOut className="w-4 h-4" />}
                        className="text-[var(--color-error-500)]"
                    >
                        Leave
                    </Button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Players */}
                <div className="lg:col-span-2">
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Users className="w-5 h-5 text-[var(--color-text-muted)]" />
                                Players
                            </h2>
                            <span className="text-sm text-[var(--color-text-muted)]">
                                {players.length}/4
                            </span>
                        </div>

                        <div className="space-y-3">
                            {players.map((player) => (
                                <div
                                    key={player.id}
                                    className="flex items-center justify-between p-4 rounded-lg bg-[var(--color-bg-secondary)]"
                                >
                                    <div className="flex items-center gap-3">
                                        <Avatar size="md" />
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium">{player.username}</span>
                                                {player.isHost && (
                                                    <span className="text-xs px-2 py-0.5 rounded bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)]">
                                                        Host
                                                    </span>
                                                )}
                                            </div>
                                            <RatingBadge
                                                rating={player.rating}
                                                division="gold"
                                                divisionTier={3}
                                                size="sm"
                                                showDivision={false}
                                            />
                                        </div>
                                    </div>
                                    {player.isReady && (
                                        <div className="flex items-center gap-1 text-[var(--color-success-500)] text-sm">
                                            <Check className="w-4 h-4" />
                                            Ready
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Empty slots */}
                            {Array.from({ length: 4 - players.length }).map((_, i) => (
                                <div
                                    key={`empty-${i}`}
                                    className="flex items-center justify-center p-4 rounded-lg border-2 border-dashed border-[var(--color-border-default)] text-[var(--color-text-muted)]"
                                >
                                    Waiting for player...
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Invite Bar */}
                    <Card className="p-4 mt-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex-1">
                                <p className="text-sm text-[var(--color-text-secondary)] mb-1">
                                    Invite Link
                                </p>
                                <div className="flex items-center gap-2">
                                    <code className="flex-1 px-3 py-2 bg-[var(--color-bg-secondary)] rounded text-sm truncate">
                                        {inviteLink}
                                    </code>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        onClick={handleCopyLink}
                                        leftIcon={<Copy className="w-4 h-4" />}
                                    >
                                        Copy
                                    </Button>
                                </div>
                            </div>
                            <Button onClick={() => setIsInviteOpen(true)}>
                                <Users className="w-4 h-4 mr-2" />
                                Invite Friends
                            </Button>
                        </div>
                    </Card>
                </div>

                {/* Chat */}
                <div>
                    <Card className="p-4 h-full flex flex-col">
                        <h2 className="font-semibold flex items-center gap-2 mb-4">
                            <MessageSquare className="w-5 h-5 text-[var(--color-text-muted)]" />
                            Chat
                        </h2>
                        <div className="flex-1 min-h-[200px] bg-[var(--color-bg-secondary)] rounded-lg p-3 mb-3 text-sm text-[var(--color-text-muted)]">
                            No messages yet. Say hello! 👋
                        </div>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="w-full px-3 py-2 border border-[var(--color-border-default)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/30"
                        />
                    </Card>
                </div>
            </div>

            {/* Start Button */}
            <div className="mt-6 text-center">
                <Button
                    size="lg"
                    onClick={handleStartGame}
                    disabled={players.length < 2}
                    leftIcon={<Play className="w-5 h-5" />}
                >
                    Start Game
                </Button>
                {players.length < 2 && (
                    <p className="text-sm text-[var(--color-text-muted)] mt-2">
                        Need at least 2 players to start
                    </p>
                )}
            </div>

            {/* Invite Modal */}
            <Modal
                isOpen={isInviteOpen}
                onClose={() => setIsInviteOpen(false)}
                title="Invite Friends"
                size="md"
            >
                <div className="space-y-4">
                    {/* Link */}
                    <div>
                        <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                            Share Link
                        </p>
                        <div className="flex items-center gap-2">
                            <code className="flex-1 px-3 py-2 bg-[var(--color-bg-secondary)] rounded text-sm truncate">
                                {inviteLink}
                            </code>
                            <Button variant="secondary" size="sm" onClick={handleCopyLink}>
                                Copy
                            </Button>
                        </div>
                    </div>

                    {/* Friends */}
                    <div>
                        <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                            Friends
                        </p>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                            {friends.map((friend) => (
                                <div
                                    key={friend.id}
                                    className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-bg-secondary)]"
                                >
                                    <div className="flex items-center gap-3">
                                        <Avatar size="sm" status={friend.status} />
                                        <div>
                                            <p className="text-sm font-medium">{friend.username}</p>
                                            <p className="text-xs text-[var(--color-text-muted)] capitalize">
                                                {friend.status === "in-game"
                                                    ? "In Game"
                                                    : friend.status}
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="secondary"
                                        onClick={() => addToast(`Invite sent to ${friend.username}!`, "success")}
                                    >
                                        Invite
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal>

            <ToastContainer toasts={toasts} onClose={removeToast} />
        </div>
    );
}
