const computerTurn = () => {
    let value = "";
    let randomNumber = Math.floor(Math.random() * 3) +1;
    if(randomNumber === 1){
        value = "rock";
    }else if(randomNumber === 2){
        value="paper";
    }else{
        value = "scissors";
    }
    return value.toLowerCase();
}

const theGame = (playerChoice, computerSelection) => {
    let winner = "";
    let playerSelection = playerChoice.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "paper"){
        winner = "computer";
        return winner; 
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        winner = "player"
        return winner;  
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        winner = "computer"
        return winner; 
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        winner = "player";
        return winner;
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        winner = "computer";
        return winner;
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        winner = "player";
        return winner; 
    }else { 
        return "draw";
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


let clicked = 0;

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

let winners= [];
let currentRoundWinner = "";
// let clicked = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playerTurn = "rock";
    let whoWon = (theGame(playerTurn, computerTurn()));
    const result = whoWon;
    winners.push(result);
    previousWinners.innerHTML += " " + result;
    console.log(winners);
    
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playerTurn = "paper";
    let whoWon = (theGame(playerTurn, computerTurn()));
    const result = whoWon;
    winners.push(result);
    previousWinners.innerHTML += " " + result;
    console.log(winners); + " wins."
    
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playerTurn = "scissors";
    let whoWon = (theGame(playerTurn, computerTurn()));
    const result = whoWon;
    winners.push(result);
    previousWinners.innerHTML += " " + result;
    console.log(winners);
    
});


const wrapper = document.getElementById('game');
let compWins = 0;
let playerWins = 0;
let drawWins = 0;

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
    let pastWinners = [];
    pastWinners = winners;
    previousWinners.innerHTML = "Winners of previous rounds: " + pastWinners;

}