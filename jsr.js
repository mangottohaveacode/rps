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

let playerTurn = "value";
let playWin = 0;
let compWin = 0;

const theGame = (playerChoice, computerSelection) => {
    let winner = "";
    let playerSelection = playerChoice.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "paper"){
        winner = "computer ";
        compWin++;
        return winner; 
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        winner = " player "
        playWin++;
        return winner;  
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        winner = " computer "
        compWin++;
        return winner; 
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        winner = " player ";
        playWin++;
        return winner;
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        winner = " computer ";
        compWin++;
        return winner;
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        winner = " player ";
        playWin++;
        return winner; 
    }else { 
        return "draw";
    }
}

const mybr = document.createElement('br');

const gameDiv = document.querySelector("#game");
gameDiv.classList.add("buttons");

const button1 = document.createElement("BUTTON");
gameDiv.appendChild(button1);
button1.textContent = "ROCK"
button1.setAttribute("id", "rock")
// button1.style.border = "1px solid black";

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

const resultDiv = document.createElement("div");
resultDiv.appendChild(mainDiv);
resultDiv.setAttribute("id", "result") 

let winners = [];

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playerTurn = "rock";
    let whoWon = (theGame(playerTurn, computerTurn()));
    const result = whoWon;
    winners.push(result);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playerTurn = "paper";
    let whoWon = (theGame(playerTurn, computerTurn()));
    const result = whoWon;
    winners.push(result);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playerTurn = "scissors";
    let whoWon = (theGame(playerTurn, computerTurn()));
    const result = whoWon;
    winners.push(result);
});

console.log(winners);