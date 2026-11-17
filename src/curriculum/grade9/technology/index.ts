import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const technologyGrade9: Subject = {
  id: 'tech',
  title: 'Technology',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'graphic-orthographic-drawing',
          title: 'Graphic Communication and Orthographic Drawing',
          description: 'First-angle projection, front/top/side views, scale, line types, dimension awareness.',
          component: lazy(() => import('./term1/graphic-orthographic-drawing/GraphicOrthographicDrawing')),
        },
        {
          id: 'structures-accessible-design',
          title: 'Structures and Accessible Design',
          description: 'Static and dynamic forces, bending, torsion, material properties, stairs, wheelchair ramp, IDMEC.',
          component: lazy(() => import('./term1/structures-accessible-design/StructuresAccessibleDesign')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'hydraulics-pneumatics',
          title: 'Hydraulics, Pneumatics and Pascal\'s Principle',
          description: 'Fluid pressure, syringes, pneumatic systems, hydraulic systems, force multiplication, Pascal\'s principle.',
          component: lazy(() => import('./term2/hydraulics-pneumatics/HydraulicsPneumatics')),
        },
        {
          id: 'gears-pulleys',
          title: 'Gears and Pulleys',
          description: 'Fixed and movable pulleys, block and tackle, spur gears, bevel gears, worm gears, rack and pinion.',
          component: lazy(() => import('./term2/gears-pulleys/GearsPulleys')),
        },
        {
          id: 'mechanical-control-systems',
          title: 'Mechanical Control Systems',
          description: 'Ratchet and pawl, disc brake, bicycle brake and cleat.',
          component: lazy(() => import('./term2/mechanical-control-systems/MechanicalControlSystems')),
        },
        {
          id: 'single-vanishing-point',
          title: 'Single Vanishing Point Perspective',
          description: 'Eye level and the vanishing point, a shaded wooden block, and the inside of a classroom.',
          component: lazy(() => import('./term2/single-vanishing-point/SingleVanishingPoint')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'electrical-circuits',
          title: 'Electrical Circuits and Ohm\'s Law',
          description: 'Current, voltage, resistance, series and parallel circuits, V=IR, resistor colour codes.',
          component: lazy(() => import('./term3/electrical-circuits/ElectricalCircuits')),
        },
        {
          id: 'electronic-control',
          title: 'Electronic Control and PAT 2',
          description: 'Diodes, LEDs, LDRs, thermistors, transistors, AND/OR logic, control devices.',
          component: lazy(() => import('./term3/electronic-control/ElectronicControl')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'processing-materials',
          title: 'Processing of Metals, Food and Plastics',
          description: 'Corrosion prevention, galvanising, electroplating, food preservation, plastics, recycling, processing choices.',
          component: lazy(() => import('./term4/processing-materials/ProcessingMaterials')),
        },
        {
          id: 'technology-society',
          title: 'Technology in Society and Exam Consolidation',
          description: 'Systems integration, sustainability, safety, communication of designs, PAT review, exam-style responses.',
          component: lazy(() => import('./term4/technology-society/TechnologySociety')),
        },
      ],
    },
  ],
};
