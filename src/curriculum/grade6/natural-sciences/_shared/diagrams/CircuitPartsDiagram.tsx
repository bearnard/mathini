import type { DiagramProps, Hotspot } from '../types';

/**
 * A simple series circuit (cell, switch, bulb, wires) drawn with the standard symbols.
 * viewBox is 400 x 300, so a hotspot at x% / y% sits at (4x, 3y) in the drawing.
 * The circuit is inset so the 44px hotspot markers (which sit outside the parts) never cover a symbol,
 * even when the box is only ~290px wide on a phone.
 * With showLabels=false (the label question) it draws no text, so it never gives away the labels. With showLabels=true
 * (the explain memo) it names the four parts.
 */
export const circuitPartsHotspots: Hotspot[] = [
  { id: 'cell', x: 7, y: 52 },
  { id: 'switch', x: 50, y: 8 },
  { id: 'bulb', x: 93, y: 52 },
  { id: 'wire', x: 50, y: 92 },
];

const ink = '#334155';

const CircuitPartsDiagram = ({ showLabels }: DiagramProps) => (
  <svg viewBox="0 0 400 300" className="block h-auto w-full" role="img" aria-label="A simple circuit with four numbered parts" xmlns="http://www.w3.org/2000/svg">
    {/* leader lines from each marker to its part */}
    <g stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" fill="none">
      <path d="M 62 155 H 80" />
      <path d="M 200 56 V 72" />
      <path d="M 340 155 H 326" />
      <path d="M 200 246 V 226" />
    </g>
    <g stroke={ink} strokeWidth="4" strokeLinecap="round" fill="none">
      {/* wires: left side (with the cell gap), top (with the switch gap), right (with the bulb gap), bottom */}
      <path d="M 100 145 V 90 H 170" />
      <path d="M 100 165 V 220 H 300 V 177" />
      <path d="M 300 133 V 90 H 230" />
      {/* cell: long thin line = positive, short thick line = negative */}
      <path d="M 80 145 H 120" strokeWidth="3" />
      <path d="M 88 165 H 112" strokeWidth="7" />
      {/* switch: two terminals and a blade. Open (raised) in the label question; closed in the labelled memo reference,\n          because that picture is shown as the model of a COMPLETE circuit. */}
      <circle cx="170" cy="90" r="4" fill={ink} />
      <circle cx="230" cy="90" r="4" fill={ink} />
      <path d={showLabels ? 'M 170 90 L 230 90' : 'M 170 90 L 222 66'} />
      {/* bulb: circle with a cross */}
      <circle cx="300" cy="155" r="22" fill="#fef9c3" />
      <path d="M 284 139 L 316 171 M 316 139 L 284 171" strokeWidth="3" />
    </g>
    {showLabels && (
      <g fill={ink} fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">
        <text x="70" y="160" textAnchor="end">Cell</text>
        <text x="200" y="52" textAnchor="middle">Switch</text>
        <text x="340" y="160" textAnchor="start">Bulb</text>
        <text x="200" y="250" textAnchor="middle">Wires</text>
      </g>
    )}
  </svg>
);

export default CircuitPartsDiagram;
