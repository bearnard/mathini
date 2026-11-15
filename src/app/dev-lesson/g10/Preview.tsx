'use client';

// DEV_LESSON_PREVIEW_ONLY (see ../PreviewView.tsx): Grade 10 only.
import { grade10 } from '../../../curriculum/grade10';
import PreviewView from '../PreviewView';

const GRADES = [grade10];

export default function Preview() {
  return <PreviewView grades={GRADES} />;
}
