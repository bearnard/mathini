import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Electricity from power stations',
    image: { src: '/curriculum/grade6/nst/term3/mains-electricity/diagram.svg', alt: 'power station sending electricity through pylons to a house' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Mains electricity</strong> is made at power stations and travels along power lines on pylons to homes and schools.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 font-semibold text-slate-700">
          Power station → power lines and pylons → homes and schools
        </div>
      </div>
    ),
  },
  {
    title: 'Mains electricity is dangerous',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mains electricity is much <strong>stronger</strong> than a small cell. It can cause serious shock, burns or death.
        </p>
        <p className="rounded-xl bg-rose-50 p-5 font-semibold text-rose-700">
          Never put objects into plug sockets and never touch damaged cords.
        </p>
      </div>
    ),
  },
  {
    title: 'Use electricity safely and wisely',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Save electricity by switching off <strong>lights</strong> and <strong>appliances</strong> when you do not need them.
        </p>
        <p className="text-slate-500">
          Keep water away from plugs and ask an adult for help with electrical problems.
        </p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'Where is mains electricity usually generated?', options: ['At power stations', 'Inside pencils', 'In rain clouds only', 'Under classroom desks'], answer: 'At power stations', explanation: 'Power stations generate electricity for towns, homes and schools.' },
  { prompt: 'How does electricity travel from power stations to many homes?', options: ['Through power lines on pylons', 'Through drinking straws', 'In school bags', 'Only by bicycle'], answer: 'Through power lines on pylons', explanation: 'Power lines carry electricity over long distances.' },
  { prompt: 'Why must we be careful with mains electricity?', options: ['It is strong and can be dangerous', 'It is always cold water', 'It is made of paper', 'It cannot move'], answer: 'It is strong and can be dangerous', explanation: 'Mains electricity can cause serious electric shock.' },
  { prompt: 'Which action is safe?', options: ['Ask an adult to help with a damaged plug', 'Put a metal object into a socket', 'Touch a bare wire', 'Use an appliance with wet hands'], answer: 'Ask an adult to help with a damaged plug', explanation: 'Adults should handle damaged plugs or cords safely.' },
  { prompt: 'What should you do with lights when leaving an empty room?', options: ['Switch them off', 'Leave them on all day', 'Cover them with paper', 'Splash them with water'], answer: 'Switch them off', explanation: 'Switching off lights saves electricity.' },
  { prompt: 'Which item is part of the route from power station to home?', options: ['Pylon', 'Flower pot', 'Lunch box', 'Soccer ball'], answer: 'Pylon', explanation: 'Pylons hold up power lines that carry electricity.' },
  { prompt: 'What should you keep away from plugs and electrical appliances?', options: ['Water', 'Dry air', 'Daylight', 'A maths book'], answer: 'Water', explanation: 'Water can make electric shock more likely.' },
  { prompt: 'Which choice saves electricity?', options: ['Switch off appliances not in use', 'Open the fridge for a long time', 'Leave the TV on overnight', 'Turn on every light in the house'], answer: 'Switch off appliances not in use', explanation: 'Appliances use electricity, so switch them off when not needed.' },
  { prompt: 'What is mains electricity used for in homes and schools?', options: ['Powering lights and appliances', 'Growing hair instantly', 'Making wood disappear', 'Turning glass into metal'], answer: 'Powering lights and appliances', explanation: 'Mains electricity supplies energy to many lights and appliances.' },
];

const MainsElectricity = () => (
  <NstTopic title="Mains Electricity & Safety" subtitle="How electricity reaches us and how to stay safe" learnSteps={learnSteps} task="mains-electricity" bank={bank} />
);

export default MainsElectricity;
