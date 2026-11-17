import type { SubjectConfig } from '../caps/types';
import hisGr6Facts from './tasks/his-gr6-facts.json';
import { withLessonFacts } from './lessonFacts';
import hisGr7Term1 from './tasks/his-gr7-term1.json';
import hisGr7Term2 from './tasks/his-gr7-term2.json';
import hisGr7Term3 from './tasks/his-gr7-term3.json';
import hisGr7Term4 from './tasks/his-gr7-term4.json';
import hisGr8Term1 from './tasks/his-gr8-term1.json';
import hisGr8Term2 from './tasks/his-gr8-term2.json';
import hisGr8Term3 from './tasks/his-gr8-term3.json';
import hisGr8Term4 from './tasks/his-gr8-term4.json';
import hisGr9Term1 from './tasks/his-gr9-term1.json';
import hisGr9Term2 from './tasks/his-gr9-term2.json';
import hisGr9Term3 from './tasks/his-gr9-term3.json';
import hisGr9Term4 from './tasks/his-gr9-term4.json';
import hisGr11Term1 from './tasks/his-gr11-term1.json';
import hisGr11Term2 from './tasks/his-gr11-term2.json';
import hisGr11Term3 from './tasks/his-gr11-term3.json';
import hisGr11Term4 from './tasks/his-gr11-term4.json';
import hisGr12Term1 from './tasks/his-gr12-term1.json';
import hisGr12Term2 from './tasks/his-gr12-term2.json';
import hisGr12Term3 from './tasks/his-gr12-term3.json';
import hisGr12Term4 from './tasks/his-gr12-term4.json';
import hisGr12ColdWar from './tasks/his-gr12-coldwar.json';
import hisGr12CivilSociety from './tasks/his-gr12-civilsociety.json';
import hisGr12NewOrder from './tasks/his-gr12-neworder.json';

