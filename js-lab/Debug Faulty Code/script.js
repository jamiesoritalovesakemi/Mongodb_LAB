
// Function to add two numbers
function addNumbers(a, b) {
    return a + b; // added semicolon
}

// Event listener for button
document.getElementById('calculateBtn').addEventListener('click', function() {
    let num1 = 10; // changed to number
    let num2 = 20;

    // Fixed typo in function call
    let sum = addNumbers(num1, num2);

    // Display result
    document.getElementById('result').innerText = "Sum is: " + sum;
});