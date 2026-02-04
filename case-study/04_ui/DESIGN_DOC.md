# Design Document
## Colonist.io UX/UI Redesign

---

## 1. Design Vision

### 1.1 Design Goal

Create a modern, accessible, and player-first interface for Colonist.io that:
- Gets new players into their first game faster
- Reduces cognitive load for all users
- Makes social play effortless
- Communicates value clearly

### 1.2 Design Principles

| Principle | Application |
|-----------|-------------|
| **Start-Playing-First** | Always keep a path to play visible; never bury the core action |
| **Progressive Disclosure** | Show simple defaults first, reveal complexity on demand |
| **Teach in Context** | Provide help where it's needed, not in separate documentation |
| **Calm Confidence** | Use friendly, guiding language; no urgency or pressure |
| **Consistent Patterns** | Use the same interaction patterns throughout the experience |

---

## 2. Key Screens

### 2.1 Screen List with Rationale

| Screen | Purpose | Key Design Decision |
|--------|---------|---------------------|
| **Homepage (Logged Out)** | Convert visitors to players | Hero with single clear CTA; onboarding hook visible |
| **Homepage (Logged In)** | Quick access, social updates | Quick Play button prominent; friends panel visible |
| **Onboarding Welcome** | Hook new users | Friendly, non-intimidating; 3-minute promise |
| **Onboarding Tutorial** | Teach basics interactively | Step-by-step, not wall of text |
| **Play Hub** | Mode selection | Clear visual cards for each mode |
| **Create Room Wizard** | Guided room setup | Step indicator; smart defaults; skip option |
| **Room Lobby** | Pre-game waiting | Players visible; invite prominent; chat available |
| **Room Browser** | Find games | Filters visible; card-based layout; quick join |
| **Invite Modal** | Share room access | Copy link one-click; friends list quick-invite |
| **Ranked Hub** | Competitive entry | Rating display clear; queue options simple |
| **Matchmaking** | Queue feedback | Progress indicator; cancel option |
| **Spectate Browser** | Find games to watch | Featured section; filter by skill/mode |
| **Membership Page** | Convert to paid | Clear tier comparison; "host only" prominent |
| **Profile** | User identity and stats | Clean stat display; settings accessible |

### 2.2 Screen Priority

| Priority | Screens |
|----------|---------|
| **P0** (Must have) | Homepage (both states), Create Room, Room Browser, Ranked Hub, Membership |
| **P1** (Should have) | Onboarding, Spectate, Profile, Settings |
| **P2** (Nice to have) | In-game HUD pass, Post-game results |

---

## 3. Layout Patterns

### 3.1 Page Structure

**Desktop Layout (>1024px)**:
```
┌─────────────────────────────────────────────────┐
│ HEADER: Logo | Primary Nav | User Controls      │
├─────────────────────────────────────────────────┤
│                                                 │
│              MAIN CONTENT AREA                  │
│      (max-width: 1280px, centered)              │
│                                                 │
├─────────────────────────────────────────────────┤
│ FOOTER (minimal): Links | Version | Legal       │
└─────────────────────────────────────────────────┘
```

**Mobile Layout (<640px)**:
```
┌─────────────────────────┐
│ HEADER: Logo | Menu     │
├─────────────────────────┤
│                         │
│    MAIN CONTENT         │
│    (full width)         │
│                         │
├─────────────────────────┤
│ BOTTOM TAB BAR          │
│ Play|Ranked|Specta|Store│
└─────────────────────────┘
```

### 3.2 Grid System

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| Mobile (<640px) | 4 | 16px | 16px |
| Tablet (640-1024px) | 8 | 24px | 24px |
| Desktop (>1024px) | 12 | 24px | 32px |

### 3.3 Content Width

| Container | Max Width | Use Case |
|-----------|-----------|----------|
| Full | 100% | Navigation, heroes |
| Wide | 1280px | Main content |
| Narrow | 720px | Text-heavy, forms |
| Focused | 480px | Modals, wizards |

---

## 4. Component Inventory

### 4.1 Navigation Components

