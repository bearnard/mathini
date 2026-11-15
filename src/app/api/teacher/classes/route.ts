import { handleListClasses, handleCreateClass, depsFromEnv } from '../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return handleListClasses(req, depsFromEnv());
}

export async function POST(req: Request) {
  return handleCreateClass(req, depsFromEnv());
}
