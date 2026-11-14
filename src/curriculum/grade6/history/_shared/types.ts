import React from 'react';

export interface HisItem {
  /** Question-pool id and section, present on items served from the pool (not on the curated banks). */
  id?: number;
  section?: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface LearnStep {
  title: string;
  content: React.ReactNode;
  /** Optional illustration/diagram for this step (path under /public). */
  image?: { src: string; alt: string };
}
