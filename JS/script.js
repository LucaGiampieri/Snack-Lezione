/* JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore 

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
console.log('Numero maggiore:', numHiger);*/

/*JSnack 2
 Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti. 
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)*/
/*
const numUser1 = parseInt(prompt("Inserisci il primo numero"));
const numUser2 = parseInt(prompt("Inserisci il secondo numero"));
const numUser3 = parseInt(prompt("Inserisci il terzo numero"));
const numUser4 = parseInt(prompt("Inserisci il quarto numero"));
const numUser5 = parseInt(prompt("Inserisci il quinto numero"));

//metodo semplice con la somma
let numSomma = numUser1 + numUser2 + numUser3 + numUser4 + numUser5
console.log(numSomma)*/

const numsUser = [
  parseInt(prompt("Inserisci il primo numero"), 10),
  parseInt(prompt("Inserisci il secondo numero"), 10),
  parseInt(prompt("Inserisci il terzo numero"), 10),
  parseInt(prompt("Inserisci il quarto numero"), 10),
  parseInt(prompt("Inserisci il quinto numero"), 10)
];

let Somma = 0;

for ( let i = 0; i < numsUser.length; i++){
    Somma += numsUser[i];  
}

console.log(Somma)