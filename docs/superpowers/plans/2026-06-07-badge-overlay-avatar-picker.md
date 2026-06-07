# Badge Unlock Overlay & Avatar Picker — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show a full-screen badge celebration modal when students earn badges, and let students pick their animal mascot avatar during onboarding.

**Architecture:** Two independent features. `BadgeUnlockModal` is a new standalone component wired into `PracticeRunner` and `CapsSubjectTopic` by collecting `newBadges` from settled attempt API responses. `AvatarPicker` is a new component rendered inline at the top of the onboarding registration form.

**Tech Stack:** React, TypeScript, Tailwind CSS, framer-motion, Node.js built-in test runner (`node:test`)

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/components/gamification/BadgeUnlockModal.tsx` | **Create** | Full-screen overlay modal, cycles through multiple badges, fires confetti |
| `src/components/onboarding/AvatarPicker.tsx` | **Create** | 8-avatar image grid with tap-to-select ring highlight |
| `src/components/PracticeRunner.tsx` | **Modify** | Collect `newBadges` from allSettled responses, add `pendingBadges` state, render modal |
| `src/components/CapsSubjectTopic.tsx` | **Modify** | Same badge collection & modal rendering as PracticeRunner |
| `src/components/onboarding/OnboardingFlow.tsx` | **Modify** | Add `avatar` form field, render `AvatarPicker` at top of step-0, pass `form.avatar` to API |

---

## Task 1: BadgeUnlockModal component

**Files:**
- Create: `src/components/gamification/BadgeUnlockModal.tsx`

### Background

The modal is shown when `badges` prop is non-empty. Multiple badges cycle one at a time. The button label is "Next →" until the last badge, then "Keep going!". Clicking the dim backdrop does nothing. Confetti fires once when the modal first opens. The project uses `framer-motion` (already a dependency) and Tailwind CSS.

Badge images live at `/badges/<id>.webp`. Each badge ID maps to a human-readable title and an emoji fallback shown if the image fails to load.

- [ ] **Step 1: Create the component file**

```tsx
// src/components/gamification/BadgeUnlockModal.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerConfetti } from '../../lib/confetti';

interface BadgeUnlockModalProps {
  badges: string[];
  onDismiss: () => void;
}

interface BadgeMeta {
  title: string;
  emoji: string;
}

const BADGE_META: Record<string, BadgeMeta> = {
  'first-correct':    { title: 'First Correct',     emoji: '⭐' },
  'streak-3':         { title: '3-Answer Streak',    emoji: '🔥' },
  'streak-5':         { title: '5-Answer Streak',    emoji: '🔥' },
  'streak-10':        { title: '10-Answer Streak',   emoji: '🔥' },
  'xp-500':           { title: '500 XP',             emoji: '🏅' },
  'xp-2000':          { title: '2 000 XP',           emoji: '🥈' },
  'xp-5000':          { title: '5 000 XP',           emoji: '🏆' },
  'topic-complete-5': { title: 'Topic Starter',      emoji: '📖' },
  'topic-complete-20':{ title: 'Topic Master',       emoji: '📖' },
  'perfect-set-5':    { title: 'Perfect 5',          emoji: '✨' },
  'perfect-set-10':   { title: 'Perfect 10',         emoji: '👑' },
};

