# Component Library
## Colonist.io Redesign

---

## 1. Component Philosophy

### Principles
1. **Composable**: Small, focused components that combine well
2. **Accessible**: All components meet WCAG 2.1 AA standards
3. **Consistent**: Same patterns applied throughout
4. **Themeable**: Support light/dark modes via tokens
5. **Responsive**: Work across all breakpoints

### Component States
All interactive components support:
- Default
- Hover
- Active/Pressed
- Focus
- Disabled
- Loading (where applicable)

---

## 2. Navigation Components

### 2.1 Top Navigation Bar

**Purpose**: Primary navigation across all pages

**Anatomy**:
```
┌──────────────────────────────────────────────────────────┐
│ [Logo]  [Play] [Ranked] [Spectate] [Store]   🔔 👤 [User]│
└──────────────────────────────────────────────────────────┘
```

**Properties**:
| Property | Value |
|----------|-------|
| Height | 64px (desktop), 56px (mobile) |
| Background | `--color-bg-primary` |
| Border bottom | `1px solid --color-border-default` |
| Position | Sticky |
| Z-index | `--z-sticky` |

**Variants**:
- Desktop: Full navigation visible
- Mobile: Logo + hamburger + user avatar

**States**:
- Active nav item: `--color-primary-500` text, bottom border accent
- Hover: Background lighten

---

### 2.2 Bottom Tab Bar (Mobile)

**Purpose**: Primary navigation on mobile

**Anatomy**:
```
┌───────────────────────────────────────────┐
│  🏠     🏆      👁️      🛒      👤      │
│ Play  Ranked  Watch   Store  Profile    │
└───────────────────────────────────────────┘
```

**Properties**:
| Property | Value |
|----------|-------|
| Height | 56px + safe area |
| Background | `--color-bg-primary` |
| Border top | `1px solid --color-border-default` |
| Position | Fixed bottom |
| Items | Max 5 |

**States**:
- Active: Icon and label use `--color-primary-500`
- Inactive: `--color-text-muted`

---

### 2.3 Side Drawer (Mobile Menu)

**Purpose**: Full navigation on mobile

**Anatomy**:
```
┌─────────────────────┐
│ [×]                 │
│ ─────────────────── │
│ 👤 Username         │
│ Rating: 1,247       │
│ ─────────────────── │
│ Play                │
│ Ranked              │
│ Spectate            │
│ Store               │
│ Profile             │
│ ─────────────────── │
│ Settings            │
│ Help                │
│ Logout              │
└─────────────────────┘
```

**Properties**:
| Property | Value |
|----------|-------|
| Width | 280px or 80% |
| Background | `--color-bg-primary` |
| Shadow | `--shadow-xl` |
| Animation | Slide from left, 200ms |

---

## 3. Button Components

### 3.1 Button

**Purpose**: Primary action trigger

**Variants**:

| Variant | Use Case |
|---------|----------|
| Primary | Main actions (Start Game, Join) |
| Secondary | Secondary actions (Cancel, Back) |
| Ghost | Tertiary actions (More info) |
| Destructive | Dangerous actions (Leave, Delete) |
| Link | Inline navigation |

**Sizes**:

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| Small | 32px | 12px | 14px |
| Medium | 40px | 16px | 14px |
| Large | 48px | 24px | 16px |

**States**:
```
Default  → Hover → Active → Focus → Disabled
                              ↓
                           Loading
```

**Anatomy**:
```
┌─────────────────────┐
│ [Icon]  Label  [→]  │
└─────────────────────┘
```

**Accessibility**:
- Focus ring: `--shadow-focus`
- Disabled: opacity 50%, no pointer events
- Min touch target: 44×44px

---

### 3.2 Icon Button

**Purpose**: Icon-only actions

**Sizes**:
| Size | Dimensions |
|------|------------|
| Small | 32×32px |
| Medium | 40×40px |
| Large | 48×48px |

**Requirements**:
- `aria-label` required for accessibility
- Tooltip on hover (optional)

---

## 4. Form Components

### 4.1 Input

**Purpose**: Single-line text entry

**Anatomy**:
```
Label (optional)
┌─────────────────────────────┐
│ [Icon]  Placeholder...  [×] │
└─────────────────────────────┘
Helper text / Error message
```

**Properties**:
| Property | Value |
|----------|-------|
| Height | 44px |
| Border radius | `--radius-lg` |
| Padding | 12px 16px |
| Border | `1px solid --color-border-default` |

**States**:
- Default: `--color-border-default`
- Hover: `--color-border-strong`
- Focus: `--color-primary-500` border + focus ring
- Error: `--color-error-500` border
- Disabled: `--color-bg-tertiary` background

**Variants**:
- Text
- Password (with show/hide toggle)
- Search (with search icon)
- With prefix/suffix

---

### 4.2 Select

**Purpose**: Single option selection

