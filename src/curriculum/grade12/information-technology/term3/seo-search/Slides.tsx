import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Improving searching: semantic and mediated search',
    content: slide(
      <>
        <Rule>A basic search matches the words you type. Semantic search tries to understand the meaning and intention behind the words. Mediated search uses a person or a system between you and the results to help find what you need.</Rule>
        <KeyTable
          title="Two ways of improving a search"
          head={['Kind', 'How it helps']}
          aria="Two ways of improving a search. Semantic search: looks at meaning, context and intention, so that a search for jaguar speed gives facts about the animal, not the car, when the context points to animals. Mediated search: a person or a system helps with the search, for example a librarian who chooses the best sources, or a help service that guides the questions."
          rows={[
            ['Semantic search', 'Understands meaning, context and intention'],
            ['Mediated search', 'A person or system helps to find the best results'],
          ]}
        />
        <Worked
          steps={[
            <>A learner types &ldquo;how fast is a jaguar&rdquo;. A semantic search understands that this is a question about an animal and gives its speed.</>,
            <>A school librarian helping a learner to find reliable sources for a project is an example of mediated search.</>,
          ]}
        />
        <Mistake>Thinking that the first result is the best. Check the source and the date of a result.</Mistake>
      </>,
    ),
  },
  {
    title: 'What search engine optimisation (SEO) is',
    content: slide(
      <>
        <Rule>Search engine optimisation (SEO) is improving a website so that it appears higher in the unpaid results of a search engine. A higher place usually means more visitors.</Rule>
        <KeyTable
          title="Things that help a page rank"
          head={['Factor', 'Why it helps']}
          aria="Things that help a web page rank higher. Useful, original content: visitors stay and find answers. Clear page titles and descriptions: the search engine understands the page. Natural use of the words people search for: the page matches searches. Fast, mobile-friendly pages: visitors do not leave. Links from reputable sites: they show that others trust the page."
          rows={[
            ['Useful, original content', 'Visitors find answers'],
            ['Clear titles and descriptions', 'The search engine understands the page'],
            ['The words people search for, used naturally', 'The page matches searches'],
            ['Fast, mobile-friendly pages', 'Visitors stay'],
            ['Links from reputable sites', 'They show trust'],
          ]}
        />
        <Worked
          steps={[
            <>A bakery website has a clear title (&ldquo;Fresh bread in Gqeberha&rdquo;), a description, photos that load quickly and a page that works on a phone. It ranks higher for local searches.</>,
            <>Paid adverts are a different thing: SEO improves the unpaid results.</>,
          ]}
        />
        <Mistake>Thinking that SEO means paying the search engine. It means improving the site, so that its place in the unpaid results rises.</Mistake>
      </>,
    ),
  },
  {
    title: 'Honest and dishonest SEO',
    content: slide(
      <>
        <Rule>Honest SEO improves the site for visitors. Dishonest methods try to fool the search engine, and search engines punish them by lowering or removing the site.</Rule>
        <KeyTable
          title="Honest and dishonest methods"
          head={['Method', 'Honest or not']}
          aria="Honest and dishonest SEO methods. Writing helpful content: honest. Clear titles and a fast site: honest. Keyword stuffing, repeating a word many times to fool the engine: dishonest. Hidden text, words in the page colour that visitors cannot see: dishonest. Link farms, buying or swapping many worthless links: dishonest."
          rows={[
            ['Helpful content', 'Honest'],
            ['Clear titles, fast site', 'Honest'],
            ['Keyword stuffing', 'Dishonest'],
            ['Hidden text', 'Dishonest'],
            ['Link farms', 'Dishonest'],
          ]}
        />
        <Worked
          steps={[
            <>A page that repeats &ldquo;cheap shoes&rdquo; fifty times is keyword stuffing. Visitors find it hard to read, and the search engine may lower its rank.</>,
            <>An honest page uses the phrase where it fits and explains the shoes well.</>,
          ]}
        />
        <Mistake>Believing that tricks last. Search engines change their rules to catch them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does semantic search try to understand?</>,
          <>Give an example of mediated search.</>,
          <>What does SEO stand for and what does it do?</>,
          <>Give one dishonest SEO method.</>,
        ]}
        answers={[
          <>The meaning and intention behind the words.</>,
          <>A librarian helping to find reliable sources.</>,
          <>Search engine optimisation. It improves a site so that it ranks higher in the unpaid results.</>,
          <>Keyword stuffing, hidden text or link farms.</>,
        ]}
      />,
    ),
  },
];
