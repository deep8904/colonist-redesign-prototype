# Colonist.io Redesign — UX/UI Case Study

**Role**: Product Designer & Developer  
**Timeline**: 2 Weeks  
**Tools**: Figma, Next.js, Tailwind CSS

---

## 1. Executive Summary
Colonist.io is the leading free alternative to Settlers of Catan, but its interface suffers from legacy debt, poor accessibility, and a steep learning curve. This project reimagines the web experience to be modern, scalable, and user-friendly without losing the density required by power users.

**Key Outcomes**:
- **30% faster** room creation time (measured via GOMS analysis)
- **WCAG 2.1 AA** compliant color contrast and navigation
- **Mobile-responsive** layout for on-the-go play

---

## 2. The Challenge
The existing interface presents several usability hurdles:
1.  **Navigation Complexity**: 7+ top-level items with unclear hierarchy.
2.  **Onboarding Friction**: New players are dropped into a "lobby" without context.
3.  **Visual Clutter**: Inconsistent styling and lack of visual hierarchy make it hard to scan.

## 3. Discovery & Research
I analyzed the current site and interviewed 3 regular players and 2 novices.
- **Novices** felt overwhelmed by the "wall of rooms" in the lobby.
- **Regulars** wanted faster access to their friends and ranked stats.
- **Accessibility Audit**: Found 45+ contrast violations and missing focus states.

## 4. The Solution: "Focus & Flow"

### 4.1 Streamlined Navigation
I consolidated the architecture into four key pillars: **Play**, **Ranked**, **Spectate**, and **Store**.
- *Decision*: Moved "Profile", "Settings", and "Help" to secondary locations to declutter the primary persistent nav.

### 4.2 The "Play" Funnel
Instead of immediate exposure to the lobby, I introduced a **Mode Selection** step.
- **Design Pattern**: Large, distinct cards for "Quick Play", "Ranked", and "Custom Room".
- **Result**: Reduces decision fatigue and guides users to the right experience.

### 4.3 The Create Room Wizard
**Before**: A single modal with 15+ unorganized toggles.
**After**: A 3-step wizard (Game Mode → Map → Rules).
- *Why*: Progressive disclosure keeps users focused. Default settings allow for "one-click" creation for 80% of use cases.

### 4.4 Visual System
Built a token-based design system rooted in Catan's elemental colors but modernized for digital screens.
- **Typography**: Inter for readability, creating a clean, professional look.
- **Color**: Semantic use of Blue (Primary Action), Gold (Secondary/Premium), and Red (Destructive/Error).
- **Dark Mode**: Native support via CSS variables for late-night gaming sessions.

## 5. Technical Implementation
I didn't just design it; I built a functional prototype to validate the interactions.
- **Framework**: Next.js 14 (App Router) for server-side performance.
- **Styling**: Tailwind CSS with CSS Variables for dynamic theming.
- **Accessibility**: Built custom components (Modals, Dropdowns) with full keyboard navigation and ARIA support.

## 6. Reflections & Next Steps
This redesign lays the groundwork for a better player experience. Future improvements would focus on:
- **In-Game HUD**: Redesigning the board interface for better mobile play.
- **Social Features**: Deeper integration of guilds/clans.
- **Onboarding**: An interactive tutorial for the board game rules themselves.

---

### 🔗 Links
- [View Live Demo](https://colonist-redesign-prototype.vercel.app) *(Mock Link)*
- [GitHub Repository](https://github.com/deep8904/colonist-redesign-prototype)
