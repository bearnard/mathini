# PrepPals UI Redesign (Mobile + Desktop) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign PrepPals learner UI for mobile and desktop with a PrepPals brand design system, shared app shell, home hub + drill-down, and polished practice/onboarding/leaderboard chrome.

**Architecture:** Introduce CSS design tokens + `gradeAccent` helper, upgrade shared UI primitives, extract layout headers from `App.tsx`, redesign `CurriculumSelector` into hub + drill-down, then restyle topic/practice/onboarding/leaderboard to consume the same system. No API or curriculum content changes.

**Tech Stack:** Next.js, React 19, TypeScript, Tailwind CSS v4 (`@theme`), framer-motion, lucide-react, Node test runner (`node --import tsx --test`)

**Spec:** `docs/superpowers/specs/2026-07-20-ui-redesign-mobile-desktop-design.md`

## Global Constraints

- Primary CTA color: brand orange `#f68535`
- Nav/selection chrome accent: brand blue `#3285bc`
- Success: brand green `#60a763`; XP/highlight: brand yellow `#fac446`; warnings sparingly: brand coral `#f97665`
- Navigation stays hub + drill-down (grade → subject → term → topic)
- No bottom tabs, no continue/resume path, no dark mode, no backend changes
- Touch targets ≥44px where practical; form text ≥16px
- Honor `prefers-reduced-motion`
- Paths below are relative to `mathini/` (app root)
- If git is unavailable, skip commit steps and continue
- Working directory for commands: `mathini/`

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/app/globals.css` | Modify | `@theme` brand tokens, reduced-motion, safe-area |
| `src/lib/brand.ts` | Create | `gradeAccent`, brand color constants |
| `src/lib/brand.test.ts` | Create | Unit tests for `gradeAccent` |
| `src/components/ui/Button.tsx` | Modify | Orange primary, brand variants |
| `src/components/ui/Card.tsx` | Modify | Brand hover + keyboard for interactive |
| `src/components/ui/Feedback.tsx` | Modify | Green/coral brand states |
| `src/components/ui/Input.tsx` | Modify | Brand blue focus ring |
| `src/components/ui/Select.tsx` | Modify | Brand blue focus ring |
| `src/components/layout/AppHeader.tsx` | Create | Browse/leaderboard sticky header |
| `src/components/layout/TopicHeader.tsx` | Create | Topic sticky back + breadcrumb |
| `src/components/layout/DrillHeader.tsx` | Create | Drill step header |
| `src/components/layout/Breadcrumb.tsx` | Create | Tappable path segments |
| `src/components/layout/PageLayout.tsx` | Modify | Brand-aligned spacing |
| `src/components/layout/TopicContainer.tsx` | Modify | Segmented control + brand |
| `src/App.tsx` | Modify | Compose headers; thinner switchboard |
| `src/components/CurriculumSelector.tsx` | Modify | Home hub + responsive drill-down |
| `src/components/PracticeRunner.tsx` | Modify | Progress/options/completion chrome |
| `src/components/onboarding/OnboardingFlow.tsx` | Modify | Brand visual pass |
| `src/components/onboarding/ResumeFlow.tsx` | Modify | Brand visual pass |
| `src/components/onboarding/OnboardingGate.tsx` | Modify | Brand background shell |
| `src/components/leaderboard/LeaderboardView.tsx` | Modify | Brand tabs/rows/header |

**Runtime curriculum shapes** (used by selector; `types/curriculum.ts` may lag — do not block on fixing types unless compile fails):

```ts
// Observed from curriculum modules + CurriculumSelector
Grade:   { id: number; title: string; subjects: Subject[] }
Subject: { id: string; title: string; terms: Term[] }
Term:    { id: number; title: string; topics: Topic[] }
Topic:   { id: string; title: string; description?: string; component: React.LazyExoticComponent<...> }
```

---

### Task 1: Design tokens + `gradeAccent`

**Files:**
- Modify: `src/app/globals.css`
- Create: `src/lib/brand.ts`
- Test: `src/lib/brand.test.ts`

**Interfaces:**
- Consumes: nothing
- Produces:
  - `BRAND` color hex map
  - `gradeAccent(gradeId: number): { solid: string; soft: string; text: string; border: string; ring: string }`
  - Tailwind theme colors usable as `bg-brand-orange`, `text-brand-blue`, etc.

- [ ] **Step 1: Write failing tests for `gradeAccent`**

```ts
// src/lib/brand.test.ts
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { gradeAccent, BRAND_ACCENT_ORDER } from './brand';

