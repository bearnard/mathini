# Badge Unlock Overlay & Avatar Picker — Design Spec

Date: 2026-06-07  
Status: Approved

---

## Overview

Two independent UI features:

1. **Badge unlock overlay** — a full-screen celebration modal shown to a student when they earn one or more new badges after answering questions.
2. **Avatar picker** — an inline mascot-selection grid at the top of the registration form in onboarding so students choose their avatar during sign-up.

---

## 1. Badge Unlock Overlay

### Goal

When the attempts API returns `newBadges: string[]` with one or more entries, show a full-screen celebratory modal. The student must dismiss it before continuing.

### Component: `BadgeUnlockModal`

**Location:** `src/components/gamification/BadgeUnlockModal.tsx`

**Props:**
```ts
interface BadgeUnlockModalProps {
  badges: string[];          // badge IDs, e.g. ['streak-5', 'xp-500']
  onDismiss: () => void;
}
```

**Behaviour:**
- If `badges` is empty, renders nothing.
- If multiple badges unlock at once, shows them one at a time. A counter ("1 of 2") is visible when there are multiple.
- The "Next" button advances to the next badge; the last badge shows "Keep going!" which calls `onDismiss`.
- Backdrop is a semi-transparent dark overlay (`bg-black/50`). Clicking the backdrop does NOT dismiss — the student must use the button (prevents accidental dismissal).
- Uses `framer-motion` `AnimatePresence` for modal entrance (scale + fade) and badge transitions.
- Confetti fires via the existing `triggerConfetti` utility on the first badge shown.

**Badge metadata mapping** — hardcoded in the component:
| ID | Title | Emoji |
|----|-------|-------|
| `first-correct` | First Correct | ⭐ |
| `streak-3` | 3-Answer Streak | 🔥 |
| `streak-5` | 5-Answer Streak | 🔥 |
| `streak-10` | 10-Answer Streak | 🔥 |
| `xp-500` | 500 XP | 🏅 |
| `xp-2000` | 2 000 XP | 🥈 |
| `xp-5000` | 5 000 XP | 🏆 |
| `topic-complete-5` | Topic Starter | 📖 |
| `topic-complete-20` | Topic Master | 📖 |
| `perfect-set-5` | Perfect 5 | ✨ |
| `perfect-set-10` | Perfect 10 | 👑 |

**Image path:** `/badges/<id>.webp` (falls back to emoji if image fails to load).

### Wiring in `PracticeRunner`

`PracticeRunner` currently fire-and-forgets attempt POSTs. Changes:

1. Collect the settled responses from `Promise.allSettled(promises)`.
2. Extract `newBadges` from each successful response, flatten and deduplicate.
3. Set into a `pendingBadges: string[]` state.
4. Render `<BadgeUnlockModal badges={pendingBadges} onDismiss={() => setPendingBadges([])} />` after the existing JSX.

The modal only appears on the completion screen (after `done === true`) since attempts are submitted at that point.

### Wiring in `CapsSubjectTopic`

`CapsSubjectTopic.tsx` makes its own attempt POSTs at session completion (one dummy POST plus one per-result POST, all inside a `Promise.allSettled`). Apply the same pattern:
- Await the responses, extract `newBadges`, set into local `pendingBadges` state.
- Render `<BadgeUnlockModal>` in the component's JSX.

---

## 2. Avatar Picker

### Goal

Replace the hardcoded `avatar-1.webp` in `OnboardingFlow` with a tappable grid of the 8 available mascot images. The chosen avatar is sent to the API on registration.

### Component: `AvatarPicker`

**Location:** `src/components/onboarding/AvatarPicker.tsx`

**Props:**
```ts
interface AvatarPickerProps {
  value: string;             // currently selected avatar path
  onChange: (path: string) => void;
}
```

**Behaviour:**
- Renders 8 circular avatar images in a 4×2 or wrapping flex grid.
- The selected avatar has an indigo ring (`ring-2 ring-indigo-500`).
- Tapping any avatar calls `onChange` with its path (`/avatars/avatar-N.webp`).
- No submit needed — selection is immediate.

### Changes to `OnboardingFlow`

1. Add `avatar` field to form state, defaulting to `'/avatars/avatar-1.webp'`.
2. Render `<AvatarPicker value={form.avatar} onChange={(p) => update('avatar', p)} />` at the top of the step-0 form, above the name input, with a small label: "Choose your mascot".
3. Replace both hardcoded `'/avatars/avatar-1.webp'` strings (in the API POST body and in the `setStudent` call) with `form.avatar`.

---

## Out of scope

- Letting students change their avatar after registration (a future settings screen).
- Animated badge reveal sequences beyond a single pop-in transition.
- Backend validation that the avatar path is one of the 8 known values.
