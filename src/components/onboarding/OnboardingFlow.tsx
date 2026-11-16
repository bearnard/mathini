'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import AvatarPicker from './AvatarPicker';
import SaveLoginCode from './SaveLoginCode';
import { clearPending, savePending } from '../../lib/client/pendingCredentials';
import { onboardingSchema } from '../../lib/client/onboardingSchema';
import type { OnboardingOutput } from '../../lib/client/onboardingSchema';
import { useStudent } from '../../lib/client/StudentContext';
import { track, CONSENT_VERSION } from '../../lib/client/analytics';
import { PRIVACY_LINE, CONSENT_CHECKBOX_LABEL } from '../../lib/privacyNotice';

const GRADES = Array.from({ length: 8 }, (_, i) => ({
  value: i + 5,
  label: `Grade ${i + 5}`,
}));

const AGES = Array.from({ length: 15 }, (_, i) => ({
  value: i + 5,
  label: `${i + 5}`,
}));

export default function OnboardingFlow({ onDone }: { onDone: () => void }) {
  const { setStudent } = useStudent();
  const [step, setStep] = useState(0); // 0 = register, 1 = save code, 2 = done
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<{ loginCode: string; pin: string; studentId: string } | null>(null);

  const [form, setForm] = useState({
    realName: '',
    displayName: '',
    school: '',
    age: '',
    grade: '',
    avatar: '/avatars/avatar-1.webp',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [parentConsent, setParentConsent] = useState(false);

  const startTracked = useRef(false);
  useEffect(() => {
    if (startTracked.current) return; // React StrictMode replays effects in dev
    startTracked.current = true;
    track('onboarding_start');
  }, []);

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setErrors({});

    const result = onboardingSchema.safeParse({
      realName: form.realName,
      displayName: form.displayName,
      school: form.school,
      age: Number(form.age),
      grade: Number(form.grade),
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    // The parent/guardian box is required (the server also rejects sign-up without it).
    if (!parentConsent) {
      setErrors({ parentConsent: 'Please ask a parent or guardian, then tick the box to continue.' });
      return;
    }

    const data = result.data as OnboardingOutput;
    setLoading(true);

    try {
      const res = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, avatar: form.avatar, parentConsent: true }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? 'Registration failed');
      }

      const json = (await res.json()) as { loginCode: string; pin: string; studentId: string };
      setResult({ loginCode: json.loginCode, pin: json.pin, studentId: json.studentId });
      savePending({ loginCode: json.loginCode, pin: json.pin }); // a reload before "I've saved it" must not lose the PIN
      track('signup', { grade: data.grade, meta: { consent_version: CONSENT_VERSION } });
      setStep(1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = () => {
    clearPending();
    // Save the student
    setStudent({
      id: result?.studentId ?? '',
      displayName: form.displayName,
      avatar: form.avatar,
      grade: Number(form.grade),
      xp: 0,
      xpByScope: {},
      consented: true,
    });
    setStep(2);
    // Small delay so the animation plays before calling onDone
    setTimeout(onDone, 600);
  };

  return (
    <AnimatePresence mode="wait">
      {step === 0 && (
        <motion.div
          key="register"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-md mx-auto space-y-6"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800">Welcome to PrepPals! 🎉</h1>
            <p className="text-slate-600 mt-2">
              Create your account to track progress and compete on the leaderboard.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <AvatarPicker
              value={form.avatar}
              onChange={(p) => update('avatar', p)}
            />
            <Input
              label="Your name"
              value={form.realName}
              onChange={(e) => update('realName', e.target.value)}
              error={errors.realName}
              placeholder="Alice"
              required
            />
            <Input
              label="Display name (nickname)"
              value={form.displayName}
              onChange={(e) => update('displayName', e.target.value)}
              error={errors.displayName}
              placeholder="Tiger_42"
              required
            />
            <Input
              label="School name"
              value={form.school}
              onChange={(e) => update('school', e.target.value)}
              error={errors.school}
              placeholder="Sunrise Primary"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <Select
                label="Grade"
                value={form.grade}
                onChange={(e) => update('grade', e.target.value)}
                error={errors.grade}
                options={GRADES}
                placeholder="Select grade"
                required
              />
              <Select
                label="Age"
                value={form.age}
                onChange={(e) => update('age', e.target.value)}
                error={errors.age}
                options={AGES}
                placeholder="Select age"
                required
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}

            <p className="text-xs text-slate-500 text-center">
              {PRIVACY_LINE}{' '}
              <a href="/privacy" target="_blank" rel="noopener" className="underline">
                Read more
              </a>
            </p>

            <div>
              <label className="flex items-start gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={parentConsent}
                  onChange={(e) => setParentConsent(e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0"
                  required
                />
                <span>
                  {CONSENT_CHECKBOX_LABEL}{' '}
                  <a href="/privacy" target="_blank" rel="noopener" className="underline">
                    Privacy
                  </a>
                </span>
              </label>
              {errors.parentConsent && <p className="mt-1 text-sm text-red-600">{errors.parentConsent}</p>}
            </div>

            <Button type="submit" className="w-full" isLoading={loading}>
              Create Account
            </Button>
          </form>
        </motion.div>
      )}

      {step === 1 && result && <SaveLoginCode loginCode={result.loginCode} pin={result.pin} onSaved={handleConfirm} />}
    </AnimatePresence>
  );
}
