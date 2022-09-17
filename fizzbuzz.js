const prompt = require(`prompt-sync`) ({signt: true});

let num = Number(prompt(`Enter a number: `));

console.log(num);

if(num % 15 === 0){
    console.log(`fizzbuzz`);
}else if(num % 3 === 0){
    console.log("fizz");
}else if(num % 5 === 0){
    console.log(`buzz`);
}