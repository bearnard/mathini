import type { ReactNode } from 'react';

export interface ITItem {
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface LearnStep {
  title: string;
  content: ReactNode;
  image?: { src: string; alt: string };
}
