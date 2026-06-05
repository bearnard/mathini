'use client';

import { Fragment, useMemo, useState, type Dispatch, type SetStateAction } from 'react';

import { cn } from '../../lib/utils';

interface PunnettSquareProps {
  /** Trait name e.g. "Seed colour" */
  trait?: string;
  /** Dominant phenotype label e.g. "Round" */
  dominant?: string;
  /** Recessive phenotype label e.g. "Wrinkled" */
  recessive?: string;
  /** Lock the parents (read-only mode for illustrating a specific cross) */
  lockedParent1?: [string, string];
  lockedParent2?: [string, string];
  className?: string;
}

type Allele = 'A' | 'a';

const ALLELES: Allele[] = ['A', 'a'];

const normalizeGenotype = (first: string, second: string) =>
  [first, second]
    .sort((left, right) => {
      const leftIsUpper = left === left.toUpperCase();
      const rightIsUpper = right === right.toUpperCase();

      if (leftIsUpper === rightIsUpper) {
        return left.localeCompare(right);
      }

      return leftIsUpper ? -1 : 1;
    })
    .join('');

const getGenotypeTone = (genotype: string) => {
  if (genotype === 'AA') {
    return 'border-indigo-700 bg-indigo-700 text-white';
  }

  if (genotype === 'Aa') {
    return 'border-indigo-300 bg-indigo-100 text-indigo-950';
  }

  return 'border-slate-300 bg-white text-slate-900';
};

const formatRatio = (entries: Array<[string, number]>) =>
  entries
    .filter(([, count]) => count > 0)
    .map(([label, count]) => `${count} ${label}`)
    .join(' : ');

