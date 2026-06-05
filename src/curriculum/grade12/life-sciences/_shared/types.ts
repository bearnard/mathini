import React from 'react';

export interface LifeSciencesItem {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface LearnStep {
  title: string;
  content: React.ReactNode;
}
