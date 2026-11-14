// Deterministic FAKE data for the admin dashboard (LOCAL development only).
// Pure: builds SQL text. scripts/seed-admin-demo.ts runs it against the LOCAL D1 only.
//
// Every row is marked so it can be removed exactly:
//   students.id       'demo-stu-NNN'      students.login_code 'DEMO-NNNN'
//   events.device_id  'demo-dev-...' (or 'dnt' with session_id 'demo-s-...')
// Names are made up; no real people.

const DAY = 86_400_000;
const SAST = 2 * 3_600_000;
export const CONSENT_VERSION_DEMO = 'privacy-2026-11-14-v2';

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const q = (v: string | number | null): string => (v === null ? 'NULL' : typeof v === 'number' ? String(v) : `'${v.replace(/'/g, "''")}'`);

interface City { city: string; region: string; code: string; lat: number; lon: number; w: number }
const CITIES: City[] = [
  { city: 'Johannesburg', region: 'Gauteng', code: 'GT', lat: -26.2, lon: 28.0, w: 18 },
  { city: 'Soweto', region: 'Gauteng', code: 'GT', lat: -26.3, lon: 27.9, w: 6 },
  { city: 'Pretoria', region: 'Gauteng', code: 'GT', lat: -25.7, lon: 28.2, w: 12 },
  { city: 'Cape Town', region: 'Western Cape', code: 'WC', lat: -33.9, lon: 18.4, w: 14 },
  { city: 'Stellenbosch', region: 'Western Cape', code: 'WC', lat: -33.9, lon: 18.9, w: 2 },
  { city: 'Durban', region: 'KwaZulu-Natal', code: 'KZN', lat: -29.9, lon: 31.0, w: 12 },
  { city: 'Pietermaritzburg', region: 'KwaZulu-Natal', code: 'KZN', lat: -29.6, lon: 30.4, w: 4 },
  { city: 'Gqeberha', region: 'Eastern Cape', code: 'EC', lat: -34.0, lon: 25.6, w: 6 },
  { city: 'East London', region: 'Eastern Cape', code: 'EC', lat: -33.0, lon: 27.9, w: 4 },
  { city: 'Bloemfontein', region: 'Free State', code: 'FS', lat: -29.1, lon: 26.2, w: 5 },
  { city: 'Polokwane', region: 'Limpopo', code: 'LP', lat: -23.9, lon: 29.5, w: 5 },
  { city: 'Mbombela', region: 'Mpumalanga', code: 'MP', lat: -25.5, lon: 30.9, w: 4 },
  { city: 'Kimberley', region: 'Northern Cape', code: 'NC', lat: -28.7, lon: 24.8, w: 2 },
  { city: 'Mahikeng', region: 'North West', code: 'NW', lat: -25.9, lon: 25.6, w: 2 },
];
const FOREIGN = [
  { country: 'GB', region: 'England', city: 'London', tz: 'Europe/London' },
  { country: 'US', region: 'California', city: 'San Jose', tz: 'America/Los_Angeles' },
  { country: 'ZW', region: 'Harare Province', city: 'Harare', tz: 'Africa/Harare' },
  { country: 'NA', region: 'Khomas', city: 'Windhoek', tz: 'Africa/Windhoek' },
  { country: 'AU', region: 'New South Wales', city: 'Sydney', tz: 'Australia/Sydney' },
];

