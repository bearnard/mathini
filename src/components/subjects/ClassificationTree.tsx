'use client';

import { useState } from 'react';

export interface ClassNode {
  label: string;
  description?: string;
  example?: string;
  color?: string;
  children?: ClassNode[];
}

interface ClassificationTreeProps {
  root: ClassNode;
  title?: string;
  className?: string;
}

const DEFAULT_COLORS = [
  'border-violet-400 bg-violet-50 text-violet-800',
  'border-blue-400 bg-blue-50 text-blue-800',
  'border-green-400 bg-green-50 text-green-800',
  'border-amber-400 bg-amber-50 text-amber-800',
  'border-orange-400 bg-orange-50 text-orange-800',
  'border-red-400 bg-red-50 text-red-800',
];

const TreeNode = ({ node, depth = 0 }: { node: ClassNode; depth?: number }) => {
  const [expanded, setExpanded] = useState(depth < 2);
  const colorClass = node.color ?? DEFAULT_COLORS[depth % DEFAULT_COLORS.length];
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => hasChildren && setExpanded(e => !e)}
        className={`relative border-2 rounded-xl px-3 py-2 text-sm font-semibold transition-all shadow-sm max-w-48 text-center
          ${colorClass}
          ${hasChildren ? 'cursor-pointer hover:shadow-md' : 'cursor-default'}`}
        aria-expanded={expanded}
      >
        <span>{node.label}</span>
        {node.example && (
          <span className="block text-xs font-normal opacity-70 mt-0.5 italic">e.g. {node.example}</span>
        )}
        {hasChildren && (
          <span className="absolute -bottom-1 right-1 text-[10px] opacity-60">{expanded ? '▲' : '▼'}</span>
        )}
      </button>
      {node.description && !hasChildren && (
        <p className="text-xs text-slate-500 text-center mt-1 max-w-40 px-1">{node.description}</p>
      )}
      {hasChildren && expanded && (
        <>
          {/* Connector line down */}
          <div className="w-0.5 h-4 bg-slate-300" />
          {/* Horizontal bar */}
          <div className="flex gap-4 items-start relative">
            {/* Horizontal line spanning all children */}
            {node.children!.length > 1 && (
              <div
                className="absolute top-0 left-0 right-0 h-0.5 bg-slate-300"
                style={{ left: '50%', right: '50%', transform: 'translateX(-50%)', width: '100%' }}
              />
            )}
            {node.children!.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                {node.children!.length > 1 && <div className="w-0.5 h-4 bg-slate-300" />}
                <TreeNode node={child} depth={depth + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/**
 * Interactive collapsible classification hierarchy tree.
 *
 * Usage:
 *   <ClassificationTree
 *     title="Animal Kingdom Classification"
 *     root={{
 *       label: 'Kingdom: Animalia',
 *       children: [
 *         { label: 'Phylum: Chordata', children: [
 *           { label: 'Class: Mammalia', example: 'Lion, Human' },
 *           { label: 'Class: Aves', example: 'Eagle, Penguin' },
 *         ]},
 *         { label: 'Phylum: Arthropoda', example: 'Insects, Spiders' },
 *       ]
 *     }}
 *   />
 */
const ClassificationTree = ({ root, title, className }: ClassificationTreeProps) => {
  return (
    <div className={`rounded-xl border border-slate-200 overflow-hidden ${className ?? ''}`}>
      {title && (
        <div className="bg-green-700 text-white px-4 py-2 text-sm font-semibold">🌿 {title}</div>
      )}
      <div className="p-4 overflow-x-auto">
        <div className="flex justify-center min-w-max">
          <TreeNode node={root} />
        </div>
      </div>
      <p className="text-center text-xs text-slate-400 pb-2">Click nodes to expand / collapse</p>
    </div>
  );
};

export default ClassificationTree;
