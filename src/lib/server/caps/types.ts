export interface SubjectConfig {
  getPreamble(grade: number): string;
  tasks: Record<string, string>;
}
