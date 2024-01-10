// Self-invoking arrow function to generate a random number
const generateRandomNumber = (() => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // Output the random number
    console.log(`Random Number: ${randomNumber}`);
  })();  