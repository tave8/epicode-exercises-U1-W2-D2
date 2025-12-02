/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let number1 = parseInt(prompt("Inserisci numero intero"));
// let number2 = parseInt(prompt("Inserisci un altro numero intero"));
// let greater = number1;
// if (number2 > greater) {
//   greater = number2;
// }
// alert(`Il numero più grande tra i due è ${greater}`);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let number = parseInt(prompt("Inserisci un numero"));
// if (number !== 5) {
//   console.log("not equal");
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito 
  è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number3 = parseInt(prompt("Inserisci un numero"));
// let eDivisibilePer5 = number3 % 5 === 0;
// if (eDivisibilePer5) {
//   console.log("divisibile per 5");
// }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number4 = parseInt(prompt("Inserisci un numero"));
// let number5 = parseInt(prompt("Inserisci un numero"));
// let esisteUnOtto = number4 === 8 || number5 === 8;
// let addizioneUgualeA8 = number4 + number5;
// let sottrazioneUgualeA8 = number4 - number5;
// let addizioneOSottrazioneUgualeA8 = addizioneUgualeA8 || sottrazioneUgualeA8;
// let condizioneFinale = esisteUnOtto || addizioneOSottrazioneUgualeA8;
// if (condizioneFinale) {
//   alert("il valore dei numeri è 8 oppure la loro addizione/sottrazione è uguale a 8");
// }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totaleDaPagare = totalShoppingCart;

// if (totalShoppingCart <= 50) {
//   totaleDaPagare += 10;
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totaleDaPagare2 = totalShoppingCart;
// let eBlackFriday = true;

// if (eBlackFriday) {
//   totaleDaPagare2 -= totaleDaPagare2 * 0.2;
// }

// if (totalShoppingCart <= 50) {
//   totaleDaPagare2 += 10;
// }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */




let n1 = 5
let n2 = 1
let n3 = 3

let primoN = null
let secondoN = null
let terzoN = null

let ret = []


if (n1 >= n2 && n1 >= n3) {
    primoN = n1
    if (n2 > n3) {
      secondoN = n2
      terzoN = n3
    } else {
      secondoN = n3
      terzoN = n2
    }
} else if (n2 >= n1 && n2 >= n3) {
     primoN = n2
    if (n1 > n3) {
      secondoN = n1
      terzoN = n3
    } else {
      secondoN = n3
      terzoN = n1
    }
} else {
    primoN = n3
    if (n1 > n2) {
      secondoN = n1
      terzoN = n2
    } else {
      secondoN = n2
      terzoN = n1
    }
}


ret = ret.concat([primoN, secondoN, terzoN])

console.log(ret)




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numeroFornito = 2;
let eNumero = typeof numeroFornito === "number";
if (eNumero) {
  console.log("è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numeroInput = parseInt(prompt("Fornisci un numero"));
let ePari = numeroInput % 2 == 0;
let eDispari = numeroInput % 2 !== 0;
let ePariODispari = ePari || eDispari;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

// if (val < 5) {
//   console.log("Meno di 5");
// } else if (val < 10) {
//   console.log("Meno di 10");
// } else {
//   console.log("Uguale a 10 o maggiore");
// }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me["city"] = "Toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me["lastName"]

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arr = []
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
arr.push(5)
arr.push(6)
arr.push(7)
arr.push(8)
arr.push(9)
arr.push(10)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE 1
arr.splice(arr.length-1, 1, 100)

// SOLUZIONE 2
// arr.pop()
// arr.push(100)