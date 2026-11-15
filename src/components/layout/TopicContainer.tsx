import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TopicContainerProps {
    title: string;
    subtitle?: string;
    onModeChange?: (mode: 'learn' | 'practice') => void;
    children: React.ReactNode;
    className?: string;
}

export const TopicContainer: React.FC<TopicContainerProps> = ({
    title,
    subtitle,
    onModeChange,
    children,
    className
}) => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    const handleModeChange = (newMode: 'learn' | 'practice') => {
        setMode(newMode);
        onModeChange?.(newMode);
    };

    return (
        <div className={cn("flex flex-col items-center w-full space-y-6 px-4 py-6", className)}>
            <header className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex w-full min-w-0 items-center gap-3 md:w-auto">
                    <div className="bg-brand-blue p-3 rounded-xl shadow-lg shrink-0">
                        <BookOpen className="text-white w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                        <h1 className="text-xl md:text-2xl font-bold text-slate-800 break-words md:truncate">{title}</h1>
                        {subtitle && <p className="text-slate-500 text-sm">{subtitle}</p>}
                    </div>
                </div>

                <div className="flex w-full gap-1 rounded-xl bg-slate-100 p-1 md:w-auto">
                    <button
                        type="button"
                        onClick={() => handleModeChange('learn')}
                        className={cn(
                            "min-h-11 flex-1 rounded-lg px-4 py-2 text-sm font-bold transition-all md:flex-none",
                            mode === 'learn'
                                ? "bg-white text-brand-orange shadow-sm"
                                : "text-slate-500 hover:text-slate-700"
                        )}
                    >
                        Watch & Learn
                    </button>
                    <button
                        type="button"
                        onClick={() => handleModeChange('practice')}
                        className={cn(
                            "min-h-11 flex-1 rounded-lg px-4 py-2 text-sm font-bold transition-all md:flex-none",
                            mode === 'practice'
                                ? "bg-white text-brand-orange shadow-sm"
                                : "text-slate-500 hover:text-slate-700"
                        )}
                    >
                        Interactive Practice
                    </button>
                </div>
            </header>

            <main className="w-full max-w-4xl">
                {children}
            </main>
        </div>
    );
};

export default TopicContainer;
