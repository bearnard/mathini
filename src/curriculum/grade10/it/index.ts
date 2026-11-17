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
          id: 'gr10-computers-software-ict-systems-t1',
          title: 'Computers, Software and ICT Systems',
          description: "Types of computers, hardware and software, kinds of software licence, data and information, and the information processing cycle.",
          component: lazy(() => import('./term1/computers-software-ict-systems/ComputersSoftwareIctSystems')),
        },
        {
          id: 'gr10-file-management-t1',
          title: 'File Management',
          description: "Files, folders and drives, the file specification, hierarchy, and working with a file manager.",
          component: lazy(() => import('./term1/file-management/FileManagement')),
        },
        {
          id: 'gr10-computer-systems-data-representation-algorithm-design-t1',
          title: 'Computer Systems, Data Representation and Algorithm Design',
          description: 'Fundamentals of computing and problem-solving',
          component: lazy(() => import('./term1/computer-systems-data-representation-algorithm-design/ComputerSystemsDataRepresentationAlgorithmDesign')),
        },
        {
          id: 'gr10-algorithms-ipo-trace-tables-t1',
          title: 'Algorithms, IPO Tables and Trace Tables',
          description: "What an algorithm is, IPO tables and flow charts, trace tables, and simple algorithms.",
          component: lazy(() => import('./term1/algorithms-ipo-trace-tables/AlgorithmsIpoTraceTables')),
        },
        {
          id: 'gr10-licences-digital-divide-t1',
          title: 'Licences, Copyright and the Digital Divide',
          description: "Software licences, creative commons, piracy and copyright, the digital divide, digital citizenship and the digital footprint.",
          component: lazy(() => import('./term1/licences-digital-divide/LicencesDigitalDivide')),
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
          id: 'gr10-hardware-devices-t2',
          title: 'Hardware: Devices, the System Unit and Ports',
          description: "Input, output, storage and combined devices, the system unit, ports, and primary and secondary memory.",
          component: lazy(() => import('./term2/hardware-devices/HardwareDevices')),
        },
        {
          id: 'gr10-operating-systems-utilities-drivers-t2',
          title: 'Operating Systems, Utilities and Device Drivers',
          description: "The role and types of operating system, common examples, utility programs, and device drivers.",
          component: lazy(() => import('./term2/operating-systems-utilities-drivers/OperatingSystemsUtilitiesDrivers')),
        },
        {
          id: 'gr10-networks-overview-t2',
          title: 'Networks: An Overview',
          description: "Why we use networks, their components and media, PAN, HAN, LAN and WAN, and client-server and peer-to-peer.",
          component: lazy(() => import('./term2/networks-overview/NetworksOverview')),
        },
        {
          id: 'gr10-networks-data-handling-t3',
          title: 'Networks and Data Handling',
          description: 'Network architecture and communication',
          component: lazy(() => import('./term3/networks-data-handling/NetworksDataHandling')),
        },
        {
          id: 'gr10-e-communication-email-netiquette-t2',
          title: 'E-communication, E-mail and Netiquette',
          description: "Tools for electronic communication, using e-mail well, netiquette, and the benefits of e-communication.",
          component: lazy(() => import('./term2/e-communication-email-netiquette/ECommunicationEmailNetiquette')),
        },
        {
          id: 'gr10-problem-solving-polya-user-stories-t2',
          title: 'Problem Solving: Polya, User Stories and Noun-Verb Analysis',
          description: "Polya's four steps, user stories, finding objects and behaviour, and acceptance tests.",
          component: lazy(() => import('./term2/problem-solving-polya-user-stories/ProblemSolvingPolyaUserStories')),
        },
        {
          id: 'gr10-ergonomics-green-health-t2',
          title: 'Ergonomics, Green Computing and Health',
          description: "Setting up a healthy workstation, health issues of computer use, and green computing.",
          component: lazy(() => import('./term2/ergonomics-green-health/ErgonomicsGreenHealth')),
        },
        {
          id: 'gr10-control-structures-modular-programming-t2',
          title: 'Control Structures and Modular Programming',
          description: 'Flow control and function-based development',
          component: lazy(() => import('./term2/control-structures-modular-programming/ControlStructuresModularProgramming')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-computer-management-t3',
          title: 'Computer Management: Files, Housekeeping and Security',
          description: "File types and extensions, saving and exporting, housekeeping tasks, security features, and installing software.",
          component: lazy(() => import('./term3/computer-management/ComputerManagement')),
        },
        {
          id: 'gr10-internet-www-t3',
          title: 'The Internet and the World Wide Web',
          description: "What the Internet is, IP addresses and domain names, getting connected, the Web, browsers, and searching.",
          component: lazy(() => import('./term3/internet-www/InternetWww')),
        },
        {
          id: 'gr10-email-internet-threats-popia-t3',
          title: 'E-mail and Internet Threats, Safe Use and POPIA',
          description: "Viruses, hoaxes, fake news, spam, phishing, spoofing and pharming described, safe use, and the purpose of POPIA.",
          component: lazy(() => import('./term3/email-internet-threats-popia/EmailInternetThreatsPopia')),
        },
        {
          id: 'gr10-social-implications-cyber-safety-t4',
          title: 'Social Implications and Cyber Safety',
          description: 'IT ethics, security, and digital citizenship',
          component: lazy(() => import('./term4/social-implications-cyber-safety/SocialImplicationsCyberSafety')),
        },
        {
          id: 'gr10-loops-strings-algorithms-t3',
          title: 'Loops, Strings, Prime Numbers and GCD',
          description: "For, while and repeat loops, string handling from first principles and with Delphi methods, and algorithms for prime numbers, GCD and LCM.",
          component: lazy(() => import('./term3/loops-strings-algorithms/LoopsStringsAlgorithms')),
        },
        {
          id: 'gr10-gui-design-timer-project-t3',
          title: 'GUI Design, the Timer and Planning a Project',
          description: "Human-computer interaction and grouping, panels and tabbed panes, a timer for animation, program persistence, and project requirements.",
          component: lazy(() => import('./term3/gui-design-timer-project/GuiDesignTimerProject')),
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
          id: 'gr10-internet-services-text-files-t4',
          title: 'Internet Services and Text Files',
          description: "Online storage, synchronisation, collaboration, shopping and social media, and saving and loading a text file for the PAT.",
          component: lazy(() => import('./term4/internet-services-text-files/InternetServicesTextFiles')),
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
