import { checkLessons } from './standardCheck';

checkLessons({
  'grade6/english/term3/extended-writing-speaking/ExtendedWritingSpeaking.tsx': { slides: 5 },
  'grade6/english/term4/exam-writing-practice/ExamWritingPractice.tsx': { slides: 5, uses: ['writingTimePlan('] },
  'grade6/english/term4/integrated-revision/IntegratedRevision.tsx': { slides: 5 },
  'grade6/english/term4/language-consolidation/LanguageConsolidation.tsx': { slides: 5, uses: ['WordRoles', 'TenseTimeline', 'TenseCheck', 'SpeechChange'] },
});
