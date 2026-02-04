# Colonist.io Redesign — Demo Recording Script

**Duration**: ~120 seconds
**Goal**: Showcase the UX improvements, visual polish, and key user flows of the redesign.
**Prerequisites**:
1. Run `npm run dev`
2. Open http://localhost:3000
3. Maximize browser window
4. Clear browser history/cache or use Incognito for fresh state

---

## 🎬 Scene 1: Introduction & Homepage (0:00 - 0:20)
**Action**: Start on Homepage (Logged Out state).
**Voiceover**: "Hi, I'm [Name]. This is my redesign of Colonist.io, the popular online Settlers of Catan platform. My goal was to modernize the interface, improve accessibility, and streamline the new player experience."
**Action**:
- Scroll down slowly to show the "Why Play" section.
- Hover over the primary "Play Now" and secondary "Create Room" buttons to show states.
- **Click** "Log In" (Toggle Auth).
- **Voiceover**: "Here's the new logged-in dashboard. It immediately surfaces your friends online and recent game history, reducing friction to get back into the game."

## 🎬 Scene 2: The Core Loop - Play Mode (0:20 - 0:40)
**Action**: Click "Play" in the top navigation.
**Voiceover**: "I completely overhauled the game selection screen. Instead of a cluttered list, clear cards help users understand their options—from Quick Play to Ranked."
**Action**:
- Hover over the modes.
- Click "Play with Friends" (Create Room).

## 🎬 Scene 3: Create Room Wizard (0:40 - 1:10)
**Action**: In the Create Room Wizard.
**Voiceover**: "One of the biggest pain points was room creation. I introduced a stepped wizard pattern."
**Action**:
- **Step 1**: Select "Base Game" (shows checking animation). Click Next.
- **Step 2**: Select "Balanced Map". Click Next.
- **Step 3**: Change Turn Timer to "90 seconds". Toggle "Private Room" on.
- **Click** "Create Room".
**Voiceover**: "This breaks complex configurations into digestible chunks, preventing cognitive overload."

## 🎬 Scene 4: The Lobby & Invites (1:10 - 1:30)
**Action**: Arrive in Room Lobby `/rooms/[id]`.
**Voiceover**: "In the lobby, the focus is on coordination. The invite link is front and center."
**Action**:
- Click the "Copy" button next to the link. (Toast appears: "Link copied to clipboard!")
- Click "Invite Friends".
- Click "Invite" on a friend in the modal.
**Voiceover**: "And inviting friends is now a seamless, one-click action without leaving the context of the room."

## 🎬 Scene 5: Ranked & Spectate (1:30 - 1:50)
**Action**: Click "Ranked" in top nav.
**Voiceover**: "For competitive players, the new Ranked hub visualizes progression clearly."
**Action**:
- Hover over the Season Progress bar.
- Click "Find Ranked Match" (Show loading state). Cancel it.
- Click "Spectate" in top nav.
**Voiceover**: "And Spectators can easily filter live games to learn from the best strategies."
**Action**: Click "Cities & Knights" filter chip.

## 🎬 Scene 6: Conclusion (1:50 - 2:00)
**Action**: Click "Store" -> "Membership".
**Voiceover**: "Finally, the membership page clearly compares tiers, driving conversion through transparency. This redesign balances the game's depth with a modern, accessible UI."
**Action**: Return to Home. Fade out.

---

## 🛠️ Tech Stack Mention (Optional)
"Built with Next.js, TypeScript, and Tailwind CSS. Fully responsive and accessible."
