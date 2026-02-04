# Figma Design Prompt
## Colonist.io UX/UI Redesign

---

> **Purpose**: This prompt provides comprehensive instructions for creating the full Colonist.io redesign in Figma. It can be used as a guide for human designers or as input for Figma AI design tools.

---

## 1. Project Overview

### 1.1 What You're Creating

A complete UX/UI redesign of Colonist.io, a free online Settlers of Catan alternative. The redesign focuses on:
- Better onboarding for new players
- Simplified navigation and room creation
- Clearer membership value proposition
- Improved social features

### 1.2 Deliverables

1. **Design Tokens Page** — Colors, typography, spacing, shadows, radii
2. **Component Library** — All reusable UI components
3. **Screen Designs** — Full-fidelity screens for all key pages
4. **Prototype** — Clickable flows connecting key user journeys

### 1.3 Constraints

- Use placeholder images (no proprietary Colonist.io assets)
- Design for web (responsive: mobile, tablet, desktop)
- WCAG 2.1 AA accessibility compliance
- Modern, clean aesthetic (reference: Linear, Vercel, Notion)

---

## 2. Design Tokens

### 2.1 Create a "Tokens" Page

Create a dedicated page in Figma with the following:

#### Colors (as Local Variables with Light/Dark modes)

**Primary**:
```
primary-50:  #E8F4FD
primary-100: #C7E3FA
primary-200: #9ACEF6
primary-300: #5FB3F0
primary-400: #2D9CED
primary-500: #0D84D9  ← Primary brand color
primary-600: #0B6CB3
primary-700: #09528A
primary-800: #073A62
primary-900: #042439
```

**Secondary (Accent)**:
```
secondary-50:  #FFF8E6
secondary-500: #F5A623  ← Gold accent
secondary-900: #4A3209
```

**Neutrals**:
```
neutral-0:   #FFFFFF
neutral-50:  #F9FAFB
neutral-100: #F3F4F6
neutral-200: #E5E7EB
neutral-300: #D1D5DB
neutral-400: #9CA3AF
neutral-500: #6B7280
neutral-600: #4B5563
neutral-700: #374151
neutral-800: #1F2937
neutral-900: #111827
neutral-950: #030712
```

**Semantic**:
```
success-500: #10B981
warning-500: #F59E0B
error-500:   #EF4444
info-500:    #3B82F6
```

#### Typography (as Text Styles)

**Font**: Inter (from Google Fonts)

| Style Name | Size | Weight | Line Height |
|------------|------|--------|-------------|
| Heading/H1 | 36px | Bold | 1.25 |
| Heading/H2 | 30px | Bold | 1.25 |
| Heading/H3 | 24px | SemiBold | 1.3 |
| Heading/H4 | 20px | SemiBold | 1.4 |
| Heading/H5 | 18px | SemiBold | 1.4 |
| Heading/H6 | 16px | SemiBold | 1.5 |
| Body/Large | 18px | Regular | 1.6 |
| Body/Base | 16px | Regular | 1.5 |
| Body/Small | 14px | Regular | 1.5 |
| Label | 14px | Medium | 1.4 |
| Caption | 12px | Regular | 1.4 |

#### Spacing Scale

```
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px
```

#### Border Radius

```
sm: 2px
md: 6px
lg: 8px
xl: 12px
2xl: 16px
full: 9999px
```

#### Shadows (as Effect Styles)

```
Shadow/SM:  0 1px 2px rgba(0,0,0,0.05)
Shadow/MD:  0 4px 6px rgba(0,0,0,0.1)
Shadow/LG:  0 10px 15px rgba(0,0,0,0.1)
Shadow/XL:  0 20px 25px rgba(0,0,0,0.1)
Shadow/Focus: 0 0 0 3px rgba(13,132,217,0.4)
```

---

## 3. Component Library

### 3.1 Create a "Components" Page

Build the following components as Figma components with variants:

#### Navigation

