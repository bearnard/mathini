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
    const [mode, setMode] = useState<'learn' | 'practice'>('practice');

    const handleModeChange = (newMode: 'learn' | 'practice') => {
        setMode(newMode);
        onModeChange?.(newMode);
    };

    return (
        <div className={cn("flex flex-col items-center w-full space-y-6", className)}>
            {/* Header */}
            <header className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-indigo-600 p-3 rounded-xl shadow-lg">
                        <BookOpen className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
                        {subtitle && <p className="text-slate-500 text-sm">{subtitle}</p>}
                    </div>
                </div>

                <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
                    <button
                        onClick={() => handleModeChange('learn')}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                            mode === 'learn'
                                ? "bg-white text-indigo-600 shadow-sm"
                                : "text-slate-500 hover:text-slate-700"
                        )}
                    >
                        Watch & Learn
                    </button>
                    <button
                        onClick={() => handleModeChange('practice')}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                            mode === 'practice'
                                ? "bg-white text-indigo-600 shadow-sm"
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
