import CapsSubjectTopic, { type CapsItem, type LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as e from '../../../../../components/diagrams/science/ns9Energy';

// CAPS Natural Sciences Grade 9 Term 3: the cost of electrical power: power in watts and kilowatts, 1 W = 1 J/s, energy in kWh, cost = power rating x hours
// x unit price, incandescent versus compact fluorescent lamps, prepaid. THE UNIT PRICE IS ALWAYS GIVEN: R2,50 per kWh is a teaching value, not a tariff.
// Numbers come from ns9Energy.ts (ns9Energy.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const c = (n: number) => String(n).replace('.', ',');
const sp = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const P = 2.5; // the unit price used in the examples (rand per kWh)
const check = { kwh: e.kWh(750, 4), cost: e.cost(750, 4, 2), hours: e.hoursPrepaid(30, 2, 1500) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Power and the watt',
    content: slide(
      <>
        <Rule>Electrical power is the rate at which electrical energy is supplied. It is measured in watts (W) or kilowatts (kW). One watt is one joule of energy supplied in one second: 1 W = 1 J/s. 1 kW = 1 000 W.</Rule>
        <InfoTable
          cols={[{ title: 'Appliance', w: 40 }, { title: 'Power rating', w: 30 }, { title: 'In kW', w: 30 }]}
          rows={[
            ['Kettle', '2 000 W', `${c(e.kW(2000))} kW`],
            ['Heater', '1 500 W', `${c(e.kW(1500))} kW`],
            ['TV', '100 W', `${c(e.kW(100))} kW`],
            ['Compact fluorescent lamp', '11 W', `${c(e.kW(11))} kW`],
          ]}
          aria="A table of power ratings. A kettle is 2 000 watts, which is 2 kilowatts. A heater is 1 500 watts, which is 1,5 kilowatts. A TV is 100 watts, which is 0,1 kilowatts. A compact fluorescent lamp is 11 watts, which is 0,011 kilowatts. These ratings are examples for teaching."
        />
        <Worked
          title="Watts and joules"
          steps={[
            <>A 60 W lamp changes 60 J of electrical energy every second.</>,
            <>In 10 seconds it uses 60 × 10 = <strong>{e.joules(60, 10)} J</strong>.</>,
            <>To change watts to kilowatts, divide by 1 000: 1 500 W ÷ 1 000 = <strong>1,5 kW</strong>.</>,
          ]}
        />
        <Mistake>Mixing up power and energy. Power is the rate, in watts. Energy is the amount used, in joules or kilowatt-hours.</Mistake>
      </>,
    ),
  },
  {
    title: 'Energy in kilowatt-hours',
    content: slide(
      <>
        <Rule>Consumers pay for the energy they use, measured in kilowatt-hours (kWh). Energy in kWh = power in kW × time in hours. Change the power to kilowatts first, and the time to hours.</Rule>
        <InfoTable
          cols={[{ title: 'Appliance', w: 28 }, { title: 'Working', w: 48 }, { title: 'Energy', w: 24 }]}
          rows={[
            ['Kettle 0,5 h', '2 kW × 0,5 h', `${c(e.kWh(2000, 0.5))} kWh`],
            ['TV 5 h', '0,1 kW × 5 h', `${c(e.kWh(100, 5))} kWh`],
            ['Heater 3 h', '1,5 kW × 3 h', `${c(e.kWh(1500, 3))} kWh`],
          ]}
          aria="A table of energy in kilowatt-hours. A kettle for half an hour: 2 kilowatts times 0,5 hours is 1 kilowatt-hour. A TV for 5 hours: 0,1 kilowatts times 5 hours is 0,5 kilowatt-hours. A heater for 3 hours: 1,5 kilowatts times 3 hours is 4,5 kilowatt-hours."
        />
        <Worked
          title="A 750 W iron used for 2 hours"
          steps={[
            <>Change to kilowatts: 750 W ÷ 1 000 = {c(e.kW(750))} kW.</>,
            <>Energy = {c(e.kW(750))} kW × 2 h = <strong>{c(e.kWh(750, 2))} kWh</strong>.</>,
            <>Check the units: kW × h gives kWh.</>,
          ]}
        />
        <Mistake>Multiplying watts by hours and calling the answer kWh. 750 W × 2 h is 1 500 Wh, which is 1,5 kWh.</Mistake>
      </>,
    ),
  },
  {
    title: 'The cost of using an appliance',
    content: slide(
      <>
        <Rule>Cost = power rating × hours used × unit price, where the power is in kW and the unit price is in rand per kWh. The unit price changes from time to time, so it is always given or looked up for your municipality. The price used here, R2,50 per kWh, is only an example.</Rule>
        <InfoTable
          cols={[{ title: 'Appliance', w: 30 }, { title: 'kWh', w: 26 }, { title: `Cost at ${e.rand(P)}/kWh`, w: 44 }]}
          rows={[
            ['Kettle 0,5 h', `${c(e.kWh(2000, 0.5))}`, e.rand(e.cost(2000, 0.5, P))],
            ['TV 5 h', `${c(e.kWh(100, 5))}`, e.rand(e.cost(100, 5, P))],
            ['Heater 3 h', `${c(e.kWh(1500, 3))}`, e.rand(e.cost(1500, 3, P))],
          ]}
          aria={`A table of costs at ${e.rand(P)} per kilowatt-hour. A kettle for half an hour uses 1 kilowatt-hour and costs ${e.rand(e.cost(2000, 0.5, P))}. A TV for 5 hours uses 0,5 kilowatt-hours and costs ${e.rand(e.cost(100, 5, P))}. A heater for 3 hours uses 4,5 kilowatt-hours and costs ${e.rand(e.cost(1500, 3, P))}.`}
        />
        <Worked
          title="The heater"
          steps={[
            <>Energy = 1,5 kW × 3 h = {c(e.kWh(1500, 3))} kWh.</>,
            <>Cost = {c(e.kWh(1500, 3))} kWh × {e.rand(P)} per kWh = <strong>{e.rand(e.cost(1500, 3, P))}</strong>.</>,
            <>The appliance that needs the most power does not always cost the most: the time it is used matters too.</>,
          ]}
        />
        <Mistake>Using the watts in the cost formula. Change to kilowatts first, or the cost will be 1 000 times too big.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing lamps and prepaid electricity',
    content: slide(
      <>
        <Rule>Appliances with the same job can use very different amounts of energy. A compact fluorescent lamp (CFL) gives about the same light as an incandescent lamp but uses far less power. A prepaid amount lasts for: amount ÷ unit price = kWh, and kWh ÷ kW = hours.</Rule>
        <InfoTable
          cols={[{ title: 'Lamp, 1 000 h', w: 40 }, { title: 'Energy', w: 26 }, { title: `Cost`, w: 34 }]}
          rows={[
            ['Incandescent\n60 W', `${c(e.kWh(60, 1000))} kWh`, e.rand(e.cost(60, 1000, P))],
            ['Compact\nfluorescent 11 W', `${c(e.kWh(11, 1000))} kWh`, e.rand(e.cost(11, 1000, P))],
          ]}
          aria={`A table comparing two lamps over 1 000 hours at ${e.rand(P)} per kilowatt-hour. The 60 watt incandescent lamp uses ${e.kWh(60, 1000)} kilowatt-hours and costs ${e.rand(e.cost(60, 1000, P))}. The 11 watt compact fluorescent lamp uses ${e.kWh(11, 1000)} kilowatt-hours and costs ${e.rand(e.cost(11, 1000, P))}.`}
        />
        <Worked
          title="Saving, and how long a prepaid amount lasts"
          steps={[
            <>The CFL saves {e.rand(e.cost(60, 1000, P))} − {e.rand(e.cost(11, 1000, P))} = <strong>{e.rand(e.lampSaving(60, 11, 1000, P))}</strong> over 1 000 hours.</>,
            <>Prepaid {e.rand(50)} at {e.rand(P)} per kWh buys {e.rand(50)} ÷ {e.rand(P)} = {c(50 / P)} kWh.</>,
            <>A 2 kW kettle used alone would use {c(50 / P)} kWh in {c(50 / P)} ÷ 2 = <strong>{c(e.hoursPrepaid(50, P, 2000))} hours</strong>.</>,
            <>A solar water heating panel saves electricity, because the Sun heats the water instead of the kettle or geyser.</>,
          ]}
        />
        <Mistake>Dividing the prepaid amount by the power rating. First divide by the unit price to find the kWh, then divide by the power in kW.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>A 750 W appliance is used for 4 hours. How many kWh is that?</>,
            <>At R2 per kWh, what does it cost?</>,
            <>A 1 500 W heater is the only appliance on, and the prepaid amount is R30 at R2 per kWh. How long does it last?</>,
            <>How many watts are there in 0,6 kW?</>,
          ]}
          answers={[
            <>0,75 kW × 4 h = <strong>{c(check.kwh)} kWh</strong>.</>,
            <>{c(check.kwh)} kWh × R2 = <strong>{e.rand(check.cost)}</strong>.</>,
            <>R30 ÷ R2 = 15 kWh, and 15 ÷ 1,5 kW = <strong>{c(check.hours)} hours</strong>.</>,
            <>0,6 × 1 000 = <strong>{sp(600)} W</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "In which unit is electrical power measured?", options: ["Watts (W)","Joules (J)","Newtons (N)","Kilowatt-hours (kWh)"], answer: "Watts (W)", explanation: "Power is measured in watts or kilowatts. Joules and kilowatt-hours measure energy." },
  { prompt: "One watt is equal to", options: ["One joule of energy per hour","One joule of energy per second","One newton per metre","One volt per second"], answer: "One joule of energy per second", explanation: "One watt is one joule of energy supplied in one second: 1 W = 1 J/s." },
  { prompt: "A lamp has a power of 100 W. How many joules of energy does it use every second?", options: ["1 000 J","10 J","100 J","0,1 J"], answer: "100 J", explanation: "100 W is 100 joules per second." },
  { prompt: "How many watts are there in 2,5 kW?", options: ["25 W","250 W","25 000 W","2 500 W"], answer: "2 500 W", explanation: "1 kW = 1 000 W, so 2,5 kW = 2 500 W." },
  { prompt: "A 2 kW heater is switched on for 3 hours. How much energy does it use?", options: ["6 kWh","5 kWh","0,67 kWh","1,5 kWh"], answer: "6 kWh", explanation: "Energy = power × time = 2 kW × 3 h = 6 kWh." },
  { prompt: "A 100 W TV is used for 5 hours. How much energy does it use?", options: ["5 kWh","0,5 kWh","500 kWh","0,05 kWh"], answer: "0,5 kWh", explanation: "100 W = 0,1 kW. 0,1 kW × 5 h = 0,5 kWh." },
  { prompt: "A kettle uses 1 kWh of energy. The price is R2,50 per kWh. What does it cost?", options: ["R25","R0,25","R2,50","R1"], answer: "R2,50", explanation: "Cost = 1 kWh × R2,50 per kWh = R2,50." },
  { prompt: "A 1 500 W heater is used for 4 hours. The price is R3 per kWh. What does it cost?", options: ["R12","R4,50","R180","R18"], answer: "R18", explanation: "1,5 kW × 4 h = 6 kWh. 6 kWh × R3 = R18." },
  { prompt: "Which formula gives the cost of using an appliance?", options: ["Power in kW × hours × price per kWh","Power in W × price per kWh","Hours ÷ price per kWh","Voltage × current × resistance"], answer: "Power in kW × hours × price per kWh", explanation: "Cost = power rating (kW) × hours used × unit price." },
  { prompt: "The only appliance on is a 2 000 W kettle. Prepaid electricity of R50 is bought at R2,50 per kWh. How long does it last?", options: ["20 hours","10 hours","40 hours","2,5 hours"], answer: "10 hours", explanation: "R50 ÷ R2,50 = 20 kWh. 20 kWh ÷ 2 kW = 10 hours." },
  { prompt: "A 60 W incandescent lamp is replaced by an 11 W compact fluorescent lamp. Each is used for 1 000 hours at R2,50 per kWh. How much does the change save?", options: ["R150","R27,50","R122,50","R177,50"], answer: "R122,50", explanation: "The 60 W lamp costs R150 and the 11 W lamp costs R27,50. The saving is R150 − R27,50 = R122,50." },
  { prompt: "Which of these uses the most energy in 10 hours?", options: ["A 60 W lamp","An 11 W lamp","A 100 W TV","A 2 kW kettle"], answer: "A 2 kW kettle", explanation: "In 10 hours the kettle uses 20 kWh, the TV 1 kWh, the 60 W lamp 0,6 kWh and the 11 W lamp 0,11 kWh." },
  { prompt: "Which appliance helps to save electricity when heating water?", options: ["A solar water heating panel","A bigger kettle","An incandescent lamp","A longer extension cord"], answer: "A solar water heating panel", explanation: "A solar panel heats the water with energy from the Sun instead of using electricity." },
  { prompt: "Why must the unit price of electricity be given or looked up in a calculation?", options: ["It is always R1 per kWh","It changes from time to time","It depends on the colour of the appliance","It is the same as the power rating"], answer: "It changes from time to time", explanation: "The unit price increases from time to time, so you use the current price for your municipality." },
];

const CostPower = () => (
  <CapsSubjectTopic
    title="Cost of Electrical Power"
    subtitle="Watts, kilowatt-hours, the cost of an appliance and prepaid electricity"
    learnSteps={learnSteps}
    task="gr9-cost-electrical-power-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default CostPower;
