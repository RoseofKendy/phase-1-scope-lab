// (1) Declare customerName in global scope
var customerName = "bob";

// (2) Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// (3) Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob"; // Assigning without 'var', 'let', or 'const' makes it global
}

// (4) Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// (5) Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "somebody";

// Function to attempt changing leastFavoriteCustomer (should fail)
function changeLeastFavoriteCustomer() {
  // Attempting to reassign a constant should throw an error
  throw new Error("Assignment to constant variable.");
}
