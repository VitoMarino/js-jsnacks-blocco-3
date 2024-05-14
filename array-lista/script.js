const fruitsNelFrigo = ['banana', 'mela', 'pera', 'ciligia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
const fruitsAggiunto = ['pesca'];

const arraytre = fruitsNelFrigo.concat(fruitsAggiunto);

// length è una proprietà degli ARRAY. Ci da la sua lunghezza. Usarla nei cicli.
for (i = 0; i < arraytre.length; i++) {
    if (i === arraytre[6]) {
        console.log(arraytre, "Trovato! Devo solo preparare il cocktail.");
    } else if (i !== arraytre[6]) {
        console.log(arraytre, "Oh no, devo uscire a comprare il cocomero!");
    }        
} 