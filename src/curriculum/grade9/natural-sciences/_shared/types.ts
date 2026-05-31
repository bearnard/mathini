import React from 'react';

export interface NsItem {
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
