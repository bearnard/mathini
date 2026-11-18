import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const creativeArtsGrade8: Subject = {
  id: 'ca',
  title: 'Creative Arts',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'visual-arts',
          title: 'Visual Arts',
          description: 'Elements of art, observational drawing, and 2D composition.',
          component: lazy(() => import('./term1/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'Beat, rhythm, metre, pitch, dynamics, notation basics, and listening skills.',
          component: lazy(() => import('./term1/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Body warm-up, voice projection, tableaux, improvisation, and character.',
          component: lazy(() => import('./term1/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Locomotor and non-locomotor movement, posture, space, time, and safe stretching.',
          component: lazy(() => import('./term1/dance/Dance')),
        },
        {
          id: 'music-literacy-notes-keys',
          title: 'Music Literacy: Note Values, Time Signatures and Keys',
          description: 'Note values and rests, 2/4 3/4 4/4, clefs and the C and G major scales.',
          component: lazy(() => import('./term1/music-literacy-notes-keys/MusicLiteracyNotesKeys')),
        },
        {
          id: 'instrument-families',
          title: 'Families of Instruments',
          description: 'Membranophones, idiophones, chordophones and aerophones and how to hear the difference.',
          component: lazy(() => import('./term1/instrument-families/InstrumentFamilies')),
        },
        {
          id: 'lettering-graffiti',
          title: 'Creative Lettering and Graffiti',
          description: 'Lettering in popular culture, art elements, design principles, complementary colours and designing with ink.',
          component: lazy(() => import('./term1/lettering-graffiti/LetteringGraffiti')),
        },
        {
          id: 'clay-mythological-containers',
          title: 'Clay and Mythological Containers',
          description: 'Functional containers, the pinch pot, joining and decorating clay, and a mythological container from recyclables.',
          component: lazy(() => import('./term1/clay-mythological-containers/ClayMythologicalContainers')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'visual-arts',
          title: 'Visual Arts',
          description: 'Principles of design, pattern, printmaking, collage, and African visual references.',
          component: lazy(() => import('./term2/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'South African styles, melody, texture, ensemble balance, and call-and-response.',
          component: lazy(() => import('./term2/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Storytelling, script excerpts, improvisation, focus, tension, and audience awareness.',
          component: lazy(() => import('./term2/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Motif development, folk or social dance, rhythm, group patterns, and coordination.',
          component: lazy(() => import('./term2/dance/Dance')),
        },
        {
          id: 'triplets-f-major-terms',
          title: 'Triplets, F Major, Dynamics and Tempo Words',
          description: 'The triplet, the F major scale, piano, forte, crescendo, diminuendo, allegro and andante.',
          component: lazy(() => import('./term2/triplets-f-major-terms/TripletsFMajorTerms')),
        },
        {
          id: 'sa-poetry-praise-poetry',
          title: 'South African Poetry and Praise Poetry',
          description: 'Interpreting a poem, mood, praise poetry, call and response and the role of the praise poet.',
          component: lazy(() => import('./term2/sa-poetry-praise-poetry/SaPoetryPraisePoetry')),
        },
        {
          id: 'fashion-design-recyclables',
          title: 'Fashion Design from Recyclables',
          description: 'Fashion through the ages, designing a garment, tools and sharing, and careers in fashion.',
          component: lazy(() => import('./term2/fashion-design-recyclables/FashionDesignRecyclables')),
        },
        {
          id: 'societal-issues-art',
          title: 'Societal Issues in South African Art',
          description: 'Art as social commentary, symbols, drawing with 2B, 3B and 4B pencils, planning and respect.',
          component: lazy(() => import('./term2/societal-issues-art/SocietalIssuesArt')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'visual-arts',
          title: 'Visual Arts',
          description: 'South African and African art, symbolism, mixed media, and visual literacy.',
          component: lazy(() => import('./term3/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'Binary and ternary form, composition basics, ostinato, and listening analysis.',
          component: lazy(() => import('./term3/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Characterisation, conflict, staging, scripted dialogue, and rehearsal.',
          component: lazy(() => import('./term3/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Space, energy, choreographic devices, cultural dance study, and performance quality.',
          component: lazy(() => import('./term3/dance/Dance')),
        },
        {
          id: 'ostinato-riff-jingle',
          title: 'Melodic Ostinato, Riffs and the Jingle',
          description: 'Repeating patterns, four lines of lyrics, a one-minute jingle and music technology.',
          component: lazy(() => import('./term3/ostinato-riff-jingle/OstinatoRiffJingle')),
        },
        {
          id: 'polished-improvisation-style',
          title: 'Polished Improvisation in a Style',
          description: 'Comedy, tragedy, musical or puppet show, drama elements, technical resources and justifying your choices.',
          component: lazy(() => import('./term3/polished-improvisation-style/PolishedImprovisationStyle')),
        },
        {
          id: 'careers-surface-decoration',
          title: 'Careers in Arts and Design and Surface Decoration',
          description: 'Careers in the arts and design, researching a career, surface decoration and making 2D and 3D designs.',
          component: lazy(() => import('./term3/careers-surface-decoration/CareersSurfaceDecoration')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'visual-arts',
          title: 'Visual Arts',
          description: 'Portfolio selection, exhibition planning, finishing techniques, and reflection.',
          component: lazy(() => import('./term4/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'Performance revision, genre comparison, aural recall, and stage etiquette.',
          component: lazy(() => import('./term4/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Scripted performance, rehearsal discipline, audience etiquette, and evaluation.',
          component: lazy(() => import('./term4/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Final routine, timing, expression, appreciation, and careers awareness.',
          component: lazy(() => import('./term4/dance/Dance')),
        },
        {
          id: 'six-eight-d-major-articulation',
          title: '6/8, D Major, Tempo and Articulation',
          description: 'The time signature 6/8, the D major scale, tempo words, legato, staccato and listening.',
          component: lazy(() => import('./term4/six-eight-d-major-articulation/SixEightDMajorArticulation')),
        },
        {
          id: 'dialogues-prose-storytelling',
          title: 'Dialogues, Dramatised Prose and Indigenous Storytelling',
          description: 'Character in voice and body, status, narrator and characters, the ntsomi, songs and sound effects.',
          component: lazy(() => import('./term4/dialogues-prose-storytelling/DialoguesProseStorytelling')),
        },
        {
          id: 'drama-in-the-media',
          title: 'Drama in the Media',
          description: 'Film, television, radio, documentaries and the internet, drama elements in the media and responding to a media drama.',
          component: lazy(() => import('./term4/drama-in-the-media/DramaInTheMedia')),
        },
        {
          id: 'tone-texture-pastel-tempera',
          title: 'Tone and Texture: Crumpled Fabric, Oil Pastel and Tempera',
          description: 'Drawing crumpled fabric, design principles, oil pastel and tempera, and talking about artworks.',
          component: lazy(() => import('./term4/tone-texture-pastel-tempera/ToneTexturePastelTempera')),
        },
        {
          id: 'scraperboard-etching',
          title: 'Scraperboard Etching',
          description: 'Wax and ink scraperboard, shape, line, tone and texture, contrast and emphasis, and working safely.',
          component: lazy(() => import('./term4/scraperboard-etching/ScraperboardEtching')),
        },
      ],
    },
  ],
};
