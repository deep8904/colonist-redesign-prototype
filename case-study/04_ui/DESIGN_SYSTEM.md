# Design System
## Colonist.io Redesign

---

## 1. Design Tokens

### 1.1 Color Palette

#### Primary Colors
```
--color-primary-50:  #E8F4FD   /* Lightest */
--color-primary-100: #C7E3FA
--color-primary-200: #9ACEF6
--color-primary-300: #5FB3F0
--color-primary-400: #2D9CED
--color-primary-500: #0D84D9   /* Base - Primary actions */
--color-primary-600: #0B6CB3
--color-primary-700: #09528A
--color-primary-800: #073A62
--color-primary-900: #042439   /* Darkest */
```

#### Secondary Colors (Accent)
```
--color-secondary-50:  #FFF8E6
--color-secondary-100: #FFEFC4
--color-secondary-200: #FFE39E
--color-secondary-300: #FFD467
--color-secondary-400: #FFC53D
--color-secondary-500: #F5A623   /* Base - Highlights, coins */
--color-secondary-600: #D18D1C
--color-secondary-700: #A36D15
--color-secondary-800: #75500F
--color-secondary-900: #4A3209
```

#### Neutral Colors
```
--color-neutral-0:   #FFFFFF   /* White */
--color-neutral-50:  #F9FAFB   /* Background light */
--color-neutral-100: #F3F4F6
--color-neutral-200: #E5E7EB
--color-neutral-300: #D1D5DB
--color-neutral-400: #9CA3AF
--color-neutral-500: #6B7280   /* Muted text */
--color-neutral-600: #4B5563
--color-neutral-700: #374151
--color-neutral-800: #1F2937   /* Primary text */
--color-neutral-900: #111827   /* Darkest */
--color-neutral-950: #030712   /* Near black */
```

#### Semantic Colors
```
/* Success */
--color-success-50:  #ECFDF5
--color-success-100: #D1FAE5
--color-success-500: #10B981   /* Base */
--color-success-700: #047857

/* Warning */
--color-warning-50:  #FFFBEB
--color-warning-100: #FEF3C7
--color-warning-500: #F59E0B   /* Base */
--color-warning-700: #B45309

/* Error */
--color-error-50:  #FEF2F2
--color-error-100: #FEE2E2
--color-error-500: #EF4444    /* Base */
--color-error-700: #B91C1C

/* Info */
--color-info-50:  #EFF6FF
--color-info-100: #DBEAFE
--color-info-500: #3B82F6     /* Base */
--color-info-700: #1D4ED8
```

#### Game-Specific Colors
```
/* Resources (for reference only - use in game context) */
--color-resource-wood:  #8B4513
--color-resource-brick: #C4451C
--color-resource-sheep: #90EE90
--color-resource-wheat: #FFD700
--color-resource-ore:   #708090

/* Player colors (examples) */
--color-player-red:    #E53935
--color-player-blue:   #1E88E5
--color-player-orange: #FB8C00
--color-player-white:  #F5F5F5
```

### 1.2 Typography

#### Font Stack
```
--font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-family-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
```

#### Type Scale
```
--font-size-xs:   0.75rem;   /* 12px */
--font-size-sm:   0.875rem;  /* 14px */
--font-size-base: 1rem;      /* 16px */
--font-size-lg:   1.125rem;  /* 18px */
--font-size-xl:   1.25rem;   /* 20px */
--font-size-2xl:  1.5rem;    /* 24px */
--font-size-3xl:  1.875rem;  /* 30px */
--font-size-4xl:  2.25rem;   /* 36px */
--font-size-5xl:  3rem;      /* 48px */
```

#### Font Weights
```
--font-weight-normal:   400;
--font-weight-medium:   500;
--font-weight-semibold: 600;
--font-weight-bold:     700;
```

#### Line Heights
```
--line-height-tight:  1.25;
--line-height-snug:   1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
```

