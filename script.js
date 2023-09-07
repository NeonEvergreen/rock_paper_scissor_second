"use strict";

function playerWonMessage(){
    const message = "Congratulations! The player wins!!";
    console.log(message);
    return message;
}

function computerWonMessage(){
    const message = "You Lose! The computer wins!!";
    console.log(message);
    return message;
}

function tieMessage(){
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
        return tieMessage();
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return playerWonMessage();
    }
    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock"){
        return computerWonMessage();
    }
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return computerWonMessage();
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"){
        return tieMessage();
    }
    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper"){
        return playerWonMessage();
    }
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor"){
        return playerWonMessage();
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissor"){
        return computerWonMessage();
    }
    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "scissor"){
        return tieMessage();
    }
    

}