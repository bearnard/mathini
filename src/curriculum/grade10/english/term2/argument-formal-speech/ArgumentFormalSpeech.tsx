import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './ArgumentFormalSpeechContent';

const ArgumentFormalSpeech = () => (
  <CapsSubjectTopic
    title="Argument and Formal Speech"
    subtitle="Building an argument, persuasive devices, planning a speech, dialogue and interview"
    learnSteps={learnSteps}
    task="gr10-argument-formal-speech-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ArgumentFormalSpeech;
