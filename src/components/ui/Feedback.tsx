import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import Button from './Button';

interface FeedbackProps {
    isCorrect: boolean | null;
    correctMessage?: ReactNode;
    incorrectMessage?: ReactNode;
    onNext: () => void;
    actionLabel?: string;
}

const Feedback = ({
    isCorrect,
    correctMessage = "Correct!",
    incorrectMessage = "Not quite, try again.",
    onNext,
    actionLabel = "Next"
}: FeedbackProps) => {
    return (
        <AnimatePresence>
            {isCorrect !== null && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className={`p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border-2 ${isCorrect
                            ? 'bg-brand-green/15 border-brand-green/30'
                            : 'bg-brand-coral/15 border-brand-coral/30'
                        }`}
                >
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <div className={`p-3 rounded-full ${isCorrect ? 'bg-brand-green/20 text-brand-green' : 'bg-brand-coral/20 text-brand-coral'}`}>
                            {isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
                        </div>
                        <div>
                            <h3 className={`font-bold text-lg ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                                {isCorrect ? "Great Job!" : "Oops!"}
                            </h3>
                            <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                {isCorrect ? correctMessage : incorrectMessage}
                            </p>
                        </div>
                    </div>

                    <Button
                        onClick={onNext}
                        variant={isCorrect ? 'success' : 'danger'}
                        className="w-full md:w-auto shadow-sm"
                    >
                        {actionLabel} <RefreshCw className="ml-2 w-4 h-4" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Feedback;
