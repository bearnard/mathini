// The one line a route adds: `const limited = await routeLimited(req, 'attempts', studentId); if (limited) return limited;`
// Reads the bindings from the Worker env; with no Cloudflare context (tests, a plain Node run) it allows the call.
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { edgeLimited, type EdgeLimitEnv, type EdgeRoute } from './edgeLimit';

const envOrNull = (): EdgeLimitEnv | null => {
  try {
    return getCloudflareContext().env as unknown as EdgeLimitEnv;
  } catch {
    return null;
  }
};

export const routeLimited = (req: Request, route: EdgeRoute, learnerId?: string | null): Promise<Response | null> => edgeLimited(envOrNull(), req, route, learnerId);
