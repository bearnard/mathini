import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lifeSkills: Subject = {
  id: 'lsk',
  title: 'Life Skills',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        { id: 'personal-social-wellbeing-t1', title: 'Personal & Social Well-being', description: 'Self-image, strengths, healthy habits and peer pressure.', component: lazy(() => import('./term1/personal-social-wellbeing-t1/PersonalSocialWellbeingT1')) },
        { id: 'physical-education-t1', title: 'Physical Education', description: 'Locomotor movement, balance, coordination and target games.', component: lazy(() => import('./term1/physical-education-t1/PhysicalEducationT1')) },
        { id: 'creative-arts-t1', title: 'Creative Arts', description: 'Line, shape, colour, rhythm, beat and body percussion.', component: lazy(() => import('./term1/creative-arts-t1/CreativeArtsT1')) },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        { id: 'personal-social-wellbeing-t2', title: 'Personal & Social Well-being', description: 'Friendships, conflict resolution, personal safety.', component: lazy(() => import('./term2/personal-social-wellbeing-t2/PersonalSocialWellbeingT2')) },
        { id: 'physical-education-t2', title: 'Physical Education', description: 'Invasion games, agility, teamwork and fair play.', component: lazy(() => import('./term2/physical-education-t2/PhysicalEducationT2')) },
        { id: 'creative-arts-t2', title: 'Creative Arts', description: 'Texture, printmaking, collage, puppetry and performance.', component: lazy(() => import('./term2/creative-arts-t2/CreativeArtsT2')) },
        { id: 'bullying-getting-help-t2', title: 'Bullying: Reasons and Getting Help', description: 'What bullying is, why some children bully, where to find help, and how to stop.', component: lazy(() => import('./term2/bullying-getting-help-t2/BullyingGettingHelpT2')) },
        { id: 'cultural-rites-of-passage-t2', title: 'Cultural Rites of Passage', description: 'Birth and baptism, weddings and death: their meaning and significance.', component: lazy(() => import('./term2/cultural-rites-of-passage-t2/CulturalRitesOfPassageT2')) },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        { id: 'personal-social-wellbeing-t3', title: 'Personal & Social Well-being', description: 'Diversity, rights and responsibilities, substance awareness.', component: lazy(() => import('./term3/personal-social-wellbeing-t3/PersonalSocialWellbeingT3')) },
        { id: 'physical-education-t3', title: 'Physical Education', description: 'Athletics, relays, indigenous games, flexibility.', component: lazy(() => import('./term3/physical-education-t3/PhysicalEducationT3')) },
        { id: 'creative-arts-t3', title: 'Creative Arts', description: 'SA cultural art, mixed media, choral verse and movement.', component: lazy(() => import('./term3/creative-arts-t3/CreativeArtsT3')) },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        { id: 'personal-social-wellbeing-t4', title: 'Personal & Social Well-being', description: 'Puberty, emotions, HIV awareness and career exploration.', component: lazy(() => import('./term4/personal-social-wellbeing-t4/PersonalSocialWellbeingT4')) },
        { id: 'physical-education-t4', title: 'Physical Education', description: 'Team games, fitness circuits and health benefits of exercise.', component: lazy(() => import('./term4/physical-education-t4/PhysicalEducationT4')) },
        { id: 'creative-arts-t4', title: 'Creative Arts', description: '3D construction, dance-drama and final showcase.', component: lazy(() => import('./term4/creative-arts-t4/CreativeArtsT4')) },
      ],
    },
  ],
};
