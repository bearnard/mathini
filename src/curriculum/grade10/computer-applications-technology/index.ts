import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const computerApplicationsTechnologyGrade10: Subject = {
  id: 'computer-applications-technology',
  title: 'Computer Applications Technology',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-computer-systems-file-management',
          title: 'Computer Systems and File Management',
          description: 'Cover types of computers, data and information, desktop GUI, access control, drives, folders, files, naming conventions, hardware and software.',
          component: lazy(() => import('./term1/computer-systems-file-management/ComputerSystemsFileManagement')),
        },
        {
          id: 'gr10-word-processing-fundamentals',
          title: 'Word Processing Fundamentals',
          description: 'Cover workspace, document structure, text entry, editing, formatting, paragraph/page layout, proofing, illustrations.',
          component: lazy(() => import('./term1/word-processing-fundamentals/WordProcessingFundamentals')),
        },
        {
          id: 'gr10-ergonomics-green-computing-t1',
          title: 'Ergonomics and Green Computing',
          description: "A healthy workstation, health issues from computer use, and green computing practices.",
          component: lazy(() => import('./term1/ergonomics-green-computing/ErgonomicsGreenComputing')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-systems-networks-digital-responsibility',
          title: 'Systems, Networks and Digital Responsibility',
          description: 'Cover extended hardware, software categories, device management, networks, network aims, copyright, licensing, ethical use.',
          component: lazy(() => import('./term2/systems-networks-digital-responsibility/SystemsNetworksDigitalResponsibility')),
        },
        {
          id: 'gr10-word-processing-spreadsheets-information-management',
          title: 'Word Processing, Spreadsheets and Information Management',
          description: 'Cover advanced word processing, tables, headers/footers, spreadsheets, cell references, formulae, ranges, data vs information.',
          component: lazy(() => import('./term2/word-processing-spreadsheets-information-management/WordProcessingSpreadsheets')),
        },
        {
          id: 'gr10-wearables-rfid-qr-nfc-gps-t2',
          title: 'Wearables, Codes, NFC, GPS and Communication Channels',
          description: "Wearable devices, RFID, magnetic strips, bar codes and QR codes, NFC, GPS, and the channels devices use to communicate.",
          component: lazy(() => import('./term2/wearables-rfid-qr-nfc-gps/WearablesRfidQrNfcGps')),
        },
        {
          id: 'gr10-licences-creative-commons-t2',
          title: 'Software Licences and Creative Commons',
          description: "End-user and site licences, copyright, and how creative commons lets creators share their work.",
          component: lazy(() => import('./term2/licences-creative-commons/LicencesCreativeCommons')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-internet-communication-networks',
          title: 'Internet, Communication and Networks',
          description: 'Cover internet and WWW, browsers, search engines, e-mail, attachments, netiquette, POPI, communication devices, digital citizenship.',
          component: lazy(() => import('./term3/internet-communication-networks/InternetCommunicationNetworks')),
        },
        {
          id: 'gr10-application-development-web-basics',
          title: 'Application Development and Web Basics',
          description: 'Cover spreadsheets, word processing, presentations, HTML syntax, basic tags, web design, PAT phase 1.',
          component: lazy(() => import('./term3/application-development-web-basics/ApplicationDevelopmentWebBasics')),
        },
        {
          id: 'gr10-digital-citizenship-netiquette-blogs-t3',
          title: 'Digital Citizenship, Netiquette, Blogs and Web Applications',
          description: "Being a responsible digital citizen, your digital footprint, netiquette for e-mail and social media, and blogs, wikis and web applications.",
          component: lazy(() => import('./term3/digital-citizenship-netiquette-blogs/DigitalCitizenshipNetiquetteBlogs')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr10-spreadsheets-information-management-pat-completion',
          title: 'Spreadsheets, Information Management and PAT Completion',
          description: 'Cover charts and graphs, data interpretation, report writing, summarising information, plagiarism, references, PAT phase 2.',
          component: lazy(() => import('./term4/spreadsheets-information-management-pat-completion/SpreadsheetsInformationManagementPAT')),
        },
        {
          id: 'gr10-document-integration-exam-consolidation',
          title: 'Document Integration and Exam Consolidation',
          description: 'Cover documents, word processing integration, social implications, troubleshooting, case studies.',
          component: lazy(() => import('./term4/document-integration-exam-consolidation/DocumentIntegrationExamConsolidation')),
        },
      ],
    },
  ],
};
