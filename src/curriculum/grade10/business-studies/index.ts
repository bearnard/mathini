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
          id: 'gr10-revision-final-paper-preparation',
          title: 'Revision and Final-paper Preparation',
          description: 'Cover all terms 1-4 content, business environments, operations, ventures, roles.',
          component: lazy(() => import('./term4/revision-final-paper-preparation/RevisionFinalPaper')),
        },
      ],
    },
  ],
};
