import { lazy } from 'react';
import type { Grade } from '../../types/curriculum';
import { englishHL } from './english';
import { isiXhosaSAL } from './isixhosa';
import { lifeSkills } from './life-skills';

export const grade6: Grade = {
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
                                    id: "g6-large-numbers",
                                    title: "Large Numbers",
                                    description: "Place value up to 9-digit numbers.",
                                    component: lazy(() => import('./term1/whole-numbers/LargeNumbers'))
                                },
                                {
                                    id: "g6-prime-numbers",
                                    title: "Prime Numbers",
                                    description: "Prime and composite numbers, factors and multiples.",
                                    component: lazy(() => import('./term1/whole-numbers/PrimeNumbers'))
                                },
                                {
                                    id: "g6-equivalent-fractions",
                                    title: "Equivalent Fractions",
                                    description: "Understand how different fractions can have the same value.",
                                    component: lazy(() => import('./term1/fractions/EquivalentFractions'))
                                },
                                {
                                    id: "g6-comparing-fractions",
                                    title: "Comparing Fractions",
                                    description: "Compare fractions to find which is bigger or smaller.",
                                    component: lazy(() => import('./term1/fractions/ComparingFractions'))
                                },
                                {
                                    id: "g6-decimal-place-value",
                                    title: "Decimal Place Value",
                                    description: "Understand the value of digits in decimal numbers.",
                                    component: lazy(() => import('./term1/fractions/DecimalPlaceValue'))
                                },
                                {
                                    id: "g6-number-patterns",
                                    title: "Number Patterns",
                                    description: "Discover the rules behind number sequences.",
                                    component: lazy(() => import('./term1/patterns/NumberPatterns'))
                                },
                                {
                                    id: "g6-flow-diagrams",
                                    title: "Flow Diagrams",
                                    description: "Understand input and output rules.",
                                    component: lazy(() => import('./term1/patterns/FlowDiagrams'))
                                },
                                {
                                    id: "g6-2d-shapes",
                                    title: "2D Shapes",
                                    description: "Learn to identify different shapes and their properties.",
                                    component: lazy(() => import('./term1/geometry/Shapes2D'))
                                },
                                {
                                    id: "g6-3d-objects",
                                    title: "3D Objects",
                                    description: "Explore 3D shapes and their properties.",
                                    component: lazy(() => import('./term1/geometry/Objects3D'))
                                },
                                {
                                    id: "g6-add-subtract-5digit",
                                    title: "Adding and Subtracting 5-digit Numbers",
                                    description: "Estimate, then add and subtract in columns and check your answer.",
                                    component: lazy(() => import('./term1/whole-numbers/AddSubtract5Digit'))
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
                                    component: lazy(() => import('./term2/number-sentences/NumberSentences'))
                                },
                                {
                                    id: "t2-patterns",
                                    title: "Patterns",
                                    description: "Numeric and geometric patterns, rules and flow diagrams.",
                                    component: lazy(() => import('./term2/patterns/PatternsT2'))
                                },
                                {
                                    id: "common-fractions",
                                    title: "Common Fractions",
                                    description: "Equivalent fractions, simplifying, and adding & subtracting.",
                                    component: lazy(() => import('./term2/common-fractions/CommonFractions'))
                                },
                                {
                                    id: "decimal-fractions",
                                    title: "Decimal Fractions",
                                    description: "Tenths and hundredths, converting fractions, and calculations.",
                                    component: lazy(() => import('./term2/decimal-fractions/DecimalFractions'))
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
                                    component: lazy(() => import('./term3/length/Length'))
                                },
                                {
                                    id: "symmetry",
                                    title: "Symmetry",
                                    description: "Lines of symmetry and reflections.",
                                    component: lazy(() => import('./term3/symmetry/Symmetry'))
                                },
                                {
                                    id: "shape-properties",
                                    title: "2D Shapes & 3D Objects",
                                    description: "Sides, angles, faces, edges and vertices.",
                                    component: lazy(() => import('./term3/shapes/ShapeProperties'))
                                },
                                {
                                    id: "area-perimeter",
                                    title: "Area & Perimeter",
                                    description: "Area and perimeter of squares and rectangles.",
                                    component: lazy(() => import('./term3/area-perimeter/AreaPerimeter'))
                                },
                                {
                                    id: "volume",
                                    title: "Volume",
                                    description: "Volume of cubes and rectangular prisms.",
                                    component: lazy(() => import('./term3/volume/Volume'))
                                },
                                {
                                    id: "g6-add-subtract-6digit",
                                    title: "Adding and Subtracting 6-digit Numbers",
                                    description: "6-digit sums and differences, and problems with money and quantities.",
                                    component: lazy(() => import('./term3/whole-numbers/AddSubtract6Digit'))
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
                                    component: lazy(() => import('./term4/mass/MassG6'))
                                },
                                {
                                    id: "time",
                                    title: "Time",
                                    description: "Clocks, 24-hour time and durations.",
                                    component: lazy(() => import('./term4/time/Time'))
                                },
                                {
                                    id: "capacity",
                                    title: "Capacity",
                                    description: "Millilitres and litres, and how much containers hold.",
                                    component: lazy(() => import('./term4/capacity/Capacity'))
                                },
                                {
                                    id: "data-handling",
                                    title: "Data Handling",
                                    description: "Mean, mode, median, range and reading graphs.",
                                    component: lazy(() => import('./term4/data-handling/DataHandling'))
                                },
                                {
                                    id: "problem-solving",
                                    title: "Problem Solving",
                                    description: "Multi-step word problems with money and rates.",
                                    component: lazy(() => import('./term4/problem-solving/ProblemSolving'))
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
                                    component: lazy(() => import('./afrikaans/term1/woordeskat-groete/WoordeskatGroete'))
                                },
                                {
                                    id: "afr-naamwoorde-lidwoorde",
                                    title: "Naamwoorde & Lidwoorde",
                                    description: "Nouns and the articles 'die' and \u2019n.",
                                    component: lazy(() => import('./afrikaans/term1/naamwoorde-lidwoorde/NaamwoordeLidwoorde'))
                                },
                                {
                                    id: "afr-meervoude",
                                    title: "Meervoude",
                                    description: "Making Afrikaans plurals.",
                                    component: lazy(() => import('./afrikaans/term1/meervoude/Meervoude'))
                                },
                                {
                                    id: "afr-teenwoordige-tyd",
                                    title: "Teenwoordige Tyd",
                                    description: "The present tense.",
                                    component: lazy(() => import('./afrikaans/term1/teenwoordige-tyd/TeenwoordigeTyd'))
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
                                    component: lazy(() => import('./afrikaans/term2/verlede-tyd/VerledeTyd'))
                                },
                                {
                                    id: "afr-byvoeglike-naamwoorde",
                                    title: "Byvoeglike Naamwoorde",
                                    description: "Adjectives and how they describe nouns.",
                                    component: lazy(() => import('./afrikaans/term2/byvoeglike-naamwoorde/ByvoeglikeNaamwoorde'))
                                },
                                {
                                    id: "afr-begripstoets",
                                    title: "Begripstoets",
                                    description: "Reading comprehension with short passages.",
                                    component: lazy(() => import('./afrikaans/term2/begripstoets/Begripstoets'))
                                },
                                {
                                    id: "afr-vriendskaplike-brief",
                                    title: "Vriendskaplike Brief",
                                    description: "Writing a friendly letter.",
                                    component: lazy(() => import('./afrikaans/term2/vriendskaplike-brief/VriendskaplikeBrief'))
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
                                    component: lazy(() => import('./afrikaans/term3/toekomende-tyd/ToekomendeTyd'))
                                },
                                {
                                    id: "afr-trappe-van-vergelyking",
                                    title: "Trappe van Vergelyking",
                                    description: "Degrees of comparison (mooi/mooier/mooiste).",
                                    component: lazy(() => import('./afrikaans/term3/trappe-van-vergelyking/TrappeVanVergelyking'))
                                },
                                {
                                    id: "afr-sinonieme-antonieme",
                                    title: "Sinonieme & Antonieme",
                                    description: "Synonyms and antonyms.",
                                    component: lazy(() => import('./afrikaans/term3/sinonieme-antonieme/SinoniemeAntonieme'))
                                },
                                {
                                    id: "afr-sinsbou",
                                    title: "Sinsbou",
                                    description: "Sentence structure and word order (STOMPI).",
                                    component: lazy(() => import('./afrikaans/term3/sinsbou/Sinsbou'))
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
                                    component: lazy(() => import('./afrikaans/term4/voorsetsels/Voorsetsels'))
                                },
                                {
                                    id: "afr-voegwoorde",
                                    title: "Voegwoorde",
                                    description: "Conjunctions (en, maar, want, omdat).",
                                    component: lazy(() => import('./afrikaans/term4/voegwoorde/Voegwoorde'))
                                },
                                {
                                    id: "afr-visuele-tekste",
                                    title: "Visuele Tekste",
                                    description: "Reading adverts, signs and comics.",
                                    component: lazy(() => import('./afrikaans/term4/visuele-tekste/VisueleTekste'))
                                },
                                {
                                    id: "afr-gemengde-hersiening",
                                    title: "Gemengde Hersiening",
                                    description: "Mixed revision across the year.",
                                    component: lazy(() => import('./afrikaans/term4/gemengde-hersiening/GemengdeHersiening'))
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
                            id: 0,
                            title: "Exam practice",
                            badge: "★",
                            topics: [
                                {
                                    id: "nst-exam-t3t4",
                                    title: "Terms 3 & 4 Exam Practice",
                                    description: "A year-end style paper on Terms 3 and 4, scored in marks, with written answers you mark yourself.",
                                    component: lazy(() => import('./natural-sciences/exam/Terms34ExamPractice'))
                                }
                            ]
                        },
                        {
                            id: 1,
                            title: "Term 1",
                            topics: [
                                {
                                    id: "nst-photosynthesis",
                                    title: "Photosynthesis",
                                    description: "How green plants make their own food.",
                                    component: lazy(() => import('./natural-sciences/term1/photosynthesis/Photosynthesis'))
                                },
                                {
                                    id: "nst-nutrients",
                                    title: "Nutrients in Food",
                                    description: "Food groups and a balanced diet.",
                                    component: lazy(() => import('./natural-sciences/term1/nutrients/Nutrients'))
                                },
                                {
                                    id: "nst-food-chains",
                                    title: "Food Chains & Webs",
                                    description: "Producers, consumers and decomposers.",
                                    component: lazy(() => import('./natural-sciences/term1/food-chains/FoodChains'))
                                },
                                {
                                    id: "nst-ecosystems",
                                    title: "Ecosystems & Interdependence",
                                    description: "How living things depend on each other.",
                                    component: lazy(() => import('./natural-sciences/term1/ecosystems/Ecosystems'))
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
                                    component: lazy(() => import('./natural-sciences/term2/materials-properties/MaterialsProperties'))
                                },
                                {
                                    id: "nst-mixtures",
                                    title: "Mixtures",
                                    description: "Combining materials into mixtures.",
                                    component: lazy(() => import('./natural-sciences/term2/mixtures/Mixtures'))
                                },
                                {
                                    id: "nst-separating-mixtures",
                                    title: "Separating Mixtures",
                                    description: "Sieving, filtering and evaporation.",
                                    component: lazy(() => import('./natural-sciences/term2/separating-mixtures/SeparatingMixtures'))
                                },
                                {
                                    id: "nst-solutions-dissolving",
                                    title: "Solutions & Dissolving",
                                    description: "How solids dissolve to form solutions.",
                                    component: lazy(() => import('./natural-sciences/term2/solutions-dissolving/SolutionsDissolving'))
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
                                    component: lazy(() => import('./natural-sciences/term3/electric-circuits/ElectricCircuits'))
                                },
                                {
                                    id: "nst-conductors-insulators",
                                    title: "Conductors & Insulators",
                                    description: "Materials that carry or block electricity.",
                                    component: lazy(() => import('./natural-sciences/term3/conductors-insulators/ConductorsInsulators'))
                                },
                                {
                                    id: "nst-circuit-diagrams",
                                    title: "Circuit Diagrams & Symbols",
                                    description: "Drawing circuits with standard symbols.",
                                    component: lazy(() => import('./natural-sciences/term3/circuit-diagrams/CircuitDiagrams'))
                                },
                                {
                                    id: "nst-systems-solve-problems",
                                    title: "Systems to Solve Problems",
                                    description: "The design process and designing a circuit.",
                                    component: lazy(() => import('./natural-sciences/term3/systems-solve-problems/SystemsSolveProblems'))
                                },
                                {
                                    id: "nst-mains-electricity",
                                    title: "Mains Electricity & Safety",
                                    description: "Where mains power comes from and staying safe.",
                                    component: lazy(() => import('./natural-sciences/term3/mains-electricity/MainsElectricity'))
                                },
                                {
                                    id: "nst-term3-test",
                                    title: "Term 3 Mock Test",
                                    description: "20 mixed questions from all Term 3 topics.",
                                    component: lazy(() => import('./natural-sciences/term3/mock-test/Term3MockTest'))
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
                                    component: lazy(() => import('./natural-sciences/term4/solar-system/SolarSystem'))
                                },
                                {
                                    id: "nst-earth-moon-movement",
                                    title: "Earth & Moon Movement",
                                    description: "Rotation, revolution and the Moon's orbit.",
                                    component: lazy(() => import('./natural-sciences/term4/earth-moon-movement/EarthMoonMovement'))
                                },
                                {
                                    id: "nst-day-night-seasons",
                                    title: "Day, Night & Seasons",
                                    description: "Why we have day, night and seasons.",
                                    component: lazy(() => import('./natural-sciences/term4/day-night-seasons/DayNightSeasons'))
                                },
                                {
                                    id: "nst-space-exploration",
                                    title: "Space Exploration & Technology",
                                    description: "Telescopes, satellites and rockets.",
                                    component: lazy(() => import('./natural-sciences/term4/space-exploration/SpaceExploration'))
                                },
                                {
                                    id: "nst-term4-test",
                                    title: "Term 4 Mock Test",
                                    description: "20 mixed questions from all Term 4 topics.",
                                    component: lazy(() => import('./natural-sciences/term4/mock-test/Term4MockTest'))
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
                                    component: lazy(() => import('./geography/term1/map-skills/MapSkills'))
                                },
                                {
                                    id: "geo-latitude-longitude",
                                    title: "Latitude & Longitude",
                                    description: "Lines on the globe, the Equator and Prime Meridian.",
                                    component: lazy(() => import('./geography/term1/latitude-longitude/LatitudeLongitude'))
                                },
                                {
                                    id: "geo-map-scale",
                                    title: "Map Scale & Distance",
                                    description: "Small and large scale, and measuring real distances.",
                                    component: lazy(() => import('./geography/term1/map-scale/MapScale'))
                                },
                                {
                                    id: "geo-locating-places",
                                    title: "Locating Places",
                                    description: "Using grid references and coordinates to find places.",
                                    component: lazy(() => import('./geography/term1/locating-places/LocatingPlaces'))
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
                                    component: lazy(() => import('./geography/term2/what-is-trade/WhatIsTrade'))
                                },
                                {
                                    id: "geo-resources-value",
                                    title: "Resources & Their Value",
                                    description: "Renewable and non-renewable resources and their value.",
                                    component: lazy(() => import('./geography/term2/resources-value/ResourcesValue'))
                                },
                                {
                                    id: "geo-fair-trade",
                                    title: "Fair Trade",
                                    description: "Paying producers fairly and why it matters.",
                                    component: lazy(() => import('./geography/term2/fair-trade/FairTrade'))
                                },
                                {
                                    id: "geo-trade-case-studies",
                                    title: "Trade in SA & the World",
                                    description: "What South Africa imports and exports.",
                                    component: lazy(() => import('./geography/term2/trade-case-studies/TradeCaseStudies'))
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
                                    component: lazy(() => import('./geography/term3/climate-regions/ClimateRegions'))
                                },
                                {
                                    id: "geo-tropical-desert",
                                    title: "Tropical Rainforest & Hot Desert",
                                    description: "Two contrasting climate regions and their life.",
                                    component: lazy(() => import('./geography/term3/tropical-desert/TropicalDesert'))
                                },
                                {
                                    id: "geo-temperate-polar",
                                    title: "Mediterranean, Temperate & Polar",
                                    description: "Other climate regions and where they occur.",
                                    component: lazy(() => import('./geography/term3/temperate-polar/TemperatePolar'))
                                },
                                {
                                    id: "geo-vegetation-adaptations",
                                    title: "Vegetation & Adaptations",
                                    description: "How plants and animals adapt to their climate.",
                                    component: lazy(() => import('./geography/term3/vegetation-adaptations/VegetationAdaptations'))
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
                                    component: lazy(() => import('./geography/term4/population-distribution/PopulationDistribution'))
                                },
                                {
                                    id: "geo-settlement-patterns",
                                    title: "Urban & Rural Settlements",
                                    description: "The differences between town and country living.",
                                    component: lazy(() => import('./geography/term4/settlement-patterns/SettlementPatterns'))
                                },
                                {
                                    id: "geo-migration-push-pull",
                                    title: "Migration: Push & Pull",
                                    description: "Why people move: push and pull factors.",
                                    component: lazy(() => import('./geography/term4/migration-push-pull/MigrationPushPull'))
                                },
                                {
                                    id: "geo-migration-impact",
                                    title: "Impact of Migration",
                                    description: "How migration affects people and places.",
                                    component: lazy(() => import('./geography/term4/migration-impact/MigrationImpact'))
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
                                    component: lazy(() => import('./history/term1/what-is-history/WhatIsHistory'))
                                },
                                {
                                    id: "his-historical-sources",
                                    title: "Historical Sources",
                                    description: "Oral, written, visual and object sources.",
                                    component: lazy(() => import('./history/term1/historical-sources/HistoricalSources'))
                                },
                                {
                                    id: "his-investigating-community",
                                    title: "Investigating Local History",
                                    description: "Using interviews, museums and archives.",
                                    component: lazy(() => import('./history/term1/investigating-community/InvestigatingCommunity'))
                                },
                                {
                                    id: "his-timelines-change",
                                    title: "Timelines & Change",
                                    description: "Ordering events and how places change over time.",
                                    component: lazy(() => import('./history/term1/timelines-change/TimelinesChange'))
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
                                    component: lazy(() => import('./history/term2/british-take-cape/BritishTakeCape'))
                                },
                                {
                                    id: "his-frontier-peoples",
                                    title: "Peoples on the Frontier",
                                    description: "Khoikhoi, San, Xhosa, Boers and British.",
                                    component: lazy(() => import('./history/term2/frontier-peoples/FrontierPeoples'))
                                },
                                {
                                    id: "his-frontier-conflicts",
                                    title: "Frontier Conflicts",
                                    description: "Competition for land, water and cattle.",
                                    component: lazy(() => import('./history/term2/frontier-conflicts/FrontierConflicts'))
                                },
                                {
                                    id: "his-trekboers-migration",
                                    title: "Trekboers & Migration",
                                    description: "Dutch farmers moving inland for grazing land.",
                                    component: lazy(() => import('./history/term2/trekboers-migration/TrekboersMigration'))
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
                                    component: lazy(() => import('./history/term3/what-is-democracy/WhatIsDemocracy'))
                                },
                                {
                                    id: "his-road-to-democracy",
                                    title: "The Road to Democracy",
                                    description: "1994, Freedom Day and South Africa's first democratic election.",
                                    component: lazy(() => import('./history/term3/road-to-democracy/RoadToDemocracy'))
                                },
                                {
                                    id: "his-constitution-bill-rights",
                                    title: "Constitution & Bill of Rights",
                                    description: "The highest law and the rights it protects.",
                                    component: lazy(() => import('./history/term3/constitution-bill-rights/ConstitutionBillRights'))
                                },
                                {
                                    id: "his-rights-responsibilities",
                                    title: "Rights, Responsibilities & Government",
                                    description: "Citizens' rights and duties and levels of government.",
                                    component: lazy(() => import('./history/term3/rights-responsibilities/RightsResponsibilities'))
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
                                    component: lazy(() => import('./history/term4/early-indigenous-medicine/EarlyIndigenousMedicine'))
                                },
                                {
                                    id: "his-ancient-medicine",
                                    title: "Medicine in Ancient Times",
                                    description: "Old beliefs and early ideas about illness.",
                                    component: lazy(() => import('./history/term4/ancient-medicine/AncientMedicine'))
                                },
                                {
                                    id: "his-european-medicine",
                                    title: "European Medicine & Discoveries",
                                    description: "Hospitals, germs, cleanliness and vaccines.",
                                    component: lazy(() => import('./history/term4/european-medicine/EuropeanMedicine'))
                                },
                                {
                                    id: "his-modern-medicine",
                                    title: "Modern Medicine",
                                    description: "Antibiotics, X-rays and the first heart transplant.",
                                    component: lazy(() => import('./history/term4/modern-medicine/ModernMedicine'))
                                }
                            ]
                        }
                    ]
                },
                englishHL,
                isiXhosaSAL,
                lifeSkills,
            ]
        };
