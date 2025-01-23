let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorepaear = document.querySelector('#user-score');
const aiScorepaear = document.querySelector('#ai-score');

const genComChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
};

const drawGame = () => {
    console.log("It was a draw");
    msg.innerText = "It was a draw. Play again.";
    msg.style.backgroundColor = "yellow";
};

const showResult = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorepaear.innerText = userScore;
        console.log("You won");
        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        aiScore++;
        aiScorepaear.innerText = aiScore;
        console.log("You lost");
        msg.innerText = `You lost! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    const computerChoice = genComChoice();
    console.log("computer choice", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            userWin = computerChoice === "rock" ? false : true;
        }
        showResult(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
