import NstMockTest from '../../_shared/NstMockTest';
import { bank as mains } from '../mains-electricity/MainsElectricity';
import { bank as circuits } from '../electric-circuits/ElectricCircuits';
import { bank as systems } from '../systems-solve-problems/SystemsSolveProblems';
import { bank as conductors } from '../conductors-insulators/ConductorsInsulators';
import { bank as diagrams } from '../circuit-diagrams/CircuitDiagrams';

const groups = [
  { topic: 'Electric Circuits', items: circuits },
  { topic: 'Conductors & Insulators', items: conductors },
  { topic: 'Circuit Diagrams & Symbols', items: diagrams },
  { topic: 'Mains Electricity & Safety', items: mains },
  { topic: 'Systems to Solve Problems', items: systems },
];

const Term3MockTest = () => (
  <NstMockTest title="Term 3 Mock Test" subtitle="20 mixed questions from all Term 3 topics" groups={groups} />
);

export default Term3MockTest;
