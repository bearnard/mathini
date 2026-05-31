import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const naturalSciencesGrade9: Subject = {
  id: 'ns',
  title: 'Natural Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr9-cells-tissues-organisation',
          title: 'Cells, Tissues and Levels of Organisation',
          description: 'Cell structure, organelles, tissues, organs, and systems. Compare plant and animal cells.',
          component: lazy(() => import('./term1/cells-tissues-organisation/CellsTissuesOrganisation')),
        },
        {
          id: 'gr9-human-body-systems-health',
          title: 'Human Body Systems and Health',
          description: 'Digestive, respiratory, circulatory, excretory, and reproductive systems. Homeostasis and healthy choices.',
          component: lazy(() => import('./term1/human-body-systems-health/HumanBodySystemsHealth')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr9-atoms-elements-compounds',
          title: 'Atoms, Elements and Compounds',
          description: 'Atomic structure, elements, compounds, mixtures, periodic table, and chemical symbols.',
          component: lazy(() => import('./term2/atoms-elements-compounds/AtomsElementsCompounds')),
        },
        {
          id: 'gr9-chemical-reactions-acids-bases',
          title: 'Chemical Reactions, Acids, Bases and Salts',
          description: 'Chemical reactions, pH, acids, bases, neutralisation, and conservation of mass.',
          component: lazy(() => import('./term2/chemical-reactions-acids-bases/ChemicalReactionsAcidsBases')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr9-electricity-electric-cells',
          title: 'Electricity and Electric Cells',
          description: 'Electric current, circuits, series vs parallel, voltage, and resistance.',
          component: lazy(() => import('./term3/electricity-electric-cells/ElectricityElectricCells')),
        },
        {
          id: 'gr9-heat-energy-transfer',
          title: 'Heat and Energy Transfer',
          description: 'Conduction, convection, radiation, insulation, exothermic and endothermic reactions.',
          component: lazy(() => import('./term3/heat-energy-transfer/HeatEnergyTransfer')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr9-lithosphere-earth-resources',
          title: 'Lithosphere and Earth Resources',
          description: 'Rocks, minerals, plate tectonics, mining, fossil fuels, and renewable resources.',
          component: lazy(() => import('./term4/lithosphere-earth-resources/LithosphereEarthResources')),
        },
        {
          id: 'gr9-stars-universe',
          title: 'Stars and the Universe',
          description: 'Stars, star life cycles, galaxies, the Milky Way, and cosmic scale.',
          component: lazy(() => import('./term4/stars-universe/StarsUniverse')),
        },
      ],
    },
  ],
};
