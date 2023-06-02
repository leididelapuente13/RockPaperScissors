let totalScore = document.querySelector(".score");
let gameResult = document.querySelector(".result");
let resultChoice = document.querySelector(".result-text");
let computerCh = document.querySelector(".election");
let compScore = document.querySelector(".computer-score");
let btnRock = document.querySelector(".rock");
let btnPaper = document.querySelector(".paper");
let btnScissors = document.querySelector(".scissors");
let contComputerCh = document.querySelector(".election");
let botones = document.querySelectorAll("button");

const click = new Audio("audio/click.mp3");
const gameOver = new Audio("audio/gameOver.mp3");
const victory = new Audio("audio/victory.mp3");
const goodChoice = new Audio("audio/goodChoice.mp3");
const badChoice = new Audio("audio/computer.mp3");

function computerChoice() {
    const opciones = ["rock", "paper", "scissors"];
    let a = Math.floor(Math.random() * 3);
    let choice = opciones[a];
    //transicion para mostrar eleccion del computador
    contComputerCh.classList.add("bg");
    if (choice === "rock") {
        contComputerCh.style.backgroundColor = "#dc2e4e";
        computerCh.style.backgroundImage = "url(images/rock.png)";
    } else if (choice === "scissors") {
        contComputerCh.style.backgroundColor = "#4865f4";
        computerCh.style.backgroundImage = "url(images/scissors.png)";
    } else {
        contComputerCh.style.backgroundColor = "#ed9f0c";
        computerCh.style.backgroundImage = "url(images/paper.png)";
    }

    return choice;
}


function partida(userChoice, pcChoice) {
    if (userChoice === pcChoice) {
        click.play();
        gameResult.innerHTML = "Tie!"
        resultChoice.innerHTML = `Both chose ${userChoice}`;
        return "Empate";
    } else if (userChoice === "paper" && pcChoice === "scissors" || userChoice === "scissors" && pcChoice === "rock" || userChoice === "rock" && pcChoice === "paper") {
        badChoice.play();
        gameResult.innerHTML = "You have lost!"
        resultChoice.innerHTML = ` ${pcChoice} beats ${userChoice}`;
        return "you have lost " + pcChoice + " beats " + userChoice;
    } else if (pcChoice === "paper" && userChoice === "scissors" || pcChoice === "scissors" && userChoice === "rock" || pcChoice === "rock" && userChoice === "paper") {
        goodChoice.play();
        gameResult.innerHTML = "you have won!"
        resultChoice.innerHTML = `${userChoice} beats ${pcChoice}`;
        return "you have won " + userChoice + " beats " + pcChoice;
    }
}


let userChoice = null;
let uScore = 0;
let cScore = 0;

botones.forEach(function (boton) {
    boton.addEventListener("click", function (event) {
        userChoice = event.target.value;
        console.log("Elección del usuario: " + userChoice);
        let comptChoice = computerChoice();
        let result = partida(userChoice, comptChoice);
        if (result.includes("you have won")) {
            uScore++;
            if (uScore === 5 || cScore === 5) {
                victory.play();
                contComputerCh.style.backgroundColor = "#111720";
                contComputerCh.style.backgroundImage = "url(images/WinGame.jpg)";
                uScore = 0;
                cScore = 0;
            }
            compScore.innerHTML = cScore;
            totalScore.innerHTML = uScore;
        } else if (result.includes("you have lost")) {
            cScore++;
            if (cScore === 5 || uScore === 5) {
                gameOver.play();
                contComputerCh.style.backgroundColor = "#111720";
                contComputerCh.style.backgroundImage = "url(images/GameOver.jpg)";
                uScore = 0;
                cScore = 0;
            }
            compScore.innerHTML = cScore;
            totalScore.innerHTML = uScore;
        } else {
            contComputerCh.style.backgroundColor = "#111720";
            computerCh.style.backgroundImage = "url(images/question.png)";
        }
    });
});