export default function BadgeUnlockModal({ badges, onDismiss }: BadgeUnlockModalProps) {
  const [index, setIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (badges.length > 0) {
      triggerConfetti();
      setIndex(0);
      setImgError(false);
    }
  }, [badges]);

  if (badges.length === 0) return null;

  const id = badges[index];
  const meta = BADGE_META[id] ?? { title: id, emoji: '🏅' };
  const isLast = index === badges.length - 1;
  const hasMultiple = badges.length > 1;

  const handleNext = () => {
    if (isLast) {
      onDismiss();
    } else {
      setImgError(false);
      setIndex((i) => i + 1);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      >
        <motion.div
          key={id}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center space-y-4"
        >
          {hasMultiple && (
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {index + 1} of {badges.length}
            </p>
          )}

          <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">
            Badge Unlocked!
          </p>

          <div className="flex justify-center">
            {imgError ? (
              <span className="text-6xl">{meta.emoji}</span>
            ) : (
              <img
                src={`/badges/${id}.webp`}
                alt={meta.title}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-indigo-100"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <h2 className="text-2xl font-bold text-slate-800">{meta.title}</h2>

          <button
            onClick={handleNext}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            {isLast ? 'Keep going!' : 'Next →'}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors from the new file.

- [ ] **Step 3: Commit**

```bash
git add src/components/gamification/BadgeUnlockModal.tsx
git commit -m "feat: add BadgeUnlockModal component"
```

---

## Task 2: Wire BadgeUnlockModal into PracticeRunner

**Files:**
- Modify: `src/components/PracticeRunner.tsx`

### Background

`PracticeRunner` currently submits attempts in a `useEffect` when `done` fires. The fetch calls use `.catch(() => {})` which swallows errors to `undefined`. `Promise.allSettled` wraps them all. We need to:

1. Add `pendingBadges` state.
2. Change each fetch to return the parsed JSON (or `null` on error) instead of swallowing to `undefined`.
3. After `allSettled`, extract and deduplicate `newBadges` from successful responses, set them into `pendingBadges`.
4. Render `<BadgeUnlockModal>` inside the component's existing fragment wrapper.

- [ ] **Step 1: Add import and state**

At the top of `src/components/PracticeRunner.tsx`, add the import:

```tsx
import BadgeUnlockModal from './gamification/BadgeUnlockModal';
```

Inside the `PracticeRunner` function body, add state after the existing `useState` declarations:

```tsx
const [pendingBadges, setPendingBadges] = useState<string[]>([]);
```

- [ ] **Step 2: Replace the submit useEffect**

Find the `useEffect` block that begins with `if (!done || !task || hasSubmitted.current) return;` and replace the entire block with:

```tsx
useEffect(() => {
  if (!done || !task || hasSubmitted.current) return;
  hasSubmitted.current = true;
  if (!student) {
    const weak = pickWeakSections(aggregateResultsBySection(resultsRef.current));
    onComplete?.(weak);
    return;
  }

  const results = resultsRef.current;
  if (results.length === 0) {
    onComplete?.([]);
    return;
  }

  const subject = taskToSubject(apiPath);

  const promises = results.map((r) =>
    fetch('/api/attempts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task,
        subject,
        section: r.section,
        isCorrect: r.correct,
        streak: 0,
      }),
    })
      .then((res) => res.json() as Promise<{ newBadges?: string[] }>)
      .catch(() => null),
  );

  Promise.allSettled(promises).then((settled) => {
    const newBadges = [
      ...new Set(
        settled
          .filter(
            (r): r is PromiseFulfilledResult<{ newBadges?: string[] }> =>
              r.status === 'fulfilled' && r.value !== null,
          )
          .flatMap((r) => r.value.newBadges ?? []),
      ),
    ];
    if (newBadges.length > 0) setPendingBadges(newBadges);
    refreshStudent();
    const weak = pickWeakSections(aggregateResultsBySection(resultsRef.current));
    onComplete?.(weak);
  });
}, [done, task, apiPath, student, refreshStudent, onComplete]);
```

- [ ] **Step 3: Render the modal**

The component returns a fragment `<>...</>`. Add `<BadgeUnlockModal>` as the last child inside that fragment:

```tsx
return (
  <>
    {done ? (
      // ...existing done card...
    ) : (
      // ...existing practice UI...
    )}

    <BadgeUnlockModal
      badges={pendingBadges}
      onDismiss={() => setPendingBadges([])}
    />
  </>
);
```

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/PracticeRunner.tsx
git commit -m "feat: wire BadgeUnlockModal into PracticeRunner"
```

---

## Task 3: Wire BadgeUnlockModal into CapsSubjectTopic

**Files:**
- Modify: `src/components/CapsSubjectTopic.tsx`

### Background

`CapsSubjectTopic` has the same pattern as `PracticeRunner`: a `useEffect` with `Promise.allSettled(promises).then(() => refreshStudent())`. There is also a dummy POST (the first `fetch` call) whose response we can ignore. Only the per-result `promises` array needs to be changed to capture `newBadges`. The component currently returns a single `<TopicContainer>` — wrap it in a fragment to add the modal alongside.

- [ ] **Step 1: Add import and state**

Add to the imports at the top of `src/components/CapsSubjectTopic.tsx`:

```tsx
import BadgeUnlockModal from './gamification/BadgeUnlockModal';
```

Add state inside the component function (after existing `useState` declarations):

```tsx
const [pendingBadges, setPendingBadges] = useState<string[]>([]);
```

- [ ] **Step 2: Replace the submit useEffect**

Find the `useEffect` that begins `if (!done || !task || hasSubmitted.current) return;` and replace the entire block with:

```tsx
useEffect(() => {
  if (!done || !task || hasSubmitted.current) return;
  hasSubmitted.current = true;
  if (!student) return;

  const results = resultsRef.current;
  if (results.length === 0) return;

  // Dummy aggregate POST (fire-and-forget, response not used)
  fetch('/api/attempts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      task,
      subject: taskToSubject(apiPath),
      isCorrect: true,
      streak: 0,
    }),
  }).catch(() => {});

  // Per-result POSTs — collect newBadges from responses
  const promises = results.map((r) =>
    fetch('/api/attempts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task,
        subject: taskToSubject(apiPath),
        section: r.section,
        isCorrect: r.correct,
        streak: 0,
      }),
    })
      .then((res) => res.json() as Promise<{ newBadges?: string[] }>)
      .catch(() => null),
  );

  Promise.allSettled(promises).then((settled) => {
    const newBadges = [
      ...new Set(
        settled
          .filter(
            (r): r is PromiseFulfilledResult<{ newBadges?: string[] }> =>
              r.status === 'fulfilled' && r.value !== null,
          )
          .flatMap((r) => r.value.newBadges ?? []),
      ),
    ];
    if (newBadges.length > 0) setPendingBadges(newBadges);
    refreshStudent();
  });
}, [done, task, apiPath, student, refreshStudent]);
```

- [ ] **Step 3: Wrap return in a fragment and add modal**

The component currently returns `<TopicContainer ...>...</TopicContainer>`. Wrap it:

```tsx
return (
  <>
    <TopicContainer title={title} subtitle={subtitle} onModeChange={setMode}>
      {/* ...existing content unchanged... */}
    </TopicContainer>

    <BadgeUnlockModal
      badges={pendingBadges}
      onDismiss={() => setPendingBadges([])}
    />
  </>
);
```

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/CapsSubjectTopic.tsx
git commit -m "feat: wire BadgeUnlockModal into CapsSubjectTopic"
```

