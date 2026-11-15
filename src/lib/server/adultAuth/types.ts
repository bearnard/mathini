// Shared types for adult accounts (ADR 0003). The role list must match the CHECK in migrations/0013_adult_auth.sql (a test compares them).
export const ROLES = ['parent', 'teacher', 'moderator', 'school_admin'] as const;
export type Role = (typeof ROLES)[number];

export interface AdultUser { id: string; email: string }
export interface AdultSession { sessionId: string; user: AdultUser; roles: Role[] }
