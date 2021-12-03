const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const computerWinner = "computer";
const playerWinner = "player";
const drawWinner = "draw";

let clicked = 0;

let winners= [];
let currentRoundWinner = "";

let compWins = 0;
let playerWins = 0;
let drawWins = 0;


const computerTurn = () => {
    let array = [rock,paper,scissors];
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
}

const theGame = (playerChoice, computerSelection) => {
    let playerSelection = playerChoice.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "paper"){
        return computerWinner;
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        return playerWinner;
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        return computerWinner;
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return playerWinner;
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        return computerWinner;
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        return playerWinner;
    }else { 
        return drawWinner;
    }
}

const gameDiv = document.querySelector("#game");
gameDiv.classList.add("buttons");

const button1 = document.createElement("BUTTON");
gameDiv.appendChild(button1);
button1.textContent = "ROCK"
button1.setAttribute("id", "rock")

const button2 = document.createElement("BUTTON");
button2.textContent = "PAPER";
gameDiv.appendChild(button2);
button2.setAttribute("id", "paper")

const button3 = document.createElement("BUTTON");
button3.textContent = "SCISSORS";
gameDiv.appendChild(button3);
button3.setAttribute("id", "scissors")

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
previousWinners.setAttribute("id","winners");
previousWinners.innerHTML = "Winners of previous rounds:"

const proclamation = document.createElement("div");
mainDiv.appendChild(proclamation);
proclamation.setAttribute("id","proclamation");
proclamation.innerHTML = "AND THE WINNER IS:";


const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    playerTurn = rock;
    const result = (theGame(playerTurn, computerTurn()));
    winners.push(result);
    previousWinners.innerHTML += " " + result;
    console.log(winners);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    playerTurn = paper;
    const result = (theGame(playerTurn, computerTurn()));
    winners.push(result);
    previousWinners.innerHTML += " " + result;
    console.log(winners);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    playerTurn = scissors;
    const result = (theGame(playerTurn, computerTurn()));
    winners.push(result);
    previousWinners.innerHTML += " " + result;
    console.log(winners);
});


const wrapper = document.getElementById('game');


wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    clicked++;
    if (!isButton) {
      return;
    }
    currentRound();
    arrayOfPreviousRounds();
   //console.dir(event.target.id);
    whenFiveTimes();

})

const whenFiveTimes = () => {
    if(clicked === 5){
        theWinner();
        cleanCounter();
        clicked = 0;
        winners = [];
    }
}

const theWinner = () => {
    for(let i=0; i<winners.length;i++){
        if(winners[i] === "computer"){
            compWins++;
        }else if(winners[i] === "player"){
            playerWins++;
        }else{
            drawWins++;
        }
    }
    proclamationFunction();
}

const proclamationFunction = () => {
    if(compWins > playerWins){
        proclamation.innerHTML = ("COMPUTER!!! With " + compWins + " wins.");
    }else if(playerWins > compWins){
        proclamation.innerHTML = ("PLAYER!!! With " + playerWins + " wins.");
    }else {
        proclamation.innerHTML = ("A silly tie with " + drawWins + " draws.");
    }
}

const cleanCounter = () => {
    compWins = 0;
    playerWins = 0;
    drawWins = 0;
}

const currentRound = () => {
    for(let i=0; i<winners.length;i++){
        currentRoundWinner = winners[i];
        winnerOfRound.innerHTML = "Winner of current round: " + currentRoundWinner;
    }
}

const arrayOfPreviousRounds = () => {
    previousWinners.innerHTML = "Winners of previous rounds: " + winners;
}