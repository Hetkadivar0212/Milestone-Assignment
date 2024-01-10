function doubleCartQuantities(cart) {
    // Check if the cart is an array
    if (!Array.isArray(cart)) {
      console.error("Invalid cart format. Please provide an array.");
      return;
    }
  
    // Double the quantity of each item in the cart
    for (let i = 0; i < cart.length; i++) {
      // Check if the quantity is a valid number
      if (typeof cart[i] === 'number' && !isNaN(cart[i])) {
        cart[i] *= 2; // Double the quantity
      } else {
        console.error(`Invalid quantity for item at index ${i}. Skipping.`);
      }
    }
  
    // Return the updated cart
    return cart;
  }
  
  // Example
  let cart = [2, 5, 3, 1];
  let updatedCart = doubleCartQuantities(cart);
  console.log("Updated Cart:", updatedCart);