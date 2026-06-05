import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const informationTechnologyGrade11: Subject = {
  id: 'it',
  title: 'Information Technology',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-oop-classes-objects-t1',
          title: 'OOP: Classes and Objects',
          description: 'Defining classes, instantiating objects, UML class diagrams and access modifiers.',
          component: lazy(() => import('./term1/oop-classes-objects/OopClassesObjects')),
        },
        {
          id: 'gr11-oop-methods-constructors-t1',
          title: 'OOP: Methods and Constructors',
          description: 'Writing constructors, getter/setter methods, method parameters and return values.',
          component: lazy(() => import('./term1/oop-methods-constructors/OopMethodsConstructors')),
        },
        {
          id: 'gr11-algorithms-t1',
          title: 'Algorithms',
          description: 'Flowcharts, pseudocode, sequential/selection/iteration structures and search algorithms.',
          component: lazy(() => import('./term1/algorithms/Algorithms')),
        },
        {
          id: 'gr11-file-handling-t1',
          title: 'File Handling',
          description: 'Reading and writing text files, file modes, exception handling and data persistence.',
          component: lazy(() => import('./term1/file-handling/FileHandling')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-computer-architecture-t2',
          title: 'Computer Architecture',
          description: 'CPU components, fetch-decode-execute cycle, memory hierarchy and storage devices.',
          component: lazy(() => import('./term2/computer-architecture/ComputerArchitecture')),
        },
        {
          id: 'gr11-software-engineering-t2',
          title: 'Software Engineering',
          description: 'SDLC phases, development methodologies, system documentation and version control.',
          component: lazy(() => import('./term2/software-engineering/SoftwareEngineering')),
        },
        {
          id: 'gr11-databases-sql-t2',
          title: 'Databases and SQL',
          description: 'Relational databases, primary/foreign keys and foundational SQL queries.',
          component: lazy(() => import('./term2/databases-sql/DatabasesSql')),
        },
        {
          id: 'gr11-sql-integration-t2',
          title: 'SQL Integration',
          description: 'Advanced SQL (JOINs, GROUP BY, aggregate functions) and database integration in programs.',
          component: lazy(() => import('./term2/sql-integration/SqlIntegration')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-network-topologies-t3',
          title: 'Network Topologies',
          description: 'LAN/WAN/MAN, bus/star/ring/mesh topologies and network hardware.',
          component: lazy(() => import('./term3/network-topologies/NetworkTopologies')),
        },
        {
          id: 'gr11-protocols-media-t3',
          title: 'Protocols and Transmission Media',
          description: 'TCP/IP, HTTP, FTP, SMTP, DNS and wired vs wireless transmission media.',
          component: lazy(() => import('./term3/protocols-media/ProtocolsMedia')),
        },
        {
          id: 'gr11-data-processing-t3',
          title: 'Data Processing',
          description: 'Batch, real-time and online processing; data validation and verification techniques.',
          component: lazy(() => import('./term3/data-processing/DataProcessing')),
        },
        {
          id: 'gr11-social-implications-t3',
          title: 'Social Implications',
          description: 'POPIA, cybercrime, digital security, the digital divide and ethical computing.',
          component: lazy(() => import('./term3/social-implications/SocialImplications')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-pat-completion-t4',
          title: 'PAT Completion',
          description: 'Completing the Practical Assessment Task with clean documentation and testing evidence.',
          component: lazy(() => import('./term4/pat-completion/PatCompletion')),
        },
        {
          id: 'gr11-debugging-testing-t4',
          title: 'Debugging and Testing',
          description: 'Syntax, runtime and logic errors; debugging strategies; test plans and trace tables.',
          component: lazy(() => import('./term4/debugging-testing/DebuggingTesting')),
        },
        {
          id: 'gr11-exam-consolidation-t4',
          title: 'Examination Consolidation',
          description: 'Integrated revision across all Grade 11 IT topics for the year-end examinations.',
          component: lazy(() => import('./term4/exam-consolidation/ExamConsolidation')),
        },
      ],
    },
  ],
};
