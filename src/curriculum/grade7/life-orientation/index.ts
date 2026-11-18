import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lifeOrientationGrade7: Subject = {
  id: 'lo',
  title: 'Life Orientation',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr7-personal-social-wellbeing-t1',
          title: 'Personal and Social Well-being',
          description: 'Self-concept, values, puberty, emotions, and responsible choices.',
          component: lazy(() => import('./term1/personal-social-wellbeing/PersonalSocialWellbeingT1')),
        },
        {
          id: 'gr7-reading-studying-memory-t1',
          title: "Reading, Studying and Memory Skills",
          description: "Why reading matters, good study habits and skills to improve your memory.",
          component: lazy(() => import('./term1/reading-studying-memory/ReadingStudyingMemory')),
        },
        {
          id: 'gr7-physical-education-t1',
          title: 'Physical Education',
          description: 'Fitness baselines, movement patterns, coordination, and safe warm-ups.',
          component: lazy(() => import('./term1/physical-education/PhysicalEducationT1')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr7-personal-social-wellbeing-t2',
          title: 'Personal and Social Well-being',
          description: 'Peer influence, empathy, substance abuse prevention, and online safety.',
          component: lazy(() => import('./term2/personal-social-wellbeing/PersonalSocialWellbeingT2')),
        },
        {
          id: 'gr7-dealing-with-abuse-t2',
          title: "Dealing with Abuse",
          description: "What abuse is, risky situations, effects, protecting yourself and where to find help.",
          component: lazy(() => import('./term2/dealing-with-abuse/DealingWithAbuse')),
        },
        {
          id: 'gr7-physical-education-t2',
          title: 'Physical Education',
          description: 'Passing and receiving, stamina, rules, leadership, and fair competition.',
          component: lazy(() => import('./term2/physical-education/PhysicalEducationT2')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr7-personal-social-wellbeing-t3',
          title: 'Personal and Social Well-being',
          description: 'Diversity, rights, stereotypes, career awareness, and social change.',
          component: lazy(() => import('./term3/personal-social-wellbeing/PersonalSocialWellbeingT3')),
        },
        {
          id: 'gr7-environmental-health-t3',
          title: "Environmental Health: Local Problems, Projects and Action Plans",
          description: "Local environmental health problems, planning a project and an action plan.",
          component: lazy(() => import('./term3/environmental-health/EnvironmentalHealth')),
        },
        {
          id: 'gr7-physical-education-t3',
          title: 'Physical Education',
          description: 'Athletics, indigenous games, flexibility, endurance, and teamwork.',
          component: lazy(() => import('./term3/physical-education/PhysicalEducationT3')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr7-personal-social-wellbeing-t4',
          title: 'Personal and Social Well-being',
          description: 'Goals, stress management, healthy routines, and future planning.',
          component: lazy(() => import('./term4/personal-social-wellbeing/PersonalSocialWellbeingT4')),
        },
        {
          id: 'gr7-diet-and-nutrition-t4',
          title: "Diet and Nutrition",
          description: "What the body needs, a balanced diet and healthy eating plan, and food choices.",
          component: lazy(() => import('./term4/diet-and-nutrition/DietAndNutrition')),
        },
        {
          id: 'gr7-common-diseases-tb-diabetes-epilepsy-t4',
          title: "Common Diseases: TB, Diabetes and Epilepsy",
          description: "Causes of common diseases, and TB, diabetes and epilepsy: signs, treatment and living well.",
          component: lazy(() => import('./term4/common-diseases-tb-diabetes-epilepsy/CommonDiseasesTbDiabetesEpilepsy')),
        },
        {
          id: 'gr7-common-diseases-obesity-anorexia-hiv-t4',
          title: "Common Diseases: Obesity, Anorexia and HIV and AIDS",
          description: "Obesity, anorexia, HIV and AIDS, and reliable health information.",
          component: lazy(() => import('./term4/common-diseases-obesity-anorexia-hiv/CommonDiseasesObesityAnorexiaHiv')),
        },
        {
          id: 'gr7-oral-traditions-and-scriptures-t4',
          title: "Oral Traditions and Scriptures of Major Religions",
          description: "The role of oral traditions and the scriptures of major religions, described neutrally.",
          component: lazy(() => import('./term4/oral-traditions-and-scriptures/OralTraditionsAndScriptures')),
        },
        {
          id: 'gr7-physical-education-t4',
          title: 'Physical Education',
          description: 'Fitness plans, strategy, participation review, and recreation.',
          component: lazy(() => import('./term4/physical-education/PhysicalEducationT4')),
        },
      ],
    },
  ],
};
