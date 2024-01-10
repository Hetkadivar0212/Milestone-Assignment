const calculateTotalCost = (cart) => {
    // Check if the cart is an array
    if (!Array.isArray(cart)) {
      console.error("Invalid cart format. Please provide an array of items.");
      return null; // or any appropriate value indicating an error
    }
  
    // Calculate the total cost
    const totalCost = cart.reduce((accumulator, item) => {
      // Check if each item in the cart is an object with 'unitPrice' and 'quantity' properties
      if (typeof item === 'object' && 'unitPrice' in item && 'quantity' in item) {
        // Check if the 'unitPrice' and 'quantity' properties are valid numbers
        if (typeof item.unitPrice === 'number' && !isNaN(item.unitPrice) &&
            typeof item.quantity === 'number' && !isNaN(item.quantity) && item.quantity >= 0) {
          return accumulator + item.unitPrice * item.quantity;
        } else {
          console.error("Invalid unit price or quantity for an item. Skipping.");
          return accumulator;
        }
      } else {
        console.error("Invalid item format in the cart. Skipping.");
        return accumulator;
      }
    }, 0);
  
    return totalCost;
  };
  
  // Example
  const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 8, quantity: 1 }
  ];
  
  const totalCost = calculateTotalCost(customerCart);
  
  if (totalCost !== null) {
    console.log(`Total Cost of Items in the Cart: $${totalCost}`);
  } 