const prompt = require('prompt-sync')();

let weight = Number(prompt("What is your weight on earth? "));
let planet = Number(prompt("Enter a number relative to the planet ( 1 - Venus, 2 - Mars, 3 - Jupiter, 4 - Saturn, 5 - Uranus, 6 - Neptune) :"));
let x = 0;

if(planet > 6 || planet < 1){
    console.log(`Please enter a valid response. 1 - 6`);
}else if(planet === 1){
    x = weight * 0.78;
    console.log(`Your weight should be ${x}.`);
}else if(planet === 2){
    x = weight * 0.39;
    console.log(`Your weight should be ${x}.`);
}else if(planet === 3){
    x = weight * 2.65;
    console.log(`Your weight should be ${x}.`);
}else if(planet === 4){
    x = weight * 1.17;
    console.log(`Your weight should be ${x}.`);
}else if(planet === 5){
    x = weight * 1.05;
    console.log(`Your weight should be ${x}.`);
}else if(planet === 6){
    x = weight * 1.23;
    console.log(`Your weight should be ${x}.`);
}