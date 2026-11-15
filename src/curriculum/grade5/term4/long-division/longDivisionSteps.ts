// --- Types ---

export type StepType = 'FOCUS' | 'BRING_DOWN' | 'DIVIDE' | 'MULTIPLY' | 'SUBTRACT' | 'FINISH';

export interface BaseStep {
    type: StepType;
    message: string;
    answer?: string;
    col?: number;
    row?: number;
    val?: number;
}

export interface FocusStep extends BaseStep {
    type: 'FOCUS';
    index: number;
    val: number;
}

export interface BringDownStep extends BaseStep {
    type: 'BRING_DOWN';
    digit: number;
    val: number;
    col: number;
    row: number;
    answer: string;
}

export interface DivideStep extends BaseStep {
    type: 'DIVIDE';
    val: number;
    divisor: number;
    result: number;
    col: number;
    answer: string;
}

export interface MultiplyStep extends BaseStep {
    type: 'MULTIPLY';
    qDigit: number;
    divisor: number;
    result: number;
    col: number;
    answer: string;
}

export interface SubtractStep extends BaseStep {
    type: 'SUBTRACT';
    minuend: number;
    subtrahend: number;
    result: number;
    col: number;
    answer: string;
}

export interface FinishStep extends BaseStep {
    type: 'FINISH';
    quotient: number;
    remainder: number;
}

export type Step = FocusStep | BringDownStep | DivideStep | MultiplyStep | SubtractStep | FinishStep;

// --- Logic Helper: Generate Steps ---
export const generateDivisionSteps = (dividend: number, divisor: number): Step[] => {
    const dividendStr = dividend.toString();
    const steps: Step[] = [];
    let currentRemainder = 0;
    let currentRow = 0;

    // If the first digit is smaller than the divisor, start with the first two digits
    // (so the quotient does not begin with a zero).
    const start = dividendStr.length > 1 && parseInt(dividendStr[0]) < divisor ? 1 : 0;

    for (let i = start; i < dividendStr.length; i++) {
        const digit = parseInt(dividendStr[i]);

        let currentVal;
        if (i === start) {
            currentVal = parseInt(dividendStr.slice(0, i + 1));
            steps.push({
                type: 'FOCUS',
                index: i,
                val: currentVal,
                message: start === 0
                    ? `Start with the first digit: ${digit}.`
                    : `${dividendStr[0]} is smaller than ${divisor}, so start with the first two digits: ${currentVal}.`,
            });
        } else {
            currentVal = currentRemainder * 10 + digit;
            steps.push({
                type: 'BRING_DOWN',
                digit: digit,
                val: currentVal,
                col: i,
                row: currentRow,
                message: `Bring down the ${digit} to make ${currentVal}.`,
                answer: digit.toString()
            });
        }

        const qDigit = Math.floor(currentVal / divisor);

        // DIVIDE
        steps.push({
            type: 'DIVIDE',
            val: currentVal,
            divisor: divisor,
            result: qDigit,
            col: i,
            message: `How many times does ${divisor} fit into ${currentVal}?`,
            answer: qDigit.toString()
        });

        // MULTIPLY
        const product = qDigit * divisor;
        steps.push({
            type: 'MULTIPLY',
            qDigit: qDigit,
            divisor: divisor,
            result: product,
            col: i,
            message: `Multiply: ${qDigit} × ${divisor} = ?`,
            answer: product.toString()
        });

        // SUBTRACT
        const nextRemainder = currentVal - product;
        steps.push({
            type: 'SUBTRACT',
            minuend: currentVal,
            subtrahend: product,
            result: nextRemainder,
            col: i,
            message: `Subtract: ${currentVal} - ${product} = ?`,
            answer: nextRemainder.toString()
        });

        currentRemainder = nextRemainder;
        currentRow += 2;
    }

    steps.push({
        type: 'FINISH',
        quotient: Math.floor(dividend / divisor),
        remainder: currentRemainder,
        message: currentRemainder === 0
            ? `Done! The answer is ${Math.floor(dividend / divisor)} with no remainder.`
            : `Done! The answer is ${Math.floor(dividend / divisor)} with a remainder of ${currentRemainder}.`
    });

    return steps;
};

