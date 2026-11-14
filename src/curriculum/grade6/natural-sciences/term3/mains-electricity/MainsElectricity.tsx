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

export const bank: NstItem[] = [
  { prompt: 'Where is most of South Africa’s mains electricity made?', options: ['In power stations', 'In the electricity meter at each house', 'In the plugs on the wall', 'In the pylons along the road'], answer: 'In power stations', explanation: 'Pylons and meters only carry or measure electricity. Power stations make it.' },
  { prompt: 'Which sequence shows how a coal power station makes electricity?', options: ['Coal burns, water boils, steam turns a turbine, generator makes electricity', 'Coal burns, steam is cooled, water turns a generator, turbine makes electricity', 'Coal is crushed, wind blows the turbine, then the generator makes steam', 'Coal heats the pylons, pylons turn the generator, then the turbine makes heat'], answer: 'Coal burns, water boils, steam turns a turbine, generator makes electricity', explanation: 'Heat makes steam, steam spins the turbine, and the turbine drives the generator.' },
  { prompt: 'What does the steam do in a power station?', options: ['Spins the turbine', 'Cools the coal down', 'Carries electricity along the wires', 'Fills the generator with electrons'], answer: 'Spins the turbine', explanation: 'Moving steam pushes against the turbine blades and makes them turn.' },
  { prompt: 'Which part of a power station actually produces the electricity?', options: ['The generator', 'The furnace that burns the coal', 'The boiler that heats the water', 'The chimney that lets smoke out'], answer: 'The generator', explanation: 'The furnace and boiler make heat and steam. The generator turns that movement into electricity.' },
  { prompt: 'Which of these is a renewable source of energy for making electricity?', options: ['Wind', 'Coal', 'Natural gas', 'Petrol'], answer: 'Wind', explanation: 'Wind keeps blowing, so it is replaced naturally. Coal, gas and petrol are used up.' },
  { prompt: 'Why is coal called a non-renewable source?', options: ['It takes millions of years to form', 'It can only be burned once in each power station', 'It can only be dug up in a few places in South Africa', 'It is too heavy to be moved to every power station'], answer: 'It takes millions of years to form', explanation: 'We use coal far faster than nature can make it, so it can run out.' },
  { prompt: 'Which pair are BOTH renewable sources?', options: ['Sunlight and moving water', 'Coal and sunlight from the sky', 'Wind and oil from under the ground', 'Moving water and natural gas'], answer: 'Sunlight and moving water', explanation: 'Sun, wind and moving water are replaced naturally. Coal, oil and gas are not.' },
  { prompt: 'Why do households have to pay for electricity?', options: ['Making and delivering it costs money', 'The electricity slowly gets used up inside the wires', 'The pylons outside the house belong to the family', 'Electricity can only be made at night, when it is dark'], answer: 'Making and delivering it costs money', explanation: 'Power stations, pylons, power lines and workers all need to be paid for.' },
  { prompt: 'Which family will most likely pay the highest electricity bill?', options: ['One that leaves many appliances on all day', 'One that has a very big garden around the house', 'One that lives very far from the power station', 'One that has many large windows in every room'], answer: 'One that leaves many appliances on all day', explanation: 'Using more appliances for longer uses more electricity, so it costs more.' },
  { prompt: 'What is an illegal electricity connection?', options: ['Joining wires to the power lines without permission', 'Plugging a kettle into a wall socket at home when you want tea', 'Buying prepaid electricity from a shop or online each month', 'Fitting a new light switch in the wall of a house'], answer: 'Joining wires to the power lines without permission', explanation: 'It is stealing electricity and it is very dangerous. People have been killed doing it.' },
  { prompt: 'A cable is lying on the ground after a storm and sparks are coming from it. What should you do?', options: ['Stay far away and tell an adult', 'Cover it with a dry blanket to stop the sparks', 'Push it aside with a long wooden stick', 'Pour water on it to cool it down quickly'], answer: 'Stay far away and tell an adult', explanation: 'Never go near fallen power lines. Even wood or a blanket may not protect you.' },
  { prompt: 'Which is a good way to save electricity at home?', options: ['Switch off lights in empty rooms', 'Keep the fridge door open to keep it cool', 'Leave chargers switched on at the wall', 'Use two heaters in one small room'], answer: 'Switch off lights in empty rooms', explanation: 'Lights that are off use no electricity.' },
  { prompt: 'Why is mains electricity more dangerous than a torch cell?', options: ['It is much stronger and can kill', 'It is always much hotter than a torch cell is', 'It flows in only one direction around the house', 'It is made from coal, which is poisonous'], answer: 'It is much stronger and can kill', explanation: 'A torch cell is too weak to give you a dangerous shock, but mains electricity can kill.' },
  { prompt: 'Why is it unsafe to use a plug or switch with wet hands?', options: ['Water lets electricity pass through you', 'Water makes the appliance too heavy to hold safely', 'Water makes the wires too cold to carry electricity', 'Water always stops the appliance from working'], answer: 'Water lets electricity pass through you', explanation: 'Water (especially with dirt or salt in it) conducts electricity, so you can get a shock.' },
  { prompt: 'Which is a problem with burning coal to make electricity?', options: ['It pollutes the air', 'It makes the electricity weaker', 'It makes the pylons rust', 'It uses up the wind'], answer: 'It pollutes the air', explanation: 'Burning coal gives off smoke and gases that harm air quality and health.' },
  { kind: 'order', section: 'power-station', prompt: 'Put the steps of a coal power station in order, from first to last.', options: ['Coal is burned in the furnace', 'The heat boils water and makes steam', 'The steam spins the turbine', 'The turbine drives the generator', 'The generator produces electricity'], answer: 'Coal is burned in the furnace|The heat boils water and makes steam|The steam spins the turbine|The turbine drives the generator|The generator produces electricity', explanation: 'Heat makes steam, steam spins the turbine, and the turbine drives the generator, which makes the electricity.' },
  { kind: 'order', section: 'power-station', prompt: 'Put the journey of mains electricity in order, from the power station to a lamp at home.', options: ['The power station makes electricity', 'Pylons carry it along the power lines', 'Cables bring it into the house', 'It passes through the electricity meter', 'The lamp uses it to give light'], answer: 'The power station makes electricity|Pylons carry it along the power lines|Cables bring it into the house|It passes through the electricity meter|The lamp uses it to give light', explanation: 'Electricity is made at the power station, travels along power lines, enters the house through the meter, and is then used by appliances.' },
  { kind: 'explain', section: 'illegal-connections', prompt: 'Explain why illegal electrical connections are dangerous.', options: ['Mains electricity is strong enough to cause serious shocks, burns or death', 'Bare or badly joined wires can start fires'], answer: 'Mains electricity is strong enough to cause serious shocks, burns or death|Bare or badly joined wires can start fires', explanation: 'Illegal connections have no safe insulation or protection, which is why they have hurt and killed many people.' },
  { kind: 'explain', section: 'electricity-cost', prompt: 'Explain why some electrical appliances cost more to use than others.', options: ['Different appliances use different amounts of electricity', 'The more electricity an appliance uses, the more it costs to run', 'An appliance that is on for longer uses more electricity, so a heater or kettle used for hours costs more than a lamp'], answer: 'Different appliances use different amounts of electricity|The more electricity an appliance uses, the more it costs to run|An appliance that is on for longer uses more electricity, so a heater or kettle used for hours costs more than a lamp', explanation: 'Cost depends on how much electricity an appliance uses and for how long.' },
  { kind: 'explain', section: 'fossil-fuels', prompt: 'What are fossil fuels, and why are they called non-renewable?', options: ['Fossil fuels are fuels such as coal, oil and natural gas', 'They formed over millions of years from the remains of ancient plants and animals', 'They are non-renewable because we use them much faster than they form, so they will run out'], answer: 'Fossil fuels are fuels such as coal, oil and natural gas|They formed over millions of years from the remains of ancient plants and animals|They are non-renewable because we use them much faster than they form, so they will run out', explanation: 'Coal is the fossil fuel most used in South African power stations.' },
  { kind: 'explain', section: 'saving-energy', prompt: 'Describe one way to save electricity in your home.', options: ['Any sensible way, for example switching off lights and appliances you are not using, or using a solar water heater', 'You say why it helps: it uses less electricity, so it saves money and saves coal'], answer: 'Any sensible way, for example switching off lights and appliances you are not using, or using a solar water heater|You say why it helps: it uses less electricity, so it saves money and saves coal', explanation: 'Using less electricity saves money and saves coal.' },
  { section: 'fossil-fuels', prompt: 'Which group contains only fossil fuels?', options: ['Coal, oil and natural gas', 'Coal, wood and wind', 'Oil, sunlight and natural gas', 'Natural gas, moving water and coal'], answer: 'Coal, oil and natural gas', explanation: 'Fossil fuels formed from ancient plants and animals. Wind, sunlight and moving water are renewable, and wood comes from living trees.' },

];

const MainsElectricity = () => (
  <NstTopic title="Mains Electricity & Safety" subtitle="How electricity reaches us and how to stay safe" learnSteps={learnSteps} task="mains-electricity" bank={bank} />
);

export default MainsElectricity;
