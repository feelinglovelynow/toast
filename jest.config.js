/** @type { import('jest').Config } */
const config = { // https://jestjs.io/docs/configuration
  clearMocks: true, // Automatically clear mock calls, instances, contexts and results before every test
  collectCoverage: true, // Indicates whether the coverage information should be collected while executing the test
  coverageDirectory: 'coverage', // The directory where Jest should output its coverage files
  coverageProvider: 'v8', // Indicates which provider should be used to instrument code for coverage
  injectGlobals: false, // Insert Jest's globals (expect, test, describe, beforeEach etc.) into the global environment. If you set this to false, you should import from @jest/globals
  testEnvironment: 'jest-environment-jsdom', // The test environment that will be used for testing. The default environment in Jest is a Node.js environment. If you are building a web app, you can use a browser-like environment via 'jest-environment-jsdom'
}

export default config
