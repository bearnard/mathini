import { checkLessons } from './standardCheck';

checkLessons({
  'grade6/english/term1/current-issues-media/CurrentIssuesMedia.tsx': { slides: 5 },
  'grade6/english/term1/fiction-visual-literacy/FictionVisualLiteracy.tsx': { slides: 5 },
  'grade6/english/term1/process-writing-grammar/ProcessWritingGrammar.tsx': { slides: 5, uses: ['FlowDiagram'] },
  'grade6/english/term2/creative-transactional-writing/CreativeTransactionalWriting.tsx': { slides: 5, uses: ['FlowDiagram'] },
  'grade6/english/term2/language-extension/LanguageExtension.tsx': { slides: 5 },
});
