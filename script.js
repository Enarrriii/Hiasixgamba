document.getElementById('rollButton').addEventListener('click', function() {
    const resultElement = document.getElementById('result');
    const randomValue = Math.floor(Math.random() * 6) + 1; // Simulating a dice roll with values 1 to 6
    resultElement.textContent = `You rolled a ${randomValue}!`;
});