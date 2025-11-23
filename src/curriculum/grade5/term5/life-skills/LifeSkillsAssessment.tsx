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
    // Festivals and Customs
    {
        id: 1,
        text: "Which public holiday in South Africa is celebrated on September 24th?",
        options: ["Freedom Day", "Heritage Day", "Youth Day", "Mandela Day"],
        correctAnswer: 1,
        explanation: "Heritage Day is celebrated on September 24th to honor the diverse cultures and traditions of South Africa."
    },
    {
        id: 2,
        text: "Which religious festival involves lighting lamps and is known as the 'Festival of Lights'?",
        options: ["Christmas", "Eid", "Diwali", "Hanukkah"],
        correctAnswer: 2,
        explanation: "Diwali is the Hindu Festival of Lights, symbolizing the victory of light over darkness."
    },
    {
        id: 3,
        text: "What is the main purpose of celebrating festivals?",
        options: ["To get gifts", "To miss school", "To remember and celebrate our culture and beliefs", "To eat sweets"],
        correctAnswer: 2,
        explanation: "Festivals help us remember important events, celebrate our culture, and strengthen community bonds."
    },
    {
        id: 4,
        text: "Which festival marks the end of Ramadan for Muslims?",
        options: ["Eid al-Fitr", "Easter", "Yom Kippur", "Diwali"],
        correctAnswer: 0,
        explanation: "Eid al-Fitr is celebrated by Muslims to mark the end of the fasting month of Ramadan."
    },
    {
        id: 5,
        text: "What do Christians celebrate on December 25th?",
        options: ["The New Year", "The birth of Jesus Christ", "The harvest", "Independence"],
        correctAnswer: 1,
        explanation: "Christmas is celebrated by Christians to commemorate the birth of Jesus Christ."
    },
    {
        id: 6,
        text: "Which of these is a custom in African Traditional Religion?",
        options: ["Lighting a Menorah", "Ancestral worship/veneration", "Going to Mecca", "Baptism"],
        correctAnswer: 1,
        explanation: "Veneration of ancestors is a key practice in many African Traditional Religions."
    },

    // Healthy Eating
    {
        id: 7,
        text: "Which food group gives us energy to play and learn?",
        options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
        correctAnswer: 1,
        explanation: "Carbohydrates, like bread, rice, and potatoes, provide the body with energy."
    },
    {
        id: 8,
        text: "Why is calcium important for children?",
        options: ["It makes hair grow", "It builds strong bones and teeth", "It gives us energy", "It prevents colds"],
        correctAnswer: 1,
        explanation: "Calcium, found in milk and cheese, is essential for building strong bones and teeth."
    },
    {
        id: 9,
        text: "What is a balanced diet?",
        options: ["Eating only vegetables", "Eating only meat", "Eating a variety of foods from all food groups in the right amounts", "Eating as much as you want"],
        correctAnswer: 2,
        explanation: "A balanced diet includes proteins, carbohydrates, fats, vitamins, and minerals in the correct proportions."
    },
    {
        id: 10,
        text: "Which of these is a healthy snack?",
        options: ["Potato chips", "An apple", "Chocolate bar", "Soda"],
        correctAnswer: 1,
        explanation: "Fruit, like an apple, provides vitamins and fiber without the excess sugar and fat found in junk food."
    },
    {
        id: 11,
        text: "What can happen if you eat too much sugar and fat?",
        options: ["You get stronger", "You might develop health problems like obesity and tooth decay", "You will grow taller", "Nothing happens"],
        correctAnswer: 1,
        explanation: "Excess sugar and fat can lead to weight gain, tooth decay, and other health issues."
    },
    {
        id: 12,
        text: "Why is drinking water important?",
        options: ["It tastes good", "It keeps our body hydrated and helps it work properly", "It makes us sleep", "It replaces food"],
        correctAnswer: 1,
        explanation: "Water is vital for digestion, temperature regulation, and overall body function."
    },

    // Local Environmental Problems
    {
        id: 13,
        text: "What is littering?",
        options: ["Planting trees", "Throwing rubbish on the ground instead of in a bin", "Recycling paper", "Cleaning the park"],
        correctAnswer: 1,
        explanation: "Littering is the act of dropping trash in public places, which harms the environment."
    },
    {
        id: 14,
        text: "What does 'Reduce, Reuse, Recycle' help us do?",
        options: ["Make more money", "Protect the environment and manage waste", "Drive faster", "Eat healthier"],
        correctAnswer: 1,
        explanation: "The 3 Rs are a strategy to minimize waste and conserve natural resources."
    },
    {
        id: 15,
        text: "Which of these causes air pollution?",
        options: ["Riding a bicycle", "Smoke from factories and cars", "Planting flowers", "Solar panels"],
        correctAnswer: 1,
        explanation: "Emissions from vehicles and industries release harmful gases into the air."
    },
    {
        id: 16,
        text: "What happens when we cut down too many trees (deforestation)?",
        options: ["Animals lose their homes and the air gets dirtier", "We get more rain", "The soil gets better", "Nothing bad happens"],
        correctAnswer: 0,
        explanation: "Trees provide oxygen and habitats; removing them destroys ecosystems and contributes to climate change."
    },
    {
        id: 17,
        text: "Why should we not pour oil or chemicals down the drain?",
        options: ["It smells nice", "It cleans the pipes", "It pollutes the water and kills fish", "It makes the water blue"],
        correctAnswer: 2,
        explanation: "Chemicals and oil contaminate water sources, harming aquatic life and making water unsafe."
    },
    {
        id: 18,
        text: "What is soil erosion?",
        options: ["Planting seeds", "The washing or blowing away of the top layer of soil", "Making compost", "Watering the garden"],
        correctAnswer: 1,
        explanation: "Soil erosion removes the fertile topsoil needed for plants to grow, often caused by wind or water."
    },

    // Substance Abuse
    {
        id: 19,
        text: "What is substance abuse?",
        options: ["Taking medicine from a doctor", "Using drugs or alcohol in a way that harms your body and mind", "Drinking water", "Eating vegetables"],
        correctAnswer: 1,
        explanation: "Substance abuse involves the harmful or hazardous use of psychoactive substances, including alcohol and illicit drugs."
    },
    {
        id: 20,
        text: "Which of these is a legal drug but can still be harmful?",
        options: ["Heroin", "Alcohol", "Cocaine", "Tik"],
        correctAnswer: 1,
        explanation: "Alcohol is legal for adults but can cause serious health and social problems if abused."
    },
    {
        id: 21,
        text: "What is passive smoking?",
        options: ["Smoking outside", "Breathing in smoke from someone else's cigarette", "Not smoking at all", "Quitting smoking"],
        correctAnswer: 1,
        explanation: "Passive smoking is inhaling second-hand smoke, which is also dangerous to your health."
    },
    {
        id: 22,
        text: "Why do some young people start using drugs?",
        options: ["To be healthy", "Peer pressure or to fit in", "To do better at school", "To save money"],
        correctAnswer: 1,
        explanation: "Peer pressure, curiosity, or trying to escape problems are common reasons young people experiment with substances."
    },
    {
        id: 23,
        text: "What organ in the body is most damaged by alcohol abuse?",
        options: ["The liver", "The foot", "The ear", "The hair"],
        correctAnswer: 0,
        explanation: "The liver processes alcohol, and excessive drinking can lead to liver disease and failure."
    },
    {
        id: 24,
        text: "What should you do if a friend offers you drugs?",
        options: ["Try it once", "Say 'No' firmly and walk away", "Take it home", "Give it to someone else"],
        correctAnswer: 1,
        explanation: "Refusing firmly and removing yourself from the situation is the safest choice."
    },

    // TB and HIV
    {
        id: 25,
        text: "What does TB stand for?",
        options: ["Total Body", "Tuberculosis", "The Best", "True Bacteria"],
        correctAnswer: 1,
        explanation: "TB stands for Tuberculosis, a disease that mainly affects the lungs."
    },
    {
        id: 26,
        text: "How is TB spread?",
        options: ["Through shaking hands", "Through the air when a sick person coughs or sneezes", "By sharing food", "By mosquito bites"],
        correctAnswer: 1,
        explanation: "TB bacteria are released into the air when a person with active TB coughs, sneezes, or speaks."
    },
    {
        id: 27,
        text: "Can TB be cured?",
        options: ["No, never", "Yes, by taking medication for 6 months", "Yes, by sleeping", "Only in summer"],
        correctAnswer: 1,
        explanation: "TB is curable if the patient completes the full course of antibiotic treatment (DOTS)."
    },
    {
        id: 28,
        text: "What does HIV stand for?",
        options: ["Human Immunodeficiency Virus", "Health In Virus", "Human Illness Virus", "Happy International Vacation"],
        correctAnswer: 0,
        explanation: "HIV stands for Human Immunodeficiency Virus, which attacks the body's immune system."
    },
    {
        id: 29,
        text: "How can you prevent getting HIV?",
        options: ["By not touching people", "By avoiding contact with infected blood", "By not swimming", "By wearing a hat"],
        correctAnswer: 1,
        explanation: "HIV is transmitted through certain body fluids, mainly blood. Avoiding contact with blood prevents transmission."
    },
    {
        id: 30,
        text: "How should we treat people with HIV or TB?",
        options: ["Run away from them", "With care, respect, and support", "Laugh at them", "Ignore them"],
        correctAnswer: 1,
        explanation: "People with illnesses deserve compassion and support, and stigma should be avoided."
    }
];

