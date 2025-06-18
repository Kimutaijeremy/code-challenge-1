// set basefare to 50
const baseFare = 50;
//set charges per kilometre to 15
const perKilometreCharge = 15;

//function to calculate the fare
function calculateBodaFare (){
    //prompts the user to input the number of kilometres they are going
    let numberOfKilometres = prompt("Unafika wapi Mkubwa?Kilometre ngapi?");
    //changes the input from a string to a number
    let a =parseInt (numberOfKilometres);
    //calculate the total fare by multiplying number of kilometres and charge per kilometre the adds the basefare
    let TotalFare=(numberOfKilometres*perKilometreCharge+baseFare);

console.log(`Uko kwote?Io ni ${numberOfKilometres} km:`);//shows the number of kilomtres
console.log(`Ukikalia Pikipiki: KES ${baseFare}`);//shows the basefare after sitting on bike
console.log(`Mpaka Uko: KES ${a*perKilometreCharge}`);//shows the cost of the trip
console.log(`Total: KES ${TotalFare}`);//shows the total to pay
console.log(`Panda PikiPiki!`)
}
//calls the funtion above to run
calculateBodaFare()