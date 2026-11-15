/** South African number format: decimal comma, and a space between groups of three digits. */
export const saNumber = (n: number): string => {
    const [int, dec] = String(n).split('.');
    const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return dec ? `${grouped},${dec}` : grouped;
};

/** Read what a learner typed: spaces between groups are allowed, and a comma counts as a decimal comma. */
export const parseSaNumber = (text: string): number => parseFloat(text.replace(/\s/g, '').replace(/,/g, '.'));

/** Distance between the small marks on the dial: the dial has 10 big marks, each split into 5. */
export const smallMark = (max: number): number => max / 50;

/** A weight the needle can sit exactly on: a small mark, but not 0 (which sits under the top label). */
export const weightOnMark = (max: number, random: () => number = Math.random): number => {
    const step = smallMark(max);
    return (Math.floor(random() * (max / step - 1)) + 1) * step;
};
