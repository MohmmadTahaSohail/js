let randomNumber= parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remainingGuesses=document.querySelector('.lastResult');
const loworHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess=[];
let numGuess=1;


let playGame=true;
console.log(`Number is:${randomNumber}`);

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess)
        validateguess(guess);
    });
}


function validateguess(guess){
    if(isNaN(guess)){
        alert("Please enter valid number");
    } else if(guess<1){
        alert("Please enter number greater than 1");
    } else if(guess>100){
        alert("Please enter number less than 100");
    } else{
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}


function checkGuess(guess){
    if(numGuess<=10){
        if(guess==randomNumber){
            displayMessage('Your guess is right');
            endGame();
        }else if(guess>randomNumber){
            displayMessage('The number is lower than your guess');
        }else{
            displayMessage('The number is higher than your guess');
        }
    }else{
        displayMessage(`Game over the number was ${randomNumber}`);
        endGame();
    }
}


function displayGuess(guess) {
    userInput.value='';
    guessSlot.innerHTML=prevGuess;
    numGuess++;
    remainingGuesses.innerHTML=11-numGuess;
}


function displayMessage(message) {
    loworHi.innerHTML=`<h2>${message}</h2>`
}


function endGame() {
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}


function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber= parseInt(Math.random()*100+1);
        console.log(`Number is:${randomNumber}`);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remainingGuesses.innerHTML=11-numGuess;
        userInput.removeAttribute('disabled');
        // console.log("New Game");
        // userInput.value='';
        startOver.removeChild(p);
        loworHi.innerHTML='';
        // console.log(p);
        playGame=true;
        
    });
}