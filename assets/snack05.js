/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/






let n1 = prompt("Digita un numero");
let n2 = prompt("Digita un numero");
let n3 = prompt("Digita un numero");
let n4 = prompt("Digita un numero");
let n5 = prompt("Digita un numero");
let n6 = prompt("Digita un numero");


const array  = [n1, n2, n3, n4, n5, n6,]
let somma = 0

//converte il valore delle stringhe in numeri e fa la somma dei valori contenuti nell'array
for (let index = 0; index < array.length; index++) {
    somma += parseInt(array[index], 6);     
}

console.log(somma);

