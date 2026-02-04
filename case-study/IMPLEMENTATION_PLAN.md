# Implementation Plan
## Colonist.io Redesign — Working Website

---

## Project Overview

**Goal**: Build a working Next.js website demonstrating the redesigned Colonist.io UX.

**Constraints**:
- No proprietary Colonist.io assets
- No actual game logic
- Mock data only (no backend)
- Portfolio-safe

---

## 1. Pages & Routes

| Route | Page | Priority | Description |
|-------|------|----------|-------------|
| `/` | Home (logged out) | P0 | Landing, CTAs, value prop |
| `/` | Home (logged in) | P0 | Quick actions, friends online, recent games |
| `/play` | Mode Select | P0 | Choose game type |
| `/rooms` | Rooms Browser | P0 | Filterable room list |
| `/rooms/create` | Create Room Wizard | P0 | Multi-step wizard |
| `/rooms/[id]` | Room Lobby | P1 | Waiting room with invite |
| `/ranked` | Ranked Hub | P0 | Queue options, rating, season |
| `/spectate` | Spectate Browser | P0 | Live games list |
| `/store/membership` | Membership Page | P0 | Tier comparison |
| `/game/[id]` | In-Game HUD Mock | P2 | Layout only, no board |
| `/components` | Component Demo | Dev | Showcase all components |

---

## 2. Mock Data Structure

### `/data/rooms.ts`
```typescript
interface Room {
  id: string;
  code: string;
  host: { username: string; rating: number };
  mode: 'base' | 'cities-knights' | 'seafarers';
  map: string;
  timer: number;
  currentPlayers: number;
  maxPlayers: number;
  isPrivate: boolean;
}
```

### `/data/players.ts`
```typescript
interface Player {
  id: string;
  username: string;
  rating: number;
  division: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
  divisionTier: 1 | 2 | 3;
  isOnline: boolean;
  status: 'online' | 'in-game' | 'offline';
}
```

### `/data/games.ts`
```typescript
interface SpectateGame {
  id: string;
  players: { username: string; rating: number }[];
  mode: string;
  turnNumber: number;
  viewerCount: number;
}
```

### `/data/user.ts`
```typescript
interface User {
  id: string;
  username: string;
  rating: number;
  division: string;
  seasonProgress: number;
  friends: Player[];
  recentGames: { result: 'win' | 'loss'; mode: string; date: string }[];
}
```

---

## 3. Components to Build

### Core Components (Required)
| Component | Location | Props |
|-----------|----------|-------|
| Button | `/components/ui/Button.tsx` | variant, size, loading, disabled |
| Card | `/components/ui/Card.tsx` | variant (default, interactive, selected) |
| Chip | `/components/ui/Chip.tsx` | variant, removable |
| Modal | `/components/ui/Modal.tsx` | isOpen, onClose, size |
| Stepper | `/components/ui/Stepper.tsx` | steps, currentStep |
| Input | `/components/ui/Input.tsx` | label, error, icon |
| Select | `/components/ui/Select.tsx` | options, value, onChange |
| Toggle | `/components/ui/Toggle.tsx` | checked, onChange |
| Toast | `/components/ui/Toast.tsx` | variant, message |
| EmptyState | `/components/ui/EmptyState.tsx` | icon, title, description, action |
| Avatar | `/components/ui/Avatar.tsx` | src, size, status |
| Badge | `/components/ui/Badge.tsx` | variant, value |

### Domain Components
| Component | Location | Purpose |
|-----------|----------|---------|
| TopNav | `/components/layout/TopNav.tsx` | Main navigation |
| BottomTabBar | `/components/layout/BottomTabBar.tsx` | Mobile nav |
| MobileDrawer | `/components/layout/MobileDrawer.tsx` | Mobile menu |
| RoomCard | `/components/domain/RoomCard.tsx` | Room in browser |
| FilterBar | `/components/domain/FilterBar.tsx` | Rooms/spectate filters |
| GameModePicker | `/components/domain/GameModePicker.tsx` | Mode selection cards |
| MapPicker | `/components/domain/MapPicker.tsx` | Map selection |
| PlayerSlot | `/components/domain/PlayerSlot.tsx` | Lobby player |
| InvitePanel | `/components/domain/InvitePanel.tsx` | Invite friends modal |
| RatingBadge | `/components/domain/RatingBadge.tsx` | Rating display |
| SpectateCard | `/components/domain/SpectateCard.tsx` | Game to watch |

---

## 4. App Structure

```
/app
├── layout.tsx              # Root layout + providers
├── globals.css             # Base styles + tokens
├── page.tsx                # Home (switches logged in/out)
│
├── play/
│   └── page.tsx            # Mode selection
│
├── rooms/
│   ├── page.tsx            # Rooms browser
│   ├── create/
│   │   └── page.tsx        # Create room wizard
│   └── [id]/
│       └── page.tsx        # Room lobby
│
├── ranked/
│   └── page.tsx            # Ranked hub
│
├── spectate/
│   └── page.tsx            # Spectate browser
│
├── store/
│   └── membership/
│       └── page.tsx        # Membership clarity
│
├── game/
│   └── [id]/
│       └── page.tsx        # In-game HUD mock
│
└── components/
    └── page.tsx            # Component showcase (dev)

/components
├── ui/                     # Base components
├── domain/                 # Business logic components
└── layout/                 # Navigation, layout

/data                       # Mock data

/lib
├── cn.ts                   # classnames helper
└── hooks/                  # Custom hooks

/styles
└── tokens.css              # CSS custom properties

/public
└── placeholder-*.svg       # Placeholder images
```

