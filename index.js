function computerChoice() {
    const opciones = ["rock", "paper", "scissors"];
    let a = Math.floor(Math.random() * 3);
    let choice = opciones[a];
    return choice;
}

function partida(pcChoice, userChoice) {
    userChoice = userChoice.toLowerCase();
    pcChoice = pcChoice.toLowerCase();

    if (pcChoice === userChoice) {
        return "Tie! both choose " + userChoice;
    } else if (userChoice === "paper" && pcChoice === "scissors" || userChoice === "scissors" && pcChoice === "rock" || userChoice === "rock" && pcChoice === "paper") {
        return "you have lost " + pcChoice + " beats " + userChoice;
    } else if (pcChoice === "paper" && userChoice === "scissors" || pcChoice === "scissors" && userChoice === "rock" || pcChoice === "rock" && userChoice === "paper") {
        return "you have won " + userChoice + " beats " + pcChoice;
    } else {
        return `${userChoice} is not a valid option`;
    }
}

let comptChoice = computerChoice();

function game() {
    let uScore = 0;
    let cScore = 0;
    for (let i = 0; i < 3; i++) {
        let userChoice = prompt("ingrese su opcion Rock, papaer o Scissors");
        let cont = partida(comptChoice, userChoice);
        alert(cont);
        if (cont.includes("you have won")) {
            uScore++;
        } else if (cont.includes("you have lost")) {
            cScore++;
        }
    }

    if (uScore == cScore) {
        alert(`Empate your score ${uScore} computer scrore ${cScore}`);
    } else if (uScore > cScore) {
        alert(`you have won ${uScore} againts ${cScore}`);
    } else if (uScore < cScore) {
        alert(`you have lost ${uScore} againts ${cScore}`);
    }
}

game();