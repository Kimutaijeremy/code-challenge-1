//sets amount of water to be used per cup
const water = 200;
//sets amount of milk to be used per cup
const milk = 50;
//sets amount of tealeaves to be used per cup
const teaLeaves = 1;
//sets amount of sugar to be used per cup
const sugar = 2;

//prompts th euser to input the number of cups they want to make
let numberOfCups = prompt('Karibu! How many cups of Chai bora woild you like to make');
//changes the input from a string to a number
let x = parseInt(numberOfCups);

//this funtion calculates the amount of ingredients you need for making a particular number of cups of tea
function calculateChaiIngredients(x){
    //calculates the amount of water needed then calls the value W
    const W = x*water;
    //calculates the amount of milk needed then calls the value M
    const M = x*milk;
    //calculates amount of tealeaves needed then calls the value T
    const T = x*teaLeaves;
    //calculates amount of sugar needed the calls the value S
    const S = x*sugar;

//shows the number of cups you inputed    
console.log(`To make ${x} cups of Kenyan Chai, you will need:`);
//shows the amount of water you need in ml
console.log(`water:${W}ml`);
//shows the amount of milk you need in ml
console.log(`milk:${M}ml`);
//shows the amount of tealeaves you need in tablespoons
console.log(`teaLeaves (Majani):${T}tablespoons`);
//shows the amount of sugar you need in teaspoons
console.log(`sugar (Sukari):${S}teaspoons`);
console.log(`Enjoy your Chai Bora!`)
}
//calls the funtion above to be executed
calculateChaiIngredients(x)