"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Check, X, Crown, Castle, Ship, Star } from "lucide-react";

const plans = [
    {
        id: "free",
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for casual players",
        features: [
            { name: "Base Game", included: true },
            { name: "Unlimited Games", included: true },
            { name: "Ranked Play", included: true },
            { name: "Friend Invites", included: true },
            { name: "Cities & Knights", included: false },
            { name: "Seafarers", included: false },
            { name: "Premium Maps", included: false },
            { name: "Custom Avatars", included: false },
            { name: "No Ads", included: false },
        ],
        cta: "Current Plan",
        variant: "secondary" as const,
        popular: false,
    },
    {
        id: "monthly",
        name: "Membership",
        price: "$4.99",
        period: "/month",
        description: "For the dedicated settler",
        features: [
            { name: "Base Game", included: true },
            { name: "Unlimited Games", included: true },
            { name: "Ranked Play", included: true },
            { name: "Friend Invites", included: true },
            { name: "Cities & Knights", included: true },
            { name: "Seafarers", included: true },
            { name: "Premium Maps", included: true },
            { name: "Custom Avatars", included: true },
            { name: "No Ads", included: true },
        ],
        cta: "Start Trial",
        variant: "primary" as const,
        popular: true,
    },
    {
        id: "yearly",
        name: "Annual",
        price: "$39.99",
        period: "/year",
        description: "Best value — save 33%",
        features: [
            { name: "Base Game", included: true },
            { name: "Unlimited Games", included: true },
            { name: "Ranked Play", included: true },
            { name: "Friend Invites", included: true },
            { name: "Cities & Knights", included: true },
            { name: "Seafarers", included: true },
            { name: "Premium Maps", included: true },
            { name: "Custom Avatars", included: true },
            { name: "No Ads", included: true },
        ],
        cta: "Get Annual",
        variant: "primary" as const,
        popular: false,
    },
];

const expansions = [
    {
        name: "Cities & Knights",
        icon: Castle,
        description:
            "Add knights, commodities, and city improvements to your game",
    },
    {
        name: "Seafarers",
        icon: Ship,
        description: "Explore the seas, discover new islands, and build ships",
    },
];

export default function MembershipPage() {
    return (
        <div className="container max-w-5xl py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                    <Crown className="w-8 h-8 text-[var(--color-secondary-500)]" />
                    Membership
                </h1>
                <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                    Unlock all expansions, premium maps, and an ad-free experience.
                    <strong> Only the host needs a Membership </strong>
                    — your friends play for free!
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {plans.map((plan) => (
                    <Card
                        key={plan.id}
                        variant={plan.popular ? "selected" : "default"}
                        className="p-6 relative"
                    >
                        {plan.popular && (
                            <Badge
                                variant="success"
                                className="absolute -top-3 left-1/2 -translate-x-1/2"
                            >
                                <Star className="w-3 h-3 mr-1" />
                                Most Popular
                            </Badge>
                        )}

                        <div className="text-center mb-6">
                            <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                            <p className="text-sm text-[var(--color-text-muted)] mb-4">
                                {plan.description}
                            </p>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-[var(--color-text-muted)]">
                                    {plan.period}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                            {plan.features.map((feature) => (
                                <li key={feature.name} className="flex items-center gap-2">
                                    {feature.included ? (
                                        <Check className="w-4 h-4 text-[var(--color-success-500)] flex-shrink-0" />
                                    ) : (
                                        <X className="w-4 h-4 text-[var(--color-neutral-400)] flex-shrink-0" />
                                    )}
                                    <span
                                        className={
                                            feature.included
                                                ? "text-[var(--color-text-primary)]"
                                                : "text-[var(--color-text-muted)]"
                                        }
                                    >
                                        {feature.name}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant={plan.variant}
                            className="w-full"
                            disabled={plan.id === "free"}
                        >
                            {plan.cta}
                        </Button>
                    </Card>
                ))}
            </div>

            {/* What's Included */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-center mb-8">
                    What&apos;s Included
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {expansions.map((expansion) => {
                        const Icon = expansion.icon;
                        return (
                            <Card key={expansion.name} className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-[var(--color-primary-500)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{expansion.name}</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)]">
                                            {expansion.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* FAQ */}
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">
                            Do my friends need a Membership to play expansions?
                        </h3>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            No! Only the host needs a Membership. Your friends can join and
                            play any expansion for free.
                        </p>
                    </Card>
                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            Yes, you can cancel your subscription at any time. You&apos;ll
                            continue to have access until the end of your billing period.
                        </p>
                    </Card>
                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            Yes! New members get a 7-day free trial to try all features.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
