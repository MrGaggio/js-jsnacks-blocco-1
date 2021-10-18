/*  L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/


let wordOne = prompt("scrivi una parola")
let wordTwo = prompt("adesso scrivi un'altra parola")

if (wordOne < wordTwo) {
    console.log(wordOne);
} else if(wordTwo < wordOne){
    console.log(wordTwo);
       
} else if ( wordOne = wordTwo){
    console.log("try again!");
}
