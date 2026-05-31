import type { Grade } from '../../types/curriculum';
import { afrikaansFALGrade8 } from './afrikaans';
import { creativeArtsGrade8 } from './creative-arts';
import { emsGrade8 } from './economic-management-sciences';
import { englishHLGrade8 } from './english';
import { geographyGrade8 } from './geography';
import { historyGrade8 } from './history';
import { isiXhosaFALGrade8 } from './isixhosa';
import { lifeOrientationGrade8 } from './life-orientation';
import { mathematicsGrade8 } from './mathematics';
import { naturalSciencesGrade8 } from './natural-sciences';
import { technologyGrade8 } from './technology';

export const grade8: Grade = {
  id: 8,
  title: 'Grade 8',
  subjects: [
    englishHLGrade8,
    afrikaansFALGrade8,
    isiXhosaFALGrade8,
    mathematicsGrade8,
    naturalSciencesGrade8,
    technologyGrade8,
    creativeArtsGrade8,
    geographyGrade8,
    historyGrade8,
    lifeOrientationGrade8,
    emsGrade8,
  ],
};