#### Typography Presets
```
/* Headings */
.heading-1 { font-size: var(--font-size-4xl); font-weight: 700; line-height: 1.25; }
.heading-2 { font-size: var(--font-size-3xl); font-weight: 700; line-height: 1.25; }
.heading-3 { font-size: var(--font-size-2xl); font-weight: 600; line-height: 1.3; }
.heading-4 { font-size: var(--font-size-xl);  font-weight: 600; line-height: 1.4; }
.heading-5 { font-size: var(--font-size-lg);  font-weight: 600; line-height: 1.4; }
.heading-6 { font-size: var(--font-size-base); font-weight: 600; line-height: 1.5; }

/* Body */
.body-large  { font-size: var(--font-size-lg);   line-height: 1.6; }
.body-base   { font-size: var(--font-size-base); line-height: 1.5; }
.body-small  { font-size: var(--font-size-sm);   line-height: 1.5; }

/* Utility */
.label       { font-size: var(--font-size-sm); font-weight: 500; letter-spacing: 0.025em; }
.caption     { font-size: var(--font-size-xs); color: var(--color-neutral-500); }
```

### 1.3 Spacing

```
--space-0:   0;
--space-px:  1px;
--space-0.5: 0.125rem;  /* 2px */
--space-1:   0.25rem;   /* 4px */
--space-1.5: 0.375rem;  /* 6px */
--space-2:   0.5rem;    /* 8px */
--space-2.5: 0.625rem;  /* 10px */
--space-3:   0.75rem;   /* 12px */
--space-3.5: 0.875rem;  /* 14px */
--space-4:   1rem;      /* 16px */
--space-5:   1.25rem;   /* 20px */
--space-6:   1.5rem;    /* 24px */
--space-7:   1.75rem;   /* 28px */
--space-8:   2rem;      /* 32px */
--space-9:   2.25rem;   /* 36px */
--space-10:  2.5rem;    /* 40px */
--space-12:  3rem;      /* 48px */
--space-14:  3.5rem;    /* 56px */
--space-16:  4rem;      /* 64px */
--space-20:  5rem;      /* 80px */
--space-24:  6rem;      /* 96px */
```

### 1.4 Border Radius

```
--radius-none: 0;
--radius-sm:   0.125rem;  /* 2px */
--radius-md:   0.375rem;  /* 6px */
--radius-lg:   0.5rem;    /* 8px */
--radius-xl:   0.75rem;   /* 12px */
--radius-2xl:  1rem;      /* 16px */
--radius-3xl:  1.5rem;    /* 24px */
--radius-full: 9999px;    /* Pill shape */
```

### 1.5 Shadows

```
/* Elevation levels */
--shadow-sm:  0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg:  0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl:  0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

/* Focus ring */
--shadow-focus: 0 0 0 3px rgb(13 132 217 / 0.4);
```

### 1.6 Transitions

```
/* Durations */
--duration-instant:  0ms;
--duration-fast:     100ms;
--duration-normal:   200ms;
--duration-slow:     300ms;
--duration-slower:   500ms;

/* Easings */
--ease-linear:    linear;
--ease-in:        cubic-bezier(0.4, 0, 1, 1);
--ease-out:       cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce:    cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Presets */
--transition-colors:    color, background-color, border-color var(--duration-fast) var(--ease-out);
--transition-transform: transform var(--duration-fast) var(--ease-out);
--transition-all:       all var(--duration-normal) var(--ease-out);
```

### 1.7 Z-Index Scale

```
--z-base:      0;
--z-dropdown:  100;
--z-sticky:    200;
--z-fixed:     300;
--z-overlay:   400;
--z-modal:     500;
--z-popover:   600;
--z-tooltip:   700;
--z-toast:     800;
```

---

## 2. Layout Tokens

### 2.1 Breakpoints

```
--breakpoint-sm:  640px;   /* Small tablets */
--breakpoint-md:  768px;   /* Tablets */
--breakpoint-lg:  1024px;  /* Desktop */
--breakpoint-xl:  1280px;  /* Large desktop */
--breakpoint-2xl: 1536px;  /* Extra large */
```

### 2.2 Container Widths

```
--container-sm:  640px;
--container-md:  768px;
--container-lg:  1024px;
--container-xl:  1280px;
--container-narrow: 720px;
--container-focused: 480px;
```

### 2.3 Grid

```
--grid-columns: 12;
--grid-gutter:  var(--space-6);  /* 24px */
--grid-margin:  var(--space-4);  /* 16px mobile */
--grid-margin-desktop: var(--space-8); /* 32px desktop */
```

---

## 3. Theme Variants

### 3.1 Light Theme (Default)

