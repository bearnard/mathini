import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem } from '../../_shared/types';
import { learnSteps } from './Slides';

const bank: ITItem[] = [
  {
    prompt: 'A program accepts a percentage mark and checks: if (iMark < 0) or (iMark > 100) then ShowMessage(\'Invalid mark\'). Which validation is this?',
    options: ['Presence check', 'Type check', 'Range check', 'Format check'],
    answer: 'Range check',
    explanation: 'A range check verifies the value falls between a minimum and maximum (0–100 for a percentage mark).',
  },
  {
    prompt: 'The user enters "abc" into an integer field. Which exception does Delphi raise when StrToInt converts it?',
    options: ['ERangeError', 'EDivByZero', 'EConvertError', 'EAccessViolation'],
    answer: 'EConvertError',
    explanation: 'StrToInt(\'abc\') raises EConvertError because abc cannot be converted to an integer. TryStrToInt returns False instead of raising it.',
  },
  {
    prompt: 'What does the finally section of a try..finally structure do?',
    options: ['Runs only if no exception occurs', 'Runs only if an exception has occurred', 'Always runs, whether or not an exception occurred', 'Raises a brand new exception when it is reached'],
    answer: 'Always runs, whether or not an exception occurred',
    explanation: 'The finally block is used for cleanup code (e.g. closing files) that must execute no matter what.',
  },
  {
    prompt: 'Which array operation calculates the running total of all elements?',
    options: ['Traversal', 'Accumulator', 'Search', 'Sorting'],
    answer: 'Accumulator',
    explanation: 'An accumulator pattern initialises a total variable to 0 and adds each element to it as the array is traversed.',
  },
  {
    prompt: 'An array arrMarks holds 55, 78, 43 and 90. A loop adds each element to iTotal, which starts at 0. What is iTotal at the end?',
    options: ['90', '266', '65.5', '4'],
    answer: '266',
    explanation: '55 + 78 + 43 + 90 = 266. The loop adds each element to the accumulator in turn.',
  },
  {
    prompt: 'A program checks: if Pos(\'@\', sEmail) > 0 — which validation type is this?',
    options: ['Presence check', 'Range check', 'Format check', 'Type check'],
    answer: 'Format check',
    explanation: 'Checking for the "@" character verifies the format/pattern of the email address.',
  },
  {
    prompt: 'An array is declared as arrMarks: array[1..4] of Integer. What is the index of the first element?',
    options: ['0', '1', '4', 'It is chosen at run time'],
    answer: '1',
    explanation: 'The lower bound is written in the declaration, and array[1..4] starts at index 1. A dynamic array always starts at 0.',
  },
  {
    prompt: 'A program reads integers from a file but the file contains a blank line. What is the safest approach?',
    options: ['Assume that the file is always correct', 'Use try..except to catch conversion errors on each line', 'Open the file with Rewrite instead', 'Read only the first ten lines of the file'],
    answer: 'Use try..except to catch conversion errors on each line',
    explanation: 'Wrapping the StrToInt conversion in try..except prevents a crash when a blank or non-numeric line is encountered.',
  },
  {
    prompt: 'Which loop condition reads a text file f from the first line to the last?',
    options: ['while Eof(f) do', 'while not Eof(f) do', 'for i := 1 to Eof(f) do', 'repeat until Reset(f)'],
    answer: 'while not Eof(f) do',
    explanation: 'The loop keeps calling ReadLn until Eof(f) becomes True, so the condition is while not Eof(f).',
  },
];

const DataProcessing = () => (
  <CapsSubjectTopic
    title="Data Processing and Validation"
    subtitle="Validating input, processing arrays and handling exceptions"
    learnSteps={learnSteps}
    task="gr11-data-processing-t3"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default DataProcessing;
