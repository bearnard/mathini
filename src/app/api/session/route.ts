import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { verifyPin } from '../../../lib/server/identity';
import { signSession, verifySession, SESSION_COOKIE_NAME, SESSION_COOKIE_MAX_AGE } from '../../../lib/server/session';

export const dynamic = 'force-dynamic';

// Rate-limit: track failed attempts per login_code
const ATTEMPT_LIMIT = 10;
const COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes
// Simple in-memory rate limit store (not distributed — fine for single-worker or low-traffic)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { loginCode?: string; pin?: string };
    const loginCode = (body.loginCode ?? '').toString().trim().toUpperCase();
    const pin = (body.pin ?? '').toString().trim();

    if (!loginCode || !pin) {
      return NextResponse.json({ error: 'Login code and PIN required' }, { status: 400 });
    }

    // Check rate limit
    const limitKey = loginCode;
    const limit = rateLimitStore.get(limitKey);
    const now = Date.now();
    if (limit && limit.count >= ATTEMPT_LIMIT && now < limit.resetAt) {
      return NextResponse.json({ error: 'Too many attempts. Try again later.' }, { status: 429 });
    }

    const { env } = getCloudflareContext();
    const db = env.DB;

    const student = await db
      .prepare('SELECT id, pin_hash, pin_salt, display_name, grade, avatar, parent_consent_at FROM students WHERE login_code = ?')
      .bind(loginCode)
      .first<{ id: string; pin_hash: string; pin_salt: string; display_name: string; grade: number; avatar: string; parent_consent_at: number | null }>();

    if (!student) {
      incrementRateLimit(limitKey);
      return NextResponse.json({ error: 'Invalid login code' }, { status: 401 });
    }

    const valid = await verifyPin(pin, student.pin_salt, student.pin_hash);
    if (!valid) {
      incrementRateLimit(limitKey);
      return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 });
    }

    // Reset rate limit on success
    rateLimitStore.delete(limitKey);

    // Update last_seen
    await db
      .prepare('UPDATE students SET last_seen_at = ? WHERE id = ?')
      .bind(now, student.id)
      .run();

    // Set session cookie so the browser stays signed in across reloads
    const token = await signSession(student.id, env.SESSION_SECRET);
    const response = NextResponse.json({
      studentId: student.id,
      displayName: student.display_name,
      grade: student.grade,
      avatar: student.avatar,
      consented: student.parent_consent_at != null,
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
    console.error('Session resume error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { env } = getCloudflareContext();
  const session = await verifySession(req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const db = env.DB;
  const student = await db
    .prepare('SELECT id, display_name, avatar, grade, xp, parent_consent_at FROM students LEFT JOIN student_xp ON students.id = student_xp.student_id AND student_xp.scope = ? WHERE students.id = ?')
    .bind('overall', session)
    .first<{ id: string; display_name: string; avatar: string; grade: number; xp: number; parent_consent_at: number | null }>();

  if (!student) {
    return NextResponse.json({ error: 'Student not found' }, { status: 404 });
  }

  return NextResponse.json({
    studentId: student.id,
    displayName: student.display_name,
    avatar: student.avatar,
    grade: student.grade,
    xp: student.xp || 0,
    consented: student.parent_consent_at != null,
  });
}

export async function DELETE(req: NextRequest) {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(SESSION_COOKIE_NAME);
  return response;
}

function incrementRateLimit(key: string): void {
  const now = Date.now();
  const existing = rateLimitStore.get(key);
  if (!existing || now >= existing.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + COOLDOWN_MS });
  } else {
    existing.count++;
  }
}
