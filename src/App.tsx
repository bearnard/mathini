'use client';

import { useState } from 'react';
import { Curriculum, Grade, Subject, Term, Topic } from './types/curriculum';
import CurriculumSelector from './components/CurriculumSelector';
import LongDivisionTutor from './curriculum/grade5/term4/long-division/LongDivisionTutor';
import WholeNumbers from './curriculum/grade5/term4/whole-numbers/WholeNumbers';
import Mass from './curriculum/grade5/term4/mass/Mass';
import HeritageTrail from './curriculum/grade5/term4/history/HeritageTrail';
import FinalAssessment from './curriculum/grade5/term5/history/FinalAssessment';
import LifeSkillsAssessment from './curriculum/grade5/term5/life-skills/LifeSkillsAssessment';
import GeographyAssessment from './curriculum/grade5/term5/geography/GeographyAssessment';
import G6WholeNumbers from './curriculum/grade6/term1/whole-numbers/G6WholeNumbers';
import Fractions from './curriculum/grade6/term1/fractions/Fractions';
import Patterns from './curriculum/grade6/term1/patterns/Patterns';
import Geometry from './curriculum/grade6/term1/geometry/Geometry';
import NumberSentences from './curriculum/grade6/term2/number-sentences/NumberSentences';
import PatternsT2 from './curriculum/grade6/term2/patterns/PatternsT2';
import CommonFractions from './curriculum/grade6/term2/common-fractions/CommonFractions';
import DecimalFractions from './curriculum/grade6/term2/decimal-fractions/DecimalFractions';
import Length from './curriculum/grade6/term3/length/Length';
import Symmetry from './curriculum/grade6/term3/symmetry/Symmetry';
import ShapeProperties from './curriculum/grade6/term3/shapes/ShapeProperties';
import AreaPerimeter from './curriculum/grade6/term3/area-perimeter/AreaPerimeter';
import Volume from './curriculum/grade6/term3/volume/Volume';
import MassG6 from './curriculum/grade6/term4/mass/MassG6';
import Time from './curriculum/grade6/term4/time/Time';
import Capacity from './curriculum/grade6/term4/capacity/Capacity';
import DataHandling from './curriculum/grade6/term4/data-handling/DataHandling';
import ProblemSolving from './curriculum/grade6/term4/problem-solving/ProblemSolving';
import WoordeskatGroete from './curriculum/grade6/afrikaans/term1/woordeskat-groete/WoordeskatGroete';
import NaamwoordeLidwoorde from './curriculum/grade6/afrikaans/term1/naamwoorde-lidwoorde/NaamwoordeLidwoorde';
import Meervoude from './curriculum/grade6/afrikaans/term1/meervoude/Meervoude';
import TeenwoordigeTyd from './curriculum/grade6/afrikaans/term1/teenwoordige-tyd/TeenwoordigeTyd';
import VerledeTyd from './curriculum/grade6/afrikaans/term2/verlede-tyd/VerledeTyd';
import ByvoeglikeNaamwoorde from './curriculum/grade6/afrikaans/term2/byvoeglike-naamwoorde/ByvoeglikeNaamwoorde';
import Begripstoets from './curriculum/grade6/afrikaans/term2/begripstoets/Begripstoets';
import VriendskaplikeBrief from './curriculum/grade6/afrikaans/term2/vriendskaplike-brief/VriendskaplikeBrief';
import ToekomendeTyd from './curriculum/grade6/afrikaans/term3/toekomende-tyd/ToekomendeTyd';
import TrappeVanVergelyking from './curriculum/grade6/afrikaans/term3/trappe-van-vergelyking/TrappeVanVergelyking';
import SinoniemeAntonieme from './curriculum/grade6/afrikaans/term3/sinonieme-antonieme/SinoniemeAntonieme';
import Sinsbou from './curriculum/grade6/afrikaans/term3/sinsbou/Sinsbou';
import Voorsetsels from './curriculum/grade6/afrikaans/term4/voorsetsels/Voorsetsels';
import Voegwoorde from './curriculum/grade6/afrikaans/term4/voegwoorde/Voegwoorde';
import VisueleTekste from './curriculum/grade6/afrikaans/term4/visuele-tekste/VisueleTekste';
import GemengdeHersiening from './curriculum/grade6/afrikaans/term4/gemengde-hersiening/GemengdeHersiening';
import Photosynthesis from './curriculum/grade6/natural-sciences/term1/photosynthesis/Photosynthesis';
import Nutrients from './curriculum/grade6/natural-sciences/term1/nutrients/Nutrients';
import FoodChains from './curriculum/grade6/natural-sciences/term1/food-chains/FoodChains';
import Ecosystems from './curriculum/grade6/natural-sciences/term1/ecosystems/Ecosystems';
import MaterialsProperties from './curriculum/grade6/natural-sciences/term2/materials-properties/MaterialsProperties';
import Mixtures from './curriculum/grade6/natural-sciences/term2/mixtures/Mixtures';
import SeparatingMixtures from './curriculum/grade6/natural-sciences/term2/separating-mixtures/SeparatingMixtures';
import SolutionsDissolving from './curriculum/grade6/natural-sciences/term2/solutions-dissolving/SolutionsDissolving';
import ElectricCircuits from './curriculum/grade6/natural-sciences/term3/electric-circuits/ElectricCircuits';
import ConductorsInsulators from './curriculum/grade6/natural-sciences/term3/conductors-insulators/ConductorsInsulators';
import CircuitDiagrams from './curriculum/grade6/natural-sciences/term3/circuit-diagrams/CircuitDiagrams';
import MainsElectricity from './curriculum/grade6/natural-sciences/term3/mains-electricity/MainsElectricity';
import SolarSystem from './curriculum/grade6/natural-sciences/term4/solar-system/SolarSystem';
import EarthMoonMovement from './curriculum/grade6/natural-sciences/term4/earth-moon-movement/EarthMoonMovement';
import DayNightSeasons from './curriculum/grade6/natural-sciences/term4/day-night-seasons/DayNightSeasons';
import SpaceExploration from './curriculum/grade6/natural-sciences/term4/space-exploration/SpaceExploration';
import MapSkills from './curriculum/grade6/geography/term1/map-skills/MapSkills';
import LatitudeLongitude from './curriculum/grade6/geography/term1/latitude-longitude/LatitudeLongitude';
import MapScale from './curriculum/grade6/geography/term1/map-scale/MapScale';
import LocatingPlaces from './curriculum/grade6/geography/term1/locating-places/LocatingPlaces';
import WhatIsTrade from './curriculum/grade6/geography/term2/what-is-trade/WhatIsTrade';
import ResourcesValue from './curriculum/grade6/geography/term2/resources-value/ResourcesValue';
import FairTrade from './curriculum/grade6/geography/term2/fair-trade/FairTrade';
import TradeCaseStudies from './curriculum/grade6/geography/term2/trade-case-studies/TradeCaseStudies';
import ClimateRegions from './curriculum/grade6/geography/term3/climate-regions/ClimateRegions';
import TropicalDesert from './curriculum/grade6/geography/term3/tropical-desert/TropicalDesert';
import TemperatePolar from './curriculum/grade6/geography/term3/temperate-polar/TemperatePolar';
import VegetationAdaptations from './curriculum/grade6/geography/term3/vegetation-adaptations/VegetationAdaptations';
import PopulationDistribution from './curriculum/grade6/geography/term4/population-distribution/PopulationDistribution';
import SettlementPatterns from './curriculum/grade6/geography/term4/settlement-patterns/SettlementPatterns';
import MigrationPushPull from './curriculum/grade6/geography/term4/migration-push-pull/MigrationPushPull';
import MigrationImpact from './curriculum/grade6/geography/term4/migration-impact/MigrationImpact';
import WhatIsHistory from './curriculum/grade6/history/term1/what-is-history/WhatIsHistory';
import HistoricalSources from './curriculum/grade6/history/term1/historical-sources/HistoricalSources';
import InvestigatingCommunity from './curriculum/grade6/history/term1/investigating-community/InvestigatingCommunity';
import TimelinesChange from './curriculum/grade6/history/term1/timelines-change/TimelinesChange';
import BritishTakeCape from './curriculum/grade6/history/term2/british-take-cape/BritishTakeCape';
import FrontierPeoples from './curriculum/grade6/history/term2/frontier-peoples/FrontierPeoples';
import FrontierConflicts from './curriculum/grade6/history/term2/frontier-conflicts/FrontierConflicts';
import TrekboersMigration from './curriculum/grade6/history/term2/trekboers-migration/TrekboersMigration';
import WhatIsDemocracy from './curriculum/grade6/history/term3/what-is-democracy/WhatIsDemocracy';
import RoadToDemocracy from './curriculum/grade6/history/term3/road-to-democracy/RoadToDemocracy';
import ConstitutionBillRights from './curriculum/grade6/history/term3/constitution-bill-rights/ConstitutionBillRights';
import RightsResponsibilities from './curriculum/grade6/history/term3/rights-responsibilities/RightsResponsibilities';
import EarlyIndigenousMedicine from './curriculum/grade6/history/term4/early-indigenous-medicine/EarlyIndigenousMedicine';
import AncientMedicine from './curriculum/grade6/history/term4/ancient-medicine/AncientMedicine';
import EuropeanMedicine from './curriculum/grade6/history/term4/european-medicine/EuropeanMedicine';
import ModernMedicine from './curriculum/grade6/history/term4/modern-medicine/ModernMedicine';
import { ArrowLeft } from 'lucide-react';