// subject: the code stored on practice/learn events and attempts (NST/Geo/His/Afr shells use their own
// code; CapsSubjectTopic uses the API path segment, e.g. 'grade6', 'eng', 'math').
// cur: the curriculum subject id used by topic_open. rec: whether the app writes ATTEMPTS for it.
// (The Grade 6 NST, Geography, History and Afrikaans shells do not; they only emit practice events.)
interface Topic { subject: string; cur: string; grade: number; slug: string; section: string; adj: number; rec: boolean }
const nst = (slug: string, section: string, adj: number): Topic => ({ subject: 'nst', cur: 'nst', grade: 6, slug, section, adj, rec: false });
const TOPICS: Topic[] = [
  nst('photosynthesis', 'general', 0.05), nst('nutrients', 'general', 0.1), nst('food-chains', 'general', 0.08), nst('ecosystems', 'general', 0),
  nst('materials-properties', 'general', -0.05), nst('mixtures', 'general', 0.02), nst('separating-mixtures', 'general', -0.03), nst('solutions-dissolving', 'general', -0.08),
  nst('electric-circuits', 'brightness', -0.06), nst('conductors-insulators', 'general', 0.04), nst('circuit-diagrams', 'general', -0.02),
  nst('mains-electricity', 'power-station', -0.12), nst('systems-solve-problems', 'design-process', -0.1), nst('solar-system', 'planets', 0.03),
  nst('earth-moon-movement', 'moon-phases', -0.18), nst('day-night-seasons', 'general', -0.04), nst('space-exploration', 'telescopes', -0.07),
  { subject: 'geo', cur: 'geo', grade: 6, slug: 'map-skills', section: 'general', adj: 0, rec: false },
  { subject: 'geo', cur: 'geo', grade: 6, slug: 'weather-climate', section: 'general', adj: -0.05, rec: false },
  { subject: 'his', cur: 'his', grade: 6, slug: 'early-societies', section: 'general', adj: 0.02, rec: false },
  { subject: 'afr', cur: 'afr', grade: 6, slug: 'woordeskat', section: 'general', adj: -0.1, rec: false },
  { subject: 'grade6', cur: 'math', grade: 6, slug: 'fractions-t2', section: 'fractions', adj: -0.08, rec: true },
  { subject: 'grade6', cur: 'math', grade: 6, slug: 'whole-numbers-t1', section: 'general', adj: 0.06, rec: true },
  { subject: 'grade6', cur: 'math', grade: 6, slug: 'geometry-t3', section: 'general', adj: -0.1, rec: true },
  { subject: 'grade6', cur: 'math', grade: 6, slug: 'data-handling-t4', section: 'general', adj: 0.02, rec: true },
  { subject: 'eng', cur: 'eng', grade: 6, slug: 'comprehension-t1', section: 'general', adj: -0.04, rec: true },
  { subject: 'math', cur: 'math', grade: 5, slug: 'place-value', section: 'general', adj: 0.04, rec: true },
  { subject: 'nst', cur: 'nst', grade: 7, slug: 'cells', section: 'general', adj: -0.05, rec: true },
  { subject: 'math', cur: 'math', grade: 7, slug: 'integers', section: 'general', adj: -0.06, rec: true },
  { subject: 'eng', cur: 'eng', grade: 7, slug: 'foundational-grammar', section: 'general', adj: 0, rec: true },
  { subject: 'nst', cur: 'nst', grade: 8, slug: 'forces', section: 'general', adj: -0.09, rec: true },
  { subject: 'math', cur: 'math', grade: 9, slug: 'algebra', section: 'general', adj: -0.12, rec: true },
];
// Grade 6 practice mix by subject code (NST is the main current content).
const G6_SUBJECT_WEIGHT: Record<string, number> = { nst: 40, grade6: 25, eng: 10, geo: 10, his: 8, afr: 7 };
const SUBJECT_BY_GRADE = (g: number) => TOPICS.filter((t) => t.grade === g);

const FIRST = ['Thandi', 'Sipho', 'Lerato', 'Ayanda', 'Naledi', 'Kabelo', 'Zinhle', 'Mpho', 'Amahle', 'Thabo', 'Palesa', 'Lwazi', 'Nomsa', 'Bongani', 'Refilwe', 'Tshepo', 'Lindiwe', 'Siyabonga', 'Karabo', 'Anele', 'Jordan', 'Megan', 'Aiden', 'Priya', 'Riaan', 'Chloe', 'Imran', 'Zanele', 'Dumisani', 'Kgomotso'];
const LAST_INITIAL = 'ABDGHJKLMNPRSTVZ';
const ANIMALS = ['lion', 'zebra', 'owl', 'penguin', 'elephant', 'meerkat', 'cheetah', 'hippo'];
const DEVICES = [
  { w: 55, device: 'mobile', browser: 'Chrome', os: 'Android' },
  { w: 12, device: 'mobile', browser: 'Safari', os: 'iOS' },
  { w: 5, device: 'mobile', browser: 'Samsung Internet', os: 'Android' },
  { w: 16, device: 'desktop', browser: 'Chrome', os: 'Windows' },
  { w: 4, device: 'desktop', browser: 'Edge', os: 'Windows' },
  { w: 3, device: 'desktop', browser: 'Safari', os: 'macOS' },
  { w: 5, device: 'tablet', browser: 'Safari', os: 'iOS' },
];
const REFERRERS = [null, null, null, 'google.com', 'google.com', 'facebook.com', 'whatsapp.com', 'bing.com'];

