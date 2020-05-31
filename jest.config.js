module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  resetMocks: true,
  logHeapUsage: true,
  testTimeout: 10000,
  coverageDirectory: 'misc/.coverage'
};
