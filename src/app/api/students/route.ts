import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { hashPin, generateLoginCode, generatePin } from '../../../lib/server/identity';
import { signSessionV, SESSION_COOKIE_NAME, SESSION_COOKIE_MAX_AGE } from '../../../lib/server/session';
import { parseRegistration } from '../../../lib/server/consent';
import { CONSENT_VERSION } from '../../../lib/privacyNotice';
import { routeLimited } from '../../../lib/server/edgeLimitRoute';
import { d1Adapter } from '../../../lib/server/admin/db';
import { clientIp, signupAllowed, SIGNUP_LIMITED } from '../../../lib/server/learnerGuards';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const limited = await routeLimited(req, 'students');
    if (limited) return limited;
    const parsed = parseRegistration(await req.json().catch(() => null));
    // Rejected unless a parent/guardian agreement came with the request (not just a UI check).
    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }
    const { realName, displayName, school, age, grade, avatar } = parsed.value;

    const { env } = getCloudflareContext();
    const db = env.DB;
    const now = Date.now();
    // Security review: sign-up is open to everyone, so it is limited per connection (generous: a whole class behind one school connection fits).
    if (!(await signupAllowed(d1Adapter(db as never), clientIp(req), now))) {
      return NextResponse.json({ error: SIGNUP_LIMITED }, { status: 429 });
    }
    const studentId = crypto.randomUUID();

    // Generate identity — retry on unique collision
    let loginCode = generateLoginCode();
    let pin = generatePin();

    for (let attempt = 0; attempt < 5; attempt++) {
      const check = await db
        .prepare('SELECT id FROM students WHERE login_code = ?')
        .bind(loginCode)
        .first<string>();
      if (!check) break;
      loginCode = generateLoginCode();
      pin = generatePin();
    }

    const { hash: pinHash, salt } = await hashPin(pin);

    // Insert student
    await db
      .prepare(
        `INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, avatar, real_name, school, age, grade, created_at, last_seen_at, parent_consent_at, consent_version)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(studentId, loginCode, pinHash, salt, displayName, avatar, realName, school, age, grade, now, now, now, CONSENT_VERSION)
      .run();

    // Seed overall XP row
    await db
      .prepare(
        `INSERT INTO student_xp (student_id, scope, xp, correct_count, total_count, updated_at)
         VALUES (?, 'overall', 0, 0, 0, ?)`,
      )
      .bind(studentId, now)
      .run();

    // Set session cookie so the browser stays signed in across reloads
    const token = await signSessionV(studentId, 0, env.SESSION_SECRET); // a new learner starts at session version 0
    const response = NextResponse.json({
      studentId,
      displayName,
      loginCode,
      pin,
    });
    response.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_COOKIE_MAX_AGE,
      secure: process.env.NODE_ENV === 'production',
    });
    return response;
  } catch (err) {
    console.error('Onboarding error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 }); // never the error text: it can carry SQL and schema details
  }
}

