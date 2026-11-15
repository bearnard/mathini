import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem } from '../../_shared/types';
import { learnSteps } from './Slides';

const bank: ITItem[] = [
  {
    prompt: 'What is the main difference between a text file and a binary file?',
    options: ['Text files are always larger than binary files', 'Text files hold readable characters; binary files hold raw bytes', 'Binary files can only store numbers', 'Text files need special software to open them'],
    answer: 'Text files hold readable characters; binary files hold raw bytes',
    explanation: 'Text files (e.g. .txt, .csv) are readable in any text editor. Binary files store data in byte format and are not human-readable.',
  },
  {
    prompt: 'A program needs to add new sales records to an existing log file without losing previous records. Which file mode should it use?',
    options: ['Reset', 'Rewrite', 'Append', 'CloseFile'],
    answer: 'Append',
    explanation: 'Append opens an existing text file and adds data to the end of an existing file without overwriting the current content.',
  },
  {
    prompt: 'What happens to an existing file\'s contents when you open it with Rewrite?',
    options: [
      'The existing contents are preserved and new data is added after',
      'The existing contents are deleted (overwritten)',
      'The program raises an error if the file already exists',
      'The file becomes read-only',
    ],
    answer: 'The existing contents are deleted (overwritten)',
    explanation: 'Rewrite creates a fresh, empty file, so all previous content is lost immediately on opening.',
  },
  {
    prompt: 'Why is it important to close a file after processing it?',
    options: ['It makes the program run noticeably faster', 'It clears temporary data out of the RAM', 'It frees the file and flushes all data to disk', 'It converts the file to a binary format'],
    answer: 'It frees the file and flushes all data to disk',
    explanation: 'Not closing a file can cause data loss (buffered data not written) and may lock the file from other processes.',
  },
  {
    prompt: 'Which file extension is most commonly associated with a text-based comma-separated file?',
    options: ['.exe', '.csv', '.bin', '.dll'],
    answer: '.csv',
    explanation: 'CSV (Comma-Separated Values) is a plain text format where each line is a record and values are separated by commas.',
  },
  {
    prompt: 'A Delphi program reads a line from a text file into sLine. What does Trim(sLine) do?',
    options: ['Removes all of the letters from the line of text', 'Removes spaces from the start and end of the string', 'Splits the line into separate words', 'Converts the whole line of text to uppercase'],
    answer: 'Removes spaces from the start and end of the string',
    explanation: 'Trim removes leading and trailing spaces, which is useful when a line read from a file has extra spaces around the data.',
  },
  {
    prompt: 'Which statement opens an existing text file so that you can read it without changing it?',
    options: ['Rewrite(f)', 'Append(f)', 'Reset(f)', 'CloseFile(f)'],
    answer: 'Reset(f)',
    explanation: 'Reset opens an existing text file for reading from the first line. Writing to a file opened with Reset gives a runtime error.',
  },
  {
    prompt: 'What character typically marks the end of a line in a text file?',
    options: ['A full stop (.)', 'A newline character (\\n)', 'A null character (\\0)', 'A tab character (\\t)'],
    answer: 'A newline character (\\n)',
    explanation: 'Lines in text files are separated by the newline character \\n (and \\r\\n on Windows).',
  },
  {
    prompt: 'A text file contains three lines. A while not Eof(f) loop reads one line with ReadLn each time round. How many times does the loop body execute?',
    options: ['1', '2', '3', '4'],
    answer: '3',
    explanation: 'Each ReadLn consumes one line, so the loop runs once per line and stops when Eof becomes True after the third.',
  },
  {
    prompt: 'What is an end-of-file (EOF) condition?',
    options: [
      'An error that occurs when a file is too large',
      'The marker or state indicating there are no more data to read in the file',
      'A special character placed at the start of every file',
      'A file mode that prevents writing',
    ],
    answer: 'The marker or state indicating there are no more data to read in the file',
    explanation: 'Eof(f) returns True once the last line has been read, so while not Eof(f) is the usual loop to read a whole text file.',
  },
];

const FileHandling = () => (
  <CapsSubjectTopic
    title="File Handling"
    subtitle="Reading from and writing to text files in code"
    learnSteps={learnSteps}
    task="gr11-file-handling-t1"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default FileHandling;
