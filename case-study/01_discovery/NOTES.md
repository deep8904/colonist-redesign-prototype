# Discovery Notes — Colonist.io

> **Source**: [colonist.io](https://colonist.io) | **Date**: 2026-02-04  
> **Purpose**: Document existing features, flows, and UX observations for portfolio case study

---

## 1. Website Surface Mapping

### 1.1 Primary Navigation
| Section | Description |
|---------|-------------|
| **Play** | Main entry point for starting games |
| **Rooms** | Browse open games in the lobby |
| **Leaderboards** | View ranked standings by season |
| **Store** | Purchase memberships, expansions, cosmetics |
| **Profile** | User stats, settings, and account |

### 1.2 Secondary Navigation
- **Rules** — Game rules reference
- **FAQ** — Frequently asked questions
- **About** — Company info and team
- **Careers** — Job opportunities
- **Community** — Discord and social links
- **Blog** — Updates and news
- **CC26** — Championship 2026 info
- **Patch Notes** — Version history (currently v289)

---

## 2. Core Flows Observed

### 2.1 Homepage Experience

**Logged Out State**:
- Hero: "#1 Free Online Settlers of Catan Alternative"
- Primary CTAs: "Play with Friends" and "Play Online"
- Game mode tabs: Bots, Casual, Ranked
- Login prompt in header

**Logged In State**:
- Same layout with user profile visible
- Notifications bell
- Friends list accessible
- Quick access to create/join rooms

### 2.2 Play Flow

**Game Mode Selection**:
| Mode | Description |
|------|-------------|
| **Bots** | Practice against AI opponents |
| **Casual** | Unranked games with players |
| **Ranked** | Competitive matches affecting rating |

**Room Creation Options** (when creating a game):
- Game Mode selection
- Map selection
- Rules configuration
- Advanced Settings:
  - Turn Timer
  - Max Players

### 2.3 Rooms / Lobby

- Browse open games
- Filter capabilities (implied)
- Join existing rooms
- See player count per room

### 2.4 Spectate Mode

- Watch ongoing games
- Browse available matches
- Jump into spectate view

### 2.5 Friends & Invite System

- Friends list panel
- "Invite Friends" with copy link functionality
- Social integration for quick invites

---

## 3. Ranked System

### 3.1 Season Structure
- **Duration**: 3 months per season
- **Placement Games**: 10 games required before appearing on leaderboards
- **Reset**: Soft reset between seasons (drop 1-2 divisions)

### 3.2 Rating Mechanics
- Only 1st place gains rating
- Rating gain/loss based on opponent skill gap
- Performance history influences new season placement
- ~40 games to stabilize after season reset

### 3.3 Game Settings by Mode
| Mode | Win Points | Discard | Timer | Notes |
|------|------------|---------|-------|-------|
| 4 Players | 10 | 7 | 60s | Standard |
| 1v1 | 15 | 9 | 30s | Friendly Robber |
| C&K | 13 | 7 | 60s | Cities & Knights |

*Bank cards are hidden in all modes*

---

## 4. Monetization — Store & Memberships

### 4.1 Store Sections
| Section | Content |
|---------|---------|
| **Membership** | Premium/Elite subscription tiers |
| **Expansions** | Game expansion packs |
| **Maps** | Additional map layouts |
| **Colors** | Piece color customization |
| **Avatars** | Profile picture options |
| **Coins** | In-game currency |
| **Rewards** | Referral program |

### 4.2 Key Membership Insight
> **"Only 1 player needs a Membership"** — This means only the host (room creator) needs premium access for all players to enjoy expansions.

### 4.3 Available Expansions
- Base Game 5-6 Players
- Base Game 7-8 Players
- Cities & Knights
- Cities & Knights 5-6 Players
- Seafarers
- Seafarers 5-6 Players
- Seafarers + Cities & Knights
- Seafarers + Cities & Knights 5-6 Players

### 4.4 Coins & Legacy Packs
- Expansions/maps accessible via Premium/Elite membership
- Pre-Nov 2022 accounts can use remaining coins
- Founder packs get 0 Cc pricing on all content

---

## 5. User Personas (Identified)

### 5.1 The Learner (New Player)
- **Goal**: Understand Catan rules, play first game
- **Pain Points**: Steep learning curve, no guided onboarding
- **Needs**: Tutorial, practice mode, tooltips

### 5.2 The Drop-In (Casual Player)
- **Goal**: Quick, low-friction games
- **Pain Points**: Too many options, settings overload
- **Needs**: One-click play, smart defaults

### 5.3 The Grinder (Competitive Player)
- **Goal**: Climb rankings, improve stats
- **Pain Points**: Understanding rating system, season resets
- **Needs**: Clear rank progression, queue confidence

### 5.4 The Host (Organizer)
- **Goal**: Create rooms for friends, customize settings
- **Pain Points**: Repetitive configuration, expansion access confusion
- **Needs**: Saved presets, clear membership benefits

### 5.5 The Friend Group Player
- **Goal**: Play regularly with same people
- **Pain Points**: Invitation friction, finding each other
- **Needs**: Easy invites, friend presence, quick rematch

### 5.6 The Spectator
- **Goal**: Watch interesting games
- **Pain Points**: Finding good matches, no curation
- **Needs**: Browse/filter, featured games

---

## 6. UX Pain Points Observed

### 6.1 Navigation & Discovery
- **Mixed hierarchy**: Play/Rooms/Spectate separation unclear
- **Hidden settings**: Advanced options not discoverable
- **Mode confusion**: Bots/Casual/Ranked tab behavior

### 6.2 Onboarding Gaps
- No visible "new player" path
- Rules page exists but not integrated into flow
- Practice mode not prominently featured

### 6.3 Room Creation
- Options feel overwhelming for casual users
- Expansion/map selection unclear without membership
- No saved configurations or presets

### 6.4 Social Features
- Friend invite flow requires multiple steps
- No visible "who's online" indicator
- Rematch flow after games unclear

### 6.5 Monetization Clarity
- Membership tiers not immediately clear
- "Only host needs membership" buried in FAQ
- Value proposition requires investigation

---

## 7. What Works Well

### ✅ Strengths to Preserve
1. **Quick start option** — Play Online CTA is prominent
2. **Free-to-play core** — Basic game fully accessible
3. **Cross-platform** — Works in browser, no download
4. **Active community** — Discord, championships, blog
5. **Regular updates** — Consistent patch notes (v289)
6. **Flexible hosting** — Friend can use host's expansions
7. **Competitive depth** — Robust ranked system with seasons

---

## 8. Opportunities for Redesign

### 🎯 High Impact
1. **Guided onboarding** for new players
2. **Simplified mode selection** with progressive disclosure
3. **Clearer room creation** with smart defaults
4. **Upfront membership benefits** explanation
5. **Better social loop** (friends online, quick invite)

### 🎯 Medium Impact
1. **Spectate curation** — Featured/popular games
2. **Room presets** for hosts
3. **Tutorial integration** during first match
4. **Cleaner navigation** hierarchy

### 🎯 Polish
1. **Empty states** — No friends, no rooms
2. **Loading states** — Better skeleton screens
3. **Error handling** — Clear recovery paths

---

## 9. Technical Context

From FAQ and support documentation:
- Uses **WebGL** for graphics (troubleshooting mentioned)
- Uses **WebSockets** for real-time game sync
- Known issues: AdBlock detection, timer sync, asset loading

---

## Next Steps

1. → Define PRD with clear scope
2. → Map information architecture
3. → Design user flows
4. → Create design system foundations

---

*Document Status: Complete*  
*Cross-reference: [PRD.md](../02_strategy/PRD.md) | [IA.md](../03_ux/IA.md)*
