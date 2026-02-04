# Tech Stack (Proposed)
## Colonist.io Modern Rebuild

---

> **⚠️ Note**: This is a **proposed** tech stack for implementing the redesigned UX/UI. It does not reflect Colonist.io's actual internal stack. This is intended as a portfolio case study recommendation.

---

## 1. Stack Overview

```
┌─────────────────────────────────────────────────────────┐
│                        CLIENT                           │
│  Next.js (React + TypeScript) + Tailwind CSS           │
│  State: Zustand | Data: React Query | RT: Socket.io    │
├─────────────────────────────────────────────────────────┤
│                         API                             │
│  REST/GraphQL for static | WebSocket for realtime      │
├─────────────────────────────────────────────────────────┤
│                       BACKEND                           │
│  Node.js (NestJS) or Go for game servers               │
├─────────────────────────────────────────────────────────┤
│                        DATA                             │
│  Postgres (persistent) | Redis (ephemeral/cache)       │
├─────────────────────────────────────────────────────────┤
│                    INFRASTRUCTURE                       │
│  Vercel (frontend) | AWS/GCP/Fly.io (backend)          │
│  Cloudflare (CDN/Edge) | GitHub Actions (CI/CD)        │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Frontend

### 2.1 Framework: Next.js 14+

**Why Next.js**:
- Server-side rendering for SEO (homepage, store, about)
- App Router for layouts and streaming
- API routes for BFF pattern
- Excellent developer experience
- Strong TypeScript support

**Configuration**:
```javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.colonist.io'],
  },
  experimental: {
    serverActions: true,
  },
};
```

### 2.2 Language: TypeScript

**Why TypeScript**:
- Type safety reduces runtime errors
- Better IDE support and refactoring
- Self-documenting code
- Essential for large codebases

### 2.3 Styling: Tailwind CSS + CSS Modules

**Why Tailwind**:
- Rapid prototyping
- Consistent design tokens
- Great responsive utilities
- JIT compilation for small bundles

**CSS Modules for**:
- Complex component-specific styles
- Animation keyframes
- Third-party integration overrides

**Design Token Integration**:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F4FD',
          500: '#0D84D9',
          600: '#0B6CB3',
          // ... from design system
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

### 2.4 State Management

**Zustand** (client state):
- Lightweight (< 1KB)
- Simple API
- React hooks-based
- Good for UI state, modals, selections

**React Query / TanStack Query** (server state):
- Caching and background refetching
- Optimistic updates
- Pagination and infinite scroll
- Data synchronization

**Example**:
```typescript
// stores/useGameStore.ts
import { create } from 'zustand';

interface GameState {
  currentRoom: string | null;
  players: Player[];
  join: (roomId: string) => void;
  leave: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentRoom: null,
  players: [],
  join: (roomId) => set({ currentRoom: roomId }),
  leave: () => set({ currentRoom: null, players: [] }),
}));
```

### 2.5 Real-Time: Socket.io Client

**Why Socket.io**:
- WebSocket with fallbacks
- Automatic reconnection
- Room-based messaging (perfect for game rooms)
- Broad browser support

**Usage**:
```typescript
// hooks/useSocket.ts
import { io } from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_WS_URL, {
  autoConnect: false,
});

export function useSocket(roomId: string) {
  useEffect(() => {
    socket.connect();
    socket.emit('join-room', roomId);
    
    socket.on('player-joined', handlePlayerJoined);
    socket.on('game-update', handleGameUpdate);
    
    return () => {
      socket.emit('leave-room', roomId);
      socket.off('player-joined');
      socket.off('game-update');
    };
  }, [roomId]);
}
```

### 2.6 UI Components

**Component Library Options**:
1. **Radix UI Primitives** (recommended)
   - Unstyled, accessible primitives
   - Full control over styling
   - Excellent a11y out of the box

2. **shadcn/ui** (alternative)
   - Pre-built Radix + Tailwind components
   - Copy-paste, own the code
   - Good starting point

**Icons**: Lucide React
- TreeShakeable
- Consistent with modern SaaS aesthetic
- MIT licensed

---

## 3. Backend

### 3.1 API Server: Node.js + NestJS

**Why NestJS**:
- TypeScript-native
- Modular architecture
- Built-in dependency injection
- WebSocket gateway support
- Easy testing

**Modules**:
```
/src
  /auth         # Authentication (JWT, OAuth)
  /users        # User management, profiles
  /rooms        # Room CRUD, management
  /games        # Game state, logic
  /matchmaking  # Queue management
  /store        # Payments, memberships
  /common       # Shared utilities
```

### 3.2 Alternative: Go for Game Servers

**Why Go**:
- Excellent concurrency (goroutines)
- Lower latency for real-time games
- Smaller memory footprint
- Compile to single binary

**Recommended for**:
- Game tick loops
- High-frequency state updates
- Matchmaking queues

### 3.3 Real-Time: WebSocket Server

**Socket.io Server** with Redis Adapter:
- Horizontal scaling across instances
- Pub/sub for cross-server events
- Sticky sessions or Redis-backed state

**Events**:
```typescript
// Game events
'room:join'        // Player joins room
'room:leave'       // Player leaves
'room:chat'        // Chat message
'game:start'       // Game begins
'game:action'      // Player action
'game:state'       // State sync
'game:end'         // Game over
```

---

## 4. Data Layer

### 4.1 Primary Database: PostgreSQL

**Why Postgres**:
- ACID compliance
- Rich data types (JSONB for game state)
- Excellent performance
- Mature ecosystem

**Schema Highlights**:
```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  username VARCHAR(16) UNIQUE,
  email VARCHAR(255) UNIQUE,
  rating INTEGER DEFAULT 1000,
  division VARCHAR(20),
  membership_tier VARCHAR(20),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Rooms
