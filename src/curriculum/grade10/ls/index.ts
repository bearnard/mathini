import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lsGrade10: Subject = {
  id: 'ls',
  title: 'Life Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-chemistry-of-life-enzymes-t1',
          title: 'Chemistry of Life and Enzymes',
          description: 'Biochemistry and cellular processes',
          component: lazy(() => import('./term1/chemistry-of-life-enzymes/ChemistryOfLifeEnzymes')),
        },
        {
          id: 'gr10-cells-transport-t1',
          title: 'Cells and Transport',
          description: 'Cell biology and membrane mechanisms',
          component: lazy(() => import('./term1/cells-transport/CellsTransport')),
        },
        {
          id: 'gr10-mitosis-cancer-t1',
          title: 'Mitosis and Cancer',
          description: 'Cell division and abnormal growth',
          component: lazy(() => import('./term1/mitosis-cancer/MitosisAndCancer')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-plant-tissues-organs-t2',
          title: 'Plant Tissues and Organs',
          description: 'Plant anatomy and physiology',
          component: lazy(() => import('./term2/plant-tissues-organs/PlantTissuesOrgans')),
        },
        {
          id: 'gr10-plants-root-stem-secondary-growth-t2',
          title: "Support and Transport in Plants 1: Dicot Root and Stem",
          description: "Tissues of the dicot root and stem, xylem and phloem cells, secondary growth and annual rings.",
          component: lazy(() => import('./term2/plants-root-stem-secondary-growth/PlantsRootStemSecondaryGrowth')),
        },
        {
          id: 'gr10-plants-water-transpiration-t2',
          title: "Support and Transport in Plants 2: Water Uptake and Transpiration",
          description: "Water and mineral uptake, transpiration and its factors, wilting, guttation and translocation.",
          component: lazy(() => import('./term2/plants-water-transpiration/PlantsWaterTranspiration')),
        },
        {
          id: 'gr10-animal-tissues-support-systems-t2',
          title: 'Animal Tissues and Support Systems',
          description: 'Tissue types and skeletal anatomy',
          component: lazy(() => import('./term2/animal-tissues-support-systems/AnimalTissuesSupportSystems')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-biosphere-ecosystems-t3',
          title: 'Biosphere to Ecosystems',
          description: 'Ecology and environmental systems',
          component: lazy(() => import('./term3/biosphere-ecosystems/BiosphereEcosystems')),
        },
        {
          id: 'gr10-transport-systems-mammals-t2',
          title: 'Transport Systems in Mammals',
          description: 'Circulation, respiration, and excretion',
          component: lazy(() => import('./term2/transport-systems-mammals/TransportSystemsMammals')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr10-diagnostic-features-major-kingdoms-t4',
          title: 'Diagnostic Features of Major Kingdoms',
          description: 'Kingdom characteristics and organization',
          component: lazy(() => import('./term4/diagnostic-features-major-kingdoms/DiagnosticFeaturesMajorKingdoms')),
        },
        {
          id: 'gr10-revision-examination-practice-t4',
          title: 'Revision and Examination Practice',
          description: 'Comprehensive review and assessment preparation',
          component: lazy(() => import('./term4/revision-examination-practice/RevisionExaminationPractice')),
        },
        {
          id: 'gr10-biodiversity-classification-t3',
          title: 'Biodiversity and Classification',
          description: 'Taxonomy and evolutionary diversity',
          component: lazy(() => import('./term3/biodiversity-classification/BiodiversityClassification')),
        },
        {
          id: 'gr10-history-of-life-earth-t3',
          title: 'History of Life on Earth',
          description: 'Evolution and paleontology',
          component: lazy(() => import('./term3/history-of-life-earth/HistoryOfLifeEarth')),
        },
      ],
    },
  ],
};