export interface DemoOptions {
  /** ms epoch treated as "now" (default: Date.now()) */
  now?: number;
  seed?: number;
  learners?: number;
  days?: number;
}

export interface DemoStats {
  learners: number;
  consented: number;
  events: number;
  attempts: number;
  badges: number;
  firstDay: string;
  lastDay: string;
}

export const DEMO_CLEAN_SQL = `
DELETE FROM student_badges WHERE student_id LIKE 'demo-stu-%';
DELETE FROM student_xp WHERE student_id LIKE 'demo-stu-%';
DELETE FROM attempts WHERE student_id LIKE 'demo-stu-%';
DELETE FROM events WHERE device_id LIKE 'demo-dev-%' OR (device_id = 'dnt' AND session_id LIKE 'demo-s-%') OR student_id LIKE 'demo-stu-%';
DELETE FROM students WHERE id LIKE 'demo-stu-%';
`;

export function buildDemoSql(opts: DemoOptions = {}): { sql: string; stats: DemoStats } {
  const now = opts.now ?? Date.now();
  const rnd = mulberry32(opts.seed ?? 20261114);
  const nLearners = opts.learners ?? 40;
  const days = opts.days ?? 60;

  const pick = <T,>(arr: T[]): T => arr[Math.floor(rnd() * arr.length)];
  const weighted = <T extends { w: number }>(arr: T[]): T => {
    let r = rnd() * arr.reduce((n, x) => n + x.w, 0);
    for (const x of arr) if ((r -= x.w) < 0) return x;
    return arr[arr.length - 1];
  };
  const todayStart = Math.floor((now + SAST) / DAY) * DAY - SAST; // 00:00 SAST today
  const firstStart = todayStart - (days - 1) * DAY;
  const jitter = (n: number) => Math.floor(rnd() * n);
  const pickG6 = (): Topic => {
    const g6 = TOPICS.filter((t) => t.grade === 6);
    const subjects = Object.keys(G6_SUBJECT_WEIGHT);
    let r = rnd() * subjects.reduce((n, k) => n + G6_SUBJECT_WEIGHT[k], 0);
    let chosen = subjects[0];
    for (const k of subjects) if ((r -= G6_SUBJECT_WEIGHT[k]) < 0) { chosen = k; break; }
    const pool = g6.filter((t) => t.subject === chosen);
    return pool[Math.floor(rnd() * pool.length)];
  };

  const students: string[] = [];
  const events: string[] = [];
  const attempts: string[] = [];
  const xpRows: string[] = [];
  const badgeRows: string[] = [];
  const stats: DemoStats = { learners: 0, consented: 0, events: 0, attempts: 0, badges: 0, firstDay: new Date(firstStart + SAST).toISOString().slice(0, 10), lastDay: new Date(todayStart + SAST).toISOString().slice(0, 10) };

  let sessionCounter = 0;
  const newSession = () => `demo-s-${++sessionCounter}-${jitter(1e6).toString(36)}`;

  interface EvInit { ts: number; type: string; device: string; session: string; student: string | null; grade?: number | null; subject?: string | null; topic?: string | null; path?: string | null; loc: { country: string; region: string | null; code: string | null; city: string | null; tz: string | null; lat: number | null; lon: number | null }; ua: { device: string; browser: string; os: string }; referrer?: string | null; meta?: Record<string, string | number | boolean> | null }
  const pushEvent = (e: EvInit) => {
    events.push(`(${[e.ts, q(e.type), q(e.device), q(e.session), q(e.student), e.grade ?? 'NULL', q(e.subject ?? null), q(e.topic ?? null), q(e.path ?? null), q(e.loc.country), q(e.loc.region), q(e.loc.code), q(e.loc.city), q(e.loc.tz), e.loc.lat ?? 'NULL', e.loc.lon ?? 'NULL', q(e.ua.device), q(e.ua.browser), q(e.ua.os), q(e.referrer ?? null), q(e.meta ? JSON.stringify(e.meta) : null)].join(',')})`);
    stats.events++;
  };

  // hour-of-day weights in SAST: study peaks after school and in the evening
  const HOUR_W = [0.2, 0.1, 0.05, 0.05, 0.1, 0.3, 1, 1.5, 1.2, 1, 1, 1.3, 1.6, 2.2, 3.4, 4.6, 5, 4.6, 4.4, 4, 3.2, 1.8, 0.8, 0.4];
  const hourOfDay = () => {
    let r = rnd() * HOUR_W.reduce((a, b) => a + b, 0);
    for (let h = 0; h < 24; h++) if ((r -= HOUR_W[h]) < 0) return h;
    return 16;
  };
  const dayWeight = (dayIndex: number, dow: number) => {
    const weekday = dow === 0 || dow === 6 ? 0.55 : [1.0, 1.15, 1.15, 1.05, 0.9][dow - 1];
    const ramp = 1 + 1.4 * Math.max(0, (dayIndex - (days - 22)) / 22); // exam rush over the last three weeks
    return weekday * ramp;
  };

  // ---- learners ----
  for (let i = 1; i <= nLearners; i++) {
    const id = `demo-stu-${String(i).padStart(3, '0')}`;
    const grade = weighted([{ w: 14, g: 5 }, { w: 36, g: 6 }, { w: 22, g: 7 }, { w: 12, g: 8 }, { w: 16, g: 9 }]).g;
    const home = weighted(CITIES);
    const ua = weighted(DEVICES);
    const consented = rnd() < 0.65;
    const ability = 0.42 + rnd() * 0.5;
    const engagement = 0.1 + rnd() * 0.6; // chance of being active on a given day
    // most sign-ups in the last 5 weeks; a few earlier
    const created = todayStart - Math.floor((1 - Math.pow(rnd(), 1.7)) * (days + 12)) * DAY + jitter(DAY - 1);
    const createdMs = Math.min(created, now - 3_600_000);
    const first = pick(FIRST);
    const real = `${first} ${pick([...LAST_INITIAL])}.`;
    const display = `${pick(ANIMALS)}_${first.toLowerCase().slice(0, 5)}${i}`;
    const device = `demo-dev-${String(i).padStart(3, '0')}`;
    const topics = SUBJECT_BY_GRADE(grade);
    const loc = consented
      ? { country: 'ZA', region: home.region, code: home.code, city: home.city, tz: 'Africa/Johannesburg', lat: home.lat, lon: home.lon }
      : { country: 'ZA', region: home.region, code: home.code, city: null, tz: 'Africa/Johannesburg', lat: null, lon: null };
    const studentRef = consented ? id : null;

    // onboarding on the sign-up day (event times use the sign-up moment)
    const sess0 = newSession();
    const base0 = { device, session: sess0, student: null as string | null, loc: { ...loc, city: null, lat: null, lon: null }, ua };
    pushEvent({ ...base0, ts: createdMs - 240_000, type: 'session_start', referrer: pick(REFERRERS) });
    pushEvent({ ...base0, ts: createdMs - 238_000, type: 'page_view', path: '/' });
    pushEvent({ ...base0, ts: createdMs - 200_000, type: 'page_view', path: '/app' });
    pushEvent({ ...base0, ts: createdMs - 190_000, type: 'onboarding_start' });
    pushEvent({ ...base0, ts: createdMs - 10_000, type: 'signup', grade, student: studentRef, loc, meta: { consent_version: CONSENT_VERSION_DEMO } });

    let xp = 0, total = 0, correctN = 0, bestStreak = 0, anyCorrect = false;
    const topicCounts = new Map<string, number>();
    let lastActive = createdMs;

    for (let d = 0; d < days; d++) {
      const dayStart = firstStart + d * DAY;
      if (dayStart + DAY <= createdMs) continue; // not signed up yet
      const dow = new Date(dayStart + SAST + 1).getUTCDay();
      const sameDayAsSignup = createdMs >= dayStart && createdMs < dayStart + DAY;
      if (!sameDayAsSignup && rnd() > engagement * dayWeight(d, dow) * 0.9) continue;
      const sessions = rnd() < 0.2 ? 2 : 1;
      for (let s = 0; s < sessions; s++) {
        let t = dayStart + hourOfDay() * 3_600_000 + jitter(3_600_000);
        if (sameDayAsSignup) t = Math.max(t, createdMs + 60_000);
        if (t > now - 120_000 || t < createdMs) continue;
        const session = newSession();
        const common = { device, session, student: studentRef, loc, ua };
        pushEvent({ ...common, ts: t, type: 'session_start' });
        if (!sameDayAsSignup && rnd() < 0.25) pushEvent({ ...common, ts: t + 500, type: 'login', grade });
        pushEvent({ ...common, ts: t + 1000, type: 'page_view', path: '/app' });
        const topic = grade === 6 ? pickG6() : pick(topics);
        t += 8_000;
        pushEvent({ ...common, ts: t, type: 'topic_open', grade, subject: topic.cur, topic: `${topic.cur}-${topic.slug}` });
        if (rnd() < 0.6) {
          t += 40_000 + jitter(80_000);
          pushEvent({ ...common, ts: t, type: 'learn_complete', grade, subject: topic.subject, topic: topic.slug });
        }
        if (rnd() < 0.85) {
          t += 3_000;
          const startedAt = t;
          pushEvent({ ...common, ts: t, type: 'practice_start', grade, subject: topic.subject, topic: topic.slug });
          const nQ = 6 + jitter(10);
          let sc = 0, streak = 0;
          for (let k = 0; k < nQ; k++) {
            t += 15_000 + jitter(45_000);
            const pCorrect = Math.min(0.96, Math.max(0.12, ability + topic.adj + (rnd() - 0.5) * 0.1));
            const ok = rnd() < pCorrect;
            streak = ok ? streak + 1 : 0;
            bestStreak = Math.max(bestStreak, streak);
            const xpA = ok ? 10 + Math.min(streak, 5) * 2 : 0;
            if (topic.rec) {
              attempts.push(`(${[q(id), q(topic.slug), 'NULL', q(topic.section), topic.grade, q(topic.subject), q(topic.slug), ok ? 1 : 0, xpA, streak, t].join(',')})`);
              stats.attempts++;
              xp += xpA; total++; if (ok) { correctN++; anyCorrect = true; }
            }
            if (ok) sc++;
          }
          if (topic.rec) topicCounts.set(topic.slug, (topicCounts.get(topic.slug) ?? 0) + nQ);
          if (rnd() < 0.85) {
            pushEvent({ ...common, ts: t + 1500, type: 'practice_finish', grade, subject: topic.subject, topic: topic.slug, meta: { score: sc, total: nQ, ms: t + 1500 - startedAt } });
          } // else: the learner left before finishing the question set
          t += 1500;
        }
        // grade 6 NST learners sometimes take the Term 3/4 mock test in the last three weeks
        if (grade === 6 && d >= days - 22 && rnd() < 0.12) {
          t += 20_000;
          const mock = rnd() < 0.5 ? 'term-3-mock-test' : 'term-4-mock-test';
          pushEvent({ ...common, ts: t, type: 'mock_test_start', grade: 6, subject: 'nst', topic: mock, meta: { questions: 20 } });
          const score = Math.max(3, Math.min(20, Math.round(20 * (ability + (rnd() - 0.5) * 0.25))));
          t += 6 * 60_000 + jitter(5 * 60_000);
          pushEvent({ ...common, ts: t, type: 'mock_test_finish', grade: 6, subject: 'nst', topic: mock, meta: { score, total: 20, reask_fixed: Math.round((20 - score) * 0.4), reask_total: 20 - score } });
        }
        lastActive = Math.max(lastActive, t);
      }
    }

    stats.learners++;
    if (consented) stats.consented++;
    students.push(`(${[q(id), q(`DEMO-${String(i).padStart(4, '0')}`), q('demo'), q('demo'), q(display), q(`/avatars/avatar-${1 + (i % 8)}.webp`), q(real), q(`Demo School ${String.fromCharCode(65 + (i % 6))}`), 9 + grade, grade, createdMs, lastActive, consented ? createdMs : 'NULL', consented ? q(CONSENT_VERSION_DEMO) : 'NULL'].join(',')})`);
    xpRows.push(`(${[q(id), q('overall'), xp, correctN, total, lastActive].join(',')})`);
    for (const [slug, n] of topicCounts) xpRows.push(`(${[q(id), q(`topic:${slug}`), 0, 0, n, lastActive].join(',')})`);
    const earned: string[] = [];
    if (anyCorrect) earned.push('first-correct');
    if (bestStreak >= 3) earned.push('streak-3');
    if (bestStreak >= 5) earned.push('streak-5');
    if (bestStreak >= 10) earned.push('streak-10');
    if (xp >= 500) earned.push('xp-500');
    if (xp >= 2000) earned.push('xp-2000');
    if ([...topicCounts.values()].some((n) => n >= 5)) earned.push('topic-complete-5');
    for (const b of earned) {
      badgeRows.push(`(${[q(id), q(b), lastActive - jitter(5 * DAY)].join(',')})`);
      stats.badges++;
    }
  }

  // ---- anonymous visitors (province only) and Do Not Track visits ----
  for (let d = 0; d < days; d++) {
    const dayStart = firstStart + d * DAY;
    const dow = new Date(dayStart + SAST + 1).getUTCDay();
    const n = Math.round((5 + rnd() * 5) * dayWeight(d, dow));
    for (let v = 0; v < n; v++) {
      const t0 = dayStart + hourOfDay() * 3_600_000 + jitter(3_600_000);
      if (t0 > now - 120_000) continue;
      const foreign = rnd() < 0.07;
      const dnt = rnd() < 0.06;
      const home = weighted(CITIES);
      const f = pick(FOREIGN);
      const loc = foreign
        ? { country: f.country, region: dnt ? null : f.region, code: null, city: null, tz: dnt ? null : f.tz, lat: null, lon: null }
        : dnt
          ? { country: 'ZA', region: null, code: null, city: null, tz: null, lat: null, lon: null }
          : { country: 'ZA', region: home.region, code: home.code, city: null, tz: 'Africa/Johannesburg', lat: null, lon: null };
      const ua = weighted(DEVICES);
      const device = dnt ? 'dnt' : `demo-dev-anon-${d}-${v}`;
      const session = newSession();
      const c = { device, session, student: null as string | null, loc, ua };
      pushEvent({ ...c, ts: t0, type: 'session_start', referrer: dnt ? null : pick(REFERRERS) });
      pushEvent({ ...c, ts: t0 + 500, type: 'page_view', path: pick(['/', '/', '/grade-6/natural-sciences-technology', '/grade-7/mathematics']) });
      if (!dnt && rnd() < 0.45) {
        pushEvent({ ...c, ts: t0 + 25_000 + jitter(60_000), type: 'page_view', path: '/app' });
        if (rnd() < 0.5) pushEvent({ ...c, ts: t0 + 90_000 + jitter(60_000), type: 'onboarding_start' });
      }
    }
  }

  const chunk = (table: string, cols: string, rows: string[], size = 80) => {
    const out: string[] = [];
    for (let i = 0; i < rows.length; i += size) out.push(`INSERT INTO ${table} (${cols}) VALUES\n${rows.slice(i, i + size).join(',\n')};`);
    return out.join('\n');
  };

  const sql = [
    '-- Generated demo data (LOCAL ONLY). Remove with: seed-admin-demo.ts --clean',
    DEMO_CLEAN_SQL.trim(),
    chunk('students', 'id, login_code, pin_hash, pin_salt, display_name, avatar, real_name, school, age, grade, created_at, last_seen_at, parent_consent_at, consent_version', students),
    chunk('student_xp', 'student_id, scope, xp, correct_count, total_count, updated_at', xpRows),
    chunk('student_badges', 'student_id, badge_id, earned_at', badgeRows),
    chunk('attempts', 'student_id, task, item_id, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at', attempts, 120),
    chunk('events', 'ts, type, device_id, session_id, student_id, grade, subject, topic, path, country, region, region_code, city, timezone, lat, lon, device, browser, os, referrer, meta', events, 120),
  ].join('\n\n');

  return { sql, stats };
}
