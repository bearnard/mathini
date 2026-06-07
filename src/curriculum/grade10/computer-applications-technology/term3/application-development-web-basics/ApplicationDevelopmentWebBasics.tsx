'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/cat/term3/application-development-web-basics/diagram.webp", alt: "Application Development and Web Basics" },
    title: 'Application development thinking',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Application development starts with problem-solving. Before writing code, a learner should identify the
          inputs, process and expected output of the task.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Input</strong>
            <p className="mt-1 text-slate-600">Data entered by the user or read from a source.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Process</strong>
            <p className="mt-1 text-slate-600">The instructions that transform input into meaningful results.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Output</strong>
            <p className="mt-1 text-slate-600">The displayed or stored result after processing is complete.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Algorithms and logical design',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          An algorithm is a step-by-step plan for solving a problem. Learners often express algorithms through
          pseudocode, flowcharts or simple logic descriptions before building the final solution.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
          Good algorithms are clear, finite and testable. Each step should follow logically from the one before it.
        </div>
      </div>
    ),
  },
  {
    title: 'HTML structure for web pages',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Web basics introduce learners to the structure of a page using HTML. Tags describe meaning and content, while
          the browser interprets them to display text, images, links and tables.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html>
  <head>
    <title>Study Hub</title>
  </head>
  <body>
    <h1>Grade 10 CAT</h1>
    <p>Welcome to the web basics lesson.</p>
  </body>
</html>`}
        />
      </div>
    ),
  },
  {
    title: 'CSS basics and presentation',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          CSS controls the appearance of a web page by changing colours, fonts, spacing and layout. HTML gives the
          structure; CSS improves readability and design.
        </p>
        <CodeBlock
          language="css"
          code={`body {
  font-family: Arial, sans-serif;
  background: #f8fafc;
  color: #1e293b;
}

h1 {
  color: #2563eb;
}`}
        />
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'What is an algorithm?',
    options: ['A. A random guess', 'B. A step-by-step solution', 'C. A hardware device', 'D. An internet browser'],
    answer: 'B. A step-by-step solution',
    explanation: 'An algorithm is a clear sequence of instructions used to solve a problem.',
  },
  {
    prompt: 'Which language is used to structure the content of a web page?',
    options: ['A. HTML', 'B. CSS', 'C. JPEG', 'D. PDF'],
    answer: 'A. HTML',
    explanation: 'HTML provides the structure and meaning of web content.',
  },
  {
    prompt: 'CSS is mainly used to:',
    options: ['A. Control page presentation', 'B. Store files', 'C. Replace the browser', 'D. Create folders'],
    answer: 'A. Control page presentation',
    explanation: 'CSS changes how a page looks, including colours, spacing and typography.',
  },
  {
    prompt: 'In problem-solving, output refers to:',
    options: ['A. The data entered', 'B. The processed result', 'C. The CPU fan', 'D. The network cable'],
    answer: 'B. The processed result',
    explanation: 'Output is the information produced after input has been processed.',
  },
  {
    prompt: 'Why is pseudocode useful?',
    options: ['A. It helps plan program logic clearly', 'B. It replaces all testing', 'C. It works only online', 'D. It is a type of hardware'],
    answer: 'A. It helps plan program logic clearly',
    explanation: 'Pseudocode makes the logic of a solution easier to understand before implementation.',
  },
];

export default function ApplicationDevelopmentWebBasics() {
  return (
    <CapsSubjectTopic
      title="Application Development and Web Basics"
      subtitle="Grade 10 · Computer Applications Technology · Term 3"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-application-development-web-basics"
      apiPath="/api/caps/cat"
      grade={10}
    />
  );
}
