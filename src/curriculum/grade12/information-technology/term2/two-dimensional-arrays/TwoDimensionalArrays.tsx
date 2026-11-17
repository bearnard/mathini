import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './TwoDimensionalArraysContent';

const TwoDimensionalArrays = () => (
  <CapsSubjectTopic
    title="Two-Dimensional Arrays (Delphi)"
    subtitle="Rows and columns, nested loops, row and column totals, and finding the largest value"
    learnSteps={learnSteps}
    task="gr12-two-dimensional-arrays-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default TwoDimensionalArrays;
