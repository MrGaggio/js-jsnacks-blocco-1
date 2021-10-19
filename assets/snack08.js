/*Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.*/

/* prompt
for
sum

*/

let sum = 0

const four_digit_number = prompt("type a four digit number")

for (let i = 0; i < four_digit_number.length; i++) {
    const numb = Number(four_digit_number[i]);
    sum += numb

    
}


console.log(sum);