# Accessibility Guidelines
## Colonist.io Redesign

---

## 1. Accessibility Standards

### 1.1 Compliance Target

**WCAG 2.1 Level AA**

This means ensuring:
- All content is perceivable
- All UI is operable
- Content is understandable
- Content is robust across technologies

### 1.2 Legal Context

- ADA (Americans with Disabilities Act)
- Section 508
- European Accessibility Act
- AODA (Ontario, Canada)

---

## 2. Perceivable

### 2.1 Color & Contrast

| Element | Minimum Ratio |
|---------|--------------|
| Normal text (< 18px) | 4.5:1 |
| Large text (≥ 18px or 14px bold) | 3:1 |
| UI components & graphics | 3:1 |

**Implementation**:
```css
/* Ensure sufficient contrast */
--color-text-primary: #1F2937;   /* On white: 14.4:1 ✓ */
--color-text-secondary: #4B5563; /* On white: 7.5:1 ✓ */
--color-text-muted: #6B7280;     /* On white: 5.0:1 ✓ */

/* Don't use */
--color-low-contrast: #9CA3AF;   /* On white: 2.8:1 ✗ */
```

**Rules**:
- Never rely on color alone to convey information
- Add icons, patterns, or text labels alongside color indicators
- Test with color blindness simulators (Protanopia, Deuteranopia, Tritanopia)

### 2.2 Text & Typography

**Requirements**:
- Minimum body text size: 16px
- Line height: At least 1.5 for body text
- Paragraph spacing: At least 2x font size
- Letter spacing: No less than 0.12em for body
- Support browser zoom up to 200%

**Don'ts**:
- Don't use text in images (except logos)
- Don't justify text (uneven spacing)
- Don't use ALL CAPS for long passages

### 2.3 Images & Media

**Alt Text Requirements**:

| Image Type | Alt Text Approach |
|------------|------------------|
| Informative | Describe content and function |
| Decorative | Empty alt="" or CSS background |
| Functional | Describe the action |
| Complex | Detailed description + accessible alternative |

**Examples**:
```html
<!-- Informative -->
<img src="map.png" alt="Standard 4-player Catan map layout">

<!-- Decorative -->
<img src="divider.png" alt="">

<!-- Functional (button icon) -->
<button aria-label="Copy invite link">
  <img src="copy.svg" alt="">
</button>
```

### 2.4 Animations & Motion

**Respect User Preferences**:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Guidelines**:
- No content that flashes more than 3 times per second
- Provide pause/stop controls for auto-playing content
- Keep essential animations (loading spinners) but simplify

---

## 3. Operable

### 3.1 Keyboard Navigation

**All interactive elements must be**:
- Reachable via Tab key
- Activatable via Enter/Space
- Visually focused when focused

**Focus Order**:
- Logical, matching visual order
- Left-to-right, top-to-bottom (LTR languages)
- Skip links for main content

**Focus Visible**:
```css
:focus {
  outline: none;
}

:focus-visible {
  box-shadow: 0 0 0 3px rgba(13, 132, 217, 0.4);
  outline: 2px solid transparent;
}
```

### 3.2 Keyboard Shortcuts

| Action | Keys | Notes |
|--------|------|-------|
| Close modal | Escape | Standard |
| Submit form | Enter | When focused |
| Navigate tabs | Arrow keys | Left/Right |
| Navigate dropdowns | Arrow keys | Up/Down |
| Activate button | Enter/Space | Standard |

**Custom Shortcuts**:
- Document any custom shortcuts
- Don't override browser defaults
- Don't require shortcuts (always have mouse alternative)

### 3.3 Touch Targets

**Minimum Size**: 44×44 pixels (WCAG), 48×48 recommended

**Implementation**:
```css
.btn {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}

.icon-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 3.4 Timing

**Requirements**:
- Provide option to extend time limits (turn timers have built-in options)
- No time limits on reading content
- Auto-logout should warn before action

**Game-Specific**:
```
For competitive integrity, turn timers are expected.
However:
- Casual mode can offer extended timers
- Practice mode can offer no timer
- Warning before time expires (audio + visual)
```

---

## 4. Understandable

### 4.1 Language

**Requirements**:
- Set page language: `<html lang="en">`
- Mark language changes inline: `<span lang="es">Hola</span>`

### 4.2 Consistent Navigation

**Rules**:
- Navigation appears in same location on all pages
- Same items in same order
- Same labels for same functions

### 4.3 Predictable Behavior

**Requirements**:
- No unexpected context changes on focus
- Form submissions require explicit action
- Changes are announced to screen readers

### 4.4 Error Prevention & Recovery

**Form Errors**:
1. Prevent errors with validation
2. Clear, specific error messages
3. Suggestions for fixing
4. Don't clear form on error

**Example**:
```html
<label for="username">Username</label>
<input 
  id="username" 
  aria-describedby="username-error"
  aria-invalid="true"
>
<span id="username-error" role="alert">
  Username must be 3-16 characters
</span>
```

---

## 5. Robust

### 5.1 Semantic HTML

**Use proper elements**:

| Purpose | Element |
|---------|---------|
| Navigation | `<nav>` |
| Main content | `<main>` |
| Header | `<header>` |
| Footer | `<footer>` |
| Article | `<article>` |
| Section | `<section>` |
| Button | `<button>` |
| Link | `<a>` |
| Heading | `<h1>` - `<h6>` |
| List | `<ul>`, `<ol>`, `<li>` |
| Form | `<form>`, `<label>`, `<input>` |

### 5.2 ARIA Usage

**Rules**:
1. Use native HTML elements first
2. Add ARIA only when native is insufficient
3. Always maintain state when using ARIA
4. Don't override native semantics

**Common ARIA**:

```html
<!-- Button not using <button> -->
<div role="button" tabindex="0" aria-pressed="false">Toggle</div>

