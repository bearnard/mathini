import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FeatureChain } from '../../../../../components/diagrams/english/g9Pictures';
import { CONTEXT, DIALOGUE, PUNCTUATION, SHORT, THEME, VOICE, sentenceLengths } from '../../../../../components/diagrams/english/featureEffect';

// The passages are original and live in featureEffect.ts (tested in featureEffect.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const lengths = sentenceLengths(SHORT.evidence);

export const learnSteps: LearnStep[] = [
  {
    title: 'Feature, evidence, effect',
    content: slide(
      <>
        <Rule>A strong answer joins language and literature: name the feature, quote the evidence, then explain the effect it has on the reader. Naming alone earns little.</Rule>
        <FeatureChain answer={SHORT} />
        <Worked
          title="Answer an integrated question"
          steps={[
            <>Read: “{SHORT.evidence}” The sentences have {lengths.join(', ')} words.</>,
            <>Feature: {SHORT.feature.toLowerCase()}. Effect: they {SHORT.effect}.</>,
            <>Full answer: <strong>“{SHORT.feature} create urgency and match Thandi’s panic.”</strong></>,
          ]}
        />
        <Mistake>Saying only “short sentences are used here”. That names the technique but never says what it does.</Mistake>
      </>,
    ),
  },
  {
    title: 'Punctuation shapes meaning',
    content: slide(
      <>
        <Rule>Punctuation creates rhythm and emphasis and makes the meaning clear. The same words can sound calm, angry or guilty.</Rule>
        <Worked
          title="One sentence, three punctuation choices"
          steps={[
            <>“{PUNCTUATION.plain}” A calm, flat statement.</>,
            <>“{PUNCTUATION.shout}” The exclamation mark adds anger or strong feeling.</>,
            <>“{PUNCTUATION.pause}” The ellipsis makes a pause, which can suggest hesitation or guilt.</>,
          ]}
        />
        <Mistake>Treating punctuation as decoration that only makes the page neat. Change it and you can change what the reader feels.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dialogue reveals character',
    content: slide(
      <>
        <Rule>What a character says, and how, reveals personality, level of education and emotional state. A grammar error in dialogue is often deliberate: it shows the character’s background through speech.</Rule>
        <Worked
          title="Read two lines of dialogue"
          steps={[
            <>{DIALOGUE.casual} The non-standard grammar (“we was”) suggests an informal speaker, perhaps with little formal schooling.</>,
            <>{DIALOGUE.nervous} The broken start and ellipsis show nerves and guilt.</>,
          ]}
        />
        <Mistake>Calling a grammar error in dialogue the author’s mistake. In dialogue it can be a choice that characterises the speaker. In the narration it would be an error.</Mistake>
      </>,
    ),
  },
  {
    title: 'Active voice puts the action first',
    content: slide(
      <>
        <Rule>In the active voice the doer comes first, so the action feels direct and powerful. The passive can hide who acted.</Rule>
        <Worked
          title="Compare two versions"
          steps={[
            <>Active: “{VOICE.active}” We see who acted: the dog.</>,
            <>Passive: “{VOICE.passive}” The doer has disappeared.</>,
            <>A writer who wants fast, forceful action chooses the active voice.</>,
          ]}
        />
        <Mistake>Saying the active voice is dull or confusing. It is usually the clearer and stronger choice, and it stresses the character’s action.</Mistake>
      </>,
    ),
  },
  {
    title: 'Themes and words in context',
    content: slide(
      <>
        <Rule>A theme is a central idea explored in one text or across several. Context-based vocabulary means working out a word’s meaning from the text around it, not reaching for a dictionary every time.</Rule>
        <Worked
          title="Find the theme and the meaning"
          steps={[
            <>“{THEME[0]}” “{THEME[1]}” Both events show sharing, so a theme is <strong>kindness and sharing</strong>.</>,
            <>“{CONTEXT.sentence}” The clues “empty” and “cracked” show how bad things were, so “{CONTEXT.word}” means <strong>{CONTEXT.meaning}</strong>.</>,
          ]}
        />
        <Mistake>Confusing a theme with the plot or the title. A theme is an idea (such as sharing), not an event or a name.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What three parts make a full answer to an integrated question?</>,
          <>Why might a grammar error appear in a character’s dialogue?</>,
          <>What is the effect of the active voice?</>,
          <>“The soup was scalding, so Mpho waited.” Use the context to say what “scalding” means.</>,
        ]}
        answers={[
          <>The feature, the evidence from the text, and its effect.</>,
          <>It can reveal the character’s background, education level or emotional state.</>,
          <>It is direct and powerful and stresses the character’s action.</>,
          <>Very hot: Mpho had to wait for it to cool.</>,
        ]}
      />,
    ),
  },
];

