// Onboarding form validation with Zod v4.

import * as z from 'zod';

export const onboardingSchema = z.object({
  realName: z.string().min(1, 'Real name is required'),
  displayName: z
    .string()
    .min(3, 'Nickname must be at least 3 characters')
    .max(20, 'Nickname must be at most 20 characters')
    .regex(/^[a-zA-Z0-9 _-]+$/, 'Nickname can only contain letters, numbers, spaces, underscores, and hyphens'),
  school: z.string().min(1, 'School name is required'),
  age: z.number().int().min(5, 'Age must be between 5 and 19').max(19, 'Age must be between 5 and 19'),
  grade: z.number().int().min(5, 'Grade must be between 5 and 12').max(12, 'Grade must be between 5 and 12'),
});

export type OnboardingInput = z.input<typeof onboardingSchema>;
export type OnboardingOutput = z.output<typeof onboardingSchema>;
