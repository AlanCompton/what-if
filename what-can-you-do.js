const prompt = require('prompt-sync')();

let age = prompt("How old are you? ");

while(isNaN(age)){
    age = prompt("Please enter a number. How old are you? ");
};

if(age < 16){
    console.log("You can't drive.");
}else if(age == 16 || age == 17){
    console.log("You can drive, but not vote.");
}else if(age >= 18 && age <= 24){
    console.log("You can vote, but not rent a car.");
}else if(age > 24){
    console.log("You can pretty much do anything.")
}