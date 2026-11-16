'use client';

import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { loadRetired } from './lib/client/retired';
import type { Curriculum, Grade, Subject, Term, Topic } from './types/curriculum';
import CurriculumSelector from './components/CurriculumSelector';
import OnboardingGate from './components/onboarding/OnboardingGate';
import ConsentGate from './components/onboarding/ConsentGate';
import LeaderboardView from './components/leaderboard/LeaderboardView';
import TodaysReviewCard from './components/review/TodaysReviewCard';
import MyProgressCard from './components/progress/MyProgressCard';
import { useProgressTeaser } from './components/progress/useProgressTeaser';
import ClassesCard from './components/classes/ClassesCard';
import ParentLinkCard from './components/parents/ParentLinkCard';
import MyLoginCode from './components/onboarding/MyLoginCode';
import SaveLoginCode from './components/onboarding/SaveLoginCode';
import { clearPending, readPending, type PendingCredentials } from './lib/client/pendingCredentials';
import { useReviewPreview } from './components/review/useTodayReview';
import AppHeader from './components/layout/AppHeader';
import TopicHeader from './components/layout/TopicHeader';
import { StudentProvider, useStudent } from './lib/client/StudentContext';
import { track } from './lib/client/analytics';
import { resolveDeepLink } from './lib/client/deepLink';
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

// Kept out of the home path: pulls in the order/label/diagram question components only when opened.
const ReviewScreen = lazy(() => import('./components/review/ReviewScreen'));

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
  const progressTeaser = useProgressTeaser(status === 'active' && view === 'home');
  const reviewQuestions = useReviewPreview(status === 'active' && student?.grade === 6 && view === 'home', view);

  useEffect(() => { void loadRetired(); }, []);

  // "Start review" on the progress page opens /app?start=review: start today's review as soon as it is loaded (once). Nothing due: the learner just stays on the home screen.
  const startReviewDone = useRef(false);
  useEffect(() => {
    if (startReviewDone.current || reviewQuestions === null || view !== 'home') return;
    if (new URLSearchParams(window.location.search).get('start') !== 'review') return;
    startReviewDone.current = true;
    window.history.replaceState(null, '', '/app');
    setView('review');
  }, [reviewQuestions, view]);

  // A new learner who reloads before pressing "I've saved it" still gets to see the login code and PIN (kept in this tab until they confirm).
  const [pending, setPending] = useState<PendingCredentials | null>(null);
  useEffect(() => { if (status === 'active') setPending(readPending()); }, [status]);

  // A "Practise now" link from a public page (/app?grade=6&subject=math&topic=...) opens that topic once, when the learner is in.
  const deepLinkDone = useRef(false);
  useEffect(() => {
    if (status !== 'active' || deepLinkDone.current) return;
    deepLinkDone.current = true;
    const link = resolveDeepLink(curriculumData, new URLSearchParams(window.location.search));
    if (!link) return;
    setSelectedGrade(link.grade);
    setSelectedSubject(link.subject);
    setSelectedTerm(link.term);
    setSelectedTopic(link.topic);
    window.history.replaceState(null, '', '/app');
  }, [status]);

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

  if (pending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/10 via-slate-50 to-slate-50 p-4 pb-safe">
        <SaveLoginCode loginCode={pending.loginCode} pin={pending.pin} onSaved={() => { clearPending(); setPending(null); }} />
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
        <Suspense
          fallback={
            <div className="flex items-center justify-center p-16">
              <Spinner />
            </div>
          }
        >
          <ReviewScreen initialQuestions={reviewQuestions} onBack={() => setView('home')} />
        </Suspense>
      ) : (
        <>
        {!selectedSubject && (
          <div className="mx-auto max-w-5xl px-4 pt-4">
            <MyProgressCard teaser={progressTeaser} />
            {reviewQuestions !== null && <TodaysReviewCard dueCount={reviewQuestions.length} onStart={() => setView('review')} />}
          </div>
        )}
        {status === 'active' && !selectedSubject && (
          <div className="mx-auto max-w-5xl px-4 pt-4">
            <ClassesCard />
            <ParentLinkCard />
            <MyLoginCode />
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
