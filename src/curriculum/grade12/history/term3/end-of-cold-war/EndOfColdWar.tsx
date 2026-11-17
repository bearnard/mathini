import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './EndOfColdWarContent';

const EndOfColdWar = () => (
  <CapsSubjectTopic
    title="The End of the Cold War: the Events of 1989"
    subtitle="Gorbachev's reforms, Poland and Solidarity, the Berlin Wall, the end of the USSR, and the turning point for South Africa"
    learnSteps={learnSteps}
    task="gr12-end-of-cold-war-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default EndOfColdWar;
