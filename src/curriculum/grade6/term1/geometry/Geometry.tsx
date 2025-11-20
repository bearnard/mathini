import { useState } from 'react';
import { Square, Box } from 'lucide-react';
import Shapes2D from './Shapes2D';
import Objects3D from './Objects3D';

type SubTopic = '2d' | '3d';

const Geometry = () => {
    const [activeTab, setActiveTab] = useState<SubTopic>('2d');

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Space & Shape (Geometry)</h1>
                    <p className="text-slate-500">Explore 2D shapes and 3D objects</p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab('2d')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === '2d'
                            ? 'bg-indigo-600 text-white shadow-lg scale-105'
                            : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <Square className="w-4 h-4" /> 2D Shapes
                    </button>
                    <button
                        onClick={() => setActiveTab('3d')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === '3d'
                            ? 'bg-indigo-600 text-white shadow-lg scale-105'
                            : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <Box className="w-4 h-4" /> 3D Objects
                    </button>
                </div>

                {/* Content Area */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {activeTab === '2d' && <Shapes2D />}
                    {activeTab === '3d' && <Objects3D />}
                </div>
            </div>
        </div>
    );
};

export default Geometry;
