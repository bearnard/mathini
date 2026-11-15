// HOOK for the AI merge suggestion (ADR 0004 build part 3, bearn's suggestMerge). The admin side calls this; today it offers nothing, so the
// results view falls back to "every reviewer who suggested a change suggested the same one". Replace the body with the Gemini call later.
import type { Proposal, ReviewResponse, ItemKind } from '../../shared/teacherReview/types';

export interface MergeInput { kind: ItemKind; original: Proposal; subject: string; grade: number | null; responses: ReviewResponse[] }
export interface MergeSuggestion { merged: Proposal; rationale: string; disagreements: string[] }

export async function suggestMerge(_input: MergeInput): Promise<MergeSuggestion | null> {
  return null;
}
