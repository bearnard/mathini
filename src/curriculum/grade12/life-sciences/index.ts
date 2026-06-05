import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lifeSciencesGrade12: Subject = {
  id: 'ls',
  title: 'Life Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-dna-protein-synthesis-t1',
          title: "DNA and Protein Synthesis",
          description: "DNA structure, replication, RNA, transcription and translation in CAPS Life Sciences.",
          component: lazy(() => import('./term1/dna-protein-synthesis/DNAProteinSynthesis')),
        },
        {
          id: 'gr12-meiosis-t1',
          title: "Meiosis",
          description: "Stages of meiosis, reduction division, variation and non-disjunction.",
          component: lazy(() => import('./term1/meiosis/Meiosis')),
        },
        {
          id: 'gr12-reproduction-vertebrates-t1',
          title: "Reproduction in Vertebrates",
          description: "Comparing vertebrate reproductive strategies, fertilisation and parental care.",
          component: lazy(() => import('./term1/reproduction-vertebrates/ReproductionVertebrates')),
        },
        {
          id: 'gr12-human-reproduction-t1',
          title: "Human Reproduction",
          description: "Human male and female reproduction, menstrual cycle, implantation and gestation.",
          component: lazy(() => import('./term1/human-reproduction/HumanReproduction')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-genetics-inheritance-t2',
          title: "Genetics and Inheritance",
          description: "Core genetics concepts, inheritance terminology and genetic crosses.",
          component: lazy(() => import('./term2/genetics-inheritance/GeneticsInheritance')),
        },
        {
          id: 'gr12-pedigrees-sex-linkage-mutations-t2',
          title: "Pedigrees, Sex Linkage and Mutations",
          description: "Pedigrees, sex-linked traits and mutation-based genetic variation.",
          component: lazy(() => import('./term2/pedigrees-sex-linkage-mutations/PedigreesSexLinkageMutations')),
        },
        {
          id: 'gr12-nervous-system-sense-organs-t2',
          title: "Nervous System and Sense Organs",
          description: "Human nervous coordination, reflex arc, eye and ear function.",
          component: lazy(() => import('./term2/nervous-system-sense-organs/NervousSystemSenseOrgans')),
        },
        {
          id: 'gr12-endocrine-homeostasis-plant-responses-t2',
          title: "Endocrine System, Homeostasis and Plant Responses",
          description: "Hormonal control, homeostasis and plant responses to stimuli.",
          component: lazy(() => import('./term2/endocrine-homeostasis-plant-responses/EndocrineHomeostasisPlantResponses')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-evolution-natural-selection-t3',
          title: "Evolution by Natural Selection",
          description: "Natural selection, comparison of theories, speciation and evidence for evolution.",
          component: lazy(() => import('./term3/evolution-natural-selection/EvolutionNaturalSelection')),
        },
        {
          id: 'gr12-human-evolution-t3',
          title: "Human Evolution",
          description: "Fossil evidence, evolutionary trends and common ancestry in human evolution.",
          component: lazy(() => import('./term3/human-evolution/HumanEvolution')),
        },
        {
          id: 'gr12-revision-trial-examinations-t3',
          title: "Revision and Trial Examinations",
          description: "Mixed revision across physiology, genetics and evolution for trial examinations.",
          component: lazy(() => import('./term3/revision-trial-examinations/RevisionTrialExaminations')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-paper1-human-reproduction-homeostasis-t4',
          title: "Paper 1 — Human Reproduction and Homeostasis",
          description: "Paper 1 revision focused on human reproduction, pregnancy and homeostasis.",
          component: lazy(() => import('./term4/paper1-human-reproduction-homeostasis/Paper1HumanReproductionHomeostasis')),
        },
        {
          id: 'gr12-paper1-response-coordination-plants-t4',
          title: "Paper 1 — Response Coordination and Plant Responses",
          description: "Paper 1 revision on nervous coordination, endocrine control and plant responses.",
          component: lazy(() => import('./term4/paper1-response-coordination-plants/Paper1ResponseCoordinationPlants')),
        },
        {
          id: 'gr12-paper2-genetics-evolution-consolidation-t4',
          title: "Paper 2 — Genetics and Evolution Consolidation",
          description: "Paper 2 revision across genetics, molecular biology and evolution.",
          component: lazy(() => import('./term4/paper2-genetics-evolution-consolidation/Paper2GeneticsEvolutionConsolidation')),
        },
      ],
    },
  ],
};
