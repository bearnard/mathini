import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const mathematicsGrade8: Subject = {
  id: 'math',
  title: 'Mathematics',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'whole-numbers-and-integers',
          title: 'Whole Numbers and Integers',
          description: 'Operations with whole numbers and integers in contextual problems.',
          component: lazy(() => import('./term1/whole-numbers-and-integers/WholeNumbersAndIntegers')),
        },
        {
          id: 'exponents',
          title: 'Exponents',
          description: 'Laws of exponents, squares, cubes, and equivalent forms.',
          component: lazy(() => import('./term1/exponents/Exponents')),
        },
        {
          id: 'numeric-and-geometric-patterns-functions-and-relationships',
          title: 'Numeric and Geometric Patterns; Functions and Relationships',
          description: 'Pattern rules, tables, and relationship descriptions.',
          component: lazy(
            () =>
              import(
                './term1/numeric-and-geometric-patterns-functions-and-relationships/NumericAndGeometricPatternsFunctionsAndRelationships'
              ),
          ),
        },
        {
          id: 'algebraic-expressions-and-equations',
          title: 'Algebraic Expressions and Equations',
          description: 'Simplification, expansion, substitution, and linear equations.',
          component: lazy(
            () => import('./term1/algebraic-expressions-and-equations/AlgebraicExpressionsAndEquations'),
          ),
        },
        {
          id: 'scientific-notation',
          title: 'Scientific Notation',
          description: 'Writing large numbers as a × 10ⁿ, converting back and comparing.',
          component: lazy(() => import('./term1/scientific-notation/ScientificNotation')),
        },
        {
          id: 'ratio-and-rate',
          title: 'Ratio and Rate',
          description: 'Simplifying and sharing in a ratio, increasing and decreasing in a ratio, speed and best buy.',
          component: lazy(() => import('./term1/ratio-and-rate/RatioAndRate')),
        },
        {
          id: 'percentages-and-financial',
          title: 'Percentages and Financial Contexts',
          description: 'Percentage of an amount, profit and loss, discount, VAT and budgets.',
          component: lazy(() => import('./term1/percentages-and-financial/PercentagesAndFinancial')),
        },
        {
          id: 'interest-hire-purchase-exchange',
          title: 'Interest, Hire Purchase and Exchange Rates',
          description: 'Simple interest year by year, loans, hire purchase and exchange rates.',
          component: lazy(() => import('./term1/interest-hire-purchase-exchange/InterestHirePurchaseExchange')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'algebraic-expressions',
          title: 'Algebraic Expressions',
          description: 'Expanding, factorising, and simplifying symbolic forms.',
          component: lazy(() => import('./term2/algebraic-expressions/AlgebraicExpressions')),
        },
        {
          id: 'algebraic-equations',
          title: 'Algebraic Equations',
          description: 'Solving linear equations and checking by substitution.',
          component: lazy(() => import('./term2/algebraic-equations/AlgebraicEquations')),
        },
        {
          id: 'construction-of-geometric-figures',
          title: 'Construction of Geometric Figures',
          description: 'Accurate geometric constructions with standard instruments.',
          component: lazy(
            () => import('./term2/construction-of-geometric-figures/ConstructionOfGeometricFigures'),
          ),
        },
        {
          id: 'geometry-of-2d-shapes-and-straight-lines',
          title: 'Geometry of 2D Shapes and Straight Lines',
          description: 'Polygon properties, parallel lines, and angle relationships.',
          component: lazy(
            () =>
              import('./term2/geometry-of-2d-shapes-and-straight-lines/GeometryOf2DShapesAndStraightLines'),
          ),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'common-and-decimal-fractions',
          title: 'Common and Decimal Fractions',
          description: 'Operations and conversions between fraction and decimal forms.',
          component: lazy(() => import('./term3/common-and-decimal-fractions/CommonAndDecimalFractions')),
        },
        {
          id: 'theorem-of-pythagoras',
          title: 'Theorem of Pythagoras',
          description: 'Right-angled triangles and unknown side calculations.',
          component: lazy(() => import('./term3/theorem-of-pythagoras/TheoremOfPythagoras')),
        },
        {
          id: 'area-perimeter-surface-area-and-volume',
          title: 'Area, Perimeter, Surface Area and Volume',
          description: 'Formula application for 2D and 3D measurement.',
          component: lazy(
            () =>
              import(
                './term3/area-perimeter-surface-area-and-volume/AreaPerimeterSurfaceAreaAndVolume'
              ),
          ),
        },
        {
          id: 'data-handling',
          title: 'Data Handling',
          description: 'Collecting, representing, and interpreting grouped and ungrouped data.',
          component: lazy(() => import('./term3/data-handling/DataHandling')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'functions-and-relationships',
          title: 'Functions and Relationships',
          description: 'Reading and generating rules from numeric and contextual data.',
          component: lazy(() => import('./term4/functions-and-relationships/FunctionsAndRelationships')),
        },
        {
          id: 'algebraic-equations',
          title: 'Algebraic Equations',
          description: 'Linear equation fluency and solution verification.',
          component: lazy(() => import('./term4/algebraic-equations/AlgebraicEquations')),
        },
        {
          id: 'graphs',
          title: 'Graphs',
          description: 'Plotting ordered pairs and interpreting graph trends.',
          component: lazy(() => import('./term4/graphs/Graphs')),
        },
        {
          id: 'transformation-geometry',
          title: 'Transformation Geometry',
          description: 'Translations, reflections, rotations, and enlargements.',
          component: lazy(() => import('./term4/transformation-geometry/TransformationGeometry')),
        },
        {
          id: 'geometry-of-3d-objects',
          title: 'Geometry of 3D Objects',
          description: 'Classifying solids, properties, and matching nets.',
          component: lazy(() => import('./term4/geometry-of-3d-objects/GeometryOf3DObjects')),
        },
        {
          id: 'probability',
          title: 'Probability',
          description: 'Simple probability from sample spaces and relative frequency.',
          component: lazy(() => import('./term4/probability/Probability')),
        },
      ],
    },
  ],
};
