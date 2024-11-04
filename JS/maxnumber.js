function findGreatestNumber() {
    // Get the values from the input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const maxNumber = Math.max(num1, num2, num3);
    console.log("The greatest number is:", maxNumber);
}