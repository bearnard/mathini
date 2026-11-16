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
  ],
};
