'use client';

// DEV_LESSON_PREVIEW_ONLY (see ../PreviewView.tsx): Grade 7 only.
import { grade7 } from '../../../curriculum/grade7';
import PreviewView from '../PreviewView';

const GRADES = [grade7];

export default function Preview() {
  return <PreviewView grades={GRADES} />;
}
