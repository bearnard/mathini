import type { Hotspot } from '../types';

/**
 * Marker positions for a "label the points" question on a diagram whose hotspots sit ON the thing being
 * identified (e.g. the tips of a compass rose). A 44px marker there would cover the tip, so each marker is
 * pushed outward from the centre of the diagram by `gap` percent of the box.
 */
export function radialHotspots(
  source: readonly { id: string; x: number; y: number }[],
  ids: readonly string[],
  gap: number,
  centre = { x: 50, y: 50 },
): Hotspot[] {
  return ids.map((id) => {
    const h = source.find((s) => s.id === id);
    if (!h) throw new Error(`unknown hotspot id: ${id}`);
    const dx = h.x - centre.x;
    const dy = h.y - centre.y;
    const r = Math.hypot(dx, dy) || 1;
    const k = (r + gap) / r;
    return { id, x: Math.round((centre.x + dx * k) * 100) / 100, y: Math.round((centre.y + dy * k) * 100) / 100 };
  });
}
