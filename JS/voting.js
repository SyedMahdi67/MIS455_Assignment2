function checkVotingEligibility() {
    const age = parseInt(document.getElementById('age').value);
    const resultBox = document.getElementById('result');

    if (isNaN(age) || age <= 0) {
        resultBox.style.display = 'block';
        resultBox.textContent = "Please enter a valid age.";
    } else if (age >= 18) {
        resultBox.style.display = 'block';
        resultBox.textContent = "You are eligible to vote.";
    } else {
        resultBox.style.display = 'block';
        resultBox.textContent = "You are not eligible to vote.";
    }
}