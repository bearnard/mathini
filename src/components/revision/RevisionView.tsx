'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useStudent } from '../../lib/client/StudentContext';
import PracticeRunner from '../PracticeRunner';

interface RevisionViewProps {
  task: string;
  section: string;
  onBack: () => void;
  bank?: import('../../lib/client/useCapsItems').CapsItem[];
}

/**
 * Guided revision view: serves section-filtered questions from the revision API,
 * then renders the PracticeRunner for the student to work through them.
 */
export default function RevisionView({ task, section, onBack, bank = [] }: RevisionViewProps) {
  const { student } = useStudent();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch section-filtered questions from the revision API
  const [currentQuestions, setCurrentQuestions] = useState<import('../../lib/client/useCapsItems').CapsItem[]>([]);

  // Load revision questions on mount
  if (loading) {
    setLoading(false);
    fetch(`/api/revision?task=${encodeURIComponent(task)}&section=${encodeURIComponent(section)}`)
      .then((r) => r.json())
      .then((data) => {
        const items = (data as { items?: import('../../lib/client/useCapsItems').CapsItem[] }).items;
        if (!items || items.length === 0) {
          setError('No revision questions available for this section yet.');
        } else {
          setCurrentQuestions(items);
        }
      })
      .catch(() => setError('Failed to load revision questions. Please try again.'))
      .finally(() => setLoading(false));
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Revise: {section}
        </h1>
        <p className="text-slate-600">
          Let&apos;s work on the areas you found tricky. Take your time!
        </p>
      </div>

      {error ? (
        <Card className="p-8 text-center space-y-4">
          <div className="text-5xl">📚</div>
          <p className="text-slate-700">{error}</p>
          <Button onClick={onBack}>Go back</Button>
        </Card>
      ) : currentQuestions.length === 0 ? (
        <div className="flex justify-center py-12">
          <span className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
        </div>
      ) : (
        <div className="space-y-6">
          <PracticeRunner
            bank={currentQuestions}
            apiPath="/api/revision"
            task={task}
            onComplete={(weakSections) => {
              if (weakSections.length > 0) {
                // If there are still weak areas, offer to retry with the same section
                // or explore a different weak section
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
