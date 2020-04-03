/**
 * ESERCIZIO 1 DEL JSNACK
 * Snack 1: L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.
 */
var parola1 = prompt('Inserisci la prima parola');
var parola2 = prompt('Inserisci la seconda parola');
var confronta = stringaMaggiore(parola1, parola2);
console.log(confronta);


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