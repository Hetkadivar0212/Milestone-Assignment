function calculateRentalCost(daysRented, carType) {
    // Check if the input values are valid
    if (typeof daysRented !== 'number' || isNaN(daysRented) || daysRented <= 0) {
      console.error("Invalid input for the number of days rented. Please provide a positive number.");
      return null; // or any appropriate value indicating an error
    }
  
    // Check if the car type is valid
    if (typeof carType !== 'string') {
      console.error("Invalid input for car type. Please provide a valid string.");
      return null; // or any appropriate value indicating an error
    }
  
    // Define the rental costs for each car type
    const rentalCosts = {
      'Economy': 4000,   // Rs. 4,000 per day
      'Midsize': 15000,  // Rs. 15,000 per day
      'Luxury': 20000    // Rs. 20,000 per day
    };
  
    // Convert car type to lowercase for case-insensitive comparison
    const lowerCaseCarType = carType.toLowerCase();
  
    // Check if the provided car type is valid
    if (!(lowerCaseCarType in rentalCosts)) {
      console.error("Invalid car type. Please provide a valid car type (Economy, Midsize, or Luxury).");
      return null; // or any appropriate value indicating an error
    }
  
    // Calculate the rental cost
    const rentalCostPerDay = rentalCosts[lowerCaseCarType];
    const totalRentalCost = rentalCostPerDay * daysRented;
  
    // Return the total rental cost
    return totalRentalCost;
  }
  
  // Example
  const daysRented = 5;
  const carType = 'Economy';
  const totalCost = calculateRentalCost(daysRented, carType);
  
  if (totalCost !== null) {
    console.log(`The total rental cost for ${daysRented} days of renting an ${carType} car is Rs. ${totalCost}/-.`);
  }