import React from 'react';

export type NstItemKind = 'mcq' | 'order' | 'label' | 'explain';

/** A numbered tap target on a label diagram. x and y are percentages (0-100) of the diagram box. */
export interface Hotspot {
  /** Stable id, unique within the item (e.g. 'full-moon'). The answer refers to it. */
  id: string;
  x: number;
  y: number;
}

/** What a diagram component receives so it can draw itself inside the label question. */
export interface DiagramProps {
  /** Hide any text that would give the answers away. LabelQuestion passes false; the explain memo passes true. */
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
   * explain: the memo MARK POINTS, one mark each, in memo order (never shuffled).
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
  /**
   * label: ... or a React SVG component. One of image/Diagram is required.
   * explain: an optional reference diagram shown in the memo, drawn with showLabels=true.
   */
  Diagram?: React.ComponentType<DiagramProps>;
  /** label only: where the numbered hotspots sit, in percent of the diagram box. */
  hotspots?: Hotspot[];
  /**
   * explain only: the marks the question is worth. Defaults to the number of mark points, and must equal it
   * (one mark per point), so a 3-mark answer lists exactly 3 points.
   */
  marks?: number;
  /** explain only: the learner answers on paper (e.g. "draw a circuit"), so no typing box is shown. */
  paper?: boolean;
}

export interface LearnStep {
  title: string;
  content: React.ReactNode;
  /** Optional illustration/diagram for this step (path under /public). */
  image?: { src: string; alt: string };
}
