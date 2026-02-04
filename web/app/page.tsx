"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { RatingBadge } from "@/components/domain/RatingBadge";
import { currentUser, recentGames } from "@/data/user";
import { friends } from "@/data/players";
import {
  Play,
  Plus,
  Users,
  Trophy,
  Eye,
  Zap,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const onlineFriends = friends.filter((f) => f.isOnline);

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="text-center py-12 lg:py-20">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
          Play Settlers of Catan
          <span className="text-[var(--color-primary-500)]"> Online</span>
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
          The #1 free Settlers of Catan alternative. Build, trade, and settle
          your way to victory with players worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/play">
            <Button size="lg" leftIcon={<Play className="w-5 h-5" />}>
              Play Now
            </Button>
          </Link>
          <Link href="/rooms/create">
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Plus className="w-5 h-5" />}
            >
              Create Room
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-[var(--color-text-muted)]">
          New to Catan?{" "}
          <Link
            href="/learn"
            className="text-[var(--color-primary-500)] hover:underline"
          >
            Learn in 3 minutes →
          </Link>
        </p>
      </section>

      {/* Quick Actions (Logged In) */}
      <section className="mb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/play">
            <Card variant="interactive" className="text-center p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-100)] flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-[var(--color-primary-500)]" />
              </div>
              <h3 className="font-semibold mb-1">Quick Play</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Find a match
              </p>
            </Card>
          </Link>

          <Link href="/rooms/create">
            <Card variant="interactive" className="text-center p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary-100)] flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-[var(--color-secondary-600)]" />
              </div>
              <h3 className="font-semibold mb-1">Play with Friends</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Create room
              </p>
            </Card>
          </Link>

          <Link href="/ranked">
            <Card variant="interactive" className="text-center p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-warning-100)] flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-[var(--color-warning-600)]" />
              </div>
              <h3 className="font-semibold mb-1">Ranked</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Compete
              </p>
            </Card>
          </Link>

          <Link href="/spectate">
            <Card variant="interactive" className="text-center p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-info-100)] flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-[var(--color-info-600)]" />
              </div>
              <h3 className="font-semibold mb-1">Spectate</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Watch games
              </p>
            </Card>
          </Link>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="grid lg:grid-cols-2 gap-8">
        {/* Friends Online */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Users className="w-5 h-5 text-[var(--color-text-muted)]" />
              Friends Online
            </h2>
            <span className="text-sm text-[var(--color-text-muted)]">
              {onlineFriends.length} online
            </span>
          </div>

          <div className="space-y-3">
            {onlineFriends.length > 0 ? (
              onlineFriends.map((friend) => (
                <div
                  key={friend.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-bg-secondary)]"
                >
                  <div className="flex items-center gap-3">
                    <Avatar size="sm" status={friend.status} />
                    <div>
                      <p className="font-medium text-sm">{friend.username}</p>
                      <p className="text-xs text-[var(--color-text-muted)] capitalize">
                        {friend.status === "in-game" ? "In Game" : "Online"}
                      </p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    Invite
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-sm text-[var(--color-text-muted)] text-center py-4">
                No friends online
              </p>
            )}
          </div>
        </Card>

        {/* Recent Games */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Target className="w-5 h-5 text-[var(--color-text-muted)]" />
              Recent Games
            </h2>
            <RatingBadge
              rating={currentUser.rating}
              division={currentUser.division}
              divisionTier={currentUser.divisionTier}
              size="sm"
            />
          </div>

          <div className="space-y-2">
            {recentGames.map((game) => (
              <div
                key={game.id}
                className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-bg-secondary)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${game.result === "win"
                        ? "bg-[var(--color-success-500)]"
                        : game.result === "loss"
                          ? "bg-[var(--color-error-500)]"
                          : "bg-[var(--color-warning-500)]"
                      }`}
                  />
                  <div>
                    <p className="font-medium text-sm capitalize">
                      {game.result}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {game.mode} • {game.date}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-sm font-medium ${game.ratingChange > 0
                      ? "text-[var(--color-success-500)]"
                      : "text-[var(--color-error-500)]"
                    }`}
                >
                  {game.ratingChange > 0 ? "+" : ""}
                  {game.ratingChange}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/profile"
            className="flex items-center justify-center gap-1 mt-4 text-sm text-[var(--color-primary-500)] hover:underline"
          >
            View all games <ArrowRight className="w-4 h-4" />
          </Link>
        </Card>
      </section>

      {/* Features */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Why Play on Colonist?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-100)] flex items-center justify-center mx-auto mb-4">
              <Zap className="w-7 h-7 text-[var(--color-primary-500)]" />
            </div>
            <h3 className="font-semibold mb-2">Instant Matches</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Find games in seconds. No waiting, no downloads.
            </p>
          </div>
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-secondary-100)] flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-7 h-7 text-[var(--color-secondary-600)]" />
            </div>
            <h3 className="font-semibold mb-2">Competitive Ranked</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Climb the leaderboard. Seasons, ratings, and glory await.
            </p>
          </div>
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-success-100)] flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-[var(--color-success-600)]" />
            </div>
            <h3 className="font-semibold mb-2">Free to Play</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Base game is completely free. Play as much as you want.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
