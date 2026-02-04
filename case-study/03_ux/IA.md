# Information Architecture
## Colonist.io Redesign

---

## 1. Current vs Proposed IA

### 1.1 Current State (Observed)

```
colonist.io
├── Play (home)
│   ├── Bots / Casual / Ranked tabs
│   └── Create Room (modal)
├── Rooms (lobby)
├── Leaderboards
├── Store
│   ├── Membership
│   ├── Expansions
│   ├── Maps
│   ├── Colors
│   ├── Avatars
│   ├── Coins
│   └── Rewards
├── Profile
├── Rules
├── FAQ
├── About
├── Careers
├── Community
├── Blog
└── Privacy
```

**Issues Identified**:
- Play and Rooms separation is confusing
- Spectate is not a top-level item
- No clear onboarding path
- Ranked is a tab, not discoverable

---

### 1.2 Proposed IA

```
colonist.io
│
├── 🏠 HOME
│   ├── Quick Play CTA
│   ├── New to Catan? (onboarding entry)
│   ├── Active friend games
│   └── Featured content
│
├── 🎮 PLAY
│   ├── Quick Play (auto-match)
│   ├── Create Room
│   │   ├── Game Mode (Base, C&K, Seafarers)
│   │   ├── Map Selection
│   │   ├── Rules Configuration
│   │   └── Advanced Settings
│   ├── Join Room (browse)
│   └── Practice (vs Bots)
│
├── 🏆 RANKED
│   ├── Queue (4P, 1v1, C&K)
│   ├── My Rating & Progress
│   ├── Season Info
│   └── Leaderboards
│
├── 👁️ SPECTATE
│   ├── Live Games
│   ├── Featured Matches
│   └── Friends' Games
│
├── 👥 SOCIAL
│   ├── Friends List
│   ├── Online Now
│   ├── Pending Invites
│   └── Recent Players
│
├── 🛒 STORE
│   ├── Membership (comparison)
│   ├── Expansions
│   ├── Maps
│   ├── Cosmetics (Colors, Avatars)
│   └── Coins & Rewards
│
├── 👤 PROFILE
│   ├── Stats & History
│   ├── Achievements
│   ├── Settings
│   └── Account
│
└── ℹ️ HELP
    ├── Rules
    ├── FAQ
    ├── Community
    └── About
```

---

## 2. Navigation Design

### 2.1 Primary Navigation (Desktop)

| Position | Items |
|----------|-------|
| **Left** | Logo (home link) |
| **Center** | Play, Ranked, Spectate, Store |
| **Right** | Friends, Notifications, Profile |

### 2.2 Primary Navigation (Mobile)

**Header**:
- Logo (left)
- Notifications + Profile (right)

**Bottom Tab Bar**:
- Play (home)
- Ranked
- Spectate
- Store
- Profile

**Side Drawer** (hamburger):
- All navigation items
- Help section
- Settings
- Logout

---

## 3. Page Hierarchy

### 3.1 Depth Levels

| Level | Example | Max Clicks from Home |
|-------|---------|---------------------|
| L0 | Home | 0 |
| L1 | Play, Ranked, Spectate, Store, Profile | 1 |
| L2 | Create Room, Queue, Live Games, Membership | 2 |
| L3 | Room Settings, Payment, Stats Detail | 3 |

**Rule**: No essential action should be deeper than L2

---

### 3.2 Page Inventory

| Page | Level | Purpose |
|------|-------|---------|
| **Home** | L0 | Entry, quick actions, featured content |
| **Play** | L1 | Mode selection hub |
| **Create Room** | L2 | Wizard for room setup |
| **Room Lobby** | L2 | Waiting room before game |
| **Game** | L2 | In-game experience |
| **Ranked Hub** | L1 | Queue + rating + leaderboards |
| **Leaderboards** | L2 | Full ranking views |
| **Spectate** | L1 | Browse live games |
| **Watch Game** | L2 | Spectate mode view |
| **Store Landing** | L1 | Store categories |
| **Membership** | L2 | Tier comparison + purchase |
| **Expansion Detail** | L3 | Individual expansion info |
| **Profile** | L1 | Stats, settings, account |
| **Settings** | L2 | User preferences |
| **Friends** | L1/Modal | Friends list + invites |
| **Onboarding** | L2 | New player flow |
| **Rules** | L2 | Game rules reference |
| **FAQ** | L2 | Help content |

---

## 4. Navigation Patterns

### 4.1 Global Navigation (Always Visible)

