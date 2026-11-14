# PrepPals UI Redesign (Mobile + Desktop)

**Date:** 2026-07-20  
**Status:** Approved for planning (brainstorming complete)  
**Scope:** Full visual and layout redesign of the learner-facing shell and key screens, keeping the existing hub + drill-down navigation model and backend APIs.

## Goals

- Make PrepPals feel learner-first: friendly, energetic, clear.
- Work excellently on both mobile and desktop (responsive, not two separate apps).
- Strengthen PrepPals brand (logo palette) instead of generic indigo-only UI.
- Improve key surfaces: home hub, curriculum drill-down, topic chrome, practice, onboarding, leaderboard.
- Raise consistency via a small design system (tokens + shared components).

## Non-goals

- Bottom tab bar / multi-root app shell (can come later).
- “Continue where I left off” persistence (no last-path storage in v1).
- Backend/API or curriculum content changes.
- Per-topic lesson content restyling beyond shared layout wrappers (`PageLayout`, `TopicContainer`, `PracticeRunner` chrome).
- Dark mode.
- Native apps / PWA install UX.

## Constraints

- Stack stays: Next.js, React 19, Tailwind v4, framer-motion, existing `components/ui/*`.
- Navigation model: **hub + drill-down** (grade → subject → term → topic).
- Primary audience: **learners** (kids/teens).
- Student profile already has `grade`, `displayName`, `avatar`, `xp` — use these; no new server fields required.
- Prefer editing shared shell/components over one-off styles in every curriculum file.

---

## 1. App shell & structure

### Modes

| Mode | Chrome | Content |
|------|--------|---------|
| Browse | `AppHeader` | Home hub or drill-down |
| Leaderboard | `AppHeader` | `LeaderboardView` |
| Topic | `TopicHeader` only | Topic component |
| Onboarding | None (standalone) | Gate / register / resume |

### Browse + leaderboard shell

**Mobile**

- Sticky top bar ~56px, `bg-white/90 backdrop-blur`, bottom border.
- Left: avatar (32px) + truncated display name + XP chip.
- Right: trophy (leaderboard toggle) + overflow/menu control for logout (or compact text button if space allows).
- Page padding `px-4`, bottom safe-area (`pb-safe` / env safe-area-inset).

**Desktop**

- Same bar, slightly more horizontal padding.
- Main content `max-w-5xl` centered (hub/drill-down); leaderboard may stay `max-w-2xl` for readability.

Extract today’s inlined header in `App.tsx` into `components/layout/AppHeader.tsx`.

### Topic chrome

- Sticky `TopicHeader`: back button · breadcrumb · topic title.
- Mobile breadcrumb: collapsed/truncated (`Grade › Subject`); desktop: full `Grade · Subject · Term`.
- No trophy/logout in topic mode (focus).
- Extract to `components/layout/TopicHeader.tsx`.

### Hub entry

- Authenticated users land on **home hub** (grade selection level).
- Student’s onboarding **grade** is visually pinned/highlighted as “Your grade”.
- Leaderboard remains header trophy toggle (existing behavior).

---

## 2. Brand & design tokens

### Personality

Friendly, energetic, clear — playful without clutter; large type and obvious tap targets.

### Color tokens (logo-derived)

Define in `src/app/globals.css` via Tailwind v4 `@theme`:

| Token | Hex | Role |
|-------|-----|------|
| `--color-brand-orange` | `#f68535` | Primary CTAs, energy |
| `--color-brand-blue` | `#3285bc` | Secondary actions, info, links |
| `--color-brand-green` | `#60a763` | Success, correct answers, progress |
| `--color-brand-coral` | `#f97665` | Warnings / heat (sparingly) |
| `--color-brand-yellow` | `#fac446` | XP, highlights, badges |
| Surfaces | slate-50 + soft radial wash | Page background |
| Ink | slate-800 / 900 | Primary text |
| Muted | slate-500 | Secondary text |

### Rules

