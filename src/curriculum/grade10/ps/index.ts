import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const psGrade10: Subject = {
  id: 'ps',
  title: 'Physical Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-waves-sound-light-t1',
          title: 'Waves, Sound and Light',
          description: 'Wave phenomena and optical principles',
          component: lazy(() => import('./term1/waves-sound-light/WavesSoundLight')),
        },
        {
          id: 'gr10-pulses-superposition-t1',
          title: 'Transverse Pulses and Superposition',
          description: 'Pulses, amplitude, the speed of a pulse and constructive and destructive interference.',
          component: lazy(() => import('./term1/pulses-superposition/PulsesSuperposition')),
        },
        {
          id: 'gr10-em-radiation-t1',
          title: 'Electromagnetic Radiation',
          description: 'The nature of EM waves, the spectrum, c = fλ, the energy of a photon, uses and dangers.',
          component: lazy(() => import('./term1/em-radiation/EmRadiation')),
        },
        {
          id: 'gr10-matter-classification-t1',
          title: 'Revision of Matter and Classification',
          description: 'Pure substances and mixtures, names and formulae, and the properties of materials.',
          component: lazy(() => import('./term1/matter-classification-revision/MatterClassificationRevision')),
        },
        {
          id: 'gr10-atom-isotopes-t1',
          title: 'The Atom and Isotopes',
          description: 'Models of the atom, mass number and atomic number, isotopes and relative atomic mass.',
          component: lazy(() => import('./term1/atom-isotopes/AtomIsotopes')),
        },
        {
          id: 'gr10-longitudinal-waves-t1',
          title: 'Longitudinal Waves',
          description: 'Compressions and rarefactions on a spring, wavelength, frequency, period and speed.',
          component: lazy(() => import('./term1/longitudinal-waves/LongitudinalWaves')),
        },
        {
          id: 'gr10-sound-t1',
          title: 'Sound',
          description: 'What sound is, speed in different media, pitch, loudness and tone, ultrasound and echoes.',
          component: lazy(() => import('./term1/sound/Sound')),
        },
        {
          id: 'gr10-matter-states-phase-change-t2',
          title: 'Matter, States and Phase Change',
          description: 'Properties and transformations of matter',
          component: lazy(() => import('./term2/matter-states-phase-change/MatterStatesPhasEChange')),
        },
        {
          id: 'gr10-atoms-periodic-table-bonding-t2',
          title: 'Atoms, Periodic Table and Bonding',
          description: 'Atomic structure and chemical bonds',
          component: lazy(() => import('./term2/atoms-periodic-table-bonding/AtomsPeriodicTableBonding')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-magnetism-t2',
          title: 'Magnetism',
          description: "Poles, magnetic fields, field lines, the Earth's field, the compass and magnetic materials.",
          component: lazy(() => import('./term2/magnetism/Magnetism')),
        },
        {
          id: 'gr10-particles-substances-t2',
          title: 'Particles Substances Are Made Of',
          description: 'Atoms, molecules, ionic and metallic substances, and how structure decides properties.',
          component: lazy(() => import('./term2/particles-substances/ParticlesSubstances')),
        },
        {
          id: 'gr10-physical-chemical-change-t2',
          title: 'Physical and Chemical Change',
          description: 'Physical and chemical change, conservation of mass, and exothermic and endothermic reactions.',
          component: lazy(() => import('./term2/physical-chemical-change/PhysicalChemicalChange')),
        },
        {
          id: 'gr10-electrostatics-basics-t2',
          title: 'Electrostatics Basics',
          description: 'Two kinds of charge, conductors and insulators, conservation and quantisation of charge.',
          component: lazy(() => import('./term2/electrostatics-basics/ElectrostaticsBasics')),
        },
        {
          id: 'gr10-circuits-series-parallel-t2',
          title: 'Electric Circuits: Series and Parallel',
          description: 'Potential difference, current, resistance, and resistors in series and in parallel.',
          component: lazy(() => import('./term2/circuits-series-parallel/CircuitsSeriesParallel')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-chemical-change-stoichiometry-t3',
          title: 'Chemical Change and Stoichiometry',
          description: 'Reactions and quantitative analysis',
          component: lazy(() => import('./term3/chemical-change-stoichiometry/ChemicalChangeStoichiometry')),
        },
        {
          id: 'gr10-vectors-motion-mechanical-energy-t3',
          title: 'Vectors, Motion and Mechanical Energy',
          description: 'Kinematics and energy analysis',
          component: lazy(() => import('./term3/vectors-motion-mechanical-energy/VectorsMotionMechanicalEnergy')),
        },
        {
          id: 'gr10-ions-in-solution-t3',
          title: 'Ions in Aqueous Solution',
          description: 'How water dissolves ionic compounds, dissolution equations, conductivity and ion concentration.',
          component: lazy(() => import('./term3/ions-in-solution/IonsInSolution')),
        },
        {
          id: 'gr10-precipitation-reaction-types-t3',
          title: 'Precipitation and Reaction Types',
          description: 'Ion exchange, solubility rules, tests for anions and precipitation, gas, acid-base and redox reactions.',
          component: lazy(() => import('./term3/precipitation-reaction-types/PrecipitationReactionTypes')),
        },
        {
          id: 'gr10-composition-empirical-formula-t3',
          title: 'Composition and Empirical Formulae',
          description: 'Percentage composition, empirical formulae and water of crystallisation.',
          component: lazy(() => import('./term3/composition-empirical-formula/CompositionEmpiricalFormula')),
        },
        {
          id: 'gr10-concentration-gas-yield-t3',
          title: 'Concentration, Gas Volume and Yield',
          description: 'Concentration of solutions, the molar volume of a gas and theoretical yield.',
          component: lazy(() => import('./term3/concentration-gas-yield/ConcentrationGasYield')),
        },
        {
          id: 'gr10-position-displacement-t3',
          title: 'Position, Displacement and Distance',
          description: 'Frame of reference, position, distance and displacement in one dimension.',
          component: lazy(() => import('./term3/position-displacement/PositionDisplacement')),
        },
        {
          id: 'gr10-speed-velocity-acceleration-t3',
          title: 'Speed, Velocity and Acceleration',
          description: 'Average speed, average velocity, changing units and acceleration.',
          component: lazy(() => import('./term3/speed-velocity-acceleration/SpeedVelocityAcceleration')),
        },
        {
          id: 'gr10-instantaneous-velocity-t3',
          title: 'Instantaneous Velocity and Position-Time Graphs',
          description: 'Gradients of x-t graphs, instantaneous velocity and constant acceleration.',
          component: lazy(() => import('./term3/instantaneous-velocity/InstantaneousVelocity')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr10-conservation-mechanical-energy-t4',
          title: 'Conservation of Mechanical Energy',
          description: 'Energy conservation and transformation',
          component: lazy(() => import('./term4/conservation-mechanical-energy/ConservationMechanicalEnergy')),
        },
        {
          id: 'gr10-hydrosphere-t4',
          title: 'The Hydrosphere',
          description: 'Water on Earth, the water cycle, dams and water quality.',
          component: lazy(() => import('./term4/hydrosphere/Hydrosphere')),
        },
        {
          id: 'gr10-ps-revision-examination-practice-t4',
          title: 'Revision and Examination Practice',
          description: 'Comprehensive physics review and assessment',
          component: lazy(() => import('./term4/revision-examination-practice/RevisionExaminationPractice')),
        },
      ],
    },
  ],
};