**Anatomy**:
```
Label
┌─────────────────────────────┐
│ Selected Option          [▼] │
└─────────────────────────────┘

Dropdown:
┌─────────────────────────────┐
│ Option 1                 [✓] │
│ Option 2                    │
│ Option 3                    │
└─────────────────────────────┘
```

**Properties**:
- Same styling as Input
- Dropdown max height: 256px with scroll
- Selected option: checkmark or highlight

---

### 4.3 Checkbox

**Purpose**: Boolean or multi-select

**Anatomy**:
```
[✓] Label text
```

**States**:
- Unchecked: Empty box
- Checked: Blue background, white check
- Indeterminate: Blue background, dash
- Disabled: 50% opacity

---

### 4.4 Toggle Switch

**Purpose**: On/off settings

**Anatomy**:
```
Label         [====●]  ON
Label         [●====]  OFF
```

**Properties**:
| Property | Value |
|----------|-------|
| Track width | 44px |
| Track height | 24px |
| Thumb size | 20px |

---

## 5. Display Components

### 5.1 Card

**Purpose**: Contained content block

**Variants**:
| Variant | Use Case |
|---------|----------|
| Default | General content |
| Interactive | Clickable (rooms, selections) |
| Selected | Currently selected option |
| Elevated | Higher visual prominence |

**Anatomy**:
```
┌─────────────────────────────┐
│ [Image / Header]            │
├─────────────────────────────┤
│ Title                       │
│ Description / metadata      │
│                             │
│ [Actions]                   │
└─────────────────────────────┘
```

**Properties**:
| Property | Value |
|----------|-------|
| Background | `--color-bg-primary` |
| Border | `1px solid --color-border-default` |
| Border radius | `--radius-xl` (12px) |
| Padding | 16px |
| Shadow | `--shadow-sm` |

**Interactive States**:
- Hover: `--shadow-md`, slight background change
- Selected: `--color-primary-500` border

---

### 5.2 Room Card

**Purpose**: Display room in browser

**Anatomy**:
```
┌─────────────────────────────────────────┐
│ 🎮 Base Game • Standard Map • 60s     │
│ 👥 3/4 players                          │
│ Host: PlayerName                        │
│                              [Join →]   │
└─────────────────────────────────────────┘
```

**Properties**:
- Icon: Game mode indicator
- Tags: Mode, map, timer as chips
- Players: Current/max count
- Action: Join button (always visible)

---

### 5.3 Avatar

**Purpose**: User identity representation

**Sizes**:
| Size | Dimensions | Use Case |
|------|------------|----------|
| XS | 24px | Inline mentions |
| SM | 32px | Lists, compact views |
| MD | 40px | Standard UI |
| LG | 56px | Profile, prominent display |
| XL | 80px | Profile page hero |

**Variants**:
- Image: User uploaded
- Initials: Fallback with initial letters
- Icon: Generic user silhouette

**With Status**:
```
┌────┐
│    │ ● (green = online, gray = offline, yellow = in-game)
└────┘
```

---

### 5.4 Badge

**Purpose**: Status indicator or count

**Variants**:
| Variant | Use Case |
|---------|----------|
| Count | Notification counts |
| Status | Online, offline, in-game |
| Label | Tags, categories |
| Rating | Player ratings |

**Anatomy**:
```
[Label]     (solid background)
[5]         (count badge)
●           (status dot)
```

---

### 5.5 Chip

**Purpose**: Compact selection or filter

**Anatomy**:
```
[Icon] Label [×]
```

**Variants**:
- Static: Read-only display
- Selectable: Toggle on/off
- Removable: With close button

**States**:
- Default: Neutral background
- Selected: Primary color
- Hover: Lighten/darken

---

### 5.6 Rating Badge

**Purpose**: Display player rating and division

**Anatomy**:
```
┌──────────────────┐
│ 🏆 GOLD III      │
│ 1,247            │
└──────────────────┘

Or compact: 🏆 1,247
```

**Division Icons**:
- Bronze, Silver, Gold, Platinum, Diamond
- Subdivisions: I, II, III

---

## 6. Feedback Components

### 6.1 Toast Notification

**Purpose**: Non-blocking feedback

**Anatomy**:
```
┌──────────────────────────────────┐
│ [Icon] Message text        [×]   │
└──────────────────────────────────┘
```

**Variants**:
| Variant | Color | Icon | Use Case |
|---------|-------|------|----------|
| Success | Green | ✓ | Actions completed |
| Error | Red | ! | Errors occurred |
| Info | Blue | i | Information |
| Warning | Yellow | ⚠ | Cautions |

**Properties**:
| Property | Value |
|----------|-------|
| Position | Top-right (desktop), Top (mobile) |
| Duration | 3-5 seconds (configurable) |
| Max visible | 3 stacked |
| Animation | Slide in from edge |

---

### 6.2 Modal

**Purpose**: Focused content overlay

