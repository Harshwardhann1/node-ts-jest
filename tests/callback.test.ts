// Import the function
import { jest } from "@jest/globals";
import { callbackHellExample } from "../src/callback";

describe("callbackHellExample", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Mock the timers
    jest.spyOn(console, "log").mockImplementation(() => {}); // Mock console.log
  });

  afterEach(() => {
    jest.useRealTimers(); // Restore real timers
    jest.restoreAllMocks(); // Clear mock implementations
  });

  it("should log the steps in the correct order", () => {
    callbackHellExample();

    // Assert immediate logs
    expect(console.log).toHaveBeenCalledWith("Start");
    expect(console.log).toHaveBeenCalledWith("End");

    // Fast-forward time and assert logs at each step
    jest.advanceTimersByTime(1000); // First timeout
    expect(console.log).toHaveBeenCalledWith("Step 1: Preparing data...");

    jest.advanceTimersByTime(1000); // Second timeout
    expect(console.log).toHaveBeenCalledWith("Step 2: Fetching details...");

    jest.advanceTimersByTime(1000); // Third timeout
    expect(console.log).toHaveBeenCalledWith("Step 3: Processing details...");

    jest.advanceTimersByTime(1000); // Fourth timeout
    expect(console.log).toHaveBeenCalledWith("Step 4: Finalizing and saving data...");
    expect(console.log).toHaveBeenCalledWith("Process Complete!");
  });
});