**TopNav**
- Variants: Desktop, Mobile
- Contains: Logo, nav items, user controls
- States: Default, logged-in, logged-out

**BottomTabBar** (mobile)
- 5 tabs: Play, Ranked, Spectate, Store, Profile
- States: Each tab active/inactive

**SideDrawer** (mobile menu)
- Full-height, slides from left
- Contains: User info, all nav items, logout

#### Buttons

**Button**
- Variants: Primary, Secondary, Ghost, Destructive
- Sizes: Small (32px), Medium (40px), Large (48px)
- States: Default, Hover, Active, Focus, Disabled, Loading

**IconButton**
- Sizes: Small, Medium, Large
- States: Same as Button

#### Forms

**Input**
- States: Default, Hover, Focus, Error, Disabled
- Variants: With/without icon, with/without helper text

**Select**
- States: Default, Open, Disabled
- Include dropdown panel

**Checkbox**
- States: Unchecked, Checked, Indeterminate, Disabled

**Toggle**
- States: Off, On, Disabled

#### Display

**Card**
- Variants: Default, Interactive (hover state), Selected

**RoomCard**
- Content: Mode icon, settings chips, player count, join button
- States: Default, Hover, Full

**Avatar**
- Sizes: XS (24px), SM (32px), MD (40px), LG (56px), XL (80px)
- Variants: Image, Initials, Placeholder
- Optional: Online status indicator

**Badge**
- Variants: Count, Status (success/warning/error), Label

**Chip**
- Variants: Static, Selectable (selected/unselected), Removable

**RatingBadge**
- Shows: Division icon + rating number
- Divisions: Bronze, Silver, Gold, Platinum, Diamond

#### Feedback

**Toast**
- Variants: Success, Error, Warning, Info
- Contains: Icon, message, optional close button

**Modal**
- Sizes: Small (400px), Medium (520px), Large (640px)
- Contains: Header, content, footer with actions

**Skeleton**
- Variants: Text (various widths), Circle, Rectangle

**EmptyState**
- Contains: Illustration placeholder, headline, body, CTA

#### Game-Specific

**GameModePicker**
- Card-based: Base Game, Cities & Knights, Seafarers
- Shows: Lock icon for membership-only

**MapPicker**
- Thumbnail grid
- Shows: Map name, player count

**PlayerSlot**
- Variants: Filled, Empty/Waiting
- Shows: Avatar, name, rating, ready status

**InvitePanel**
- Contains: Copy link, friends list, share buttons

**Stepper**
- Shows: Step indicators with labels
- States: Completed, Current, Upcoming

---

## 4. Screen Designs

### 4.1 Create Pages for Each Breakpoint

- **Mobile** (375px width)
- **Tablet** (768px width)
- **Desktop** (1440px width)

### 4.2 Screens to Design

#### 4.2.1 Homepage (Logged Out)

**Desktop Layout**:
```
[TopNav: Logo | Play Ranked Spectate Store | Login]

[Hero Section]
  "#1 Free Settlers of Catan Alternative"
  🎲 Illustration placeholder
  [Play Online] [Play with Friends]
  
  "New to Catan? Learn in 3 minutes →"

[Features Section]
  🎮 Play Free | 🏆 Ranked | 👥 Friends | 📺 Spectate

[Social Proof]
  "Join millions of players worldwide"

[Footer]
```

**Mobile**: Stacked layout, bottom tabs instead of top nav

---

#### 4.2.2 Homepage (Logged In)

**Desktop Layout**:
```
[TopNav: Logo | Play Ranked Spectate Store | 🔔 👤 Username ▼]

[Welcome Section]
  "Welcome back, {username}"
  [Quick Play] [Create Room] [Join Room]

[Two Column]
  [Friends Online]          [Recent Games]
  ● Friend1 - In Game      Win vs Bot
  ● Friend2 - Online       2nd - Ranked
  [Invite]                 [View All]

[Quick Access]
  📺 Spectate | 🏆 Leaderboards | 🛒 Store

[Footer]
```

---

