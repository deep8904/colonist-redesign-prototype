# QA Checklist
## Colonist.io Redesign

---

## 1. Design QA

### 1.1 Visual Consistency

#### Typography
- [ ] All headings use defined heading styles
- [ ] Body text uses correct size (16px base)
- [ ] Line heights are consistent
- [ ] Font weights match design system
- [ ] No orphaned words on important headlines

#### Colors
- [ ] All colors from design token palette
- [ ] No hardcoded color values
- [ ] Dark mode uses dark theme tokens
- [ ] States (hover, active, focus) use correct variants

#### Spacing
- [ ] Margins/padding follow spacing scale
- [ ] Consistent spacing between sections
- [ ] Card padding uniform
- [ ] No visual misalignments

#### Icons
- [ ] Consistent icon set throughout
- [ ] Icons proper size per context
- [ ] Icons aligned with text properly
- [ ] Icon buttons have 44px min touch target

### 1.2 Component Verification

#### Buttons
- [ ] Primary button style correct
- [ ] Secondary button style correct
- [ ] Ghost button style correct
- [ ] Disabled state visible but inactive
- [ ] Loading state shows spinner
- [ ] Hover states work
- [ ] Focus ring visible

#### Forms
- [ ] Labels associated with inputs
- [ ] Placeholder text present
- [ ] Focus states visible
- [ ] Error states styled correctly
- [ ] Required indicators shown
- [ ] Helper text positioned correctly

#### Cards
- [ ] Border radius consistent
- [ ] Shadow levels correct
- [ ] Hover elevation on interactive cards
- [ ] Selected state distinct

#### Modals
- [ ] Centered on screen
- [ ] Backdrop visible
- [ ] Close button present
- [ ] Padding consistent
- [ ] Responsive on mobile

---

## 2. Functional QA

### 2.1 Navigation

- [ ] All nav links work
- [ ] Active state shows current page
- [ ] Logo links to homepage
- [ ] Mobile menu opens/closes
- [ ] Mobile menu items work
- [ ] Browser back button works correctly

### 2.2 User Flows

#### Homepage
- [ ] Quick Play button initiates matchmaking
- [ ] Create Room button opens wizard
- [ ] Login button goes to auth
- [ ] Onboarding link goes to tutorial

#### Create Room
- [ ] Mode selection works
- [ ] Map selection works
- [ ] Settings adjust correctly
- [ ] Advanced settings toggle works
- [ ] Create button creates room
- [ ] Room code is generated
- [ ] User is redirected to lobby

#### Room Lobby
- [ ] Room code displayed
- [ ] Player list updates
- [ ] Chat works
- [ ] Invite link copies
- [ ] Invite modal opens
- [ ] Start game works (when enough players)
- [ ] Leave room works

#### Join Room
- [ ] Room list loads
- [ ] Filters work correctly
- [ ] Rooms can be joined
- [ ] Full room shows appropriate error

#### Ranked
- [ ] Rating display is correct
- [ ] Queue buttons work
- [ ] Matchmaking shows progress
- [ ] Cancel queue works
- [ ] Match found notification appears

#### Store
- [ ] All store sections load
- [ ] Membership comparison visible
- [ ] Tier benefits clear
- [ ] Purchase flow works
- [ ] Owned items marked

### 2.3 Forms

#### Login
- [ ] Email validation works
- [ ] Password validation works
- [ ] Error messages display
- [ ] Success redirects correctly
- [ ] "Forgot password" link works

#### Account Creation
- [ ] All fields validate
- [ ] Username availability checked
- [ ] Password strength indicated
- [ ] Confirmation works

#### Room Settings
- [ ] All dropdowns functional
- [ ] Toggles work
- [ ] Values persist after save

---

## 3. Responsive QA

### 3.1 Breakpoint Testing

Test at these widths:
- [ ] 320px (small mobile)
- [ ] 375px (iPhone)
- [ ] 414px (larger phones)
- [ ] 768px (tablet portrait)
- [ ] 1024px (tablet landscape)
- [ ] 1280px (desktop)
- [ ] 1920px (large desktop)

### 3.2 Mobile Specific

