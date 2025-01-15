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
  
//   // Call the function to execute the callback hell
//   callbackHellExample();
  