const rawHistoryTasks: Record<string, string> = {
  'what-is-history':
    'Topic: What is history. Cover that history is the study of the past, that historians use evidence to find out what happened, the difference between the past and history, and why we study history (to understand how people lived and how things changed). Ask what history is, what a historian does, or why we study the past.',
  'historical-sources':
    'Topic: Historical sources. Cover oral sources (spoken stories, interviews), written sources (letters, diaries, newspapers, books), visual sources (photographs, paintings, maps) and objects/artefacts, and the difference between primary sources (from the time) and secondary sources (made later). Ask to identify or classify a source.',
  'investigating-community':
    'Topic: Investigating the history of a local community. Cover how to research local history by interviewing older people, visiting museums, libraries and archives, looking at old photographs and buildings, and asking good questions. Ask which method or source helps investigate local history.',
  'timelines-change':
    'Topic: Timelines and change over time. Cover how a timeline shows events in the order they happened (chronological order), reading dates, the idea of decades and centuries, BC/BCE and AD/CE, and how a place or community changes over time. Ask to order events, read a timeline, or about change over time.',
  'british-take-cape':
    'Topic: The arrival of the British at the Cape. Cover that the British first took control of the Cape from the Dutch in 1795 and again in 1806, that the Cape was important because of its position on the sea route to India and the East, and some changes British rule brought (language, laws, the ending of slavery in 1834). Ask about dates, reasons, or changes.',
  'frontier-peoples':
    'Topic: Peoples on the Cape frontier. Cover the different groups who met and competed on the eastern frontier of the Cape Colony: the Khoikhoi and San, the Xhosa, the Dutch/Boers (Trekboers) and the British, and that they competed for land, water and grazing for cattle. Ask to identify a group or what groups competed over.',
  'frontier-conflicts':
    'Topic: Frontier conflicts and the expanding frontier. Cover that as the Cape Colony grew, settlers moved east and clashed with the Xhosa in a series of frontier wars over land and cattle, and that these conflicts went on for many years. Ask about the causes of frontier conflict or who was involved.',
  'trekboers-migration':
    'Topic: Trekboers and migration. Cover that Trekboers were Dutch-descended farmers who moved inland with their cattle in search of new grazing land, living a semi-nomadic life, which expanded the Cape Colony and led to contact and conflict with groups already living there. Ask who the Trekboers were or why they moved.',
  'what-is-democracy':
    'Topic: What is democracy. Cover that democracy means government by the people, that adult citizens vote in free and fair elections to choose their leaders, the idea of one person one vote, and that South Africa became a democracy in 1994. Ask what democracy means or how leaders are chosen.',
  'road-to-democracy':
    'Topic: The road to democracy in South Africa. Cover that under apartheid most South Africans could not vote, that the first democratic election was held on 27 April 1994 (now Freedom Day), that Nelson Mandela became the first democratically elected president, and that people of all races could vote for the first time. Ask about 1994, Freedom Day, or the first president.',
  'constitution-bill-rights':
    'Topic: The Constitution and the Bill of Rights. Cover that the Constitution is the highest law of South Africa, that it sets out how the country is governed, and that the Bill of Rights protects the rights of everyone (such as equality, education, safety and freedom). Ask what the Constitution is or what the Bill of Rights does.',
  'rights-responsibilities':
    'Topic: Rights, responsibilities and government. Cover that citizens have rights (e.g. education, safety, a clean environment) and responsibilities (e.g. obey laws, respect others, look after the environment), and the three levels of government (national, provincial and local/municipal). Ask about a right, a responsibility, or a level of government.',
  'early-indigenous-medicine':
    'Topic: Early and indigenous medicine in South Africa. Cover that long ago people used plants, herbs and natural remedies to heal, that traditional healers (such as the inyanga and sangoma) used indigenous knowledge passed down over generations, and that some plant remedies are still used today. Ask about early healing or indigenous medicine.',
  'ancient-medicine':
    'Topic: Medicine in ancient times. Cover early ideas about medicine in ancient civilisations such as Egypt and Greece, that people once did not know what caused diseases and sometimes blamed bad air or the gods, and early treatments and healers. Ask about old beliefs about illness or early medicine.',
  'european-medicine':
    'Topic: Medicine in early European times and important discoveries. Cover the building of hospitals, the discovery that tiny germs cause many diseases (germ theory), the importance of cleanliness, and vaccines that prevent disease. Ask about hospitals, germs, cleanliness or vaccines.',
  'modern-medicine':
    'Topic: Modern medicine and breakthroughs. Cover modern advances such as antibiotics (like penicillin) to fight infection, X-rays to see inside the body, vaccinations, and that the first human heart transplant was performed by Dr Christiaan Barnard in Cape Town, South Africa, in 1967. Ask about a modern breakthrough or the first heart transplant.',
};

// Grade 6 scopes carry the lesson's own facts too (stops invented counts, dates and article numbers).
const existingHistoryTasks = withLessonFacts(rawHistoryTasks, hisGr6Facts.facts);

export const his: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a History teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly English explanation. ' +
      'Keep historical content accurate and age-appropriate. Be balanced and sensitive when covering colonialism, conflict, enslavement, and apartheid. Use South African spelling and context. Do not repeat items. '
    );
  },
  tasks: {
    ...existingHistoryTasks,
    ...hisGr7Term1.tasks,
    ...hisGr7Term2.tasks,
    ...hisGr7Term3.tasks,
    ...hisGr7Term4.tasks,
    ...hisGr8Term1.tasks,
    ...hisGr8Term2.tasks,
    ...hisGr8Term3.tasks,
    ...hisGr8Term4.tasks,
    ...hisGr9Term1.tasks,
    ...hisGr9Term2.tasks,
    ...hisGr9Term3.tasks,
    ...hisGr9Term4.tasks,
    ...hisGr11Term1.tasks,
    ...hisGr11Term2.tasks,
    ...hisGr11Term3.tasks,
    ...hisGr11Term4.tasks,
    ...hisGr12Term1.tasks,
    ...hisGr12Term2.tasks,
    ...hisGr12Term3.tasks,
    ...hisGr12Term4.tasks,
    ...hisGr12ColdWar.tasks,
    ...hisGr12CivilSociety.tasks,
    ...hisGr12NewOrder.tasks,
  },
};
