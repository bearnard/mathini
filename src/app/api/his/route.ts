import { NextRequest, NextResponse } from 'next/server';
import { generateItems, persistItems, fallbackItems } from '../../../lib/server/gemini';

export const dynamic = 'force-dynamic';

const PREAMBLE =
  'You are a History teacher creating Grade 6 (CAPS, South Africa) multiple-choice practice for 11-12 year-old learners. ' +
  'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly English explanation. ' +
  'Keep the history factually accurate (correct dates, names and events) and age-appropriate. Be balanced and sensitive when covering colonialism, conflict and apartheid. Use South African spelling. Do not repeat items. ';

const TASKS: Record<string, string> = {
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

export async function POST(req: NextRequest) {
  let body: { task?: string; count?: number };
  try {
    body = (await req.json()) as { task?: string; count?: number };
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const task = body.task ?? '';
  const instruction = TASKS[task];
  if (!instruction) {
    return NextResponse.json({ error: 'Unknown task' }, { status: 400 });
  }

  const count = Math.min(Math.max(body.count ?? 6, 1), 10);
  const prompt = PREAMBLE.replace('{count}', String(count)) + instruction;

  try {
    const items = await generateItems(prompt);
    if (items.length > 0) {
      await persistItems(task, items);
      return NextResponse.json({ items });
    }
    const cached = await fallbackItems(task, count);
    return NextResponse.json({ items: cached });
  } catch {
    const cached = await fallbackItems(task, count);
    if (cached.length > 0) {
      return NextResponse.json({ items: cached });
    }
    return NextResponse.json({ error: 'Generation failed' }, { status: 502 });
  }
}
