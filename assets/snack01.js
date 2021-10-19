/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

let numberOne = prompt("Digita un numero")
let numberTwo = prompt('Digita un altro numero')

if (numberOne > numberTwo) {
    console.log(numberOne, numberTwo);
} else if(numberTwo > numberOne){
    console.log(numberTwo, numberOne);
} else if( numberOne = numberTwo)
    console.log("try again");


