Descrizione:
Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esistono le funzioni includes() e indexOf() ma noi non le vogliamo utilizzare per cercare nel frigorifero.

SCOMPOSIZIONE PROBLEMA
1. Creare array con frutta elencata. // FATTO!
2. In una seconda fase inserire la pesca. // FATTO!
3. Creare un ciclo. // FATTO!
4. Creare una condizione nel ciclo. // FATTO!

Nella condizione devo vedere SE il 'cocomero' della variabile è presente nella variabile.

SCOMPOSIZIONE PROBLEMA
1. Creare array con frutta elencata. // FATTO!
2. Inserire la pesca. // FATTO!
3. A partire dal primo cestino, per ogni cestino
   4. Apro il cestino e controllo cosa c'è all'interno
   5. SE c'è un cococomero
      6. stampo: "Trovato! Devo solo preparare il cocktail."
   7. ALTRIMENTI SE non c'è cocomero
      8. vado al cestino successivo