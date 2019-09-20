module.export = {
    roots: ['<rootDir>/src'],
    transform: {
      '\\.(ts|tsx)?$': 'babel-jest',
    },
    testMatch: ['<rootDir>/src/**/>(*.)test.{js, ts, jsx, tsx}'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
  };