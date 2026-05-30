import { NextRequest, NextResponse } from 'next/server';
import {
  synthesizePcm,
  pcmToMp3,
  getCachedAudio,
  putCachedAudio,
} from '../../../lib/server/gemini';

export const dynamic = 'force-dynamic';

function audioResponse(mp3: Uint8Array, cache: 'HIT' | 'MISS'): NextResponse {
  return new NextResponse(mp3 as unknown as BodyInit, {
    status: 200,
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'X-Cache': cache,
    },
  });
}

export async function GET(req: NextRequest) {
  const text = req.nextUrl.searchParams.get('text')?.trim() ?? '';

  if (!text) {
    return NextResponse.json({ error: 'Missing text' }, { status: 400 });
  }
  if (text.length > 200) {
    return NextResponse.json({ error: 'Text too long' }, { status: 400 });
  }

  const cached = await getCachedAudio(text);
  if (cached) {
    return audioResponse(cached, 'HIT');
  }

  try {
    const pcm = await synthesizePcm(text);
    const mp3 = pcmToMp3(pcm);
    await putCachedAudio(text, mp3);
    return audioResponse(mp3, 'MISS');
  } catch {
    return NextResponse.json({ error: 'TTS failed' }, { status: 502 });
  }
}
