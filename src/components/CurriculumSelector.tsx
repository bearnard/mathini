import React from 'react';
import { ChevronRight, GraduationCap, Calendar, Book, ArrowLeft } from 'lucide-react';
import { Curriculum, Grade, Term, Topic } from '../types/curriculum';
import { motion } from 'framer-motion';
import Card from './ui/Card';
import Button from './ui/Button';

interface CurriculumSelectorProps {
    curriculum: Curriculum;
    selectedGrade: Grade | null;
    selectedTerm: Term | null;
    selectedTopic: Topic | null;
    onSelectGrade: (grade: Grade) => void;
    onSelectTerm: (term: Term) => void;
    onSelectTopic: (topic: Topic) => void;
    onBackStep: () => void;
}

const CurriculumSelector: React.FC<CurriculumSelectorProps> = ({
    curriculum,
    selectedGrade,
    selectedTerm,
    selectedTopic,
    onSelectGrade,
    onSelectTerm,
    onSelectTopic,
    onBackStep
}) => {
    if (selectedTopic) return null;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <div className="mb-12 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="inline-block p-4 rounded-3xl bg-white shadow-lg mb-6"
                >
                    <div className="text-5xl">🦁</div>
                </motion.div>
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight"
                >
                    Mathini Tutor
                </motion.h1>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-slate-500 font-medium"
                >
                    Your friendly math companion
                </motion.p>
            </div>

            <div className="space-y-8">
                {/* Grade Selection */}
                {!selectedGrade && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-6"
                    >
                        <div className="flex items-center justify-center gap-2 text-indigo-600 mb-8">
                            <GraduationCap className="w-6 h-6" />
                            <h2 className="text-xl font-bold uppercase tracking-wider">Select Grade</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            {curriculum.grades.map(grade => (
                                <motion.div key={grade.id} variants={item}>
                                    <Card
                                        variant="interactive"
                                        onClick={() => onSelectGrade(grade)}
                                        className="p-6 h-full flex flex-col items-center text-center hover:border-indigo-500 group"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="text-2xl font-black">{grade.id}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">{grade.title}</h3>
                                        <p className="text-slate-500 font-medium">{grade.terms.length} Terms Available</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Term Selection */}
                {selectedGrade && !selectedTerm && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-6"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <Button variant="ghost" size="sm" onClick={onBackStep}>
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back
                            </Button>
                            <div className="flex items-center gap-2 text-indigo-600">
                                <Calendar className="w-6 h-6" />
                                <h2 className="text-xl font-bold uppercase tracking-wider">{selectedGrade.title} Terms</h2>
                            </div>
                            <div className="w-20" /> {/* Spacer for centering */}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedGrade.terms.map(term => (
                                <motion.div key={term.id} variants={item}>
                                    <Card
                                        variant="interactive"
                                        onClick={() => onSelectTerm(term)}
                                        className="p-6 flex items-center justify-between group hover:border-indigo-500"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                                {term.id}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-800">{term.title}</h3>
                                                <p className="text-sm text-slate-500 font-medium">{term.topics.length} Topics</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Topic Selection */}
                {selectedGrade && selectedTerm && !selectedTopic && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-6"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <Button variant="ghost" size="sm" onClick={onBackStep}>
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back
                            </Button>
                            <div className="flex items-center gap-2 text-indigo-600">
                                <Book className="w-6 h-6" />
                                <h2 className="text-xl font-bold uppercase tracking-wider">{selectedTerm.title} Topics</h2>
                            </div>
                            <div className="w-20" /> {/* Spacer */}
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {selectedTerm.topics.map(topic => (
                                <motion.div key={topic.id} variants={item}>
                                    <Card
                                        variant="interactive"
                                        onClick={() => onSelectTopic(topic)}
                                        className="p-5 flex items-center justify-between group hover:border-indigo-500"
                                    >
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{topic.title}</h3>
                                            {topic.description && <p className="text-sm text-slate-500 mt-1 font-medium">{topic.description}</p>}
                                        </div>
                                        <div className="pl-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                                                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default CurriculumSelector;
