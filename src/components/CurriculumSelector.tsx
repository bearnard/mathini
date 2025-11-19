import React from 'react';
import { ChevronRight, GraduationCap, Calendar, Book } from 'lucide-react';
import { Curriculum, Grade, Term, Topic } from '../types/curriculum';

interface CurriculumSelectorProps {
    curriculum: Curriculum;
    selectedGrade: Grade | null;
    selectedTerm: Term | null;
    selectedTopic: Topic | null;
    onSelectGrade: (grade: Grade) => void;
    onSelectTerm: (term: Term) => void;
    onSelectTopic: (topic: Topic) => void;
    onReset: () => void;
}

const CurriculumSelector: React.FC<CurriculumSelectorProps> = ({
    curriculum,
    selectedGrade,
    selectedTerm,
    selectedTopic,
    onSelectGrade,
    onSelectTerm,
    onSelectTopic,
    onReset
}) => {
    // If a topic is selected, we don't show the selector (handled by parent to show back button)
    if (selectedTopic) return null;

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-slate-800 mb-2">Mathini Tutor</h1>
                <p className="text-slate-500">Select your grade and term to start learning</p>
            </div>

            <div className="space-y-8">
                {/* Grade Selection */}
                {!selectedGrade && (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5" /> Select Grade
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {curriculum.grades.map(grade => (
                                <button
                                    key={grade.id}
                                    onClick={() => onSelectGrade(grade)}
                                    className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-500 transition-all text-left group"
                                >
                                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600">{grade.title}</h3>
                                    <p className="text-sm text-slate-500">{grade.terms.length} Terms Available</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Term Selection */}
                {selectedGrade && !selectedTerm && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
                                <Calendar className="w-5 h-5" /> Select Term for {selectedGrade.title}
                            </h2>
                            <button onClick={onReset} className="text-sm text-slate-400 hover:text-slate-600">Change Grade</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedGrade.terms.map(term => (
                                <button
                                    key={term.id}
                                    onClick={() => onSelectTerm(term)}
                                    className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-500 transition-all text-left group"
                                >
                                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600">{term.title}</h3>
                                    <p className="text-sm text-slate-500">{term.topics.length} Topics</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Topic Selection */}
                {selectedGrade && selectedTerm && !selectedTopic && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
                                <Book className="w-5 h-5" /> Select Topic
                            </h2>
                            <button onClick={() => onSelectTerm(null as any)} className="text-sm text-slate-400 hover:text-slate-600">Change Term</button>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            {selectedTerm.topics.map(topic => (
                                <button
                                    key={topic.id}
                                    onClick={() => onSelectTopic(topic)}
                                    className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-500 transition-all text-left flex justify-between items-center group"
                                >
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600">{topic.title}</h3>
                                        {topic.description && <p className="text-sm text-slate-500">{topic.description}</p>}
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CurriculumSelector;
