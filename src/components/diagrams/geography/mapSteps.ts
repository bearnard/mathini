import type { Step } from '../business/steps';

/** Finding a route on a local map, in order. */
export const ROUTE_STEPS: readonly Step[] = [
  { lead: 'Find', text: ' where you start and where you want to end up' },
  { lead: 'Choose', text: ' roads that join the two places on a street map' },
  { lead: 'Measure', text: ' each route on the map and use the scale to turn it into real distance' },
  { lead: 'Compare', text: ' the routes: shorter, but also safer and easier to follow' },
  { lead: 'Check', text: ' directions with the compass at each turn' },
];
