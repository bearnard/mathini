import { useState } from 'react';
import { Hash, Sparkles } from 'lucide-react';
import LargeNumbers from './LargeNumbers';
import PrimeNumbers from './PrimeNumbers';

type SubTopic = 'large-numbers' | 'prime-numbers';

const G6WholeNumbers = () => {
    const [activeTab, setActiveTab] = useState<SubTopic>('large-numbers');

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Whole Numbers (Grade 6)</h1>
                    <p className="text-slate-500">Master 9-digit numbers and primes</p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab('large-numbers')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'large-numbers'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <Hash className="w-4 h-4" /> Large Numbers
                    </button>
                    <button
                        onClick={() => setActiveTab('prime-numbers')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'prime-numbers'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <Sparkles className="w-4 h-4" /> Prime Numbers
                    </button>
                </div>

                {/* Content Area */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {activeTab === 'large-numbers' && <LargeNumbers />}
                    {activeTab === 'prime-numbers' && <PrimeNumbers />}
                </div>
            </div>
        </div>
    );
};

export default G6WholeNumbers;