---

## Task 4: AvatarPicker component

**Files:**
- Create: `src/components/onboarding/AvatarPicker.tsx`

### Background

A simple grid of 8 circular avatar images. Tapping one calls `onChange` with its path. The selected avatar gets an indigo `ring-2 ring-indigo-500` highlight. No submission needed — the selection is immediate. Images are at `/avatars/avatar-1.webp` through `/avatars/avatar-8.webp`.

- [ ] **Step 1: Create the component**

```tsx
// src/components/onboarding/AvatarPicker.tsx
'use client';

const AVATARS = [
  '/avatars/avatar-1.webp',
  '/avatars/avatar-2.webp',
  '/avatars/avatar-3.webp',
  '/avatars/avatar-4.webp',
  '/avatars/avatar-5.webp',
  '/avatars/avatar-6.webp',
  '/avatars/avatar-7.webp',
  '/avatars/avatar-8.webp',
];

interface AvatarPickerProps {
  value: string;
  onChange: (path: string) => void;
}

export default function AvatarPicker({ value, onChange }: AvatarPickerProps) {
  return (
    <div>
      <p className="text-sm font-medium text-slate-700 mb-2">Choose your mascot</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {AVATARS.map((path) => (
          <button
            key={path}
            type="button"
            onClick={() => onChange(path)}
            className={[
              'rounded-full focus:outline-none transition-transform hover:scale-110',
              value === path
                ? 'ring-2 ring-indigo-500 ring-offset-2 scale-110'
                : 'ring-2 ring-transparent',
            ].join(' ')}
          >
            <img
              src={path}
              alt={path}
              className="w-14 h-14 rounded-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/onboarding/AvatarPicker.tsx
git commit -m "feat: add AvatarPicker component"
```

