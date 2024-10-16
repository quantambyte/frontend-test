/**
 * An object containing environment variables used in the application.
 *
 * @constant {Object} ENVIRONMENT_VARIABLES
 * @property {string} BASE_URL - The base URL for the application, sourced from the environment variable NEXT_PUBLIC_BASE_URL.
 */
export const ENVIRONMENT_VARIABLES = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
};
