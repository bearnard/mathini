import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const informationTechnologyGrade12: Subject = {
  id: 'it',
  title: 'Information Technology',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: "gr12-relational-data-joins-normalisation-t2",
          title: "Relational Data, Joins and Normalisation",
          description: "Relationships, joins, many-to-many linking tables and normalisation principles.",
          component: lazy(() => import('./term2/relational-data-joins-normalisation/RelationalDataJoinsNormalisation')),
        },
        {
          id: "gr12-data-collection-warehousing-mining-t3",
          title: "Data Collection, Data Warehousing and Data Mining",
          description: "RFID, online and invisible collection, warehouses, the steps of mining, and location-based data.",
          component: lazy(() => import('./term3/data-collection-warehousing-mining/DataCollectionWarehousingMining')),
        },
        {
          id: "gr12-caring-for-data-big-data-t1",
          title: "Caring for Data, Big Data and Privacy",
          description: "The value of data and metadata, protecting data, and the social implications of big data, mining and mobile technology.",
          component: lazy(() => import('./term1/caring-for-data-big-data/CaringForDataBigData')),
        },
        {
          id: "gr12-advanced-databases-sql-t2",
          title: "Advanced Databases and SQL",
          description: "Advanced SQL selection, sorting, aggregation, keys and data validation for related datasets.",
          component: lazy(() => import('./term2/advanced-databases-sql/AdvancedDatabasesSql')),
        },
        {
          id: "gr12-forms-reports-database-program-integration-t2",
          title: "Forms, Reports and Database Program Integration",
          description: "Forms, reports, lookup controls, program integration and testing database-driven solutions.",
          component: lazy(() => import('./term2/forms-reports-database-program-integration/FormsReportsDatabaseProgramIntegration')),
        },
        {
          id: "gr12-hardware-mobile-technologies-t1",
          title: "Hardware: Mobile Technologies and Performance",
          description: "Mobile devices, what makes a computer fast, and matching hardware to a purpose.",
          component: lazy(() => import('./term1/hardware-mobile-technologies/HardwareMobileTechnologies')),
        },
        {
          id: "gr12-performance-gpu-caching-t1",
          title: "Performance: GPU, Memory, Cache and Storage",
          description: "What makes a computer fast, and motivating a system for a user.",
          component: lazy(() => import('./term1/performance-gpu-caching/PerformanceGpuCaching')),
        },
        {
          id: "gr12-software-methodologies-design-tools-t1",
          title: "Software Methodologies and Design Tools",
          description: "Waterfall, RAD, incremental and agile; TOE, IPO, CRC and UML; noun-verb analysis and starting the PAT.",
          component: lazy(() => import('./term1/software-methodologies-design-tools/SoftwareMethodologiesDesignTools')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: "gr12-classes-in-delphi-t1",
          title: "Classes in Delphi",
          description: "Class and object, the constructor, accessor, mutator and auxiliary methods, and tracing a class.",
          component: lazy(() => import('./term1/classes-in-delphi/ClassesInDelphi')),
        },
        {
          id: "gr12-two-dimensional-arrays-t2",
          title: "Two-Dimensional Arrays (Delphi)",
          description: "Rows and columns, nested loops, row and column totals, and finding the largest value.",
          component: lazy(() => import('./term2/two-dimensional-arrays/TwoDimensionalArrays')),
        },
        {
          id: "gr12-gui-design-event-driven-programming-t1",
          title: "GUI Design and Event-Driven Programming",
          description: "GUI layout, controls, events, validation and separating interface code from logic.",
          component: lazy(() => import('./term1/gui-design-event-driven-programming/GuiDesignEventDrivenProgramming')),
        },
        {
          id: "gr12-cloud-computing-virtualisation-t2",
          title: "Cloud Computing, SaaS and Virtualisation",
          description: "Effect on hardware, software as a service, virtualisation of servers, and arguments for and against.",
          component: lazy(() => import('./term2/cloud-computing-virtualisation/CloudComputingVirtualisation')),
        },
        {
          id: "gr12-ai-vr-ar-mr-t2",
          title: "AI, VR, AR and MR",
          description: "What artificial intelligence is used for and where it falls short, and virtual, augmented and mixed reality.",
          component: lazy(() => import('./term2/ai-vr-ar-mr/AiVrArMr')),
        },
        {
          id: "gr12-computer-management-t2",
          title: "Computer Management",
          description: "Housekeeping, protecting the system, data integrity, and recommending tasks for a situation.",
          component: lazy(() => import('./term2/computer-management/ComputerManagement')),
        },
        {
          id: "gr12-cyber-security-emerging-technologies-t3",
          title: "Cyber Security and Emerging Technologies",
          description: "Cyber threats, secure practices, AI, IoT, cloud computing and remote-access risk evaluation.",
          component: lazy(() => import('./term3/cyber-security-emerging-technologies/CyberSecurityEmergingTechnologies')),
        },
        {
          id: "gr12-computer-criminals-cybercrime-t2",
          title: "Computer Criminals and Cybercrime",
          description: "Who commits cybercrime, the types and effects, attacks described, and safeguards.",
          component: lazy(() => import('./term2/computer-criminals-cybercrime/ComputerCriminalsCybercrime')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: "gr12-network-parts-internet-access-t3",
          title: "Network Parts and Internet Access",
          description: "Switch, router and modem, ways to connect, sharing files, and remote access with a VPN.",
          component: lazy(() => import('./term3/network-parts-internet-access/NetworkPartsInternetAccess')),
        },
        {
          id: "gr12-networks-security-systems-integration-t2",
          title: "Networks, Security and Systems Integration",
          description: "Protocol stacks, internet structure, network security and integrated digital systems.",
          component: lazy(() => import('./term2/networks-security-systems-integration/NetworksSecuritySystemsIntegration')),
        },
        {
          id: "gr12-e-communication-security-t3",
          title: "E-communication Security",
          description: "Passwords and multi-layer verification, encryption and blockchain, SSL with keys and certificates, and firewalls.",
          component: lazy(() => import('./term3/e-communication-security/ECommunicationSecurity')),
        },
        {
          id: "gr12-web3-semantic-search-t3",
          title: "Web 3.0, Semantic Search and Online Applications",
          description: "Web 1.0, 2.0 and 3.0, the Semantic Web, online applications and storage, and improving searching.",
          component: lazy(() => import('./term3/web3-semantic-search/Web3SemanticSearch')),
        },
        {
          id: "gr12-seo-search-t3",
          title: "Better Searching and SEO",
          description: "Semantic and mediated search, search engine optimisation, and honest and dishonest methods.",
          component: lazy(() => import('./term3/seo-search/SeoSearch')),
        },
        {
          id: "gr12-internet-services-technologies-t3",
          title: "Internet Services Technologies",
          description: "Cookies and databases, scripts and AJAX, PHP and JavaScript, XML, and CSS.",
          component: lazy(() => import('./term3/internet-services-technologies/InternetServicesTechnologies')),
        },
        {
          id: "gr12-social-implications-privacy-ethics-t3",
          title: "Social Implications, Privacy and Ethics",
          description: "Privacy, POPIA, digital ethics, accessibility, the digital divide and environmental impact.",
          component: lazy(() => import('./term3/social-implications-privacy-ethics/SocialImplicationsPrivacyEthics')),
        },
        {
          id: "gr12-algorithmic-refinement-validation-testing-t1",
          title: "Algorithmic Refinement, Validation and Testing",
          description: "Modular problem solving, recursion or advanced logic, validation and systematic testing.",
          component: lazy(() => import('./term1/algorithmic-refinement-validation-testing/AlgorithmicRefinementValidationTesting')),
        },
        {
          id: "gr12-integrated-solution-development-pat-completion-t3",
          title: "Integrated Solution Development and PAT Completion",
          description: "Integrated programming solutions, testing, documentation and PAT completion for Grade 12.",
          component: lazy(() => import('./term3/integrated-solution-development-pat-completion/IntegratedSolutionDevelopmentPatCompletion')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: "gr12-nsc-practical-programming-revision-t4",
          title: "NSC Practical Programming Revision",
          description: "Practical revision for Grade 12 programming, debugging, validation and timed problem solving.",
          component: lazy(() => import('./term4/nsc-practical-programming-revision/NscPracticalProgrammingRevision')),
        },
        {
          id: "gr12-nsc-database-sql-revision-t4",
          title: "NSC Database and SQL Revision",
          description: "Final revision of SQL syntax, joins, grouping, filters and common database exam errors.",
          component: lazy(() => import('./term4/nsc-database-sql-revision/NscDatabaseSqlRevision')),
        },
        {
          id: "gr12-nsc-theory-exam-technique-t4",
          title: "NSC Theory Exam Technique",
          description: "Full-syllabus theory revision, command words, source-based questions and exam strategy.",
          component: lazy(() => import('./term4/nsc-theory-exam-technique/NscTheoryExamTechnique')),
        },
      ],
    },
  ],
};
