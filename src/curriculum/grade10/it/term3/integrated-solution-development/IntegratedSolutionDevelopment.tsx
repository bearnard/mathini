import dynamic from 'next/dynamic';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/it/term3/integrated-solution-development/diagram.webp", alt: "Integrated Solution Development" },
    title: 'Systems Development Lifecycle',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-bold text-blue-900 mb-2">Understanding the SDLC</h3>
          <p className="text-slate-700 mb-3">
            The Systems Development Life Cycle (SDLC) is a structured approach to developing information systems. 
            It provides a framework for planning, creating, testing, and deploying software.
          </p>
        </div>
        <div className="bg-white border-2 border-blue-200 p-4 rounded shadow-sm">
          <h4 className="font-semibold text-blue-900 mb-4">SDLC Phases</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="flex-1">
                <h5 className="font-bold text-blue-800">Planning</h5>
                <p className="text-sm text-slate-600">Define project scope, objectives, and feasibility. Identify stakeholders and resources.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1">
                <h5 className="font-bold text-green-800">Analysis</h5>
                <p className="text-sm text-slate-600">Gather requirements from users. Understand what the system must do.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1">
                <h5 className="font-bold text-purple-800">Design</h5>
                <p className="text-sm text-slate-600">Create system architecture, database schema, UI mockups, and technical specifications.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1">
                <h5 className="font-bold text-orange-800">Implementation</h5>
                <p className="text-sm text-slate-600">Write code, build components, and integrate the system according to design.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div className="flex-1">
                <h5 className="font-bold text-red-800">Testing</h5>
                <p className="text-sm text-slate-600">Verify the system works correctly. Find and fix bugs before deployment.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">6</div>
              <div className="flex-1">
                <h5 className="font-bold text-teal-800">Deployment</h5>
                <p className="text-sm text-slate-600">Release the system to users. Provide training and documentation.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">7</div>
              <div className="flex-1">
                <h5 className="font-bold text-indigo-800">Maintenance</h5>
                <p className="text-sm text-slate-600">Ongoing support, bug fixes, and updates to meet changing needs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h5 className="font-semibold text-green-900 mb-2">Waterfall Model</h5>
            <p className="text-sm text-slate-700">
              Sequential approach where each phase must complete before the next begins. Simple but inflexible.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded border border-purple-200">
            <h5 className="font-semibold text-purple-900 mb-2">Agile Model</h5>
            <p className="text-sm text-slate-700">
              Iterative approach with frequent releases and continuous feedback. Flexible and adaptive.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Problem Analysis and Requirements',
    content: (
      <div className="space-y-6">
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
          <h3 className="font-bold text-indigo-900 mb-2">Gathering and Analyzing Requirements</h3>
          <p className="text-slate-700 mb-3">
            Understanding what users need is crucial. Poor requirements lead to failed projects. 
            Requirements define WHAT the system should do, not HOW it does it.
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-3">Types of Requirements</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded border border-yellow-200">
              <h5 className="font-bold text-yellow-800 mb-2">Functional Requirements</h5>
              <p className="text-sm text-slate-700 mb-2">What the system must do:</p>
              <ul className="text-xs text-slate-600 list-disc ml-5 space-y-1">
                <li>User can log in with username and password</li>
                <li>System calculates student averages automatically</li>
                <li>Reports can be printed or exported to PDF</li>
                <li>System sends email notifications for events</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
              <h5 className="font-bold text-yellow-800 mb-2">Non-Functional Requirements</h5>
              <p className="text-sm text-slate-700 mb-2">How well the system performs:</p>
              <ul className="text-xs text-slate-600 list-disc ml-5 space-y-1">
                <li>Response time under 2 seconds</li>
                <li>Support 500 concurrent users</li>
                <li>99.9% uptime availability</li>
                <li>User-friendly interface</li>
                <li>Secure data encryption</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-teal-50 p-4 rounded border border-teal-200">
          <h4 className="font-semibold text-teal-900 mb-3">Requirements Gathering Techniques</h4>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded border border-teal-100">
              <p className="font-bold text-teal-800 text-sm">Interviews</p>
              <p className="text-xs text-slate-600">One-on-one discussions with stakeholders and users</p>
            </div>
            <div className="bg-white p-3 rounded border border-teal-100">
              <p className="font-bold text-teal-800 text-sm">Questionnaires/Surveys</p>
              <p className="text-xs text-slate-600">Collect data from many users simultaneously</p>
            </div>
            <div className="bg-white p-3 rounded border border-teal-100">
              <p className="font-bold text-teal-800 text-sm">Observation</p>
              <p className="text-xs text-slate-600">Watch users perform current tasks to identify pain points</p>
            </div>
            <div className="bg-white p-3 rounded border border-teal-100">
              <p className="font-bold text-teal-800 text-sm">Document Analysis</p>
              <p className="text-xs text-slate-600">Review existing forms, reports, and procedures</p>
            </div>
            <div className="bg-white p-3 rounded border border-teal-100">
              <p className="font-bold text-teal-800 text-sm">Prototyping</p>
              <p className="text-xs text-slate-600">Create mockups to get early user feedback</p>
            </div>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Use Case Example</h4>
          <div className="bg-white p-3 rounded border border-red-100 text-sm text-slate-700">
            <p className="font-bold text-red-800 mb-2">Use Case: Student Registration</p>
            <p><strong>Actor:</strong> School Administrator</p>
            <p><strong>Goal:</strong> Register a new student in the system</p>
            <p><strong>Precondition:</strong> Administrator is logged in</p>
            <p className="mt-2"><strong>Main Flow:</strong></p>
            <ol className="list-decimal ml-5 space-y-1 text-xs">
              <li>Administrator selects "Add New Student"</li>
              <li>System displays registration form</li>
              <li>Administrator enters student details</li>
              <li>System validates the data</li>
              <li>Administrator clicks "Save"</li>
              <li>System generates student ID and confirms registration</li>
            </ol>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Integration and Testing',
    content: (
      <div className="space-y-6">
        <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded">
          <h3 className="font-bold text-rose-900 mb-2">Building and Testing Integrated Systems</h3>
          <p className="text-slate-700 mb-3">
            Integration brings together all system components. Testing ensures everything works correctly 
            before deployment. Quality software requires thorough testing at multiple levels.
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded border border-purple-300">
          <h4 className="font-semibold text-purple-900 mb-3">Types of Testing</h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border border-purple-100">
              <h5 className="font-bold text-purple-800 text-sm">Unit Testing</h5>
              <p className="text-xs text-slate-600">Test individual functions or procedures in isolation to verify they work correctly.</p>
            </div>
            <div className="bg-white p-3 rounded border border-purple-100">
              <h5 className="font-bold text-purple-800 text-sm">Integration Testing</h5>
              <p className="text-xs text-slate-600">Test how different modules work together. Verify data flows correctly between components.</p>
            </div>
            <div className="bg-white p-3 rounded border border-purple-100">
              <h5 className="font-bold text-purple-800 text-sm">System Testing</h5>
              <p className="text-xs text-slate-600">Test the complete system as a whole to ensure it meets all requirements.</p>
            </div>
            <div className="bg-white p-3 rounded border border-purple-100">
              <h5 className="font-bold text-purple-800 text-sm">User Acceptance Testing (UAT)</h5>
              <p className="text-xs text-slate-600">Real users test the system to verify it meets their needs and expectations.</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">Test Case Example</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-blue-200 text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border border-blue-300 px-3 py-2 text-left">Test ID</th>
                  <th className="border border-blue-300 px-3 py-2 text-left">Description</th>
                  <th className="border border-blue-300 px-3 py-2 text-left">Input</th>
                  <th className="border border-blue-300 px-3 py-2 text-left">Expected Output</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 text-xs">
                <tr>
                  <td className="border border-blue-200 px-3 py-2">TC001</td>
                  <td className="border border-blue-200 px-3 py-2">Valid login</td>
                  <td className="border border-blue-200 px-3 py-2">Username: admin, Password: pass123</td>
                  <td className="border border-blue-200 px-3 py-2">Login successful, redirect to dashboard</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-blue-200 px-3 py-2">TC002</td>
                  <td className="border border-blue-200 px-3 py-2">Invalid password</td>
                  <td className="border border-blue-200 px-3 py-2">Username: admin, Password: wrong</td>
                  <td className="border border-blue-200 px-3 py-2">Show error: "Invalid credentials"</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 px-3 py-2">TC003</td>
                  <td className="border border-blue-200 px-3 py-2">Empty fields</td>
                  <td className="border border-blue-200 px-3 py-2">Username: "", Password: ""</td>
                  <td className="border border-blue-200 px-3 py-2">Show error: "All fields required"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Integration Strategies</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded border border-green-100 text-center">
              <h5 className="font-bold text-green-800 text-sm">Big Bang</h5>
              <p className="text-xs text-slate-600 mt-1">Integrate all components at once</p>
            </div>
            <div className="bg-white p-3 rounded border border-green-100 text-center">
              <h5 className="font-bold text-green-800 text-sm">Top-Down</h5>
              <p className="text-xs text-slate-600 mt-1">Integrate from main to sub-modules</p>
            </div>
            <div className="bg-white p-3 rounded border border-green-100 text-center">
              <h5 className="font-bold text-green-800 text-sm">Bottom-Up</h5>
              <p className="text-xs text-slate-600 mt-1">Integrate from lowest to highest level</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded border border-amber-300">
          <h4 className="font-semibold text-amber-900 mb-2">Test Data Management</h4>
          <p className="text-sm text-slate-700 mb-2">Use realistic test data including:</p>
          <ul className="list-disc ml-6 space-y-1 text-sm text-slate-700">
            <li><strong>Normal data:</strong> Typical values the system should handle</li>
            <li><strong>Boundary data:</strong> Values at the edge of valid ranges</li>
            <li><strong>Invalid data:</strong> Test error handling and validation</li>
            <li><strong>Extreme data:</strong> Very large or very small values</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'System Documentation',
    content: (
      <div className="space-y-6">
        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded">
          <h3 className="font-bold text-cyan-900 mb-2">Documenting Your System</h3>
          <p className="text-slate-700 mb-3">
            Documentation is essential for maintenance, training, and knowledge transfer. 
            Good documentation saves time and prevents errors in the long run.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-50 p-4 rounded border border-orange-200">
            <h4 className="font-bold text-orange-900 mb-2">User Documentation</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
              <li>User Manual / Guide</li>
              <li>Quick Start Guide</li>
              <li>FAQs and Troubleshooting</li>
              <li>Video Tutorials</li>
              <li>Context-sensitive Help</li>
            </ul>
          </div>
          <div className="bg-pink-50 p-4 rounded border border-pink-200">
            <h4 className="font-bold text-pink-900 mb-2">Technical Documentation</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
              <li>System Architecture Diagrams</li>
              <li>Database Schema</li>
              <li>API Documentation</li>
              <li>Code Comments</li>
              <li>Installation Guide</li>
            </ul>
          </div>
        </div>
        <div className="bg-violet-50 p-4 rounded border border-violet-200">
          <h4 className="font-semibold text-violet-900 mb-3">Code Documentation Example</h4>
          <CodeBlock language="pascal" code={`{
  Purpose: Calculate the average of student marks
  Parameters:
    - marks: Array of integers (student marks)
    - count: Number of marks in array
  Returns: Real number representing the average
  Author: Thabo Mokoena
  Date: 2024-01-15
}
function CalculateAverage(marks: array of Integer; count: Integer): Real;
var
  i, sum: Integer;
begin
  sum := 0;
  
  // Calculate total of all marks
  for i := 0 to count - 1 do
    sum := sum + marks[i];
  
  // Return average (avoid division by zero)
  if count > 0 then
    Result := sum / count
  else
    Result := 0.0;
end;`} />
        </div>
        <div className="bg-lime-50 p-4 rounded">
          <h4 className="font-semibold text-lime-900 mb-2">Best Practices</h4>
          <ul className="list-disc ml-6 space-y-1 text-sm text-slate-700">
            <li>Keep documentation up-to-date with code changes</li>
            <li>Use clear, simple language (avoid jargon for user docs)</li>
            <li>Include screenshots and diagrams where helpful</li>
            <li>Version control for documentation as well as code</li>
            <li>Test documentation by having someone else follow it</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What is the first phase of the systems development lifecycle?',
    options: ['Testing of the finished system', 'Planning and Analysis', 'Coding of the program for the system', 'Deployment of the system to the users'],
    answer: 'Planning and Analysis',
    explanation: 'The first phase involves understanding requirements and planning the system design.',
  },
  {
    prompt: 'What does integration testing do?',
    options: ['Tests the individual units of code alone', 'Tests how the components work together', 'Tests the performance of the whole system', 'Tests the documentation that comes with it'],
    answer: 'Tests how the components work together',
    explanation: 'Integration testing verifies that different modules work together correctly.',
  },
  {
    prompt: 'What are functional requirements?',
    options: ['How fast the system runs', 'What the system must do', 'The programming language used', 'The hardware needed'],
    answer: 'What the system must do',
    explanation: 'Functional requirements specify the features and capabilities the system must provide.',
  },
  {
    prompt: 'Which testing type involves real users verifying the system meets their needs?',
    options: ['Unit Testing', 'Integration Testing', 'User Acceptance Testing', 'System Testing'],
    answer: 'User Acceptance Testing',
    explanation: 'UAT involves end users testing the system to ensure it meets their requirements and expectations.',
  },
];

const IntegratedSolutionDevelopment = () => (
  <CapsSubjectTopic
    title="Integrated Solution Development"
    subtitle="Systems design and implementation"
    learnSteps={learnSteps}
    task="gr10-integrated-solution-development-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default IntegratedSolutionDevelopment;
