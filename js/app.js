'use strict'

function getMilitary(){
    let military = prompt('Did I join the Army? Yes/No');
    
    if (military == 'Yes'){
        alert('Definity not.');
    }   else {
        alert('That is correct. I actually joined the Marine Corps');
    }
}

function getCountry(){
    let country = prompt('Was I born in the United States? Yes/No');

    if (country == "Yes"){
        alert('I am a citizen, but I was not born here.');
    }   else {
        alert('Right! I actually was born in Canada.');
    }
}

function getReporter(){
    let reporter = prompt('Have I ever worked as a court reporter? Yes/No')

    if (reporter == "Yes"){
        alert('I did! I worked as a court reporter for four years while I was in the military.');
    }  else{
        alert('I actually did! I am not anymore, but you are close.');
    }
}

function getDog(){
    let dog = prompt('Do I own a dog? Yes/No');
    
    if (dog == 'Yes'){
        alert('I do! I have a Jackhuahua who is my best, tiny friend.');
    }   else {
        alert('Wrong. I would have a sad life if I did not');
    }
}

function getMarried(){
    let married = prompt('Am I married? Yes/No');
    
    if (married == 'Yes'){
        alert('Correct! I proposed to my wife after just two months and we were married in under five.');
    }   else {
        alert('Wrong, but I did not think I would ever be either.');
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

