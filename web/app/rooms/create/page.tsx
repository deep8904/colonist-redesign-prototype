"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Stepper } from "@/components/ui/Stepper";
import { Select } from "@/components/ui/Select";
import { Toggle } from "@/components/ui/Toggle";
import { GameModePicker } from "@/components/domain/GameModePicker";
import { gameModes, maps } from "@/data/rooms";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const steps = [
    { id: "mode", label: "Game Mode" },
    { id: "map", label: "Map" },
    { id: "rules", label: "Rules" },
];

export default function CreateRoomPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);

    // Form state
    const [selectedMode, setSelectedMode] = useState("base");
    const [selectedMap, setSelectedMap] = useState("standard");
    const [pointsToWin, setPointsToWin] = useState("10");
    const [turnTimer, setTurnTimer] = useState("60");
    const [maxPlayers, setMaxPlayers] = useState("4");
    const [isPrivate, setIsPrivate] = useState(false);
    const [friendlyRobber, setFriendlyRobber] = useState(false);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleCreate = () => {
        // In a real app, this would create the room via API
        // For demo, redirect to a mock room
        router.push("/rooms/demo123");
    };

    const handleQuickCreate = () => {
        // Use defaults and create immediately
        router.push("/rooms/demo123");
    };

    return (
        <div className="container max-w-3xl py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">Create a Room</h1>
                <p className="text-[var(--color-text-secondary)]">
                    Set up your game room
                </p>
            </div>

            {/* Stepper */}
            <Stepper steps={steps} currentStep={currentStep} className="mb-8" />

            {/* Content */}
            <Card className="p-6 mb-6">
                {/* Step 1: Game Mode */}
                {currentStep === 0 && (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Select Game Mode</h2>
                        <GameModePicker
                            modes={gameModes.map((m) => ({
                                id: m.id,
                                name: m.name,
                                description: m.description,
                                requiresMembership: m.requiresMembership,
                            }))}
                            selectedMode={selectedMode}
                            onSelect={setSelectedMode}
                            hasMembership={false}
                        />
                        <div className="mt-6 p-4 bg-[var(--color-info-50)] rounded-lg">
                            <p className="text-sm text-[var(--color-info-700)]">
                                💡 <strong>Only the host needs a Membership</strong> to play
                                expansions. Your friends can join for free!
                            </p>
                        </div>
                    </div>
                )}

                {/* Step 2: Map */}
                {currentStep === 1 && (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Select Map</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {maps.map((map) => (
                                <button
                                    key={map.id}
                                    type="button"
                                    onClick={() => setSelectedMap(map.id)}
                                    className="text-left focus:outline-none"
                                >
                                    <Card
                                        variant={selectedMap === map.id ? "selected" : "interactive"}
                                        className="p-4 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-xl bg-[var(--color-neutral-100)] mx-auto mb-3 flex items-center justify-center">
                                            <span className="text-2xl">🗺️</span>
                                        </div>
                                        <h3 className="font-medium mb-1">{map.name}</h3>
                                        <p className="text-xs text-[var(--color-text-muted)]">
                                            {map.players} players
                                        </p>
                                    </Card>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Rules */}
                {currentStep === 2 && (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Game Rules</h2>
                        <div className="space-y-6">
                            <div className="grid sm:grid-cols-3 gap-4">
                                <Select
                                    label="Points to Win"
                                    options={[
                                        { value: "8", label: "8 points" },
                                        { value: "10", label: "10 points" },
                                        { value: "12", label: "12 points" },
                                    ]}
                                    value={pointsToWin}
                                    onChange={(e) => setPointsToWin(e.target.value)}
                                />
                                <Select
                                    label="Turn Timer"
                                    options={[
                                        { value: "30", label: "30 seconds" },
                                        { value: "60", label: "60 seconds" },
                                        { value: "90", label: "90 seconds" },
                                        { value: "120", label: "2 minutes" },
                                    ]}
                                    value={turnTimer}
                                    onChange={(e) => setTurnTimer(e.target.value)}
                                />
                                <Select
                                    label="Max Players"
                                    options={[
                                        { value: "3", label: "3 players" },
                                        { value: "4", label: "4 players" },
                                        { value: "5", label: "5 players" },
                                        { value: "6", label: "6 players" },
                                    ]}
                                    value={maxPlayers}
                                    onChange={(e) => setMaxPlayers(e.target.value)}
                                />
                            </div>

                            <div className="border-t border-[var(--color-border-default)] pt-6">
                                <h3 className="font-medium mb-4">Advanced Settings</h3>
                                <div className="space-y-4">
                                    <Toggle
                                        checked={isPrivate}
                                        onChange={setIsPrivate}
                                        label="Private Room (invite only)"
                                    />
                                    <Toggle
                                        checked={friendlyRobber}
                                        onChange={setFriendlyRobber}
                                        label="Friendly Robber (can't steal from players with 2 or fewer points)"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Card>

            {/* Actions */}
            <div className="flex items-center justify-between">
                <div>
                    {currentStep > 0 && (
                        <Button
                            variant="ghost"
                            onClick={handleBack}
                            leftIcon={<ArrowLeft className="w-4 h-4" />}
                        >
                            Back
                        </Button>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    {currentStep === 0 && (
                        <Button variant="secondary" onClick={handleQuickCreate}>
                            Use Defaults & Create
                        </Button>
                    )}

                    {currentStep < steps.length - 1 ? (
                        <Button onClick={handleNext} rightIcon={<ArrowRight className="w-4 h-4" />}>
                            Next
                        </Button>
                    ) : (
                        <Button onClick={handleCreate} leftIcon={<Check className="w-4 h-4" />}>
                            Create Room
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
