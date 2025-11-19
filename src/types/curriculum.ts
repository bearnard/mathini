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

export interface Grade {
    id: number;
    title: string;
    terms: Term[];
}

export interface Curriculum {
    grades: Grade[];
}
