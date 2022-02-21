Various Exercizes in Javascript
1. Scrivere una funzione che trasformi un nome nelle sue iniziali. Ad esempio: "Tizio Caio" => "T.C."
2. Congettura di Collatz: preso un numero naturale maggiore di 1, se questo è pari dividerlo per due, se dispari, moltiplicarlo per 3 e aggiungere 1. Ripetere. Qualunque sia il numero di partenza, l'algoritmo termina sempre ad 1. Scrivere una funzione che implementi l'algoritmo e ritorni un array con il valore calcolato ad ogni interazione. Ad esempio, 10 => [10, 5, 16, 8, 4, 2, 1] 
3. Scrivere una funzione che, assegnata una stringa, ritorni la somma delle cifre in essa presenti. Ad esempio, "Sono 1 stringa di 6 parole" => 7
4. Scrivere una funzione che accetta come parametri un array di numeri ed un numero di soglia, e restituisca un array formato dai numeri maggiori della soglia fornita. Ad esempio: ([1,2,3,4],3) => [4]
5. Scrivere una funzione che trasforma un array di array (ogni elemento è una coppia [primo,secondo]) in un oggetto ({primo: secondo}). Ad esempio: [["nome","mario"],["cognome","rossi"],["anni",32]] => {nome: "mario", cognome: "rossi", anni: 32}
6. Scrivere una funzione che, assegnata una stringa, ritorni un oggetto con chiavi le parole (distinte) e valori la loro frequenza. Ad esempio: "Quella cosa affianco alla cosa sulla cosa" => {Quella: 1, cosa: 3, affianco: 1, alla: 1, sulla: 1}
7. Scrivere una funzione che, data una stringa, trasformi la prima lettera di ogni parola in maiuscolo.
8. Scrivere una funzione che, assegnata una stringa, ritorni il numero di vocali presenti (gestire le maiuscole).
9. Scrivere una funzione che, assegnata una stringa, ne faccia lo slug. Ad esempio: "Sono una stringa" => "/sono-una-stringa"
10. Scrivere una funzione che accetta una stringa, e restituisce la parola più lunga.
11. Scrivere una funzione che, dato un array, ritorni "pari" o "dispari" a seconda che la somma dei suoi elementi sia, rispettivamente, pari o dispari.
12. Viene assegnata una stringa contenenente solo caratteri "x" e "y". Scrivere una funzione che ritorni se il numero di "x" e di "y" è uguale. Ad esempio, "xxyxxyyy" => true.
13. Scrivere una funzione che, assegnata una stringa ed una vocale, ritorni la stringa originaria con tutte le vocali cambiate in quella fornita. Ad esempio: "Ciao a tutti", "o"  => "Cooo o totto".
14. Scrivere una funzione che, assegnato un array contenente numeri e stringhe, ritorni un nuovo array formato dai soli numeri. Ad esempio : [1,2,"a",4] => [1,2,4]
15. Scrivere una funzione che, assegnata una stringa, ne restituisca il reverse. Ad esempio: "prova" => "avopr". Extra: sfruttare questa funzione per individuare palindromi.
16. Scrivere una funzione che accetta in ingresso un array di numeri. Ritornare la somma se questa è pari, altrimenti la media.
17. Scrivere una funzione che, assegnat0 un numero naturale, ritorni la somma di tutti i numeri naturali da 1 al numero assegnato. Ad esempio: 4 => 1+2+3+4 = 10
18. Viene assegnato un array di nomi. Scrivere una funzione che accetta in ingresso l'array ed un numero e ritorni un nuovo array, contentente solo i nomi di lunghezza uguale al numero assegnato, in ordine alfabetico. Ad esempio (["Gigi","Tizio","Caio","Piero"],4)=> ["Caio","Gigi"]. Extra: se la funzione viene invocata senza il secondo parametro, deve ritornare tutti i nomi lunghi 5 lettere, ad esempio: (["Gigi","Tizio","Caio","Piero"])=> ["Piero","Tizio"]
19. Scrivere una funziona che accetta in ingresso una stringa (una password), e ritorni (true/false) se è valida. Per essere valida, la password deve essere lunga almeno 6 caratteri e deve contenere almeno un numero. Extra: come prima, ma nella password non ci devono essere caratteri ripetuti.
20. Scrivere una funzione che accetta in ingresso un numero e ritorna un numero formato dai quadrati di ogni cifra presente in ingresso. Ad esempio: 372 => 9494. Extra: farlo in una sola linea.
21. Scrivere una funzione che unisca due array di numeri, ordinandoli in modo decrescente ed eliminando i duplicati. Ad esempio, ([2,1],[1,2,3]) => [3,2,1].
22. Abbiamo una stringa di parole. Ogni parola contiene un numero. Scrivere una funzione che ritorni la stringa ordinata in base al numero presente in ogni parola. Ad esempio: "is2 Thi1s T4est 3a" => "Thi1s is2 3a T4est"
23. Un isogramma è una parola all’interno della quale ogni lettera compare una ed una sola volta, ad esempio “ciao” ma non “barca”. Scrivere una funzione che determini se una stringa è un isogramma. Minuscole e maiuscole sono considerate uguali, in termini di presenza.
24. Scrivere una funzione che accetta in ingresso due array, e ne ritorni la differenza. Ossia, restituisca il primo array privo degli elementi presenti nel secondo array.
25. Scrivere una funzione che ritorni i giorni mancanti fino a Natale.
26. Scrivere una funzione che accetta un array di dieci cifre e restituisca una stringa formattata come un numero di telefono. Ad esempio: [1,2,3,4,5,6,7,8,9,0] => "(123) 456-7890"
27. Viene fornito un array di numeri, tutti uguali tranne uno. Scrivere una funzione che ritorni l'estraneo. Ad esempio: [ 3, 3, 2, 3, 3, 3, 3, 3 ] => 2 o ancora [ 5, 5, 5, 5, 4, 5, 5, 5 ] => 4
28. Scrivere una funzione che accetta un anno e ritorna i "venerdì 17" presenti in quell'anno, sotto forma di array. Extra: scrivere un'altra funzione, che usi la precedente, per trovare l'anno con più venerdì 17 dall'anno assegnato ad oggi.
29. Scrivere una funzione che accetta come parametro un oggetto di studenti e voti { "Tizio": 5, "Caio": 3, ...}. Calcolare la media dei voti, aumentarla del 10% ed arrontondarla per difetto. Ritornare un oggetto con chiave il nome dello studente, e con valore "Promosso con NN" o "Bocciato con NN", dove NN è il voto dello studente presente nell'oggetto in entrata, a seconda che NN sia maggiore o minore della media modificata.
       