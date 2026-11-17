import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './RacismMythOfRaceContent';

const RacismMythOfRace = () => (
  <CapsSubjectTopic
    title="Racism and the Myth of Race"
    subtitle="What racism is, our common ancestry, why race is a social construct, and apartheid classification"
    learnSteps={learnSteps}
    task="gr9-racism-myth-of-race-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default RacismMythOfRace;
