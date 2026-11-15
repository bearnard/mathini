import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Tuckman\'s five team stages',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Bruce Tuckman identified <strong>five stages</strong> that every team goes through as it develops and matures.
        </p>
        <div className="grid gap-2 md:grid-cols-5 text-left text-sm">
          {[
            { stage: 'Forming', colour: 'bg-blue-50 text-blue-700', desc: 'Team meets; polite but uncertain. Roles are unclear.' },
            { stage: 'Storming', colour: 'bg-red-50 text-red-700', desc: 'Conflict emerges as personalities and ideas clash.' },
            { stage: 'Norming', colour: 'bg-yellow-50 text-yellow-700', desc: 'Team agrees on norms; trust builds, collaboration improves.' },
            { stage: 'Performing', colour: 'bg-green-50 text-green-700', desc: 'High productivity; team works independently towards goals.' },
            { stage: 'Adjourning', colour: 'bg-purple-50 text-purple-700', desc: 'Team disbands after completing the task or project.' },
          ].map(({ stage, colour, desc }) => (
            <div key={stage} className={`rounded-xl p-3 ${colour.split(' ')[0]}`}>
              <strong className={colour.split(' ')[1]}>{stage}</strong>
              <p className="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Team roles and dynamics',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective teams have members who play <strong>complementary roles</strong>. A team needs a balance of task-focused and people-focused contributors.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <p className="font-bold text-slate-800 mb-2">Common team roles:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li><strong>Leader:</strong> gives direction, motivates and coordinates the team</li>
            <li><strong>Creative thinker:</strong> generates innovative ideas and solutions</li>
            <li><strong>Implementer:</strong> turns plans into practical actions</li>
            <li><strong>Checker:</strong> reviews work for errors and ensures quality</li>
            <li><strong>Supporter:</strong> maintains team morale and resolves interpersonal issues</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Sources and types of conflict',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Conflict</strong> is inevitable in teams. Understanding its sources helps managers address it effectively.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Task conflict</strong>
            <p className="text-slate-600">Disagreements about the goals or decisions of the work. Can be constructive if managed well.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Relationship conflict</strong>
            <p className="text-slate-600">Interpersonal friction, personality clashes or disrespect. Usually destructive.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Resource conflict</strong>
            <p className="text-slate-600">Competition over limited resources — budget, equipment or staff time.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Process conflict</strong>
            <p className="text-slate-600">Disagreements about how tasks should be performed or who is responsible.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Conflict resolution strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Managers and team leaders can choose from several <strong>conflict-resolution strategies</strong> depending on the situation.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li><strong>Negotiation:</strong> the parties discuss and reach a mutually acceptable agreement</li>
            <li><strong>Mediation:</strong> a neutral third party facilitates a solution (mediator does not impose)</li>
            <li><strong>Arbitration:</strong> a third party hears both sides and makes a binding decision</li>
            <li><strong>Compromise:</strong> both parties give up something to reach middle ground</li>
            <li><strong>Collaboration:</strong> all parties work together to find a win-win solution</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'A project team has just met for the first time. Members are polite but unsure of their roles. Which Tuckman stage is this?',
    options: ['Storming', 'Norming', 'Performing', 'Forming'],
    answer: 'Forming',
    explanation: 'The Forming stage is characterised by initial politeness, uncertainty about roles, and members getting to know each other.',
  },
  {
    prompt: 'Two team members argue loudly about whose idea should be used in the presentation. Which Tuckman stage is the team in?',
    options: ['Forming', 'Norming', 'Storming', 'Performing'],
    answer: 'Storming',
    explanation: 'Storming is marked by conflict and power struggles as team members push their ideas and personalities clash.',
  },
  {
    prompt: 'A team has established clear norms and members trust each other. They are collaborating effectively. Which stage is this?',
    options: ['Forming', 'Storming', 'Norming', 'Adjourning'],
    answer: 'Norming',
    explanation: 'During Norming, the team agrees on working rules, trust develops, and collaboration improves significantly.',
  },
  {
    prompt: 'Two employees disagree about who should handle customer complaints in a new process. This is an example of:',
    options: ['Task conflict', 'Relationship conflict', 'Process conflict', 'Resource conflict'],
    answer: 'Process conflict',
    explanation: 'Process conflict arises from disagreements about how tasks should be done or who is responsible for them.',
  },
  {
    prompt: 'A HR manager calls in a neutral outsider to help two employees reach their own agreement about a workspace dispute. This is:',
    options: ['Arbitration', 'Negotiation', 'Mediation', 'Litigation'],
    answer: 'Mediation',
    explanation: 'Mediation involves a neutral third party who facilitates the conversation but does not impose a solution — the parties reach their own agreement.',
  },
  {
    prompt: 'Both the marketing and HR departments want the same R50 000 budget for their projects. This conflict is caused by:',
    options: ['Process conflict', 'Relationship conflict', 'Resource conflict', 'Task conflict'],
    answer: 'Resource conflict',
    explanation: 'Resource conflict occurs when multiple parties compete for the same limited resource — in this case, a shared budget.',
  },
  {
    prompt: 'In which Tuckman stage does a project team say goodbye after successfully completing their task?',
    options: ['Norming', 'Performing', 'Storming', 'Adjourning'],
    answer: 'Adjourning',
    explanation: 'Adjourning (also called Mourning) is the final Tuckman stage where the team disbands after completing its objectives.',
  },
  {
    prompt: 'Two managers both give a little in negotiations and find a middle-ground solution. Which conflict resolution approach is this?',
    options: ['Arbitration', 'Collaboration', 'Compromise', 'Avoidance'],
    answer: 'Compromise',
    explanation: 'Compromise requires both parties to give up something to reach an acceptable middle-ground — neither party gets everything they want.',
  },
  {
    prompt: 'Which team role is MOST responsible for catching errors and ensuring work meets quality standards?',
    options: ['Leader', 'Creative thinker', 'Implementer', 'Checker'],
    answer: 'Checker',
    explanation: 'The Checker (or evaluator) reviews the team\'s work for mistakes, ensures quality, and identifies gaps before the final output is submitted.',
  },
];

const TeamDynamicsConflict = () => (
  <CapsSubjectTopic
    title="Team Dynamics and Conflict Management"
    subtitle="Team stages, theories and handling conflict in the workplace"
    learnSteps={learnSteps}
    task="gr11-team-dynamics-conflict-t3"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default TeamDynamicsConflict;