**Anatomy**:
```
┌────────────────────────────────────┐
│ Header / Title              [×]    │
├────────────────────────────────────┤
│                                    │
│ Content                            │
│                                    │
├────────────────────────────────────┤
│              [Cancel] [Confirm]    │
└────────────────────────────────────┘
```

**Sizes**:
| Size | Max Width |
|------|-----------|
| Small | 400px |
| Medium | 520px |
| Large | 640px |
| Full (mobile) | 100% |

**Properties**:
- Backdrop: `rgba(0, 0, 0, 0.5)`
- Border radius: `--radius-2xl`
- Animation: Fade + scale up
- Focus trap: Yes
- Close on escape: Yes

---

### 6.3 Drawer

**Purpose**: Slide-in panel

**Directions**:
- Left (navigation)
- Right (details, settings)
- Bottom (mobile actions)

**Properties**:
| Property | Value |
|----------|-------|
| Width | 320px (side), 100% (bottom) |
| Max height | 90vh (bottom) |
| Animation | Slide, 200ms |

---

### 6.4 Skeleton Loader

**Purpose**: Content placeholder during loading

**Variants**:
- Text line (various widths)
- Circle (avatar)
- Rectangle (image, card)

**Animation**:
- Shimmer effect (optional)
- Pulse opacity

---

### 6.5 Empty State

**Purpose**: Contextual help when no content

**Anatomy**:
```
┌─────────────────────────────────────┐
│                                     │
│         [Illustration]              │
│                                     │
│       No results found              │
│    Try adjusting your filters       │
│                                     │
│         [Primary Action]            │
│                                     │
└─────────────────────────────────────┘
```

**Common Empty States**:
- No rooms available
- No friends online
- No search results
- No games in progress (spectate)

---

## 7. Game-Specific Components

### 7.1 Game Mode Picker

**Purpose**: Visual selection of game modes

**Anatomy**:
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ [Icon]  │ │ [Icon]  │ │ [Icon]  │
│  BASE   │ │  C&K    │ │SEAFARER │
│  GAME   │ │   🔒    │ │   🔒    │
│    ✓    │ │         │ │         │
└─────────┘ └─────────┘ └─────────┘
```

**Properties**:
- Card-based selection
- Lock icon for membership-only
- Check indicator for selected

---

### 7.2 Map Picker

**Purpose**: Visual map selection

**Anatomy**:
```
┌─────────────┐ ┌─────────────┐
│  [Preview]  │ │  [Preview]  │
│  Standard   │ │  Balanced   │
│  4 players  │ │  4 players  │
└─────────────┘ └─────────────┘
```

**Properties**:
- Thumbnail preview
- Map name
- Player count badge

---

### 7.3 Player Slot

**Purpose**: Room lobby player display

**Anatomy**:
```
┌───────────────────────────────────┐
│ [Avatar]  Username     🏆 1,247   │
│           Ready ✓                 │
└───────────────────────────────────┘

Empty slot:
┌───────────────────────────────────┐
│   ⊕    Waiting for player...     │
└───────────────────────────────────┘
```

---

### 7.4 Invite Panel

**Purpose**: Friend invitation interface

**Anatomy**:
```
┌─────────────────────────────────────┐
│ Share Link                          │
│ [https://colonist.io/r/ABC]  [Copy] │
├─────────────────────────────────────┤
│ Friends                             │
│ ● Friend1 - Online      [Invite]    │
│ ○ Friend2 - Offline     [Invite]    │
├─────────────────────────────────────┤
│ [Discord] [WhatsApp] [Copy Link]    │
└─────────────────────────────────────┘
```

---

## 8. Stepper / Wizard

**Purpose**: Multi-step process guidance

**Anatomy**:
```
Step 1          Step 2          Step 3
━━━━━━━●━━━━━━━━━━━○━━━━━━━━━━━○
 Mode           Map            Rules
```

**States**:
- Completed: Filled, checkmark
- Current: Filled, highlighted
- Upcoming: Outline only

---

## 9. Component Accessibility

### 9.1 Focus Management

All interactive components:
- Visible focus ring (`--shadow-focus`)
- Logical tab order
- Focus trap in modals

### 9.2 ARIA Requirements

| Component | ARIA |
|-----------|------|
| Button | `role="button"` if not `<button>` |
| Modal | `role="dialog"`, `aria-modal="true"` |
| Toast | `role="alert"` (errors) or `role="status"` |
| Tabs | `role="tablist"`, `role="tab"`, `role="tabpanel"` |
| Toggle | `aria-checked` |

### 9.3 Keyboard Navigation

| Component | Keys |
|-----------|------|
| Button | Enter/Space to activate |
| Modal | Escape to close |
| Select | Arrow keys to navigate |
| Tabs | Arrow keys to switch |

---

*Document Status: Complete*  
*Cross-reference: [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | [DESIGN_DOC.md](./DESIGN_DOC.md)*
