import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { ChainSteps, FlowRows, JumpLine } from '../../../../components/diagrams/maths/PatternDiagrams';

const learnSteps: LearnStep[] = [
    {
        title: "Find the Rule",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">A pattern follows a <strong>rule</strong>. Look at how each number changes.</p>
                <JumpLine start={4} rule={{ op: '+', n: 5 }} count={4} />
                <p className="text-slate-500">Each term increases by <strong>5</strong>, so the rule is <strong>add 5</strong>.</p>
            </div>
        )
    },
    {
        title: "Extend the Pattern",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Once you know the rule, use it to find the next term.</p>
                <ChainSteps start={3} rule={{ op: '×', n: 2 }} count={5} hideLast />
                <p className="text-slate-500">The rule is <strong>multiply by 2</strong>, so the next term is <strong>48</strong>.</p>
            </div>
        )
    },
    {
        title: "Flow Diagrams",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">A flow diagram uses an input, applies a rule, and gives an output.</p>
                <FlowRows rules={[{ op: '×', n: 3 }, { op: '+', n: 1 }]} inputs={[7]} />
                <p className="text-slate-500">Work in order: <strong>7 × 3 = 21</strong>, then <strong>21 + 1 = 22</strong>.</p>
            </div>
        )
    }
];

export const bank: CapsItem[] = [
    {
        prompt: 'What is the rule for the sequence 3, 6, 12, 24?',
        options: ['Add 3', 'Multiply by 2', 'Add 6', 'Multiply by 3'],
        answer: 'Multiply by 2',
        explanation: '3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24. Each term is doubled, so the rule is multiply by 2.'
    },
    {
        prompt: 'What is the next term in 5, 8, 11, 14, ___?',
        options: ['16', '17', '18', '19'],
        answer: '17',
        explanation: 'The rule is add 3 each time. 14 + 3 = 17.'
    },
    {
        prompt: 'A flow diagram has rule × 3. The input is 7. What is the output?',
        options: ['10', '18', '21', '24'],
        answer: '21',
        explanation: 'Apply the rule: 7 × 3 = 21.'
    },
    {
        prompt: 'A two-step rule is × 2, then + 5. The input is 4. What is the output?',
        options: ['9', '11', '13', '18'],
        answer: '13',
        explanation: 'Step 1: 4 × 2 = 8. Step 2: 8 + 5 = 13.'
    },
    {
        prompt: 'What is the missing term in 2, 6, ___, 54, 162?',
        options: ['12', '16', '18', '24'],
        answer: '18',
        explanation: 'The rule is multiply by 3. 2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54, 54 × 3 = 162.'
    },
    {
        prompt: 'Which rule produces the sequence 1, 3, 5, 7, 9?',
        options: ['Add 1', 'Add 2', 'Multiply by 3', 'Add 3'],
        answer: 'Add 2',
        explanation: '1 + 2 = 3, 3 + 2 = 5, 5 + 2 = 7, 7 + 2 = 9. The rule is add 2.'
    },
    {
        prompt: 'A flow diagram table shows: 2→10, 4→20, 6→30. What is the rule?',
        options: ['+ 8', '× 4', '× 5', '+ 5'],
        answer: '× 5',
        explanation: '2 × 5 = 10, 4 × 5 = 20, 6 × 5 = 30. The rule is multiply by 5.'
    },
];

const PatternsT2 = () => (
    <CapsSubjectTopic
        title="Number Patterns"
        subtitle="Rules, sequences and flow diagrams"
        learnSteps={learnSteps}
        task="gr6-patterns-t2"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default PatternsT2;
