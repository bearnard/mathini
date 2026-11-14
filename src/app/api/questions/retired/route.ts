import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter } from '../../../../lib/server/admin/db';
import { retiredPromptKeys } from '../../../../lib/server/questions/moderation';

export const dynamic = 'force-dynamic';

/**
 * Public, tiny: the wording keys (hashes) of questions an admin has retired. Content-free. The browser hides curated-bank
 * questions whose wording key is listed. Any failure returns an empty list: learners are never blocked by moderation.
 */
export async function GET() {
  const headers = { 'Cache-Control': 'public, max-age=300' };
  try {
    const { env } = getCloudflareContext();
    const prompts = await retiredPromptKeys(d1Adapter(env.DB as never));
    return NextResponse.json({ prompts }, { headers });
  } catch (e) {
    console.error('retired list error:', e);
    return NextResponse.json({ prompts: [] }, { headers: { 'Cache-Control': 'no-store' } });
  }
}
