import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/geo/term1/pressure-belts-winds/diagram.webp", alt: "Pressure Belts and Global Winds" },
    title: 'Global atmospheric circulation cells',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The unequal heating of Earth drives three circulation cells in each hemisphere that redistribute heat and moisture around the globe.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Hadley Cell (0°–30°)</strong>
            <p className="text-slate-600">Hot air rises at the equator, moves poleward, descends at ~30°, and returns as trade winds.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Ferrel Cell (30°–60°)</strong>
            <p className="text-slate-600">Mid-latitude cell driven by the Hadley and Polar cells; surface winds blow poleward (westerlies).</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Polar Cell (60°–90°)</strong>
            <p className="text-slate-600">Cold dense air sinks at the poles and moves equatorward as polar easterlies.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Pressure belts around the globe',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Rising air creates <strong>low pressure</strong> (wet); descending air creates <strong>high pressure</strong> (dry). Pressure belts alternate around Earth.
        </p>
        <div className="bg-slate-50 p-4 rounded-xl text-left space-y-2">
          <p><strong className="text-red-600">0° — ITCZ</strong>: Inter-Tropical Convergence Zone — intense low pressure, heavy rainfall.</p>
          <p><strong className="text-amber-600">30° N &amp; S — Subtropical High</strong>: descending dry air → hot deserts (Sahara, Kalahari, Namib).</p>
          <p><strong className="text-blue-600">60° N &amp; S — Sub-Polar Low</strong>: converging air rises → stormy, wet conditions.</p>
          <p><strong className="text-indigo-600">90° N &amp; S — Polar High</strong>: very cold, dry, descending air at the poles.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Surface winds and the Coriolis effect',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Surface winds blow from high to low pressure. The <strong>Coriolis effect</strong> (caused by Earth's rotation) deflects them to the right in the northern hemisphere and to the left in the southern hemisphere.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Trade winds</strong>
            <p className="text-slate-600">Blow from subtropical high toward the ITCZ; NE trades (N hemisphere) and SE trades (S hemisphere).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Westerlies</strong>
            <p className="text-slate-600">Blow from subtropical high toward sub-polar low; blow from the west in mid-latitudes.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Polar easterlies</strong>
            <p className="text-slate-600">Blow from polar high toward sub-polar low; deflected to blow from the east.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Monsoons and Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>monsoon</strong> is a seasonal reversal of wind direction caused by differential heating of land and sea.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">West African Monsoon</strong>
            <p className="text-slate-600">In summer, moist SW winds from the Atlantic bring rain to the Sahel and West Africa (June–September).</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Indian Ocean Monsoon</strong>
            <p className="text-slate-600">SE trade winds bring moisture from the Indian Ocean to East and southern Africa, influencing summer rainfall.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">The ITCZ migrates seasonally following the overhead sun — this migration drives Africa's wet and dry seasons.</p>
      </div>
    ),
  },
  {
    title: 'Wind Data — Average Speeds by Pressure Belt',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Pressure belts help create different wind systems. Some belts are calm, while others are linked to stronger persistent winds.</p>
        <DataChart
          data={[
                        { belt: 'Equatorial low', speed: 10 },
                        { belt: 'Subtropical high', speed: 15 },
                        { belt: 'Westerlies', speed: 35 },
                        { belt: 'Polar easterlies', speed: 25 },
                      ]}
          xKey="belt"
          series={[
                        { key: 'speed', label: 'Average wind speed (km/h)', type: 'bar', color: '#06b6d4' },
                      ]}
          yLabel="km/h"
          height={220}
        />

        <p className="text-sm text-slate-500">The westerlies are usually stronger than the calm equatorial belt known as the doldrums.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which pressure belt is found at the equator (0°)?',
    options: ['Subtropical high pressure', 'Sub-polar low pressure', 'Inter-Tropical Convergence Zone (low pressure)', 'Polar high pressure'],
    answer: 'Inter-Tropical Convergence Zone (low pressure)',
    explanation: 'The ITCZ is a belt of intense low pressure at the equator where trade winds converge, causing heavy rainfall.',
  },
  {
    prompt: 'Why is the Sahara Desert located at approximately 30° N?',
    options: [
      'It is far from the ocean',
      'It lies under the subtropical high-pressure belt where dry descending air suppresses rainfall',
      'It is in the path of the westerlies',
      'Cold ocean currents cool the air',
    ],
    answer: 'It lies under the subtropical high-pressure belt where dry descending air suppresses rainfall',
    explanation: 'Descending air at ~30° N is warmed and dried, preventing condensation and rainfall — creating desert conditions.',
  },
  {
    prompt: 'What are trade winds?',
    options: [
      'Winds that only blow over ocean trade routes',
      'Persistent winds blowing from subtropical high pressure toward the ITCZ',
      'Winds from the westerlies belt',
      'Seasonal reversal winds near monsoon regions',
    ],
    answer: 'Persistent winds blowing from subtropical high pressure toward the ITCZ',
    explanation: 'Trade winds blow from the subtropical highs toward the equatorial low; they are deflected by the Coriolis effect.',
  },
  {
    prompt: 'The Coriolis effect causes winds in the Southern Hemisphere to deflect to the:',
    options: ['Right', 'Left', 'Upward', 'Downward'],
    answer: 'Left',
    explanation: 'Earth\'s rotation causes winds to deflect right in the northern hemisphere and left in the southern hemisphere.',
  },
  {
    prompt: 'Which atmospheric cell is responsible for the rising air and rainfall at the equator?',
    options: ['Polar cell', 'Ferrel cell', 'Hadley cell', 'Monsoon cell'],
    answer: 'Hadley cell',
    explanation: 'In the Hadley cell, intense heating at the equator causes air to rise, cool, and produce heavy rainfall before flowing poleward.',
  },
  {
    prompt: 'The ITCZ migrates seasonally. In the southern hemisphere summer (December), where does the ITCZ move?',
    options: ['Northward toward the Tropic of Cancer', 'Southward toward the Tropic of Capricorn', 'It stays at 0°', 'It disappears in summer'],
    answer: 'Southward toward the Tropic of Capricorn',
    explanation: 'The ITCZ follows the overhead sun. In December the Sun is overhead at the Tropic of Capricorn, drawing the ITCZ south — bringing summer rains to southern Africa.',
  },
  {
    prompt: 'At which latitude are the westerlies found?',
    options: ['0°', '30°', '60°', '90°'],
    answer: '60°',
    explanation: 'Westerlies blow between 30° and 60° in both hemispheres, from the subtropical high toward the sub-polar low.',
  },
  {
    prompt: 'What type of air pressure occurs where air sinks (descends)?',
    options: ['Low pressure', 'High pressure', 'Zero pressure', 'Variable pressure'],
    answer: 'High pressure',
    explanation: 'Descending air creates high pressure at the surface. High-pressure areas are associated with dry, clear conditions.',
  },
  {
    prompt: 'What causes a monsoon?',
    options: [
      'Permanent trade winds',
      'Seasonal reversal of wind direction due to differential heating of land and sea',
      'The Coriolis effect alone',
      'El Niño events',
    ],
    answer: 'Seasonal reversal of wind direction due to differential heating of land and sea',
    explanation: 'Land heats and cools faster than the sea. Seasonal temperature contrasts reverse the pressure gradient, reversing wind direction.',
  },
  {
    prompt: 'Which South African climate feature is partly explained by the subtropical high-pressure belt?',
    options: ['Intense summer thunderstorms everywhere', 'The dry Karoo interior', 'The Cape\'s winter rainfall', 'Coastal fog along the east coast'],
    answer: 'The dry Karoo interior',
    explanation: 'The Karoo is semi-arid partly because it lies under the influence of the subtropical high-pressure belt for much of the year.',
  },
];

const PressureBeltsWindsT1 = () => (
  <CapsSubjectTopic
    title="Pressure Belts and Global Winds"
    subtitle="Atmospheric circulation, trade winds, westerlies and monsoons"
    learnSteps={learnSteps}
    task="gr11-pressure-belts-winds-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default PressureBeltsWindsT1;
