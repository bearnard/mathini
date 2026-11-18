import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const technologyGrade8: Subject = {
  id: 'tech',
  title: 'Technology',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'mechanical-systems-and-motion',
          title: 'Mechanical Systems and Motion',
          description: 'Wedges, wheels and axles, gears, cams, cranks, and mechanical advantage.',
          component: lazy(
            () => import('./term1/mechanical-systems-and-motion/MechanicalSystemsAndMotion'),
          ),
        },
        {
          id: 'structures-and-design-brief',
          title: 'Structures and Design Brief',
          description: 'Structure types, forces, loads, and using IDMEC in design tasks.',
          component: lazy(
            () => import('./term1/structures-and-design-brief/StructuresAndDesignBrief'),
          ),
        },
        {
          id: 'graphic-communication',
          title: 'Graphic Communication',
          description: 'Line types, scale and dimensions, single-view and isometric drawings, and perspective.',
          component: lazy(() => import('./term1/graphic-communication/GraphicCommunication')),
        },
        {
          id: 'frame-structures-failure',
          title: 'Frame Structures and Structural Failure',
          description: 'Roof trusses, forces in members, triangulation, spanning structures and how structures fail.',
          component: lazy(() => import('./term1/frame-structures-failure/FrameStructuresFailure')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'impact-and-packaging',
          title: 'Impact of Technology and Packaging',
          description: 'Positive and negative impact, plastic bags, recycling paper and designing packaging from a net.',
          component: lazy(() => import('./term2/impact-and-packaging/ImpactAndPackaging')),
        },
        {
          id: 'forces-on-materials',
          title: 'Forces on Materials and Reinforcing',
          description: 'Tension, compression, bending, torsion and shear, reinforcing concrete, plywood and metal sections.',
          component: lazy(() => import('./term2/forces-on-materials/ForcesOnMaterials')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'making-and-evaluating-prototypes',
          title: 'Making and Evaluating Prototypes',
          description: 'Safe tool use, measuring, joining, testing, and improving prototypes.',
          component: lazy(
            () =>
              import(
                './term3/making-and-evaluating-prototypes/MakingAndEvaluatingPrototypes'
              ),
          ),
        },
        {
          id: 'simple-machines-revision',
          title: 'Simple Machines Revision',
          description: 'Levers, inclined planes, wedges, wheel and axle, and force multiplication.',
          component: lazy(() => import('./term3/simple-machines-revision/SimpleMachinesRevision')),
        },
        {
          id: 'gear-systems-mechanical-advantage',
          title: 'Gear Systems and Mechanical Advantage',
          description: 'Counter-rotation, idler and bevel gears, velocity ratio and mechanical advantage calculated from teeth.',
          component: lazy(() => import('./term3/gear-systems-mechanical-advantage/GearSystemsMechanicalAdvantage')),
        },
        {
          id: 'bicycle-gears-systems-diagrams',
          title: 'Bicycle Gears and Systems Diagrams',
          description: 'Chain wheel and cogs, high and low gears, and input-process-output systems diagrams.',
          component: lazy(() => import('./term3/bicycle-gears-systems-diagrams/BicycleGearsSystemsDiagrams')),
        },
        {
          id: 'mining-technology-impact-bias',
          title: 'Mining Technology, Impact and Bias',
          description: 'Mining in South Africa, acid mine drainage, dust pollution, Iron Age technology and gender bias.',
          component: lazy(() => import('./term3/mining-technology-impact-bias/MiningTechnologyImpactBias')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'electrical-systems-and-circuit-safety',
          title: 'Electrical Systems and Circuit Safety',
          description: 'Series and parallel circuits, components, and safe electrical practices.',
          component: lazy(
            () =>
              import(
                './term2/electrical-systems-and-circuit-safety/ElectricalSystemsAndCircuitSafety'
              ),
          ),
        },
        {
          id: 'logic-and-pat-design-work',
          title: 'Logic and PAT Design Work',
          description: 'AND/OR logic, truth tables, control systems, and panic-button design ideas.',
          component: lazy(() => import('./term2/logic-and-pat-design-work/LogicAndPatDesignWork')),
        },
        {
          id: 'cells-batteries-solar',
          title: 'Electrochemical and Solar Cells',
          description: 'Cells and batteries, series and parallel cells, and solar cells with their advantages and disadvantages.',
          component: lazy(() => import('./term4/cells-batteries-solar/CellsBatteriesSolar')),
        },
        {
          id: 'electricity-generation-grid',
          title: 'Generating Electricity and the National Grid',
          description: 'Thermal, hydroelectric and wind power stations, AC, transformers, the national grid and fair sharing of energy.',
          component: lazy(() => import('./term4/electricity-generation-grid/ElectricityGenerationGrid')),
        },
        {
          id: 'resistors-ohm-logic',
          title: "Resistors, Ohm's Law and Logic Gates",
          description: "Circuit components and symbols, resistors, a qualitative Ohm's law, and AND and OR logic gates with truth tables.",
          component: lazy(() => import('./term4/resistors-ohm-logic/ResistorsOhmLogic')),
        },
        {
          id: 'systems-consolidation-and-exam-preparation',
          title: 'Systems Consolidation and Exam Preparation',
          description: 'Integrated mechanical, structural, and electrical revision for exams.',
          component: lazy(
            () =>
              import(
                './term4/systems-consolidation-and-exam-preparation/SystemsConsolidationAndExamPreparation'
              ),
          ),
        },
      ],
    },
  ],
};
