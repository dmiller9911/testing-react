module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      statements: 80,
      functions: 80,
      lines: 80
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs'],
  setupFiles: ['<rootDir>/test/env.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
