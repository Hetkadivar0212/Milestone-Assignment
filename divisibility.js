function printNumbersDivisibleByThree(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        // Check if the number is divisible by 2
        if (numbers[i] % 2 === 0) {
            // Skip the current iteration if divisible by 2
            continue;
        }

        // Check if the number is divisible by 3
        if (numbers[i] % 3 === 0) {
            console.log(numbers[i]);
        }
    }
}

// Example
var numbersArray = [1, 2, 3, 4, 5, 6, 9, 12, 15];
printNumbersDivisibleByThree(numbersArray);