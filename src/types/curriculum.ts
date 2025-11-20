import React from 'react';

export interface Topic {
    id: string;
    title: string;
    description?: string;
    component: React.ComponentType;
}

export interface Term {
    id: number;
    title: string;
    topics: Topic[];
}

export interface Subject {
    id: string;
    title: string;
    terms: Term[];
}

export interface Grade {
    id: number;
    title: string;
    subjects: Subject[];
}

export interface Curriculum {
    grades: Grade[];
}
