/**
 * Rand as the Accounting lessons write it: "R12 000" (a space between thousands), cents only when
 * they are needed ("R34,50"), a leading minus for a negative amount. The one shared copy for the
 * VAT and depreciation pictures.
 */
export const rand = (n: number): string => {
  const whole = Math.trunc(Math.abs(n));
  const cents = Math.round((Math.abs(n) - whole) * 100);
  const grouped = String(whole).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${n < 0 ? '-' : ''}R${grouped}${cents ? `,${String(cents).padStart(2, '0')}` : ''}`;
};
