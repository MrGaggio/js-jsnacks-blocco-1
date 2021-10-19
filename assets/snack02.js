/*  L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/


let wordOne = prompt("scrivi una parola")
let wordTwo = prompt("adesso scrivi un'altra parola")




if (wordOne.length > wordTwo.length ) {
    console.log( wordTwo);
    console.log( wordOne);
} else if (wordTwo.length > wordOne.length){
    console.log(wordOne);
    console.log(wordTwo)
}






