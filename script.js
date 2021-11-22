
let choices = ['rock', 'paper', 'scissors'];

function computerChoice(){
    let choice = Math.floor(Math.random()*3);
    console.log(choices[choice]);
    return choices[choice];
}

function playSingleRound(playerPlay){
    let computerPlay = computerChoice();
    playerPlay = playerPlay.toLowerCase();
    let returnString = `Computer chose ${computerPlay} `;
    if((computerPlay === 'rock' && playerPlay == 'scissors') || (computerPlay === 'scissors' && playerPlay === 'paper') || (computerPlay === 'paper' && playerPlay === 'rock')){
        computerCount++;
        returnString+="You lost! :(";
    }
    else if(computerPlay === playerPlay){
        playerCount++;
        computerCount++;
        returnString+="Its a draw";
    }
    else{
        playerCount++;
        returnString+="You won";
    }
    return returnString;
}

let playerCount = 0, computerCount = 0;
// function game(){
//     let playerCount = 0, computerCount = 0;
//     for(var i=0; i<5; i++){
//         const playerPlay = prompt("Choose between rock, paper and scissors").toLowerCase();
//         const computerPlay = computerChoice().toLowerCase();
//         var val = playSingleRound(computerPlay, playerPlay);
//         if(val === 1){
//             playerCount++;
//         }
//         else if(val == -1){
//             computerCount++;
//         }
//         else{
//             playerCount++;
//             computerCount++;
//         }
//     }
//     console.log("Score\n"+playerCount +" : "+ computerCount);
//     if(playerCount > computerCount){
//         return "You Won";
//     }
//     else if(playerCount === computerCount){
//         return "It's a draw";
//     }
//     else return "You Lost!";
// }

const choice = document.querySelectorAll(`.choice`);
const result = document.querySelector(`.result`);
// console.log(choice);

choice.forEach(ch => {
    ch.addEventListener("click", ()=>{
        result.textContent = playSingleRound(ch.textContent);
        playerScore.textContent = playerCount.toString();
        computerScore.textContent = computerCount.toString();
        if(playerCount == 5 || computerCount == 5){
            if(playerCount == 5)
            result.textContent = "You won the game of 5! Refresh page to play again.";
            if(computerCount == 5){
                result.textContent = "You lost the game of 5 :( Refresh page to play again.";
            }
            playerCount = 0;
            computerCount = 0;
            
        }
    });
});

const playerScore = document.querySelector(`.player-score`);
const computerScore = document.querySelector(`.computer-score`);

// console.log(playerScore);
// console.log(computerScore);