'use client';

import { Suspense, useState } from 'react';
import type { Curriculum, Grade, Subject, Term, Topic } from './types/curriculum';
import CurriculumSelector from './components/CurriculumSelector';
import { grade5 } from './curriculum/grade5';
import { grade6 } from './curriculum/grade6';
import { grade7 } from './curriculum/grade7';
import { grade8 } from './curriculum/grade8';
import { grade9 } from './curriculum/grade9';
import { grade10 } from './curriculum/grade10';
import { grade11 } from './curriculum/grade11';
import { grade12 } from './curriculum/grade12';
import { ArrowLeft } from 'lucide-react';

// --- Curriculum Data Definition ---
const curriculumData: Curriculum = {
  grades: [grade5, grade6, grade7, grade8, grade9, grade10, grade11, grade12],
};

const App = () => {
    const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

    const handleBackStep = () => {
        if (selectedTopic) {
            setSelectedTopic(null);
        } else if (selectedTerm) {
            setSelectedTerm(null);
        } else if (selectedSubject) {
            setSelectedSubject(null);
        } else if (selectedGrade) {
            setSelectedGrade(null);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-slate-50">
            {/* Navigation Bar (only visible when deep in navigation) */}
            {selectedTopic && (
                <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center gap-4 sticky top-0 z-50 shadow-sm">
                    <button
                        onClick={() => setSelectedTopic(null)}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                        title="Back to Topics"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                            {selectedGrade?.title} • {selectedSubject?.title} • {selectedTerm?.title}
                        </span>
                        <span className="font-bold text-slate-800">{selectedTopic.title}</span>
                    </div>
                </div>
            )}

            {selectedTopic ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Suspense fallback={
                        <div className="flex justify-center items-center p-16">
                            <span className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
                        </div>
                    }>
                        <selectedTopic.component />
                    </Suspense>
                </div>
            ) : (
                <CurriculumSelector
                    curriculum={curriculumData}
                    selectedGrade={selectedGrade}
                    selectedSubject={selectedSubject}
                    selectedTerm={selectedTerm}
                    selectedTopic={selectedTopic}
                    onSelectGrade={setSelectedGrade}
                    onSelectSubject={setSelectedSubject}
                    onSelectTerm={setSelectedTerm}
                    onSelectTopic={setSelectedTopic}
                    onBackStep={handleBackStep}
                />
            )}
        </div>
    );
};

export default App;
