import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const businessStudiesGrade11: Subject = {
  id: 'business-studies',
  title: 'Business Studies',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-business-environments-influences-t1',
          title: 'Business Environments and Influences',
          description: 'Cover the micro, market and macro environments, PESTLE factors, internal control factors, and how each environment influences South African businesses.',
          component: lazy(() => import('./term1/business-environments-influences/BusinessEnvironmentsInfluences')),
        },
        {
          id: 'gr11-challenges-adapting-change-t1',
          title: 'Challenges and Adapting to Change',
          description: 'Cover socio-economic challenges (unemployment, poverty, inequality, crime, HIV/AIDS), proactive vs reactive responses, and strategies for adapting to change.',
          component: lazy(() => import('./term1/challenges-adapting-change/ChallengesAdaptingChange')),
        },
        {
          id: 'gr11-business-sectors-ownership-t1',
          title: 'Business Sectors and Ownership Forms',
          description: 'Cover primary, secondary and tertiary sectors, benefits of companies versus other ownership forms, public and private companies, and co-operatives.',
          component: lazy(() => import('./term1/business-sectors-ownership/BusinessSectorsOwnership')),
        },
        {
          id: 'gr11-acquiring-a-business-t1',
          title: 'Acquiring a Business',
          description: 'Cover the four acquisition avenues: starting from scratch, buying an existing business, buying a franchise, and family business inheritance.',
          component: lazy(() => import('./term1/acquiring-a-business/AcquiringABusiness')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-creative-thinking-problem-solving-t2',
          title: 'Creative Thinking and Problem Solving',
          description: 'Cover creative thinking techniques (brainstorming, mind mapping, lateral thinking), the problem-solving cycle, and obstacles to creative thinking.',
          component: lazy(() => import('./term2/creative-thinking-problem-solving/CreativeThinkingProblemSolving')),
        },
        {
          id: 'gr11-change-crisis-management-t2',
          title: 'Change and Crisis Management',
          description: 'Cover stress management, Lewin\'s change management model, reasons for resistance to change, and the crisis management response steps.',
          component: lazy(() => import('./term2/change-crisis-management/ChangeCrisisManagement')),
        },
        {
          id: 'gr11-operations-marketing-function-t2',
          title: 'Operations and Marketing Function',
          description: 'Cover the input-process-output production model, the 7 Ps marketing mix, marketing research (primary and secondary), and how operations and marketing are linked.',
          component: lazy(() => import('./term2/operations-marketing-function/OperationsMarketingFunction')),
        },
        {
          id: 'gr11-quality-ethics-professionalism-t2',
          title: 'Quality, Ethics and Professionalism',
          description: 'Cover quality control vs quality assurance, TQM, ISO 9001, ethical and unethical business conduct, the Code of Ethics, and professional behaviour.',
          component: lazy(() => import('./term2/quality-ethics-professionalism/QualityEthicsProfessionalism')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-entrepreneurial-qualities-business-plan-t3',
          title: 'Entrepreneurial Qualities and Business Plan',
          description: 'Cover key entrepreneurial qualities, the purpose and sections of a business plan, viability assessment, and why planning is essential for new ventures.',
          component: lazy(() => import('./term3/entrepreneurial-qualities-business-plan/EntrepreneurialQualitiesBusinessPlan')),
        },
        {
          id: 'gr11-starting-implementing-venture-t3',
          title: 'Starting and Implementing a Venture',
          description: 'Cover the action plan, step-by-step start-up process, common implementation challenges, and how to monitor and adjust a venture.',
          component: lazy(() => import('./term3/starting-implementing-venture/StartingImplementingVenture')),
        },
        {
          id: 'gr11-presenting-business-information-t3',
          title: 'Presenting Business Information',
          description: 'Cover methods of presenting business information including bar graphs, pie charts, line graphs, tables, written reports, oral presentations, and infographics.',
          component: lazy(() => import('./term3/presenting-business-information/PresentingBusinessInformation')),
        },
        {
          id: 'gr11-team-dynamics-conflict-t3',
          title: 'Team Dynamics and Conflict Management',
          description: 'Cover Tuckman\'s five team stages, team roles, sources and types of conflict, and conflict-resolution strategies including negotiation, mediation and arbitration.',
          component: lazy(() => import('./term3/team-dynamics-conflict/TeamDynamicsConflict')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-recruitment-selection-contracts-t4',
          title: 'Recruitment, Selection and Contracts',
          description: 'Cover internal vs external recruitment, the selection process steps, types of employment contracts, and key South African labour legislation.',
          component: lazy(() => import('./term4/recruitment-selection-contracts/RecruitmentSelectionContracts')),
        },
        {
          id: 'gr11-induction-salary-benefits-t4',
          title: 'Induction, Salary and Benefits',
          description: 'Cover the induction process, salary determination methods (job grading, market surveys, BCEA, collective bargaining), and employee benefit packages.',
          component: lazy(() => import('./term4/induction-salary-benefits/InductionSalaryBenefits')),
        },
        {
          id: 'gr11-revision-environments-ventures-t4',
          title: 'Revision: Environments and Ventures',
          description: 'Consolidate business environments, socio-economic challenges, forms of ownership, acquisition methods, and entrepreneurship content for the final examination.',
          component: lazy(() => import('./term4/revision-environments-ventures/RevisionEnvironmentsVentures')),
        },
        {
          id: 'gr11-revision-operations-exam-prep-t4',
          title: 'Revision: Operations and Exam Prep',
          description: 'Consolidate operations, marketing, quality, ethics, teamwork, HR and creative thinking content, with long-response exam strategies and cross-topic practice.',
          component: lazy(() => import('./term4/revision-operations-exam-prep/RevisionOperationsExamPrep')),
        },
      ],
    },
  ],
};
