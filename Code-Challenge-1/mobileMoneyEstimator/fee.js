//function to calculate transaction fee
function estimateTransactionFee(){
    //prompts the user to input the amount they want to send
    let amountToSend = prompt(`Unatuma Ngapi?(KES)`);
    //transforms the above input from string to number
    let x = parseInt(amountToSend);
    //calculates base transaction fee by multipliying the above input by 1.5%
    let baseTransactionFee =(15/1000)*x;
    //shows how to get the transaction fee by incorporating "if and if else"
    let transactionFee;
    
    //if the base transaction fee is less than 10 then charge 10
    if( baseTransactionFee < 10){
        transactionFee = 10 ;
    //if the base transaction fee is greater than 70 then charge 70
    } else if(baseTransactionFee > 70){
           transactionFee = 70
    } else {transactionFee = baseTransactionFee}
    
    //calculates the total fare by adding x(theamounttosend) and the transaction fee
    let totalFare = x + transactionFee

//shows the amount you are sending
console.log(`Sending KES ${amountToSend}:`);
//shows the total transaction fee
console.log(`Calculated Transaction Fee: KES${transactionFee}`);
//shows the total amount to be charged
console.log(`Total amount to be debited: KES ${totalFare}`);
console.log(`Send Money Securely!`)}

//calls the above function to action
estimateTransactionFee()
