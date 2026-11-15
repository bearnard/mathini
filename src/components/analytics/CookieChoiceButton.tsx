'use client';

import { REOPEN_EVENT } from './ConsentGtm';

/** On the privacy page: lets a visitor change their analytics choice. It clears the remembered choice and shows the banner again. */
export default function CookieChoiceButton() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(REOPEN_EVENT))} className="min-h-11 rounded-xl border-2 border-slate-300 bg-white px-4 text-sm font-bold text-slate-800">
      Change my analytics choice
    </button>
  );
}
