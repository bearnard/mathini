import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

interface StreakProps {
    count: number;
}

const Streak = ({ count }: StreakProps) => {
    return (
        <div className="relative flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full font-bold border border-orange-100 shadow-sm overflow-hidden">
            <motion.div
                animate={{
                    scale: count > 0 ? [1, 1.2, 1] : 1,
                    rotate: count > 0 ? [0, -10, 10, 0] : 0
                }}
                transition={{ duration: 0.5 }}
            >
                <Flame className={`w-5 h-5 ${count > 0 ? 'fill-orange-500 text-orange-600' : 'text-slate-300'}`} />
            </motion.div>

            <div className="flex flex-col leading-none">
                <span className="text-xs uppercase tracking-wider text-orange-400 font-extrabold">Streak</span>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={count}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className="text-xl font-black"
                    >
                        {count}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Background particle effect for high streaks */}
            {count >= 5 && (
                <motion.div
                    className="absolute inset-0 bg-orange-400/10 z-0"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )}
        </div>
    );
};

export default Streak;
