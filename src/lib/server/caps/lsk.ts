import type { SubjectConfig } from '../caps/types';
import lskGr7Term1 from './tasks/lsk-gr7-term1.json';
import lskGr7Term2 from './tasks/lsk-gr7-term2.json';
import lskGr7Term3 from './tasks/lsk-gr7-term3.json';
import lskGr7Term4 from './tasks/lsk-gr7-term4.json';

export const lsk: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Life Skills teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly explanation. ' +
      'Keep language accurate, age-appropriate and South African in spelling and context. Do not repeat items. '
    );
  },
  tasks: {
    // Term 1
    'personal-social-wellbeing-t1':
      'Topic: Personal and Social Well-being. Cover self-image, personal strengths, healthy habits, peer pressure, respect, simple goal setting, refusal skills, and supportive friendships. Ask learners to choose healthy responses in everyday scenarios, identify respectful behaviour, recognise positive self-talk, or decide how to resist unsafe peer pressure.',
    'physical-education-t1':
      'Topic: Physical Education. Cover warm-ups, locomotor and non-locomotor movement, balance, coordination, target games, aiming, throwing accuracy, safety routines, and teamwork. Ask learners to identify correct movement types, choose safe class behaviours, or decide which skill best improves balance and target-game performance.',
    'creative-arts-t1':
      'Topic: Creative Arts. Cover line, shape, colour, simple 2D artwork, rhythm, steady beat, body percussion, drama games, and movement phrases. Ask learners to identify art elements, choose how rhythm patterns work, recognise body percussion actions, or decide which drama activity best shows an idea or feeling.',
    // Term 2
    'personal-social-wellbeing-t2':
      'Topic: Personal and Social Well-being. Cover friendships, relationship problems, conflict resolution, personal safety, responsibilities, trusted adults, safe choices, and study habits. Ask learners to identify healthy friendship behaviours, choose fair ways to solve a conflict, recognise responsible study habits, or decide when to ask a trusted adult for help.',
    'physical-education-t2':
      'Topic: Physical Education. Cover invasion games, catching and passing, agility, teamwork, fair play, repeated drills, and simple tactics in small-sided games. Ask learners to identify good passing or defending choices, explain agility and teamwork, recognise fair-play behaviour, or choose the best tactic in a mini-game situation.',
    'creative-arts-t2':
      'Topic: Creative Arts. Cover texture, pattern, printmaking, collage, storytelling, puppetry, rhythm patterns, voice, movement, rehearsal, and presentation. Ask learners to identify visual art techniques, recognise repeated patterns or rhythms, choose effective storytelling or puppetry decisions, or answer simple performance and artwork process questions.',
    // Term 3
    'personal-social-wellbeing-t3':
      'Topic: Personal and Social Well-being. Cover diversity, culture, religion, rights and responsibilities, and substance abuse awareness. Ask learners to identify respectful actions, match rights to responsibilities, explain why stereotypes are harmful, recognise healthy responses to peer pressure, and choose safe actions that protect individuals and communities.',
    'physical-education-t3':
      'Topic: Physical Education. Cover athletics, relays, indigenous games, flexibility, and reaction time. Ask learners to identify safe warm-up and cool-down habits, recognise correct relay and jumping technique, explain teamwork and fair play, and choose actions that improve flexibility, coordination, and quick response in movement activities.',
    'creative-arts-t3':
      'Topic: Creative Arts. Cover South African cultural art, mixed media, choral verse, singing, and movement. Ask learners to identify respectful use of cultural themes, recognise mixed-media materials and texture, and answer questions about rehearsal, timing, expression, and group performance in integrated creative activities.',
    // Term 4
    'personal-social-wellbeing-t4':
      'Topic: Personal and Social Well-being. Cover puberty, emotions, HIV and AIDS awareness, community service, and career awareness. Emphasise respectful language about change, supportive responses, facts that challenge stigma, and links between strengths, community roles, and future goals.',
    'physical-education-t4':
      'Topic: Physical Education. Cover team games, fitness circuits, coordination review, recreation, and health. Emphasise combining movement skills in games and stations, fair play, safe participation, self-assessment, and the health benefits of regular physical activity.',
    'creative-arts-t4':
      'Topic: Creative Arts. Cover 3D construction, design planning, dance-drama integration, and final presentation. Emphasise planning a model or sculpture, choosing and joining materials, balance and texture, rehearsal, teamwork, showcase preparation, portfolio evidence, and peer feedback.',
    ...lskGr7Term1.tasks,
    ...lskGr7Term2.tasks,
    ...lskGr7Term3.tasks,
    ...lskGr7Term4.tasks,
  },
};
