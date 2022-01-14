
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
const finalResult = document.querySelector('div')
const cScore = document.querySelector('.computer-score')
const pScore = document.querySelector('.player-score')
const fScore = document.querySelector('.final-score')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        finalResult.textContent = playRound(computerPlay(), button.classList.value)
        cScore.textContent = computerScore;
        pScore.textContent = playerScore;
        if(computerScore >= 5){
            fScore.textContent = "COMPUTER WINS!";
        } else if (playerScore >= 5){
            fScore.textContent = "YOU WIN!";
        };
    });
});

