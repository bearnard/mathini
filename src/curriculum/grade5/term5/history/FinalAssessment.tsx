import { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCw, Trophy, PenTool } from 'lucide-react';

interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

const questions: Question[] = [
    {
        id: 1,
        text: "Which river was essential for the survival of Ancient Egyptians?",
        options: ["Amazon River", "Nile River", "Orange River", "Limpopo River"],
        correctAnswer: 1,
        explanation: "The Nile River provided water, fertile soil (silt), and transportation for the Ancient Egyptians."
    },
    {
        id: 2,
        text: "What was the writing system of Ancient Egypt called?",
        options: ["Alphabet", "Cuneiform", "Hieroglyphics", "Sanskrit"],
        correctAnswer: 2,
        explanation: "Hieroglyphics used pictures and symbols to represent words and sounds."
    },
    {
        id: 3,
        text: "Who were the people specially trained to read and write in Ancient Egypt?",
        options: ["Pharaohs", "Farmers", "Scribes", "Soldiers"],
        correctAnswer: 2,
        explanation: "Scribes were highly respected and underwent years of training to master hieroglyphics."
    },
    {
        id: 4,
        text: "What is the capital city of the Western Cape?",
        options: ["Johannesburg", "Durban", "Cape Town", "Bloemfontein"],
        correctAnswer: 2,
        explanation: "Cape Town is the legislative capital of South Africa and the capital of the Western Cape."
    },
    {
        id: 5,
        text: "Where can you find the Golden Rhinoceros?",
        options: ["Table Mountain", "Mapungubwe", "Kruger National Park", "Robben Island"],
        correctAnswer: 1,
        explanation: "The Golden Rhinoceros was found at Mapungubwe, an ancient African kingdom."
    },
    {
        id: 6,
        text: "Which province is known for the Cradle of Humankind?",
        options: ["Gauteng", "Limpopo", "Mpumalanga", "North West"],
        correctAnswer: 0,
        explanation: "The Cradle of Humankind is located in Gauteng, northwest of Johannesburg."
    },
    {
        id: 7,
        text: "What is the largest dam in South Africa?",
        options: ["Vaal Dam", "Gariep Dam", "Pongolapoort Dam", "Sterkfontein Dam"],
        correctAnswer: 1,
        explanation: "The Gariep Dam on the Orange River is the largest dam in South Africa."
    },
    {
        id: 8,
        text: "Which plant is widely used in indigenous medicine for skin ailments?",
        options: ["Protea", "Baobab", "Aloe", "Rooibos"],
        correctAnswer: 2,
        explanation: "The Aloe (specifically Aloe ferox) is used for healing skin ailments and burns."
    },
    {
        id: 9,
        text: "Where is the Castle of Good Hope located?",
        options: ["Pretoria", "Cape Town", "Port Elizabeth", "East London"],
        correctAnswer: 1,
        explanation: "The Castle of Good Hope is the oldest surviving colonial building in South Africa, located in Cape Town."
    },
    {
        id: 10,
        text: "What animal is frequently depicted in San rock art?",
        options: ["Lion", "Elephant", "Eland", "Giraffe"],
        correctAnswer: 2,
        explanation: "The Eland held great spiritual significance for the San people and is often found in their rock art."
    },
    {
        id: 11,
        text: "Who was Frances Baard?",
        options: ["A famous singer", "A trade unionist and anti-apartheid activist", "The first female president", "A famous doctor"],
        correctAnswer: 1,
        explanation: "Frances Baard was a prominent South African trade unionist and anti-apartheid activist."
    },
    {
        id: 12,
        text: "Where is the stone-walled town of Kaditshwene located?",
        options: ["North West", "Free State", "KwaZulu-Natal", "Eastern Cape"],
        correctAnswer: 0,
        explanation: "Kaditshwene is an Iron Age stone-walled town located in the North West province."
    },
    {
        id: 13,
        text: "What are the Makhonjwa Mountains known for?",
        options: ["Being the highest in Africa", "Containing some of the oldest exposed rocks on Earth", "Having the most snow", "Being a volcanic range"],
        correctAnswer: 1,
        explanation: "The Makhonjwa Mountains in Mpumalanga contain some of the oldest exposed rocks on Earth."
    },
    {
        id: 14,
        text: "Which continent is Egypt located in?",
        options: ["Asia", "Europe", "Africa", "South America"],
        correctAnswer: 2,
        explanation: "Egypt is located in the northeast corner of Africa."
    },
    {
        id: 15,
        text: "What plant did Ancient Egyptians use to make paper?",
        options: ["Bamboo", "Papyrus", "Cotton", "Pine"],
        correctAnswer: 1,
        explanation: "Papyrus reeds grew along the Nile and were used to make paper, boats, and sandals."
    },
    {
        id: 16,
        text: "Why did Ancient Egyptians build pyramids?",
        options: ["As houses for the poor", "As tombs for Pharaohs", "As grain stores", "As forts for soldiers"],
        correctAnswer: 1,
        explanation: "Pyramids were built as grand tombs to protect the bodies of Pharaohs for the afterlife."
    },
    {
        id: 17,
        text: "What is a Pharaoh?",
        options: ["A priest", "A soldier", "A farmer", "A ruler or king"],
        correctAnswer: 3,
        explanation: "The Pharaoh was the supreme ruler of Ancient Egypt, considered to be a god on earth."
    },
    {
        id: 18,
        text: "What is the Sphinx?",
        options: ["A cat with wings", "A statue with a lion's body and human head", "A large pyramid", "A famous temple"],
        correctAnswer: 1,
        explanation: "The Great Sphinx of Giza is a limestone statue of a reclining sphinx, a mythical creature."
    },
    {
        id: 19,
        text: "What is the capital city of Gauteng?",
        options: ["Pretoria", "Johannesburg", "Soweto", "Centurion"],
        correctAnswer: 1,
        explanation: "Johannesburg is the provincial capital of Gauteng."
    },
    {
        id: 20,
        text: "What is the capital city of KwaZulu-Natal?",
        options: ["Durban", "Pietermaritzburg", "Richards Bay", "Ulundi"],
        correctAnswer: 1,
        explanation: "Pietermaritzburg is the capital city of KwaZulu-Natal."
    },
    {
        id: 21,
        text: "What is the capital city of the Free State?",
        options: ["Welkom", "Bloemfontein", "Kroonstad", "Bethlehem"],
        correctAnswer: 1,
        explanation: "Bloemfontein is the capital city of the Free State and the judicial capital of South Africa."
    },
    {
        id: 22,
        text: "What is the capital city of the Northern Cape?",
        options: ["Upington", "Kimberley", "De Aar", "Springbok"],
        correctAnswer: 1,
        explanation: "Kimberley is the capital city of the Northern Cape."
    },
    {
        id: 23,
        text: "What is the capital city of the Eastern Cape?",
        options: ["Port Elizabeth (Gqeberha)", "East London", "Bhisho", "Mthatha"],
        correctAnswer: 2,
        explanation: "Bhisho is the capital city of the Eastern Cape."
    },
    {
        id: 24,
        text: "What is the capital city of Mpumalanga?",
        options: ["Mbombela (Nelspruit)", "Witbank", "Secunda", "Barberton"],
        correctAnswer: 0,
        explanation: "Mbombela (formerly Nelspruit) is the capital city of Mpumalanga."
    },
    {
        id: 25,
        text: "What is the capital city of Limpopo?",
        options: ["Thohoyandou", "Polokwane", "Tzaneen", "Mokopane"],
        correctAnswer: 1,
        explanation: "Polokwane is the capital city of Limpopo."
    },
    {
        id: 26,
        text: "What is the 'Order of Mapungubwe'?",
        options: ["A secret society", "South Africa's highest honour", "A type of gold coin", "An ancient law"],
        correctAnswer: 1,
        explanation: "The Order of Mapungubwe is South Africa's highest honour, awarded for excellence and exceptional achievement."
    },
    {
        id: 27,
        text: "Who built the Castle of Good Hope?",
        options: ["The British", "The Portuguese", "The Dutch East India Company (VOC)", "The French"],
        correctAnswer: 2,
        explanation: "It was built by the Dutch East India Company (VOC) between 1666 and 1679."
    },
    {
        id: 28,
        text: "Which people lived in the town of Kaditshwene?",
        options: ["The Zulu people", "The Bahurutshe people", "The Xhosa people", "The Venda people"],
        correctAnswer: 1,
        explanation: "Kaditshwene was the capital of the Bahurutshe people."
    },
    {
        id: 29,
        text: "What famous fossil was found at the Cradle of Humankind?",
        options: ["Lucy", "Mrs Ples", "Turkana Boy", "Ardi"],
        correctAnswer: 1,
        explanation: "'Mrs Ples' is the nickname for a famous fossil skull found at the Sterkfontein Caves."
    },
    {
        id: 30,
        text: "What is the main purpose of the Gariep Dam?",
        options: ["Fishing only", "Swimming", "Irrigation and hydro-electricity", "Boating"],
        correctAnswer: 2,
        explanation: "The dam provides water for irrigation and generates hydro-electricity."
    }
];

