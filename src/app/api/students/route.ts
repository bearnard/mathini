import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { hashPin, generateLoginCode, generatePin } from '../../../lib/server/identity';
import { signSession, SESSION_COOKIE_NAME, SESSION_COOKIE_MAX_AGE } from '../../../lib/server/session';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { realName?: string; displayName?: string; school?: string; age?: number; grade?: number; avatar?: string };
    const realName = (body.realName ?? '').toString().trim();
    const displayName = (body.displayName ?? '').toString().trim();
    const school = (body.school ?? '').toString().trim();
    const age = Number(body.age);
    const grade = Number(body.grade);
    const avatar = (body.avatar ?? '/avatars/avatar-1.webp')?.toString() ?? '/avatars/avatar-1.webp';

    if (!realName || !displayName || !school || !Number.isInteger(grade) || grade < 5 || grade > 12) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const { env } = getCloudflareContext();
    const db = env.DB;
    const now = Date.now();
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
        `INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, avatar, real_name, school, age, grade, created_at, last_seen_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(studentId, loginCode, pinHash, salt, displayName, avatar, realName, school, age || null, grade, now, now)
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
    const token = await signSession(studentId, env.SESSION_SECRET);
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
    return NextResponse.json({ error: 'Internal server error: ' + (err instanceof Error ? err.message : String(err)) }, { status: 500 });
  }
}

