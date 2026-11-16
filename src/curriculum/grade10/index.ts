import type { Grade } from '../../types/curriculum';
import { accountingGrade10 } from './accounting';
import { businessStudiesGrade10 } from './business-studies';
import { computerApplicationsTechnologyGrade10 } from './computer-applications-technology';
import { economicsGrade10 } from './economics';
import { englishHLGrade10 } from './english';
import { itGrade10 } from './it';
import { lifeOrientationGrade10 } from './life-orientation';
import { mathematicsGrade10 } from './mathematics';
import { lsGrade10 } from './ls';
import { mlGrade10 } from './ml';
import { psGrade10 } from './ps';

export const grade10: Grade = {
  id: 10,
  title: 'Grade 10',
  subjects: [
    accountingGrade10,
    businessStudiesGrade10,
    computerApplicationsTechnologyGrade10,
    economicsGrade10,
    englishHLGrade10,
    itGrade10,
    lifeOrientationGrade10,
    lsGrade10,
    mathematicsGrade10,
    mlGrade10,
    psGrade10,
  ],
};
