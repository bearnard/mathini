import { q as base, type Q } from '../../../grade10/mathematics/_shared/bank';
import { nb } from '../../../../components/diagrams/maths/grade6AddSub';

/** Like q() but every ordinary space between digit groups becomes a non-breaking space, so numbers never split across lines. */
export const q = (prompt: string, correct: string, wrong: [string, string, string], explanation: string): Q =>
  base(nb(prompt), nb(correct), wrong.map(nb) as [string, string, string], nb(explanation));
