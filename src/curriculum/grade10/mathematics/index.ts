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
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-functions-linear-quadratic-t2',
          title: 'Functions: Straight Lines and Parabolas',
          description: 'Function notation, tables, graphs and formulae; straight lines and parabolas of the form y = ax² + q, intercepts, turning points, domain and range.',
          component: lazy(() => import('./term2/functions-linear-quadratic/FunctionsLinearQuadratic')),
        },
        {
          id: 'gr10-functions-other-t2',
          title: 'Functions: Hyperbola, Exponential and Trigonometric Graphs',
          description: 'The hyperbola y = a/x + q, the exponential graph, and the sine, cosine and tangent graphs: asymptotes, intercepts and range.',
          component: lazy(() => import('./term2/functions-other/FunctionsOther')),
        },
        {
          id: 'gr10-euclidean-geometry-t2',
          title: 'Euclidean Geometry: Quadrilaterals and Triangles',
          description: 'Special quadrilaterals and their properties, the midpoint theorem, congruent and similar triangles.',
          component: lazy(() => import('./term2/euclidean-geometry/EuclideanGeometry')),
        },
        {
          id: 'gr10-midyear-exam-prep-t2',
          title: 'Mid-year Exam Preparation',
          description: 'Mixed Term 1 and Term 2 practice questions with the marks shown, and exam technique.',
          component: lazy(() => import('./term2/midyear-exam-prep/MidYearExamPrep')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-analytical-geometry-t3',
          title: 'Analytical Geometry',
          description: 'Distance, gradient, midpoint, parallel and perpendicular lines, and collinear points.',
          component: lazy(() => import('./term3/analytical-geometry/AnalyticalGeometry')),
        },
        {
          id: 'gr10-finance-growth-t3',
          title: 'Finance and Growth',
          description: 'Simple and compound interest, hire purchase, inflation, population growth and exchange rates.',
          component: lazy(() => import('./term3/finance-growth/FinanceGrowth')),
        },
        {
          id: 'gr10-statistics-t3',
          title: 'Statistics',
          description: 'Grouped data, quartiles, the five-number summary and box-and-whisker plots.',
          component: lazy(() => import('./term3/statistics/Statistics')),
        },
        {
          id: 'gr10-measurement-t3',
          title: 'Measurement',
          description: 'Surface area and volume of spheres, cones, pyramids, prisms and composite solids.',
          component: lazy(() => import('./term3/measurement/Measurement')),
        },
        {
          id: 'gr10-trig-geometry-t3',
          title: 'Trigonometry in Two Dimensions and Geometry Riders',
          description: 'Angles of elevation and depression, finding angles and multi-step problems.',
          component: lazy(() => import('./term3/trig-geometry/TrigGeometry')),
        },
      ],
    },
  ],
};
