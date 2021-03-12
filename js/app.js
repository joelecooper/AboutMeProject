'use strict'
function affirmative(){
    alert('That is Correct')
}

function negative(){
    alert('That is Incorrect')
}

function getMilitary(){
    let military = prompt('Did I join the Army? Yes/No');

    if (military == 'Yes' || 'yes'){
        negative();
    }   else {
        affirmative();
    }
}


function getCountry(){
    let country = prompt('Was I born in the United States? Yes/No');

    if (country == "Yes" || 'yes'){
        negative();
    }   else {
        affirmative();
    }
}

function getReporter(){
    let reporter = prompt('Have I ever worked as a court reporter? Yes/No')

    if (reporter == "Yes" || 'yes'){
       affirmative();
    }  else{
        negative();
    }
}

function getDog(){
    let dog = prompt('Do I own a dog? Yes/No');
    
    if (dog == "Yes" || 'yes'){
        affirmative();
    }   else {
        negative();
    }
}

function getMarried(){
    let married = prompt('Am I married? Yes/No');
    
    if (married == "Yes" || 'yes'){
        affirmative();
    }   else {
       negative();
    }
}

function getUserName(){
    let userName = prompt('What is your name?: ');
    
    if (userName == 'Joel'){
    alert('You must work for Tyrell');
    } else {
    alert('Hey! Welcome to my page! ' +  userName);
    }
}

getMilitary()

getCountry()

getReporter()

getDog()

getMarried()

getUserName()

function guessingGame(){

let correctAnswer = ('3');
console.log(correctAnswer);

let guesses = 4

for(let i = 0; i < guesses; i++){
    let userAnswer = prompt('How many siblings do I have?');
    while (userAnswer < 1 || userAnswer > 4){
        userAnswer = prompt('Wow maybe not that much. Try again.')
    }
    if (userAnswer == correctAnswer){
        alert('That is right!.');
        break;
    } else if (userAnswer > correctAnswer){
        alert('That is a lot of siblings! Try a little less.')
    } else if (userAnswer < correctAnswer){
        alert('I wish, unfortunately I have more. Just kidding I love my siblings.')
    }
}
}

guessingGame()