describe('gradeAccent', () => {
  it('returns stable accents for the same grade id', () => {
    assert.deepEqual(gradeAccent(5), gradeAccent(5));
  });

  it('cycles through brand accents by grade id', () => {
    const a = gradeAccent(5);
    const b = gradeAccent(6);
    assert.notEqual(a.solid, b.solid);
  });

  it('wraps the accent list for higher grades', () => {
    const first = gradeAccent(5);
    const wrapped = gradeAccent(5 + BRAND_ACCENT_ORDER.length);
    assert.deepEqual(first, wrapped);
  });

  it('includes tailwind class strings for solid/soft/text/border/ring', () => {
    const a = gradeAccent(7);
    assert.match(a.solid, /^bg-/);
    assert.match(a.soft, /^bg-/);
    assert.match(a.text, /^text-/);
    assert.match(a.border, /^border-/);
    assert.match(a.ring, /^ring-/);
  });
});
```

- [ ] **Step 2: Run test — expect FAIL**

```bash
npm test -- src/lib/brand.test.ts
```

Expected: FAIL (module not found)

- [ ] **Step 3: Implement `brand.ts`**

```ts
// src/lib/brand.ts
/** PrepPals brand accents — order used for grade tile cycling */
export const BRAND_ACCENT_ORDER = ['orange', 'blue', 'green', 'coral', 'yellow'] as const;

export type BrandAccent = (typeof BRAND_ACCENT_ORDER)[number];

export const BRAND = {
  orange: '#f68535',
  blue: '#3285bc',
  green: '#60a763',
  coral: '#f97665',
  yellow: '#fac446',
} as const;

const ACCENT_CLASSES: Record<
  BrandAccent,
  { solid: string; soft: string; text: string; border: string; ring: string }
> = {
  orange: {
    solid: 'bg-brand-orange',
    soft: 'bg-brand-orange/15',
    text: 'text-brand-orange',
    border: 'border-brand-orange/40',
    ring: 'ring-brand-orange',
  },
  blue: {
    solid: 'bg-brand-blue',
    soft: 'bg-brand-blue/15',
    text: 'text-brand-blue',
    border: 'border-brand-blue/40',
    ring: 'ring-brand-blue',
  },
  green: {
    solid: 'bg-brand-green',
    soft: 'bg-brand-green/15',
    text: 'text-brand-green',
    border: 'border-brand-green/40',
    ring: 'ring-brand-green',
  },
  coral: {
    solid: 'bg-brand-coral',
    soft: 'bg-brand-coral/15',
    text: 'text-brand-coral',
    border: 'border-brand-coral/40',
    ring: 'ring-brand-coral',
  },
  yellow: {
    solid: 'bg-brand-yellow',
    soft: 'bg-brand-yellow/20',
    text: 'text-amber-700',
    border: 'border-brand-yellow/50',
    ring: 'ring-brand-yellow',
  },
};

/** Deterministic accent classes for a grade id (5–12). */
export function gradeAccent(gradeId: number) {
  const idx =
    ((gradeId % BRAND_ACCENT_ORDER.length) + BRAND_ACCENT_ORDER.length) %
    BRAND_ACCENT_ORDER.length;
  // Prefer mapping grade 5 → index 0: shift so 5 maps to orange
  const shifted =
    (((gradeId - 5) % BRAND_ACCENT_ORDER.length) + BRAND_ACCENT_ORDER.length) %
    BRAND_ACCENT_ORDER.length;
  return ACCENT_CLASSES[BRAND_ACCENT_ORDER[shifted]];
}
```

Note: remove unused `idx` if present — keep only `shifted`.

- [ ] **Step 4: Update `globals.css`**

```css
@import "tailwindcss";

