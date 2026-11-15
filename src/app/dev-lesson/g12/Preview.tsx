'use client';

// DEV_LESSON_PREVIEW_ONLY (see ../PreviewView.tsx): Grade 12 only.
import { grade12 } from '../../../curriculum/grade12';
import PreviewView from '../PreviewView';

const GRADES = [grade12];

export default function Preview() {
  return <PreviewView grades={GRADES} />;
}
