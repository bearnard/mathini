import React from 'react';

export type NstItemKind = 'mcq' | 'order' | 'label';

/** A numbered tap target on a label diagram. x and y are percentages (0-100) of the diagram box. */
export interface Hotspot {
  /** Stable id, unique within the item (e.g. 'full-moon'). The answer refers to it. */
  id: string;
  x: number;
  y: number;
}

/** What a diagram component receives so it can draw itself inside the label question. */
export interface DiagramProps {
  /** Hide any text that would give the answers away. LabelQuestion always passes false. */
  showLabels: boolean;
}

export interface NstItem {
  /** Question-pool id and section, present on items served from the pool (not on the curated banks). */
  id?: number;
  section?: string;
  /** Defaults to 'mcq'. Unknown values are treated as mcq (or skipped if they cannot be played as mcq). */
  kind?: NstItemKind;
  prompt: string;
  /**
   * mcq: the choices. order: the steps (any order; they are shuffled for display).
   * label: the label choices for the hotspots (may include extra wrong labels).
   */
  options: string[];
  /**
   * mcq: one of options. order: the steps in the correct sequence joined with '|'.
   * label: 'hotspotId=Label' pairs joined with '|' (one pair per hotspot).
   */
  answer: string;
  explanation?: string;
  /** label only: the picture, as an image path ... */
  image?: { src: string; alt: string };
  /** label only: ... or a React SVG component. One of image/Diagram is required. */
  Diagram?: React.ComponentType<DiagramProps>;
  /** label only: where the numbered hotspots sit, in percent of the diagram box. */
  hotspots?: Hotspot[];
}

export interface LearnStep {
  title: string;
  content: React.ReactNode;
  /** Optional illustration/diagram for this step (path under /public). */
  image?: { src: string; alt: string };
}
