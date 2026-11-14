'use client';

import { Suspense, useEffect, useState } from 'react';
import type { Curriculum, Grade, Subject, Term, Topic } from './types/curriculum';
import CurriculumSelector from './components/CurriculumSelector';
import OnboardingGate from './components/onboarding/OnboardingGate';
import ConsentGate from './components/onboarding/ConsentGate';
import LeaderboardView from './components/leaderboard/LeaderboardView';
import TodaysReviewCard from './components/review/TodaysReviewCard';
import ReviewScreen from './components/review/ReviewScreen';
import { useReviewPreview } from './components/review/useTodayReview';
import AppHeader from './components/layout/AppHeader';
import TopicHeader from './components/layout/TopicHeader';
import { StudentProvider, useStudent } from './lib/client/StudentContext';
import { track } from './lib/client/analytics';
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
  const [view, setView] = useState<'home' | 'leaderboard' | 'review'>('home');
  // Spaced review (Grade 6 learners only): shown on the grade and subject lists, hidden when nothing is due.
  const reviewQuestions = useReviewPreview(status === 'active' && student?.grade === 6 && view === 'home', view);

  useEffect(() => {
    if (selectedTopic) track('topic_open', { grade: selectedGrade?.id, subject: selectedSubject?.id, topic: selectedTopic.id });
  }, [selectedTopic]); // eslint-disable-line react-hooks/exhaustive-deps

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
      <ConsentGate />
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
      ) : view === 'review' ? (
        <ReviewScreen initialQuestions={reviewQuestions} onBack={() => setView('home')} />
      ) : (
        <>
        {reviewQuestions !== null && !selectedSubject && (
          <div className="mx-auto max-w-5xl px-4 pt-4">
            <TodaysReviewCard dueCount={reviewQuestions.length} onStart={() => setView('review')} />
          </div>
        )}
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
        </>
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
