import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const physicalSciencesGrade11: Subject = {
  id: 'ps',
  title: 'Physical Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-vectors-t1',
          title: 'Vectors and Forces',
          description: 'Resultant vectors, component resolution and free-body diagrams.',
          component: lazy(() => import('./term1/vectors/VectorsAndForces')),
        },
        {
          id: 'gr11-work-energy-t1',
          title: 'Work, Energy and Power',
          description: 'Work done, kinetic and potential energy, conservation of mechanical energy and power.',
          component: lazy(() => import('./term1/work-energy/WorkEnergyPower')),
        },
        {
          id: 'gr11-newtons-laws-t1',
          title: "Newton's Laws and Friction",
          description: 'Inertia, F = ma, action-reaction pairs, static and kinetic friction.',
          component: lazy(() => import('./term1/newtons-laws/NewtonsLaws')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-momentum-t2',
          title: 'Momentum and Impulse',
          description: 'Momentum, impulse-momentum theorem, conservation of momentum and collisions.',
          component: lazy(() => import('./term2/momentum/Momentum')),
        },
        {
          id: 'gr11-projectile-motion-t2',
          title: 'Vertical Projectile Motion',
          description: 'Free fall, kinematic equations and velocity-time graphs for vertical projectiles.',
          component: lazy(() => import('./term2/projectile-motion/ProjectileMotion')),
        },
        {
          id: 'gr11-electrostatics-t2',
          title: 'Electrostatics',
          description: "Electric charge, Coulomb's law, electric fields and field line patterns.",
          component: lazy(() => import('./term2/electrostatics/Electrostatics')),
        },
        {
          id: 'gr11-electric-circuits-t2',
          title: 'Electric Circuits',
          description: "Ohm's law, series and parallel circuits, EMF and internal resistance.",
          component: lazy(() => import('./term2/electric-circuits/ElectricCircuits')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-organic-chemistry-t3',
          title: 'Organic Chemistry',
          description: 'Hydrocarbons, functional groups, IUPAC naming and homologous series.',
          component: lazy(() => import('./term3/organic-chemistry/OrganicChemistry')),
        },
        {
          id: 'gr11-intermolecular-forces-t3',
          title: 'Intermolecular Forces',
          description: 'London forces, dipole-dipole, hydrogen bonding, molecular polarity and physical properties.',
          component: lazy(() => import('./term3/intermolecular-forces/IntermolecularForces')),
        },
        {
          id: 'gr11-redox-reactions-t3',
          title: 'Redox Reactions',
          description: 'Oxidation, reduction, OIL RIG, oxidation numbers and identifying redox agents.',
          component: lazy(() => import('./term3/redox-reactions/RedoxReactions')),
        },
        {
          id: 'gr11-electrochemical-cells-t3',
          title: 'Electrochemical Cells',
          description: 'Galvanic cells, standard electrode potentials, EMF calculation and electrolytic cells.',
          component: lazy(() => import('./term3/electrochemical-cells/ElectrochemicalCells')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-physics-consolidation-t4',
          title: 'Physics Consolidation',
          description: 'Integrated review of Grade 11 mechanics and electricity for final examination.',
          component: lazy(() => import('./term4/physics-consolidation/PhysicsConsolidation')),
        },
        {
          id: 'gr11-chemistry-consolidation-t4',
          title: 'Chemistry Consolidation',
          description: 'Integrated review of Grade 11 organic chemistry and electrochemistry for final examination.',
          component: lazy(() => import('./term4/chemistry-consolidation/ChemistryConsolidation')),
        },
        {
          id: 'gr11-final-exam-prep-t4',
          title: 'Final Examination Preparation',
          description: 'Paper structure, exam strategies and integrated practice across all Grade 11 topics.',
          component: lazy(() => import('./term4/final-exam-prep/FinalExamPrep')),
        },
      ],
    },
  ],
};
