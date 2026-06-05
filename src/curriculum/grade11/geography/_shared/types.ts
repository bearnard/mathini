import type { ReactNode } from 'react';

export interface LearnStep {
  title: string;
  content: ReactNode;
  image?: { src: string; alt: string };
}
