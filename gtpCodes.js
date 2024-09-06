document.addEventListener('DOMContentLoaded', () => {
    const numberButtons = document.querySelectorAll('.number-btn');
    const enterBtn = document.getElementById('enter-btn');
    const userGuessDiv = document.getElementById('user-guess');
    const computerGuessDiv = document.getElementById('computer-guess');
    const winModal = document.getElementById('win-modal');
    const loseModal = document.getElementById('lose-modal');
    const winCloseBtn = document.getElementById('win-close');
    const loseCloseBtn = document.getElementById('lose-close');
    const playAgainBtn = document.getElementById('play-again');
    const playAgainLoseBtn = document.getElementById('play-again-lose');

    let userGuess = null;

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            userGuess = button.textContent;
            userGuessDiv.textContent = `User Guess: ${userGuess}`;
        });
    });

    enterBtn.addEventListener('click', () => {
        if (userGuess === null) {
            alert('Please select a number!');
            return;
        }

        const computerGuess = Math.floor(Math.random() * 10);
        computerGuessDiv.textContent = `Computer Guess: ${computerGuess}`;

        if (parseInt(userGuess, 10) === computerGuess) {
            winModal.style.display = 'flex';
        } else {
            loseModal.style.display = 'flex';
        }
    });

    function resetGame() {
        userGuess = null;
        userGuessDiv.textContent = 'User Guess: ';
        computerGuessDiv.textContent = 'Computer Guess: ';
        winModal.style.display = 'none';
        loseModal.style.display = 'none';
    }

    winCloseBtn.addEventListener('click', () => {
        resetGame();
    });

    loseCloseBtn.addEventListener('click', () => {
        resetGame();
    });

    playAgainBtn.addEventListener('click', () => {
        resetGame();
    });

    playAgainLoseBtn.addEventListener('click', () => {
        resetGame();
    });
});
