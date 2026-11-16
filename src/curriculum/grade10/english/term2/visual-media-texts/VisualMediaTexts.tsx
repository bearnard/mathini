import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './VisualMediaTextsContent';

const VisualMediaTexts = () => (
  <CapsSubjectTopic
    title="Visual and Media Texts, Reports and Reviews"
    subtitle="Adverts, cartoons, fonts and captions, reports, reviews and articles"
    learnSteps={learnSteps}
    task="gr10-visual-media-texts-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default VisualMediaTexts;
