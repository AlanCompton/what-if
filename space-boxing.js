const prompt = require(`prompt-sync`) ({signt: true});

let weight = Number(prompt(`Enter your Earth weight: `));
console.log(`Please enter the number of the planet you will be traveling to using the following system. 1-Venus, 2-Mars, 3-Jupiter, 4-Saturm, 5-Uranus, 6-Neptune: `);
let planetNum = Number(prompt("> "));

console.log(weight);
console.log(planetNum);

if(planetNum === 1){
    console.log(`You picked Venus.`);
    console.log(`Your weight needs to be: ${weight * 0.78}`);
}else if(planetNum === 2){
    console.log(`You picked Mars.`);
    console.log(`Your weight needs to be: ${weight * 0.39}`);
}else if(planetNum === 3){
    console.log(`You picked Jupiter.`);
    console.log(`Your weight needs to be: ${weight * 2.65}`);
}else if(planetNum === 4){
    console.log(`You picked Saturn.`);
    console.log(`Your weight needs to be: ${weight * 1.17}`);
}else if(planetNum === 5){
    console.log(`You picked Uranus.`);
    console.log(`Your weight needs to be: ${weight * 1.09}`);
}else if(planetNum === 6){
    console.log(`You picked Neptune.`);
    console.log(`Your weight needs to be: ${weight * 1.23}`);
}else{
    console.log(`Invalid entry...`);
}