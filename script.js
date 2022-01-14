
function computerPlay(){
    let items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * items.length)]
}

let computerScore = 0;
let playerScore = 0;
function playRound(computerSelection, playerSelection){
    if((computerSelection.toLowerCase()) === playerSelection.toLowerCase()){
        return "Same! Try again";
    } else if(computerSelection === "Rock" && playerSelection.toLowerCase() === "scissors"){
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if(computerSelection === "Rock" && playerSelection.toLowerCase() === "paper"){
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if(computerSelection === "Paper" && playerSelection.toLowerCase() === "rock"){
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if(computerSelection === "Paper" && playerSelection.toLowerCase() === "scissors"){
        playerScore++;
        return "You Win! Scissors beats Paper";
    } else if(computerSelection === "Scissors" && playerSelection.toLowerCase() === "paper"){
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if(computerSelection === "Scissors" && playerSelection.toLowerCase() === "rock"){
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else{
        return "Try again";
    }
}


const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(computerPlay(), button.classList.value))
    });
});


/*
function game(){
    for(let i = 0; i<5; i++){
        const playerSelection = window.prompt("Type your option: ");
        console.log(playRound(computerSelection, playerSelection));
    }
    if(computerScore > playerScore){
        console.log("Computer win!")
    } else if(computerScore < playerScore){
        console.log("You win!");
    } else{
        console.log("Welp");
    }
}

game();
*/