---

## 5. What is Mocked vs Real

### Real (Functional)
- Navigation (routing works)
- Room filters (client-side filtering)
- Create Room wizard (state persists through steps)
- Invite link copy (clipboard API)
- Toggle logged in/out state
- Toast notifications
- Modal open/close
- Form validation (basic)
- Responsive layout

### Mocked (Simulated)
- User authentication (toggle in header)
- Room data (static JSON)
- Player data (static JSON)
- Matchmaking queue (fake timer)
- Game start (redirect to mock HUD)
- Payment flow (no actual integration)
- Friends list (mock data)

---

## 6. Definition of Done

### Per Component
- [ ] Renders without errors
- [ ] All variants implemented
- [ ] All states working (hover, focus, disabled, loading)
- [ ] Keyboard accessible
- [ ] Focus ring visible
- [ ] Proper ARIA labels

### Per Page
- [ ] Route loads
- [ ] Content renders
- [ ] Primary CTA functional
- [ ] No layout breaks at 375px, 768px, 1280px
- [ ] No console errors

### Overall
- [ ] `npm install` succeeds
- [ ] `npm run dev` runs without errors
- [ ] All routes navigable
- [ ] All filters work
- [ ] Wizard completes all steps
- [ ] Invite link copies
- [ ] Responsive on mobile
- [ ] Keyboard navigation works
- [ ] No console errors

---

## 7. Verification Plan

### Automated Checks
1. **Build check**: `npm run build` — must complete without errors
2. **Lint check**: `npm run lint` — must pass
3. **Type check**: `npx tsc --noEmit` — must pass

### Manual Browser Testing

**Test 1: Navigation Flow**
1. Start dev server: `npm run dev`
2. Open http://localhost:3000
3. Click each nav item: Play, Ranked, Spectate, Store
4. Verify each page loads without errors
5. Click logo to return home
6. ✓ Pass if all pages load

**Test 2: Create Room Wizard**
1. Go to http://localhost:3000/rooms/create
2. Select a game mode → click Next
3. Select a map → click Next
4. Adjust rules → click Create Room
5. Verify redirect to room lobby
6. ✓ Pass if wizard completes

**Test 3: Room Filtering**
1. Go to http://localhost:3000/rooms
2. Click a mode filter (e.g., "Base Game")
3. Verify list updates
4. Clear filters
5. Verify all rooms show
6. ✓ Pass if filters work

**Test 4: Invite Link Copy**
1. Go to a room lobby page
2. Click "Copy Link"
3. Paste into text editor
4. Verify link was copied
5. ✓ Pass if clipboard works

**Test 5: Responsive Layout**
1. Open Chrome DevTools
2. Toggle device toolbar
3. Test at 375px width (mobile)
4. Test at 768px width (tablet)
5. Test at 1280px width (desktop)
6. ✓ Pass if no layout breaks

**Test 6: Keyboard Navigation**
1. Tab through home page
2. Verify focus ring visible
3. Tab through modal
4. Press Escape to close modal
5. ✓ Pass if keyboard works

---

## 8. Implementation Order

### Step 1: Project Setup
- Initialize Next.js with TypeScript and Tailwind
- Configure design tokens as CSS variables
- Set up folder structure

### Step 2: Base Layout
- Build TopNav component
- Build BottomTabBar component
- Create root layout with navigation

### Step 3: Core UI Components
- Build all `/components/ui/*` components
- Create component demo page

### Step 4: Domain Components
- Build RoomCard, FilterBar, etc.
- Connect to mock data

### Step 5: Pages (in order)
1. Home (logged out)
2. Home (logged in)
3. Rooms browser
4. Create Room wizard
5. Room lobby + invite
6. Ranked hub
7. Spectate browser
8. Membership page
9. In-game HUD mock

### Step 6: Polish
- Responsive fixes
- Accessibility pass
- Final QA

### Step 7: Portfolio Assets
- Screenshots
- Demo script
- Case study writeup

---

## 9. Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 14 App Router | Modern, SSR capable |
| Styling | Tailwind + CSS variables | Fast, matches design system |
| State | React useState/useContext | Simple, no external deps |
| Icons | Lucide React | Clean, tree-shakeable |
| Copy to clipboard | navigator.clipboard API | Native, no deps |
| Routing | Next.js App Router | File-based, simple |

---

## 10. Out of Scope

- Actual authentication
- Real-time WebSocket
- Database persistence
- Payment integration
- Game board rendering
- Move/turn logic
- Chat functionality
- Push notifications

---

*Document Status: Ready for Review*  
*Created: 2026-02-04*
