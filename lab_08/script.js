function startGame() {
    if (!confirm("Start new game\nCurrent balance: 100$")) {
        alert("Game canceled.");
        return;
    }

    let balance = 100;
    const randomNumber = generateRandomNumber(6);
    console.log("Random Number:", randomNumber);

    for (let attempt = 1; attempt <= 3; attempt++) {
        const givenNumber = prompt(`Guess the Number\nCurrent balance: ${balance}$`);
        console.log("Given Number:", givenNumber);

        if (isCorrectGuess(givenNumber, randomNumber)) {
            const reward = calculateReward(attempt);
            balance += reward;
            alert(`Wow you won! Your reward is ${reward}$. New balance: ${balance}$`);
            break;
            
        } else {
            balance -= 10;
            giveFeedback(attempt, balance, randomNumber);
        }
    }
}

function generateRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

function isCorrectGuess(userInput, correctNumber) {
    return parseInt(userInput) === correctNumber;
}

function calculateReward(attempt) {
    return (3 - attempt) * 10 + 20;
}

function giveFeedback(attempt, balance, correctNumber) {
    if (attempt === 3) {
        alert(`Oh no, game over! The correct number was ${correctNumber}. Final balance: ${balance}$`);
    } else {
        alert(`Incorrect! Try one more time. Remaining attempts: ${3 - attempt}.`);
    }
}

startGame();


    