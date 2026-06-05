import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const computerApplicationsTechnologyGrade12: Subject = {
  id: 'computer-applications-technology',
  title: 'Computer Applications Technology',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-systems-technologies-social-implications-t1',
          title: "Systems Technologies and Social Implications",
          description: "Cover system requirements, user-centred design, hardware/software choices, accessibility, environmental issues, and the social implications of technology use.",
          component: lazy(() => import('./term1/systems-technologies-social-implications/SystemsTechnologiesSocialImplications')),
        },
        {
          id: 'gr12-hardware-software-accessibility-t1',
          title: "Hardware, Software and Accessibility",
          description: "Cover input, output and storage devices, operating systems and application software, licensing, accessibility options, and hardware/software suitability for different users.",
          component: lazy(() => import('./term1/hardware-software-accessibility/HardwareSoftwareAccessibility')),
        },
        {
          id: 'gr12-advanced-databases-t1',
          title: "Advanced Databases",
          description: "Cover database fields and records, data types, sorting and filtering, queries, report design, calculated fields, and data quality in Grade 12 practical tasks.",
          component: lazy(() => import('./term1/advanced-databases/AdvancedDatabases')),
        },
        {
          id: 'gr12-spreadsheets-word-processing-pat-planning-t1',
          title: "Spreadsheets, Word Processing and PAT Planning",
          description: "Cover named ranges, lookup functions, nested IF, complex formulas, professional document formatting, file management, and PAT phase 1 planning and information collection.",
          component: lazy(() => import('./term1/spreadsheets-word-processing-pat-planning/SpreadsheetsWordProcessingPATPlanning')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-networks-communication-infrastructure-t2',
          title: "Networks and Communication Infrastructure",
          description: "Cover WANs, network hardware, communication infrastructure, internet access, network completion questions, and the social implications of communication technologies.",
          component: lazy(() => import('./term2/networks-communication-infrastructure/NetworksCommunicationInfrastructure')),
        },
        {
          id: 'gr12-html-web-design-usability-t2',
          title: "HTML, Web Design and Usability",
          description: "Cover HTML structure, tags and attributes, page layout, usability, readability, navigation, communication goals, and web design choices for specific scenarios.",
          component: lazy(() => import('./term2/html-web-design-usability/HtmlWebDesignUsability')),
        },
        {
          id: 'gr12-solution-development-advanced-applications-t2',
          title: "Solution Development in Advanced Applications",
          description: "Cover advanced spreadsheet formulas, database outputs, word-processing refinements, information management, and cross-application solution development for practical tasks.",
          component: lazy(() => import('./term2/solution-development-advanced-applications/SolutionDevelopmentAdvancedApplications')),
        },
        {
          id: 'gr12-pat-phase2-june-exam-preparation-t2',
          title: "PAT Phase 2 and June Exam Preparation",
          description: "Cover PAT phase 2 processing and presentation, spreadsheet/database/document refinements, and preparation for June practical and theory examinations.",
          component: lazy(() => import('./term2/pat-phase2-june-exam-preparation/PATPhase2JuneExamPreparation')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-information-management-pat-completion-t3',
          title: "Information Management and PAT Completion",
          description: "Cover information processing and analysis, source evaluation, presenting findings, and PAT phase 3 completion with appropriate evidence and reflection.",
          component: lazy(() => import('./term3/information-management-pat-completion/InformationManagementPATCompletion')),
        },
        {
          id: 'gr12-system-utilities-security-performance-t3',
          title: "System Utilities, Security and Performance",
          description: "Cover operating-system utilities, backups, antivirus, file management, performance tuning, and safe practical workflows for Grade 12 CAT.",
          component: lazy(() => import('./term3/system-utilities-security-performance/SystemUtilitiesSecurityPerformance')),
        },
        {
          id: 'gr12-digital-communication-emerging-technologies-t3',
          title: "Digital Communication and Emerging Technologies",
          description: "Cover browsers, online communication, AI, VR, AR, social networking, and the opportunities and risks of emerging digital technologies.",
          component: lazy(() => import('./term3/digital-communication-emerging-technologies/DigitalCommunicationEmergingTechnologies')),
        },
        {
          id: 'gr12-advanced-application-integration-t3',
          title: "Advanced Application Integration",
          description: "Cover advanced spreadsheets, databases, HTML and linked documents, with a focus on integrating outputs accurately across applications.",
          component: lazy(() => import('./term3/advanced-application-integration/AdvancedApplicationIntegration')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-integrated-documents-layout-design-t4',
          title: "Integrated Documents, Layout and Design",
          description: "Cover integrated documents with text, graphics and data, templates, layout principles, and design choices for final practical consolidation.",
          component: lazy(() => import('./term4/integrated-documents-layout-design/IntegratedDocumentsLayoutDesign')),
        },
        {
          id: 'gr12-cat-theory-troubleshooting-communication-t4',
          title: "CAT Theory, Troubleshooting and Communication Choices",
          description: "Cover computer uses and troubleshooting, communication choices, case-study analysis, and final NSC theory revision across Grade 12 CAT.",
          component: lazy(() => import('./term4/cat-theory-troubleshooting-communication/CATTheoryTroubleshootingCommunication')),
        },
      ],
    },
  ],
};
