import { MOON_PHASE_HOTSPOTS } from '../../../../../components/diagrams/MoonPhases';
import type { Hotspot } from '../types';

/**
 * Hotspots for a "label the Moon phases" item, using a subset of the phases in MoonPhases.
 * MOON_PHASE_HOTSPOTS gives the centre of each Moon face; a 44px marker placed there would hide the
 * very phase the learner is looking at, so each marker is pushed outward along the ring (to radius 46%).
 */
const MARKER_RING = 46;
const FACE_RING = 34;

export function moonLabelHotspots(slugs: readonly string[]): Hotspot[] {
  return slugs.map((slug) => {
    const h = MOON_PHASE_HOTSPOTS.find((p) => p.id === slug);
    if (!h) throw new Error(`unknown moon phase slug: ${slug}`);
    const k = MARKER_RING / FACE_RING;
    return { id: h.id, x: Math.round((50 + (h.x - 50) * k) * 100) / 100, y: Math.round((50 + (h.y - 50) * k) * 100) / 100 };
  });
}
