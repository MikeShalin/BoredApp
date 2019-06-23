module.exports = {
  preset: 'react-native',
  "transformIgnorePatterns": [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^Root(.*)$': '<rootDir>/src$1',
    '^Models(.*)$': '<rootDir>/src/models$1',
    '^Features(.*)$': '<rootDir>/src/features$1',
    '^Utils(.*)$': '<rootDir>/src/utils$1',
    '^Config(.*)$': '<rootDir>/src/config$1',
    '^Screen(.*)$': '<rootDir>/src/screen$1',
  },
}
