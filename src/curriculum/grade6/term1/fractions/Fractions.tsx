import { useState } from 'react';
import { PieChart, ArrowLeftRight, Circle } from 'lucide-react';
import EquivalentFractions from './EquivalentFractions';
import ComparingFractions from './ComparingFractions';
import DecimalPlaceValue from './DecimalPlaceValue';

type SubTopic = 'equivalent' | 'comparing' | 'decimals';

const Fractions = () => {
    const [activeTab, setActiveTab] = useState<SubTopic>('equivalent');

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Fractions & Decimals</h1>
                    <p className="text-slate-500">Master fractions and decimal numbers</p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab('equivalent')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'equivalent'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <ArrowLeftRight className="w-4 h-4" /> Equivalent
                    </button>
                    <button
                        onClick={() => setActiveTab('comparing')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'comparing'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <PieChart className="w-4 h-4" /> Comparing
                    </button>
                    <button
                        onClick={() => setActiveTab('decimals')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'decimals'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <Circle className="w-4 h-4" /> Decimals
                    </button>
                </div>

                {/* Content Area */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {activeTab === 'equivalent' && <EquivalentFractions />}
                    {activeTab === 'comparing' && <ComparingFractions />}
                    {activeTab === 'decimals' && <DecimalPlaceValue />}
                </div>
            </div>
        </div>
    );
};

export default Fractions;
