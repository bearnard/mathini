import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Retell folktales and share opinions with reasons',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 speaking covers <strong>culture, environment, folktales, interviews,</strong> and opinion-giving.
          Support your ideas with simple reasons.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4 text-left">
            <p className="font-semibold text-green-800">Retelling</p>
            <p className="text-slate-600">Retell events in order: beginning, middle, end.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4 text-left">
            <p className="font-semibold text-slate-700">Opinions</p>
            <p className="text-slate-600">Use phrases like “Ndicinga ukuba...” with reasons.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Use these oral-storytelling and discussion words when retelling events or giving reasons for an opinion.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Balisa"} phonetic={"[ba'liːsa]"} meaning={"Retell / narrate"} lang="xh" />
          <PronunciationPlayer word={"Uluvo"} phonetic={"[u'luːvɔ]"} meaning={"Opinion"} lang="xh" />
          <PronunciationPlayer word={"Kutheni?"} phonetic={"[ku'tʰɛni]"} meaning={"Why?"} lang="xh" />
          <PronunciationPlayer word={"Ngoko"} phonetic={"[ŋɔ'kɔ]"} meaning={"So / therefore"} lang="xh" />
          <PronunciationPlayer word={"Intsomi"} phonetic={"[in'tsɔmi]"} meaning={"Folktale"} lang="xh" />
          <PronunciationPlayer word={"Umxholo"} phonetic={"[um'xɔlɔ]"} meaning={"Theme / main idea"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which phrase introduces an opinion politely?',
    options: ['Ndicinga ukuba...', 'Nika impendulo ngoku!', 'Andifuni kuthetha.', 'Yeka ukubuza.'],
    answer: 'Ndicinga ukuba...',
    explanation: 'Ndicinga ukuba is a respectful way to give an opinion.',
  },
  {
    prompt: 'In a folktale retell, what should come first?',
    options: ['the beginning of the story', 'the final lesson only', 'random middle details', 'new unrelated characters'],
    answer: 'the beginning of the story',
    explanation: 'Retells should follow logical sequence.',
  },
  {
    prompt: 'Which question fits an interview activity?',
    options: ['Yintoni oyithandayo ngendawo ohlala kuyo?', 'Ngubani umbala wakho owuthandayo?', 'Ngubani igama likamama wakho?', 'Uneminyaka emingaphi ngoku?'],
    answer: 'Yintoni oyithandayo ngendawo ohlala kuyo?',
    explanation: 'It is an open question suitable for oral interviewing.',
  },
  {
    prompt: 'A good reason in opinion speech should be...',
    options: ['clear and linked to the opinion', 'unrelated and confusing', 'one random word', 'copied without meaning'],
    answer: 'clear and linked to the opinion',
    explanation: 'Reasons must support the claim directly.',
  },
  {
    prompt: 'Which topic fits Term 3 oral work?',
    options: ['comparing cultural practices', 'solving long division', 'reading chemical formulas', 'coding a game'],
    answer: 'comparing cultural practices',
    explanation: 'Culture comparison is part of Term 3 oral themes.',
  },
  {
    prompt: 'What does good listening during interviews include?',
    options: ['waiting, then asking follow-up questions', 'interrupting every answer that is given', 'changing the topic all the time', 'ignoring the responses of the speaker'],
    answer: 'waiting, then asking follow-up questions',
    explanation: 'Active listening improves interview quality.',
  },
  {
    prompt: 'Which sentence gives an environmental opinion with a reason?',
    options: ['Ndicinga ukuba kufuneka sihlambe indawo yethu kuba icocekile iyanceda impilo.', 'Andikhathali ngendawo yethu nokuba ingcolile kakhulu ngoku.', 'Akukho sizathu sokuhlamba indawo yethu kwaphela apha.', 'Andazi nto ngomhlaba, ke andinaluvo lunganto ngawo.'],
    answer: 'Ndicinga ukuba kufuneka sihlambe indawo yethu kuba icocekile iyanceda impilo.',
    explanation: 'It states an opinion and includes a reason.',
  },
  {
    prompt: 'In oral assessment, pronunciation checks focus on...',
    options: ['clarity and confidence', 'speed only', 'volume only', 'memorising one word'],
    answer: 'clarity and confidence',
    explanation: 'Learners are assessed on understandable, confident speech.',
  },
];

const ListeningSpeakingT3 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Culture, environment, folktale retelling, interviews, and opinions"
    learnSteps={learnSteps}
    task="gr7-listening-speaking-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT3;
