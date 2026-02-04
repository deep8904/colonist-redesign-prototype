# User Flows
## Colonist.io Redesign

---

## 1. Flow Notation

```
[Page/State]     → Screen or state
─────────────    → Transition
{Decision}       → User choice
(System Action)  → Background action
<Component>      → UI element
```

---

## 2. Core Flows

### 2.1 First-Time User → First Match

**Goal**: Get new users playing their first game with minimal friction

**Entry**: Direct link or organic landing on homepage

```
[Homepage - Logged Out]
    │
    ├── See hero section: "#1 Free Settlers of Catan Alternative"
    ├── Primary CTAs: "Play Online" | "Play with Friends"
    ├── Subtle prompt: "New to Catan?"
    │
    │   {User clicks "New to Catan?"}
    │   ↓
    │   [Onboarding: Welcome]
    │       │
    │       ├── "Learn the basics in 3 minutes"
    │       ├── Quick video or interactive explainer
    │       │
    │       <Next>
    │       ↓
    │   [Onboarding: Core Concepts]
    │       │
    │       ├── Resources (Wood, Brick, Sheep, Wheat, Ore)
    │       ├── Buildings (Roads, Settlements, Cities)
    │       ├── Victory points
    │       │
    │       <Try it out>
    │       ↓
    │   [Practice Match vs Bot]
    │       │
    │       ├── Guided tooltips during play
    │       ├── Simplified 5-point game
    │       │
    │       (Game ends)
    │       ↓
    │   [Onboarding: Complete]
    │       │
    │       ├── "Nice! You're ready to play"
    │       ├── <Play Online> | <Create Room with Friends>
    │       │
    │       ↓
    │   [First Real Match]
    │
    │   {User clicks "Play Online" directly}
    │   ↓
    │   [Game Mode Selection]
    │       │
    │       ├── Quick Play (auto-match)
    │       ├── Casual (join room)
    │       ├── vs Bots (practice)
    │       │
    │       {Quick Play}
    │       ↓
    │   [Matchmaking]
    │       │
    │       ├── Searching for players...
    │       ├── ~30 second wait
    │       │
    │       (Match found)
    │       ↓
    │   [Game Lobby - Brief]
    │       │
    │       ├── See other players
    │       ├── 5-second countdown
    │       │
    │       ↓
    │   [Game Board]

```

**Key Improvements**:
- Clear "New to Catan?" entry point
- Interactive tutorial, not wall of text
- Guided first game with tooltips
- Quick play is truly one-click

---

### 2.2 Returning User → Quick Play

**Goal**: Fastest path from landing to playing

**Entry**: Homepage (logged in)

```
[Homepage - Logged In]
    │
    ├── Welcome back, {username}
    ├── <Quick Play> button (prominent)
    ├── Recent game history
    ├── Friends online
    │
    {Click Quick Play}
    ↓
[Matchmaking]
    │
    ├── "Finding players..."
    ├── Estimated wait time
    ├── <Cancel> option
    │
    (Match found)
    ↓
[Pre-Game Lobby]
    │
    ├── Player avatars + ratings
    ├── Map preview
    ├── 5-second countdown
    │
    ↓
[Game Board]
```

**Time Target**: < 60 seconds from click to game start

---

### 2.3 Host → Create Room → Invite → Start

**Goal**: Easy room creation with friend invites

**Entry**: Homepage or Play section

```
[Homepage / Play]
    │
    {Click "Create Room" or "Play with Friends"}
    ↓
[Create Room: Step 1 - Game Mode]
    │
    ├── Base Game (default selected)
    ├── Cities & Knights
    ├── Seafarers
    ├── Combined expansions
    │
    ├── (Membership-only options clearly marked)
    │
    <Next> / <Use Defaults & Create>
    ↓
[Create Room: Step 2 - Map]
    │
    ├── Default Map (selected)
    ├── Map thumbnails by category
    ├── Player count indicator per map
    │
    <Next> / <Back>
    ↓
[Create Room: Step 3 - Rules]
    │
    ├── Points to Win: 10 (default)
    ├── Turn Timer: 60s (default)
    ├── Discard Limit: 7 (default)
    │
    ├── <Show Advanced Settings>
    │   ├── Friendly Robber
    │   ├── Speed Mode
    │   ├── Private Room toggle
    │   └── Password (if private)
    │
    <Create Room>
    ↓
[Room Lobby]
    │
    ├── Room code displayed
    ├── Players list (1/{max})
    ├── Settings summary
    │
    ├── <Invite Friends> (opens modal)
    │   ├── Copy link
    │   ├── Friends list (quick invite)
    │   └── Share buttons
    │
    ├── Chat panel
    │
    (Friends join)
    ↓
[Room Lobby - Players Joined]
    │
    ├── All players visible
    ├── Ready status
    │
    <Start Game> (active when min players)
    ↓
[Game Board]
```

