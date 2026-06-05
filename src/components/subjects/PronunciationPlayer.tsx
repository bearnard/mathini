'use client';

import { useState } from 'react';

interface PronunciationPlayerProps {
  /** Word or phrase to pronounce */
  word: string;
  /** Phonetic hint shown below the word */
  phonetic?: string;
  /** Translation or meaning */
  meaning?: string;
  /** BCP-47 language tag; defaults to xh (isiXhosa) */
  lang?: string;
  className?: string;
}

/**
 * Uses the Web Speech API to speak an isiXhosa (or other language) word/phrase.
 * Falls back gracefully when SpeechSynthesis is unavailable (e.g. some Workers environments).
 *
 * Usage:
 *   <PronunciationPlayer word="Molo" phonetic="[mɔ:lɔ]" meaning="Hello (to one person)" />
 */
const PronunciationPlayer = ({ word, phonetic, meaning, lang = 'xh', className }: PronunciationPlayerProps) => {
  const [speaking, setSpeaking] = useState(false);
  const [error, setError] = useState(false);

  const speak = () => {
    if (!window.speechSynthesis) {
      setError(true);
      return;
    }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(word);
    utt.lang = lang;
    utt.rate = 0.85;
    utt.onstart = () => setSpeaking(true);
    utt.onend = () => setSpeaking(false);
    utt.onerror = () => { setSpeaking(false); setError(true); };
    window.speechSynthesis.speak(utt);
  };

  return (
    <div className={`inline-flex flex-col items-center gap-1 ${className ?? ''}`}>
      <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
        <button
          onClick={speak}
          disabled={speaking}
          aria-label={`Pronounce ${word}`}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 transition-all shadow"
        >
          {speaking ? (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <span className="text-lg">🔊</span>
          )}
        </button>
        <div>
          <div className="font-bold text-slate-800 text-lg leading-tight">{word}</div>
          {phonetic && <div className="text-slate-500 text-sm font-mono">{phonetic}</div>}
          {meaning && <div className="text-slate-600 text-sm italic">{meaning}</div>}
        </div>
      </div>
      {error && (
        <p className="text-xs text-amber-600">Audio unavailable — try Chrome or Edge.</p>
      )}
    </div>
  );
};

export default PronunciationPlayer;
