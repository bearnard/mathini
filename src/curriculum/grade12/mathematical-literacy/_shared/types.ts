import type { ReactNode } from 'react';

export interface MathematicalLiteracyItem { id: string; question: string; options: string[]; answer: number; explanation: string; }
export interface LearnStep { title: string; content: ReactNode; }
