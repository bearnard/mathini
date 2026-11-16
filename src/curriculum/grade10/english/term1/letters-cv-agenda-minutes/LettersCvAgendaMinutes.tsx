import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './LettersCvAgendaMinutesContent';

const LettersCvAgendaMinutes = () => (
  <CapsSubjectTopic
    title="Transactional Texts: Letters, CV, Agenda, Minutes and Obituary"
    subtitle="Friendly and formal letters, the CV and covering letter, agenda, minutes and obituary"
    learnSteps={learnSteps}
    task="gr10-letters-cv-agenda-minutes-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LettersCvAgendaMinutes;
