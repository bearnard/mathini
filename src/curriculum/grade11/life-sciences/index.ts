import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lifeSciencesGrade11: Subject = {
  id: 'ls',
  title: 'Life Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-microorganisms-disease-t1',
          title: 'Micro-organisms and Disease',
          description: 'Pathogens, immune response, and disease control',
          component: lazy(() => import('./term1/microorganisms-disease/MicroorganismsAndDisease')),
        },
        {
          id: 'gr11-biodiversity-plants-t1',
          title: 'Biodiversity — Plants',
          description: 'Plant diversity from bryophytes to angiosperms',
          component: lazy(() => import('./term1/biodiversity-plants/BiodiversityPlants')),
        },
        {
          id: 'gr11-biodiversity-animals-t1',
          title: 'Biodiversity — Animals',
          description: 'Invertebrate and vertebrate diversity',
          component: lazy(() => import('./term1/biodiversity-animals/BiodiversityAnimals')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-photosynthesis-t2',
          title: 'Photosynthesis',
          description: 'Light reactions, Calvin cycle, and factors affecting photosynthesis',
          component: lazy(() => import('./term2/photosynthesis/Photosynthesis')),
        },
        {
          id: 'gr11-animal-nutrition-t2',
          title: 'Animal Nutrition',
          description: 'Digestion, enzymes, and blood glucose regulation',
          component: lazy(() => import('./term2/animal-nutrition/AnimalNutrition')),
        },
        {
          id: 'gr11-cellular-respiration-t2',
          title: 'Cellular Respiration',
          description: 'Aerobic and anaerobic respiration pathways',
          component: lazy(() => import('./term2/cellular-respiration/CellularRespiration')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-gas-exchange-t3',
          title: 'Gas Exchange',
          description: 'Ventilation, alveolar exchange, and transport of gases in blood',
          component: lazy(() => import('./term3/gas-exchange/GasExchange')),
        },
        {
          id: 'gr11-excretion-humans-t3',
          title: 'Excretion in Humans',
          description: 'Kidney structure, urine formation, and osmoregulation',
          component: lazy(() => import('./term3/excretion-humans/ExcretionHumans')),
        },
        {
          id: 'gr11-population-ecology-t3',
          title: 'Population Ecology',
          description: 'Population dynamics, growth curves, and ecological interactions',
          component: lazy(() => import('./term3/population-ecology/PopulationEcology')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-human-impact-environment-t4',
          title: 'Human Impact on the Environment',
          description: 'Climate change, pollution, biodiversity loss, and sustainability',
          component: lazy(() => import('./term4/human-impact-environment/HumanImpactEnvironment')),
        },
        {
          id: 'gr11-ls-revision-exam-prep-t4',
          title: 'Revision and Examination Practice',
          description: 'Integrating Grade 11 content, drawings, graphs, and exam technique',
          component: lazy(() => import('./term4/revision-exam-prep/RevisionExamPrep')),
        },
      ],
    },
  ],
};
