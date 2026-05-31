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
