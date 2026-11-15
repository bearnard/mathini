'use client';

// DEV_LESSON_PREVIEW_ONLY (see ../PreviewView.tsx): Grade 6 only.
import { grade6 } from '../../../curriculum/grade6';
import PreviewView from '../PreviewView';

const GRADES = [grade6];

export default function Preview() {
  return <PreviewView grades={GRADES} />;
}
