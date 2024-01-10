const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Check if the input values are valid numbers
    if (typeof originalPrice !== 'number' || isNaN(originalPrice) ||
        typeof discountedPrice !== 'number' || isNaN(discountedPrice)) {
      console.error("Invalid input. Please provide valid numbers for original and discounted prices.");
      return null; // or any appropriate value indicating an error
    }
  
    // Calculate the percentage discount
    const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
  
    // Round off to two decimal places
    const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;
  
    return roundedDiscountPercentage;
  };
  
  // Example usage:
  const originalPrice = 100; // Original price of the product
  const discountedPrice = 75; // Discounted price of the product
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  
  if (discountPercentage !== null) {
    console.log(`The product is discounted by ${discountPercentage}%`);
  } 