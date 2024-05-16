// Dare la possibilità di inserire due parole. 
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


const numero = (2)

function utenteParole (numero) {
    const utente = prompt('Scrivi parola') * numero
    if (utente.lenght === utenteDue.lenght) {
        console.log(utente, utenteDue)
    } else if (utente.lenght > utenteDue.lenght) {
        console.log(utente)
    } else {
        console.log(utenteDue)
    }
}