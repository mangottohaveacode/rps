const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const computerWinner = "computer";
const playerWinner = "player";
const drawWinner = "draw";

let clicked = 0;

let winners = [];
let currentRoundWinner = "";

let compWins = 0;
let playerWins = 0;
let drawWins = 0;


const computerTurn = () => {
    let array = [rock, paper, scissors];
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
}

const theGame = (playerChoice, computerSelection) => {
    if (playerChoice === computerSelection) {
        return drawWinner;
    } else if (playerChoice === rock) {
        return computerSelection === paper ? computerWinner : playerWinner;
    } else if (playerChoice === paper) {
        return computerSelection === scissors ? computerWinner : playerWinner;
    } else if (playerChoice === scissors) {
        return computerSelection === rock ? computerWinner : playerWinner;
    } 
}

/* const nav = document.createElement("nav");
nav.classList.add("nav");
nav.textContent = "Rock Paper Scissors";
document.body.appendChild(nav);
nav.style.border = "2px solid black"; */

/* const score = document.querySelector("#score");
const scoreTitle = document.createElement("h2");
scoreTitle.classList.add("scoretitle");
score.appendChild(scoreTitle);
scoreTitle.innerHTML = "Score:"; */


const mainDiv = document.createElement("div");
mainDiv.classList.add("main");
document.body.appendChild(mainDiv);
mainDiv.style.border = "2px solid black";

const winnerOfRound = document.createElement("div");
mainDiv.appendChild(winnerOfRound);
winnerOfRound.setAttribute("id", "winnerOfRound");
winnerOfRound.innerHTML = "Winner of current round:";

const previousWinners = document.createElement("div");
mainDiv.appendChild(previousWinners);
previousWinners.setAttribute("id", "winners");
previousWinners.innerHTML = "Winners of previous rounds:"

const proclamation = document.createElement("div");
mainDiv.appendChild(proclamation);
proclamation.setAttribute("id", "proclamation");
proclamation.innerHTML = "AND THE WINNER IS:";


const gameDiv = document.querySelector("#game");
gameDiv.classList.add("buttons");

const rockButton = document.createElement("BUTTON");
gameDiv.appendChild(rockButton);
rockButton.textContent = rock.toLocaleUpperCase();
rockButton.setAttribute("id", "rock");
rockButton.addEventListener("click", () => {
    playerAction(rock);
});

const paperButton = document.createElement("BUTTON");
paperButton.textContent = paper.toLocaleUpperCase();
gameDiv.appendChild(paperButton);
paperButton.setAttribute("id", "paper")
paperButton.addEventListener("click", () => {
    playerAction(paper);
});

const scissorsButton = document.createElement("BUTTON");
scissorsButton.textContent = scissors.toLocaleUpperCase();
gameDiv.appendChild(scissorsButton);
scissorsButton.setAttribute("id", "scissors")
scissorsButton.addEventListener("click", () => {
    playerAction(scissors);
});

const wrapper = document.getElementById('game');
wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
        clicked++;
        currentRound();
        arrayOfPreviousRounds();
        //console.dir(event.target.id);
        whenFiveTimes();
    } else {
        return;
    }
})

const whenFiveTimes = () => {
    if (clicked === 5) {
        theWinner();
        cleanCounter();
        clicked = 0;
        winners = [];
    }
}

const theWinner = () => {
    for (let i = 0; i < winners.length; i++) {
        if (winners[i] === "computer") {
            compWins++;
        } else if (winners[i] === "player") {
            playerWins++;
        } else {
            drawWins++;
        }
    }
    proclamationFunction();
}

const proclamationFunction = () => {
    if (compWins > playerWins) {
        proclamation.innerHTML = ("COMPUTER!!! With " + compWins + " wins.");
    } else if (playerWins > compWins) {
        proclamation.innerHTML = ("PLAYER!!! With " + playerWins + " wins.");
    } else {
        if(drawWins = 1){
            proclamation.innerHTML = ("A silly tie with " + drawWins + " draw.");
        }else {
            proclamation.innerHTML = ("A silly tie with " + drawWins + " draws.");
        }
        
    }
}

const cleanCounter = () => {
    compWins = 0;
    playerWins = 0;
    drawWins = 0;
}

const currentRound = () => {
    for (let i = 0; i < winners.length; i++) {
        currentRoundWinner = winners[i];
        winnerOfRound.innerHTML = "Winner of current round: " + currentRoundWinner;
    }
}

const arrayOfPreviousRounds = () => {
    previousWinners.innerHTML = "Winners of previous rounds: " + winners;
}

const playerAction = (playerChoice) => {
    const result = theGame(playerChoice, computerTurn());
    winners.push(result);
    previousWinners.innerHTML += " " + result;
    console.log(winners);
}


