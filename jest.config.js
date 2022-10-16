module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/setupTest.js'
  ],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '<root-dir>/node_modules(?!/d3-*)/'
  ]
}