- **Primary button** uses brand orange (replaces indigo-600 as default primary).
- **Success** uses brand green; **XP chips** use yellow/amber treatment.
- Grade tiles get a **stable accent** from the brand set by `grade.id` (deterministic cycle) so the hub is colorful without random noise.
- Cards remain white with soft slate borders; radii stay large (`rounded-2xl`, hero `rounded-3xl`).
- Rainbow letter treatment for the “PrepPals” wordmark stays on the **home hub only**.

### Typography

- Display titles: `font-black` / bold, tight tracking.
- Body: medium weight, comfortable line-height.
- Form controls: base text ≥16px on mobile (avoid iOS input zoom).
- Section labels: sentence case preferred; avoid heavy all-caps section headers.

### Motion

- Keep light framer-motion (list stagger, enter transitions).
- Honor `prefers-reduced-motion: reduce` (disable non-essential transforms/staggers).

---

## 3. Home hub & drill-down

### Home hub

1. Compact hero: logo (`h-16` mobile / `h-24` desktop) + greeting `Hi, {displayName}!` + short tagline.
2. **Your grade** band: prominent card for `student.grade` (accent, subject count, clear start affordance).
3. **All grades** grid: **2 columns mobile, 4 columns desktop** (grades 5–12). Each tile: icon/number, title, subject count; minimum touch target ≥44px height.
4. No duplicate giant logo+title stack that wastes mobile fold — hero must fit above the fold with “Your grade” visible without excessive scroll.

### Drill-down (subject → term → topic)

Shared **`DrillHeader`**:

- Left: back
- Center: step title
- Right: optional count chip (e.g. “6 subjects”)
- Removes current spacer-centering hack

**Breadcrumb** under header (sticky on scroll for drill levels):

- Segments are tappable and jump back to that level (grade / subject / term).
- Mobile: single horizontal scrollable row if needed.

**Subjects**

- Mobile: full-width rows (icon + title + meta + chevron)
- `md+`: 2-column cards

**Terms**

- Mobile: horizontal **chip/scroll** row (faster selection)
- Desktop: 2-column cards (or chips + cards — chips alone acceptable if clear)

**Topics**

- Full-width list rows: title, description clamped to 2 lines, chevron/play affordance
- Generous vertical padding for touch

### Empty & loading

- Shared spinner with brand-colored ring
- Empty lists: short friendly copy + back CTA

### Data

- Uses existing curriculum tree + `student.grade` only
- No new APIs

---

## 4. Topic practice chrome

### `PageLayout` / `TopicContainer`

- Align padding with shell (`px-4 md:px-8`, consistent max-width).
- Learn / Practice mode toggle: full-width segmented control on mobile; compact on desktop; brand orange active state.
- Title block stacks cleanly on narrow screens (no horizontal overflow).

### `PracticeRunner`

- Progress: clear `index / total` + thin progress bar (brand blue/orange).
- Answer options: large tap targets, full-width on mobile; selected/correct/incorrect states use brand green / coral.
- Feedback + streak + next CTA sticky or clearly below fold without tiny buttons.
- Completion state: celebratory but readable; primary CTA orange.

Do not rewrite question banks or scoring logic — chrome and layout only.

---

## 5. Onboarding & leaderboard

### Onboarding (`OnboardingGate` / `OnboardingFlow` / `ResumeFlow`)

- Full-viewport soft brand background (same radial wash as app).
- Card max-width ~28rem, comfortable mobile padding.
- Primary CTA = brand orange; login-code reveal panel uses brand blue tint (not indigo).
- Avatar picker: wrap/grid that doesn’t overflow small screens.
- Keep existing multi-step logic and copy structure; visual pass only unless a layout bug blocks mobile.

### Leaderboard

- Use `DrillHeader`-style back + title (trophy + “Leaderboard”).
- Scope tabs: pill group; active = brand orange or blue (pick one: **blue for nav chrome, orange for primary CTAs**).
- Rows: avatar, name, XP; highlight “me” with yellow/soft brand wash.
- Filters: full-width on mobile, readable selects.
- Loading/empty states match hub language.

---

## 6. Component & file architecture

