'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useStudent } from '../../lib/client/StudentContext';
import { track } from '../../lib/client/analytics';

export default function ResumeFlow({ onDone }: { onDone: () => void }) {
  const { setStudent } = useStudent();
  const [loginCode, setLoginCode] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginCode: loginCode.toUpperCase(), pin }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? 'Login failed');
      }

      const data = (await res.json()) as { studentId: string; displayName: string; avatar?: string; grade: number; consented?: boolean };
      setStudent({
        id: data.studentId,
        displayName: data.displayName,
        avatar: data.avatar ?? '/avatars/avatar-1.webp',
        grade: data.grade,
        xp: 0,
        xpByScope: {},
        consented: data.consented !== false,
      });
      track('login', { grade: data.grade });
      onDone();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="resume"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="max-w-md mx-auto"
      >
        <Card className="p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800">Welcome back! 👋</h1>
            <p className="text-slate-600 mt-2">Enter your login code and PIN to continue.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Login Code"
              value={loginCode}
              onChange={(e) => setLoginCode(e.target.value.toUpperCase())}
              placeholder="TIGER-4821"
              required
            />
            <Input
              label="PIN"
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="1234"
              maxLength={4}
              required
            />

            {error && <p className="text-red-600 text-sm text-center" role="alert">{error}</p>}

            <Button type="submit" className="w-full" isLoading={loading}>
              Log In
            </Button>
          </form>

          <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700" data-testid="login-help">
            <p className="font-semibold text-slate-800">Forgot your login code or PIN?</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Your PIN: ask a parent or guardian who has linked to you. They can make you a new PIN from their PrepPals page.</li>
              <li>Your login code: it is in the app under &ldquo;My login code&rdquo; on any device where you are still signed in.</li>
              <li>Not sure how? Ask your teacher or a parent to help you.</li>
            </ul>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