---

## Task 5: Wire AvatarPicker into OnboardingFlow

**Files:**
- Modify: `src/components/onboarding/OnboardingFlow.tsx`

### Background

`OnboardingFlow` has a `form` state object (`realName`, `displayName`, `school`, `age`, `grade`). We add an `avatar` field defaulting to `'/avatars/avatar-1.webp'`. `AvatarPicker` renders at the top of the step-0 form. Both hardcoded `'/avatars/avatar-1.webp'` strings (in the API POST body on line ~72 and in `setStudent` on line ~95) are replaced with `form.avatar`.

- [ ] **Step 1: Add import**

Add to imports at the top of `src/components/onboarding/OnboardingFlow.tsx`:

```tsx
import AvatarPicker from './AvatarPicker';
```

- [ ] **Step 2: Add `avatar` to form state**

Find:
```tsx
const [form, setForm] = useState({
  realName: '',
  displayName: '',
  school: '',
  age: '',
  grade: '',
});
```

Replace with:
```tsx
const [form, setForm] = useState({
  realName: '',
  displayName: '',
  school: '',
  age: '',
  grade: '',
  avatar: '/avatars/avatar-1.webp',
});
```

- [ ] **Step 3: Replace hardcoded avatar in the API POST body**

Find:
```tsx
body: JSON.stringify({ ...data, avatar: '/avatars/avatar-1.webp' }),
```

Replace with:
```tsx
body: JSON.stringify({ ...data, avatar: form.avatar }),
```

- [ ] **Step 4: Replace hardcoded avatar in setStudent**

Find:
```tsx
setStudent({
  id: '',
  displayName: form.displayName,
  avatar: '/avatars/avatar-1.webp',
  grade: Number(form.grade),
  xp: 0,
  xpByScope: {},
});
```

Replace with:
```tsx
setStudent({
  id: '',
  displayName: form.displayName,
  avatar: form.avatar,
  grade: Number(form.grade),
  xp: 0,
  xpByScope: {},
});
```

- [ ] **Step 5: Render AvatarPicker in the form**

In the step-0 form JSX, find the opening `<form onSubmit={handleRegister} className="space-y-4">` tag. Add `<AvatarPicker>` as the first child inside:

```tsx
<form onSubmit={handleRegister} className="space-y-4">
  <AvatarPicker
    value={form.avatar}
    onChange={(p) => update('avatar', p)}
  />
  <Input
    label="Your name"
    {/* ...rest unchanged... */}
  />
  {/* ...rest of form unchanged... */}
</form>
```

- [ ] **Step 6: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/onboarding/OnboardingFlow.tsx
git commit -m "feat: add avatar picker to onboarding flow"
```

---

## Final verification

- [ ] **Run the dev server and verify both features visually**

```bash
npm run dev
```

Check:
1. Open the app in the browser.
2. Go to onboarding — confirm the 8 mascot images appear above the form, tapping one highlights it with an indigo ring.
3. Complete a practice session as a logged-in student — after finishing, confirm the badge overlay appears if any badges were earned.
4. If no badges trigger naturally (XP threshold not met), temporarily lower a badge threshold in `src/lib/server/badges.ts` (e.g. change `totalXp >= 10` to `totalXp >= 1`), run a session, then revert.

- [ ] **Run tests to confirm no regressions**

```bash
npm test
```

Expected: all existing tests pass (badges, scoring, revision, schema).
