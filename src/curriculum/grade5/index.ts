import { lazy } from 'react';
import type { Grade } from '../../types/curriculum';

export const grade5: Grade = {
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
                                    component: lazy(() => import('./term4/whole-numbers/WholeNumbers'))
                                },
                                {
                                    id: "long-division",
                                    title: "Long Division",
                                    description: "Step-by-step long division with 3-digit dividends.",
                                    component: lazy(() => import('./term4/long-division/LongDivisionTutor'))
                                },
                                {
                                    id: "mass",
                                    title: "Measurement: Mass",
                                    description: "Working with grams and kilograms.",
                                    component: lazy(() => import('./term4/mass/Mass'))
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
                                    component: lazy(() => import('./term4/history/HeritageTrail'))
                                },
                                {
                                    id: "history-ancient-egypt",
                                    title: "Ancient Egypt",
                                    description: "The Nile, pharaohs, pyramids, writing and daily life.",
                                    component: lazy(() => import('./term4/history/AncientEgypt'))
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
                                    component: lazy(() => import('./term5/history/FinalAssessment'))
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
                            id: 1,
                            title: "Term 1",
                            topics: [
                                {
                                    id: "life-skills-festivals",
                                    title: "Festivals and Customs",
                                    description: "Why we celebrate, festivals of different faiths and respect.",
                                    component: lazy(() => import('./term1/life-skills/FestivalsCustoms'))
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Term 2",
                            topics: [
                                {
                                    id: "life-skills-healthy-eating",
                                    title: "Healthy Eating",
                                    description: "Food groups, a balanced diet and drinking water.",
                                    component: lazy(() => import('./term2/life-skills/HealthyEating'))
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Term 3",
                            topics: [
                                {
                                    id: "life-skills-environment",
                                    title: "Local Environmental Problems",
                                    description: "Litter, pollution, trees and soil.",
                                    component: lazy(() => import('./term3/life-skills/LocalEnvironment'))
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Term 4",
                            topics: [
                                {
                                    id: "life-skills-substance-abuse",
                                    title: "Substance Abuse",
                                    description: "What it is, how it harms and how to say no.",
                                    component: lazy(() => import('./term4/life-skills/SubstanceAbuse'))
                                },
                                {
                                    id: "life-skills-tb-hiv",
                                    title: "TB and HIV",
                                    description: "Tuberculosis, HIV and treating people with respect.",
                                    component: lazy(() => import('./term4/life-skills/TbHiv'))
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Final Assessment",
                            topics: [
                                {
                                    id: "life-skills-final",
                                    title: "Life Skills Assessment",
                                    description: "Final assessment covering Festivals, Healthy Eating, Environment, Substance Abuse, and TB/HIV.",
                                    component: lazy(() => import('./term5/life-skills/LifeSkillsAssessment'))
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
                            id: 1,
                            title: "Term 1",
                            topics: [
                                {
                                    id: "geography-map-skills",
                                    title: "Map Skills",
                                    description: "Oceans, compass points, map scale and capital cities.",
                                    component: lazy(() => import('./term1/geography/MapSkills'))
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Term 2",
                            topics: [
                                {
                                    id: "geography-physical-features",
                                    title: "Physical Features",
                                    description: "Plateau, escarpment, mountains and rivers.",
                                    component: lazy(() => import('./term2/geography/PhysicalFeatures'))
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Term 3",
                            topics: [
                                {
                                    id: "geography-weather-climate-vegetation",
                                    title: "Weather, Climate and Vegetation",
                                    description: "Instruments, rainfall regions, plants and crops.",
                                    component: lazy(() => import('./term3/geography/WeatherClimateVegetation'))
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Term 4",
                            topics: [
                                {
                                    id: "geography-minerals-mining",
                                    title: "Minerals and Mining",
                                    description: "Minerals, how we mine, their cost and our resources.",
                                    component: lazy(() => import('./term4/geography/MineralsMining'))
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Final Assessment",
                            topics: [
                                {
                                    id: "geography-final",
                                    title: "Geography Assessment",
                                    description: "Final assessment covering Map Skills, Physical Features, Weather, Climate, and Mining.",
                                    component: lazy(() => import('./term5/geography/GeographyAssessment'))
                                }
                            ]
                        }
                    ]
                }
            ]
        };
