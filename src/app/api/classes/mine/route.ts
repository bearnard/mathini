import { handleMyClasses, classDepsFromEnv } from '../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return handleMyClasses(req, classDepsFromEnv());
}
