function celsiusToFahrenheit(celsius) {
    // Check if the input is a valid number
    if (typeof celsius !== 'number' || isNaN(celsius)) {
      console.error("Invalid input. Please provide a valid number for Celsius temperature.");
      return null;
    }
  
    // Perform the conversion formula
    const fahrenheit = (celsius * 9/5) + 32;
  
    // Return the result
    return fahrenheit;
  }
  
  // Example
  const celsiusTemperature = 25;
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  
  console.log(`${celsiusTemperature} degrees Celsius is equal to ${fahrenheitTemperature} degrees Fahrenheit.`);