### New / extracted layout components

| Component | Responsibility |
|-----------|----------------|
| `layout/AppHeader.tsx` | Browse/leaderboard sticky header |
| `layout/TopicHeader.tsx` | Topic sticky back + breadcrumb |
| `layout/DrillHeader.tsx` | Drill-down step header |
| `layout/Breadcrumb.tsx` | Tappable path segments |
| `home/HomeHub.tsx` | Hero + your grade + all grades (optional split from selector) |

### Updated shared UI

| Component | Change |
|-----------|--------|
| `ui/Button` | Primary → brand orange; ensure min heights for touch |
| `ui/Card` | Interactive hover uses brand border; optional `accent` prop if useful |
| `ui/Feedback` | Success/error map to brand green/coral |
| `ui/Input` / `Select` | Focus rings brand blue; 16px+ text |
| `PageLayout` / `TopicContainer` | Responsive polish, brand accents |
| `CurriculumSelector` | Hub + drill layouts per §3 |
| `App.tsx` | Compose shell components; thinner view switchboard |
| `globals.css` | `@theme` tokens + reduced-motion + safe-area utilities |

### Grade accent helper

Small pure helper, e.g. `lib/brand.ts`:

```ts
// Maps grade id → one of brand accent class sets (bg/text/border)
gradeAccent(gradeId: number): { bg, text, border, solid }
```

---

## 7. Responsive breakpoints

Use Tailwind defaults:

| Range | Intent |
|-------|--------|
| default | Mobile-first single column, large taps |
| `md` (768+) | 2-col subject/term grids, fuller breadcrumbs |
| `lg` (1024+) | 4-col grade grid, roomier hero |

Touch targets: interactive controls ≥44×44px where practical.

---

## 8. Accessibility

- Visible focus rings (brand blue).
- Buttons/links are real controls. Interactive `Card` supports keyboard: `role="button"`, `tabIndex={0}`, and Enter/Space handlers when `onClick` is set (minimal change to existing Card API).
- Images: empty `alt` for decorative icons; meaningful alt for avatars.
- Don’t rely on color alone for correct/incorrect (icon + text in Feedback).
- `prefers-reduced-motion` respected.

---

## 9. Testing & verification

- Manual: mobile width (~375) and desktop (~1280) for hub → subject → term → topic → practice → back; leaderboard scopes; onboarding register + resume.
- Existing unit tests should remain green (`npm test`); no required new visual regression suite in v1.
- Run `npm run lint` after UI changes.
- Smoke-check a sample topic page that uses `PageLayout` / `PracticeRunner`.

---

## 10. Implementation order

1. Tokens in `globals.css` + `lib/brand.ts`
2. Update `Button`, `Card`, `Feedback`, `Input`, `Select`
3. Extract `AppHeader`, `TopicHeader`; wire `App.tsx`
4. Redesign hub + drill-down (`CurriculumSelector` / `HomeHub`, `DrillHeader`, `Breadcrumb`)
5. `PageLayout`, `TopicContainer`, `PracticeRunner` chrome
6. Onboarding + leaderboard visual pass
7. Pass for reduced-motion, safe-area, lint/tests

---

## 11. Success criteria

- Learner can complete grade → topic path on a phone without horizontal scroll or unusable controls.
- Desktop hub uses multi-column layout and does not look like a stretched mobile page.
- Brand orange/blue/green/yellow visibly replace default indigo as the dominant system.
- Header/topic chrome are shared components (no duplicated sticky bars with divergent styles).
- Onboarding and leaderboard match the same system.
- No regressions in auth, practice scoring, or leaderboard data loading.

---

## Decisions log

| Decision | Choice |
|----------|--------|
| Ambition | Full redesign (layout + visual), not skin-only |
| Audience | Learners |
| Navigation | Hub + drill-down |
| Continue/resume path | Out of scope v1 |
| Bottom tabs | Out of scope v1 |
| Primary CTA color | Brand orange |
| Nav/selection chrome accent | Brand blue |
| Grade grid | 2-col mobile / 4-col desktop |
