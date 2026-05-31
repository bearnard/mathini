import type { SubjectConfig } from './types';
import { ca } from './ca';
import { ems } from './ems';
import { eng } from './eng';
import { geo } from './geo';
import { his } from './his';
import { lo } from './lo';
import { lsk } from './lsk';
import { math } from './math';
import { ns } from './ns';
import { nst } from './nst';
import { tech } from './tech';
import { xho } from './xho';

export const registry: Record<string, SubjectConfig> = {
  ca,
  ems,
  eng,
  geo,
  his,
  lo,
  lsk,
  math,
  ns,
  nst,
  tech,
  xho,
};
