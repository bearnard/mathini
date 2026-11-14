import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Electricity from power stations',
    image: { src: '/curriculum/grade6/nst/term3/mains-electricity/diagram.svg', alt: 'power station sending electricity through pylons to a house' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Mains electricity</strong> is made at power stations. It travels along power lines on pylons to homes, schools and factories.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 font-semibold text-slate-700">
          Power station → pylons and power lines → homes and schools
        </div>
        <p className="text-slate-500">All the power lines together are called the <strong>grid</strong>.</p>
      </div>
    ),
  },
  {
    title: 'Inside a coal power station',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Most of South Africa&apos;s electricity comes from burning <strong>coal</strong>. Energy changes form at every step.
        </p>
        <div className="rounded-xl bg-amber-50 p-5 font-semibold text-amber-800">
          Coal burns → heat → water boils → steam → turbine spins → generator → electricity → grid
        </div>
        <p className="text-slate-500">The steam pushes the blades of the <strong>turbine</strong>. The turbine turns a <strong>generator</strong>, which makes the electricity.</p>
      </div>
    ),
  },
  {
    title: 'Renewable and non-renewable sources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Non-renewable</strong> sources (coal, oil, gas) will run out because they take millions of years to form.
        </p>
        <p className="rounded-xl bg-emerald-50 p-5 font-semibold text-emerald-800">
          <strong>Renewable</strong> sources (sun, wind, moving water) are replaced naturally and will not run out.
        </p>
        <p className="text-slate-500">Burning coal also makes smoke and gases that pollute the air. Solar, wind and water power do not.</p>
      </div>
    ),
  },
  {
    title: 'Electricity costs money',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Power stations, pylons and power lines are expensive to build and look after. That is why households <strong>pay</strong> for the electricity they use.
        </p>
        <p className="text-slate-500">A meter measures how much electricity a home uses. Many homes buy it in advance as <strong>prepaid</strong> electricity.</p>
        <p className="rounded-xl bg-slate-50 p-5 font-semibold text-slate-700">The more appliances we run, and the longer, the more it costs.</p>
      </div>
    ),
  },
  {
    title: 'Illegal connections and safety',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mains electricity is much <strong>stronger</strong> than a small cell. It can cause serious shock, burns or death.
        </p>
        <p className="rounded-xl bg-rose-50 p-5 font-semibold text-rose-700">
          An <strong>illegal connection</strong> joins wires to the power lines without permission. It is dangerous and it is stealing.
        </p>
        <p className="text-slate-500">Never touch fallen power lines, damaged cords or put objects in sockets. Keep water away from plugs. Tell an adult.</p>
      </div>
    ),
  },
  {
    title: 'Use electricity wisely',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Saving electricity saves money and saves coal. Switch off <strong>lights</strong> and <strong>appliances</strong> you are not using.
        </p>
        <p className="text-slate-500">Use daylight when you can. Close the fridge door quickly. Unplug chargers when you are done.</p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'Where is most of South Africa’s mains electricity made?', options: ['In power stations', 'In the electricity meter at each house', 'In the plugs on the wall', 'In the pylons along the road'], answer: 'In power stations', explanation: 'Pylons and meters only carry or measure electricity. Power stations make it.' },
  { prompt: 'Which sequence shows how a coal power station makes electricity?', options: ['Coal burns, water boils, steam turns a turbine, generator makes electricity', 'Coal burns, steam is cooled, water turns a generator, turbine makes electricity', 'Coal is crushed, wind blows the turbine, generator makes steam', 'Coal heats the pylons, pylons turn the generator, turbine makes heat'], answer: 'Coal burns, water boils, steam turns a turbine, generator makes electricity', explanation: 'Heat makes steam, steam spins the turbine, and the turbine drives the generator.' },
  { prompt: 'What does the steam do in a power station?', options: ['Spins the turbine', 'Cools the coal down', 'Carries electricity along the wires', 'Fills the generator with electrons'], answer: 'Spins the turbine', explanation: 'Moving steam pushes against the turbine blades and makes them turn.' },
  { prompt: 'Which part of a power station actually produces the electricity?', options: ['The generator', 'The furnace', 'The boiler', 'The chimney'], answer: 'The generator', explanation: 'The furnace and boiler make heat and steam. The generator turns that movement into electricity.' },
  { prompt: 'Which of these is a renewable source of energy for making electricity?', options: ['Wind', 'Coal', 'Natural gas', 'Petrol'], answer: 'Wind', explanation: 'Wind keeps blowing, so it is replaced naturally. Coal, gas and petrol are used up.' },
  { prompt: 'Why is coal called a non-renewable source?', options: ['It takes millions of years to form, so it can run out', 'It can only be used once a year', 'It can only be dug up in South Africa', 'It is too heavy to move to power stations'], answer: 'It takes millions of years to form, so it can run out', explanation: 'We use coal far faster than nature makes it.' },
  { prompt: 'Which pair are BOTH renewable sources?', options: ['Sunlight and moving water', 'Coal and sunlight', 'Wind and oil', 'Moving water and gas'], answer: 'Sunlight and moving water', explanation: 'Sun, wind and moving water are replaced naturally. Coal, oil and gas are not.' },
  { prompt: 'Why do households have to pay for electricity?', options: ['Making and delivering it costs a lot of money', 'The electricity gets used up inside the wires', 'Because the pylons belong to the family', 'Because electricity is only made at night'], answer: 'Making and delivering it costs a lot of money', explanation: 'Power stations, pylons, power lines and workers all need to be paid for.' },
  { prompt: 'Which family will most likely pay the highest electricity bill?', options: ['One that leaves many appliances on all day', 'One that has a very big garden', 'One that lives far from the power station', 'One that has many windows'], answer: 'One that leaves many appliances on all day', explanation: 'Using more appliances for longer uses more electricity, so it costs more.' },
  { prompt: 'What is an illegal electricity connection?', options: ['Joining wires to the power lines without permission', 'Plugging a kettle into a wall socket', 'Buying prepaid electricity from a shop', 'Fitting a new switch in a house'], answer: 'Joining wires to the power lines without permission', explanation: 'It is stealing electricity and it is very dangerous. People have been killed doing it.' },
  { prompt: 'A cable is lying on the ground after a storm and sparks are coming from it. What should you do?', options: ['Stay far away and tell an adult', 'Cover it with a dry blanket', 'Push it aside with a wooden stick', 'Pour water on it to cool it down'], answer: 'Stay far away and tell an adult', explanation: 'Never go near fallen power lines. Even wood or a blanket may not protect you.' },
  { prompt: 'Which is a good way to save electricity at home?', options: ['Switch off lights in empty rooms', 'Keep the fridge door open to keep it cool', 'Leave chargers switched on at the wall', 'Use two heaters in one small room'], answer: 'Switch off lights in empty rooms', explanation: 'Lights that are off use no electricity.' },
  { prompt: 'Why is mains electricity more dangerous than a torch cell?', options: ['It is much stronger and can cause a deadly shock', 'It is always hotter than a torch cell', 'It flows in only one direction', 'It is made from coal'], answer: 'It is much stronger and can cause a deadly shock', explanation: 'A small cell cannot hurt you, but mains electricity can kill.' },
  { prompt: 'Why is it unsafe to use a plug or switch with wet hands?', options: ['Water can let electricity pass through your body', 'Water makes the appliance heavier', 'Water makes the wires cold', 'Water stops the appliance from working'], answer: 'Water can let electricity pass through your body', explanation: 'Water (especially with dirt or salt in it) conducts electricity, so you can get a shock.' },
  { prompt: 'Which is a problem with burning coal to make electricity?', options: ['It pollutes the air', 'It makes the electricity weaker', 'It makes the pylons rust', 'It uses up the wind'], answer: 'It pollutes the air', explanation: 'Burning coal gives off smoke and gases that harm air quality and health.' },
];

const MainsElectricity = () => (
  <NstTopic title="Mains Electricity & Safety" subtitle="How electricity reaches us and how to stay safe" learnSteps={learnSteps} task="mains-electricity" bank={bank} />
);

export default MainsElectricity;
