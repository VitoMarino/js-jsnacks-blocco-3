const fruitsNelFrigo = ['banana', 'mela', 'pera', 'ciligia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
const fruitsAggiunto = ['pesca'];
const arraytre = fruitsNelFrigo.concat(fruitsAggiunto);
let memoriaDiInformazioni = '';

// length è una proprietà degli ARRAY. Ci da la sua lunghezza. Usarla nei cicli.
for (i = 0; i < arraytre.length; i++) {
    // MEMORIZZO UNA INFORMAZIONE CHE MI DICA SE IL COCOMERO C'E' OPPURE NO
    memoriaDiInformazioni === arraytre['cocomero']
}

if (arraytre === memoriaDiInformazioni) {
    console.log("Trovato! Devo solo preparare il cocktail.")
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!")
}

// USO QUELL'INFORMAZIONE MEMORIZZATA PER TRARRE DELLE CONCLUSIONI