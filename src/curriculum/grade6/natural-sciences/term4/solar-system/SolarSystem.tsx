import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Meet the Solar System',
    image: { src: '/curriculum/grade6/nst/term4/solar-system/diagram.svg', alt: 'The Sun and eight planets in order' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Sun</strong> is a <strong>star</strong>. It makes its own light and heat. Eight <strong>planets</strong> move around it in paths called <strong>orbits</strong>.
        </p>
        <p className="rounded-xl bg-amber-50 p-5 font-semibold text-amber-800">
          Planets do not make light. We see them because they <strong>reflect</strong> sunlight.
        </p>
        <p className="text-slate-500">The Sun&apos;s <strong>gravity</strong> pulls on the planets and keeps them in their orbits.</p>
      </div>
    ),
  },
  {
    title: 'Planets in order',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          From the Sun outwards: <strong>Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus</strong> and <strong>Neptune</strong>.
        </p>
        <p className="rounded-xl bg-slate-50 p-5 text-slate-700">
          Make up a sentence to remember them, such as <em>My Very Eager Mother Just Served Us Noodles</em>.
        </p>
        <p className="text-slate-500">Mercury is closest to the Sun. Neptune is the farthest planet.</p>
      </div>
    ),
  },
  {
    title: 'Inner and outer planets',
    content: (
      <div className="space-y-4 text-center">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-5 text-orange-800">
            <strong>Inner planets</strong>
            <br />Mercury, Venus, Earth, Mars
            <br />Small and <strong>rocky</strong>, with a solid surface
          </div>
          <div className="rounded-xl bg-sky-50 p-5 text-sky-800">
            <strong>Outer planets</strong>
            <br />Jupiter, Saturn, Uranus, Neptune
            <br />Very large <strong>gas giants</strong>, with no solid surface to stand on
          </div>
        </div>
        <p className="text-slate-500">The <strong>asteroid belt</strong> lies between Mars and Jupiter.</p>
      </div>
    ),
  },
  {
    title: 'Planet facts to know',
    content: (
      <div className="space-y-4 text-center">
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-left text-slate-700">
          <span><strong>Jupiter:</strong> the largest planet</span>
          <span><strong>Venus:</strong> the hottest planet. Its thick atmosphere traps heat.</span>
          <span><strong>Mars:</strong> the red planet, because its soil has a lot of rust</span>
          <span><strong>Saturn:</strong> famous for its rings of ice and rock</span>
          <span><strong>Neptune:</strong> the farthest planet, very cold</span>
          <span><strong>Earth:</strong> the only planet we know has life</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Far from the Sun: colder, longer years',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The farther a planet is from the Sun, the <strong>colder</strong> it is and the <strong>longer</strong> its year (one orbit of the Sun).
        </p>
        <div className="rounded-xl bg-slate-50 p-5 font-semibold text-slate-700">
          Earth: 1 year. Mars: almost 2 Earth years. Neptune: about 165 Earth years.
        </div>
        <p className="text-slate-500">Other objects: <strong>dwarf planets</strong> (like Pluto), <strong>asteroids</strong>, <strong>meteors</strong> and <strong>comets</strong>.</p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'What is the Sun?', options: ['A star that makes its own light', 'A planet that is extremely hot all over', 'A moon that only reflects light from Earth', 'A comet that never moves from its place'], answer: 'A star that makes its own light', explanation: 'The Sun is a star. Planets and moons only reflect its light.' },
  { prompt: 'Why can we see the planets in the night sky?', options: ['They reflect light from the Sun', 'They make their own light like stars', 'They are lit by the light of the Moon', 'They glow because they are hot inside'], answer: 'They reflect light from the Sun', explanation: 'Planets do not make light. They reflect sunlight.' },
  { prompt: 'What keeps the planets in orbit around the Sun?', options: ['The Sun\u2019s gravity', 'The wind in space', 'The Moon pulling on them', 'The spinning of the Earth'], answer: 'The Sun\u2019s gravity', explanation: 'Gravity from the Sun pulls on each planet and keeps it circling.' },
  { prompt: 'Which list shows the planets in order from the Sun?', options: ['Mercury, Venus, Earth, Mars, Jupiter', 'Mercury, Earth, Venus, Mars, Jupiter', 'Venus, Mercury, Earth, Mars, Jupiter', 'Mercury, Venus, Earth, Jupiter, Mars'], answer: 'Mercury, Venus, Earth, Mars, Jupiter', explanation: 'The order is Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.' },
  { prompt: 'Which planet comes after Saturn when moving away from the Sun?', options: ['Uranus', 'Jupiter', 'Neptune', 'Mars'], answer: 'Uranus', explanation: 'The order is Jupiter, Saturn, Uranus, Neptune.' },
  { prompt: 'Which group contains only inner (rocky) planets?', options: ['Mercury, Venus, Earth and Mars', 'Venus, Earth, Mars and Jupiter', 'Earth, Mars, Jupiter and Saturn', 'Mercury, Mars, Saturn and Neptune'], answer: 'Mercury, Venus, Earth and Mars', explanation: 'The four planets closest to the Sun are small and rocky.' },
  { prompt: 'Which statement about the outer planets is correct?', options: ['They are large gas giants with no solid surface', 'They are small and rocky, just like the planet Earth', 'They are all closer to the Sun than Earth is today', 'They have no gravity at all because they are made of gas'], answer: 'They are large gas giants with no solid surface', explanation: 'Jupiter, Saturn, Uranus and Neptune are huge and made mostly of gas.' },
  { prompt: 'Which is the largest planet in the Solar System?', options: ['Jupiter', 'Saturn', 'Earth', 'Neptune'], answer: 'Jupiter', explanation: 'Jupiter is bigger than all the other planets put together.' },
  { prompt: 'Which planet is the hottest?', options: ['Venus', 'Mercury', 'Mars', 'Jupiter'], answer: 'Venus', explanation: 'Venus has a thick atmosphere that traps heat. It is even hotter than Mercury, which is closer to the Sun.' },
  { prompt: 'Why is Venus hotter than Mercury even though Mercury is closer to the Sun?', options: ['Venus has a thick atmosphere that traps heat', 'Venus is much bigger than the Sun is', 'Venus makes its own heat inside, like a star does', 'Venus spins around much faster than Mercury does'], answer: 'Venus has a thick atmosphere that traps heat', explanation: 'The thick atmosphere keeps the heat in, like a blanket.' },
  { prompt: 'Why does Mars look red?', options: ['Its soil contains a lot of rust', 'It is covered with hot red lava from volcanoes', 'It is so close to the Sun that it glows red', 'Its sky is always full of burning gas and fire'], answer: 'Its soil contains a lot of rust', explanation: 'Iron in the rocks and dust has rusted, which gives Mars a red colour.' },
  { prompt: 'Which planet is famous for its bright rings?', options: ['Saturn', 'Mars', 'Venus', 'Mercury'], answer: 'Saturn', explanation: 'Saturn\u2019s rings are made of pieces of ice and rock.' },
  { prompt: 'Which planet is farthest from the Sun?', options: ['Neptune', 'Uranus', 'Jupiter', 'Pluto'], answer: 'Neptune', explanation: 'Neptune is the eighth planet. Pluto is a dwarf planet.' },
  { prompt: 'Why is Neptune much colder than Earth?', options: ['It is very far from the Sun', 'It is covered in thick ice only', 'It has no gravity to hold in heat', 'It is facing away from the Sun'], answer: 'It is very far from the Sun', explanation: 'Planets far from the Sun get little heat and light.' },
  { prompt: 'Which planet has the longest year?', options: ['Neptune', 'Mars', 'Jupiter', 'Venus'], answer: 'Neptune', explanation: 'The farther a planet is from the Sun, the longer its orbit takes.' },
  { prompt: 'Pluto is best described as a...', options: ['dwarf planet', 'star', 'moon of Neptune', 'gas giant'], answer: 'dwarf planet', explanation: 'Pluto is classified as a dwarf planet.' },
];

const SolarSystem = () => (
  <NstTopic title="The Solar System" subtitle="The Sun and its planets" learnSteps={learnSteps} task="solar-system" bank={bank} />
);

export default SolarSystem;
