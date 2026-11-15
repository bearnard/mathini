'use client';

// DEV_LESSON_PREVIEW_ONLY (see ../PreviewView.tsx): Grade 8 only.
import { grade8 } from '../../../curriculum/grade8';
import PreviewView from '../PreviewView';

const GRADES = [grade8];

export default function Preview() {
  return <PreviewView grades={GRADES} />;
}
