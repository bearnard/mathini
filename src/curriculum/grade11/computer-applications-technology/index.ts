import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const computerApplicationsTechnologyGrade11: Subject = {
  id: 'computer-applications-technology',
  title: 'Computer Applications Technology',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-systems-technologies-accessibility',
          title: 'Systems Technologies and Accessibility',
          description: 'Cover the information processing cycle, hardware choices, accessibility options (screen readers, on-screen keyboard), hardware theft and protection, computer management.',
          component: lazy(() => import('./term1/systems-technologies-accessibility/SystemsTechnologiesAccessibility')),
        },
        {
          id: 'gr11-hardware-storage-management',
          title: 'Hardware and Storage Management',
          description: 'Cover primary vs secondary storage, volatile and non-volatile memory, storage capacity units, cloud storage, removable media, file management, and access control.',
          component: lazy(() => import('./term1/hardware-storage-management/HardwareStorageManagement')),
        },
        {
          id: 'gr11-word-processing-templates-forms',
          title: 'Word Processing: Templates and Forms',
          description: 'Cover document templates, paragraph styles, form fields (text, checkbox, drop-down), mail merge concepts, section breaks, watermarks, track changes, and Find and Replace.',
          component: lazy(() => import('./term1/word-processing-templates-forms/WordProcessingTemplatesForms')),
        },
        {
          id: 'gr11-spreadsheets-databases-fundamentals',
          title: 'Spreadsheets and Databases Fundamentals',
          description: 'Cover absolute vs relative cell references, named ranges, SUM/AVERAGE/IF/COUNT functions, database structure (tables, fields, records), primary keys, queries, and reports.',
          component: lazy(() => import('./term1/spreadsheets-databases-fundamentals/SpreadsheetsDatabasesFundamentals')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-networks-internet-social-implications',
          title: 'Networks, Internet and Social Implications',
          description: 'Cover LAN, WLAN, WAN, wired and wireless connections, network hardware (router, switch, NIC), internet vs WWW, DNS, IoT, BYOD, and digital citizenship.',
          component: lazy(() => import('./term2/networks-internet-social-implications/NetworksInternetSocialImplications')),
        },
        {
          id: 'gr11-websites-iot-security-privacy',
          title: 'Websites, IoT, Security and Privacy',
          description: 'Cover website evaluation, URL structure, HTTPS, phishing, identity theft, social engineering, cookies, cryptocurrency, big data, and POPIA.',
          component: lazy(() => import('./term2/websites-iot-security-privacy/WebsitesIoTSecurityPrivacy')),
        },
        {
          id: 'gr11-spreadsheets-if-logic-databases',
          title: 'Spreadsheets: IF Logic and Databases',
          description: 'Cover nested IF, AND/OR operators, COUNTIF, SUMIF, VLOOKUP, data validation, conditional formatting, and database queries with criteria and wildcard characters.',
          component: lazy(() => import('./term2/spreadsheets-if-logic-databases/SpreadsheetsIfLogicDatabases')),
        },
        {
          id: 'gr11-html-web-design-information-management',
          title: 'HTML, Web Design and Information Management',
          description: 'Cover HTML document structure, common tags, attributes, CSS basics, information quality criteria, and referencing and plagiarism.',
          component: lazy(() => import('./term2/html-web-design-information-management/HtmlWebDesignInformationManagement')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-software-online-services-mobile-internet',
          title: 'Software, Online Services and Mobile Internet',
          description: 'Cover application software categories, cloud service models (SaaS/PaaS/IaaS), mobile internet, responsive web design, website accessibility, and software licensing.',
          component: lazy(() => import('./term3/software-online-services-mobile-internet/SoftwareOnlineServicesMobileInternet')),
        },
        {
          id: 'gr11-fourth-industrial-revolution-information-management',
          title: 'Fourth Industrial Revolution and Information Management',
          description: 'Cover 4IR and 5IR technologies (AI, robotics, IoT, 3D printing, blockchain), employment impact, PAT phases, information management cycle, and search strategies.',
          component: lazy(() => import('./term3/fourth-industrial-revolution-information-management/FourthIndustrialRevolutionInfoManagement')),
        },
        {
          id: 'gr11-database-reports-spreadsheet-integration',
          title: 'Database Reports and Spreadsheet Integration',
          description: 'Cover database report design (grouping, sorting, calculated fields), importing and exporting data, CSV, embedding vs linking, chart types, and print settings.',
          component: lazy(() => import('./term3/database-reports-spreadsheet-integration/DatabaseReportsSpreadsheetIntegration')),
        },
        {
          id: 'gr11-html-mail-merge-design-principles',
          title: 'HTML, Mail Merge and Design Principles',
          description: 'Cover HTML internal and external links, anchor links, tables with colspan/rowspan, mail merge steps, and design principles (alignment, contrast, repetition, proximity).',
          component: lazy(() => import('./term3/html-mail-merge-design-principles/HtmlMailMergeDesignPrinciples')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-email-management-online-risks',
          title: 'Email Management and Online Risks',
          description: 'Cover email folders, rules/filters, CC vs BCC, distribution lists, webmail vs email client, IMAP vs POP3, ransomware, clickjacking, VPN, and safe online practices.',
          component: lazy(() => import('./term4/email-management-online-risks/EmailManagementOnlineRisks')),
        },
        {
          id: 'gr11-ai-ransomware-pat-finalisation',
          title: 'AI, Ransomware and PAT Finalisation',
          description: 'Cover AI applications (chatbots, recommendation systems, facial recognition), deepfakes, generative AI, ransomware recovery, and PAT Phase 3 report requirements.',
          component: lazy(() => import('./term4/ai-ransomware-pat-finalisation/AiRansomwarePatFinalisation')),
        },
        {
          id: 'gr11-application-integration-case-studies',
          title: 'Application Integration and Case Studies',
          description: 'Cover cross-application data flow, linking spreadsheets to Word, database-driven mail merge, social implications (digital divide, e-waste, copyright, cybercrime), and exam command words.',
          component: lazy(() => import('./term4/application-integration-case-studies/ApplicationIntegrationCaseStudies')),
        },
        {
          id: 'gr11-exam-preparation-consolidation',
          title: 'Exam Preparation and Consolidation',
          description: 'Cover theory and practical paper structure, mixed revision across all Grade 11 CAT topics (hardware, networks, spreadsheets, databases, HTML), and exam technique.',
          component: lazy(() => import('./term4/exam-preparation-consolidation/ExamPreparationConsolidation')),
        },
      ],
    },
  ],
};
