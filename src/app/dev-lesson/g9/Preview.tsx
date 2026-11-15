'use client';

// DEV_LESSON_PREVIEW_ONLY (see ../PreviewView.tsx): Grade 9 only.
import { grade9 } from '../../../curriculum/grade9';
import PreviewView from '../PreviewView';

const GRADES = [grade9];

export default function Preview() {
  return <PreviewView grades={GRADES} />;
}