#### 4.2.3 Create Room Wizard

**Step 1: Game Mode**
```
[Header: Create Room | Close ×]
[Progress: ●━━○━━━○ Step 1 of 3]

"Select Game Mode"

[Mode Cards - 3 across]
  [Base Game ✓]  [C&K 🔒]  [Seafarers 🔒]
  
🔒 = Requires Membership
"Only host needs membership for friends"

[Use Defaults & Create]  [Next →]
```

**Step 2: Map**
```
[Progress: ●━━●━━━○ Step 2 of 3]

"Select Map"

[Map Grid - thumbnails]
  [Standard ✓] [Balanced] [Desert] [River]
  
[← Back]  [Next →]
```

**Step 3: Rules**
```
[Progress: ●━━●━━━● Step 3 of 3]

"Game Rules"

Points to Win:  [10 ▼]
Turn Timer:     [60s ▼]
Max Players:    [4 ▼]

▼ Advanced Settings
  □ Friendly Robber
  □ Speed Mode
  □ Private Room

[← Back]  [Create Room]
```

---

#### 4.2.4 Room Lobby

```
[Header: Room ABC123 | ⚙️ | Leave]

[Two Column]
  [Players 2/4]              [Chat]
  [👤 You (Host)]           Messages...
  [👤 Friend1]              [Type message]
  [⊕ Waiting...]
  [⊕ Waiting...]

[Settings Summary]
  Base Game • Standard Map • 60s Timer

[Invite Bar]
  [🔗 Copy Link]  [👥 Invite Friends]

[Start Game] (disabled until enough players)
```

---

#### 4.2.5 Invite Friends Modal

```
[Modal: Invite Friends | ×]

Share Link
[https://colonist.io/r/ABC123] [Copy]

─────────────────────────────

Invite from Friends List
● Friend1 - Online      [Invite]
● Friend2 - In Game     [Invite]
○ Friend3 - Offline     [Invite]

─────────────────────────────

Share via
[Discord] [Twitter] [WhatsApp]
```

---

#### 4.2.6 Room Browser

```
[Header: Join a Room | Create Room +]

[Filter Bar]
  [All Modes ▼] [Any Players ▼] [Any Timer ▼]

[Room Cards - list]
  ┌────────────────────────────────────┐
  │ 🎮 Base Game • Standard • 60s     │
  │ 👥 3/4 • Host: Player1            │
  │                          [Join →] │
  └────────────────────────────────────┘
  
  [More rooms...]

[Load More]
```

---

#### 4.2.7 Ranked Hub

```
[Header: Ranked]

[Rating Card]
  🏆 GOLD III
  Rating: 1,247
  Season 12 • 45 days left
  ━━━━━━━━━━░░░ 67% to Gold II

[Queue Options - 3 cards]
  [4 Players]  [1v1]  [C&K]
  
[Join Queue - 4 Players]
Est. wait: ~30 seconds

[Leaderboard Preview]
  1. PlayerA - 2,104
  2. PlayerB - 2,087
  3. PlayerC - 2,051
  [View Full →]
```

---

#### 4.2.8 Membership Page

```
[Header: Membership]

[Hero Banner]
  🎁 "Only 1 player needs Membership
      to unlock content for everyone"

[Tier Comparison - 3 columns]
  ┌─────────┬─────────┬─────────┐
  │  FREE   │ PREMIUM │  ELITE  │
  │   $0    │  $5/mo  │  $10/mo │
  ├─────────┼─────────┼─────────┤
  │ Base ✓  │ Base ✓  │ Base ✓  │
  │         │ C&K ✓   │ C&K ✓   │
  │         │ Seafar ✓│ Seafar ✓│
  │         │ Maps ✓  │ Maps ✓  │
  │         │         │ Colors ✓│
  │         │         │Priority!│
  ├─────────┼─────────┼─────────┤
  │[Playing]│[Upgrade]│[Upgrade]│
  └─────────┴─────────┴─────────┘

[FAQ Accordion]
  ▶ Do my friends need membership?
  ▶ Can I try expansions first?
  ▶ How do I cancel?
```

