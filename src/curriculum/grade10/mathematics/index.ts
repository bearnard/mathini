import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const mathematicsGrade10: Subject = {
  id: 'math',
  title: 'Mathematics',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-algebraic-expressions-t1',
          title: 'Algebraic Expressions',
          description: 'Expanding, factorising (common factors, grouping, trinomials, squares and cubes), algebraic fractions, rational and irrational numbers.',
          component: lazy(() => import('./term1/algebraic-expressions/AlgebraicExpressions')),
        },
        {
          id: 'gr10-exponents-t1',
          title: 'Exponents',
          description: 'Laws of exponents, zero, negative and rational exponents, and exponential equations.',
          component: lazy(() => import('./term1/exponents/Exponents')),
        },
        {
          id: 'gr10-number-patterns-t1',
          title: 'Number Patterns',
          description: 'Linear number patterns, the common difference and the general term.',
          component: lazy(() => import('./term1/number-patterns/NumberPatterns')),
        },
        {
          id: 'gr10-equations-inequalities-t1',
          title: 'Equations and Inequalities',
          description: 'Linear, quadratic, literal and simultaneous equations, linear inequalities and interval notation.',
          component: lazy(() => import('./term1/equations-inequalities/EquationsInequalities')),
        },
        {
          id: 'gr10-trigonometry-t1',
          title: 'Trigonometry',
          description: 'Trigonometric ratios, special angles, angles on the Cartesian plane and right-angled triangles.',
          component: lazy(() => import('./term1/trigonometry/Trigonometry')),
        },
      ],
    },
  ],
};
