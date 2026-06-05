import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const itGrade10: Subject = {
  id: 'it',
  title: 'Information Technology',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-computer-systems-data-representation-algorithm-design-t1',
          title: 'Computer Systems, Data Representation and Algorithm Design',
          description: 'Fundamentals of computing and problem-solving',
          component: lazy(() => import('./term1/computer-systems-data-representation-algorithm-design/ComputerSystemsDataRepresentationAlgorithmDesign')),
        },
        {
          id: 'gr10-programming-foundations-t1',
          title: 'Programming Foundations',
          description: 'Introduction to programming concepts and practice',
          component: lazy(() => import('./term1/programming-foundations/ProgrammingFoundations')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-control-structures-modular-programming-t2',
          title: 'Control Structures and Modular Programming',
          description: 'Flow control and function-based development',
          component: lazy(() => import('./term2/control-structures-modular-programming/ControlStructuresModularProgramming')),
        },
        {
          id: 'gr10-database-introductory-object-concepts-t2',
          title: 'Database and Introductory Object Concepts',
          description: 'Data organization and object-oriented fundamentals',
          component: lazy(() => import('./term2/database-introductory-object-concepts/DatabaseIntroductoryObjectConcepts')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-networks-data-handling-t3',
          title: 'Networks and Data Handling',
          description: 'Network architecture and communication',
          component: lazy(() => import('./term3/networks-data-handling/NetworksDataHandling')),
        },
        {
          id: 'gr10-integrated-solution-development-t3',
          title: 'Integrated Solution Development',
          description: 'Systems design and implementation',
          component: lazy(() => import('./term3/integrated-solution-development/IntegratedSolutionDevelopment')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr10-social-implications-cyber-safety-t4',
          title: 'Social Implications and Cyber Safety',
          description: 'IT ethics, security, and digital citizenship',
          component: lazy(() => import('./term4/social-implications-cyber-safety/SocialImplicationsCyberSafety')),
        },
        {
          id: 'gr10-revision-year-end-examination-preparation-t4',
          title: 'Revision and Year-End Examination Preparation',
          description: 'Comprehensive review for final assessment',
          component: lazy(() => import('./term4/revision-year-end-examination-preparation/RevisionYearEndExaminationPreparation')),
        },
      ],
    },
  ],
};
