import React from 'react';

export interface AfrikaansItem {
  /** Question-pool id and section, present on items served from the pool (not on the curated banks). */
  id?: number;
  section?: string;
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
