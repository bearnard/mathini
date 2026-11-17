import type { Grade } from '../../types/curriculum';
import { afrikaansFALGrade7 } from './afrikaans';
import { englishHLGrade7 } from './english';
import { geographyGrade7 } from './geography';
import { historyGrade7 } from './history';
import { isiXhosaSALGrade7 } from './isixhosa';
import { lifeOrientationGrade7 } from './life-orientation';
import { creativeArtsGrade7 } from './creative-arts';
import { technologyGrade7 } from './technology';
import { mathematicsGrade7 } from './mathematics';
import { naturalSciencesGrade7 } from './natural-sciences';

export const grade7: Grade = {
  id: 7,
  title: 'Grade 7',
  subjects: [
    englishHLGrade7,
    afrikaansFALGrade7,
    isiXhosaSALGrade7,
    lifeOrientationGrade7,
    creativeArtsGrade7,
    mathematicsGrade7,
    naturalSciencesGrade7,
    technologyGrade7,
    geographyGrade7,
    historyGrade7,
  ],
};
