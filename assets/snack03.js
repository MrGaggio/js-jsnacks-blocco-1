/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/




 


let result = 0
for (let index = 0; index < 10; index++) {
    const user_number = parseInt(prompt("type a number"))
    result += user_number
}

console.log(result);

