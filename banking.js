// Sample customer object with name and balance properties
const customer = {
    name: "John Doe",
    balance: 1000 // Initial balance
  };
  
  // Function to display the current balance
  const displayBalance = () => {
    console.log(`${customer.name}'s current balance: $${customer.balance}`);
  };
  
  // Function to deposit money into the account
  const deposit = (amount) => {
    if (typeof amount === 'number' && amount > 0) {
      customer.balance += amount;
      console.log(`Deposited $${amount}.`);
      displayBalance();
    } else {
      console.error("Invalid deposit amount. Please provide a positive number.");
    }
  };
  
  // Function to withdraw money from the account
  const withdraw = (amount) => {
    if (typeof amount === 'number' && amount > 0 && amount <= customer.balance) {
      customer.balance -= amount;
      console.log(`Withdrawn $${amount}.`);
      displayBalance();
    } else if (amount <= 0) {
      console.error("Invalid withdrawal amount. Please provide a positive number.");
    } else {
      console.error("Insufficient funds for withdrawal.");
    }
  };
  
  // Example usage:
  displayBalance(); // Display initial balance
  deposit(500);     // Deposit $500
  withdraw(200);    // Withdraw $200
  withdraw(1500);   // Attempt to withdraw $1500 (insufficient funds)  