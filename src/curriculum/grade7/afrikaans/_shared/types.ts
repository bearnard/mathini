import React from 'react';

export interface AfrikaansItem {
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface LearnStep {
  image?: { src: string; alt: string };
  title: string;
  content: React.ReactNode;
}
