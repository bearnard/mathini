import React from 'react';
import { ChevronRight, GraduationCap, Calendar, Book, Library, Sparkles } from 'lucide-react';
import { Curriculum, Grade, Subject, Term, Topic } from '../types/curriculum';
import { motion } from 'framer-motion';
import Card from './ui/Card';
import { gradeAccent } from '../lib/brand';
import DrillHeader from './layout/DrillHeader';
import Breadcrumb from './layout/Breadcrumb';
import { cn } from '../lib/utils';

const IconImage: React.FC<{
  src: string;
  className?: string;
  fallback: React.ReactNode;
  overlay?: React.ReactNode;
}> = ({ src, className, fallback, overlay }) => {
  const [failed, setFailed] = React.useState(false);
  if (failed) return <>{fallback}</>;
  return (
    <>
      <img src={src} alt="" className={className} onError={() => setFailed(true)} />
      {overlay}
    </>
  );
};

const PREPPALS_COLORS = ['#f68535', '#3285bc', '#60a763', '#f97665', '#fac446'];

interface CurriculumSelectorProps {
  curriculum: Curriculum;
  selectedGrade: Grade | null;
  selectedSubject: Subject | null;
  selectedTerm: Term | null;
  selectedTopic: Topic | null;
  onSelectGrade: (grade: Grade) => void;
  onSelectSubject: (subject: Subject) => void;
  onSelectTerm: (term: Term) => void;
  onSelectTopic: (topic: Topic) => void;
  onBackStep: () => void;
  onNavigate?: (level: 'grades' | 'subjects' | 'terms') => void;
  studentGrade?: number | null;
  displayName?: string;
}

