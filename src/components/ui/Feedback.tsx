import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import Button from './Button';

interface FeedbackProps {
    isCorrect: boolean | null;
    correctMessage?: string;
    incorrectMessage?: string;
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
                            ? 'bg-emerald-50 border-emerald-100'
                            : 'bg-red-50 border-red-100'
                        }`}
                >
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <div className={`p-3 rounded-full ${isCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                            {isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
                        </div>
                        <div>
                            <h3 className={`font-bold text-lg ${isCorrect ? 'text-emerald-900' : 'text-red-900'}`}>
                                {isCorrect ? "Great Job!" : "Oops!"}
                            </h3>
                            <p className={`font-medium ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
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
