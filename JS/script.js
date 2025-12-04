/* JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore */

 //facciamo inserire all'utente il primo numero
const numUser1 = parseInt(prompt("Inserisci il primo numero"));

//facciamo inserire il secondo numero
const numUser2 = parseInt(prompt("Inserisci il secondo numero"));

//settiamo una variabile per il numero maggiore
let numHiger 

//Nel caso il primo numero sia maggiore del secondo
if(numUser1 > numUser2){
    numHiger = numUser1;
}
//Nel caso il secondo numero sia maggiore del primo 
else if(numUser2 > numUser1) {
    numHiger = numUser2;
}
//Nel caso siano uguali
else{
    numHiger = 'nessuno in quanto sono uguali';
}


//stampiamo il numero maggiore
console.log('Il numero maggiore è', numHiger);