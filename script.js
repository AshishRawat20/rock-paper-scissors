
let choices = ['rock', 'paper', 'scissors'];

function computerChoice(){
    let choice = Math.floor(Math.random()*3);
    console.log(choices[choice]);
    return choices[choice];
}

function playSingleRound(computerPlay, playerPlay){
    playerPlay = playerPlay.toLowerCase();
    if((computerPlay === 'rock' && playerPlay == 'scissors') || (computerPlay === 'scissors' && playerPlay === 'paper') || (computerPlay === 'paper' && playerPlay === 'rock')){
        //console.log("You lost! :(");
        return -1;
    }
    else if(computerPlay === playerPlay){
        //console.log("Its a draw");
        return 0;
    }
    else{
        //console.log("You won");
        return 1;
    }
}

function game(){
    let playerCount = 0, computerCount = 0;
    for(var i=0; i<5; i++){
        const playerPlay = prompt("Choose between rock, paper and scissors").toLowerCase();
        const computerPlay = computerChoice().toLowerCase();
        var val = playSingleRound(computerPlay, playerPlay);
        if(val === 1){
            playerCount++;
        }
        else if(val == -1){
            computerCount++;
        }
        else{
            playerCount++;
            computerCount++;
        }
    }
    console.log("Score\n"+playerCount +" : "+ computerCount);
    if(playerCount > computerCount){
        return "You Won";
    }
    else if(playerCount === computerCount){
        return "It's a draw";
    }
    else return "You Lost!";
}


console.log(game())
