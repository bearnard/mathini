import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT4.data';

const learnSteps = xhosaSteps(lesson);

export const bank: CapsItem[] = [
  {
    prompt: 'Which response best shows a feeling in isiXhosa?',
    options: ['Ndonwabile namhlanje.', 'Itafile iphantsi.', 'Le yipensile yam.', 'Incwadi ibomvu.'],
    answer: 'Ndonwabile namhlanje.',
    explanation: '“Ndonwabile” means “I am happy,” so it clearly expresses a feeling.',
  },
  {
    prompt: 'What is a good listening behaviour during a dialogue?',
    options: ['Wait for your turn before speaking', 'Interrupt after every sentence', 'Look away and ignore the speaker', 'Shout your answer immediately'],
    answer: 'Wait for your turn before speaking',
    explanation: 'Respectful listening includes paying attention and waiting for your turn.',
  },
  {
    prompt: 'Which question is suitable for a revision conversation?',
    options: ['Uhlala phi?', 'Yintoni umbala wesibhakabhaka ebusuku xa kungekho nyanga?', 'Ngubani owakha isikolo sethu kwiminyaka eyi-100 eyadlulayo?', 'Kutheni iintaba zinemozulu etshintshayo ngequbuliso?'],
    answer: 'Uhlala phi?',
    explanation: '“Uhlala phi?” is a familiar, simple question for SAL speaking practice.',
  },
  {
    prompt: 'Which sentence best starts a short prepared oral?',
    options: ['Namhlanje ndiza kuthetha ngempilo entle.', 'Andikhumbuli nto, mhlawumbi ndiza kuhlala phantsi.', 'Masithethe nantoni na engenasihloko.', 'Andifuni kubulisa mntu.'],
    answer: 'Namhlanje ndiza kuthetha ngempilo entle.',
    explanation: 'A clear opening states the topic so listeners know what the talk is about.',
  },
  {
    prompt: 'What helps a speaker during a short presentation?',
    options: ['Using key points in a clear order', 'Speaking as fast as possible', 'Skipping all preparation', 'Changing topic every sentence'],
    answer: 'Using key points in a clear order',
    explanation: 'Ordered key points make the oral easy to follow.',
  },
  {
    prompt: 'If you do not understand a spoken sentence, what is the best response?',
    options: ['Nceda uphinde.', 'Andinamdla.', 'Yeka ukuthetha ngoku.', 'Ndiyahamba ngoku.'],
    answer: 'Nceda uphinde.',
    explanation: '“Nceda uphinde” politely asks the speaker to repeat.',
  },
  {
    prompt: 'Which topic fits Term 4 Listening & Speaking?',
    options: ['Talking about celebrations in the community', 'Solving algebra equations', 'Studying planets with telescopes', 'Drawing only geometric patterns'],
    answer: 'Talking about celebrations in the community',
    explanation: 'Celebrations are part of familiar oral themes for this term.',
  },
  {
    prompt: 'Which ending is appropriate for a short oral talk?',
    options: ['Enkosi ngokumamela.', 'Ndithetha de kuphele ixesha lonke ngaphandle kwesiphelo.', 'Niza kuphendula kamva, mna ndiyaphuma.', 'Andinanto yokuvala.'],
    answer: 'Enkosi ngokumamela.',
    explanation: 'A polite closing thanks the audience and signals the end.',
  },
  {
    prompt: 'Why is it useful to practise revision dialogues?',
    options: ['To build confidence in speaking and responding', 'To avoid listening activities completely', 'To memorise only one long speech', 'To replace all reading tasks'],
    answer: 'To build confidence in speaking and responding',
    explanation: 'Dialogues strengthen oral confidence, listening, and response skills.',
  },
];

const ListeningSpeakingT4 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Health, feelings, celebrations, and short oral revision"
    learnSteps={learnSteps}
    task="listening-speaking-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ListeningSpeakingT4;
