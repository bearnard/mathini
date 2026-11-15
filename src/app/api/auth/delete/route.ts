import { handleDeleteAccount, depsFromEnv } from '../../../../lib/server/adultAuth/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  return handleDeleteAccount(req, depsFromEnv());
}
