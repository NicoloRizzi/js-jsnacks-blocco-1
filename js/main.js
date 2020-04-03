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

  } else if (par1 % 2 !== 0) {
    ++par1;

  }
  return par1;
}