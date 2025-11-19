import { useState } from 'react';
import { Curriculum, Grade, Term, Topic } from './types/curriculum';
import CurriculumSelector from './components/CurriculumSelector';
import LongDivisionTutor from './curriculum/grade5/term4/long-division/LongDivisionTutor';
import WholeNumbers from './curriculum/grade5/term4/whole-numbers/WholeNumbers';
import Mass from './curriculum/grade5/term4/mass/Mass';
import { ArrowLeft } from 'lucide-react';

// --- Curriculum Data Definition ---
const curriculumData: Curriculum = {
    grades: [
        {
            id: 5,
            title: "Grade 5",
            terms: [
                {
                    id: 4,
                    title: "Term 4",
                    topics: [
                        {
                            id: "whole-numbers",
                            title: "Whole Numbers",
                            description: "Counting, ordering, comparing, and place value up to 6 digits.",
                            component: WholeNumbers
                        },
                        {
                            id: "long-division",
                            title: "Long Division",
                            description: "Step-by-step long division with 3-digit dividends.",
                            component: LongDivisionTutor
                        },
                        {
                            id: "mass",
                            title: "Measurement: Mass",
                            description: "Working with grams and kilograms.",
                            component: Mass
                        }
                    ]
                }
            ]
        }
    ]
};

const App = () => {
    const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
    const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

    const handleReset = () => {
        setSelectedGrade(null);
        setSelectedTerm(null);
        setSelectedTopic(null);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Navigation Bar (only visible when deep in navigation) */}
            {selectedTopic && (
                <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-4 sticky top-0 z-50">
                    <button
                        onClick={() => setSelectedTopic(null)}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                        title="Back to Topics"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                            {selectedGrade?.title} • {selectedTerm?.title}
                        </span>
                        <span className="font-bold text-slate-800">{selectedTopic.title}</span>
                    </div>
                </div>
            )}

            {selectedTopic ? (
                <selectedTopic.component />
            ) : (
                <CurriculumSelector
                    curriculum={curriculumData}
                    selectedGrade={selectedGrade}
                    selectedTerm={selectedTerm}
                    selectedTopic={selectedTopic}
                    onSelectGrade={setSelectedGrade}
                    onSelectTerm={setSelectedTerm}
                    onSelectTopic={setSelectedTopic}
                    onReset={handleReset}
                />
            )}
        </div>
    );
};

export default App;