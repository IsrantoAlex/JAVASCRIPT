function Calculate(num1, num2, operation) {
    if (isNaN(num1) || isNaN(num2) || typeof operation !== 'string') {
        return 'Invalid input. Please make sure num1 and num2 are numbers and operation is a string.';
    }

    
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operation.toLowerCase()) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return 'Error: Division by zero is not allowed';
            }
            return num1 / num2;
        case 'modulus':
            return num1 % num2;
        default:
            return 'Invalid operation';
    }
}


let num1 = prompt("Enter your first number:");
let num2 = prompt("Enter your second number:");
let operation = prompt("Enter the operation: add, subtract, multiply, divide or modulus:");


let result = Calculate(num1, num2, operation);
alert(  result);
