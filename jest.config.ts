export default {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(spec|test).ts"], // Match test files
    moduleFileExtensions: ["ts", "js", "json", "node"],
    clearMocks: true
  };
  