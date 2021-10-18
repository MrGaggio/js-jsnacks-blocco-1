/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/



let n1 = prompt("Digita un numero");
let n2 = prompt("Digita un numero");
let n3 = prompt("Digita un numero");
let n4 = prompt("Digita un numero");
let n5 = prompt("Digita un numero");
let n6 = prompt("Digita un numero");
let n7 = prompt("Digita un numero");
let n8 = prompt("Digita un numero");
let n9 = prompt("Digita un numero");
let n10 = prompt("Digita un numero");

const array = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]
let somma = 0

//converte il valore delle stringhe in numeri e fa la somma dei valori contenuti nell'array
for (let index = 0; index < array.length; index++) {
    somma += parseInt(array[index], 10);  
}

console.log(somma);


