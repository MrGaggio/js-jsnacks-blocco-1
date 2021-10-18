/*In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.*/



const array = ["Stefano", "Marco", "Giuseppe", "Antonio"];

let nome = prompt("dobbiamo verificare se puoi accedere alla festa: digita il tuo nome")


nome_trovato = false

for (let index = 0; index < array.length; index++) {
    const accesso = array[index];
    if (nome == accesso) {
        nome_trovato = true
        console.log("Puoi partecipare alla festa, entra pure");
    }else if(nome_trovato == false) {
        console.log("mi spiace non puoi partecipare");
    }
    
}