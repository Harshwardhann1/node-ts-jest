export const callbackHellExample=()=> {
    console.log("Start");
  
    setTimeout(() => {
      console.log("Step 1: Preparing data...");
  
      setTimeout(() => {
        console.log("Step 2: Fetching details...");
  
        setTimeout(() => {
          console.log("Step 3: Processing details...");
  
          setTimeout(() => {
            console.log("Step 4: Finalizing and saving data...");
            console.log("Process Complete!");
          }, 1000); // Finalizing
  
        }, 1000); // Processing details
  
      }, 1000); // Fetching details
  
    }, 1000); // Preparing data
  
    console.log("End");
  }

/*   Explanation
Mock Timers with jest.useFakeTimers:

This ensures that the test doesn’t wait for real timeouts and instead allows you to manually advance the timer using jest.advanceTimersByTime.
Mock console.log:

The function heavily depends on logging. Mocking console.log lets you verify that the correct messages are logged in the expected sequence.
Assertions:

For each step, the test advances the mocked timer by 1000ms (the timeout duration) and verifies that the corresponding log message is called.
Setup and Cleanup:

Before each test, jest.useFakeTimers and jest.spyOn are set up.
After each test, real timers and mocked functions are restored to avoid test interference. */