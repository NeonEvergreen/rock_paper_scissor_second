"use strict";

function declarePlayerWon(){
    const message = "Congratulations! The player wins!!";
    console.log(message);
    return message;
}

function declareComputerWon(){
    const message = "You Lose! The computer wins!!";
    console.log(message);
    return message;
}

function declareTie(){
    const message = "OH! Its a tie!!";
    console.log(message);
    return message;
}


function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
};

function playMatch(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock"){
        return declareTie();
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return declarePlayerWon();
    }
    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock"){
        return declareComputerWon();
    }
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return declareComputerWon();
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"){
        return declareTie();
    }
    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper"){
        return declarePlayerWon();
    }
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor"){
        return declarePlayerWon();
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissor"){
        return declareComputerWon();
    }
    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "scissor"){
        return declareTie();
    }
}


function playGame(){
    //Initiates multiple matches and determines final winner by printing tally
    const game_matches = 5;
    const tally = {"player" : 0, "computer" : 0};
    for(let i=0; i<5; i++){
        let default_choice = getComputerChoice();
        let player_choice = null;
        while(player_choice == null){
            /**
             Allows a randomly determined choice for players if they dont want
            to input
            **/
            player_choice = prompt("Rock, Paper or Scissor??",default_choice);
        }
        let computer_choice = getComputerChoice();
        console.log(`player : ${player_choice}, computer : ${computer_choice}`);
        let result = playMatch(player_choice, computer_choice);
        updateTally(result, tally);
    }
    console.log("FINAL RESULT :: ", tally);
}


function updateTally(result, tally){
    if(result == "Congratulations! The player wins!!" || result == "OH! Its a tie!!"){
        tally["player"] += 1; 
    }
    if(result == "You Lose! The computer wins!!" || result == "OH! Its a tie!!"){
        tally["computer"] += 1; 
    }
}