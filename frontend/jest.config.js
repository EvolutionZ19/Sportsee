export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[jt]sx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
  };
  