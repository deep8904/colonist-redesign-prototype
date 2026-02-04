# Content & Microcopy Guidelines
## Colonist.io Redesign

---

## 1. Voice & Tone

### 1.1 Brand Voice

| Attribute | Description | Example |
|-----------|-------------|---------|
| **Friendly** | Like a helpful friend who knows the game | "Let's set up your room" not "Configure room parameters" |
| **Clear** | Say what you mean, avoid jargon | "Start Game" not "Initialize Match" |
| **Encouraging** | Support users, especially beginners | "Nice! You're ready to play" |
| **Confident** | Provide guidance without hesitation | "Select a game mode" not "You might want to choose..." |

### 1.2 Tone Variations

| Context | Tone | Example |
|---------|------|---------|
| Onboarding | Warm, welcoming | "Welcome! Let's get you playing in no time" |
| Actions | Direct, clear | "Create Room" |
| Errors | Helpful, solution-focused | "Connection lost. Reconnecting..." |
| Celebration | Excited, brief | "Victory! 🏆" |
| Waiting | Patient, informative | "Finding players... Usually takes 30 seconds" |

---

## 2. Writing Principles

### 2.1 Be Concise
- Lead with the most important information
- Use short sentences
- Avoid redundancy

```
❌ "Click on the button below in order to start a new game"
✓  "Start Game"
```

### 2.2 Use Active Voice
- Make it clear who's doing what
- More engaging and direct

```
❌ "Your room has been created"
✓  "Room created"
```

### 2.3 Talk Like a Person
- Use contractions
- Avoid corporate speak
- Write how you'd speak

```
❌ "It is recommended that users configure their settings prior to gameplay"
✓  "Set up your preferences before playing"
```

### 2.4 Focus on the User
- Use "you" and "your"
- Make the user the hero

```
❌ "Players can invite friends to rooms"
✓  "Invite your friends to join"
```

---

## 3. UI Copy by Component

### 3.1 Buttons & CTAs

| Context | Copy | Avoid |
|---------|------|-------|
| Primary play action | "Play Now" | "Start" |
| Quick match | "Quick Play" | "Find Match" |
| Room creation | "Create Room" | "New Room" |
| Join action | "Join" | "Enter" |
| Continue flow | "Next" or "Continue" | "Proceed" |
| Complete flow | "Done" or "Create Room" | "Submit" |
| Cancel | "Cancel" | "Abort" |
| Confirmation | "Yes, leave" | "Confirm" |

**Button Writing Rules**:
- Start with a verb
- Be specific about the action
- Keep to 2-3 words max
- Use Title Case

### 3.2 Navigation Labels

| Section | Label |
|---------|-------|
| Home/Play | "Play" |
| Rankings | "Ranked" |
| Watch games | "Spectate" |
| Shop | "Store" |
| User profile | "Profile" |
| Help | "Help" |

**Navigation Rules**:
- One word when possible
- Consistent capitalization
- Describe the destination, not the action

### 3.3 Headers & Titles

| Page | Title | Subtitle (optional) |
|------|-------|---------------------|
| Homepage | — | "#1 Free Settlers of Catan Alternative" |
| Create Room | "Create a Room" | — |
| Room Browser | "Join a Room" | "Find a game to join" |
| Ranked | "Ranked" | "Compete for the top" |
| Spectate | "Watch Games" | "Learn from the best" |
| Store | "Store" | — |
| Membership | "Membership" | "Unlock expansions and more" |

### 3.4 Form Labels & Hints

| Field | Label | Placeholder | Hint |
|-------|-------|-------------|------|
| Username | "Username" | "Choose a username" | "3-16 characters, letters and numbers" |
| Email | "Email" | "your@email.com" | — |
| Password | "Password" | "Enter password" | "At least 8 characters" |
| Search rooms | — | "Search rooms..." | — |
| Room name | "Room Name" | "My Game Room" | "Optional" |

---

## 4. Empty States

### 4.1 Pattern

```
[Illustration or Icon]

Headline (what's missing)
Supporting text (why + action)

[Primary CTA]
```

### 4.2 Examples

| State | Headline | Supporting | CTA |
|-------|----------|------------|-----|
| No rooms | "No rooms available" | "Be the first to create one!" | "Create Room" |
| No friends online | "No friends online" | "Invite someone to play" | "Send Invite" |
| No search results | "No matches found" | "Try adjusting your filters" | "Clear Filters" |
| No games (spectate) | "No live games" | "Check back soon or start your own" | "Play Now" |
| No notifications | "You're all caught up" | — | — |

---

## 5. Error Messages

### 5.1 Pattern

```
What went wrong + What to do
```

### 5.2 Examples

| Error | Message | Action |
|-------|---------|--------|
| Room full | "This room is full" | "Browse other rooms →" |
| Connection lost | "Connection lost" | "Reconnecting..." or "Try Again" |
| Invalid input | "Username already taken" | "Try a different one" |
| Server error | "Something went wrong" | "Please try again" |
| Expired invite | "This invite has expired" | "Ask for a new link" |
| Not authorized | "Please log in to continue" | "Log In" |

