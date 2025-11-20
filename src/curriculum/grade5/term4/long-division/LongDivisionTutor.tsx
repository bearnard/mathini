import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, Play, Pause, StepForward, CheckCircle2, Edit3, HelpCircle } from 'lucide-react';
import TopicContainer from '../../../../components/layout/TopicContainer';


// --- Types ---

type StepType = 'FOCUS' | 'BRING_DOWN' | 'DIVIDE' | 'MULTIPLY' | 'SUBTRACT' | 'FINISH';

interface BaseStep {
    type: StepType;
    message: string;
    answer?: string;
    col?: number;
    row?: number;
    val?: number;
}

interface FocusStep extends BaseStep {
    type: 'FOCUS';
    index: number;
    val: number;
}

interface BringDownStep extends BaseStep {
    type: 'BRING_DOWN';
    digit: number;
    val: number;
    col: number;
    row: number;
    answer: string;
}

interface DivideStep extends BaseStep {
    type: 'DIVIDE';
    val: number;
    divisor: number;
    result: number;
    col: number;
    answer: string;
}

interface MultiplyStep extends BaseStep {
    type: 'MULTIPLY';
    qDigit: number;
    divisor: number;
    result: number;
    col: number;
    answer: string;
}

interface SubtractStep extends BaseStep {
    type: 'SUBTRACT';
    minuend: number;
    subtrahend: number;
    result: number;
    col: number;
    answer: string;
}

interface FinishStep extends BaseStep {
    type: 'FINISH';
    quotient: number;
    remainder: number;
}

type Step = FocusStep | BringDownStep | DivideStep | MultiplyStep | SubtractStep | FinishStep;

interface CellStyle {
    borderTop?: string;
    paddingTop?: string;
    borderLeft?: string;
    paddingLeft?: string;
    textAlign?: string;
    paddingRight?: string;
    fontWeight?: string;
    color?: string;
    borderBottom?: string;
}

interface Cell {
    content: string | number;
    style: CellStyle;
    hasMinusSign?: boolean;
}