```
:root {
  --color-bg-primary:    var(--color-neutral-0);
  --color-bg-secondary:  var(--color-neutral-50);
  --color-bg-tertiary:   var(--color-neutral-100);
  
  --color-text-primary:   var(--color-neutral-900);
  --color-text-secondary: var(--color-neutral-600);
  --color-text-muted:     var(--color-neutral-400);
  --color-text-inverse:   var(--color-neutral-0);
  
  --color-border-default: var(--color-neutral-200);
  --color-border-strong:  var(--color-neutral-300);
}
```

### 3.2 Dark Theme

```
[data-theme="dark"] {
  --color-bg-primary:    var(--color-neutral-900);
  --color-bg-secondary:  var(--color-neutral-800);
  --color-bg-tertiary:   var(--color-neutral-700);
  
  --color-text-primary:   var(--color-neutral-50);
  --color-text-secondary: var(--color-neutral-300);
  --color-text-muted:     var(--color-neutral-500);
  --color-text-inverse:   var(--color-neutral-900);
  
  --color-border-default: var(--color-neutral-700);
  --color-border-strong:  var(--color-neutral-600);
}
```

---

## 4. Component Tokens

### 4.1 Buttons

```
/* Primary Button */
--btn-primary-bg:       var(--color-primary-500);
--btn-primary-bg-hover: var(--color-primary-600);
--btn-primary-text:     var(--color-neutral-0);

/* Secondary Button */
--btn-secondary-bg:       var(--color-neutral-100);
--btn-secondary-bg-hover: var(--color-neutral-200);
--btn-secondary-text:     var(--color-neutral-800);

/* Ghost Button */
--btn-ghost-bg:       transparent;
--btn-ghost-bg-hover: var(--color-neutral-100);
--btn-ghost-text:     var(--color-neutral-700);

/* Button sizing */
--btn-height-sm: 32px;
--btn-height-md: 40px;
--btn-height-lg: 48px;

--btn-padding-x-sm: var(--space-3);
--btn-padding-x-md: var(--space-4);
--btn-padding-x-lg: var(--space-6);

--btn-radius: var(--radius-lg);
```

### 4.2 Inputs

```
--input-height:       44px;
--input-padding-x:    var(--space-3);
--input-radius:       var(--radius-lg);
--input-border:       1px solid var(--color-border-default);
--input-border-focus: 1px solid var(--color-primary-500);
--input-bg:           var(--color-bg-primary);
```

### 4.3 Cards

```
--card-bg:      var(--color-bg-primary);
--card-border:  1px solid var(--color-border-default);
--card-radius:  var(--radius-xl);
--card-padding: var(--space-4);
--card-shadow:  var(--shadow-sm);
--card-shadow-hover: var(--shadow-md);
```

### 4.4 Modals

```
--modal-bg:       var(--color-bg-primary);
--modal-radius:   var(--radius-2xl);
--modal-padding:  var(--space-6);
--modal-shadow:   var(--shadow-xl);
--modal-max-width: 480px;
--modal-overlay-bg: rgb(0 0 0 / 0.5);
```

---

## 5. Icon System

### 5.1 Icon Sizes

```
--icon-xs: 12px;
--icon-sm: 16px;
--icon-md: 20px;
--icon-lg: 24px;
--icon-xl: 32px;
```

### 5.2 Icon Library

**Recommended**: Lucide Icons (consistent with modern SaaS aesthetic)

Key icons needed:
- Navigation: `home`, `gamepad-2`, `trophy`, `eye`, `store`, `user`
- Actions: `play`, `plus`, `copy`, `share`, `settings`, `x`, `chevron-*`
- Social: `users`, `user-plus`, `mail`, `bell`
- Status: `check`, `alert-circle`, `info`, `clock`, `star`
- Game: `dice-*`, `crown`, `shield`

---

## 6. Implementation Notes

### 6.1 CSS Custom Properties

All tokens should be implemented as CSS custom properties for:
- Easy theming
- Runtime updates
- Consistent usage

### 6.2 Figma Integration

In Figma, create:
- **Local Variables** for colors (with light/dark modes)
- **Text Styles** for typography presets
- **Effect Styles** for shadows
- **Layout Grids** for responsive layouts

### 6.3 Token Naming Convention

```
--{category}-{element}-{property}-{variant}

Examples:
--color-primary-500
--btn-primary-bg-hover
--space-4
--radius-lg
```

---

*Document Status: Complete*  
*Cross-reference: [DESIGN_DOC.md](./DESIGN_DOC.md) | [COMPONENTS.md](./COMPONENTS.md)*
