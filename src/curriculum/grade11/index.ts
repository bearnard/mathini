import type { Grade } from '../../types/curriculum';
import { accountingGrade11 } from './accounting';
import { businessStudiesGrade11 } from './business-studies';
import { computerApplicationsTechnologyGrade11 } from './computer-applications-technology';
import { economicsGrade11 } from './economics';
import { englishHLGrade11 } from './english';
import { geographyGrade11 } from './geography';
import { historyGrade11 } from './history';
import { informationTechnologyGrade11 } from './information-technology';
import { isiXhosaGrade11 } from './isixhosa';
import { lifeSciencesGrade11 } from './life-sciences';
import { lifeOrientationGrade11 } from './life-orientation';
import { mathematicalLiteracyGrade11 } from './mathematical-literacy';
import { mathematicsGrade11 } from './mathematics';
import { physicalSciencesGrade11 } from './physical-sciences';

export const grade11: Grade = {
  id: 11,
  title: 'Grade 11',
  subjects: [
    mathematicsGrade11,
    mathematicalLiteracyGrade11,
    accountingGrade11,
    businessStudiesGrade11,
    computerApplicationsTechnologyGrade11,
    economicsGrade11,
    englishHLGrade11,
    geographyGrade11,
    historyGrade11,
    informationTechnologyGrade11,
    isiXhosaGrade11,
    lifeSciencesGrade11,
    lifeOrientationGrade11,
    physicalSciencesGrade11,
  ],
};
