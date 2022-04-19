module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
  ],
  roots: [
    '<rootDir>/src'
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  watchPathIgnorePatterns: ["<rootDir>/\\.csv/"]
};