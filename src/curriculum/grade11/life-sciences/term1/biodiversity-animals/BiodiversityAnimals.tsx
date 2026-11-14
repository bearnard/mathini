import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Major Invertebrate Phyla',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Invertebrates (animals without backbones) make up approximately 97% of all animal species:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Porifera (sponges)</strong>
            <p className="text-slate-600">Simplest animals. No symmetry, no true tissues or organs. Sessile filter feeders.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Cnidaria (jellyfish, hydra)</strong>
            <p className="text-slate-600">Radial symmetry. Two germ layers (diploblastic). Stinging cells (nematocysts).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Platyhelminthes (flatworms)</strong>
            <p className="text-slate-600">Bilateral symmetry. Three germ layers (triploblastic). Flat, unsegmented body. E.g. tapeworm.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Annelida (earthworms, leeches)</strong>
            <p className="text-slate-600">Segmented body. True coelom (body cavity). Bilateral symmetry. Closed circulatory system.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Arthropoda (insects, crabs, spiders)</strong>
            <p className="text-slate-600">Exoskeleton. Jointed appendages. Bilateral symmetry. Largest animal phylum.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Echinodermata (starfish, sea urchins)</strong>
            <p className="text-slate-600">Radial symmetry as adults. Water vascular system. Marine only. Spiny skin.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Body Symmetry and Cephalisation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Symmetry</strong> describes how an animal body can be divided into equal mirror halves:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Radial symmetry</strong>
            <p className="text-slate-600">Body can be divided equally along multiple planes through a central axis. Found in jellyfish and starfish — animals that are sessile or drift with currents.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Bilateral symmetry</strong>
            <p className="text-slate-600">A single plane divides the body into left and right mirror halves. Associated with active, directional movement. Found from flatworms to humans.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-left">
          <strong className="text-slate-700">Cephalisation</strong>
          <p className="text-slate-600">Concentration of sensory organs and nervous tissue at the anterior (head) end. Found in bilaterally symmetrical animals. Allows better detection of the environment in the direction of movement.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Germ Layers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          During embryonic development, animals form germ layers that give rise to all tissues:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Ectoderm (outer)</strong>
            <p className="text-slate-600">Develops into skin (epidermis) and the nervous system.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Mesoderm (middle)</strong>
            <p className="text-slate-600">Develops into muscles, circulatory system, skeleton, and reproductive organs.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Endoderm (inner)</strong>
            <p className="text-slate-600">Develops into the lining of the digestive tract, liver, and respiratory system.</p>
          </div>
        </div>
        <p className="text-slate-600 mt-2">
          <strong>Diploblastic</strong> (2 layers, e.g. Cnidaria) vs <strong>Triploblastic</strong> (3 layers, from Platyhelminthes onwards).
        </p>
      </div>
    ),
  },
  {
    title: 'Vertebrate Overview',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Vertebrates (subphylum Vertebrata) have a backbone and an internal bony skeleton:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Fish</strong>
            <p className="text-slate-600">Gills, scales, ectothermic, fully aquatic.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Amphibians</strong>
            <p className="text-slate-600">Moist permeable skin, ectothermic, aquatic larvae metamorphose into terrestrial adults.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Reptiles</strong>
            <p className="text-slate-600">Dry scaly skin, ectothermic, lay leathery eggs on land.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Birds</strong>
            <p className="text-slate-600">Feathers, endothermic (warm-blooded), hard-shelled eggs, forelimbs modified as wings.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Mammals</strong>
            <p className="text-slate-600">Hair or fur, endothermic, mammary glands, mostly viviparous (live birth).</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'Which animal phylum is characterised by an exoskeleton and jointed appendages?',
    options: ['Annelida', 'Mollusca', 'Arthropoda', 'Echinodermata'],
    answer: 'Arthropoda',
    explanation: 'Arthropods (insects, spiders, crustaceans) have a hard exoskeleton and jointed legs; they are the largest animal phylum by number of species.',
  },
  {
    prompt: 'A jellyfish can be divided into equal halves along multiple planes through its centre. This is called:',
    options: ['Bilateral symmetry', 'Radial symmetry', 'Asymmetry', 'Cephalisation'],
    answer: 'Radial symmetry',
    explanation: 'Jellyfish and other cnidarians show radial symmetry — equal halves can be produced by cutting through the central axis in multiple planes.',
  },
  {
    prompt: 'Cephalisation is most useful to which type of animal?',
    options: ['Sessile filter feeders like sponges', 'Radially symmetrical drift feeders', 'Actively moving bilaterally symmetrical animals', 'Parasitic flatworms only'],
    answer: 'Actively moving bilaterally symmetrical animals',
    explanation: 'Cephalisation concentrates sense organs and nervous tissue at the head end, giving a directional advantage when moving through the environment.',
  },
  {
    prompt: 'Which germ layer gives rise to the skin and nervous system?',
    options: ['Endoderm', 'Mesoderm', 'Ectoderm', 'Notochord'],
    answer: 'Ectoderm',
    explanation: 'The ectoderm is the outermost embryonic layer; it develops into the epidermis (skin) and the entire nervous system.',
  },
  {
    prompt: 'Animals with only two germ layers (diploblastic) belong to which phylum?',
    options: ['Platyhelminthes', 'Annelida', 'Cnidaria', 'Arthropoda'],
    answer: 'Cnidaria',
    explanation: 'Cnidarians are diploblastic, forming only ectoderm and endoderm during development. All more complex animals (from Platyhelminthes onwards) are triploblastic.',
  },
  {
    prompt: 'What is a distinguishing feature of annelids (earthworms, leeches)?',
    options: ['Radial symmetry around a central body axis', 'A hard exoskeleton made of chitin', 'A segmented body with a true coelom', 'A water vascular system with tube feet'],
    answer: 'A segmented body with a true coelom',
    explanation: 'Annelids have a body divided into repeated ring-like segments and a fluid-filled body cavity (true coelom) that allows organ development and movement.',
  },
  {
    prompt: 'Which vertebrate class is characterised by moist permeable skin and a larval aquatic stage?',
    options: ['Reptiles', 'Fish', 'Amphibians', 'Mammals'],
    answer: 'Amphibians',
    explanation: 'Amphibians (frogs, salamanders) hatch as aquatic larvae (tadpoles) and metamorphose into semi-terrestrial adults; their moist skin allows cutaneous gas exchange.',
  },
  {
    prompt: 'What feature distinguishes mammals from all other vertebrate classes?',
    options: ['Presence of a backbone', 'Hair or fur and mammary glands', 'Ectothermy', 'Hard-shelled eggs'],
    answer: 'Hair or fur and mammary glands',
    explanation: 'All mammals have hair (at some life stage) and mammary glands that produce milk to nourish their young — features unique to the class Mammalia.',
  },
  {
    prompt: 'Sponges (Porifera) are unique among animals because they:',
    options: ['They have radial symmetry like jellyfish do', 'They lack true tissues, organs and body symmetry', 'They are the only animals that filter feed', 'They reproduce by sexual reproduction only'],
    answer: 'They lack true tissues, organs and body symmetry',
    explanation: 'Sponges are the simplest animals — their cells are loosely organised with no true tissues or organs, and they show no body symmetry.',
  },
  {
    prompt: 'Which phylum uses a water vascular system for locomotion and feeding?',
    options: ['Mollusca', 'Echinodermata', 'Platyhelminthes', 'Porifera'],
    answer: 'Echinodermata',
    explanation: 'Echinoderms (starfish, sea urchins) move using hydraulically operated tube feet powered by their water vascular system.',
  },
];

const BiodiversityAnimals = () => (
  <CapsSubjectTopic
    title="Biodiversity of Animals"
    subtitle="Invertebrate phyla, body plans, germ layers, and vertebrate classes"
    learnSteps={learnSteps}
    task="gr11-biodiversity-animals-t1"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default BiodiversityAnimals;
