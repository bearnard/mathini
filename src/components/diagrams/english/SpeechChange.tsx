import { CHANGE_NOTE, DIRECT, REPORTED, changesBetween, speechText } from './speech';
import type { SpeechChange as ChangeId, SpeechToken } from './speech';
import { TENSE_COLOR } from './tense';

/**
 * Direct speech turned into indirect speech, before and after. The words that change are
 * coloured and numbered 1-3, and the same numbers key the three changes underneath.
 */

const INK = '#0f172a';
const MARKS = '#fbbf24';
const THAT = '#fb7185';

const colorOf = (id: ChangeId, present: boolean) => (id === 1 ? MARKS : id === 2 ? THAT : present ? TENSE_COLOR.present : TENSE_COLOR.past);

const Words = ({ tokens, present }: { tokens: readonly SpeechToken[]; present: boolean }) => (
  <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5 text-[17px] font-semibold text-slate-100">
    {tokens.map((t, i) =>
      t.change ? (
        <span key={i} className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-extrabold" style={{ background: colorOf(t.change, present), color: INK }}>
          {t.text}
          <sup className="rounded-full bg-slate-900/80 px-1 text-[10px] font-black leading-tight text-white">{t.change}</sup>
        </span>
      ) : (
        <span key={i}>{t.text}</span>
      ),
    )}
  </p>
);

export const SpeechChange = () => {
  const changes = changesBetween(DIRECT, REPORTED);
  return (
    <div className="mx-auto w-full max-w-md space-y-2.5 rounded-2xl p-4 text-left" style={{ background: INK, fontFamily: 'inherit' }}>
      <div role="group" aria-label={`Direct speech: ${speechText(DIRECT)}`} className="space-y-1">
        <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">Direct speech</p>
        <Words tokens={DIRECT} present />
      </div>
      <p aria-hidden className="text-center text-xl font-black text-slate-400">↓</p>
      <div role="group" aria-label={`Reported speech: ${speechText(REPORTED)}`} className="space-y-1">
        <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">Reported speech</p>
        <Words tokens={REPORTED} present={false} />
      </div>
      <ul className="space-y-1.5 border-t border-slate-700 pt-2.5">
        {changes.map((id) => (
          <li key={id} className="flex items-center gap-2 text-sm font-bold text-slate-200">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-black" style={{ background: colorOf(id, id === 3 ? false : true), color: INK }}>{id}</span>
            {CHANGE_NOTE[id]}
          </li>
        ))}
      </ul>
    </div>
  );
};
