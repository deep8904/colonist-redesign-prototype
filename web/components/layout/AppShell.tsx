"use client";

import { useState } from "react";
import { TopNav } from "./TopNav";
import { BottomTabBar } from "./BottomTabBar";
import { MobileDrawer } from "./MobileDrawer";
import { ToastContainer, useToast } from "@/components/ui/Toast";

interface AppShellProps {
    children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { toasts, addToast, removeToast } = useToast();

    const handleToggleAuth = () => {
        setIsLoggedIn(!isLoggedIn);
        addToast(
            isLoggedIn ? "Logged out successfully" : "Welcome back!",
            "success"
        );
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg-secondary)]">
            <TopNav
                isLoggedIn={isLoggedIn}
                onToggleAuth={handleToggleAuth}
                onMenuOpen={() => setIsDrawerOpen(true)}
            />

            <main className="pb-20 md:pb-8">{children}</main>

            <BottomTabBar />

            <MobileDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                isLoggedIn={isLoggedIn}
                onLogout={() => setIsLoggedIn(false)}
            />

            <ToastContainer toasts={toasts} onClose={removeToast} />
        </div>
    );
}