**Contents**:
- Primary nav (Play, Ranked, Spectate, Store)
- User controls (Friends, Notifications, Profile)
- Contextual actions (based on current page)

**Behavior**:
- Sticky on desktop
- Collapsible on scroll (mobile)
- Consistent across all pages

### 4.2 Local Navigation

**When Used**: Within sections with multiple sub-pages

**Examples**:
- Store: tabs (Membership, Expansions, Maps, Cosmetics)
- Profile: tabs (Stats, Achievements, Settings)
- Ranked: tabs (Queue, My Rating, Leaderboards)

### 4.3 Contextual Navigation

**When Used**: Actions relevant to current context

**Examples**:
- Room Lobby: Invite, Settings, Leave
- Game: Spectate, Resign, Settings
- Profile Viewing: Add Friend, Report, Block

---

## 5. User Flows by Entry Point

### 5.1 New User (First Visit)

```
Landing (Home)
    ↓
See "New to Catan?" prompt
    ↓
[Learn] → Tutorial → Practice → First Match
[Quick Play] → Auto-match → Game
[Skip] → Full home experience
```

### 5.2 Returning User (Play Intent)

```
Landing (Home)
    ↓
[Quick Play] → Match found → Game
    OR
[Create Room] → Wizard → Invite → Start
    OR
[Join Room] → Browse → Select → Join
```

### 5.3 Competitive User (Ranked Intent)

```
Landing (Home)
    ↓
Nav: Ranked
    ↓
Select mode (4P, 1v1, C&K) → Queue → Match → Game
```

### 5.4 Social User (Play with Friends)

```
Landing (Home)
    ↓
[Play with Friends] OR [Friends Panel]
    ↓
Create Room → Invite Friends → Wait → Start
    OR
See friend's room → Join → Play
```

---

## 6. Search & Discovery

### 6.1 Search Functionality

| Context | Searchable Content |
|---------|-------------------|
| Rooms | Game mode, map, player count, host |
| Friends | Username |
| Spectate | Game mode, players |
| Store | Expansions, maps, cosmetics |
| Help | FAQ, rules |

### 6.2 Filter Patterns

**Rooms Browser**:
- Game Mode (Base, C&K, Seafarers)
- Map Type
- Player Count (3, 4, 5-6)
- Timer Length
- Skill Level (if ranked)

**Spectate**:
- Game Mode
- Skill Level
- Friends' Games

**Store**:
- Category
- Owned/Not Owned
- Included in Membership

---

## 7. Entry Points Optimization

### 7.1 Quick Actions from Home

| Action | Current Clicks | Target Clicks |
|--------|---------------|---------------|
| Quick Play | 1-2 | 1 |
| Create Room | 2 | 1 |
| Join Ranked | 2-3 | 2 |
| Invite Friend | 3-4 | 2 |
| View Membership | 3 | 2 |

### 7.2 Contextual Entry Points

| Context | Available Actions |
|---------|------------------|
| After Game | Rematch, New Game, View Stats |
| Friend Online | Invite to Room, Join Their Game |
| New Season | View Changes, Start Placement |
| Membership Expiring | Renew, Compare Plans |

---

## 8. URL Structure

```
colonist.io/                    → Home
colonist.io/play               → Play hub
colonist.io/play/create        → Create room wizard
colonist.io/room/:id           → Room lobby
colonist.io/game/:id           → Active game
colonist.io/ranked             → Ranked hub
colonist.io/ranked/leaderboards → Full leaderboards
colonist.io/spectate           → Spectate browser
colonist.io/spectate/:id       → Watch game
colonist.io/store              → Store landing
colonist.io/store/membership   → Membership page
colonist.io/profile            → Own profile
colonist.io/profile/:username  → Other user profile
colonist.io/settings           → User settings
colonist.io/learn              → Onboarding/tutorial
colonist.io/rules              → Game rules
colonist.io/faq                → FAQ
colonist.io/about              → About us
```

---

## 9. IA Validation Criteria

| Criterion | Target |
|-----------|--------|
| Any play action reachable in ≤2 clicks | ✓ Pass |
| New user path clearly visible | ✓ Pass |
| No more than 6 primary nav items | ✓ Pass |
| Mobile nav matches desktop hierarchy | ✓ Pass |
| Search/filter available where needed | ✓ Pass |
| Consistent back/breadcrumb navigation | ✓ Pass |

---

*Document Status: Complete*  
*Cross-reference: [USER_FLOWS.md](./USER_FLOWS.md) | [WIREFRAMES_PLAN.md](./WIREFRAMES_PLAN.md)*
