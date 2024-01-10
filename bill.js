function calculateTotalBill(costPerDish, numberOfPeople) {
    // Check if the input values are valid
    if (typeof costPerDish !== 'number' || isNaN(costPerDish) || costPerDish <= 0) {
      console.error("Invalid input for the cost per dish. Please provide a positive number.");
      return null; // or any appropriate value indicating an error
    }
  
    if (typeof numberOfPeople !== 'number' || isNaN(numberOfPeople) || numberOfPeople <= 0) {
      console.error("Invalid input for the number of people. Please provide a positive number.");
      return null; // or any appropriate value indicating an error
    }
  
    // Calculate the total bill
    const totalBill = costPerDish * numberOfPeople;
  
    // Calculate the bill per person
    const billPerPerson = totalBill / numberOfPeople;
  
    // Return an object with total bill and bill per person
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }
  
  // Example usage:
  const costPerDish = 25; // Cost of each dish
  const numberOfPeople = 4; // Number of people sharing the dish
  const billDetails = calculateTotalBill(costPerDish, numberOfPeople);
  
  if (billDetails !== null) {
    console.log(`Total Bill: $${billDetails.totalBill}`);
    console.log(`Bill Per Person: $${billDetails.billPerPerson}`);
  }  