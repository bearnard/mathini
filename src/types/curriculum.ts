import type { ComponentType, LazyExoticComponent } from 'react';

export type SubjectType = 'core' | 'emerging' | 'language';

export interface Assessment {
  name: string;
  weight: number;
  description?: string;
}

/** App navigation topic (interactive lesson component). */
export interface Topic {
  id: string;
  title: string;
  description?: string;
  component: LazyExoticComponent<ComponentType<object>>;
}

/** App navigation term within a subject. */
export interface Term {
  id: number;
  title: string;
  topics: Topic[];
}

/** App navigation subject within a grade. */
export interface Subject {
  id: string;
  title: string;
  terms: Term[];
  /** Optional metadata used by syllabus-style data */
  name?: string;
  type?: SubjectType;
  description?: string;
  sbaWeight?: number;
  examWeight?: number;
}

/** App navigation grade. */
export interface Grade {
  id: number;
  title: string;
  subjects: Subject[];
}

/** Root curriculum tree used by the learner app. */
export interface Curriculum {
  grades: Grade[];
}

/** Legacy/syllabus term shape (static data dumps). */
export interface TermData {
  number: number;
  name: string;
  startDate: string;
  endDate: string;
  days: number;
  holidays: string[];
  topics: string[];
  assessments: Assessment[];
}

/** Legacy/syllabus curriculum dump shape. */
export interface CurriculumData {
  school: string;
  grade: number;
  year: string;
  subjects: Array<{
    id: string;
    name: string;
    type: SubjectType;
    description: string;
    sbaWeight: number;
    examWeight: number;
    terms: TermData[];
  }>;
}
