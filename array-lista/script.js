const fruitsNelFrigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
const fruitsAggiunto = ['pesca'];
const frutti = fruitsNelFrigo.concat(fruitsAggiunto);
let hoTrovatoIlCocomero = false;

for (let i = 0; i < frutti.length; i++) {
    if (frutti[i] === 'cocomero') {
        hoTrovatoIlCocomero = true;
    }
}

if (hoTrovatoIlCocomero === true) {
    console.log("Trovato! Devo solo preparare il cocktail")
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!")
}