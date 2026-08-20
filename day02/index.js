const age =20;
const isCitizen = false;
let canVote = (age>=18)?
(isCitizen ? "Yes, can vote" : "Not old enough to vote"): "Not acitizen, cannot vote";
console.log(canVote);

canVote = (isCitizen)?
((age>=18)? "Yes, can vote" : "Not old enough to vote"): "Not acitizen, cannot vote";
console.log(canVote);


let userName = "Alice";
if(userName){
    console.log("Hello," + userName + "!");
} else {
    console.log("Hello, guest!");
}

//loops
//while loops start
console.log("While loop start")
let count = 1;
console.log("Start while loop count =", count);
while (count <= 10){
    console.log(count);
    count += 1; //incriment count by 1
}
console.log("End while loop count =",count);
/* while(count >=0 ){
    console.log(++count);
} */
console.log("End while loop");
//while loop end

//example
let num = 10;
while(num > 0){
    console.log(num);
    num -=1;
}

//For Loop
console.log("For Loops")
for (let i=1; i<=10; i++){
    console.log(i);
}
console.log("upper loop")
for (let i=10; i>=0; i--){
    console.log(i);
}
for(let i=2; i <10 ; i +=2){
    console.log(i)
}

//Arrays list
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log("Fruits array length:", fruits.length);

let numbers = [];
for (let i = 1; i <= 5; i++){
    numbers.push(i);
}
console.log("Numbers array:", numbers);


let array = new Array(1, 2, 3, 4, 5);
console.log("Array lenth:", array.length);
console.log("Array elements:", array);

let fixedSizeArray = new Array(5);
console.log("Fixed size array length:", fixedSizeArray.length);
console.log("Fixed size array elements:", fixedSizeArray);

let fixedValuesArray = new Array(5).fill(1);
console.log("Fixed values array length:",fixedValuesArray.length);
console.log("Fixed values array elements:",fixedValuesArray);

let mixedArray = [1,"two", true, null, undefined, {key: "value"},[1,2,3,4,5]];
console.log("Mixed array length:",mixedArray.length);
console.log("Mixed array elements:",mixedArray);

const items = ["Cake","Sweets","Icings"];
for (let i =0; i<items.length; i++){
    console.log(`items #${i+1}: ${items[i]}`);
}
console.log("Git hub add");
console.log("branch update");

