function checkVowelOrConsonant() {
    const character = document.getElementById('character').value.toUpperCase();
    const vowels = ['A', 'E', 'I', 'O', 'U'];

    if (vowels.includes(character)) {
        console.log(character + " is a Vowel.");
    } else {
        console.log(character + " is a Consonant.");
    }
}