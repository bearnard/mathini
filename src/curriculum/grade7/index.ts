import type { Grade } from '../../types/curriculum';
import { afrikaansFALGrade7 } from './afrikaans';
import { englishHLGrade7 } from './english';
import { geographyGrade7 } from './geography';
import { historyGrade7 } from './history';
import { isiXhosaSALGrade7 } from './isixhosa';
import { lifeSkillsGrade7 } from './life-skills';
import { mathematicsGrade7 } from './mathematics';
import { naturalSciencesTechnologyGrade7 } from './natural-sciences-technology';

export const grade7: Grade = {
  id: 7,
  title: 'Grade 7',
  subjects: [
    englishHLGrade7,
    afrikaansFALGrade7,
    isiXhosaSALGrade7,
    lifeSkillsGrade7,
    mathematicsGrade7,
    naturalSciencesTechnologyGrade7,
    geographyGrade7,
    historyGrade7,
  ],
};
