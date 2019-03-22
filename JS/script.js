/* eslint-env browser*/
/*function halfNumber(a) {
    a = parseInt(prompt("choose a number"));
    var b = a / 2;
    alert('half of ' + a + ' is ' + b);
}

halfNumber();*/

/*function squareNumber(a) {
    a = parseInt(prompt("choose a number"));
    var b = Math.pow(a, 4);
    alert('the result of squaring the number ' + a + ' is ' + b);
}

squareNumber();*/

/*function percentOf(num1, num2){
"use strict"
    var b = num1*num2 /100;
    alert(num1 + ' is ' + b + ' percent of ' + num2);
}

percentOf(15, 65);*/

/*function findModulus(num1, num2) {
    "use strict"
    var b = num1 % num2;
    alert(b + ' is the modulus of ' + num1 + ' and ' + num2);
}

findModulus(550, 20);*/


//FORTUNE TELLER

/*function tellFortune(numberOfChildren, partnersName, geographicLocation, jobTitle){
"use strict"
    window.alert("You will be a " + jobTitle + " in " + geographicLocation + " married to " + partnersName + " with " + numberOfChildren + " kids.");
}

tellFortune(2, "Jack", "Maine", "Teacher");
tellFortune(0, "Elizabeth", "Texas", "CEO");
tellFortune(5, "Mark", "Utah", "Stay at home mom");
tellFortune(3, "Carol", "Washington", "Fisherman");*/


//ROCK PAPER SCISSORS

/*var choice = window.prompt('Chose rock, paper or scissors');
var computerChoice = Math.floor(Math.random() * 3) + 1;
window.console.log(computerChoice);


function nums() {
    "use strict"
    switch (computerChoice) {
        case 1:
            computerChoice = 'scissors';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'rock';
    }
    if (choice === 'scissors' && computerChoice === 'rock') {
        alert('You lose');
    } else if (choice === 'paper' && computerChoice === 'rock') {
        alert('You win');
    } else if (choice === 'rock' && computerChoice === 'rock') {
        alert('Tie');
    } else if (choice === 'paper' && computerChoice === 'paper') {
        alert('Tie');
    } else if (choice === 'rock' && computerChoice === 'paper') {
        alert('You Lose');
    } else if (choice === 'scissors' && computerChoice === 'paper') {
        alert('You win');
    } else if (choice === 'rock' && computerChoice === 'scissors') {
        alert('You Win');
    } else if (choice === 'paper' && computerChoice === 'scissors') {
        alert('You Lose');
    } else if (choice === 'scissors' && computerChoice === 'scissors') {
        alert('Tie');
    }
}

nums();*/

//CALCULATOR

/*
var choice = Number(window.prompt("Choose a number"));

var choice2 = Number(window.prompt("Choose another number"));

var operation = window.prompt("Choose add, subtract, multiply or divide");

function calculate(a, b, c) {
    "use strict"
    switch (operation) {
        default:
            alert('Not a Valid Response.');
            break;
        case 'add':
            alert(choice + choice2);
            return;
        case 'subtract':
            alert(choice - choice2);
            return;
        case 'multiply':
            alert(choice * choice2);
            return;
        case 'divide':
            alert(choice / choice2);
            return;
    }
}
calculate(choice, choice2, operation);
*/
