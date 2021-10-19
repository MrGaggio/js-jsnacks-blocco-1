/*Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.*/


/* strumenti

- prompt
- math
- log

es_ 2**3, 3**3, 4**3



*/


const n = parseInt(prompt("type a number")) //10


for (let i = 1; i <= n; i++) {
    Math.pow(i, 3)

}