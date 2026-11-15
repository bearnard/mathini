import type { Step } from '../business/steps';

/** What can happen when migration to cities is faster than planning. */
export const URBANISATION_STEPS: readonly Step[] = [
  { lead: 'Many people move', text: ' from rural areas to the city for jobs and services' },
  { lead: 'Housing and services', text: ' (homes, water, electricity, transport) do not keep pace' },
  { lead: 'Informal settlements', text: ' grow, because people have nowhere else to live' },
];

/** From factory to foreign customer: an export chain. */
export const EXPORT_STEPS: readonly Step[] = [
  { lead: 'Producer', text: ' makes or grows the goods' },
  { lead: 'Road or rail', text: ' carries them to the harbour' },
  { lead: 'Harbour', text: ': goods are loaded onto a ship (or to an airport for air freight)' },
  { lead: 'Another country', text: ' buys them: for the seller they are exports, for the buyer imports' },
];