**Key Improvements**:
- Step-by-step wizard with progress
- "Use Defaults" shortcut for quick creation
- Invite modal with multiple options
- Copy link is one-click

---

### 2.4 User → Browse Rooms → Join

**Goal**: Find and join an open game easily

**Entry**: Rooms section

```
[Play / Rooms]
    │
    {Click "Join Room" or navigate to Rooms}
    ↓
[Room Browser]
    │
    ├── Active filters bar
    │   ├── Game Mode: All / Base / C&K / Seafarers
    │   ├── Players: Any / 3 / 4 / 5+
    │   ├── Skill: Any / Beginner / Intermediate / Expert
    │   └── Timer: Any / Slow / Standard / Fast
    │
    ├── Room cards list
    │   ├── Mode + Map icons
    │   ├── Players: 2/4
    │   ├── Timer: 60s
    │   ├── Host name
    │   └── <Join> button
    │
    {Click room card}
    ↓
[Room Preview Modal]
    │
    ├── Full settings display
    ├── Current players
    ├── Map preview
    │
    <Join Room> / <Back to Browse>
    ↓
[Room Lobby]
    │
    ├── You've joined the room
    ├── Wait for host to start
    │
    (Host starts)
    ↓
[Game Board]
```

**Key Improvements**:
- Filters are visible and easy to use
- Room cards show essential info
- Preview before committing to join

---

### 2.5 User → Ranked Queue

**Goal**: Join competitive matchmaking with confidence

**Entry**: Ranked section in navigation

```
[Homepage / Any Page]
    │
    {Nav: Ranked}
    ↓
[Ranked Hub]
    │
    ├── Current Rating display
    │   ├── Division badge
    │   ├── Rating number
    │   └── Season progress
    │
    ├── Queue Options
    │   ├── 4 Players (standard)
    │   ├── 1v1
    │   └── Cities & Knights
    │
    ├── Leaderboard preview
    │
    {Select queue type}
    │
    <Join Queue>
    ↓
[Matchmaking - Ranked]
    │
    ├── "Finding match..."
    ├── Estimated wait
    ├── Rating range searching
    │
    ├── <Cancel Queue>
    │
    (Match found)
    ↓
[Pre-Game Lobby - Ranked]
    │
    ├── Opponent ratings visible
    ├── Rating change preview (+/- points)
    ├── Map revealed
    │
    ├── 10-second countdown (no cancel)
    │
    ↓
[Ranked Game]
    │
    (Game completes)
    ↓
[Post-Game Screen]
    │
    ├── Results: 1st / 2nd / 3rd / 4th
    ├── Rating change: +15 / -8
    ├── New rating and division
    │
    <Play Again> / <View Stats> / <Home>
```

**Key Improvements**:
- Rating and division clearly displayed
- Queue type selection is simple
- Rating change preview before game
- Clear post-game rating update

---

### 2.6 User → Spectate Game

**Goal**: Find and watch interesting games

**Entry**: Spectate section

```
[Any Page]
    │
    {Nav: Spectate}
    ↓
[Spectate Browser]
    │
    ├── Featured game (top)
    ├── Live games list
    │   ├── Filter by mode
    │   ├── Filter by skill level
    │   ├── Friends' games highlighted
    │
    ├── Game card info
    │   ├── Players + ratings
    │   ├── Game progress (turns)
    │   ├── Mode + Map
    │
    {Click game}
    ↓
[Spectate View]
    │
    ├── Full game board visible
    ├── All player hands hidden (fair spectating)
    ├── Turn indicator
    ├── Action log
    │
    ├── Spectator count
    ├── Chat (spectator chat)
    │
    <Exit Spectate>
    ↓
[Spectate Browser]
```

