import { ImageResponse } from 'next/og';
import { BRAND_ACCENT_ORDER, BRAND } from '../lib/brand';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'PrepPals — CAPS practice for Grades 5–12';

// Same letter-by-letter brand color treatment as the in-app wordmark
// (see CurriculumSelector.tsx's PREPPALS_COLORS / this project's BRAND).
const WORDMARK_COLORS = BRAND_ACCENT_ORDER.map((accent) => BRAND[accent]);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f7f6f0',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 14,
          }}
        >
          {WORDMARK_COLORS.map((color) => (
            <div key={color} style={{ flex: 1, background: color }} />
          ))}
        </div>

        <div style={{ display: 'flex', fontSize: 128, fontWeight: 900, letterSpacing: -2 }}>
          {'PrepPals'.split('').map((char, i) => (
            <span key={i} style={{ color: WORDMARK_COLORS[i % WORDMARK_COLORS.length] }}>
              {char}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', marginTop: 20, fontSize: 40, color: '#475569', fontWeight: 600 }}>
          CAPS practice for Grades 5–12
        </div>
      </div>
    ),
    { ...size },
  );
}
