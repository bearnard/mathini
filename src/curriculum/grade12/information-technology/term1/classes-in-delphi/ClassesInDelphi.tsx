import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './ClassesInDelphiContent';

const ClassesInDelphi = () => (
  <CapsSubjectTopic
    title="Classes in Delphi"
    subtitle="Class and object, the constructor, accessor, mutator and auxiliary methods, and tracing a class"
    learnSteps={learnSteps}
    task="gr12-classes-in-delphi-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default ClassesInDelphi;
