'use client';

import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';

/** The one-time "write this down" screen after sign-up. Shown again after a reload until the learner presses the button (see pendingCredentials.ts). */
export default function SaveLoginCode({ loginCode, pin, onSaved }: { loginCode: string; pin: string; onSaved: () => void }) {
  return (
    <motion.div key="save-code" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-md mx-auto space-y-6">
      <Card className="p-8 text-center space-y-6">
        <div className="text-5xl">🔑</div>
        <h2 className="text-2xl font-bold text-slate-800">Save your Login Code</h2>
        <p className="text-slate-600">Write this down — you&apos;ll need it to log in on another device or browser.</p>

        <div className="bg-brand-blue/10 rounded-xl p-6 space-y-3">
          <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Login Code</p>
          <p className="text-3xl font-mono font-bold text-brand-blue tracking-wider">{loginCode}</p>
          <p className="text-sm text-slate-500">PIN: {pin}</p>
        </div>

        <div className="text-xs text-amber-700 bg-amber-50 p-3 rounded-lg">
          ⚠️ Your PIN is shown only now. Your login code stays in the app: you can see it again from the home screen after you sign in.
        </div>

        <Button className="w-full" onClick={onSaved}>I&apos;ve saved it — let&apos;s go!</Button>
      </Card>
    </motion.div>
  );
}
