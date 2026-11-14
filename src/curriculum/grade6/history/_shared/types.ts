import React from 'react';
import type { NstItem } from '../../natural-sciences/_shared/types';

/** Same shape as the Natural Sciences item: mcq by default, optionally 'order' or 'label' (see natural-sciences/_shared/types). */
export type HisItem = NstItem;

export interface LearnStep {
  title: string;
  content: React.ReactNode;
  /** Optional illustration/diagram for this step (path under /public). */
  image?: { src: string; alt: string };
}
