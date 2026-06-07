import type { ReactNode } from 'react';

export interface MathematicsItem { id: string; question: string; options: string[]; answer: number; explanation: string; }
export interface LearnStep { image?: { src: string; alt: string }; title: string; content: ReactNode; }
