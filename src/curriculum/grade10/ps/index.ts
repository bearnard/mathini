import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const psGrade10: Subject = {
  id: 'ps',
  title: 'Physical Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-waves-sound-light-t1',
          title: 'Waves, Sound and Light',
          description: 'Wave phenomena and optical principles',
          component: lazy(() => import('./term1/waves-sound-light/WavesSoundLight')),
        },
        {
          id: 'gr10-electrostatics-electric-circuits-t1',
          title: 'Electrostatics and Electric Circuits',
          description: 'Electric forces and current flow',
          component: lazy(() => import('./term1/electrostatics-electric-circuits/ElectrostaticsElectricCircuits')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-matter-states-phase-change-t2',
          title: 'Matter, States and Phase Change',
          description: 'Properties and transformations of matter',
          component: lazy(() => import('./term2/matter-states-phase-change/MatterStatesPhasEChange')),
        },
        {
          id: 'gr10-atoms-periodic-table-bonding-t2',
          title: 'Atoms, Periodic Table and Bonding',
          description: 'Atomic structure and chemical bonds',
          component: lazy(() => import('./term2/atoms-periodic-table-bonding/AtomsPeriodicTableBonding')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-chemical-change-stoichiometry-t3',
          title: 'Chemical Change and Stoichiometry',
          description: 'Reactions and quantitative analysis',
          component: lazy(() => import('./term3/chemical-change-stoichiometry/ChemicalChangeStoichiometry')),
        },
        {
          id: 'gr10-vectors-motion-mechanical-energy-t3',
          title: 'Vectors, Motion and Mechanical Energy',
          description: 'Kinematics and energy analysis',
          component: lazy(() => import('./term3/vectors-motion-mechanical-energy/VectorsMotionMechanicalEnergy')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr10-conservation-mechanical-energy-t4',
          title: 'Conservation of Mechanical Energy',
          description: 'Energy conservation and transformation',
          component: lazy(() => import('./term4/conservation-mechanical-energy/ConservationMechanicalEnergy')),
        },
        {
          id: 'gr10-ps-revision-examination-practice-t4',
          title: 'Revision and Examination Practice',
          description: 'Comprehensive physics review and assessment',
          component: lazy(() => import('./term4/revision-examination-practice/RevisionExaminationPractice')),
        },
      ],
    },
  ],
};
