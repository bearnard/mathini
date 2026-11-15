import { countAtoms, isBalanced, photosynthesis } from './lifeSciHelpers';

/**
 * Photosynthesis as a flow through a leaf: light is absorbed by chlorophyll; carbon dioxide comes in through the stomata and water
 * from the roots; glucose and oxygen come out. The coefficients on the arrows are the coefficients of the balanced equation
 * 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, taken from lifeSciHelpers (which checks that it balances).
 */

const INK = '#0f172a';

export const PhotosynthesisFlow = () => {
  const [co2, h2o] = photosynthesis.inputs;
  const [glucose, o2] = photosynthesis.outputs;
  const balanced = isBalanced(photosynthesis);
  const atoms = countAtoms(photosynthesis.inputs);
  return (
    <svg viewBox="0 0 150 110" role="img" aria-labelledby="pf-t pf-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id="pf-t">Photosynthesis in a leaf: carbon dioxide, water and light in; glucose and oxygen out</title>
      <desc id="pf-d">
        Light energy is absorbed by chlorophyll inside a leaf. {co2.coefficient} carbon dioxide and {h2o.coefficient} water go in; {glucose.coefficient} glucose and {o2.coefficient} oxygen come out. {balanced ? `The equation balances: ${atoms.C} carbon, ${atoms.H} hydrogen and ${atoms.O} oxygen atoms on each side.` : ''}
      </desc>
      <circle cx={13} cy={17} r={5} fill="#fbbf24" />
      <line x1={18} y1={21} x2={43} y2={39} stroke="#fbbf24" strokeWidth={1.6} />
      <polygon points="46,41 39,41 43,35" fill="#fbbf24" />
      <text x={24} y={11} fontSize={6.2} fontWeight={800} fill="#fcd34d">light energy</text>
      <rect x={47} y={32} width={56} height={40} rx={9} fill="#14532d" stroke="#4ade80" strokeWidth={1.2} />
      <ellipse cx={75} cy={52} rx={17} ry={9} fill="#16a34a" stroke="#86efac" strokeWidth={0.7} />
      <text x={75} y={54} textAnchor="middle" fontSize={5.6} fontWeight={800} fill="#f0fdf4">chlorophyll</text>
      <line x1={4} y1={52} x2={41} y2={52} stroke="#7dd3fc" strokeWidth={1.6} />
      <polygon points="46,52 40,48.5 40,55.5" fill="#7dd3fc" />
      <text x={5} y={47} fontSize={6.4} fontWeight={800} fill="#bae6fd">{co2.coefficient} CO₂</text>
      <line x1={75} y1={104} x2={75} y2={78} stroke="#60a5fa" strokeWidth={1.6} />
      <polygon points="75,73 71.5,79 78.5,79" fill="#60a5fa" />
      <text x={80} y={96} fontSize={6.4} fontWeight={800} fill="#bfdbfe">{h2o.coefficient} H₂O</text>
      <line x1={104} y1={44} x2={141} y2={44} stroke="#f9a8d4" strokeWidth={1.6} />
      <polygon points="146,44 140,40.5 140,47.5" fill="#f9a8d4" />
      <text x={107} y={39} fontSize={6.4} fontWeight={800} fill="#fbcfe8">{o2.coefficient} O₂</text>
      <line x1={104} y1={62} x2={141} y2={62} stroke="#fde047" strokeWidth={1.6} />
      <polygon points="146,62 140,58.5 140,65.5" fill="#fde047" />
      <text x={107} y={71} fontSize={6.4} fontWeight={800} fill="#fef08a">{glucose.coefficient} glucose</text>
    </svg>
  );
};
