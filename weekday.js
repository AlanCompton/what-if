const prompt = require('prompt-sync')();

let day = prompt("Enter a number 1 - 7, relative to a day of the week: ");

while(isNaN(day) || day < 1 || day > 7){
    day = prompt("Error! Please ensure you enter a number 1 - 7:  ");
};

if(day == 1){
    console.log("Monday");
}else if(day == 2){
    console.log("Tuesday");
}else if(day == 3){
    console.log("Wednesday");
}else if(day == 4){
    console.log("Thursday");
}else if(day == 5){
    console.log("Friday");
}else if(day == 6){
    console.log("Saturday");
}else if(day == 7){
    console.log("Sunday");
}