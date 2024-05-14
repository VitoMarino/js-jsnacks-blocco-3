const question = [Number.parseInt(prompt('Quanti elementi deve avere il tuo ARRAY?'))];

for (let i = 0; i < question; i++) {
    const numeriCasuali = Math.floor(Math.random() * 100)+ 1;
    console.log(question, numeriCasuali)
}