// --- Logic Helper: Generate Steps ---
const generateDivisionSteps = (dividend: number, divisor: number): Step[] => {
    const dividendStr = dividend.toString();
    const steps: Step[] = [];
    let currentRemainder = 0;
    let currentRow = 0;

    for (let i = 0; i < dividendStr.length; i++) {
        const digit = parseInt(dividendStr[i]);

        let currentVal;
        if (i === 0) {
            currentVal = digit;
            steps.push({
                type: 'FOCUS',
                index: i,
                val: currentVal,
                message: `Start with the first digit: ${digit}.`,
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
        message: `Done! The answer is ${Math.floor(dividend / divisor)} with a remainder of ${currentRemainder}.`
    });

    return steps;
};

const LongDivisionTutor = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    const [dividend, setDividend] = useState(532);
    const [divisor, setDivisor] = useState(4);

    // Input states for "New Problem"
    const [inputDividend, setInputDividend] = useState(532);
    const [inputDivisor, setInputDivisor] = useState(4);
    const [showSettings, setShowSettings] = useState(false);

    const [steps, setSteps] = useState<Step[]>([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [userVal, setUserVal] = useState("");
    const [isError, setIsError] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Initialize
    useEffect(() => {
        resetProblem();
    }, [dividend, divisor]);

    // Focus input when step changes in interactive mode
    useEffect(() => {
        if (mode === 'practice' && inputRef.current) {
            inputRef.current.focus();
            setUserVal("");
            setIsError(false);
        }
    }, [currentStep, mode]);

    const resetProblem = () => {
        const generated = generateDivisionSteps(dividend, divisor);
        setSteps(generated);
        setCurrentStep(0);
        setIsPlaying(false);
        setUserVal("");
        setIsError(false);
    };

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputDivisor === 0) {
            alert("Divisor cannot be zero!");
            return;
        }
        setDividend(inputDividend);
        setDivisor(inputDivisor);
        setShowSettings(false);
    };

    const handleInteractiveSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const correct = steps[currentStep].answer;
        if (userVal === correct) {
            setIsError(false);
            // Small delay for visual satisfaction
            setTimeout(() => {
                setCurrentStep(prev => Math.min(steps.length - 1, prev + 1));
            }, 100);
        } else {
            setIsError(true);
        }
    };

    // Auto-play effect
    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (isPlaying && mode === 'learn' && currentStep < steps.length - 1) {
            interval = setInterval(() => {
                setCurrentStep(prev => prev + 1);
            }, 2000);
        } else {
            setIsPlaying(false);
        }
        return () => clearInterval(interval);
    }, [isPlaying, currentStep, steps.length, mode]);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [currentStep]);

    // --- RENDERERS ---

    const renderBoard = () => {
        const dividendStr = dividend.toString();

        const grid: Cell[][] = [];
        const setCell = (r: number, c: number, content: string | number, style: CellStyle = {}, hasMinusSign = false) => {
            if (!grid[r]) grid[r] = [];
            grid[r][c] = { content, style, hasMinusSign };
        };

        const divOffset = 2;

        // --- SETUP STATIC GRID (Divisor, Dividend, Bracket) ---
        // Quotient Row (Row 0) - filled dynamically
        for (let i = 0; i < dividendStr.length; i++) setCell(0, divOffset + i, "");

        // Dividend Row (Row 1)
        for (let i = 0; i < dividendStr.length; i++) {
            setCell(1, divOffset + i, dividendStr[i], { borderTop: '2px solid #374151', paddingTop: '4px' });
        }
        if (grid[1][divOffset]) {
            grid[1][divOffset].style = { ...grid[1][divOffset].style, borderLeft: '2px solid #374151', paddingLeft: '8px' };
        }
        setCell(1, 0, divisor, { textAlign: 'right', paddingRight: '8px', fontWeight: 'bold' });


        // --- REPLAY HISTORY ---
        let workingRow = 2;
        let quotientMap = Array(dividendStr.length).fill("");

        // Determine how far to render standard text
        // If interactive, we render standard text up to currentStep - 1
        // Then we render an INPUT at currentStep location
        const limit = mode === 'practice' ? currentStep - 1 : currentStep;

        for (let i = 0; i <= limit; i++) {
            const step = steps[i];
            if (!step) break;

            if (step.type === 'DIVIDE') {
                quotientMap[step.col!] = step.result!;
            } else if (step.type === 'MULTIPLY') {
                const productStr = step.result!.toString();
                for (let d = 0; d < productStr.length; d++) {
                    const charIndex = step.col! - (productStr.length - 1) + d;
                    const cellStyle = { color: '#ef4444' };
                    setCell(workingRow, divOffset + charIndex, productStr[d], cellStyle, d === 0);
                }
                for (let d = 0; d < productStr.length; d++) {
                    const charIndex = step.col! - (productStr.length - 1) + d;
                    const cell = grid[workingRow][divOffset + charIndex];
                    if (cell) cell.style = { ...cell.style, borderBottom: '2px solid #9ca3af' };
                }
                workingRow++;
            } else if (step.type === 'SUBTRACT') {
                const diffStr = step.result!.toString();
                for (let d = 0; d < diffStr.length; d++) {
                    const charIndex = step.col! - (diffStr.length - 1) + d;
                    setCell(workingRow, divOffset + charIndex, diffStr[d], { fontWeight: 'bold', color: '#10b981' });
                }
            } else if (step.type === 'BRING_DOWN') {
                setCell(workingRow, divOffset + step.col!, step.digit!, { color: '#3b82f6' });
                workingRow++;
            }
        }

        // If interactive and current step is MULTIPLY, ensure minus sign is visible
        if (mode === 'practice' && steps[currentStep]?.type === 'MULTIPLY') {
            const s = steps[currentStep];
            const productLen = s.answer!.length;
            const startCol = s.col! - (productLen - 1);
            const r = workingRow;
            const c = divOffset + startCol;

            if (!grid[r]) grid[r] = [];
            if (!grid[r][c]) {
                grid[r][c] = { content: "", style: {}, hasMinusSign: true };
            } else {
                grid[r][c].hasMinusSign = true;
            }
        }

        // --- INTERACTIVE INPUT RENDERING ---
        let inputCoords: { r: number, c: number, width?: number } | null = null;
        if (mode === 'practice' && steps[currentStep]) {
            const s = steps[currentStep];
            if (s.type === 'DIVIDE') {
                inputCoords = { r: 0, c: divOffset + s.col };
            } else if (s.type === 'MULTIPLY') {
                inputCoords = { r: workingRow, c: divOffset + s.col, width: s.answer!.length };
            } else if (s.type === 'SUBTRACT') {
                inputCoords = { r: workingRow, c: divOffset + s.col, width: s.answer!.length };
            } else if (s.type === 'BRING_DOWN') {
                inputCoords = { r: workingRow, c: divOffset + s.col };
            }
        }

        // Apply Quotient Values to Grid (Non-Interactive parts)
        quotientMap.forEach((q, idx) => {
            const currentS = steps[currentStep];
            if (q !== "" && (mode !== 'practice' || (currentS && currentS.col !== undefined && currentS.col > idx) || (currentS && currentS.type !== 'DIVIDE'))) {
                setCell(0, divOffset + idx, q, { fontWeight: 'bold', color: '#4f46e5' });
            }
        });


        // --- RENDER JSX ---
        return (
            <div className="inline-grid gap-0 font-mono text-2xl md:text-3xl leading-tight select-none"
                style={{
                    gridTemplateColumns: `max-content 10px repeat(${dividendStr.length}, 2rem)`
                }}>

                {/* Spacers */}
                <div className="h-14"></div><div className="h-14"></div>

                {/* Quotient Row */}
                {Array.from({ length: dividendStr.length }).map((_, i) => {
                    const r = 0, c = divOffset + i;
                    const cell = grid[r] && grid[r][c];
                    const isInput = inputCoords && inputCoords.r === r && inputCoords.c === c;

                    return (
                        <div key={`q-${i}`} className="h-14 flex items-end justify-center pb-2 text-indigo-600 font-bold relative">
                            {isInput ? (
                                <form onSubmit={handleInteractiveSubmit} className="absolute bottom-1 w-full flex justify-center">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        pattern="\d*"
                                        maxLength={1}
                                        className={`w-8 h-10 text-center border-2 rounded shadow-sm focus:outline-none ${isError ? 'border-red-500 bg-red-50 animate-pulse' : 'border-indigo-500 bg-white'}`}
                                        value={userVal}
                                        onChange={(e) => setUserVal(e.target.value)}
                                    />
                                </form>
                            ) : (cell ? cell.content : '')}
                        </div>
                    );
                })}

                {/* Divisor Row */}
                <div className="h-14 flex items-center justify-end pr-2 font-bold text-gray-700">
                    {divisor}
                </div>
                <div className="h-14 border-r-2 border-gray-800 rounded-tr-lg transform translate-y-[2px] -translate-x-[50%] scale-y-110 opacity-80"></div>

                {/* Dividend Digits */}
                {Array.from({ length: dividendStr.length }).map((_, i) => (
                    <div key={`d-${i}`} className="h-14 flex items-center justify-center border-t-2 border-gray-800 text-gray-900">
                        {dividendStr[i]}
                    </div>
                ))}

                {/* Working Rows */}
                {Array.from({ length: Math.max(workingRow, inputCoords ? inputCoords.r + 1 : 0) }).map((_, rIdx) => {
                    const actualRow = rIdx + 2;
                    return (
                        <React.Fragment key={`row-${actualRow}`}>
                            <div className="col-span-2"></div>
                            {Array.from({ length: dividendStr.length }).map((_, cIdx) => {
                                const cell = grid[actualRow] && grid[actualRow][divOffset + cIdx];
                                const isInputTarget = inputCoords && inputCoords.r === actualRow && inputCoords.c === divOffset + cIdx;
                                const inputWidth = (isInputTarget && inputCoords?.width) ? inputCoords.width : 1;
                                const widthStyle = { width: `${inputWidth * 2}rem` };

                                return (
                                    <div key={`cell-${actualRow}-${cIdx}`}
                                        className="h-14 flex items-center justify-center relative"
                                        style={cell?.style as React.CSSProperties}>
                                        {cell?.hasMinusSign && (
                                            <span className="absolute -left-4 text-gray-400 font-normal">-</span>
                                        )}
                                        {isInputTarget ? (
                                            <form onSubmit={handleInteractiveSubmit} className="absolute z-10 flex justify-end" style={{ right: 0, width: 'auto' }}>
                                                <input
                                                    ref={inputRef}
                                                    type="text"
                                                    pattern="\d*"
                                                    className={`h-10 text-center border-2 rounded shadow-sm focus:outline-none text-lg ${isError ? 'border-red-500 bg-red-50' : 'border-blue-500 bg-white'}`}
                                                    style={widthStyle}
                                                    value={userVal}
                                                    placeholder="?"
                                                    onChange={(e) => setUserVal(e.target.value)}
                                                />
                                            </form>
                                        ) : (cell ? cell.content : '')}
                                    </div>
                                )
                            })}
                        </React.Fragment>
                    )
                })}
            </div>
        );
    };

    return (
        <TopicContainer
            title="Long Division Tutor"
            subtitle="Master the step-by-step process"
            onModeChange={(m) => {
                setMode(m);
                resetProblem();
            }}
        >
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Col: Controls */}
                <div className="lg:col-span-1 flex flex-col gap-6">

                    {/* Problem Settings */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                        {!showSettings ? (
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-slate-700 text-lg">{dividend} ÷ {divisor}</h3>
                                    <p className="text-xs text-slate-400">Current Problem</p>
                                </div>
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                                >
                                    <Edit3 className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleInputSubmit} className="space-y-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-sm text-slate-600">Edit Problem</h3>
                                    <button type="button" onClick={() => setShowSettings(false)} className="text-xs text-red-500 font-medium">Cancel</button>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Dividend</label>
                                        <input
                                            type="number"
                                            value={inputDividend}
                                            onChange={(e) => setInputDividend(Number(e.target.value))}
                                            className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none font-mono"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Divisor</label>
                                        <input
                                            type="number"
                                            value={inputDivisor}
                                            onChange={(e) => setInputDivisor(Number(e.target.value))}
                                            className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none font-mono"
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                                    Update Problem
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-slate-700">
                                {mode === 'practice' ? "Your Turn" : "Controls"}
                            </h3>
                            <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                                Step {currentStep + 1}/{steps.length}
                            </span>
                        </div>

                        {mode === 'learn' ? (
                            <div className="grid grid-cols-3 gap-2">
                                <button
                                    onClick={() => { setIsPlaying(false); setCurrentStep(Math.max(0, currentStep - 1)); }}
                                    disabled={currentStep === 0}
                                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 disabled:opacity-50 transition-colors"
                                >
                                    <RotateCcw className="w-5 h-5 mb-1" />
                                    <span className="text-xs font-medium">Back</span>
                                </button>

                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    disabled={currentStep >= steps.length - 1}
                                    className={`flex flex-col items-center justify-center p-3 rounded-xl text-white transition-all shadow-md ${isPlaying ? 'bg-amber-500 hover:bg-amber-600' : 'bg-indigo-600 hover:bg-indigo-700'} disabled:opacity-50 disabled:shadow-none`}
                                >
                                    {isPlaying ? <Pause className="w-5 h-5 mb-1" /> : <Play className="w-5 h-5 mb-1" />}
                                    <span className="text-xs font-medium">{isPlaying ? "Pause" : "Play"}</span>
                                </button>

                                <button
                                    onClick={() => { setIsPlaying(false); setCurrentStep(Math.min(steps.length - 1, currentStep + 1)); }}
                                    disabled={currentStep >= steps.length - 1}
                                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 disabled:opacity-50 transition-colors"
                                >
                                    <StepForward className="w-5 h-5 mb-1" />
                                    <span className="text-xs font-medium">Next</span>
                                </button>
                            </div>
                        ) : (
                            <div className="text-center space-y-4">
                                {steps[currentStep]?.type !== 'FINISH' && steps[currentStep]?.type !== 'FOCUS' ? (
                                    <div className="p-4 bg-indigo-50 rounded-xl text-indigo-800 text-sm">
                                        <p className="font-bold mb-1">Enter the missing number!</p>
                                        <p className="opacity-80">Type the answer in the box and press Enter.</p>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
                                        disabled={currentStep >= steps.length - 1}
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold shadow-md"
                                    >
                                        {steps[currentStep]?.type === 'FINISH' ? 'All Done!' : 'Start'}
                                    </button>
                                )}

                                <button
                                    onClick={resetProblem}
                                    className="text-slate-400 hover:text-slate-600 text-xs font-medium flex items-center justify-center gap-1 mx-auto"
                                >
                                    <RotateCcw className="w-3 h-3" /> Reset
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Col: Visualization */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* Instruction Banner */}
                    <div className={`p-5 rounded-2xl border-l-4 shadow-sm transition-all duration-500 ${steps[currentStep]?.type === 'FINISH'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                        : isError
                            ? 'bg-red-50 border-red-500 text-red-800'
                            : 'bg-white border-indigo-500 text-slate-700'
                        }`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
                                    {steps[currentStep]?.type === 'FINISH' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                                    {steps[currentStep]?.type === 'DIVIDE' && "Step 1: Divide"}
                                    {steps[currentStep]?.type === 'MULTIPLY' && "Step 2: Multiply"}
                                    {steps[currentStep]?.type === 'SUBTRACT' && "Step 3: Subtract"}
                                    {steps[currentStep]?.type === 'BRING_DOWN' && "Step 4: Bring Down"}
                                    {steps[currentStep]?.type === 'FOCUS' && "Get Ready"}
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    {isError ? "That's not quite right. Try again!" : steps[currentStep]?.message}
                                </p>
                            </div>
                            {mode === 'practice' && steps[currentStep]?.type !== 'FINISH' && steps[currentStep]?.type !== 'FOCUS' && (
                                <HelpCircle className="text-slate-300 w-6 h-6" />
                            )}
                        </div>
                    </div>

                    {/* The Math Stage */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 flex-grow min-h-[400px] p-8 relative overflow-hidden flex justify-center items-start">
                        <div className="overflow-auto w-full h-full flex justify-center" ref={scrollRef}>
                            {renderBoard()}
                        </div>

                        <div className="absolute bottom-4 right-4 text-slate-100 font-bold text-6xl pointer-events-none select-none opacity-50">
                            ÷
                        </div>
                    </div>

                </div>
            </div>
        </TopicContainer>
    );
};

export default LongDivisionTutor;
