import nextJest from 'next/jest';
import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/app';
const baseTestDir = '<rootDir>/src/tests';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  verbose: true,
  // collectCoverage: true,
  // collectCoverageFrom: [`${baseDir}/**/*.ts`],
  // testMatch: [`${baseTestDir}/**/*.ts`],
  // testPathIgnorePatterns: [
  //   "/node_modules/",
  //   `${baseDir}/@types`,
  //   `${baseDir}/repositories/prisma.ts`,
  //   `${baseDir}/services/external`,
  //   `${baseDir}/routes`,
  //   `${baseDir}/controllers`,
  //   `${baseDir}/middlewares`,
  //   `${baseDir}/auth`,
  // ],
  // coveragePathIgnorePatterns: [
  //   "/node_modules/",
  //   `${baseDir}/@types`,
  //   `${baseDir}/repositories/prisma.ts`,
  //   `${baseDir}/services/external`,
  //   `${baseDir}/routes`,
  //   `${baseDir}/controllers`,
  //   `${baseDir}/middlewares`,
  //   `${baseDir}/auth`,
  // ]
}

export default createJestConfig(config);
