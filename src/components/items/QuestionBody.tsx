import Button from '../ui/Button';
import OrderQuestion from './OrderQuestion';
import LabelQuestion from './LabelQuestion';
import ExplainQuestion from './ExplainQuestion';
import { explainPoints, kindOf } from '../../curriculum/grade6/natural-sciences/_shared/itemKinds';
import type { NstItem } from '../../curriculum/grade6/natural-sciences/_shared/types';

interface Props {
  item: NstItem;
  /** Changes for every question asked, so order/label state resets. */
  questionKey: string | number;
  /** mcq only: the option tapped so far, or null. */
  selected: string | null;
  /**
   * Called once per question with whether it was fully right. For mcq, `chosen` is the option tapped.
   * For a self-marked explain item, `score` is the marks the learner gave themselves (correct = at least 70%).
   */
  onResult: (correct: boolean, chosen?: string, score?: { marks: number; of: number }) => void;
}

/**
 * Renders the answer controls for any item kind (mcq, order, label, explain). Shared by every Grade 6 shell
 * (Natural Sciences, History, Geography) and the NST mock tests. The prompt is shown by the caller's layout. */
const QuestionBody = ({ item, questionKey, selected, onResult }: Props) => {
  const kind = kindOf(item);

  if (kind === 'order') {
    return (
      <OrderQuestion
        key={questionKey}
        steps={item.options}
        answer={item.answer}
        onSubmit={(correct) => onResult(correct)}
      />
    );
  }

  if (kind === 'explain') {
    return (
      <ExplainQuestion
        key={questionKey}
        points={explainPoints(item)}
        paper={item.paper}
        Diagram={item.Diagram}
        onSubmit={(correct, score) => onResult(correct, undefined, score)}
      />
    );
  }

  if (kind === 'label' && item.hotspots) {
    return (
      <LabelQuestion
        key={questionKey}
        image={item.image}
        Diagram={item.Diagram}
        hotspots={item.hotspots}
        labels={item.options}
        answer={item.answer}
        onSubmit={(correct) => onResult(correct)}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {item.options.map((option, idx) => {
        let variant: 'outline' | 'success' | 'danger' = 'outline';
        if (selected !== null) {
          if (option === item.answer) variant = 'success';
          else if (option === selected) variant = 'danger';
        }
        return (
          <Button
            key={idx}
            onClick={() => onResult(option === item.answer, option)}
            disabled={selected !== null}
            variant={variant}
            className="text-lg py-6"
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};

export default QuestionBody;

/** The "wrong answer" line for the feedback card. Order and label questions show the right answer in the question itself. */
export function incorrectMessageFor(item: NstItem | undefined): string {
  if (!item) return 'Not quite.';
  const kind = kindOf(item);
  const why = item.explanation ? ` ${item.explanation}` : '';
  if (kind === 'order') return `Not quite. The right order is shown above.${why}`;
  if (kind === 'label') return `Not quite. The right labels are shown above.${why}`;
  if (kind === 'explain') return `Not there yet. Read the memo points you missed above.${why}`;
  return `Not quite. The answer is "${item.answer}".${why}`;
}
