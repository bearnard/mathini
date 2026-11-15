'use client';

// DEV_LESSON_PREVIEW_ONLY (see ../PreviewView.tsx): Grade 11 only.
import { grade11 } from '../../../curriculum/grade11';
import PreviewView from '../PreviewView';

const GRADES = [grade11];

export default function Preview() {
  return <PreviewView grades={GRADES} />;
}
