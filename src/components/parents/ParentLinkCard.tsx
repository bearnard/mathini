import { HeartHandshake } from 'lucide-react';
import Card from '../ui/Card';

/**
 * A learner's way to bring a parent or guardian in (ADR 0003 families): it leads to /invite-parent, where the learner makes a link or code for the
 * adult. Shown to signed-in learners on the home screen, in the same style as the classes card. A plain link: no script of its own.
 */
export default function ParentLinkCard() {
  return (
    <Card className="mb-4 p-4 md:p-5" aria-label="Link a parent or guardian">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-700"><HeartHandshake className="h-6 w-6" /></div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-slate-800 md:text-lg">Link a parent or guardian</h3>
          <p className="text-sm text-slate-600">Let a parent see how you are doing and help if you forget your PIN.</p>
        </div>
      </div>
      <a href="/invite-parent" className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800 hover:bg-slate-50">Link a parent</a>
    </Card>
  );
}
