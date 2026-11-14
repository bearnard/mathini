'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import OnboardingFlow from './OnboardingFlow';
import ResumeFlow from './ResumeFlow';

interface OnboardingGateProps {
  isAnonymous: boolean;
  onDone: () => void;
  initialChoice?: 'register' | 'resume';
}

export default function OnboardingGate({ isAnonymous, onDone, initialChoice }: OnboardingGateProps) {
  const [choice, setChoice] = useState<'register' | 'resume' | null>(initialChoice ?? null);

  if (!isAnonymous || choice) {
    return (
      <AnimatePresence mode="wait">
        {choice === 'register' && <OnboardingFlow key="register" onDone={onDone} />}
        {choice === 'resume' && <ResumeFlow key="resume" onDone={onDone} />}
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-md mx-auto space-y-6"
    >
      <Card className="p-8 text-center space-y-6">
        <div className="text-5xl">👋</div>
        <h1 className="text-3xl font-bold text-slate-800">Is this your first time?</h1>
        <p className="text-slate-600">
          Create an account to save your progress, compete on the leaderboard, and get personalised revision.
        </p>
        <div className="flex flex-col gap-3 pt-2">
          <Button className="w-full" onClick={() => setChoice('register')}>
            Yes — I&apos;m new here
          </Button>
          <Button variant="outline" className="w-full" onClick={() => setChoice('resume')}>
            No — I have a login code
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
