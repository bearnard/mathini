import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './DiaryEntryContent';

const DiaryEntry = () => (
  <CapsSubjectTopic
    title="Writing a Diary Entry"
    subtitle="Purpose, first person, events and evaluation, language and tone, and the writing process"
    learnSteps={learnSteps}
    task="gr9-diary-entry-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default DiaryEntry;
