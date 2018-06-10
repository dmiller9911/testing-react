const { resolve } = require('path');

module.exports = {
  clearMocks: true,
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  setupTestFrameworkScriptFile: resolve(__dirname, './test/env.js'),
  snapshotSerializers: ['enzyme-to-json/serializer']
};
