module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['./src/**/*.{jsx,js}', '!./src/index.js'],
  coverageReporters: ['text'],
  setupFilesAfterEnv: ['./jest.setup.js']
};
