import CodeBlock from '@/components/subjects/CodeBlock';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Text files vs binary files',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Programs can store data persistently in <strong>files</strong>. The two main types are text files and binary files.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Text files (.txt, .csv)</strong>
            <p className="text-slate-600">Store data as human-readable characters (ASCII/Unicode). Easy to open in any text editor. Lines end with a newline character.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Binary files (.dat, .bin)</strong>
            <p className="text-slate-600">Store data in machine format (bytes). Compact and fast but not human-readable. Used for images, databases, executables.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Grade 11 focuses mainly on <strong>text file processing</strong>.</p>
      </div>
    ),
  },
  {
    title: 'File access modes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When opening a file, you must choose the correct <strong>access mode</strong>:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Read</strong>
            <p className="text-slate-600">Open an existing file to read its contents. Cannot modify the file.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Write</strong>
            <p className="text-slate-600">Create a new file or <em>overwrite</em> an existing file. Previous content is erased.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Append</strong>
            <p className="text-slate-600">Open an existing file and add new content at the <em>end</em> without deleting existing data.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Reading from a text file',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reading a file line by line is the most common pattern for processing text data:
        </p>
        <CodeBlock language="python" code={`# Python example
f = open("data.txt", "r")
for line in f:
    print(line.strip())
f.close()`} />
        <div className="bg-amber-50 p-4 rounded-xl text-left">
          <strong className="text-amber-700">Important:</strong>
          <p className="text-slate-600">Always close the file after use to release the resource and prevent data corruption.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Writing and appending to files',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use <strong>write</strong> mode to create/overwrite a file, or <strong>append</strong> mode to add records without losing existing data.
        </p>
        <CodeBlock language="pascal" code={`# Write (overwrites)
f = open("log.txt", "w")
f.write("First entry\n")
f.close()

# Append (preserves existing)
f = open("log.txt", "a")
f.write("Second entry\n")
f.close()`} />
        <p className="text-sm text-slate-600">After two runs using append, the file contains both entries on separate lines.</p>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What is the main difference between a text file and a binary file?',
    options: ['Text files are always larger than binary files', 'Text files hold readable characters; binary files hold raw bytes', 'Binary files can only store numbers', 'Text files need special software to open them'],
    answer: 'Text files hold readable characters; binary files hold raw bytes',
    explanation: 'Text files (e.g. .txt, .csv) are readable in any text editor. Binary files store data in byte format and are not human-readable.',
  },
  {
    prompt: 'A program needs to add new sales records to an existing log file without losing previous records. Which file mode should it use?',
    options: ['Read ("r")', 'Write ("w")', 'Append ("a")', 'Execute ("x")'],
    answer: 'Append ("a")',
    explanation: 'Append mode adds data to the end of an existing file without overwriting the current content.',
  },
  {
    prompt: 'What happens to an existing file\'s contents when you open it in write ("w") mode?',
    options: [
      'The existing contents are preserved and new data is added after',
      'The existing contents are deleted (overwritten)',
      'The program raises an error if the file already exists',
      'The file becomes read-only',
    ],
    answer: 'The existing contents are deleted (overwritten)',
    explanation: 'Write mode creates a fresh, empty file — all previous content is lost immediately on opening.',
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
    prompt: 'A program reads a text file line by line and strips whitespace. What does the .strip() method do?',
    options: ['Removes all of the letters from the line of text', 'Removes leading and trailing whitespace and newlines', 'Splits the line into a list of separate words', 'Converts the whole line of text to uppercase'],
    answer: 'Removes leading and trailing whitespace and newlines',
    explanation: '.strip() removes whitespace (spaces, tabs, \\n) from both ends of a string — essential when reading file lines.',
  },
  {
    prompt: 'Which mode would you use to read an existing file without changing it?',
    options: ['"w"', '"a"', '"r"', '"rw"'],
    answer: '"r"',
    explanation: 'Read mode ("r") opens a file for reading only. Attempting to write raises an error.',
  },
  {
    prompt: 'What character typically marks the end of a line in a text file?',
    options: ['A full stop (.)', 'A newline character (\\n)', 'A null character (\\0)', 'A tab character (\\t)'],
    answer: 'A newline character (\\n)',
    explanation: 'Lines in text files are separated by the newline character \\n (and \\r\\n on Windows).',
  },
  {
    prompt: 'A text file contains three lines. A loop reads and prints each line. How many times does the loop body execute?',
    options: ['1', '2', '3', '4'],
    answer: '3',
    explanation: 'A for-each loop over a text file iterates once per line — three lines means three iterations.',
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
    explanation: 'EOF signals that the last line has been read. Most loops automatically handle EOF and exit cleanly.',
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