const FinalAssessment = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [essayOption, setEssayOption] = useState<'A' | 'B' | null>(null);
    const [essayText, setEssayText] = useState('');
    const [showEssayModel, setShowEssayModel] = useState(false);

    const handleOptionClick = (index: number) => {
        if (showResult) return;
        setSelectedOption(index);
    };

    const handleCheckAnswer = () => {
        if (selectedOption === null) return;

        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setShowResult(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setShowResult(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setShowResult(false);
        setScore(0);
        setQuizCompleted(false);
        setEssayOption(null);
        setEssayText('');
        setShowEssayModel(false);
    };

    if (quizCompleted) {
        if (!essayOption) {
            return (
                <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex items-center justify-center">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Trophy className="w-10 h-10 text-yellow-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Section Complete!</h2>
                            <p className="text-slate-600 mb-6">You scored {score} out of {questions.length}</p>
                            
                            <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden">
                                <div 
                                    className="bg-indigo-600 h-full transition-all duration-1000"
                                    style={{ width: `${(score / questions.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        <div className="border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <PenTool className="w-5 h-5 text-indigo-600" />
                                Paragraph Writing Section
                            </h3>
                            <p className="text-slate-600 mb-6">Choose one of the following topics to write a paragraph about. Remember to use a topic sentence and a closing sentence.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button 
                                    onClick={() => setEssayOption('A')}
                                    className="p-6 rounded-xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left"
                                >
                                    <span className="font-bold text-indigo-600 block mb-2">Option A</span>
                                    Write about important ways in which the Nile River was useful to the Egyptians.
                                </button>
                                <button 
                                    onClick={() => setEssayOption('B')}
                                    className="p-6 rounded-xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left"
                                >
                                    <span className="font-bold text-indigo-600 block mb-2">Option B</span>
                                    Write about the role of scribes and hieroglyphics in Ancient Egypt.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Paragraph Writing: Option {essayOption}</h2>
                    <p className="text-slate-600 mb-4">
                        {essayOption === 'A' 
                            ? "Write about important ways in which the Nile River was useful to the Egyptians."
                            : "Write about the role of scribes and hieroglyphics in Ancient Egypt."}
                    </p>

                    {!showEssayModel ? (
                        <>
                            <textarea
                                value={essayText}
                                onChange={(e) => setEssayText(e.target.value)}
                                className="w-full h-48 p-4 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-0 resize-none mb-6"
                                placeholder="Start writing your paragraph here..."
                            />
                            <button
                                onClick={() => setShowEssayModel(true)}
                                disabled={essayText.length < 20}
                                className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Submit and Compare
                            </button>
                        </>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-slate-50 p-6 rounded-xl mb-6">
                                <h4 className="font-bold text-slate-700 mb-2">Your Answer:</h4>
                                <p className="text-slate-600">{essayText}</p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-8">
                                <h4 className="font-bold text-green-800 mb-2">Model Answer / Key Points:</h4>
                                {essayOption === 'A' ? (
                                    <ul className="list-disc list-inside space-y-2 text-green-700">
                                        <li><strong>Topic Sentence:</strong> The Nile River was the lifeblood of Ancient Egypt, providing essential resources for survival.</li>
                                        <li>It provided water for drinking and irrigation in a desert land.</li>
                                        <li>The annual flooding left behind rich, fertile black silt for farming.</li>
                                        <li>It served as a major transportation route for trade and travel (using boats).</li>
                                        <li>It provided food (fish and waterbirds) and papyrus reeds for paper.</li>
                                        <li><strong>Closing Sentence:</strong> Without the Nile River, the civilization of Ancient Egypt would not have been able to flourish.</li>
                                    </ul>
                                ) : (
                                    <ul className="list-disc list-inside space-y-2 text-green-700">
                                        <li><strong>Topic Sentence:</strong> Scribes played a vital role in Ancient Egyptian society by recording its history and daily life.</li>
                                        <li>Scribes were among the few people who could read and write hieroglyphics.</li>
                                        <li>They underwent years of strict training to master the complex writing system.</li>
                                        <li>They recorded taxes, food supplies, court cases, and religious texts.</li>
                                        <li>Hieroglyphics used pictures and symbols to represent sounds and objects.</li>
                                        <li><strong>Closing Sentence:</strong> The work of scribes has allowed us to understand the rich history and culture of Ancient Egypt today.</li>
                                    </ul>
                                )}
                            </div>

                            <button
                                onClick={handleRestart}
                                className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors"
                            >
                                <RefreshCw className="w-5 h-5" /> Start Over
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">History Final Assessment</h1>
                        <p className="text-slate-500">Question {currentQuestion + 1} of {questions.length}</p>
                    </div>
                    <div className="text-indigo-600 font-bold bg-indigo-50 px-4 py-2 rounded-lg">
                        Score: {score}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 md:p-8">
                        <h3 className="text-xl font-medium text-slate-800 mb-6">{question.text}</h3>

                        <div className="space-y-3">
                            {question.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionClick(index)}
                                    disabled={showResult}
                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                                        showResult
                                            ? index === question.correctAnswer
                                                ? 'border-green-500 bg-green-50 text-green-700'
                                                : index === selectedOption
                                                    ? 'border-red-500 bg-red-50 text-red-700'
                                                    : 'border-slate-100 text-slate-400'
                                            : selectedOption === index
                                                ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                                                : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50 text-slate-600'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{option}</span>
                                        {showResult && index === question.correctAnswer && (
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        )}
                                        {showResult && index === selectedOption && index !== question.correctAnswer && (
                                            <XCircle className="w-5 h-5 text-red-600" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {showResult && (
                            <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-xl text-sm">
                                <span className="font-bold">Explanation:</span> {question.explanation}
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                        {!showResult ? (
                            <button
                                onClick={handleCheckAnswer}
                                disabled={selectedOption === null}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Check Answer
                            </button>
                        ) : (
                            <button
                                onClick={handleNextQuestion}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                            >
                                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalAssessment;
