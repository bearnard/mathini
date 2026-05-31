import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const mathematicsGrade9: Subject = {
  id: 'math',
  title: 'Mathematics',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr9-number-systems-operations',
          title: 'Number Systems and Operations',
          description: 'Real numbers, integers, fractions, and decimals with order of operations.',
          component: lazy(() => import('./term1/number-systems-operations/NumberSystemsAndOperations')),
        },
        {
          id: 'gr9-exponents',
          title: 'Exponents',
          description: 'Laws of exponents and equivalent exponential representations.',
          component: lazy(() => import('./term1/exponents/Exponents')),
        },
        {
          id: 'gr9-patterns-functions',
          title: 'Numeric and Geometric Patterns; Functions and Relationships',
          description: 'Pattern rules, tables, and input-output mapping.',
          component: lazy(() => import('./term1/patterns-functions/PatternsAndFunctions')),
        },
        {
          id: 'gr9-algebraic-expressions',
          title: 'Algebraic Expressions and Equations',
          description: 'Simplifying, factorising and solving equations.',
          component: lazy(() => import('./term1/algebraic-expressions/AlgebraicExpressions')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr9-geometry-constructions',
          title: 'Construction of Geometric Figures',
          description: 'Accurate geometric constructions with tools and justification.',
          component: lazy(() => import('./term2/geometry-constructions/GeometryConstructions')),
        },
        {
          id: 'gr9-geometry-2d-shapes',
          title: 'Geometry of 2D Shapes and Straight Lines',
          description: 'Properties of shapes, angle relationships, and deductive reasoning.',
          component: lazy(() => import('./term2/geometry-2d-shapes/Geometry2DShapes')),
        },
        {
          id: 'gr9-pythagoras',
          title: 'Theorem of Pythagoras',
          description: 'Right-triangle relationships and unknown side calculations.',
          component: lazy(() => import('./term2/pythagoras/PythagorasTheorem')),
        },
        {
          id: 'gr9-area-perimeter',
          title: 'Area and Perimeter of 2D Shapes',
          description: 'Formulae and problem solving for compound 2D figures.',
          component: lazy(() => import('./term2/area-perimeter/AreaAndPerimeter')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr9-functions-relationships',
          title: 'Functions and Relationships',
          description: 'Formalising variables and using multiple representations.',
          component: lazy(() => import('./term3/functions-relationships/FunctionsRelationships')),
        },
        {
          id: 'gr9-graphs',
          title: 'Graphs',
          description: 'Drawing and interpreting linear and non-linear graphs.',
          component: lazy(() => import('./term3/graphs/Graphs')),
        },
        {
          id: 'gr9-surface-volume-3d',
          title: 'Surface Area and Volume of 3D Objects',
          description: 'Surface area and volume of common 3D forms.',
          component: lazy(() => import('./term3/surface-volume-3d/SurfaceVolumeT3')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr9-transformations',
          title: 'Transformation Geometry',
          description: 'Translations, reflections, rotations and enlargements.',
          component: lazy(() => import('./term4/transformations/TransformationGeometry')),
        },
        {
          id: 'gr9-3d-objects',
          title: 'Geometry of 3D Objects',
          description: 'Properties, classification and spatial reasoning with solids.',
          component: lazy(() => import('./term4/3d-objects/Geometry3DObjects')),
        },
        {
          id: 'gr9-data-handling',
          title: 'Data Handling',
          description: 'Collecting, representing, analysing and reporting data.',
          component: lazy(() => import('./term4/data-handling/DataHandling')),
        },
        {
          id: 'gr9-probability',
          title: 'Probability',
          description: 'Simple and compound events, tree diagrams and relative frequency.',
          component: lazy(() => import('./term4/probability/Probability')),
        },
      ],
    },
  ],
};
