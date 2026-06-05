import type React from 'react';

export interface PSItem {
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface LearnStep {
  title: string;
  content: React.ReactNode;
  image?: { src: string; alt: string };
}
