import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

// Grade 10 Life Orientation (CAPS FET Life Orientation Grades 10-12, Annual Teaching Plan for Grade 10). Physical Education is practical in CAPS, so each
// term has one theory topic for it, as in Grades 8, 9, 11 and 12. docs/notes/g10-life-orientation-plan.md lists every topic and its CAPS source.
export const lifeOrientationGrade10: Subject = {
  id: 'lo',
  title: 'Life Orientation',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-self-awareness-self-esteem-t1',
          title: 'Self-awareness, Self-esteem and Self-development',
          description: 'Know yourself, build confidence in yourself and others, and respect the uniqueness of people.',
          component: lazy(() => import('./term1/self-awareness-self-esteem/SelfAwarenessSelfEsteem')),
        },
        {
          id: 'gr10-power-gender-t1',
          title: 'Power, Power Relations and Gender',
          description: 'Power and its abuse, gender roles and stereotypes, and how gender inequality affects wellbeing.',
          component: lazy(() => import('./term1/power-gender/PowerGender')),
        },
        {
          id: 'gr10-subjects-career-fields-t1',
          title: 'Subjects, Career Fields and Study Choices',
          description: 'Interests and abilities, career fields and jobs, subject requirements and steps in choosing.',
          component: lazy(() => import('./term1/subjects-career-fields/SubjectsCareerFields')),
        },
        {
          id: 'gr10-diversity-discrimination-t1',
          title: 'Diversity, Discrimination and Human Rights Violations',
          description: 'Prejudice, xenophobia and human trafficking, and how to challenge unfair treatment.',
          component: lazy(() => import('./term1/diversity-discrimination/DiversityDiscrimination')),
        },
        {
          id: 'gr10-bill-of-rights-instruments-t1',
          title: 'The Bill of Rights and International Instruments',
          description: 'The Bill of Rights, the CRC, the African Charter and CEDAW, and the bodies that protect rights.',
          component: lazy(() => import('./term1/bill-of-rights-instruments/BillOfRightsInstruments')),
        },
        {
          id: 'gr10-physical-education-t1',
          title: 'Physical Education: Fitness and Safety',
          description: 'Cardiovascular fitness, strength, endurance and flexibility, exercise and mental health, and safety.',
          component: lazy(() => import('./term1/physical-education/PhysicalEducationTerm1')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-study-skills-methods-t2',
          title: 'Study Skills and Study Methods',
          description: 'Study habits, note-taking, thinking skills, internal and external assessment and your annual study plan.',
          component: lazy(() => import('./term2/study-skills-methods/StudySkillsMethods')),
        },
        {
          id: 'gr10-social-environmental-responsibility-t2',
          title: 'Social and Environmental Responsibility',
          description: 'Social and environmental justice, social issues and health, civic skills and youth service.',
          component: lazy(() => import('./term2/social-environmental-responsibility/SocialEnvironmentalResponsibility')),
        },
        {
          id: 'gr10-physical-education-t2',
          title: 'Physical Education: Games and Safety',
          description: 'Playground, community and indigenous games, movement skills, fair play and safety.',
          component: lazy(() => import('./term2/physical-education/PhysicalEducationTerm2')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-life-roles-t3',
          title: 'Life Roles and Their Responsibilities',
          description: 'Child, student, adult, partner, parent, worker and leader: how roles and responsibilities change.',
          component: lazy(() => import('./term3/life-roles/LifeRoles')),
        },
        {
          id: 'gr10-adolescence-adulthood-t3',
          title: 'From Adolescence to Adulthood',
          description: 'Physical, emotional and social changes, and how to cope with them.',
          component: lazy(() => import('./term3/adolescence-adulthood/AdolescenceAdulthood')),
        },
        {
          id: 'gr10-responsible-decisions-t3',
          title: 'Responsible Decisions about Sexuality and Lifestyle',
          description: 'Risk behaviour, protective values, refusal skills, the law and where to find help.',
          component: lazy(() => import('./term3/responsible-decisions/ResponsibleDecisions')),
        },
        {
          id: 'gr10-diversity-of-jobs-t3',
          title: 'Diversity of Jobs and Career Fields',
          description: 'Economic sectors, work settings, careers in sport and recreation, and transferable skills.',
          component: lazy(() => import('./term3/diversity-of-jobs/DiversityOfJobs')),
        },
        {
          id: 'gr10-physical-education-t3',
          title: 'Physical Education: Recreation and Relaxation',
          description: 'Recreation, relaxation techniques, choosing an activity and staying safe.',
          component: lazy(() => import('./term3/physical-education/PhysicalEducationTerm3')),
        },
      ],
    },
  ],
};
