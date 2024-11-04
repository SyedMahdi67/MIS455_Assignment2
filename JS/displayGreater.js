
function findGreaterNumber() {
    // Get the values from the input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultBox = document.getElementById('result');

    // Check which number is greater
    if (num1 > num2) {
                resultBox.textContent = "The greater number is: " + num1;
            } else if (num2 > num1) {
                resultBox.textContent = "The greater number is: " + num2;
            } else {
                resultBox.textContent = "Both numbers are equal.";
            }
}

