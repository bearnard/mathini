let currentAudio: HTMLAudioElement | null = null;

/** Plays Afrikaans pronunciation. Tries the server TTS route first (Gemini,
 *  high quality), then falls back to the browser's speech synthesis. */
export async function speak(text: string): Promise<void> {
  const trimmed = text.trim();
  if (!trimmed) {
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  try {
    const res = await fetch(`/api/tts?text=${encodeURIComponent(trimmed)}`);
    if (!res.ok) {
      throw new Error('tts failed');
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    currentAudio = audio;
    audio.addEventListener('ended', () => URL.revokeObjectURL(url));
    await audio.play();
    return;
  } catch {
    browserSpeak(trimmed);
  }
}

function browserSpeak(text: string): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const voice =
    voices.find((v) => v.lang.toLowerCase().startsWith('af')) ??
    voices.find((v) => v.lang.toLowerCase().startsWith('nl'));
  if (voice) {
    utterance.voice = voice;
  }
  utterance.lang = voice?.lang ?? 'af-ZA';
  utterance.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}
