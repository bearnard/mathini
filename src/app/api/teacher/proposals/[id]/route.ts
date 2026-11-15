import { handleOne, handleRevise, handleWithdraw, depsFromEnv } from '../../../../../lib/server/moderation/http';
export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ id: string }> };

export async function GET(req: Request, { params }: Ctx) {
  return handleOne(req, depsFromEnv(), (await params).id);
}

/** POST revises (X-Auth-Action: proposal-revise); DELETE withdraws (X-Auth-Action: proposal-withdraw). */
export async function POST(req: Request, { params }: Ctx) {
  return handleRevise(req, depsFromEnv(), (await params).id);
}

export async function DELETE(req: Request, { params }: Ctx) {
  return handleWithdraw(req, depsFromEnv(), (await params).id);
}
