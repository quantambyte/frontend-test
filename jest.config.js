const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
});

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(config);
