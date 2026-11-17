import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const businessStudiesGrade12: Subject = {
  id: 'business-studies',
  title: 'Business Studies',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-labour-legislation-compliance-t1',
          title: "Labour Legislation and Compliance",
          description: "Apply the Skills Development Act, Employment Equity Act and BBBEE principles to workplace scenarios and compliance decisions.",
          component: lazy(() => import('./term1/labour-legislation-compliance/LabourLegislationCompliance')),
        },
        {
          id: 'gr12-human-resources-processes-t1',
          title: "Human Resources Processes",
          description: "Understand job analysis, recruitment, selection, placement and induction as linked HR processes in Grade 12 Business Studies.",
          component: lazy(() => import('./term1/human-resources-processes/HumanResourcesProcesses')),
        },
        {
          id: 'gr12-salary-determination-professionalism-t1',
          title: "Salary Determination, Ethics and Professionalism",
          description: "Apply salary-determination factors, ethical principles and professional conduct to business scenarios.",
          component: lazy(() => import('./term1/salary-determination-professionalism/SalaryDeterminationProfessionalism')),
        },
        {
          id: 'gr12-creative-thinking-business-strategies-t1',
          title: "Creative Thinking and Business Strategies",
          description: "Use creative-thinking tools, decision-making steps, Porters Five Forces and strategic planning in Grade 12 business scenarios.",
          component: lazy(() => import('./term1/creative-thinking-business-strategies/CreativeThinkingBusinessStrategies')),
        }
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-business-sectors-environments-t2',
          title: "Business Sectors and Environments",
          description: "Analyse how business sectors operate and how micro, market and macro environments place pressure on them.",
          component: lazy(() => import('./term2/business-sectors-environments/BusinessSectorsEnvironments')),
        },
        {
          id: 'gr12-quality-management-systems-t2',
          title: "Quality Management Systems",
          description: "Evaluate quality concepts, quality management systems and quality circles in Business Studies scenarios.",
          component: lazy(() => import('./term2/quality-management-systems/QualityManagementSystems')),
        },
        {
          id: 'gr12-leadership-management-t2',
          title: "Leadership and Management",
          description: "Compare management and leadership, apply leadership styles and interpret leadership theories in CAPS contexts.",
          component: lazy(() => import('./term2/leadership-management/LeadershipManagement')),
        },
        {
          id: 'gr12-human-rights-inclusivity-t3',
          title: "Human Rights and Inclusivity",
          description: "Evaluate human rights, diversity and inclusive business behaviour in Grade 12 contexts.",
          component: lazy(() => import('./term3/human-rights-inclusivity/HumanRightsInclusivity')),
        },
        {
          id: 'gr12-environmental-social-responsibility-t3',
          title: "Environmental and Social Responsibility",
          description: "Recommend responsible responses to environmental issues and distinguish between CSR and CSI.",
          component: lazy(() => import('./term3/environmental-social-responsibility/EnvironmentalSocialResponsibility')),
        }
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-presentation-data-response-ownership-t3',
          title: "Presentation, Data Response and Forms of Ownership",
          description: "Interpret presented business information, answer data-response questions and compare forms of ownership.",
          component: lazy(() => import('./term3/presentation-data-response-ownership/PresentationDataResponseOwnership')),
        },
        {
          id: 'gr12-investment-insurance-conflict-management-t2',
          title: "Investment, Insurance and Conflict Management",
          description: "Advise on investment and insurance options while improving team performance and conflict management.",
          component: lazy(() => import('./term2/investment-insurance-conflict-management/InvestmentInsuranceConflictManagement')),
        }
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-paper1-integrated-revision-t4',
          title: "Paper 1 Integrated Revision",
          description: "Revise strategically for Business Studies Paper 1 using integrated content, past papers and source-based analysis.",
          component: lazy(() => import('./term4/paper1-integrated-revision/Paper1IntegratedRevision')),
        },
        {
          id: 'gr12-paper2-case-studies-essays-t4',
          title: "Paper 2 Case Studies and Essays",
          description: "Prepare for Paper 2 through better case-study reading, evidence-based answers and structured essay writing.",
          component: lazy(() => import('./term4/paper2-case-studies-essays/Paper2CaseStudiesEssays')),
        },
        {
          id: 'gr12-exam-action-verbs-time-management-t4',
          title: "Exam Action Verbs and Time Management",
          description: "Refine exam technique by interpreting action verbs, using mark allocation and managing time effectively.",
          component: lazy(() => import('./term4/exam-action-verbs-time-management/ExamActionVerbsTimeManagement')),
        }
      ],
    },
  ],
};