export default function PunnettSquare({
  trait = 'Seed colour',
  dominant = 'Dominant',
  recessive = 'Recessive',
  lockedParent1,
  lockedParent2,
  className,
}: PunnettSquareProps) {
  const [parent1, setParent1] = useState<[Allele, Allele]>((lockedParent1 as [Allele, Allele]) ?? ['A', 'a']);
  const [parent2, setParent2] = useState<[Allele, Allele]>((lockedParent2 as [Allele, Allele]) ?? ['A', 'a']);
  const [traitName, setTraitName] = useState(trait);
  const [dominantName, setDominantName] = useState(dominant);
  const [recessiveName, setRecessiveName] = useState(recessive);

  const activeParent1 = (lockedParent1 ?? parent1) as [Allele, Allele];
  const activeParent2 = (lockedParent2 ?? parent2) as [Allele, Allele];

  const offspring = useMemo(
    () => activeParent2.map((rowAllele) => activeParent1.map((columnAllele) => normalizeGenotype(columnAllele, rowAllele))),
    [activeParent1, activeParent2],
  );

  const flatOffspring = offspring.flat();

  const genotypeCounts = flatOffspring.reduce<Record<string, number>>(
    (accumulator, genotype) => {
      accumulator[genotype] = (accumulator[genotype] ?? 0) + 1;
      return accumulator;
    },
    { AA: 0, Aa: 0, aa: 0 },
  );

  const phenotypeCounts = flatOffspring.reduce(
    (accumulator, genotype) => {
      if (genotype.includes('A')) {
        accumulator.dominant += 1;
      } else {
        accumulator.recessive += 1;
      }

      return accumulator;
    },
    { dominant: 0, recessive: 0 },
  );

  const updateParent = (
    setter: Dispatch<SetStateAction<[Allele, Allele]>>,
    index: 0 | 1,
    value: Allele,
  ) => {
    setter((current) => {
      const next = [...current] as [Allele, Allele];
      next[index] = value;
      return next;
    });
  };

  return (
    <div className={cn('rounded-2xl border border-slate-200 bg-white shadow-sm', className)}>
      <div className="border-b border-slate-100 px-4 py-3 sm:px-6">
        <h3 className="text-lg font-semibold text-slate-900">Punnett Square</h3>
        <p className="mt-1 text-sm text-slate-500">Explore a monohybrid genetic cross and compare genotype and phenotype ratios.</p>
      </div>

      <div className="space-y-6 p-4 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,1fr)]">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="space-y-2 text-sm">
                <span className="font-medium text-slate-700">Trait</span>
                <input
                  value={traitName}
                  onChange={(event) => setTraitName(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none"
                  placeholder="Trait name"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-medium text-slate-700">Dominant phenotype</span>
                <input
                  value={dominantName}
                  onChange={(event) => setDominantName(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none"
                  placeholder="Dominant label"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-medium text-slate-700">Recessive phenotype</span>
                <input
                  value={recessiveName}
                  onChange={(event) => setRecessiveName(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none"
                  placeholder="Recessive label"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: 'Parent 1', value: activeParent1, setter: setParent1, locked: Boolean(lockedParent1) },
                { label: 'Parent 2', value: activeParent2, setter: setParent2, locked: Boolean(lockedParent2) },
              ].map((parent) => (
                <div key={parent.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-slate-900">{parent.label}</h4>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      Genotype {parent.value.join('')}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {([0, 1] as const).map((index) => (
                      <label key={index} className="space-y-2 text-sm">
                        <span className="font-medium text-slate-600">Allele {index + 1}</span>
                        <select
                          value={parent.value[index]}
                          onChange={(event) => updateParent(parent.setter, index, event.target.value as Allele)}
                          disabled={parent.locked}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none disabled:cursor-not-allowed disabled:bg-slate-100"
                        >
                          {ALLELES.map((allele) => (
                            <option key={allele} value={allele}>
                              {allele}
                            </option>
                          ))}
                        </select>
                      </label>
                    ))}
                  </div>

                  {parent.locked ? <p className="mt-3 text-xs text-slate-500">This parent is locked for demonstration.</p> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="rounded-xl bg-slate-100 px-3 py-2">Parent 1: {activeParent1.join('')}</span>
                <span className="rounded-xl bg-slate-100 px-3 py-2">Parent 2: {activeParent2.join('')}</span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid grid-cols-3 text-center text-sm">
                  <div className="bg-slate-900 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-100">
                    {traitName || 'Trait'}
                  </div>
                  {activeParent1.map((allele, index) => (
                    <div key={`${allele}-${index}`} className="bg-indigo-600 px-4 py-3 font-semibold text-white">
                      {allele}
                    </div>
                  ))}

                  {offspring.map((row, rowIndex) => (
                    <Fragment key={`row-${rowIndex}`}>
                      <div className="flex items-center justify-center bg-indigo-600 px-4 py-4 font-semibold text-white">
                        {activeParent2[rowIndex]}
                      </div>
                      {row.map((genotype, columnIndex) => (
                        <div
                          key={`${rowIndex}-${columnIndex}`}
                          className={cn('flex min-h-24 flex-col items-center justify-center border-l border-t px-3 py-4 text-center', getGenotypeTone(genotype))}
                        >
                          <span className="font-mono text-2xl font-bold">{genotype}</span>
                          <span className={cn('mt-1 text-xs font-medium', genotype === 'AA' ? 'text-indigo-100' : genotype === 'Aa' ? 'text-indigo-700' : 'text-slate-500')}>
                            {genotype.includes('A') ? dominantName || 'Dominant' : recessiveName || 'Recessive'}
                          </span>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="text-sm font-semibold text-slate-900">Genotype ratio</h4>
                <p className="mt-2 text-sm text-slate-600">{formatRatio(Object.entries(genotypeCounts)) || 'No offspring yet'}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-mono font-semibold text-slate-900">AA</span> = homozygous dominant
                  </p>
                  <p>
                    <span className="font-mono font-semibold text-slate-900">Aa</span> = heterozygous
                  </p>
                  <p>
                    <span className="font-mono font-semibold text-slate-900">aa</span> = homozygous recessive
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="text-sm font-semibold text-slate-900">Phenotype ratio</h4>
                <p className="mt-2 text-sm text-slate-600">
                  {phenotypeCounts.dominant} {dominantName || 'dominant'} : {phenotypeCounts.recessive} {recessiveName || 'recessive'}
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  For <span className="font-semibold text-slate-700">{traitName || 'this trait'}</span>, any genotype with an uppercase
                  <span className="mx-1 font-mono font-semibold text-slate-900">A</span>
                  shows the dominant phenotype.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
