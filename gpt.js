function Calculate(num1, num2, operation) {
    // Check if num1 and num2 are numbers and operation is a string
    if (isNaN(num1) || isNaN(num2) || typeof operation !== 'string') {
        return 'Invalid input. Please ensure num1 and num2 are numbers and operation is a string.';
    }

    // Convert num1 and num2 to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    // Perform the operation based on the provided operation string
    switch (operation.toLowerCase()) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return 'Error: Division by zero is not allowed.';
            }
            return num1 / num2;
        case 'modulus':
            return num1 % num2;
        default:
            return 'Invalid operation. Please use add, subtract, multiply, divide, or modulus.';
    }
}

// Prompt user for input
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operation = prompt("Enter the operation (add, subtract, multiply, divide, modulus):");

// Call the Calculate function and display the result
let result = Calculate(num1, num2, operation);
alert("Result: " + result);
