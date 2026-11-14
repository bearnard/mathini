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

/** Deterministic accent classes for a grade id (5–12). Grade 5 → orange. */
export function gradeAccent(gradeId: number) {
  const shifted =
    (((gradeId - 5) % BRAND_ACCENT_ORDER.length) + BRAND_ACCENT_ORDER.length) %
    BRAND_ACCENT_ORDER.length;
  return ACCENT_CLASSES[BRAND_ACCENT_ORDER[shifted]];
}
