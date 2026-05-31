import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const mathematicsGrade7: Subject = {
  id: 'math',
  title: 'Mathematics',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'whole-numbers',
          title: 'Whole Numbers',
          description: 'Place value, factors, multiples, HCF, LCM, ratio, and rate.',
          component: lazy(() => import('./term1/whole-numbers/WholeNumbers')),
        },
        {
          id: 'exponents',
          title: 'Exponents',
          description: 'Power notation, square and cube numbers, and exponent laws.',
          component: lazy(() => import('./term1/exponents/Exponents')),
        },
        {
          id: 'construction-of-geometric-figures',
          title: 'Construction of Geometric Figures',
          description: 'Ruler, compass, and protractor constructions for angles and polygons.',
          component: lazy(
            () => import('./term1/construction-of-geometric-figures/ConstructionOfGeometricFigures'),
          ),
        },
        {
          id: 'geometry-of-2d-shapes-and-straight-lines',
          title: 'Geometry of 2D Shapes and Straight Lines',
          description: 'Properties of 2D shapes with straight-line angle relationships.',
          component: lazy(
            () =>
              import(
                './term1/geometry-of-2d-shapes-and-straight-lines/GeometryOf2DShapesAndStraightLines'
              ),
          ),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'common-fractions',
          title: 'Common Fractions',
          description: 'Equivalent fractions, mixed numbers, and fraction operations.',
          component: lazy(() => import('./term2/common-fractions/CommonFractions')),
        },
        {
          id: 'decimal-fractions',
          title: 'Decimal Fractions',
          description: 'Place value, comparison, and operations with decimals.',
          component: lazy(() => import('./term2/decimal-fractions/DecimalFractions')),
        },
        {
          id: 'functions-and-relationships',
          title: 'Functions and Relationships',
          description: 'Input-output rules, tables, flow diagrams, and inverse processes.',
          component: lazy(() => import('./term2/functions-and-relationships/FunctionsAndRelationships')),
        },
        {
          id: 'area-and-perimeter-of-2d-shapes',
          title: 'Area and Perimeter of 2D Shapes',
          description: 'Formula use for rectangles, squares, and composite 2D figures.',
          component: lazy(() => import('./term2/area-and-perimeter-of-2d-shapes/AreaAndPerimeterOf2DShapes')),
        },
        {
          id: 'surface-area-and-volume-of-3d-objects',
          title: 'Surface Area and Volume of 3D Objects',
          description: 'Nets, prisms, cubes, and volume or surface calculations.',
          component: lazy(
            () => import('./term2/surface-area-and-volume-of-3d-objects/SurfaceAreaAndVolumeOf3DObjects'),
          ),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'numeric-and-geometric-patterns',
          title: 'Numeric and Geometric Patterns',
          description: 'Pattern rules, sequence growth, and symbolic descriptions.',
          component: lazy(() => import('./term3/numeric-and-geometric-patterns/NumericAndGeometricPatterns')),
        },
        {
          id: 'functions-algebraic-expressions-and-equations',
          title: 'Functions, Algebraic Expressions and Equations',
          description: 'Substitution, simplification, and solving basic equations.',
          component: lazy(
            () =>
              import(
                './term3/functions-algebraic-expressions-and-equations/FunctionsAlgebraicExpressionsAndEquations'
              ),
          ),
        },
        {
          id: 'graphs',
          title: 'Graphs',
          description: 'Coordinates, plotting, and interpreting relationships on graphs.',
          component: lazy(() => import('./term3/graphs/Graphs')),
        },
        {
          id: 'transformation-geometry-and-3d-objects',
          title: 'Transformation Geometry and 3D Objects',
          description: 'Shape transformations and properties of 3D solids.',
          component: lazy(
            () =>
              import('./term3/transformation-geometry-and-3d-objects/TransformationGeometryAnd3DObjects'),
          ),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'integers',
          title: 'Integers',
          description: 'Ordering and operating with positive and negative numbers.',
          component: lazy(() => import('./term4/integers/Integers')),
        },
        {
          id: 'patterns-functions-and-algebra-consolidation',
          title: 'Patterns, Functions and Algebra Consolidation',
          description: 'Integrated revision of patterns, functions, expressions, and equations.',
          component: lazy(
            () =>
              import(
                './term4/patterns-functions-and-algebra-consolidation/PatternsFunctionsAndAlgebraConsolidation'
              ),
          ),
        },
        {
          id: 'data-handling',
          title: 'Data Handling',
          description: 'Collecting, representing, and interpreting data.',
          component: lazy(() => import('./term4/data-handling/DataHandling')),
        },
        {
          id: 'probability',
          title: 'Probability',
          description: 'Outcomes, sample space, and simple probability calculations.',
          component: lazy(() => import('./term4/probability/Probability')),
        },
      ],
    },
  ],
};