| Component | Variants | Behavior |
|-----------|----------|----------|
| **Top Nav** | Desktop, Tablet | Sticky, contains logo + nav + user |
| **Bottom Tabs** | Mobile only | Fixed, 4-5 items max |
| **Side Drawer** | Mobile | Hamburger trigger, full menu |
| **Breadcrumbs** | Where needed | Show current location in hierarchy |

### 4.2 Action Components

| Component | Variants | Use Case |
|-----------|----------|----------|
| **Button** | Primary, Secondary, Ghost, Destructive | All CTAs |
| **Icon Button** | With/without label | Toolbar actions |
| **Floating Action Button** | Fixed position | Primary mobile action |
| **Link** | Inline, Standalone | Navigation, references |

### 4.3 Form Components

| Component | Variants | Use Case |
|-----------|----------|----------|
| **Input** | Text, Password, Search | User input |
| **Select** | Single, Multi | Option selection |
| **Checkbox** | Single, Group | Boolean/multi choice |
| **Radio** | Group | Single choice |
| **Toggle** | On/Off | Settings switches |
| **Slider** | Single, Range | Numeric input |
| **Stepper** | +/- buttons | Quantity input |

### 4.4 Display Components

| Component | Variants | Use Case |
|-----------|----------|----------|
| **Card** | Room, Player, Expansion | Browse items |
| **Badge** | Status, Count, Rating | Labels and counts |
| **Avatar** | Size variants | User identity |
| **Chip** | Selectable, Static | Tags and filters |
| **Progress** | Bar, Circle, Steps | Progress indication |
| **Tooltip** | Top, Bottom, Side | Help text |

### 4.5 Feedback Components

| Component | Variants | Use Case |
|-----------|----------|----------|
| **Toast** | Success, Error, Info | Non-blocking notices |
| **Alert** | Warning, Error, Info | In-context notices |
| **Modal** | Small, Medium, Large | Focused actions |
| **Drawer** | Left, Right, Bottom | Panels and menus |
| **Skeleton** | Various shapes | Loading states |

### 4.6 Application-Specific

| Component | Description |
|-----------|-------------|
| **Room Card** | Game mode, players, timer, join button |
| **Player Card** | Avatar, name, rating, status |
| **Rating Badge** | Division icon + rating number |
| **Game Mode Picker** | Visual cards for mode selection |
| **Map Picker** | Thumbnails with player count |
| **Invite Panel** | Copy link + friend list + share |

---

## 5. Interaction Patterns

### 5.1 Standard Patterns

| Pattern | Trigger | Behavior |
|---------|---------|----------|
| **Hover** | Mouse enter | Lighten / highlight |
| **Active** | Click/tap | Slight press effect |
| **Focus** | Tab navigation | Visible ring |
| **Disabled** | State | Reduced opacity, no interaction |
| **Loading** | Async action | Spinner + disable trigger |

### 5.2 Navigation Patterns

| Pattern | When | Example |
|---------|------|---------|
| **Direct link** | Simple navigation | Nav items → pages |
| **Modal** | Quick action without context switch | Invite friends |
| **Wizard** | Multi-step process | Create room |
| **Drill-down** | Explore hierarchy | Store → Expansion |
| **Back** | Return to previous | Browser back, explicit back button |

### 5.3 Feedback Patterns

| Event | Feedback Type | Duration |
|-------|---------------|----------|
| Success | Toast (green) | 3 seconds |
| Error | Toast (red) + inline | Until dismissed |
| Loading | Skeleton / spinner | Until complete |
| Confirmation | Modal dialog | User dismisses |

---

## 6. Responsive Behavior

### 6.1 Breakpoint Strategy

| Breakpoint | Name | Key Changes |
|------------|------|-------------|
| 0-639px | Mobile | Single column, bottom tabs, full-width cards |
| 640-1023px | Tablet | 2 columns, top nav, side-by-side cards |
| 1024px+ | Desktop | Full layout, 3+ columns, persistent panels |

### 6.2 Component Adaptations

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navigation | Bottom tabs + drawer | Top nav | Top nav + expanded |
| Room cards | Full width, stacked | 2 columns | 3 columns |
| Create room | Full screen steps | Side panel | Side panel |
| Friends list | Full screen | Drawer | Sidebar |
| Filters | Collapsible | Visible bar | Visible bar |
| Modals | Full screen | Centered | Centered |

