import { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, BookOpen, Award, ArrowRight } from 'lucide-react';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import { motion } from 'framer-motion';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  // Term 1: Map Skills
  {
    id: 1,
    text: "Which continent is South Africa located in?",
    options: ["South America", "Africa", "Asia", "Europe"],
    correctAnswer: 1,
    explanation: "South Africa is located at the southern tip of the continent of Africa."
  },
  {
    id: 2,
    text: "Which ocean lies to the east of South Africa?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: 1,
    explanation: "The Indian Ocean is on the east coast (Durban side), while the Atlantic Ocean is on the west coast (Cape Town side)."
  },
  {
    id: 3,
    text: "On a map, what does the scale line help you calculate?",
    options: ["The height of mountains", "The depth of the ocean", "The real distance between places", "The temperature of the area"],
    correctAnswer: 2,
    explanation: "A map scale shows the relationship between the distance on the map and the actual distance on the ground."
  },
  
  // Term 2: Physical Features
  {
    id: 4,
    text: "What do we call the high, flat inland part of South Africa?",
    options: ["The Coastal Plain", "The Plateau", "The Escarpment", "The Lowveld"],
    correctAnswer: 1,
    explanation: "The central part of South Africa is a high, flat area called the Plateau."
  },
  {
    id: 5,
    text: "Which mountain range forms part of the Great Escarpment in KwaZulu-Natal?",
    options: ["Table Mountain", "The Cederberg", "The Drakensberg", "The Magaliesberg"],
    correctAnswer: 2,
    explanation: "The Drakensberg (uKhahlamba) is the highest mountain range in South Africa and forms part of the Escarpment."
  },
  {
    id: 6,
    text: "What is the name of the longest river in South Africa?",
    options: ["Vaal River", "Limpopo River", "Orange River (Gariep)", "Tugela River"],
    correctAnswer: 2,
    explanation: "The Orange River (Gariep) is the longest river in South Africa, flowing westwards into the Atlantic Ocean."
  },

  // Term 3: Weather, Climate and Vegetation
  {
    id: 7,
    text: "What is the difference between weather and climate?",
    options: [
      "Weather is over a long time, climate is day-to-day",
      "Weather is day-to-day conditions, climate is the average over a long time",
      "They mean exactly the same thing",
      "Weather is only about rain, climate is only about heat"
    ],
    correctAnswer: 1,
    explanation: "Weather describes the condition of the atmosphere over a short period (e.g., today), while climate is the average weather over many years."
  },
  {
    id: 8,
    text: "Which instrument is used to measure rainfall?",
    options: ["Thermometer", "Barometer", "Rain gauge", "Wind vane"],
    correctAnswer: 2,
    explanation: "A rain gauge is used to measure the amount of rain that has fallen in millimeters."
  },
  {
    id: 9,
    text: "Which instrument measures temperature?",
    options: ["Thermometer", "Anemometer", "Rain gauge", "Wind sock"],
    correctAnswer: 0,
    explanation: "A thermometer measures how hot or cold the air is (temperature) in degrees Celsius."
  },
  {
    id: 10,
    text: "Which vegetation region in South Africa is known for its variety of fynbos?",
    options: ["Savanna", "Grassland", "Western Cape (Fynbos)", "Succulent Karoo"],
    correctAnswer: 2,
    explanation: "The Western Cape is famous for Fynbos vegetation, which is unique to that part of the world."
  },
  {
    id: 11,
    text: "Which part of South Africa gets most of its rain in winter?",
    options: ["The Highveld (Gauteng)", "KwaZulu-Natal coast", "The Western Cape", "The Limpopo valley"],
    correctAnswer: 2,
    explanation: "The Western Cape has a Mediterranean climate with wet winters and dry summers."
  },
  {
    id: 12,
    text: "What type of vegetation is found in the hot, dry Karoo?",
    options: ["Forests", "Succulents and small bushes", "Tall grasses", "Tropical palms"],
    correctAnswer: 1,
    explanation: "The Karoo is dry (semi-desert), so plants like succulents (which store water) and small bushes grow there."
  },

  // Term 4: Minerals and Mining
  {
    id: 13,
    text: "What is a mineral?",
    options: [
      "A type of plastic made in a factory",
      "A natural substance found in rocks in the earth",
      "A type of wood from trees",
      "A man-made chemical"
    ],
    correctAnswer: 1,
    explanation: "Minerals are natural substances found in the Earth's crust, such as gold, coal, and diamonds."
  },
  {
    id: 14,
    text: "Which mineral is South Africa's main source of energy (electricity)?",
    options: ["Gold", "Diamond", "Coal", "Iron ore"],
    correctAnswer: 2,
    explanation: "Coal is burned in power stations to generate most of South Africa's electricity."
  },
  {
    id: 15,
    text: "What is the difference between open-pit mining and shaft mining?",
    options: [
      "Open-pit is underground, shaft is on the surface",
      "Open-pit is on the surface, shaft goes deep underground",
      "Open-pit is for gold only, shaft is for coal only",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "Open-pit mining digs a big hole from the surface. Shaft mining uses tunnels to go deep underground to reach minerals."
  },
  {
    id: 16,
    text: "Why are diamonds valuable?",
    options: [
      "They are soft and easy to break",
      "They are very common and easy to find",
      "They are hard, rare, and beautiful",
      "They burn easily to make fire"
    ],
    correctAnswer: 2,
    explanation: "Diamonds are valuable because they are the hardest natural substance, they are rare, and they are used for jewelry and cutting tools."
  },
  {
    id: 17,
    text: "What is a negative impact of mining on the environment?",
    options: [
      "It creates jobs for people",
      "It brings money into the country",
      "It can pollute water and destroy habitats",
      "It builds new roads"
    ],
    correctAnswer: 2,
    explanation: "Mining can damage the environment by polluting rivers, creating dust, and destroying the land where plants and animals live."
  },
  {
    id: 18,
    text: "What do we call the people who work in mines?",
    options: ["Farmers", "Miners", "Geologists", "Engineers"],
    correctAnswer: 1,
    explanation: "People who work underground or in open pits to extract minerals are called miners."
  },
  {
    id: 19,
    text: "Which province in South Africa was built on the wealth of gold mining?",
    options: ["Western Cape", "Gauteng", "Eastern Cape", "KwaZulu-Natal"],
    correctAnswer: 1,
    explanation: "Gauteng (meaning 'Place of Gold') grew around the gold mines of Johannesburg."
  },
  {
    id: 20,
    text: "What is 'rehabilitation' in mining?",
    options: [
      "Digging deeper holes",
      "Fixing the land after mining is finished",
      "Selling the minerals to other countries",
      "Building houses for miners"
    ],
    correctAnswer: 1,
    explanation: "Rehabilitation means restoring the land to a usable state after mining operations have closed."
  },

  // Mixed / General Geography
  {
    id: 21,
    text: "Which direction is opposite to North-West?",
    options: ["South-West", "North-East", "South-East", "South"],
    correctAnswer: 2,
    explanation: "On a compass, South-East is directly opposite North-West."
  },
  {
    id: 22,
    text: "What is the capital city of South Africa where Parliament meets?",
    options: ["Pretoria", "Bloemfontein", "Cape Town", "Johannesburg"],
    correctAnswer: 2,
    explanation: "Cape Town is the legislative capital where Parliament is located. Pretoria is the administrative capital."
  },
  {
    id: 23,
    text: "Which province is the smallest in size but has a very large population?",
    options: ["Northern Cape", "Gauteng", "Free State", "Limpopo"],
    correctAnswer: 1,
    explanation: "Gauteng is the smallest province by land area but has the largest population and economy."
  },
  {
    id: 24,
    text: "What is the main crop grown in the Western Cape's Mediterranean climate?",
    options: ["Sugar cane", "Maize (Mealies)", "Grapes and fruit", "Bananas"],
    correctAnswer: 2,
    explanation: "The Western Cape is famous for its vineyards (grapes) and fruit orchards due to its winter rainfall climate."
  },
  {
    id: 25,
    text: "Where is sugar cane mostly grown in South Africa?",
    options: ["The dry Karoo", "The humid KwaZulu-Natal coast", "The cold Highveld", "The Kalahari Desert"],
    correctAnswer: 1,
    explanation: "Sugar cane needs a hot and humid climate with plenty of rain, found along the KwaZulu-Natal coast."
  },
  {
    id: 26,
    text: "What is a 'renewable' resource?",
    options: [
      "A resource that will run out one day (like coal)",
      "A resource that can be used over and over or grows back (like trees or sun)",
      "A resource made of plastic",
      "A resource found deep underground"
    ],
    correctAnswer: 1,
    explanation: "Renewable resources can be replenished naturally, like solar energy, wind, water, and plants."
  },
  {
    id: 27,
    text: "Why is water an important resource?",
    options: [
      "We need it to survive and grow food",
      "It is expensive",
      "It is shiny",
      "It is hard to find"
    ],
    correctAnswer: 0,
    explanation: "Water is essential for all life, drinking, sanitation, and agriculture (growing food)."
  },
  {
    id: 28,
    text: "What is the 'escarpment'?",
    options: [
      "A deep hole in the ground",
      "The steep slope between the coastal plain and the plateau",
      "A large lake",
      "A sandy desert"
    ],
    correctAnswer: 1,
    explanation: "The escarpment is the steep slope or cliff that separates the lower coastal plain from the higher inland plateau."
  },
  {
    id: 29,
    text: "Which of these is a fossil fuel?",
    options: ["Sunlight", "Wind", "Coal", "Water"],
    correctAnswer: 2,
    explanation: "Coal, oil, and gas are fossil fuels formed from ancient plants and animals over millions of years."
  },
  {
    id: 30,
    text: "How can we conserve (save) minerals?",
    options: [
      "Use them as fast as possible",
      "Throw them away",
      "Recycle and reuse metal objects",
      "Dig more mines everywhere"
    ],
    correctAnswer: 2,
    explanation: "Recycling metals (like cans and scrap metal) means we don't have to mine as much new ore, saving resources."
  }
];

const GeographyAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [showWriting, setShowWriting] = useState(false);

  const handleAnswerClick = (optionIndex: number) => {
    if (isAnswerChecked) return;
    setSelectedAnswer(optionIndex);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    
    setIsAnswerChecked(true);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setShowWriting(false);
  };

  if (showWriting) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto p-4">
        <Button variant="outline" onClick={() => setShowWriting(false)} className="mb-4">
          Back to Quiz Results
        </Button>
        
        <Card>
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Geography Paragraph Writing
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">Instructions</h3>
              <p className="text-blue-700">
                Choose ONE of the topics below. Write a paragraph of 5-8 sentences about it.
                Focus on using correct geography terms and explaining your ideas clearly.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-white">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Topic 1: Mining and the Environment</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Write about how mining affects the environment. You can discuss:
                  <br/>• Pollution (air and water)
                  <br/>• Destruction of vegetation/habitats
                  <br/>• Why rehabilitation is important
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm">
                  <span className="font-semibold text-gray-700">Key words to use:</span>
                  <p className="text-gray-600 italic">pollution, habitat, rehabilitation, waste, environment, open-pit, chemicals.</p>
                </div>
              </div>

              <div className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-white">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Topic 2: Weather and Climate</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Explain the difference between weather and climate, and describe the climate of your own province.
                  <br/>• Define weather
                  <br/>• Define climate
                  <br/>• Describe rainfall and temperature in your area
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm">
                  <span className="font-semibold text-gray-700">Key words to use:</span>
                  <p className="text-gray-600 italic">temperature, rainfall, seasons, average, daily, atmosphere, summer/winter.</p>
                </div>
              </div>

              <div className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-white">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Topic 3: Why Minerals are Important</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Discuss why mining is important for South Africa.
                  <br/>• Jobs and employment
                  <br/>• Energy (Coal)
                  <br/>• Products we make from minerals
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm">
                  <span className="font-semibold text-gray-700">Key words to use:</span>
                  <p className="text-gray-600 italic">economy, jobs, electricity, export, valuable, manufacturing, wealth.</p>
                </div>
              </div>

              <div className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-white">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Topic 4: Physical Features of SA</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Describe the physical layout of South Africa.
                  <br/>• The Coastal Plain
                  <br/>• The Escarpment
                  <br/>• The Plateau
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm">
                  <span className="font-semibold text-gray-700">Key words to use:</span>
                  <p className="text-gray-600 italic">coast, high, flat, steep, mountains, sea level, inland.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100">
              <h3 className="font-bold text-green-800 mb-3">Self-Check Guide</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Did I write 5-8 full sentences?
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Did I start sentences with capital letters and end with full stops?
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Did I use the correct geography words?
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Does my paragraph stick to the topic?
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-center space-y-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100"
        >
          <Award className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Assessment Complete!</h2>
          <p className="text-gray-600 mb-6">You have finished the Geography Final Assessment.</p>
          
          <div className="text-6xl font-bold text-blue-600 mb-4">
            {Math.round((score / questions.length) * 100)}%
          </div>
          <p className="text-xl text-gray-700 mb-8">
            You got <span className="font-bold">{score}</span> out of <span className="font-bold">{questions.length}</span> questions correct.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Button onClick={resetQuiz} className="w-full gap-2" size="lg">
              <RefreshCw className="w-5 h-5" />
              Try Again
            </Button>
            <Button onClick={() => setShowWriting(true)} variant="secondary" className="w-full gap-2" size="lg">
              <BookOpen className="w-5 h-5" />
              Go to Writing Section
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
        <span className="text-sm font-medium text-gray-500">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Score: {score}
        </span>
      </div>

      <Card className="border-2 border-blue-50 overflow-hidden">
        <div className="h-2 bg-gray-100">
          <motion.div 
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
            {questions[currentQuestion].text}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswerChecked}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex justify-between items-center group
                  ${isAnswerChecked 
                    ? index === questions[currentQuestion].correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : index === selectedAnswer
                        ? 'border-red-500 bg-red-50 text-red-800'
                        : 'border-gray-100 text-gray-400'
                    : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 text-blue-800 shadow-md'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50 text-gray-700'
                  }`}
              >
                <span className="font-medium">{option}</span>
                {isAnswerChecked && index === questions[currentQuestion].correctAnswer && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {isAnswerChecked && index === selectedAnswer && index !== questions[currentQuestion].correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
              </button>
            ))}
          </div>

          {isAnswerChecked && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100"
            >
              <div className="flex gap-2 items-start">
                <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <span className="font-bold text-blue-800 block mb-1">Explanation:</span>
                  <p className="text-blue-700 leading-relaxed">
                    {questions[currentQuestion].explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Card>

      <div className="flex justify-end">
        {!isAnswerChecked ? (
          <Button 
            onClick={checkAnswer} 
            disabled={selectedAnswer === null}
            size="lg"
            className="w-full sm:w-auto text-lg px-8"
          >
            Check Answer
          </Button>
        ) : (
          <Button 
            onClick={nextQuestion}
            size="lg"
            className="w-full sm:w-auto text-lg px-8 gap-2"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            <ArrowRight className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default GeographyAssessment;
