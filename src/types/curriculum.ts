export type SubjectType = 'core' | 'emerging' | 'language';

export interface Assessment {
  name: string;
  weight: number;
  description?: string;
}

export interface Subject {
  id: string;
  name: string;
  type: SubjectType;
  description: string;
  sbaWeight: number;
  examWeight: number;
  terms: TermData[];
}

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

export interface CurriculumData {
  school: string;
  grade: number;
  year: string;
  subjects: Subject[];
}