- [ ] Bottom navigation visible and works
- [ ] Top nav collapses to hamburger
- [ ] Touch targets are 44×44px minimum
- [ ] No horizontal scrolling
- [ ] Forms are usable (keyboard doesn't cover inputs)
- [ ] Modals are full-screen or appropriately sized
- [ ] Cards stack vertically
- [ ] Text is readable without zooming

### 3.3 Tablet Specific

- [ ] Two-column layouts work
- [ ] Navigation is appropriate
- [ ] Touch works correctly
- [ ] Landscape orientation looks good

### 3.4 Desktop Specific

- [ ] Hover states work
- [ ] Multi-column layouts work
- [ ] Sidebars visible where expected
- [ ] Wide screens don't stretch content

---

## 4. Cross-Browser QA

### 4.1 Browser Matrix

| Browser | Version | Desktop | Mobile |
|---------|---------|---------|--------|
| Chrome | Latest | [ ] | [ ] |
| Chrome | Latest-1 | [ ] | [ ] |
| Firefox | Latest | [ ] | N/A |
| Safari | Latest | [ ] | [ ] |
| Edge | Latest | [ ] | N/A |

### 4.2 Browser-Specific Checks

#### Safari
- [ ] Flexbox/Grid works correctly
- [ ] Smooth scrolling works
- [ ] Date inputs work
- [ ] Position sticky works

#### Firefox
- [ ] Fonts render correctly
- [ ] Animations smooth
- [ ] Form styling consistent

#### Edge
- [ ] All features work
- [ ] No console errors

---

## 5. Performance QA

### 5.1 Lighthouse Scores (Target)

| Metric | Target | Actual |
|--------|--------|--------|
| Performance | ≥90 | [ ] |
| Accessibility | ≥90 | [ ] |
| Best Practices | ≥90 | [ ] |
| SEO | ≥90 | [ ] |

### 5.2 Core Web Vitals

| Metric | Target | Actual |
|--------|--------|--------|
| LCP (Largest Contentful Paint) | ≤2.5s | [ ] |
| FID (First Input Delay) | ≤100ms | [ ] |
| CLS (Cumulative Layout Shift) | ≤0.1 | [ ] |

### 5.3 Load Testing

- [ ] Pages load in <3 seconds on 3G
- [ ] Images are optimized (WebP, proper sizing)
- [ ] JavaScript bundle is reasonable (<500KB gzipped)
- [ ] No unnecessary network requests

---

## 6. Accessibility QA

### 6.1 Automated

- [ ] axe DevTools shows 0 violations
- [ ] Lighthouse Accessibility ≥90
- [ ] No console a11y warnings

### 6.2 Keyboard

- [ ] All pages fully navigable by keyboard
- [ ] Focus visible at all times
- [ ] Tab order is logical
- [ ] Modals trap focus correctly
- [ ] Escape closes modals
- [ ] No keyboard traps

### 6.3 Screen Reader

- [ ] All content announced
- [ ] Links/buttons have accessible names
- [ ] Forms labels read correctly
- [ ] Live regions announce updates
- [ ] Images have alt text (or are hidden)

### 6.4 Visual

- [ ] Text contrast ≥4.5:1
- [ ] UI contrast ≥3:1
- [ ] 200% zoom is usable
- [ ] Focus indicators visible
- [ ] Reduced motion is respected

---

## 7. Content QA

### 7.1 Copy

- [ ] No Lorem Ipsum remaining
- [ ] No spelling errors
- [ ] No grammatical errors
- [ ] Consistent terminology
- [ ] Correct capitalization
- [ ] Links have descriptive text

### 7.2 Microcopy

- [ ] Button labels are clear actions
- [ ] Error messages are helpful
- [ ] Empty states have guidance
- [ ] Loading states have context
- [ ] Success confirmations are present

### 7.3 Legal

- [ ] Privacy policy linked
- [ ] Terms of service linked
- [ ] Cookie notice (if applicable)
- [ ] Copyright year current

---

## 8. Edge Cases

### 8.1 Empty States

- [ ] No rooms available
- [ ] No friends online
- [ ] No search results
- [ ] No notifications
- [ ] No game history

### 8.2 Error States

- [ ] Network error
- [ ] Server error (500)
- [ ] Not found (404)
- [ ] Unauthorized (401)
- [ ] Forbidden (403)
- [ ] Form validation errors

### 8.3 Loading States

- [ ] Page loading
- [ ] Content loading
- [ ] Button loading
- [ ] Infinite scroll loading
- [ ] Matchmaking queue

### 8.4 Long Content

- [ ] Very long usernames
- [ ] Very long room names
- [ ] Many friends in list
- [ ] Many rooms in browser
- [ ] Long error messages

---

## 9. Real-Time QA

### 9.1 WebSocket

- [ ] Connection established
- [ ] Events received correctly
- [ ] Reconnection on disconnect
- [ ] Graceful degradation
- [ ] No duplicate events

### 9.2 Game Room

- [ ] Player joins reflected for all
- [ ] Player leaves reflected for all
- [ ] Chat messages arrive
- [ ] Game start synchronizes
- [ ] State updates correctly

---

## 10. Security QA

### 10.1 Authentication

- [ ] Login works
- [ ] Logout clears session
- [ ] Protected routes redirect
- [ ] Tokens expire correctly
- [ ] Password stored securely (hashed)

### 10.2 Input Handling

- [ ] XSS attempts blocked
- [ ] SQL injection attempts blocked
- [ ] CSRF tokens validated
- [ ] Rate limiting works

### 10.3 Data

- [ ] User can only see own data
- [ ] Admin routes protected
- [ ] Payment data handled securely
- [ ] No sensitive data in URLs

---

## 11. Integration QA

### 11.1 Third-Party

- [ ] Analytics events fire
- [ ] Error tracking works (Sentry)
- [ ] OAuth (Google) works
- [ ] OAuth (Discord) works
- [ ] Payment (Stripe) works

### 11.2 External Links

- [ ] All external links work
- [ ] External links open in new tab
- [ ] No broken links

---

## 12. Pre-Launch Checklist

### 12.1 Technical

- [ ] All QA items above passed
- [ ] Production environment tested
- [ ] SSL certificate valid
- [ ] Redirects configured (www, http)
- [ ] Error pages configured
- [ ] Analytics configured
- [ ] Monitoring configured

### 12.2 Content

- [ ] All copy finalized
- [ ] All images optimized
- [ ] Meta tags set
- [ ] Open Graph tags set
- [ ] Favicon added

### 12.3 Final Review

- [ ] Stakeholder review complete
- [ ] Design review complete
- [ ] Product owner sign-off
- [ ] Go-live plan documented
- [ ] Rollback plan documented

---

## 13. Bug Report Template

```markdown
## Bug Report

**Page:** [URL or screen name]
**Browser:** [Browser + version]
**Device:** [Device type]
**Viewport:** [Width × Height]

### Steps to Reproduce
1. 
2. 
3. 

### Expected Behavior


### Actual Behavior


### Screenshot/Video
[Attach if applicable]

### Priority
- [ ] Critical (blocks launch)
- [ ] High (major issue)
- [ ] Medium (should fix)
- [ ] Low (minor issue)
```

---

*Document Status: Complete*  
*Cross-reference: [ACCESSIBILITY.md](./ACCESSIBILITY.md) | [TECH_STACK.md](./TECH_STACK.md)*
