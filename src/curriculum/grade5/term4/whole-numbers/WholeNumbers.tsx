import { useState } from 'react';
import { Hash, ArrowLeftRight, Target } from 'lucide-react';
import PlaceValue from './PlaceValue';
import Rounding from './Rounding';
import Comparing from './Comparing';

type SubTopic = 'place-value' | 'rounding' | 'comparing';

const WholeNumbers = () => {
    const [activeTab, setActiveTab] = useState<SubTopic>('place-value');

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Whole Numbers</h1>
                    <p className="text-slate-500">Master numbers up to 6 digits</p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab('place-value')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'place-value'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <Hash className="w-4 h-4" /> Place Value
                    </button>
                    <button
                        onClick={() => setActiveTab('rounding')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'rounding'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <Target className="w-4 h-4" /> Rounding
                    </button>
                    <button
                        onClick={() => setActiveTab('comparing')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'comparing'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <ArrowLeftRight className="w-4 h-4" /> Comparing
                    </button>
                </div>

                {/* Content Area */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {activeTab === 'place-value' && <PlaceValue />}
                    {activeTab === 'rounding' && <Rounding />}
                    {activeTab === 'comparing' && <Comparing />}
                </div>
            </div>
        </div>
    );
};

export default WholeNumbers;