### 6.3 Touch Targets

| Element | Minimum Size |
|---------|--------------|
| Buttons | 44×44 px |
| Links | 44×44 px touch area |
| List items | 48px height |
| Icons (tappable) | 44×44 px |

---

## 7. Accessibility

### 7.1 Standards

- **Target**: WCAG 2.1 Level AA compliance
- **Testing**: aXe, keyboard navigation, screen reader

### 7.2 Requirements

| Area | Requirement |
|------|-------------|
| **Color contrast** | Minimum 4.5:1 for normal text, 3:1 for large text |
| **Focus indicators** | Visible focus ring on all interactive elements |
| **Keyboard navigation** | All actions accessible via keyboard |
| **Screen reader** | Semantic markup, ARIA labels where needed |
| **Motion** | Respect prefers-reduced-motion |
| **Text sizing** | Support browser zoom up to 200% |

### 7.3 Color Considerations

- Never use color alone to convey information
- Include icons or text along with color indicators
- Test with color blindness simulators

See [ACCESSIBILITY.md](../05_handoff/ACCESSIBILITY.md) for full checklist.

---

## 8. Motion & Animation

### 8.1 Principles

| Principle | Application |
|-----------|-------------|
| **Purposeful** | Animation should aid understanding, not distract |
| **Quick** | Most transitions under 200ms |
| **Consistent** | Same animation for same action type |
| **Accessible** | Respect reduced motion preferences |

### 8.2 Standard Animations

| Action | Animation | Duration |
|--------|-----------|----------|
| Page transition | Fade + slight slide | 200ms |
| Modal open | Fade in + scale up | 200ms |
| Modal close | Fade out + scale down | 150ms |
| Toast appear | Slide in from edge | 200ms |
| Toast dismiss | fade out | 150ms |
| Button hover | Background color shift | 100ms |
| Button press | Slight scale down | 50ms |
| Loading spinner | Continuous rotation | N/A |

### 8.3 Reduced Motion Mode

When `prefers-reduced-motion: reduce`:
- Replace animations with instant state changes
- Keep essential feedback (e.g., loading spinners)
- Remove decorative motion

---

## 9. Content Guidelines

### 9.1 Voice & Tone

| Attribute | Description |
|-----------|-------------|
| **Friendly** | Like a helpful friend who knows the game |
| **Clear** | Say what you mean, no jargon |
| **Encouraging** | Support users, especially beginners |
| **Confident** | Provide guidance without hesitation |

### 9.2 Writing Patterns

| Context | Pattern | Example |
|---------|---------|---------|
| CTAs | Action verb + object | "Start Game", "Join Room" |
| Headings | Clear, descriptive | "Create a Room" not "Room Creation" |
| Instructions | Imperative mood | "Select a game mode" |
| Errors | Specific + action | "Room is full. Try another room." |
| Empty states | Encouraging + action | "No friends online. Invite someone!" |
| Success | Brief confirmation | "Copied!" "Room created" |

### 9.3 Microcopy Examples

| Context | Copy |
|---------|------|
| New user hook | "New to Catan? Learn in 3 minutes" |
| Quick play | "Jump into a game now" |
| Room creation | "Create a room → Invite friends → Start when ready" |
| Membership value | "Only 1 player needs a Membership to unlock content for everyone" |
| Empty friends | "No friends online. Send an invite link!" |
| Loading match | "Finding players..." |
| Rating change | "+15 Rating" or "-8 Rating" |

See [CONTENT.md](./CONTENT.md) for complete content guidelines.

---

## 10. Design Review Checklist

Before finalizing each screen:

- [ ] Hierarchy is clear (primary > secondary > tertiary)
- [ ] CTAs are visible and labeled clearly
- [ ] Content is scannable (not walls of text)
- [ ] Loading/empty/error states designed
- [ ] Responsive behavior defined
- [ ] Accessibility requirements met
- [ ] Consistent with design system
- [ ] Aligns with user flow expectations
- [ ] Microcopy reviewed

---

*Document Status: Complete*  
*Cross-reference: [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | [COMPONENTS.md](./COMPONENTS.md) | [WIREFRAMES_PLAN.md](../03_ux/WIREFRAMES_PLAN.md)*
