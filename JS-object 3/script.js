// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persone = [
    {
        nome: 'Gino',
        cognome: 'Ginetto',
        età: '10'
    },
    {
        nome: 'Gines',
        cognome: 'Ginnasio',
        età: '15'
    },
    {
        nome: 'Gianbruno',
        cognome: 'Brunetti',
        età: '18'
    },
    {
        nome: 'Elisabetta',
        cognome: 'Elisabett',
        età: '17'
    },
    {
        nome: 'Vito',
        cognome: 'Vituzzo',
        età: '23'
    },
    {
        nome: 'Riccardo',
        cognome: 'Petricca',
        età: '60'
    },
    {
        nome: 'Umberto',
        cognome: 'Costanzo',
        età: '30'
    },
    {
        nome: 'Bruno',
        cognome: 'Brunetti',
        età: '18'
    },
    {
        nome: 'Gianpiero',
        cognome: 'USA',
        età: '19'
    },
    {
        nome: 'Poalo',
        cognome: 'Montone',
        età: '13'
    }
];

console.log(persone);

// let question = [];
// for (let i = 0; i <= 17; i++) {
    // question.push(persone);
    // if (question === 18) {
        // console.log('Puoi guidare')
    // } else {
        // console.log('Non puoi guidare')
    // }
// };
let question = [];
for (const key in persone) {
    for (let i = 0; i <= 17; i++) {
    question.push(persone);
    if (question === 18) {
        console.log('Puoi guidare')
        } else {
        console.log('Non puoi guidare')
        }
}
}

