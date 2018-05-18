module.exports = {
  verbose: true,
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/setup-jest.ts',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json'
  ],
  unmockedModulePathPatterns: [
    'expect-more-jest'
  ],
  collectCoverageFrom: [
    'src/app/**/*.{ts}',
    'src/modules/**/*.{ts}',
    'src/utilities/**/*.{ts}'
  ],
  testPathIgnorePatterns: [
    '.git',
    '/node_modules/',
    '/dist/',
    'src/app/*.{js}'
  ],
  testResultsProcessor: 'jest-sonar-reporter'
};
