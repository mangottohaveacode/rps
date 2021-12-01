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

const playerTurn = prompt("Choose?");
let playWin = 0;
let compWin = 0;

const theGame = (playerChoice, computerSelection) => {
    let winner = "";
    let playerSelection = playerChoice.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "paper"){
        winner = "computer";
        compWin++;
        return "You lose, paper beats rock! The winner is " + winner; 
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        winner = "player"
        playWin++;
        return "You lose, rock beats scissors! The winner is " + winner;  
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        winner = "computer"
        compWin++;
        return "You lose, scissors beats paper! The winner is " + winner; 
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        winner = "player";
        playWin++;
        return "You lose, paper beats rock! The winner is " + winner;
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        winner = "computer";
        compWin++;
        return "You lose, rock beats scissors! The winner is " + winner;
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        winner = "player";
        playWin++;
        return "You lose, scissors beats paper! The winner is " + winner; 
    }else {
        return "Draw"
    }
}





const fiveTimes = () => {
    for(let i=0; i<5;i++){
        console.log(theGame(playerTurn, computerTurn()));
    }
    if(playWin > compWin){
        return "The winner is player";
    }else if(playWin < compWin){
        return "The winner is computer";
    }else {
        return "draw"
    }
} 

console.log(fiveTimes());