<!-- Modal -->
<div 
  role="dialog" 
  aria-modal="true" 
  aria-labelledby="modal-title"
>
  <h2 id="modal-title">Modal Title</h2>
</div>

<!-- Live region -->
<div aria-live="polite" aria-atomic="true">
  Finding players...
</div>

<!-- Loading button -->
<button aria-busy="true" aria-disabled="true">
  <span aria-hidden="true">Loading...</span>
  <span class="sr-only">Please wait</span>
</button>
```

### 5.3 Screen Reader Only Text

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## 6. Component-Specific Guidelines

### 6.1 Modals

**Requirements**:
- Focus trap (Tab cycles within modal)
- Close on Escape
- Return focus to trigger on close
- `aria-modal="true"`
- Announce opening to screen readers

```typescript
// Focus trap implementation
function trapFocus(modal: HTMLElement) {
  const focusable = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}
```

### 6.2 Tabs

**Requirements**:
```html
<div role="tablist" aria-label="Game modes">
  <button 
    role="tab" 
    aria-selected="true" 
    aria-controls="panel-base"
    id="tab-base"
  >Base Game</button>
  <button 
    role="tab" 
    aria-selected="false" 
    aria-controls="panel-ck"
    id="tab-ck"
    tabindex="-1"
  >Cities & Knights</button>
</div>

<div 
  role="tabpanel" 
  id="panel-base"
  aria-labelledby="tab-base"
>
  Content...
</div>
```

**Keyboard**:
- Arrow keys to switch tabs
- Home/End for first/last
- Tab to exit tablist

### 6.3 Forms

**Requirements**:
- Every input has a `<label>`
- Labels are visually connected
- Required fields indicated
- Error messages associated via `aria-describedby`

```html
<div>
  <label for="email">
    Email <span aria-hidden="true">*</span>
    <span class="sr-only">(required)</span>
  </label>
  <input 
    type="email" 
    id="email" 
    required 
    aria-required="true"
    aria-describedby="email-hint email-error"
  >
  <span id="email-hint">We'll never share your email</span>
  <span id="email-error" role="alert"></span>
</div>
```

### 6.4 Toasts / Notifications

**Requirements**:
- Use appropriate role: `alert` (urgent) or `status` (non-urgent)
- `aria-live`: `assertive` (urgent) or `polite` (non-urgent)
- Don't auto-dismiss error toasts (or provide long timeout)

```html
<div 
  role="status" 
  aria-live="polite" 
  aria-atomic="true"
>
  Room created successfully
</div>
```

---

## 7. Testing Checklist

### 7.1 Automated Testing

- [ ] Run axe-core or Lighthouse a11y audit
- [ ] No errors on all pages
- [ ] Contrast checker on all text

**Tools**:
- axe DevTools (browser extension)
- Lighthouse (Chrome DevTools)
- WAVE (browser extension)

### 7.2 Keyboard Testing

- [ ] Tab through entire page
- [ ] Focus is visible at all times
- [ ] All interactive elements reachable
- [ ] No keyboard traps (except modals)
- [ ] Logical tab order

### 7.3 Screen Reader Testing

- [ ] Test with VoiceOver (Mac)
- [ ] Test with NVDA or JAWS (Windows)
- [ ] All content is announced
- [ ] Form labels read correctly
- [ ] Buttons and links described
- [ ] Live regions announce updates

### 7.4 Visual Testing

- [ ] Zoom to 200% — content still usable
- [ ] High contrast mode works
- [ ] No horizontal scroll at 320px width
- [ ] Focus indicators visible

### 7.5 Motion Testing

- [ ] Enable "Reduce Motion" in OS
- [ ] Verify animations are reduced/disabled
- [ ] Essential functionality still works

---

## 8. Accessibility Statement (Template)

```markdown
# Accessibility Statement

Colonist.io is committed to ensuring digital accessibility for people 
with disabilities. We continually improve the user experience for 
everyone and apply the relevant accessibility standards.

## Conformance Status

We aim to conform to WCAG 2.1 Level AA. Our target is to make all 
content accessible, though some areas may still be in progress.

## Feedback

If you encounter accessibility barriers, please contact us:
- Email: accessibility@colonist.io
- Discord: [community link]

We try to respond within 5 business days.

## Compatibility

This website is designed to be compatible with:
- Screen readers (VoiceOver, NVDA, JAWS)
- Recent versions of major browsers
- Keyboard-only navigation

## Known Issues

We are actively working on:
- [List any known accessibility issues]

Last updated: [Date]
```

---

## 9. Resources

### 9.1 Reference Materials

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Inclusive Components](https://inclusive-components.design/)

### 9.2 Testing Tools

- [axe DevTools](https://www.deque.com/axe/)
- [WAVE](https://wave.webaim.org/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [NoCoffee Vision Simulator](https://accessgarage.wordpress.com/)

---

*Document Status: Complete*  
*Cross-reference: [DESIGN_DOC.md](../04_ui/DESIGN_DOC.md) | [QA_CHECKLIST.md](./QA_CHECKLIST.md)*
