const prompt = require('prompt-sync')();

let groupSize = Number(prompt("Enter the number of students: "));

if(groupSize % 3 == 0){
    let x = groupSize / 3;
    console.log(`You will have ${x} groups of 3.`)
}else if(groupSize % 3 == 2){
    let x = groupSize % 3;
    let y = Math.floor(groupSize / 3);
    console.log(`You will have ${y} groups of 3 and 1 group of ${x}.`);
}else if(groupSize % 3 == 1){
    let x = groupSize - 3;
    let y = Math.floor(x / 3);
    console.log(`You will have ${y} groups of 3 and 2 group of 2.`);
}