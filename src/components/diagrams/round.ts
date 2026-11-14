/**
 * Round a computed SVG coordinate. Math.sin/cos/hypot can differ in the last digit between the
 * server and the browser, which makes React report a hydration mismatch on SVG attributes.
 */
export const r3 = (n: number): number => Math.round(n * 1000) / 1000;
