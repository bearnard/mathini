import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1235", "title": "Mali Empire founded", "description": "Sundiata Keita defeated Sosso forces at the Battle of Kirina and established the Mali Empire. This created the political base for later wealth from trans-Saharan trade."},
            {"date": "c. 1285", "title": "Timbuktu joins Mali", "description": "Mali brought Timbuktu under its influence in the late thirteenth century. The city grew as an important trading point linking the Sahara and West Africa."},
            {"date": "1312", "title": "Mansa Musa begins rule", "description": "Mansa Musa became emperor of Mali and expanded its fame and influence. His reign is strongly associated with Mali's wealth, Islam, and learning."},
            {"date": "1324–1325", "title": "Mansa Musa makes hajj", "description": "Mansa Musa travelled to Mecca on a famous pilgrimage, displaying Mali's enormous gold wealth. News of the journey spread across North Africa and the Mediterranean world."},
            {"date": "1327", "title": "Djinguereber Mosque built", "description": "A major mosque was built in Timbuktu during Mansa Musa's reign. It symbolised the city's importance as a centre of Islam, scholarship, and architecture."},
            {"date": "14th century", "title": "Timbuktu becomes learning centre", "description": "Timbuktu became known for scholars, manuscripts, and Islamic study. Trade wealth helped support schools and intellectual life in the city."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Mali grew through trade and leadership',
    image: {
      src: '/curriculum/grade7/his/term1/mali-and-timbuktu-in-the-fourteenth-century/diagram.webp',
      alt: 'Grade 7 learners exploring trans-Saharan camel trade routes and the city of Timbuktu',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Mali Empire became powerful through <strong>trans-Saharan trade</strong> in gold and salt. Under{' '}
          <strong>Mansa Musa</strong>, Timbuktu became famous for religion, scholarship, and exchange.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which route helped Mali become wealthy in the fourteenth century?',
    options: ['Trans-Saharan trade routes', 'Silk Road sea lanes only', 'Great Trek wagon trails', 'Cape railway routes'],
    answer: 'Trans-Saharan trade routes',
    explanation: 'Mali gained wealth from trade routes crossing the Sahara Desert.',
  },
  {
    prompt: 'Which leader is most associated with Mali’s wealth and influence?',
    options: ['Mansa Musa', 'Shaka Zulu', 'Bartolomeu Dias', 'Jan van Riebeeck'],
    answer: 'Mansa Musa',
    explanation: 'Mansa Musa is widely known for Mali’s prosperity and influence.',
  },
  {
    prompt: 'Why were camels important in trans-Saharan trade?',
    options: ['They could carry goods long distances in desert conditions', 'They could mine gold directly', 'They were used as currency only', 'They built city walls quickly'],
    answer: 'They could carry goods long distances in desert conditions',
    explanation: 'Camel caravans made long desert journeys possible.',
  },
  {
    prompt: 'What made Timbuktu an important city in this period?',
    options: ['It was a centre of learning and trade', 'It controlled all Atlantic shipping', 'It was the first industrial city in Africa', 'It had no links to religion'],
    answer: 'It was a centre of learning and trade',
    explanation: 'Timbuktu was known for trade, manuscripts, and learning centres.',
  },
  {
    prompt: 'Which item was commonly traded across the Sahara?',
    options: ['Gold and salt', 'Tea and coffee beans only', 'Coal and oil', 'Cars and engines'],
    answer: 'Gold and salt',
    explanation: 'Gold and salt were key trade goods in trans-Saharan exchange.',
  },
  {
    prompt: 'Which skill is best used when arranging events from oldest to newest?',
    options: ['Sequencing events', 'Estimating area', 'Classifying triangles', 'Conjugating verbs'],
    answer: 'Sequencing events',
    explanation: 'Sequencing means putting historical events in chronological order.',
  },
  {
    prompt: 'If a source says Timbuktu had many manuscripts, what does this suggest?',
    options: ['Learning and scholarship were important there', 'People could not read at all', 'Trade did not happen there', 'The city had no religious life'],
    answer: 'Learning and scholarship were important there',
    explanation: 'Manuscripts are written records linked to study and teaching.',
  },
  {
    prompt: 'Which statement best shows cause and consequence in this topic?',
    options: ['Successful trade increased wealth, which supported centres of learning', 'Deserts disappeared, so trade ended', 'Caravans caused oceans to shrink', 'Mali became powerful because of railways'],
    answer: 'Successful trade increased wealth, which supported centres of learning',
    explanation: 'Trade wealth helped support cities such as Timbuktu and its learning institutions.',
  },
];

const MaliAndTimbuktuInTheFourteenthCentury = () => (
  <CapsSubjectTopic
    title="Mali and Timbuktu in the Fourteenth Century"
    subtitle="Trans-Saharan trade, Mansa Musa, Islamic learning, and source analysis"
    learnSteps={learnSteps}
    task="gr7-mali-and-timbuktu-in-the-fourteenth-century-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default MaliAndTimbuktuInTheFourteenthCentury;