const CurriculumSelector: React.FC<CurriculumSelectorProps> = ({
  curriculum,
  selectedGrade,
  selectedSubject,
  selectedTerm,
  selectedTopic,
  onSelectGrade,
  onSelectSubject,
  onSelectTerm,
  onSelectTopic,
  onBackStep,
  onNavigate,
  studentGrade,
  displayName,
}) => {
  if (selectedTopic) return null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  const yourGrade =
    studentGrade != null
      ? curriculum.grades.find((g) => g.id === studentGrade) ?? null
      : null;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 md:py-10">
      {!selectedGrade && (
        <div className="mb-8 text-center md:mb-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.7 }}
            className="mb-4 inline-block rounded-3xl bg-white px-4 py-3 shadow-lg md:mb-5 md:px-5"
          >
            <img
              src="/preppals-logo.svg"
              alt="PrepPals"
              className="h-16 w-auto md:h-24"
            />
          </motion.div>
          {displayName && (
            <motion.p
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mb-1 text-lg font-bold text-slate-700 md:text-xl"
            >
              Hi, {displayName}!
            </motion.p>
          )}
          <motion.h1
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-2 text-3xl font-black tracking-tight md:text-5xl"
          >
            {'PrepPals'.split('').map((char, i) => (
              <span key={i} style={{ color: PREPPALS_COLORS[i % PREPPALS_COLORS.length] }}>
                {char}
              </span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="text-base font-medium text-slate-500 md:text-lg"
          >
            Your friendly learning companion
          </motion.p>
        </div>
      )}

      <div className="space-y-6">
        {!selectedGrade && (
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            {yourGrade && (
              <motion.div variants={item} className="space-y-3">
                <div className="flex items-center gap-2 text-brand-orange">
                  <Sparkles className="h-5 w-5" />
                  <h2 className="text-base font-bold md:text-lg">Your grade</h2>
                </div>
                <Card
                  variant="interactive"
                  onClick={() => onSelectGrade(yourGrade)}
                  className={cn(
                    'flex items-center justify-between p-5 md:p-6',
                    gradeAccent(yourGrade.id).border,
                    'border-2',
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl text-white md:h-16 md:w-16',
                        gradeAccent(yourGrade.id).solid,
                      )}
                    >
                      <IconImage
                        src={`/icons/grade-${yourGrade.id}.webp`}
                        className="h-full w-full object-cover"
                        fallback={<span className="text-2xl font-black">{yourGrade.id}</span>}
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-slate-800">{yourGrade.title}</h3>
                      <p className="font-medium text-slate-500">
                        {yourGrade.subjects.length} subjects · Start learning
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 text-brand-orange" />
                </Card>
              </motion.div>
            )}

            <div className="flex items-center justify-center gap-2 text-brand-blue">
              <GraduationCap className="h-5 w-5 md:h-6 md:w-6" />
              <h2 className="text-base font-bold md:text-lg">All grades</h2>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-4">
              {curriculum.grades.map((grade) => {
                const accent = gradeAccent(grade.id);
                const isYours = studentGrade === grade.id;
                return (
                  <motion.div key={grade.id} variants={item}>
                    <Card
                      variant="interactive"
                      onClick={() => onSelectGrade(grade)}
                      className={cn(
                        'flex h-full min-h-[7.5rem] flex-col items-center p-4 text-center md:min-h-[8.5rem] md:p-5',
                        isYours && cn('border-2', accent.border),
                      )}
                    >
                      <div
                        className={cn(
                          'relative mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl text-white md:h-14 md:w-14',
                          accent.solid,
                        )}
                      >
                        <IconImage
                          src={`/icons/grade-${grade.id}.webp`}
                          className="h-full w-full object-cover"
                          fallback={<span className="text-xl font-black">{grade.id}</span>}
                          overlay={
                            <span className="absolute bottom-0 right-0 rounded-tl-md bg-black/50 px-1 py-0.5 text-[10px] font-black leading-none text-white">
                              {grade.id}
                            </span>
                          }
                        />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 md:text-lg">{grade.title}</h3>
                      <p className="mt-1 text-xs font-medium text-slate-500 md:text-sm">
                        {grade.subjects.length} subjects
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {selectedGrade && !selectedSubject && (
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
            <DrillHeader
              onBack={onBackStep}
              title={`${selectedGrade.title} subjects`}
              countLabel={`${selectedGrade.subjects.length}`}
              icon={<Library className="h-5 w-5 shrink-0" />}
            />
            <Breadcrumb
              items={[
                {
                  id: 'grade',
                  label: selectedGrade.title,
                  onClick: () => onNavigate?.('grades'),
                },
              ]}
            />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
              {selectedGrade.subjects.map((subject) => (
                <motion.div key={subject.id} variants={item}>
                  <Card
                    variant="interactive"
                    onClick={() => onSelectSubject(subject)}
                    className="flex min-h-14 items-center justify-between p-4 md:p-5"
                  >
                    <div className="flex min-w-0 items-center gap-3 md:gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-brand-blue/10 text-xl font-bold text-brand-blue">
                        <IconImage
                          src={`/icons/subject-${subject.id}.webp`}
                          className="h-full w-full object-cover"
                          fallback={<>{subject.title.charAt(0)}</>}
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-bold text-slate-800 md:text-lg">
                          {subject.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-500">
                          {subject.terms.length} terms
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-slate-300" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {selectedGrade && selectedSubject && !selectedTerm && (
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
            <DrillHeader
              onBack={onBackStep}
              title={`${selectedSubject.title} terms`}
              countLabel={`${selectedSubject.terms.length}`}
              icon={<Calendar className="h-5 w-5 shrink-0" />}
            />
            <Breadcrumb
              items={[
                {
                  id: 'grade',
                  label: selectedGrade.title,
                  onClick: () => onNavigate?.('grades'),
                },
                {
                  id: 'subject',
                  label: selectedSubject.title,
                  onClick: () => onNavigate?.('subjects'),
                },
              ]}
            />

            <div className="flex gap-2 overflow-x-auto pb-2 md:hidden">
              {selectedSubject.terms.map((term) => (
                <button
                  key={term.id}
                  type="button"
                  onClick={() => onSelectTerm(term)}
                  className="min-h-11 shrink-0 rounded-full border-2 border-slate-200 bg-white px-4 font-bold text-slate-700 transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  {term.title}
                </button>
              ))}
            </div>

            <div className="hidden grid-cols-2 gap-4 md:grid">
              {selectedSubject.terms.map((term) => (
                <motion.div key={term.id} variants={item}>
                  <Card
                    variant="interactive"
                    onClick={() => onSelectTerm(term)}
                    className="flex min-h-14 items-center justify-between p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-xl font-bold text-brand-blue">
                        {term.id}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">{term.title}</h3>
                        <p className="text-sm font-medium text-slate-500">
                          {term.topics.length} topics
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-300" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {selectedGrade && selectedSubject && selectedTerm && !selectedTopic && (
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
            <DrillHeader
              onBack={onBackStep}
              title={`${selectedTerm.title} topics`}
              countLabel={`${selectedTerm.topics.length}`}
              icon={<Book className="h-5 w-5 shrink-0" />}
            />
            <Breadcrumb
              items={[
                {
                  id: 'grade',
                  label: selectedGrade.title,
                  onClick: () => onNavigate?.('grades'),
                },
                {
                  id: 'subject',
                  label: selectedSubject.title,
                  onClick: () => onNavigate?.('subjects'),
                },
                {
                  id: 'term',
                  label: selectedTerm.title,
                  onClick: () => onNavigate?.('terms'),
                },
              ]}
            />
            <div className="grid grid-cols-1 gap-3">
              {selectedTerm.topics.map((topic) => (
                <motion.div key={topic.id} variants={item}>
                  <Card
                    variant="interactive"
                    onClick={() => onSelectTopic(topic)}
                    className="flex min-h-14 items-center justify-between p-4 md:p-5"
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-slate-800 transition-colors group-hover:text-brand-blue md:text-lg">
                        {topic.title}
                      </h3>
                      {topic.description && (
                        <p className="mt-1 line-clamp-2 text-sm font-medium text-slate-500">
                          {topic.description}
                        </p>
                      )}
                    </div>
                    <div className="pl-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors hover:bg-brand-blue/10 hover:text-brand-blue">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CurriculumSelector;
