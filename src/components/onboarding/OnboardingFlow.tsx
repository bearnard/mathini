'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import AvatarPicker from './AvatarPicker';
import { onboardingSchema } from '../../lib/client/onboardingSchema';
import type { OnboardingOutput } from '../../lib/client/onboardingSchema';
import { useStudent } from '../../lib/client/StudentContext';

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

    const data = result.data as OnboardingOutput;
    setLoading(true);

    try {
      const res = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, avatar: form.avatar }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? 'Registration failed');
      }

      const json = (await res.json()) as { loginCode: string; pin: string; studentId: string };
      setResult({ loginCode: json.loginCode, pin: json.pin, studentId: json.studentId });
      setStep(1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = () => {
    // Save the student
    setStudent({
      id: result?.studentId ?? '',
      displayName: form.displayName,
      avatar: form.avatar,
      grade: Number(form.grade),
      xp: 0,
      xpByScope: {},
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

            <Button type="submit" className="w-full" isLoading={loading}>
              Create Account
            </Button>
          </form>
        </motion.div>
      )}

      {step === 1 && result && (
        <motion.div
          key="save-code"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-md mx-auto space-y-6"
        >
          <Card className="p-8 text-center space-y-6">
            <div className="text-5xl">🔑</div>
            <h2 className="text-2xl font-bold text-slate-800">Save your Login Code</h2>
            <p className="text-slate-600">
              Write this down — you&apos;ll need it to log in on another device or browser.
            </p>

            <div className="bg-indigo-50 rounded-xl p-6 space-y-3">
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">
                Login Code
              </p>
              <p className="text-3xl font-mono font-bold text-indigo-700 tracking-wider">
                {result.loginCode}
              </p>
              <p className="text-sm text-slate-500">PIN: {result.pin}</p>
            </div>

            <div className="text-xs text-amber-700 bg-amber-50 p-3 rounded-lg">
              ⚠️ You won&apos;t see this code again. Save it somewhere safe!
            </div>

            <Button className="w-full" onClick={handleConfirm}>
              I&apos;ve saved it — let&apos;s go!
            </Button>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
