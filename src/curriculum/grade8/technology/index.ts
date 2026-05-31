import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const technologyGrade8: Subject = {
  id: 'tech',
  title: 'Technology',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'mechanical-systems-and-motion',
          title: 'Mechanical Systems and Motion',
          description: 'Wedges, wheels and axles, gears, cams, cranks, and mechanical advantage.',
          component: lazy(
            () => import('./term1/mechanical-systems-and-motion/MechanicalSystemsAndMotion'),
          ),
        },
        {
          id: 'structures-and-design-brief',
          title: 'Structures and Design Brief',
          description: 'Structure types, forces, loads, and using IDMEC in design tasks.',
          component: lazy(
            () => import('./term1/structures-and-design-brief/StructuresAndDesignBrief'),
          ),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'electrical-systems-and-circuit-safety',
          title: 'Electrical Systems and Circuit Safety',
          description: 'Series and parallel circuits, components, and safe electrical practices.',
          component: lazy(
            () =>
              import(
                './term2/electrical-systems-and-circuit-safety/ElectricalSystemsAndCircuitSafety'
              ),
          ),
        },
        {
          id: 'logic-and-pat-design-work',
          title: 'Logic and PAT Design Work',
          description: 'AND/OR logic, truth tables, control systems, and panic-button design ideas.',
          component: lazy(() => import('./term2/logic-and-pat-design-work/LogicAndPatDesignWork')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'making-and-evaluating-prototypes',
          title: 'Making and Evaluating Prototypes',
          description: 'Safe tool use, measuring, joining, testing, and improving prototypes.',
          component: lazy(
            () =>
              import(
                './term3/making-and-evaluating-prototypes/MakingAndEvaluatingPrototypes'
              ),
          ),
        },
        {
          id: 'simple-machines-revision',
          title: 'Simple Machines Revision',
          description: 'Levers, inclined planes, wedges, wheel and axle, and force multiplication.',
          component: lazy(() => import('./term3/simple-machines-revision/SimpleMachinesRevision')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'indigenous-technology-and-processing',
          title: 'Indigenous Technology and Processing',
          description: 'Corrosion prevention, food preservation, local knowledge, and sustainability.',
          component: lazy(
            () =>
              import(
                './term4/indigenous-technology-and-processing/IndigenousTechnologyAndProcessing'
              ),
          ),
        },
        {
          id: 'systems-consolidation-and-exam-preparation',
          title: 'Systems Consolidation and Exam Preparation',
          description: 'Integrated mechanical, structural, and electrical revision for exams.',
          component: lazy(
            () =>
              import(
                './term4/systems-consolidation-and-exam-preparation/SystemsConsolidationAndExamPreparation'
              ),
          ),
        },
      ],
    },
  ],
};
