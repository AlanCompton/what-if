const prompt = require('prompt-sync')();

let x = Number(prompt(`Enter a number: `));

if(x % 15 == 0 && x % 5 == 0){
    console.log(`fizzbuzz`);
}else if(x % 5 == 0){
    console.log(`buzz`);
}else if(x % 3 == 0){
    console.log(`fizz`);
}