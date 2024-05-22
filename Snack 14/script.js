//Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer.

let timeUtente = Number.parseInt(prompt('Scrivi un numero di secondi da attendere'));
console.log(timeUtente)

const clock = setInterval(timer, 1000);

function timer() {
    for (let i = 0; i <= timeUtente; i++);
    console.log(timer);
}

