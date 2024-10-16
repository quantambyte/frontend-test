import * as z from 'zod';

/**
 * Schema for validating login credentials.
 *
 * @constant {z.ZodObject} loginSchema
 * @property {z.ZodString} username - The username field, which is required and must be a non-empty string.
 * @property {z.ZodString} password - The password field, which is required and must be a non-empty string.
 */
export const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});