---

### 2.7 User → Understand Membership

**Goal**: Clearly communicate membership value

**Entry**: Store or contextual prompts

```
[Any Page]
    │
    {Nav: Store or see membership prompt}
    ↓
[Store Landing]
    │
    ├── Membership section (prominent)
    ├── Expansions teaser
    ├── Cosmetics browse
    │
    {Click Membership}
    ↓
[Membership Page]
    │
    ├── Hero: "Only 1 player needs Membership"
    │
    ├── Tier comparison table
    │   ├── Free
    │   │   └── Base game, casual play
    │   ├── Premium ($X/mo)
    │   │   └── Expansions, maps, colors
    │   └── Elite ($X/mo)
    │       └── All above + exclusives
    │
    ├── FAQ accordion
    │   ├── "Do my friends need membership?"
    │   ├── "Can I try expansions first?"
    │   └── "How do I cancel?"
    │
    <Choose Premium> / <Choose Elite>
    ↓
[Checkout]
    │
    ├── Plan summary
    ├── Payment method
    ├── Confirm
    │
    ↓
[Confirmation]
    │
    ├── "Welcome to {tier}!"
    ├── What you can do now
    │
    <Start Playing>
```

**Key Improvements**:
- "Only host needs membership" is the hero message
- Clear tier comparison
- Common questions answered inline

---

## 3. Secondary Flows

### 3.1 Account Creation

```
[Login Prompt]
    ├── Sign up with Google
    ├── Sign up with Email
    └── Continue as Guest

{Email signup}
    ↓
[Create Account]
    ├── Email
    ├── Username
    ├── Password
    └── <Create Account>
    ↓
[Verification Email]
    ↓
[Welcome Screen]
    └── Proceed to onboarding or home
```

### 3.2 Friend Invitation (External)

```
[User copies invite link]
    ↓
[Friend opens link]
    ↓
[Join Room Page]
    ├── Room info
    ├── Login/signup prompt if needed
    └── <Join Room>
    ↓
[Room Lobby - Joined]
```

### 3.3 Post-Game Actions

```
[Game Ends]
    ↓
[Results Screen]
    ├── Winner announcement
    ├── Final scores
    ├── Stats summary
    │
    ├── <Rematch> (same players, same settings)
    ├── <New Game> (return to create/join)
    ├── <View Full Stats>
    └── <Home>
```

---

## 4. Error & Edge Case Flows

### 4.1 Room Full

```
[Room Browser]
    │
    {Click Join on full room}
    ↓
[Error Toast]
    │
    ├── "This room is full"
    ├── <Browse other rooms>
    │
    ↓
[Room Browser] (refreshed)
```

### 4.2 Disconnection During Game

```
[Active Game]
    │
    (Connection lost)
    ↓
[Reconnection Modal]
    │
    ├── "Connection lost"
    ├── "Attempting to reconnect..."
    ├── Progress indicator
    │
    {Reconnected}
    ↓
[Game - Resumed]

    {Failed to reconnect}
    ↓
[Error Screen]
    ├── "Unable to reconnect"
    ├── <Try Again>
    └── <Return Home>
```

### 4.3 Matchmaking Timeout

```
[Matchmaking]
    │
    (No match after 3 minutes)
    ↓
[Timeout Notification]
    │
    ├── "No matches found"
    ├── "Try again or browse rooms"
    │
    <Retry> / <Browse Rooms>
```

---

## 5. Flow Metrics

| Flow | Steps (Current Est.) | Steps (Target) | Time (Target) |
|------|---------------------|----------------|---------------|
| First game (new user) | 5-8 | 3-4 | < 2 min |
| Quick play (returning) | 2-3 | 2 | < 1 min |
| Create room + invite | 6-8 | 4-5 | < 2 min |
| Join room | 3-4 | 2-3 | < 30 sec |
| Ranked queue | 3-4 | 2-3 | < 1 min |
| Spectate | 2-3 | 2 | < 30 sec |

---

*Document Status: Complete*  
*Cross-reference: [IA.md](./IA.md) | [WIREFRAMES_PLAN.md](./WIREFRAMES_PLAN.md)*