// --- Curriculum Data Definition ---
const curriculumData: Curriculum = {
    grades: [
        {
            id: 5,
            title: "Grade 5",
            subjects: [
                {
                    id: "math",
                    title: "Mathematics",
                    terms: [
                        {
                            id: 4,
                            title: "Term 4",
                            topics: [
                                {
                                    id: "whole-numbers",
                                    title: "Whole Numbers",
                                    description: "Counting, ordering, comparing, and place value up to 6 digits.",
                                    component: WholeNumbers
                                },
                                {
                                    id: "long-division",
                                    title: "Long Division",
                                    description: "Step-by-step long division with 3-digit dividends.",
                                    component: LongDivisionTutor
                                },
                                {
                                    id: "mass",
                                    title: "Measurement: Mass",
                                    description: "Working with grams and kilograms.",
                                    component: Mass
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "history",
                    title: "History",
                    terms: [
                        {
                            id: 4,
                            title: "Term 4",
                            topics: [
                                {
                                    id: "history-heritage",
                                    title: "Heritage Trail",
                                    description: "A Heritage Trail Through South Africa.",
                                    component: HeritageTrail
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Final Assessment",
                            topics: [
                                {
                                    id: "history-final",
                                    title: "History Assessment",
                                    description: "Final assessment covering Ancient Egypt and Heritage Trail.",
                                    component: FinalAssessment
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "life-skills",
                    title: "Life Skills",
                    terms: [
                        {
                            id: 5,
                            title: "Final Assessment",
                            topics: [
                                {
                                    id: "life-skills-final",
                                    title: "Life Skills Assessment",
                                    description: "Final assessment covering Festivals, Healthy Eating, Environment, Substance Abuse, and TB/HIV.",
                                    component: LifeSkillsAssessment
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "geography",
                    title: "Geography",
                    terms: [
                        {
                            id: 5,
                            title: "Final Assessment",
                            topics: [
                                {
                                    id: "geography-final",
                                    title: "Geography Assessment",
                                    description: "Final assessment covering Map Skills, Physical Features, Weather, Climate, and Mining.",
                                    component: GeographyAssessment
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "Grade 6",
            subjects: [
                {
                    id: "math",
                    title: "Mathematics",
                    terms: [
                        {
                            id: 1,
                            title: "Term 1",
                            topics: [
                                {
                                    id: "g6-whole-numbers",
                                    title: "Whole Numbers",
                                    description: "Large numbers (9 digits) and Prime Numbers.",
                                    component: G6WholeNumbers
                                },
                                {
                                    id: "fractions",
                                    title: "Fractions",
                                    description: "Equivalent fractions and decimals.",
                                    component: Fractions
                                },
                                {
                                    id: "patterns",
                                    title: "Patterns & Algebra",
                                    description: "Number patterns and flow diagrams.",
                                    component: Patterns
                                },
                                {
                                    id: "geometry",
                                    title: "Geometry",
                                    description: "2D shapes and 3D objects.",
                                    component: Geometry
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Term 2",
                            topics: [
                                {
                                    id: "number-sentences",
                                    title: "Number Sentences",
                                    description: "Turn word problems into equations and solve for the unknown.",
                                    component: NumberSentences
                                },
                                {
                                    id: "t2-patterns",
                                    title: "Patterns",
                                    description: "Numeric and geometric patterns, rules and flow diagrams.",
                                    component: PatternsT2
                                },
                                {
                                    id: "common-fractions",
                                    title: "Common Fractions",
                                    description: "Equivalent fractions, simplifying, and adding & subtracting.",
                                    component: CommonFractions
                                },
                                {
                                    id: "decimal-fractions",
                                    title: "Decimal Fractions",
                                    description: "Tenths and hundredths, converting fractions, and calculations.",
                                    component: DecimalFractions
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Term 3",
                            topics: [
                                {
                                    id: "length",
                                    title: "Length",
                                    description: "Units, conversions and measuring length.",
                                    component: Length
                                },
                                {
                                    id: "symmetry",
                                    title: "Symmetry",
                                    description: "Lines of symmetry and reflections.",
                                    component: Symmetry
                                },
                                {
                                    id: "shape-properties",
                                    title: "2D Shapes & 3D Objects",
                                    description: "Sides, angles, faces, edges and vertices.",
                                    component: ShapeProperties
                                },
                                {
                                    id: "area-perimeter",
                                    title: "Area & Perimeter",
                                    description: "Area and perimeter of squares and rectangles.",
                                    component: AreaPerimeter
                                },
                                {
                                    id: "volume",
                                    title: "Volume",
                                    description: "Volume of cubes and rectangular prisms.",
                                    component: Volume
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Term 4",
                            topics: [
                                {
                                    id: "mass",
                                    title: "Mass",
                                    description: "Grams, kilograms and tonnes, with conversions.",
                                    component: MassG6
                                },
                                {
                                    id: "time",
                                    title: "Time",
                                    description: "Clocks, 24-hour time and durations.",
                                    component: Time
                                },
                                {
                                    id: "capacity",
                                    title: "Capacity",
                                    description: "Millilitres and litres, and how much containers hold.",
                                    component: Capacity
                                },
                                {
                                    id: "data-handling",
                                    title: "Data Handling",
                                    description: "Mean, mode, median, range and reading graphs.",
                                    component: DataHandling
                                },
                                {
                                    id: "problem-solving",
                                    title: "Problem Solving",
                                    description: "Multi-step word problems with money and rates.",
                                    component: ProblemSolving
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "afr",
                    title: "Afrikaans (FAL)",
                    terms: [
                        {
                            id: 1,
                            title: "Term 1",
                            topics: [
                                {
                                    id: "afr-woordeskat-groete",
                                    title: "Woordeskat & Groete",
                                    description: "Everyday Afrikaans words and greetings.",
                                    component: WoordeskatGroete
                                },
                                {
                                    id: "afr-naamwoorde-lidwoorde",
                                    title: "Naamwoorde & Lidwoorde",
                                    description: "Nouns and the articles 'die' and \u2019n.",
                                    component: NaamwoordeLidwoorde
                                },
                                {
                                    id: "afr-meervoude",
                                    title: "Meervoude",
                                    description: "Making Afrikaans plurals.",
                                    component: Meervoude
                                },
                                {
                                    id: "afr-teenwoordige-tyd",
                                    title: "Teenwoordige Tyd",
                                    description: "The present tense.",
                                    component: TeenwoordigeTyd
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Term 2",
                            topics: [
                                {
                                    id: "afr-verlede-tyd",
                                    title: "Verlede Tyd",
                                    description: "Past tense with 'het' + ge-.",
                                    component: VerledeTyd
                                },
                                {
                                    id: "afr-byvoeglike-naamwoorde",
                                    title: "Byvoeglike Naamwoorde",
                                    description: "Adjectives and how they describe nouns.",
                                    component: ByvoeglikeNaamwoorde
                                },
                                {
                                    id: "afr-begripstoets",
                                    title: "Begripstoets",
                                    description: "Reading comprehension with short passages.",
                                    component: Begripstoets
                                },
                                {
                                    id: "afr-vriendskaplike-brief",
                                    title: "Vriendskaplike Brief",
                                    description: "Writing a friendly letter.",
                                    component: VriendskaplikeBrief
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Term 3",
                            topics: [
                                {
                                    id: "afr-toekomende-tyd",
                                    title: "Toekomende Tyd",
                                    description: "Future tense with 'sal'.",
                                    component: ToekomendeTyd
                                },
                                {
                                    id: "afr-trappe-van-vergelyking",
                                    title: "Trappe van Vergelyking",
                                    description: "Degrees of comparison (mooi/mooier/mooiste).",
                                    component: TrappeVanVergelyking
                                },
                                {
                                    id: "afr-sinonieme-antonieme",
                                    title: "Sinonieme & Antonieme",
                                    description: "Synonyms and antonyms.",
                                    component: SinoniemeAntonieme
                                },
                                {
                                    id: "afr-sinsbou",
                                    title: "Sinsbou",
                                    description: "Sentence structure and word order (STOMPI).",
                                    component: Sinsbou
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Term 4",
                            topics: [
                                {
                                    id: "afr-voorsetsels",
                                    title: "Voorsetsels",
                                    description: "Prepositions (op, in, onder, voor, agter).",
                                    component: Voorsetsels
                                },
                                {
                                    id: "afr-voegwoorde",
                                    title: "Voegwoorde",
                                    description: "Conjunctions (en, maar, want, omdat).",
                                    component: Voegwoorde
                                },
                                {
                                    id: "afr-visuele-tekste",
                                    title: "Visuele Tekste",
                                    description: "Reading adverts, signs and comics.",
                                    component: VisueleTekste
                                },
                                {
                                    id: "afr-gemengde-hersiening",
                                    title: "Gemengde Hersiening",
                                    description: "Mixed revision across the year.",
                                    component: GemengdeHersiening
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "nst",
                    title: "Natural Sciences & Technology",
                    terms: [
                        {
                            id: 1,
                            title: "Term 1",
                            topics: [
                                {
                                    id: "nst-photosynthesis",
                                    title: "Photosynthesis",
                                    description: "How green plants make their own food.",
                                    component: Photosynthesis
                                },
                                {
                                    id: "nst-nutrients",
                                    title: "Nutrients in Food",
                                    description: "Food groups and a balanced diet.",
                                    component: Nutrients
                                },
                                {
                                    id: "nst-food-chains",
                                    title: "Food Chains & Webs",
                                    description: "Producers, consumers and decomposers.",
                                    component: FoodChains
                                },
                                {
                                    id: "nst-ecosystems",
                                    title: "Ecosystems & Interdependence",
                                    description: "How living things depend on each other.",
                                    component: Ecosystems
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Term 2",
                            topics: [
                                {
                                    id: "nst-materials-properties",
                                    title: "Properties of Materials",
                                    description: "Why materials are chosen for different jobs.",
                                    component: MaterialsProperties
                                },
                                {
                                    id: "nst-mixtures",
                                    title: "Mixtures",
                                    description: "Combining materials into mixtures.",
                                    component: Mixtures
                                },
                                {
                                    id: "nst-separating-mixtures",
                                    title: "Separating Mixtures",
                                    description: "Sieving, filtering and evaporation.",
                                    component: SeparatingMixtures
                                },
                                {
                                    id: "nst-solutions-dissolving",
                                    title: "Solutions & Dissolving",
                                    description: "How solids dissolve to form solutions.",
                                    component: SolutionsDissolving
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Term 3",
                            topics: [
                                {
                                    id: "nst-electric-circuits",
                                    title: "Electric Circuits",
                                    description: "Cells, wires, bulbs and switches.",
                                    component: ElectricCircuits
                                },
                                {
                                    id: "nst-conductors-insulators",
                                    title: "Conductors & Insulators",
                                    description: "Materials that carry or block electricity.",
                                    component: ConductorsInsulators
                                },
                                {
                                    id: "nst-circuit-diagrams",
                                    title: "Circuit Diagrams & Symbols",
                                    description: "Drawing circuits with standard symbols.",
                                    component: CircuitDiagrams
                                },
                                {
                                    id: "nst-mains-electricity",
                                    title: "Mains Electricity & Safety",
                                    description: "Where mains power comes from and staying safe.",
                                    component: MainsElectricity
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Term 4",
                            topics: [
                                {
                                    id: "nst-solar-system",
                                    title: "The Solar System",
                                    description: "The Sun and the eight planets.",
                                    component: SolarSystem
                                },
                                {
                                    id: "nst-earth-moon-movement",
                                    title: "Earth & Moon Movement",
                                    description: "Rotation, revolution and the Moon's orbit.",
                                    component: EarthMoonMovement
                                },
                                {
                                    id: "nst-day-night-seasons",
                                    title: "Day, Night & Seasons",
                                    description: "Why we have day, night and seasons.",
                                    component: DayNightSeasons
                                },
                                {
                                    id: "nst-space-exploration",
                                    title: "Space Exploration & Technology",
                                    description: "Telescopes, satellites and rockets.",
                                    component: SpaceExploration
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "geo",
                    title: "Geography",
                    terms: [
                        {
                            id: 1,
                            title: "Term 1",
                            topics: [
                                {
                                    id: "geo-map-skills",
                                    title: "Map Skills & the Globe",
                                    description: "The globe, compass directions and using an atlas.",
                                    component: MapSkills
                                },
                                {
                                    id: "geo-latitude-longitude",
                                    title: "Latitude & Longitude",
                                    description: "Lines on the globe, the Equator and Prime Meridian.",
                                    component: LatitudeLongitude
                                },
                                {
                                    id: "geo-map-scale",
                                    title: "Map Scale & Distance",
                                    description: "Small and large scale, and measuring real distances.",
                                    component: MapScale
                                },
                                {
                                    id: "geo-locating-places",
                                    title: "Locating Places",
                                    description: "Using grid references and coordinates to find places.",
                                    component: LocatingPlaces
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Term 2",
                            topics: [
                                {
                                    id: "geo-what-is-trade",
                                    title: "What is Trade?",
                                    description: "Trade, imports and exports, and why countries trade.",
                                    component: WhatIsTrade
                                },
                                {
                                    id: "geo-resources-value",
                                    title: "Resources & Their Value",
                                    description: "Renewable and non-renewable resources and their value.",
                                    component: ResourcesValue
                                },
                                {
                                    id: "geo-fair-trade",
                                    title: "Fair Trade",
                                    description: "Paying producers fairly and why it matters.",
                                    component: FairTrade
                                },
                                {
                                    id: "geo-trade-case-studies",
                                    title: "Trade in SA & the World",
                                    description: "What South Africa imports and exports.",
                                    component: TradeCaseStudies
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Term 3",
                            topics: [
                                {
                                    id: "geo-climate-regions",
                                    title: "Climate Regions",
                                    description: "Weather versus climate and the world's climate regions.",
                                    component: ClimateRegions
                                },
                                {
                                    id: "geo-tropical-desert",
                                    title: "Tropical Rainforest & Hot Desert",
                                    description: "Two contrasting climate regions and their life.",
                                    component: TropicalDesert
                                },
                                {
                                    id: "geo-temperate-polar",
                                    title: "Mediterranean, Temperate & Polar",
                                    description: "Other climate regions and where they occur.",
                                    component: TemperatePolar
                                },
                                {
                                    id: "geo-vegetation-adaptations",
                                    title: "Vegetation & Adaptations",
                                    description: "How plants and animals adapt to their climate.",
                                    component: VegetationAdaptations
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Term 4",
                            topics: [
                                {
                                    id: "geo-population-distribution",
                                    title: "Population Distribution",
                                    description: "Where people live and the factors that decide it.",
                                    component: PopulationDistribution
                                },
                                {
                                    id: "geo-settlement-patterns",
                                    title: "Urban & Rural Settlements",
                                    description: "The differences between town and country living.",
                                    component: SettlementPatterns
                                },
                                {
                                    id: "geo-migration-push-pull",
                                    title: "Migration: Push & Pull",
                                    description: "Why people move: push and pull factors.",
                                    component: MigrationPushPull
                                },
                                {
                                    id: "geo-migration-impact",
                                    title: "Impact of Migration",
                                    description: "How migration affects people and places.",
                                    component: MigrationImpact
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "his",
                    title: "History",
                    terms: [
                        {
                            id: 1,
                            title: "Term 1",
                            topics: [
                                {
                                    id: "his-what-is-history",
                                    title: "What is History?",
                                    description: "The study of the past and how we learn about it.",
                                    component: WhatIsHistory
                                },
                                {
                                    id: "his-historical-sources",
                                    title: "Historical Sources",
                                    description: "Oral, written, visual and object sources.",
                                    component: HistoricalSources
                                },
                                {
                                    id: "his-investigating-community",
                                    title: "Investigating Local History",
                                    description: "Using interviews, museums and archives.",
                                    component: InvestigatingCommunity
                                },
                                {
                                    id: "his-timelines-change",
                                    title: "Timelines & Change",
                                    description: "Ordering events and how places change over time.",
                                    component: TimelinesChange
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Term 2",
                            topics: [
                                {
                                    id: "his-british-take-cape",
                                    title: "The British Take the Cape",
                                    description: "Why the British took the Cape in 1795 and 1806.",
                                    component: BritishTakeCape
                                },
                                {
                                    id: "his-frontier-peoples",
                                    title: "Peoples on the Frontier",
                                    description: "Khoikhoi, San, Xhosa, Boers and British.",
                                    component: FrontierPeoples
                                },
                                {
                                    id: "his-frontier-conflicts",
                                    title: "Frontier Conflicts",
                                    description: "Competition for land, water and cattle.",
                                    component: FrontierConflicts
                                },
                                {
                                    id: "his-trekboers-migration",
                                    title: "Trekboers & Migration",
                                    description: "Dutch farmers moving inland for grazing land.",
                                    component: TrekboersMigration
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Term 3",
                            topics: [
                                {
                                    id: "his-what-is-democracy",
                                    title: "What is Democracy?",
                                    description: "Government by the people through voting.",
                                    component: WhatIsDemocracy
                                },
                                {
                                    id: "his-road-to-democracy",
                                    title: "The Road to Democracy",
                                    description: "1994, Freedom Day and South Africa's first democratic election.",
                                    component: RoadToDemocracy
                                },
                                {
                                    id: "his-constitution-bill-rights",
                                    title: "Constitution & Bill of Rights",
                                    description: "The highest law and the rights it protects.",
                                    component: ConstitutionBillRights
                                },
                                {
                                    id: "his-rights-responsibilities",
                                    title: "Rights, Responsibilities & Government",
                                    description: "Citizens' rights and duties and levels of government.",
                                    component: RightsResponsibilities
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Term 4",
                            topics: [
                                {
                                    id: "his-early-indigenous-medicine",
                                    title: "Early & Indigenous Medicine",
                                    description: "Plants, herbs and traditional healers.",
                                    component: EarlyIndigenousMedicine
                                },
                                {
                                    id: "his-ancient-medicine",
                                    title: "Medicine in Ancient Times",
                                    description: "Old beliefs and early ideas about illness.",
                                    component: AncientMedicine
                                },
                                {
                                    id: "his-european-medicine",
                                    title: "European Medicine & Discoveries",
                                    description: "Hospitals, germs, cleanliness and vaccines.",
                                    component: EuropeanMedicine
                                },
                                {
                                    id: "his-modern-medicine",
                                    title: "Modern Medicine",
                                    description: "Antibiotics, X-rays and the first heart transplant.",
                                    component: ModernMedicine
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

const App = () => {
    const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

    const handleBackStep = () => {
        if (selectedTopic) {
            setSelectedTopic(null);
        } else if (selectedTerm) {
            setSelectedTerm(null);
        } else if (selectedSubject) {
            setSelectedSubject(null);
        } else if (selectedGrade) {
            setSelectedGrade(null);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-slate-50">
            {/* Navigation Bar (only visible when deep in navigation) */}
            {selectedTopic && (
                <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center gap-4 sticky top-0 z-50 shadow-sm">
                    <button
                        onClick={() => setSelectedTopic(null)}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                        title="Back to Topics"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                            {selectedGrade?.title} • {selectedSubject?.title} • {selectedTerm?.title}
                        </span>
                        <span className="font-bold text-slate-800">{selectedTopic.title}</span>
                    </div>
                </div>
            )}

            {selectedTopic ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <selectedTopic.component />
                </div>
            ) : (
                <CurriculumSelector
                    curriculum={curriculumData}
                    selectedGrade={selectedGrade}
                    selectedSubject={selectedSubject}
                    selectedTerm={selectedTerm}
                    selectedTopic={selectedTopic}
                    onSelectGrade={setSelectedGrade}
                    onSelectSubject={setSelectedSubject}
                    onSelectTerm={setSelectedTerm}
                    onSelectTopic={setSelectedTopic}
                    onBackStep={handleBackStep}
                />
            )}
        </div>
    );
};

export default App;