import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const physicalSciencesGrade12: Subject = {
  id: 'ps',
  title: 'Physical Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: "gr12-momentum-impulse-collisions-t1",
          title: "Momentum, Impulse and Collisions",
          description: "Solve Grade 12 momentum and collision problems using impulse, sign conventions and conservation principles.",
          component: lazy(() => import('./term1/momentum-impulse-collisions/MomentumImpulseCollisions')),
        },
        {
          id: "gr12-vertical-projectile-motion-t1",
          title: "Vertical Projectile Motion",
          description: "Analyse vertical projectile motion with equations of motion, graphs and careful direction signs.",
          component: lazy(() => import('./term1/vertical-projectile-motion/VerticalProjectileMotion')),
        },
        {
          id: "gr12-organic-molecules-reactions-t1",
          title: "Organic Molecules and Reactions",
          description: "Work confidently with Grade 12 organic chemistry naming, properties and reaction patterns.",
          component: lazy(() => import('./term1/organic-molecules-reactions/OrganicMoleculesReactions')),
        },
        {
          id: "gr12-plastics-polymers-t1",
          title: "Plastics and Polymers",
          description: "Monomers and polymers, addition and condensation polymerisation, recycling codes and the environment.",
          component: lazy(() => import('./term1/plastics-polymers/PlasticsPolymers')),
        },
        {
          id: "gr12-polymers-monomers-recycling-t1",
          title: "Polymers: Identifying Monomers, Uses and Recycling Numbers",
          description: "Monomers from a chain section, addition or condensation from the structure, polythene uses and recycling numbers.",
          component: lazy(() => import('./term1/polymers-monomers-recycling/PolymersMonomersRecycling')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: "gr12-work-energy-power-t2",
          title: "Work, Energy and Power",
          description: "Connect force, motion and energy transfer in multistep Grade 12 mechanics problems.",
          component: lazy(() => import('./term2/work-energy-power/WorkEnergyPower')),
        },
        {
          id: "gr12-doppler-effect-applications-t2",
          title: "Doppler Effect and Applications",
          description: "Explain Doppler shifts in sound, medicine and astronomy using CAPS Grade 12 reasoning.",
          component: lazy(() => import('./term2/doppler-effect-applications/DopplerEffectApplications')),
        },
        // The old combined lesson gr12-rates-equilibrium-acids-bases-t2 is no longer listed (its code, task id and D1 questions stay):
        // it was split into the three lessons below. Its public page redirects (src/lib/seo/legacyRedirects.ts).
        {
          id: "gr12-rate-extent-reaction-t2",
          title: "Rate and Extent of Reaction",
          description: "Rates of reaction, collision theory, the factors that change the rate, catalysts and energy profiles.",
          component: lazy(() => import('./term2/rate-extent-reaction/RateExtentReaction')),
        },
        {
          id: "gr12-chemical-equilibrium-t2",
          title: "Chemical Equilibrium",
          description: "Dynamic equilibrium, the equilibrium constant Kc and calculations, and Le Chatelier's principle.",
          component: lazy(() => import('./term2/chemical-equilibrium/ChemicalEquilibrium')),
        },
        {
          id: "gr12-acids-bases-t2",
          title: "Acids and Bases",
          description: "Lowry-Brønsted acids and bases, conjugate pairs, pH and Kw, titrations and salt hydrolysis.",
          component: lazy(() => import('./term2/acids-bases/AcidsBases')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: "gr12-electric-circuits-internal-resistance-t3",
          title: "Electric Circuits and Internal Resistance",
          description: "Solve loaded-cell and resistor-network questions with Grade 12 circuit relationships.",
          component: lazy(() => import('./term3/electric-circuits-internal-resistance/ElectricCircuitsInternalResistance')),
        },
        {
          id: "gr12-electrodynamics-generators-motors-t3",
          title: "Electrodynamics: Generators and Motors",
          description: "Compare AC and DC generators, motors and RMS relationships in electrodynamics.",
          component: lazy(() => import('./term3/electrodynamics-generators-motors/ElectrodynamicsGeneratorsMotors')),
        },
        {
          id: "gr12-photoelectric-effect-spectra-t3",
          title: "Photoelectric Effect and Atomic Spectra",
          description: "Use modern physics ideas to explain photoelectric emission and atomic spectra.",
          component: lazy(() => import('./term3/photoelectric-effect-spectra/PhotoelectricEffectSpectra')),
        },
        {
          id: "gr12-electrochemical-reactions-t3",
          title: "Electrochemical Reactions",
          description: "Interpret galvanic and electrolytic cells, half-reactions and practical electrochemistry uses.",
          component: lazy(() => import('./term3/electrochemical-reactions/ElectrochemicalReactions')),
        },
        {
          id: "gr12-fertiliser-industry-t3",
          title: "The Fertiliser Industry",
          description: "N, P and K fertilisers, the Haber, Ostwald and contact processes, and the effect of fertilisers on the environment.",
          component: lazy(() => import('./term3/fertiliser-industry/FertiliserIndustry')),
        },
        {
          id: "gr12-plant-nutrients-t3",
          title: "Plant Nutrients: Sources, Functions and History",
          description: "Non-mineral and mineral nutrients, the jobs of N, P and K, early fertilisers and the N:P:K ratio.",
          component: lazy(() => import('./term3/plant-nutrients/PlantNutrients')),
        },
        {
          id: "gr12-fertiliser-manufacture-t3",
          title: "Making Fertilisers in Industry: Raw Materials, Sasol and Alternatives",
          description: "Raw materials, ammonia-based, phosphate and potassium fertilisers, Sasol, advantages and alternatives.",
          component: lazy(() => import('./term3/fertiliser-manufacture/FertiliserManufacture')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: "gr12-paper1-mechanics-waves-electricity-t4",
          title: "Paper 1 Mechanics, Waves and Electricity Revision",
          description: "Consolidate Paper 1 mechanics, waves and electricity skills for the final exam.",
          component: lazy(() => import('./term4/paper1-mechanics-waves-electricity/Paper1MechanicsWavesElectricity')),
        },
        {
          id: "gr12-paper1-electrodynamics-optics-skills-t4",
          title: "Paper 1 Electrodynamics and Optics Revision",
          description: "Revise Paper 1 electrodynamics and modern physics concepts with exam-focused questions.",
          component: lazy(() => import('./term4/paper1-electrodynamics-optics-skills/Paper1ElectrodynamicsOpticsSkills')),
        },
        {
          id: "gr12-paper2-chemistry-integration-t4",
          title: "Paper 2 Chemistry Integration",
          description: "Integrate key Paper 2 chemistry topics for concise, exam-ready Grade 12 revision.",
          component: lazy(() => import('./term4/paper2-chemistry-integration/Paper2ChemistryIntegration')),
        },
      ],
    },
  ],
};
