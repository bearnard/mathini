import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 11 Term 3, Listening & Speaking. Every isiXhosa line is listed in audit/xhosa-g11-12-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Debate: roles and rebuttal',
      rule: 'A debate has a proposition team (for the motion), an opposition team (against) and a chairperson who keeps time and order. The proposition speaks first. A rebuttal answers one specific point of the other team; it is not a new point.',
      workedTitle: 'Phrases for each role',
      examples: [
        { xh: 'Ndivumelana nesiphakamiso.', en: 'I agree with the motion. (proposition)' },
        { xh: 'Andivumelani nesiphakamiso.', en: 'I do not agree with the motion. (opposition)' },
        { xh: 'Andivumelani nawe, kuba imfundo ibalulekile.', en: 'I do not agree with you, because education is important. (rebuttal)' },
        { xh: 'Sihlalo, ndiyabulela.', en: 'Chairperson, thank you.' },
      ],
      mistake: 'Do not answer a rebuttal with a brand-new argument. Name the other team\'s point and challenge it with a reason.',
      vocab: [
        { word: 'Ingxoxo-mpikiswano', phonetic: "[iŋ'xɔxɔ mpi'kiswano]", meaning: 'Debate' },
        { word: 'Uluvo', phonetic: "[u'luːvɔ]", meaning: 'Opinion' },
        { word: 'Isizathu', phonetic: "[isi'zatu]", meaning: 'Reason' },
      ],
    },
    {
      title: 'A prepared speech: position and arguments',
      rule: 'State your position in the introduction. Give two or three developed arguments with evidence, mention the opposing view and answer it, then end with a persuasive conclusion. Signpost each part so listeners can follow.',
      workedTitle: 'Signposts for a speech',
      examples: [
        { xh: 'Ndikholelwa ukuba imfundo ibalulekile.', en: 'I believe that education is important. (position)' },
        { xh: 'Kuqala, imfundo isinceda sifumane umsebenzi.', en: 'Firstly, education helps us get a job. (argument 1)' },
        { xh: 'Abanye bathi imfundo iyabiza, kodwa isiphumo siyalunga.', en: 'Some say education is expensive, but the result is good. (opposing view)' },
        { xh: 'Ekugqibeleni, ndiyavuma ukuba imfundo yeyabo bonke.', en: 'Finally, I maintain that education is for everyone. (conclusion)' },
      ],
      mistake: 'Personal stories alone are not enough. Back every argument with a fact or example, and answer the opposing view instead of ignoring it.',
      vocab: [
        { word: 'Intetho', phonetic: "[in'tɛːtʰɔ]", meaning: 'Speech' },
      ],
    },
    {
      title: 'Seminar: academic register and facilitation',
      rule: 'A seminar is a focused academic discussion. Use formal words, complete sentences and hedging (careful claims such as "it seems that"). Support claims with evidence. A facilitator invites others to speak and summarises to keep the group on track.',
      workedTitle: 'Hedging and facilitating',
      examples: [
        { xh: 'Kubonakala ukuba imfundo iyatshintsha.', en: 'It seems that education is changing. (hedging)' },
        { xh: 'Ngokutsho kombhali, ubuhlwempu bunefuthe elikhulu.', en: 'According to the writer, poverty has a big influence. (evidence)' },
        { xh: 'Uthini wena?', en: 'What do you say? (inviting someone to speak)' },
        { xh: 'Masishwankathele into esiyithethileyo.', en: 'Let us summarise what we have said.' },
      ],
      mistake: 'Hedging is not weakness. It shows careful thinking. Slang and half-finished sentences do not belong in a seminar.',
      vocab: [
        { word: 'Ingxoxo', phonetic: "[iŋ'xɔxɔ]", meaning: 'Discussion' },
      ],
    },
    {
      title: 'Oral response to social and literary issues',
      rule: 'For a social issue use four steps: problem, cause, impact, solution. For a literary issue use Point, Evidence, Explanation: state your interpretation, quote the text, then explain why it matters for the theme.',
      workedTitle: 'Social issue: poverty',
      examples: [
        { xh: 'Ingxaki: kukho ubuhlwempu.', en: 'The problem: there is poverty.' },
        { xh: 'Unobangela: akukho misebenzi.', en: 'The cause: there are no jobs.' },
        { xh: 'Isiphumo: abantu bayalamba.', en: 'The impact: people go hungry.' },
        { xh: 'Isisombululo: sifanele sidale imisebenzi.', en: 'The solution: we must create jobs.' },
        { xh: 'Ndicaphula umbhali. Oku kubonisa ukuba ibali lixoxa ngobuhlwempu.', en: 'I quote the writer. This shows that the story is about poverty. (literary: evidence, then explanation)' },
      ],
      mistake: 'Do not retell the whole plot or the author\'s life. After your interpretation, the next step is a quotation, then explain it.',
    },
  ],
  checks: [
    { q: 'Which team speaks first in a debate, and what does a rebuttal do?', a: 'The proposition speaks first. A rebuttal directly challenges a specific point of the other team.' },
    { q: 'Say in isiXhosa: "I do not agree with you, because education is important."', a: 'Andivumelani nawe, kuba imfundo ibalulekile.' },
    { q: 'Give an isiXhosa hedging phrase and say what hedging does.', a: 'Kubonakala ukuba ... (It seems that ...). Hedging states a claim with care.' },
    { q: 'Put in order: solution, cause, problem, impact. Which step comes after your literary interpretation?', a: 'Problem, cause, impact, solution. After the interpretation you quote the text.' },
  ],
};

export default lesson;
