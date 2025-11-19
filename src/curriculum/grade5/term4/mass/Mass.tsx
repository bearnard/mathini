
import { useState } from 'react';
import { Scale, ArrowRightLeft, Calculator } from 'lucide-react';
import Conversions from './Conversions';
import ReadingScales from './ReadingScales';
import MassCalculations from './MassCalculations';

type SubTopic = 'conversions' | 'scales' | 'calculations';

const Mass = () => {
    const [activeTab, setActiveTab] = useState<SubTopic>('conversions');

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Measurement: Mass</h1>
                    <p className="text-slate-500">Master grams and kilograms</p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab('conversions')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'conversions'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <ArrowRightLeft className="w-4 h-4" /> Conversions
                    </button>
                    <button
                        onClick={() => setActiveTab('scales')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'scales'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <Scale className="w-4 h-4" /> Reading Scales
                    </button>
                    <button
                        onClick={() => setActiveTab('calculations')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'calculations'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <Calculator className="w-4 h-4" /> Word Problems
                    </button>
                </div>

                {/* Content Area */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {activeTab === 'conversions' && <Conversions />}
                    {activeTab === 'scales' && <ReadingScales />}
                    {activeTab === 'calculations' && <MassCalculations />}
                </div>
            </div>
        </div>
    );
};

export default Mass;
