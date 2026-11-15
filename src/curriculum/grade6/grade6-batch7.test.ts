import { checkLessons } from './standardCheck';

checkLessons({
  'grade6/life-skills/term4/creative-arts-t4/CreativeArtsT4.tsx': { slides: 5, uses: ['StableModel'] },
  'grade6/life-skills/term4/personal-social-wellbeing-t4/PersonalSocialWellbeingT4.tsx': { slides: 5 },
  'grade6/life-skills/term4/physical-education-t4/PhysicalEducationT4.tsx': { slides: 5, uses: ['FlowDiagram'] },
});
