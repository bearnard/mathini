import type { Grade } from '../../types/curriculum';
import { afrikaansFALGrade9 } from './afrikaans';
import { creativeArtsGrade9 } from './creative-arts';
import { emsGrade9 } from './economic-management-sciences';
import { englishHLGrade9 } from './english';
import { isiXhosaFALGrade9 } from './isixhosa';
import { mathematicsGrade9 } from './mathematics';
import { naturalSciencesGrade9 } from './natural-sciences';
import { technologyGrade9 } from './technology';

export const grade9: Grade = {
  id: 9,
  title: 'Grade 9',
  subjects: [
    englishHLGrade9,
    afrikaansFALGrade9,
    isiXhosaFALGrade9,
    mathematicsGrade9,
    naturalSciencesGrade9,
    technologyGrade9,
    creativeArtsGrade9,
    emsGrade9,
  ],
};
