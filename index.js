let totalScore = document.querySelector(".score");
let userCh = document.querySelector(".result");
let resultChoice = document.querySelector(".result-text");
let computerCh = document.querySelector(".election");
let compScore = document.querySelector(".computer-score");
let btnRock = document.querySelector(".rock");
let btnPaper = document.querySelector(".paper");
let btnScissors = document.querySelector(".scissors");
let contComputerCh = document.querySelector(".election");
let botones = document.querySelectorAll("button");

function computerChoice() {
    const opciones = ["rock", "paper", "scissors"];
    let a = Math.floor(Math.random() * 3);
    let choice = opciones[a];

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

let userChoice = null;

botones.forEach(function(boton) {
    boton.addEventListener("click", function(event) {
        userChoice = event.target.value;
        console.log(userChoice);
        let comptChoice = computerChoice();
        console.log(partida(userChoice, comptChoice));
    });
});

computerChoice();


function partida(userChoice, pcChoice){
    if(userChoice === pcChoice){
        return "Empate";
    }else if (userChoice === "paper" && pcChoice === "scissors" || userChoice === "scissors" && pcChoice === "rock" || userChoice === "rock" && pcChoice === "paper") {
        return "you have lost " + pcChoice + " beats " + userChoice;
    } else if (pcChoice === "paper" && userChoice === "scissors" || pcChoice === "scissors" && userChoice === "rock" || pcChoice === "rock" && userChoice === "paper") {
        return "you have won " + userChoice + " beats " + pcChoice;
    }
}


//computerCh.style.backgroundImage = "url(images/question.png)";




