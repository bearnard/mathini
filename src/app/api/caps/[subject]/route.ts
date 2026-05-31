import { NextRequest, NextResponse } from 'next/server';
import { generateItems, persistItems, fallbackItems } from '../../../../lib/server/gemini';
import { registry } from '../../../../lib/server/caps/registry';

export const dynamic = 'force-dynamic';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ subject: string }> },
) {
  const { subject } = await params;
  const config = registry[subject];
  if (!config) {
    return NextResponse.json({ error: 'Unknown subject' }, { status: 400 });
  }

  let body: { task?: string; count?: number };
  try {
    body = (await req.json()) as { task?: string; count?: number };
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const task = body.task ?? '';
  const instruction = config.tasks[task];
  if (!instruction) {
    return NextResponse.json({ error: 'Unknown task' }, { status: 400 });
  }

  const count = Math.min(Math.max(body.count ?? 6, 1), 10);
  // Grade is encoded in the task prefix (e.g. "gr7-topic") or defaults to 6
  const gradeMatch = task.match(/^gr(\d+)-/);
  const grade = gradeMatch ? parseInt(gradeMatch[1], 10) : 6;
  const prompt = config.getPreamble(grade).replace('{count}', String(count)) + instruction;

  try {
    const items = await generateItems(prompt);
    if (items.length > 0) {
      await persistItems(task, items);
      return NextResponse.json({ items });
    }
    const cached = await fallbackItems(task, count);
    return NextResponse.json({ items: cached });
  } catch {
    const cached = await fallbackItems(task, count);
    if (cached.length > 0) {
      return NextResponse.json({ items: cached });
    }
    return NextResponse.json({ error: 'Generation failed' }, { status: 502 });
  }
}
