"use strict";

function playerWonMessage(){
    console.log("Congratulations! The player wins!!");
}

function computerWonMessage(){
    console.log("You Lose! The computer wins!!");
}

function tieMessage(){
    console.log("OH! Its a tie!!");
}


function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
};

function playMatch(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock"){
        tieMessage();
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        playerWonMessage();
    }
    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock"){
        computerWonMessage();
    }
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        computerWonMessage();
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"){
        tieMessage();
    }
    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper"){
        playerWonMessage();
    }
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor"){
        playerWonMessage();
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissor"){
        computerWonMessage();
    }
    if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "scissor"){
        tieMessage();
    }
    

}