const LifeSkillsAssessment = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [essayOption, setEssayOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
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
                                    Write about a festival or custom that your family celebrates.
                                </button>
                                <button 
                                    onClick={() => setEssayOption('B')}
                                    className="p-6 rounded-xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left"
                                >
                                    <span className="font-bold text-indigo-600 block mb-2">Option B</span>
                                    Explain why healthy eating is important for children.
                                </button>
                                <button 
                                    onClick={() => setEssayOption('C')}
                                    className="p-6 rounded-xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left"
                                >
                                    <span className="font-bold text-indigo-600 block mb-2">Option C</span>
                                    Discuss a local environmental problem and how to solve it.
                                </button>
                                <button 
                                    onClick={() => setEssayOption('D')}
                                    className="p-6 rounded-xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left"
                                >
                                    <span className="font-bold text-indigo-600 block mb-2">Option D</span>
                                    Describe the dangers of substance abuse.
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
                        {essayOption === 'A' && "Write about a festival or custom that your family celebrates."}
                        {essayOption === 'B' && "Explain why healthy eating is important for children."}
                        {essayOption === 'C' && "Discuss a local environmental problem and how to solve it."}
                        {essayOption === 'D' && "Describe the dangers of substance abuse."}
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
                                {essayOption === 'A' && (
                                    <ul className="list-disc list-inside space-y-2 text-green-700">
                                        <li><strong>Topic Sentence:</strong> Introduce the festival (e.g., Christmas, Eid, Diwali) and when it is celebrated.</li>
                                        <li>Describe what you do (e.g., special prayers, lighting candles, decorating).</li>
                                        <li>Mention the special food you eat.</li>
                                        <li>Explain who you celebrate with (family, friends).</li>
                                        <li><strong>Closing Sentence:</strong> Explain why this festival is special to you (e.g., it brings the family together).</li>
                                    </ul>
                                )}
                                {essayOption === 'B' && (
                                    <ul className="list-disc list-inside space-y-2 text-green-700">
                                        <li><strong>Topic Sentence:</strong> Healthy eating is essential for children to grow and learn properly.</li>
                                        <li>It provides energy for playing and studying (carbohydrates).</li>
                                        <li>It helps build strong bones and teeth (calcium).</li>
                                        <li>It strengthens the immune system to fight sickness (vitamins).</li>
                                        <li>It prevents health problems like obesity and tooth decay.</li>
                                        <li><strong>Closing Sentence:</strong> A balanced diet leads to a happy and healthy life.</li>
                                    </ul>
                                )}
                                {essayOption === 'C' && (
                                    <ul className="list-disc list-inside space-y-2 text-green-700">
                                        <li><strong>Topic Sentence:</strong> Littering is a serious problem in our community that harms the environment.</li>
                                        <li>It makes the area look dirty and can smell bad.</li>
                                        <li>It can block drains and cause flooding.</li>
                                        <li>It can harm animals who might eat the plastic.</li>
                                        <li>We can solve it by using bins, recycling, and organizing clean-up days.</li>
                                        <li><strong>Closing Sentence:</strong> Everyone must work together to keep our environment clean.</li>
                                    </ul>
                                )}
                                {essayOption === 'D' && (
                                    <ul className="list-disc list-inside space-y-2 text-green-700">
                                        <li><strong>Topic Sentence:</strong> Substance abuse is very dangerous and can ruin a person's life.</li>
                                        <li>Drugs and alcohol damage important organs like the brain, heart, and liver.</li>
                                        <li>It can lead to addiction, where you can't stop using it.</li>
                                        <li>It can cause problems at school, with family, and with the law.</li>
                                        <li>It can change a person's behavior and make them aggressive.</li>
                                        <li><strong>Closing Sentence:</strong> It is important to say no to drugs and choose a healthy lifestyle.</li>
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
                        <h1 className="text-2xl font-bold text-slate-800">Life Skills Final Assessment</h1>
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

export default LifeSkillsAssessment;
