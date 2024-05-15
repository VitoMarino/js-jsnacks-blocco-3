// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const arrayA = [1, 2, 3];
const arrayB = [1, 2, 3, 4, 5, 6];

while (arrayA.length < arrayB.length) {
    arrayA.push(arrayB)
    console.log(arrayA, arrayB)
}