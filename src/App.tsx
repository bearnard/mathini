'use client';

import { Suspense, useState } from 'react';
import type { Curriculum, Grade, Subject, Term, Topic } from './types/curriculum';
import CurriculumSelector from './components/CurriculumSelector';
import OnboardingGate from './components/onboarding/OnboardingGate';
import { StudentProvider, useStudent } from './lib/client/StudentContext';
import { grade5 } from './curriculum/grade5';
import { grade6 } from './curriculum/grade6';
import { grade7 } from './curriculum/grade7';
import { grade8 } from './curriculum/grade8';
import { grade9 } from './curriculum/grade9';
import { grade10 } from './curriculum/grade10';
import { grade11 } from './curriculum/grade11';
import { grade12 } from './curriculum/grade12';
import { ArrowLeft, Trophy } from 'lucide-react';

// --- Curriculum Data Definition ---
const curriculumData: Curriculum = {
  grades: [grade5, grade6, grade7, grade8, grade9, grade10, grade11, grade12],
};

// --- App body (needs to be inside StudentProvider) ---
const AppBody = () => {
  const { student, status, signOut, refreshStudent } = useStudent();
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [view, setView] = useState<'home' | 'leaderboard'>('home');

  const handleBackStep = () => {
    if (selectedTopic) {
      setSelectedTopic(null);
    } else if (selectedTerm) {
      setSelectedTerm(null);
    } else if (selectedSubject) {
      setSelectedSubject(null);
    } else if (selectedGrade) {
      setSelectedGrade(null);
    }
  };

  // Loading state — show spinner while we check session
  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center p-16 min-h-screen">
        <span className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
      </div>
    );
  }

  // Anonymous — show onboarding gate
  if (status === 'anonymous') {
    return (
      <div className="flex justify-center items-center p-4 min-h-screen">
        <OnboardingGate isAnonymous onDone={() => {}} />
      </div>
    );
  }

  // Active student — show app
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-slate-50">
      {/* Header strip — only on home/leaderboard views */}
      {!selectedTopic && (
        <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-2 flex items-center justify-between sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-3">
            {student && (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={student.avatar}
                    alt={student.displayName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium text-slate-700 text-sm">
                    {student.displayName}
                  </span>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    {student.xp} XP
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView((v) => (v === 'home' ? 'leaderboard' : 'home'))}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
              title="Leaderboard"
            >
              <Trophy className="w-5 h-5" />
            </button>
            <button
              onClick={signOut}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors text-xs"
              title="Switch student"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {selectedTopic ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center gap-4 sticky top-0 z-50 shadow-sm">
            <button
              onClick={() => setSelectedTopic(null)}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
              title="Back to Topics"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                {selectedGrade?.title} • {selectedSubject?.title} • {selectedTerm?.title}
              </span>
              <span className="font-bold text-slate-800">{selectedTopic.title}</span>
            </div>
          </div>

          <Suspense fallback={
            <div className="flex justify-center items-center p-16">
              <span className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
            </div>
          }>
            <selectedTopic.component />
          </Suspense>
        </div>
      ) : view === 'leaderboard' ? (
        <LeaderboardView
          onBack={() => setView('home')}
          onRefresh={refreshStudent}
        />
      ) : (
        <CurriculumSelector
          curriculum={curriculumData}
          selectedGrade={selectedGrade}
          selectedSubject={selectedSubject}
          selectedTerm={selectedTerm}
          selectedTopic={selectedTopic}
          onSelectGrade={setSelectedGrade}
          onSelectSubject={setSelectedSubject}
          onSelectTerm={setSelectedTerm}
          onSelectTopic={setSelectedTopic}
          onBackStep={handleBackStep}
        />
      )}
    </div>
  );
};

// --- Leaderboard view (imported) ---
import LeaderboardView from './components/leaderboard/LeaderboardView';

// --- App root ---
const App = () => (
  <StudentProvider>
    <AppBody />
  </StudentProvider>
);

export default App;
