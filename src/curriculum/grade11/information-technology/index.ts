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
          id: 'gr11-motherboard-memory-caching-t1',
          title: 'The Motherboard, Memory and Caching',
          description: 'Components of the motherboard, how data flows, and the role of cache and caching.',
          component: lazy(() => import('./term1/motherboard-memory-caching/MotherboardMemoryCaching')),
        },
        {
          id: 'gr11-computer-architecture-t2',
          title: 'Computer Architecture',
          description: 'CPU components, fetch-decode-execute cycle, memory hierarchy and storage devices.',
          component: lazy(() => import('./term2/computer-architecture/ComputerArchitecture')),
        },
        {
          id: 'gr11-system-software-processing-t1',
          title: 'System Software and Processing Techniques',
          description: 'Types of operating system, compilers and interpreters, multi-tasking, virtual memory and virtual machines.',
          component: lazy(() => import('./term1/system-software-processing/SystemSoftwareProcessing')),
        },
        {
          id: 'gr11-network-topologies-t3',
          title: 'Network Topologies',
          description: 'LAN/WAN/MAN, bus/star/ring/mesh topologies and network hardware.',
          component: lazy(() => import('./term3/network-topologies/NetworkTopologies')),
        },
        {
          id: 'gr11-network-innovation-t1',
          title: 'Network Types, Innovation and Location-Based Computing',
          description: 'PAN, HAN, LAN and WAN, VoIP, intranet and extranet, VPN, location-based computing and acceptable use.',
          component: lazy(() => import('./term1/network-innovation/NetworkInnovation')),
        },
        {
          id: 'gr11-computer-management-threats-t1',
          title: 'Computer Management: Threats and Remedies',
          description: 'Human error, physical threats, hardware failure, malware, social engineering and their remedies.',
          component: lazy(() => import('./term1/computer-management-threats/ComputerManagementThreats')),
        },
        {
          id: 'gr11-algorithms-t1',
          title: 'Algorithms',
          description: 'Flowcharts, pseudocode, sequential/selection/iteration structures and search algorithms.',
          component: lazy(() => import('./term1/algorithms/Algorithms')),
        },
        {
          id: 'gr11-sorting-parallel-arrays-dates-t1',
          title: 'Sorting, Parallel Arrays, Dates and Strings',
          description: 'Selection sort and bubble sort, parallel arrays, Delphi date functions and string methods.',
          component: lazy(() => import('./term1/sorting-parallel-arrays-dates/SortingParallelArraysDates')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-file-handling-t1',
          title: 'File Handling',
          description: 'Reading and writing text files, file modes, exception handling and data persistence.',
          component: lazy(() => import('./term1/file-handling/FileHandling')),
        },
        {
          id: 'gr11-user-defined-methods-t2',
          title: 'User-Defined Methods: Procedures and Functions',
          description: 'Why use methods, procedures and functions, arguments and parameters, value parameters, and tracing.',
          component: lazy(() => import('./term2/user-defined-methods/UserDefinedMethods')),
        },
        {
          id: 'gr11-software-engineering-t2',
          title: 'Software Engineering',
          description: 'SDLC phases, development methodologies, system documentation and version control.',
          component: lazy(() => import('./term2/software-engineering/SoftwareEngineering')),
        },
        {
          id: 'gr11-protocols-media-t3',
          title: 'Protocols and Transmission Media',
          description: 'TCP/IP, HTTP, FTP, SMTP, DNS and wired vs wireless transmission media.',
          component: lazy(() => import('./term3/protocols-media/ProtocolsMedia')),
        },
        {
          id: 'gr11-mobile-wireless-e-communication-t2',
          title: 'Mobile and Wireless E-communication',
          description: 'Mobile devices and apps, wireless technologies, connection speed, protocols, blockchain and data security.',
          component: lazy(() => import('./term2/mobile-wireless-e-communication/MobileWirelessECommunication')),
        },
        {
          id: 'gr11-digitalisation-gig-economy-t2',
          title: 'Digitalisation, the Gig Economy and Your Online Identity',
          description: 'Online services, the gig economy, digital careers, effects on work, and protecting your online identity.',
          component: lazy(() => import('./term2/digitalisation-gig-economy/DigitalisationGigEconomy')),
        },
        {
          id: 'gr11-dbms-database-types-t2',
          title: 'Database Management Systems and Database Types',
          description: 'What a DBMS is and does, examples, desktop, server and distributed databases, and database careers.',
          component: lazy(() => import('./term2/dbms-database-types/DbmsDatabaseTypes')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
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
        {
          id: 'gr11-database-design-keys-erd-t3',
          title: 'Database Design: Keys, Relationships and ERDs',
          description: 'Records, fields and tables, kinds of key, relationships and referential integrity, and entity relationship diagrams.',
          component: lazy(() => import('./term3/database-design-keys-erd/DatabaseDesignKeysErd')),
        },
        {
          id: 'gr11-database-access-code-multi-form-t3',
          title: 'Using a Database in Code and Multi-Form Programs',
          description: 'Connecting to a single-table database, navigating and changing a dataset, passing values, and a program with more than one form.',
          component: lazy(() => import('./term3/database-access-code-multi-form/DatabaseAccessCodeMultiForm')),
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
        {
          id: 'gr11-iot-4ir-big-data-t4',
          title: 'The Internet of Things, 4IR and Big Data',
          description: 'What the Internet of Things is, the fourth and fifth industrial revolutions, big data and its four Vs, and the social implications.',
          component: lazy(() => import('./term4/iot-4ir-big-data/IotFourIrBigData')),
        },
        {
          id: 'gr11-streaming-compression-t4',
          title: 'Streaming, Downloading and Compression',
          description: 'Download versus streaming, live broadcasts, lossless and lossy compression, and quality against bandwidth.',
          component: lazy(() => import('./term4/streaming-compression/StreamingCompression')),
        },
        {
          id: 'gr11-internet-services-websites-security-t4',
          title: 'Websites, HTTP and Internet Security Services',
          description: 'Static and dynamic websites, location-based sites, HTTP and HTTPS, multi-factor authentication, OTP and tokens, and Internet careers.',
          component: lazy(() => import('./term4/internet-services-websites-security/InternetServicesWebsitesSecurity')),
        },
      ],
    },
  ],
};