CREATE TABLE rooms (
  id UUID PRIMARY KEY,
  code VARCHAR(6) UNIQUE,
  host_id UUID REFERENCES users(id),
  game_mode VARCHAR(50),
  map VARCHAR(50),
  settings JSONB,
  status VARCHAR(20), -- waiting, playing, finished
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Games
CREATE TABLE games (
  id UUID PRIMARY KEY,
  room_id UUID REFERENCES rooms(id),
  state JSONB,
  started_at TIMESTAMPTZ,
  ended_at TIMESTAMPTZ
);
```

### 4.2 Cache & Ephemeral: Redis

**Use Cases**:
- Session storage
- Matchmaking queues
- Room presence (who's in room)
- Rate limiting
- Pub/sub for Socket.io adapter

**Data Structures**:
```
session:{userId}         → Session data (Hash)
room:{roomId}:players    → Online players (Set)
matchmaking:{mode}       → Queue (Sorted Set by time)
rate:{ip}:{action}       → Rate limit counter (String + TTL)
```

---

## 5. Authentication

### 5.1 Strategy

- **Primary**: Email/password with JWT
- **Social**: Google, Discord OAuth
- **Guest**: Anonymous session (can convert to account)

### 5.2 Implementation

```typescript
// JWT tokens
Access Token:  15 min (in memory)
Refresh Token: 7 days (httpOnly cookie)

// OAuth flow
1. Redirect to provider
2. Receive code
3. Exchange for tokens
4. Create/link user
5. Issue JWT
```

### 5.3 Providers

| Provider | Library |
|----------|---------|
| Email/Pass | bcrypt + JWT |
| Google | next-auth or passport |
| Discord | OAuth2 |

---

## 6. Payments & Subscriptions

### 6.1 Payment Processor: Stripe

**Why Stripe**:
- Best-in-class subscription management
- Webhook reliability
- Multi-currency
- Good developer experience

**Implementation**:
```typescript
// Subscription flow
1. Create Checkout Session
2. Redirect to Stripe
3. Handle webhook: checkout.session.completed
4. Update user membership
5. Handle renewals/cancellations via webhooks
```

### 6.2 Key Webhooks

```
checkout.session.completed  → Activate membership
invoice.paid                → Renewal successful
customer.subscription.updated → Plan change
customer.subscription.deleted → Cancellation
```

---

## 7. Infrastructure

### 7.1 Frontend Hosting: Vercel

**Why Vercel**:
- Zero-config Next.js deployment
- Global CDN
- Automatic preview deployments
- Analytics included

**Configuration**:
- Production branch: `main`
- Preview: All PRs
- Environment variables in dashboard

### 7.2 Backend Hosting Options

| Option | Best For |
|--------|----------|
| **Fly.io** | Easy deployment, global edge |
| **Railway** | Postgres + Redis included |
| **Render** | All-in-one platform |
| **AWS ECS** | Enterprise scale |

### 7.3 CDN: Cloudflare

**Use Cases**:
- Static asset caching
- DDoS protection
- Edge caching
- Workers for edge logic

### 7.4 Container Strategy

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/main.js"]
```

---

## 8. Observability

### 8.1 Error Tracking: Sentry

**Configuration**:
```typescript
// sentry.client.config.ts
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
});
```

### 8.2 Analytics: PostHog or Amplitude

**Key Events**:
```typescript
// Track events
posthog.capture('game_started', { mode, map, players });
posthog.capture('room_created', { mode, settings });
posthog.capture('membership_purchased', { tier, price });
```

### 8.3 Logging: Structured JSON

**Format**:
```json
{
  "level": "info",
  "message": "Game started",
  "timestamp": "2024-01-15T10:30:00Z",
  "gameId": "abc123",
  "players": 4
}
```

**Stack**: Pino (Node.js) → Logtail/Datadog/Loki

---

## 9. CI/CD

### 9.1 GitHub Actions

**Workflows**:

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

### 9.2 Deployment Pipeline

```
Feature Branch → PR → Review → Merge to main
                           ↓
         [CI Tests Pass] → Deploy Preview
                           ↓
         [Merge to main] → Deploy Production
```

---

## 10. Testing Strategy

### 10.1 Types

| Type | Tool | Coverage |
|------|------|----------|
| Unit | Vitest | Utilities, hooks |
| Integration | Vitest + Testing Library | Components |
| E2E | Playwright | Critical flows |
| Visual | Chromatic (optional) | Design regression |

### 10.2 Coverage Targets

- Unit tests: 80%+
- Critical flows: 100% E2E coverage
- Accessibility: axe-core in tests

---

## 11. Security Considerations

### 11.1 Checklist

- [ ] HTTPS everywhere
- [ ] CSRF protection (SameSite cookies)
- [ ] Rate limiting on all endpoints
- [ ] Input validation (Zod schemas)
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (React's built-in, CSP headers)
- [ ] Secrets in environment variables only
- [ ] Dependency scanning (Dependabot)

### 11.2 Headers

```typescript
// next.config.js headers
{
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Content-Security-Policy': "default-src 'self'",
}
```

---

## 12. Summary Table

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS |
| **State** | Zustand + React Query |
| **Real-time** | Socket.io |
| **Backend** | NestJS (Node.js) or Go |
| **Database** | PostgreSQL + Redis |
| **Auth** | JWT + OAuth (Google, Discord) |
| **Payments** | Stripe |
| **Hosting** | Vercel + Fly.io |
| **CDN** | Cloudflare |
| **CI/CD** | GitHub Actions |
| **Monitoring** | Sentry + PostHog |

---

*Document Status: Complete*  
*Cross-reference: [PRD.md](../02_strategy/PRD.md) | [QA_CHECKLIST.md](./QA_CHECKLIST.md)*
