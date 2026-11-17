import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does semantic search try to understand?",
    options: ["The meaning behind words", "The font used on the page", "The size of the stored file", "The speed of the router"],
    answer: "The meaning behind words",
    explanation: "Semantic search looks at meaning, context and intention.",
  },
  {
    prompt: "Which is an example of semantic search?",
    options: ["Seeing a question is about animals", "Matching typed letters one by one", "Sorting results by their page size", "Counting the pages in a book"],
    answer: "Seeing a question is about animals",
    explanation: "It uses the context to interpret what the user means.",
  },
  {
    prompt: "What is mediated search?",
    options: ["A search that has no results", "A helper guides the search", "A search that is done offline", "A search that deletes the data"],
    answer: "A helper guides the search",
    explanation: "A go-between helps find the best results.",
  },
  {
    prompt: "Which is an example of mediated search?",
    options: ["A librarian choosing sources", "A learner typing a single word", "A phone saving a new photo", "A router that restarts itself"],
    answer: "A librarian choosing sources",
    explanation: "A person helps to choose reliable sources.",
  },
  {
    prompt: "What does SEO stand for?",
    options: ["Secure email output tool", "Server error option list", "Single entry online form", "Search engine optimising"],
    answer: "Search engine optimising",
    explanation: "SEO improves a site's place in search results.",
  },
  {
    prompt: "What is the aim of SEO?",
    options: ["To pay for a top advert slot", "To delete other websites online", "To slow down the search engine", "Rank higher in unpaid results"],
    answer: "Rank higher in unpaid results",
    explanation: "A higher rank brings more visitors.",
  },
  {
    prompt: "Which helps a page rank higher honestly?",
    options: ["Useful, original content", "Hidden text", "Repeating a word endlessly", "Buying worthless links"],
    answer: "Useful, original content",
    explanation: "Helpful content keeps visitors and answers searches.",
  },
  {
    prompt: "Which is part of good SEO?",
    options: ["A completely blank page", "A link that is broken", "A clear page title", "A page that loads very slowly"],
    answer: "A clear page title",
    explanation: "A clear title tells the search engine what the page is about.",
  },
  {
    prompt: "Why does a mobile-friendly page help?",
    options: ["It hides the page from view", "Visitors stay on a phone", "It removes the adverts on it", "It lowers the cost of data"],
    answer: "Visitors stay on a phone",
    explanation: "Many people search on phones.",
  },
  {
    prompt: "Why do links from reputable sites help?",
    options: ["They show others trust it", "They hide the page from users", "They slow the page for users", "They delete the errors on it"],
    answer: "They show others trust it",
    explanation: "Trusted links raise the page's standing.",
  },
  {
    prompt: "What is keyword stuffing?",
    options: ["Using a word once in a title", "Choosing a clear and honest title", "Repeating a word to cheat", "Adding a photo to a web page"],
    answer: "Repeating a word to cheat",
    explanation: "It is a dishonest SEO method.",
  },
  {
    prompt: "What is hidden text?",
    options: ["Words only the engine can see", "A password typed into a form", "A file that was deleted by mistake", "A short title above a page"],
    answer: "Words only the engine can see",
    explanation: "It is a dishonest SEO method.",
  },
  {
    prompt: "What may a search engine do to a site that cheats?",
    options: ["Raise its rank for the cheat", "Lower its rank or remove it", "Pay the owner of the site", "Speed up the page of the site"],
    answer: "Lower its rank or remove it",
    explanation: "Search engines punish dishonest methods.",
  },
  {
    prompt: "How is SEO different from a paid advert?",
    options: ["It improves the unpaid results", "It is paid for in rand each time", "It is an advert for a firm", "It shows no results to a user"],
    answer: "It improves the unpaid results",
    explanation: "SEO works on the unpaid results, not on adverts.",
  },
];

const SeoSearch = () => (
  <CapsSubjectTopic
    title="Better Searching and SEO"
    subtitle="Semantic and mediated search, search engine optimisation, and honest and dishonest methods"
    learnSteps={learnSteps}
    task="gr12-seo-search-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default SeoSearch;
