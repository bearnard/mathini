// Which subject and phase a topic belongs to, from the generated curriculum registry. A moderator group is one subject in one phase.
import { TOPIC_NAMES } from '../../../components/admin/topicNames.generated';
import { groupKeyOf, phaseOfGrade, type Phase } from '../../shared/moderation';
import { taskGrade } from '../serving/flags';

export interface TopicInfo { task: string; grade: number; topic: string; subject: string; phase: Phase; groupKey: string }

export function topicInfo(task: string): TopicInfo | null {
  const grade = taskGrade(task);
  if (grade == null) return null;
  const names = TOPIC_NAMES[`${grade}|${task}`];
  if (!names) return null;
  const phase = phaseOfGrade(grade);
  return { task, grade, topic: names[0], subject: names[1], phase, groupKey: groupKeyOf(names[1], phase) };
}

/** Every subject-and-phase pair in the registry, for the admin's group list. */
export function allGroupKeys(): { groupKey: string; subject: string; phase: Phase }[] {
  const seen = new Map<string, { groupKey: string; subject: string; phase: Phase }>();
  for (const key of Object.keys(TOPIC_NAMES)) {
    const g = Number(key.split('|')[0]);
    const subject = TOPIC_NAMES[key][1];
    const phase = phaseOfGrade(g);
    const groupKey = groupKeyOf(subject, phase);
    if (!seen.has(groupKey)) seen.set(groupKey, { groupKey, subject, phase });
  }
  return [...seen.values()].sort((a, b) => a.groupKey.localeCompare(b.groupKey));
}
