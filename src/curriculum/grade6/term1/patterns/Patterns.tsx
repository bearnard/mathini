import { useState } from 'react';
import { TrendingUp, GitBranch } from 'lucide-react';
import NumberPatterns from './NumberPatterns';
import FlowDiagrams from './FlowDiagrams';

type SubTopic = 'patterns' | 'flow';

const Patterns = () => {
    const [activeTab, setActiveTab] = useState<SubTopic>('patterns');

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Patterns, Functions & Algebra</h1>
                    <p className="text-slate-500">Discover mathematical patterns and relationships</p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab('patterns')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'patterns'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <TrendingUp className="w-4 h-4" /> Number Patterns
                    </button>
                    <button
                        onClick={() => setActiveTab('flow')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'flow'
                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <GitBranch className="w-4 h-4" /> Flow Diagrams
                    </button>
                </div>

                {/* Content Area */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {activeTab === 'patterns' && <NumberPatterns />}
                    {activeTab === 'flow' && <FlowDiagrams />}
                </div>
            </div>
        </div>
    );
};

export default Patterns;
