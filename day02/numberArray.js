let numberArrey = [10,20,30,40,50];
numberArrey.forEach((num) => console.log(num));

numberArrey = numberArrey.map((num) => num/10);
numberArrey.forEach((num) => console.log(num));

for (let i = 1; i<=10; i++){
    if (i === 5){
        console.log("Skipping the interation at i = ", i);
        //break;
        continue; //Skip the rest of the loop when i is 5
    }
    console.log("Current value of i:", i);
}
console.log("Loop completed");


console.log("-- Game Name : FIZZBUZZ --");

/* loop from 1 to 20
if the number is divisible by 3, print "Fizz".
if the number is divisible by 5, print "Buzz".
if the number is divisible by both 3 and 5 , print "FizzBuzz".
Otherwise, print the number it self */

for (let i = 1; i<=20; i ++){

    if(i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz",i);
    } 
    else if (i%3 === 0){
        console.log("Fizz",i);
    } 
    else if (i%5 === 0){
        console.log("Buzz", i)
    } 
    else{
        console.log(i);
    }
}

//Number guessing game
//Javascript pick number between 1 and 10
//user has three chances to guess the bumber
//if user gusses is greater than the number, print "Too high"
//if user gusses is less than the number, print "Too low"
//if user gusses the number, print "You win!"
//if user runs out of chances, print "You lose! The number was x"

// Number Guessing Game

// JavaScript picks a number between 1 and 10
// Number Guessing Game

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Random number between 1 and 10
const number = Math.floor(Math.random() * 10) + 1;

let chances = 3;

function guessNumber() {

    if (chances === 0) {
        console.log(`You lose! The number was ${number}`);
        rl.close();
        return;
    }

    rl.question("Guess a number between 1 and 10: ", (answer) => {

        const guess = Number(answer);

        if (guess === number) {
            console.log("You win!");
            rl.close();
            return;
        }

        if (guess > number) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }

        chances--;

        if (chances === 0) {
            console.log(`You lose! The number was ${number}`);
            rl.close();
        } else {
            console.log(`Chances left: ${chances}`);
            guessNumber();
        }
    });
}

guessNumber();