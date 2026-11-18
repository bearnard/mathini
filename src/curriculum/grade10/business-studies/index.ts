import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const businessStudiesGrade10: Subject = {
  id: 'business-studies',
  title: 'Business Studies',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-business-environments-functions',
          title: 'Business Environments and Functions',
          description: 'Cover micro environment, vision, mission, goals, organisational culture, structure, eight business functions, management and leadership.',
          component: lazy(() => import('./term1/business-environments-functions/BusinessEnvironmentsFunctions')),
        },
        {
          id: 'gr10-quality-external-environments',
          title: 'Quality and External Environments',
          description: 'Cover quality, quality control, quality assurance, market environment, macro environment, opportunities, threats.',
          component: lazy(() => import('./term1/quality-external-environments/QualityExternalEnvironments')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-business-sectors-socio-economic-issues',
          title: 'Business Sectors and Socio-economic Issues',
          description: 'Cover primary, secondary, tertiary sectors, formal/informal, public/private sectors, inequality, poverty, unemployment, HIV/AIDS.',
          component: lazy(() => import('./term2/business-sectors-socio-economic-issues/BusinessSectorsSocioeconomic')),
        },
        {
          id: 'gr10-social-responsibility-forms-ownership',
          title: 'Social Responsibility and Forms of Ownership',
          description: 'Cover social responsibility, CSR, sole proprietor, partnership, non-profit company, profit companies, co-operatives.',
          component: lazy(() => import('./term2/social-responsibility-forms-ownership/SocialResponsibilityOwnership')),
        },
        {
          id: 'gr10-entrepreneurial-qualities-t2',
          title: "Entrepreneurial Qualities",
          description: "What an entrepreneur is, the entrepreneurial qualities and assessing your own.",
          component: lazy(() => import('./term2/entrepreneurial-qualities/EntrepreneurialQualities')),
        },
        {
          id: 'gr10-socio-economic-issues-depth-t2',
          title: "Contemporary Socio-economic Issues in Depth",
          description: "Piracy, counterfeiting, gambling, pyramid schemes, crime, strikes and inclusivity.",
          component: lazy(() => import('./term2/socio-economic-issues-depth/SocioEconomicIssuesDepth')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-creative-thinking-opportunity-analysis',
          title: 'Creative Thinking and Opportunity Analysis',
          description: 'Cover creative thinking, problem-solving cycle, business opportunities, market research.',
          component: lazy(() => import('./term3/creative-thinking-opportunity-analysis/CreativeThinkingOpportunity')),
        },
        {
          id: 'gr10-business-information-planning',
          title: 'Business Information and Planning',
          description: 'Cover presentation methods, business plan structure, viability.',
          component: lazy(() => import('./term3/business-information-planning/BusinessInformationPlanning')),
        },
        {
          id: 'gr10-business-location-t3',
          title: "Business Location Decision",
          description: "Why location matters, location factors and weighing up sites.",
          component: lazy(() => import('./term3/business-location/BusinessLocation')),
        },
        {
          id: 'gr10-contracts-t3',
          title: "Contracts",
          description: "Types of contracts, their parties, rights and responsibilities and hire purchase cost.",
          component: lazy(() => import('./term3/contracts/Contracts')),
        },
        {
          id: 'gr10-swot-research-creative-t3',
          title: "SWOT, Research and Creative Techniques",
          description: "SWOT, research instruments, creative thinking techniques and force-field analysis.",
          component: lazy(() => import('./term3/swot-research-creative/SwotResearchCreative')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr10-relationship-team-performance',
          title: 'Relationship and Team Performance',
          description: 'Cover interpersonal relationships, prejudice, values, diversity, team criteria, collaborative performance, conflict.',
          component: lazy(() => import('./term4/relationship-team-performance/RelationshipTeamPerformance')),
        },
        {
          id: 'gr10-self-management-t4',
          title: "Self-Management",
          description: "Time management and goals, professional image, self-knowledge, confidence and stress.",
          component: lazy(() => import('./term4/self-management/SelfManagement')),
        },
        {
          id: 'gr10-revision-final-paper-preparation',
          title: 'Revision and Final-paper Preparation',
          description: 'Cover all terms 1-4 content, business environments, operations, ventures, roles.',
          component: lazy(() => import('./term4/revision-final-paper-preparation/RevisionFinalPaper')),
        },
      ],
    },
  ],
};