---

#### 4.2.9 Onboarding Welcome

```
[Full screen - no nav]

Welcome to Colonist 🎲

The #1 free Settlers of Catan alternative.
Build, trade, and settle your way to victory!

[Illustration placeholder]

[New to Catan? Start Here]
[I Know How to Play →]
```

---

### 4.3 Additional Screens

Design these with less detail:

- **Spectate Browser** — Similar to Room Browser layout
- **Profile Page** — Avatar, stats, achievements
- **Settings** — Form-based settings page
- **Leaderboards** — Table of rankings
- **Matchmaking State** — Loading modal with cancel option
- **Post-Game Results** — Winner, ratings change, action buttons

---

## 5. Prototype

### 5.1 Flows to Connect

Create clickable prototypes for these key flows:

#### Flow 1: New User → First Game
```
Homepage (Logged Out) 
  → "New to Catan?" 
  → Onboarding Welcome 
  → (Skip to) Quick Play 
  → Matchmaking Modal
```

#### Flow 2: Create Room → Invite → Start
```
Homepage (Logged In)
  → Create Room
  → Step 1: Mode
  → Step 2: Map
  → Step 3: Rules
  → Room Lobby
  → Invite Modal
  → (Close modal)
  → Start Game
```

#### Flow 3: Join Room
```
Homepage
  → Room Browser
  → (Click room card)
  → Room Lobby
```

#### Flow 4: Ranked Queue
```
Homepage
  → Ranked Hub
  → Select 4P
  → Join Queue
  → Matchmaking Modal
```

#### Flow 5: Explore Membership
```
Homepage
  → Store (nav)
  → Membership Page
  → (Expand FAQ items)
```

### 5.2 Prototype Settings

- **Device**: Desktop (1440×900)
- **Transition**: Smart animate, 200ms
- **Start Point**: Homepage Logged Out

---

## 6. Design Guidelines

### 6.1 Visual Style

- **Aesthetic**: Clean, modern, SaaS-inspired
- **Mood**: Friendly but professional, game-focused but not childish
- **Reference**: Linear, Vercel, Notion, chess.com

### 6.2 Do's

✅ Use consistent spacing (8px grid)  
✅ Maintain visual hierarchy  
✅ Use icons from Lucide set  
✅ Include all interactive states  
✅ Design for accessibility (contrast, focus)  
✅ Use realistic content (no lorem ipsum)  

### 6.3 Don'ts

❌ Don't copy Colonist.io's actual assets  
❌ Don't use more than 2-3 accent colors  
❌ Don't make touch targets smaller than 44px  
❌ Don't forget mobile responsiveness  
❌ Don't skip error/empty/loading states  

---

## 7. Handoff Preparation

### 7.1 Organize Layers

- Name all layers descriptively
- Group related elements
- Use auto-layout for responsive elements
- Mark layers for export where needed

### 7.2 Add Annotations

For developers, annotate:
- Spacing values
- Interaction behaviors
- Animation specs
- Responsive breakpoints

### 7.3 Export Assets

Prepare for export:
- Icons (SVG)
- Illustrations (SVG or PNG @2x)
- Favicons (multiple sizes)

---

## 8. Checklist

Before finalizing:

- [ ] All design tokens created as variables/styles
- [ ] All components have required variants
- [ ] All Priority 1 screens designed (3 breakpoints)
- [ ] Prototype covers 5 main flows
- [ ] All screens pass contrast checker
- [ ] Layers organized and named
- [ ] Real content (no placeholder text)
- [ ] Exported assets prepared

---

*Document Status: Complete*  
*Cross-reference: [DESIGN_DOC.md](../04_ui/DESIGN_DOC.md) | [DESIGN_SYSTEM.md](../04_ui/DESIGN_SYSTEM.md) | [WIREFRAMES_PLAN.md](../03_ux/WIREFRAMES_PLAN.md)*
