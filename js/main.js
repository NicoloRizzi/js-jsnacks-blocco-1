/******************************************************************
 * ESERCIZIO 1 DEL JSNACK
 * Snack 1: L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.
 *****************************************************************/
/*
var parola1 = prompt('Inserisci la prima parola');
var parola2 = prompt('Inserisci la seconda parola');
var confronta = stringaMaggiore(parola1, parola2);
console.log('La stringa con più caratteri è',confronta);

function stringaMaggiore(par1, par2) {
  var res = "";

  if (par1.length > par2.length) {
    res = par1;
    console.log(res);
    
  } else if (par1.length < par2.length) {
    res = par2;
    
  } else {
    res = 'Le parole sono lunghe uguali';
    
  }
  return res;
}
*/
/*********************************************************************
 * Snack 2: 
 * Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
 *********************************************************************/

var numero = parseInt(prompt('Inserisci un numero'));
var res = pippo(numero);
console.log(res);

// VOGLIO PROVARE IL BRIVIDO DI CHIAMARE LA FUNZIONE PIPPO PERDONATEMI :(
function pippo(par1) {
  if (par1 % 2 == 0) {
    console.log('Il tuo numero indicato rimane invariato');
    
  } else if (par1 % 2 !== 0) {
    ++par1;
    console.log('Il tuo numero',numero,'è stato incrementato di 1');
    

  }
  return par1;
}
/*********************************************************************************
 * Snack 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati.
 ******************************************************************************/
/*
var nameList = ['Michele','Fabio','Roberto'];
var surnameList = ['Forghieri','Papagni','Marazzini'];
var fakeGuest = [];
// GENERO 5 INDICI CASUALI PER RIEMPIRE L'ARRAY
for (var i = 0; i < 5; i++) {
  var randomIndexName = getRandomInteger(0, nameList.length);
  console.log('Indice nomi',randomIndexName);
  
  var randomIndexSurname = getRandomInteger(0, surnameList.length);
  console.log('Indice cognomi',randomIndexSurname);
  
  var newFullName = nameList[randomIndexName] + " " + surnameList [randomIndexSurname];
  fakeGuest.push(newFullName);
}

console.log(fakeGuest);



function getRandomInteger(min, max) {
  return Math.floor(Math.random()* (max - min ) ) + min;
}
*/
/********************************************************************************
 * JSNACK BONUS
 * Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) e fai la somma di tutti gli elementi che sono in posizione DI INDICE dispari. Prova prima senza funzione e poi con funzione.
 * STABILIRE
 ******************************************************************************/
            // SONO LE POSIZIONI

          // 0 1 2 3   4   5 6
          /*
var array = [1,4,2,15,120,17,3];
var somma = 0;
 // ARRAY LENGHT 7 ELEMENTI
for (var i = 0; i < array.length; i++)
if (i % 2 != 0) {
  somma += array[i];
}
console.log('La somma dei numeri che sono in indice di posizione dispari è',somma);
*/
// CON LA FUNZIONE funzione
var numArray = [1, 4, 2, 15, 120, 17, 3];
var sommaDispari = sommaIndiciDispari(numArray);
console.log(sommaDispari);

// FUNZIONE
function sommaIndiciDispari(params) {
  var somma = 0;
  for (var i = 0; i < params.length;  i++) {
    if (i % 2 != 0) {
      somma += params[i];
  }
  
  }
  return somma;
} 