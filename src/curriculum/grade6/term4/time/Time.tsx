import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
    {
        title: "Reading Clocks",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Analogue clocks have an <strong>hour hand</strong> and a <strong>minute hand</strong>. Digital clocks show the time with numbers.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="relative w-40 h-40 rounded-full border-8 border-indigo-100 bg-white shadow-inner">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 font-bold text-slate-500">12</div>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-slate-500">3</div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bold text-slate-500">6</div>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-500">9</div>
                        <div className="absolute left-1/2 top-1/2 h-12 w-1 -translate-x-1/2 -translate-y-full origin-bottom rotate-90 rounded-full bg-indigo-600" />
                        <div className="absolute left-1/2 top-1/2 h-9 w-1.5 -translate-x-1/2 -translate-y-full origin-bottom rounded-full bg-emerald-500" />
                        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-700" />
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                        <p className="text-4xl font-mono font-bold text-slate-800">3:00</p>
                        <p className="text-slate-500 mt-2">The minute hand points to 12, so it is exactly three o'clock.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "12-hour and 24-hour Time",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">In 24-hour time, afternoon and evening times keep counting after 12:00.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                    <div className="bg-indigo-50 p-4 rounded-xl">
                        <p className="text-sm font-bold text-indigo-700 uppercase">Morning</p>
                        <p className="text-2xl font-mono font-bold text-indigo-900">09:15</p>
                        <p className="text-slate-500">9:15 am</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-xl">
                        <p className="text-sm font-bold text-emerald-700 uppercase">Afternoon</p>
                        <p className="text-2xl font-mono font-bold text-emerald-900">14:30</p>
                        <p className="text-slate-500">2:30 pm</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-xl">
                        <p className="text-sm font-bold text-amber-700 uppercase">Evening</p>
                        <p className="text-2xl font-mono font-bold text-amber-900">20:45</p>
                        <p className="text-slate-500">8:45 pm</p>
                    </div>
                </div>
                <p className="text-slate-500">For pm times after noon, add 12 to the hour: 2:30 pm becomes 14:30.</p>
            </div>
        )
    },
    {
        title: "Elapsed Time",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Elapsed time is how long something takes. Count on in hours and minutes.</p>
                <div className="bg-slate-50 p-6 rounded-xl max-w-xl mx-auto">
                    <div className="flex items-center justify-between gap-3 text-center">
                        <div>
                            <p className="text-sm text-slate-500">Start</p>
                            <p className="text-2xl font-mono font-bold text-indigo-700">13:15</p>
                        </div>
                        <div className="flex-1 border-t-4 border-dotted border-slate-300" />
                        <div>
                            <p className="text-sm text-slate-500">Finish</p>
                            <p className="text-2xl font-mono font-bold text-emerald-700">14:45</p>
                        </div>
                    </div>
                    <p className="mt-5 text-slate-600">13:15 to 14:15 is <strong>1 hour</strong>, then to 14:45 is <strong>30 minutes</strong>.</p>
                    <p className="text-xl font-bold text-slate-800">Total: 1 h 30 min</p>
                </div>
            </div>
        )
    }
];

export const bank: CapsItem[] = [
    {
        prompt: 'What is 3:00 pm in 24-hour time?',
        options: ['03:00', '13:00', '15:00', '30:00'],
        answer: '15:00',
        explanation: 'For pm times after noon, add 12 to the hour: 3 + 12 = 15, so 3:00 pm = 15:00.'
    },
    {
        prompt: 'What is 21:00 in 12-hour time?',
        options: ['9:00 am', '9:00 pm', '11:00 pm', '21:00 am'],
        answer: '9:00 pm',
        explanation: '21:00 − 12 = 9:00 pm.'
    },
    {
        prompt: 'A film starts at 14:30 and lasts 1 hour 45 minutes. What time does it end?',
        options: ['15:15', '16:00', '16:15', '16:45'],
        answer: '16:15',
        explanation: '14:30 + 1 hour = 15:30; 15:30 + 45 minutes = 16:15.'
    },
    {
        prompt: 'How many minutes are in 1 hour?',
        options: ['24', '30', '60', '100'],
        answer: '60',
        explanation: 'There are 60 minutes in 1 hour.'
    },
    {
        prompt: 'How many hours are in 1 day?',
        options: ['12', '24', '60', '100'],
        answer: '24',
        explanation: 'There are 24 hours in 1 day.'
    },
    {
        prompt: 'A train leaves at 09:45 and arrives at 11:20. How long is the journey?',
        options: ['1 hour 25 minutes', '1 hour 35 minutes', '1 hour 45 minutes', '2 hours 35 minutes'],
        answer: '1 hour 35 minutes',
        explanation: 'From 09:45 to 10:45 is 1 hour; from 10:45 to 11:20 is 35 minutes. Total: 1 hour 35 minutes.'
    },
    {
        prompt: 'What is 00:00 in 12-hour time?',
        options: ['12:00 noon', '12:00 midnight', '0:00 am', '24:00'],
        answer: '12:00 midnight',
        explanation: '00:00 in 24-hour time is midnight, written as 12:00 midnight in 12-hour time.'
    }
];

const Time = () => (
    <CapsSubjectTopic
        title="Time"
        subtitle="Clocks, 24-hour time and durations"
        learnSteps={learnSteps}
        task="gr6-time-t4"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default Time;
