import type { SubjectConfig } from './types';
import { acc } from './acc';
import { bus } from './bus';
import { ca } from './ca';
import { cat } from './cat';
import { econ } from './econ';
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
import { it } from './it';
import { ls } from './ls';
import { ml } from './ml';
import { ps } from './ps';
import { xho } from './xho';
import { grade6 } from './grade6';

export const registry: Record<string, SubjectConfig> = {
  acc,
  grade6,
  bus,
  ca,
  cat,
  econ,
  ems,
  eng,
  geo,
  his,
  it,
  lo,
  ls,
  lsk,
  math,
  ml,
  ns,
  nst,
  ps,
  tech,
  xho,
};
