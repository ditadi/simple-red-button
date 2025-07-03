
import { z } from 'zod';

// Simple page schema for the button page
export const buttonPageSchema = z.object({
  html: z.string(),
  title: z.string()
});

export type ButtonPage = z.infer<typeof buttonPageSchema>;