@theme {
  --color-brand-orange: #f68535;
  --color-brand-blue: #3285bc;
  --color-brand-green: #60a763;
  --color-brand-coral: #f97665;
  --color-brand-yellow: #fac446;
}

@layer base {
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@utility pb-safe {
  padding-bottom: max(1rem, env(safe-area-inset-bottom, 0px));
}

@utility pt-safe {
  padding-top: env(safe-area-inset-top, 0px);
}
```

- [ ] **Step 5: Run tests — expect PASS**

```bash
npm test -- src/lib/brand.test.ts
```

- [ ] **Step 6: Commit** (skip if no git)

```bash
git add src/app/globals.css src/lib/brand.ts src/lib/brand.test.ts
git commit -m "feat(ui): add PrepPals brand tokens and gradeAccent helper"
```

---

### Task 2: Shared UI primitives (Button, Card, Feedback, Input, Select)

**Files:**
- Modify: `src/components/ui/Button.tsx`
- Modify: `src/components/ui/Card.tsx`
- Modify: `src/components/ui/Feedback.tsx`
- Modify: `src/components/ui/Input.tsx`
- Modify: `src/components/ui/Select.tsx`

**Interfaces:**
- Consumes: brand Tailwind classes from Task 1
- Produces: same component APIs; Button primary = orange; Card interactive keyboard support

- [ ] **Step 1: Update Button variants**

Replace `variants` / focus ring in `Button.tsx`:

```ts
const variants = {
  primary:
    'bg-brand-orange text-white hover:bg-orange-600 shadow-md border-transparent',
  secondary:
    'bg-white text-slate-700 hover:bg-slate-50 border-slate-200 shadow-sm',
  outline:
    'bg-transparent text-brand-blue border-brand-blue/30 hover:bg-brand-blue/10',
  ghost:
    'bg-transparent text-slate-600 hover:bg-slate-100 border-transparent shadow-none',
  danger:
    'bg-brand-coral/15 text-red-700 hover:bg-brand-coral/25 border-brand-coral/40',
  success:
    'bg-brand-green/15 text-green-800 hover:bg-brand-green/25 border-brand-green/40',
};
```

In `className` cn() string, change focus ring to `focus:ring-brand-blue`. Keep sizes (already min-h-9/11/14).

- [ ] **Step 2: Update Card for brand hover + keyboard**

```tsx
// Card.tsx — key behavior
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, onClick, onKeyDown, ...props }, ref) => {
    const interactive = variant === 'interactive' || typeof onClick === 'function';

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);
      if (!onClick || e.defaultPrevented) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
      }
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        role={interactive && onClick ? 'button' : undefined}
        tabIndex={interactive && onClick ? 0 : undefined}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className={cn(
          'bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden',
          interactive &&
            'hover:shadow-md hover:border-brand-blue/40 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2',
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);
```

- [ ] **Step 3: Update Feedback colors**

Replace emerald/red panels with brand green/coral:

- Correct: `bg-brand-green/15 border-brand-green/30`, icon `bg-brand-green/20 text-brand-green`, titles `text-green-900` / `text-green-800`
- Incorrect: `bg-brand-coral/15 border-brand-coral/30`, icon `bg-brand-coral/20 text-brand-coral`, titles `text-red-900` / `text-red-800`

Keep icons + text (not color-only).

- [ ] **Step 4: Update Input + Select focus rings**

Replace `focus:ring-indigo-500 focus:border-indigo-500` with `focus:ring-brand-blue focus:border-brand-blue` in both files. Keep `text-base` (16px).

- [ ] **Step 5: Lint sanity**

```bash
npx tsc --noEmit 2>&1 | head -40
```

Fix any type errors introduced in these files.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/
git commit -m "feat(ui): brand-align Button, Card, Feedback, Input, Select"
```

---

### Task 3: AppHeader + TopicHeader + App shell wire-up

**Files:**
- Create: `src/components/layout/AppHeader.tsx`
- Create: `src/components/layout/TopicHeader.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `Student` from `StudentContext`
- Produces:
  - `AppHeader({ student, onToggleLeaderboard, onSignOut, leaderboardActive })`
  - `TopicHeader({ gradeTitle?, subjectTitle?, termTitle?, topicTitle, onBack })`

- [ ] **Step 1: Create `AppHeader.tsx`**

```tsx
// src/components/layout/AppHeader.tsx
'use client';

import { Trophy, LogOut } from 'lucide-react';
import type { Student } from '../../lib/client/StudentContext';
import { cn } from '../../lib/utils';

interface AppHeaderProps {
  student: Student | null;
  leaderboardActive: boolean;
  onToggleLeaderboard: () => void;
  onSignOut: () => void;
}

export default function AppHeader({
  student,
  leaderboardActive,
  onToggleLeaderboard,
  onSignOut,
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 pt-safe backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
        <div className="flex min-w-0 items-center gap-2">
          {student && (
            <>
              <img
                src={student.avatar}
                alt=""
                className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-brand-yellow/60"
              />
              <span className="truncate text-sm font-semibold text-slate-700">
                {student.displayName}
              </span>
              <span className="shrink-0 rounded-full bg-brand-yellow/25 px-2 py-0.5 text-xs font-bold text-amber-800">
                {student.xp} XP
              </span>
            </>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={onToggleLeaderboard}
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors',
              leaderboardActive
                ? 'bg-brand-blue/15 text-brand-blue'
                : 'text-slate-500 hover:bg-slate-100',
            )}
            title="Leaderboard"
            aria-label="Leaderboard"
            aria-pressed={leaderboardActive}
          >
            <Trophy className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onSignOut}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            title="Switch student"
            aria-label="Log out"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create `TopicHeader.tsx`**

```tsx
// src/components/layout/TopicHeader.tsx
'use client';

import { ArrowLeft } from 'lucide-react';

interface TopicHeaderProps {
  gradeTitle?: string;
  subjectTitle?: string;
  termTitle?: string;
  topicTitle: string;
  onBack: () => void;
}

export default function TopicHeader({
  gradeTitle,
  subjectTitle,
  termTitle,
  topicTitle,
  onBack,
}: TopicHeaderProps) {
  const mobileCrumb = [gradeTitle, subjectTitle].filter(Boolean).join(' › ');
  const desktopCrumb = [gradeTitle, subjectTitle, termTitle].filter(Boolean).join(' · ');

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 pt-safe backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100"
          title="Back to topics"
          aria-label="Back to topics"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="min-w-0 flex flex-col">
          <span className="truncate text-xs font-semibold text-slate-400 md:hidden">
            {mobileCrumb}
          </span>
          <span className="hidden truncate text-xs font-semibold text-slate-400 md:block">
            {desktopCrumb}
          </span>
          <span className="truncate font-bold text-slate-800">{topicTitle}</span>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Wire `App.tsx`**

1. Move `import LeaderboardView` to the top with other imports.
2. Replace browse sticky header block with:

```tsx
{!selectedTopic && (
  <AppHeader
    student={student}
    leaderboardActive={view === 'leaderboard'}
    onToggleLeaderboard={() =>
      setView((v) => (v === 'home' ? 'leaderboard' : 'home'))
    }
    onSignOut={signOut}
  />
)}
```

3. Replace topic sticky header with:

```tsx
<TopicHeader
  gradeTitle={selectedGrade?.title}
  subjectTitle={selectedSubject?.title}
  termTitle={selectedTerm?.title}
  topicTitle={selectedTopic.title}
  onBack={() => setSelectedTopic(null)}
/>
```

4. Outer active shell:

```tsx
<div className="min-h-screen bg-slate-50 font-sans text-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/10 via-slate-50 to-slate-50 pb-safe">
```

5. Loading spinner: use `border-brand-blue/30 border-t-brand-blue`.
6. Anonymous onboarding wrapper: same radial background + `p-4 pb-safe`.

- [ ] **Step 4: Manual check**

```bash
npm run dev
```

Verify header on home, leaderboard toggle highlight, topic header back, logout icon.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/AppHeader.tsx src/components/layout/TopicHeader.tsx src/App.tsx
git commit -m "feat(ui): extract AppHeader and TopicHeader shell"
```

---

### Task 4: Breadcrumb + DrillHeader

**Files:**
- Create: `src/components/layout/Breadcrumb.tsx`
- Create: `src/components/layout/DrillHeader.tsx`

**Interfaces:**
- Produces:
  - `Breadcrumb({ items: { id: string; label: string; onClick?: () => void }[] })`
  - `DrillHeader({ onBack, title, countLabel?: string })`

- [ ] **Step 1: Create Breadcrumb**

```tsx
// src/components/layout/Breadcrumb.tsx
'use client';

import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface BreadcrumbItem {
  id: string;
  label: string;
  onClick?: () => void;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="w-full overflow-x-auto">
      <ol className="flex min-w-0 items-center gap-1 py-1 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.id} className="flex min-w-0 items-center gap-1">
              {i > 0 && (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" aria-hidden />
              )}
              {item.onClick && !last ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="truncate rounded-md px-1.5 py-1 font-semibold text-brand-blue hover:bg-brand-blue/10"
                >
                  {item.label}
                </button>
              ) : (
                <span
                  className={cn(
                    'truncate px-1.5 py-1 font-semibold',
                    last ? 'text-slate-700' : 'text-slate-500',
                  )}
                  aria-current={last ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
```

- [ ] **Step 2: Create DrillHeader**

```tsx
// src/components/layout/DrillHeader.tsx
'use client';

import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';

interface DrillHeaderProps {
  onBack?: () => void;
  title: string;
  countLabel?: string;
  icon?: React.ReactNode;
}

export default function DrillHeader({ onBack, title, countLabel, icon }: DrillHeaderProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="w-20 shrink-0">
        {onBack ? (
          <Button variant="ghost" size="sm" onClick={onBack} className="min-h-11 px-2">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back
          </Button>
        ) : null}
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center gap-2 text-brand-blue">
        {icon}
        <h2 className="truncate text-center text-lg font-bold tracking-tight md:text-xl">
          {title}
        </h2>
      </div>
      <div className="flex w-20 shrink-0 justify-end">
        {countLabel ? (
          <span className="rounded-full bg-brand-blue/10 px-2 py-1 text-xs font-bold text-brand-blue">
            {countLabel}
          </span>
        ) : null}
      </div>
    </div>
  );
}
```

Add `import type React from 'react'` or `import type { ReactNode } from 'react'` and type `icon?: ReactNode`.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Breadcrumb.tsx src/components/layout/DrillHeader.tsx
git commit -m "feat(ui): add DrillHeader and Breadcrumb"
```

---

### Task 5: Redesign CurriculumSelector (hub + drill-down)

**Files:**
- Modify: `src/components/CurriculumSelector.tsx`

**Interfaces:**
- Consumes: `gradeAccent`, `DrillHeader`, `Breadcrumb`, `Card`, `Button`, student grade via new optional prop
- Produces: same selection callbacks as today

- [ ] **Step 1: Add optional `studentGrade` prop**

```ts
interface CurriculumSelectorProps {
  // ...existing
  studentGrade?: number | null;
}
```

In `App.tsx` pass `studentGrade={student?.grade ?? null}`.

- [ ] **Step 2: Rebuild home (no grade selected)**

Structure:

1. Hero: logo `h-16 md:h-24`, greeting if name available (add optional `displayName?: string`), rainbow PrepPals title (smaller on mobile: `text-3xl md:text-5xl`), tagline.
2. If `studentGrade` matches a curriculum grade, render **Your grade** Card first with `gradeAccent(studentGrade)` solid icon plate and “Start learning” chevron.
3. **All grades** heading (sentence case).
4. Grid: `grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4`.
5. Each grade Card: min height ~44px content, icon, title, subject count; hover border brand; use `gradeAccent(grade.id)`.

- [ ] **Step 3: Rebuild subject / term / topic levels**

For each drill level:

1. `DrillHeader` with back + title + count.
2. `Breadcrumb` with tappable ancestors:
   - Subjects level: `[Grade]` → onClick clears subject/term/topic via calling `onBackStep` enough times — **better:** add optional callbacks `onJumpToGrade`, `onJumpToSubject`, `onJumpToTerm` OR implement jump by calling existing setters from App.

**Preferred jump API (add to props):**

```ts
onNavigate?: (level: 'grades' | 'subjects' | 'terms') => void;
```

In `App.tsx`:

```ts
const handleNavigate = (level: 'grades' | 'subjects' | 'terms') => {
  if (level === 'grades') {
    setSelectedGrade(null);
    setSelectedSubject(null);
    setSelectedTerm(null);
    setSelectedTopic(null);
  } else if (level === 'subjects') {
    setSelectedSubject(null);
    setSelectedTerm(null);
    setSelectedTopic(null);
  } else if (level === 'terms') {
    setSelectedTerm(null);
    setSelectedTopic(null);
  }
};
```

Breadcrumb examples:

- On subjects: `[{ id:'g', label: grade.title, onClick: () => onNavigate('grades') }]`
- On terms: grade → subjects, subject current
- On topics: grade → subjects, subject → terms, term current

**Subjects:** `grid-cols-1 md:grid-cols-2`; row cards with icon + chevron; `hover:border-brand-blue/40`.

**Terms:**
- Mobile: horizontal scroll chips:

```tsx
<div className="flex gap-2 overflow-x-auto pb-2 md:hidden">
  {terms.map(term => (
    <button
      key={term.id}
      type="button"
      onClick={() => onSelectTerm(term)}
      className="min-h-11 shrink-0 rounded-full border-2 border-slate-200 bg-white px-4 font-bold text-slate-700 hover:border-brand-blue"
    >
      {term.title}
    </button>
  ))}
</div>
```

- Desktop: keep 2-col cards (`hidden md:grid`).

**Topics:** full-width list; description `line-clamp-2`; chevron circle with brand-blue hover.

- [ ] **Step 4: Container width**

Outer: `w-full max-w-5xl mx-auto px-4 py-6 md:py-10` (replace `max-w-4xl p-6`).

- [ ] **Step 5: Manual responsive check**

At 375px and 1280px: hub, your-grade pin, 2/4 col grades, chips vs cards, breadcrumb jumps.

- [ ] **Step 6: Commit**

```bash
git add src/components/CurriculumSelector.tsx src/App.tsx
git commit -m "feat(ui): redesign home hub and curriculum drill-down"
```

---

### Task 6: PageLayout, TopicContainer, PracticeRunner chrome

**Files:**
- Modify: `src/components/layout/PageLayout.tsx`
- Modify: `src/components/layout/TopicContainer.tsx`
- Modify: `src/components/PracticeRunner.tsx`

- [ ] **Step 1: PageLayout**

- Background radial: `from-brand-blue/10`
- Icon plate: `text-brand-blue`
- Keep max-w-4xl; padding `p-4 md:p-8 pb-24`

- [ ] **Step 2: TopicContainer mode toggle**

```tsx
<div className="flex w-full gap-1 rounded-xl bg-slate-100 p-1 md:w-auto">
  <button
    type="button"
    onClick={() => handleModeChange('learn')}
    className={cn(
      'min-h-11 flex-1 rounded-lg px-4 py-2 text-sm font-bold transition-all md:flex-none',
      mode === 'learn'
        ? 'bg-white text-brand-orange shadow-sm'
        : 'text-slate-500 hover:text-slate-700',
    )}
  >
    Watch & Learn
  </button>
  <button
    type="button"
    onClick={() => handleModeChange('practice')}
    className={cn(
      'min-h-11 flex-1 rounded-lg px-4 py-2 text-sm font-bold transition-all md:flex-none',
      mode === 'practice'
        ? 'bg-white text-brand-orange shadow-sm'
        : 'text-slate-500 hover:text-slate-700',
    )}
  >
    Interactive Practice
  </button>
</div>
```

Icon plate: `bg-brand-blue` instead of indigo.

- [ ] **Step 3: PracticeRunner chrome only**

- Progress bar fill: `bg-brand-orange` (or blue — **use orange** per primary energy)
- Spinner: brand blue ring
- Option buttons: keep `py-6 text-lg`; ensure full width mobile (`w-full`)
- Completion card: primary “done” affordances use default Button primary (orange); keep logic untouched

- [ ] **Step 4: Smoke one topic** in browser (any Grade 5 math topic) learn/practice toggle + answer flow.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/PageLayout.tsx src/components/layout/TopicContainer.tsx src/components/PracticeRunner.tsx
git commit -m "feat(ui): brand-align topic layout and practice chrome"
```

---

### Task 7: Onboarding + Leaderboard visual pass

**Files:**
- Modify: `src/components/onboarding/OnboardingGate.tsx`
- Modify: `src/components/onboarding/OnboardingFlow.tsx`
- Modify: `src/components/onboarding/ResumeFlow.tsx`
- Modify: `src/components/leaderboard/LeaderboardView.tsx`

- [ ] **Step 1: OnboardingGate shell**

Wrap content in full min-h-screen radial brand background if not already provided by App; ensure max width and padding.

- [ ] **Step 2: OnboardingFlow**

- Title stays welcoming; primary Button already orange from Task 2
- Login code panel: `bg-brand-blue/10`, code text `text-brand-blue`
- Warning panel stays amber
- Ensure form fields stack; `grid-cols-2` only for grade/age (already)

- [ ] **Step 3: ResumeFlow**

Replace any indigo classes with brand-blue / primary buttons.

- [ ] **Step 4: LeaderboardView**

- Replace top back link with consistent ghost Button or same pattern as DrillHeader back
- Trophy `text-brand-yellow` / amber
- Active scope pill: `bg-brand-blue text-white` (nav chrome)
- Inactive pills: white border slate
- “Me” row highlight: `bg-brand-yellow/20 ring-1 ring-brand-yellow/50`
- Remove leftover indigo classes

- [ ] **Step 5: Manual onboarding + leaderboard on mobile width**

- [ ] **Step 6: Commit**

```bash
git add src/components/onboarding/ src/components/leaderboard/LeaderboardView.tsx
git commit -m "feat(ui): brand-align onboarding and leaderboard"
```

---

### Task 8: Sweep indigo leftovers + verify

**Files:** any remaining under `src/components/` with `indigo` in shell/UI paths (do not mass-edit every curriculum lesson file unless a shared wrapper).

- [ ] **Step 1: Search shell-related indigo**

```bash
grep -rn "indigo" src/App.tsx src/components/ui src/components/layout src/components/CurriculumSelector.tsx src/components/PracticeRunner.tsx src/components/onboarding src/components/leaderboard src/components/gamification --include='*.tsx' || true
```

Replace intentional leftovers in those paths with brand tokens. Skip deep curriculum topic internals unless trivial shared class.

- [ ] **Step 2: Run unit tests**

```bash
npm test
```

Expected: all pass (including `brand.test.ts`).

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Fix issues introduced by this work.

- [ ] **Step 4: Final manual checklist**

| Check | Mobile ~375 | Desktop ~1280 |
|-------|-------------|-----------------|
| Home hub greeting + your grade | | |
| Grade grid 2 / 4 col | | |
| Subject → term chips/cards → topic | | |
| Breadcrumb jump | | |
| Topic header back | | |
| Practice answer + feedback | | |
| Leaderboard tabs + me row | | |
| Onboarding primary CTA orange | | |

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore(ui): sweep brand leftovers and verify redesign"
```

---

## Spec coverage checklist

| Spec section | Task(s) |
|--------------|---------|
| §1 App shell & modes | 3 |
| §2 Brand tokens / motion / type | 1, 2 |
| §3 Home hub & drill-down | 4, 5 |
| §4 Practice chrome | 6 |
| §5 Onboarding & leaderboard | 7 |
| §6 Component architecture | 3–5 |
| §7 Breakpoints | 5, 6 |
| §8 Accessibility | 2 (Card kb), 3 (aria), 1 (reduced-motion) |
| §9 Testing | 1, 8 |
| §10 Implementation order | Tasks 1→8 |

## Out of scope (do not implement)

- Continue/resume last topic
- Bottom tab bar
- Dark mode
- API / scoring / curriculum content rewrites
- Mass restyle of every lesson component file
