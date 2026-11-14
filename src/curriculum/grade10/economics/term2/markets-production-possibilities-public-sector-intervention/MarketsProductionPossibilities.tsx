'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/econ/term2/markets-production-possibilities-public-sector-intervention/diagram.webp", alt: "Market for Bread" },
    title: 'Demand, supply and market price',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          In a market economy, prices help coordinate decisions. Demand shows how much consumers want to buy, while
          supply shows how much producers are willing to sell at different prices.
        </p>
        <SupplyDemand title="Market for Bread" showShifts={true} />
      </div>
    ),
  },
  {
    title: 'Changes in equilibrium',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Equilibrium happens where demand and supply meet. If demand rises or supply falls, prices and quantities can
          change. Learners should distinguish movement along a curve from a shift of the curve.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Increase in demand</strong>
            <p className="mt-1 text-slate-600">Usually raises equilibrium price and quantity if supply stays the same.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Decrease in supply</strong>
            <p className="mt-1 text-slate-600">Usually raises price but lowers quantity if demand stays the same.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Production possibilities and choice',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A production possibility curve shows the maximum combinations of two goods that can be produced with fixed
          resources and technology. Moving along the curve highlights trade-offs and opportunity cost.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
          Points inside the curve show inefficiency, while points outside the curve cannot be reached with current resources.
        </div>
      </div>
    ),
  },
  {
    title: 'Public sector intervention',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Governments intervene in markets through taxes, subsidies, regulations and price controls. Intervention is
          used when markets fail to protect fairness, public goods or the environment.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Taxes can discourage harmful products or raise state revenue.</li>
          <li>Subsidies can support important industries or lower consumer prices.</li>
          <li>Regulations protect workers, consumers and natural resources.</li>
        </ul>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'Equilibrium price is found where:',
    options: ['A. Only demand is shown', 'B. Demand and supply intersect', 'C. Government spending is zero', 'D. Imports exceed exports'],
    answer: 'B. Demand and supply intersect',
    explanation: 'The equilibrium price is the price at which quantity demanded equals quantity supplied.',
  },
  {
    prompt: 'If consumer income rises for a normal good, demand will usually:',
    options: ['A. Increase', 'B. Decrease', 'C. Stay exactly the same', 'D. Become illegal'],
    answer: 'A. Increase',
    explanation: 'Higher income often increases demand for normal goods.',
  },
  {
    prompt: 'A point inside the production possibility curve shows:',
    options: ['A. Efficiency in the use of all resources', 'B. Inefficiency or underuse of resources', 'C. A level of production that is impossible', 'D. Full employment of the workers'],
    answer: 'B. Inefficiency or underuse of resources',
    explanation: 'Points inside the curve indicate that not all resources are being used effectively.',
  },
  {
    prompt: 'Which action is an example of public sector intervention?',
    options: ['A. A tax on cigarettes', 'B. A private discount sale', 'C. A consumer choosing bread', 'D. A shop deciding its music'],
    answer: 'A. A tax on cigarettes',
    explanation: 'Taxes are one way the government intervenes in a market.',
  },
  {
    prompt: 'What does opportunity cost mean on a production possibility curve?',
    options: ['A. Nothing is given up', 'B. More of one good means less of another', 'C. Prices never change', 'D. The curve becomes a demand line'],
    answer: 'B. More of one good means less of another',
    explanation: 'Because resources are limited, producing more of one good means sacrificing some of another.',
  },
];

export default function MarketsProductionPossibilities() {
  return (
    <CapsSubjectTopic
      title="Markets, Production Possibilities and Public Sector Intervention"
      subtitle="Grade 10 · Economics · Term 2"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-markets-production-possibilities-public-sector-intervention"
      apiPath="/api/caps/econ"
      grade={10}
    />
  );
}
