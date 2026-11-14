'use client';

import { Suspense, useState } from 'react';
import type { Curriculum, Grade, Subject, Term, Topic } from './types/curriculum';
import CurriculumSelector from './components/CurriculumSelector';
import OnboardingGate from './components/onboarding/OnboardingGate';
import LeaderboardView from './components/leaderboard/LeaderboardView';
import AppHeader from './components/layout/AppHeader';
import TopicHeader from './components/layout/TopicHeader';
import { StudentProvider, useStudent } from './lib/client/StudentContext';
import { grade5 } from './curriculum/grade5';
import { grade6 } from './curriculum/grade6';
import { grade7 } from './curriculum/grade7';
import { grade8 } from './curriculum/grade8';
import { grade9 } from './curriculum/grade9';
import { grade10 } from './curriculum/grade10';
import { grade11 } from './curriculum/grade11';
import { grade12 } from './curriculum/grade12';

const curriculumData: Curriculum = {
  grades: [grade5, grade6, grade7, grade8, grade9, grade10, grade11, grade12],
};

const Spinner = () => (
  <span className="h-10 w-10 animate-spin rounded-full border-4 border-brand-blue/30 border-t-brand-blue" />
);

const AppBody = ({ initialChoice }: { initialChoice?: 'register' | 'resume' }) => {
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

  const handleNavigate = (level: 'grades' | 'subjects' | 'terms') => {
    if (level === 'grades') {
      setSelectedGrade(null);
      setSelectedSubject(null);
      setSelectedTerm(null);
      setSelectedTopic(null);
    } else if (level === 'subjects') {
      setSelectedSubject(null);
      setSelectedTerm(null);
      setSelectedTopic(null);
    } else if (level === 'terms') {
      setSelectedTerm(null);
      setSelectedTopic(null);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-16">
        <Spinner />
      </div>
    );
  }

  if (status === 'anonymous') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/10 via-slate-50 to-slate-50 p-4 pb-safe">
        <OnboardingGate isAnonymous initialChoice={initialChoice} onDone={() => {}} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-safe font-sans text-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/10 via-slate-50 to-slate-50">
      {!selectedTopic && (
        <AppHeader
          student={student}
          leaderboardActive={view === 'leaderboard'}
          onToggleLeaderboard={() =>
            setView((v) => (v === 'home' ? 'leaderboard' : 'home'))
          }
          onSignOut={signOut}
        />
      )}

      {selectedTopic ? (
        <div>
          <TopicHeader
            gradeTitle={selectedGrade?.title}
            subjectTitle={selectedSubject?.title}
            termTitle={selectedTerm?.title}
            topicTitle={selectedTopic.title}
            onBack={() => setSelectedTopic(null)}
          />

          <Suspense
            fallback={
              <div className="flex items-center justify-center p-16">
                <Spinner />
              </div>
            }
          >
            <selectedTopic.component />
          </Suspense>
        </div>
      ) : view === 'leaderboard' ? (
        <LeaderboardView onBack={() => setView('home')} onRefresh={refreshStudent} />
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
          onNavigate={handleNavigate}
          studentGrade={student?.grade ?? null}
          displayName={student?.displayName}
        />
      )}
    </div>
  );
};

const App = ({ initialChoice }: { initialChoice?: 'register' | 'resume' }) => (
  <StudentProvider>
    <AppBody initialChoice={initialChoice} />
  </StudentProvider>
);

export default App;
