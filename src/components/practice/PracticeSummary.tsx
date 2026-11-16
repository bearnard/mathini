'use client';

import Card from '../ui/Card';
import Button from '../ui/Button';
import { MAX_MISSED_SHOWN, summaryText, type MissedItem } from '../../lib/shared/practiceSummary';

/** The end of a topic practice session: the score, what it means, the questions to look at again, and what to do next. */
export default function PracticeSummary({ total, correct, missed, weakSections = [], onBackToLearn, onAgain }: { total: number; correct: number; missed: MissedItem[]; weakSections?: string[]; onBackToLearn?: () => void; onAgain: () => void }) {
  const t = summaryText(correct, total);
  const shown = missed.slice(0, MAX_MISSED_SHOWN);
  return (
    <Card className="p-8 text-center space-y-6" aria-label="Practice results">
      <div className="text-5xl">{t.emoji}</div>
      <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
      <p className="text-xl font-semibold text-slate-800" data-testid="practice-score">You got {correct} of {total} right ({t.percent}%)</p>
      <p className="text-slate-600">{t.message}</p>

      {shown.length > 0 && (
        <div className="rounded-xl bg-amber-50 p-5 text-left text-amber-900" data-testid="practice-missed">
          <p className="font-semibold">Look at these again:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            {shown.map((m) => (
              <li key={m.prompt}>
                <span className="block">{m.prompt}</span>
                <span className="block text-sm font-semibold">Answer: {m.answer}</span>
              </li>
            ))}
          </ul>
          {missed.length > shown.length && <p className="mt-2 text-sm">…and {missed.length - shown.length} more. Practise again to see them.</p>}
        </div>
      )}

      {weakSections.length > 0 && (
        <div className="space-y-2" data-testid="practice-sections">
          <p className="text-slate-600">Sections to revise:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {weakSections.map((section) => <span key={section} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{section}</span>)}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        {onBackToLearn && <Button variant="secondary" onClick={onBackToLearn}>Back to the lesson</Button>}
        <Button onClick={onAgain}>Practise again</Button>
      </div>
    </Card>
  );
}
