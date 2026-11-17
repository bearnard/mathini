// The Delphi class TLearner used by the Grade 12 IT lesson "Classes in Delphi" (CAPS Term 1 application development: a simple user-defined class).
// classesInDelphi.test.ts runs the same logic here with Delphi semantics, so every output printed in the lesson or used in a question is computed.

export class Learner {
  private fName: string;
  private fMark: number;
  constructor(sName: string, iMark: number) {
    this.fName = sName;
    this.fMark = iMark;
  }
  getName(): string { return this.fName; }
  getMark(): number { return this.fMark; }
  /** The mutator checks the value, so a mark outside 0 to 100 is ignored. */
  setMark(iNewMark: number): void {
    if (iNewMark >= 0 && iNewMark <= 100) this.fMark = iNewMark;
  }
  /** An auxiliary method: a calculation or test that is not a plain getter or setter. */
  isDistinction(): boolean { return this.fMark >= 75; }
  toString(): string { return `${this.fName}: ${this.fMark}`; }
}

/** The calls in the lesson's worked example, in order, with the text each one shows. */
export function demo(): { code: string; shows: string }[] {
  const o = new Learner('Zinzi', 72);
  const steps: { code: string; shows: string }[] = [];
  steps.push({ code: "ShowMessage(objLearner.toString);", shows: o.toString() });
  o.setMark(80);
  steps.push({ code: "objLearner.setMark(80);  ShowMessage(BoolToStr(objLearner.isDistinction, True));", shows: o.isDistinction() ? 'True' : 'False' });
  o.setMark(120);
  steps.push({ code: "objLearner.setMark(120);  ShowMessage(IntToStr(objLearner.getMark));", shows: String(o.getMark()) });
  return steps;
}
