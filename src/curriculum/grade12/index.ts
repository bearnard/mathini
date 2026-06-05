import type { Grade } from '../../types/curriculum';
import { accountingGrade12 } from './accounting';
import { businessStudiesGrade12 } from './business-studies';
import { computerApplicationsTechnologyGrade12 } from './computer-applications-technology';
import { economicsGrade12 } from './economics';
import { englishHLGrade12 } from './english';
import { geographyGrade12 } from './geography';
import { historyGrade12 } from './history';
import { informationTechnologyGrade12 } from './information-technology';
import { isiXhosaGrade12 } from './isixhosa';
import { lifeSciencesGrade12 } from './life-sciences';
import { lifeOrientationGrade12 } from './life-orientation';
import { mathematicalLiteracyGrade12 } from './mathematical-literacy';
import { mathematicsGrade12 } from './mathematics';
import { physicalSciencesGrade12 } from './physical-sciences';

export const grade12: Grade = {
  id: 12,
  title: 'Grade 12',
  subjects: [
    mathematicsGrade12,
    mathematicalLiteracyGrade12,
    accountingGrade12,
    businessStudiesGrade12,
    computerApplicationsTechnologyGrade12,
    economicsGrade12,
    englishHLGrade12,
    geographyGrade12,
    historyGrade12,
    informationTechnologyGrade12,
    isiXhosaGrade12,
    lifeSciencesGrade12,
    lifeOrientationGrade12,
    physicalSciencesGrade12,
  ],
};