### 5.3 Error Writing Rules

- Don't blame the user
- Be specific when possible
- Always offer a path forward
- Avoid technical jargon
- Don't use "Oops" or overly cute language

---

## 6. Success Messages

### 6.1 Examples

| Action | Message |
|--------|---------|
| Link copied | "Copied!" |
| Room created | "Room created" |
| Friend invited | "Invite sent" |
| Settings saved | "Saved" |
| Game started | — (visual feedback) |
| Membership activated | "Welcome to [Tier]!" |

### 6.2 Rules

- Keep it brief (1-2 words if possible)
- Use past tense or noun
- Toast disappears after 3 seconds
- No punctuation needed for single words

---

## 7. Loading States

### 7.1 Examples

| Context | Message |
|---------|---------|
| Finding match | "Finding players..." |
| Long search | "Still searching... Might take a moment" |
| Loading page | — (skeleton, no text) |
| Creating room | "Creating room..." |
| Joining game | "Joining..." |
| Connecting | "Connecting..." |

### 7.2 Rules

- Use present progressive ("...ing")
- Add ellipsis
- For longer waits, add context after 10s

---

## 8. Onboarding Copy

### 8.1 Welcome Screen

```
Welcome to Colonist 🎲

The #1 free Settlers of Catan alternative.
Build, trade, and settle your way to victory!

[New to Catan? Start Here]
[I Know How to Play]
```

### 8.2 Tutorial Steps

| Step | Header | Body |
|------|--------|------|
| 1 | "Build Your First Settlement" | "Settlements on good spots produce resources every turn" |
| 2 | "Collect Resources" | "Roll the dice to collect wood, brick, sheep, wheat, and ore" |
| 3 | "Trade and Build" | "Use resources to build roads, settlements, and cities" |
| 4 | "Reach 10 Points" | "First player to 10 victory points wins!" |

### 8.3 First Game Tooltips

| Trigger | Tooltip |
|---------|---------|
| First turn | "Place your first settlement on an intersection" |
| After placement | "Now place a road connected to your settlement" |
| First roll | "You get resources from tiles touching your settlements" |
| First trade | "Click on another player to propose a trade" |

---

## 9. Membership & Store

### 9.1 Membership Page

**Hero**:
```
Only 1 player needs a Membership
"Unlock expansions for you and your friends"
```

**Tier Names**:
- Free
- Premium
- Elite

**Benefit Descriptions**:
| Benefit | Copy |
|---------|------|
| Expansions | "Play Cities & Knights, Seafarers, and more" |
| Maps | "Access all map layouts" |
| Colors | "Customize your game piece colors" |
| Priority | "Priority matchmaking" |
| Ads | "No advertisements" |

### 9.2 Key Messaging

| Message | When to Show |
|---------|--------------|
| "Only the host needs a Membership" | Membership page, expansion lock tooltips |
| "Try an expansion by joining others' games" | FAQ, expansion details |
| "Upgrade anytime, cancel anytime" | Checkout flow |

---

## 10. Game Context Copy

### 10.1 Match Status

| Status | Display |
|--------|---------|
| Finding players | "Finding players... 0:23" |
| Game starting | "Starting in 5..." |
| Your turn | "Your Turn" |
| Waiting | "Waiting for [Player]..." |
| Winner | "🏆 [Player] Wins!" |

### 10.2 Ranked Context

| Context | Copy |
|---------|------|
| Rating gained | "+15 Rating" (green) |
| Rating lost | "-8 Rating" (red) |
| Division up | "Promoted to Gold II! 🎉" |
| Season start | "Season 12 has begun" |
| Placement needed | "Play 10 games to place" |

---

## 11. Accessibility Copy

### 11.1 Alt Text Examples

| Image | Alt Text |
|-------|----------|
| User avatar | "[Username]'s avatar" |
| Game mode icon | "[Mode name] game mode" |
| Map thumbnail | "[Map name] map preview" |
| Rating badge | "Gold III rating" |

### 11.2 Screen Reader Labels

| Element | Label |
|---------|-------|
| Close button | "Close" |
| Menu toggle | "Toggle navigation menu" |
| Notification bell | "Notifications" with count |
| Copy button | "Copy link to clipboard" |
| Settings gear | "Settings" |

---

## 12. Localization Notes

### 12.1 Guidelines for Translation

- Keep placeholders in brackets: `{username}`, `{count}`
- Avoid idioms that don't translate well
- Use neutral, internationally understood terms
- Date/time should use locale formatting

### 12.2 String Format Examples

```
"Welcome back, {username}"
"Found {count} rooms"
"{player} wants to trade"
"Season ends in {days} days"
```

---

*Document Status: Complete*  
*Cross-reference: [DESIGN_DOC.md](./DESIGN_DOC.md) | [ACCESSIBILITY.md](../05_handoff/ACCESSIBILITY.md)*
