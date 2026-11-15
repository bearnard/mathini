'use client';

// DEV_LESSON_PREVIEW_ONLY (see ../PreviewView.tsx): Grade 5 only.
import { grade5 } from '../../../curriculum/grade5';
import PreviewView from '../PreviewView';

const GRADES = [grade5];

export default function Preview() {
  return <PreviewView grades={GRADES} />;
}
