// Crea una lista di email di invitati ad una festa
let mailList = ["lost@gmail.com", "vikings@libero.it", "harrypotter@live.it", "goku@gmail.com"];

// Chiedi all’utente la sua email
const userEmail = prompt("Inserisci la tua email");
console.log(userEmail);


// Dichiarare una variabile per aggiungere una condizione
let x;

// controlla che sia nella lista di chi può accedere
for (let i = 0; i < mailList.length; i++) {
    const email = mailList[i];
    if (email === userEmail) {
        x = true
    }
}

// stampa un messaggio appropriato sull’esito del controllo
if (x == true) {
    console.log(`Ciao ${userEmail}, l'accesso è consentito`);
    
} else {
    console.log(`Mi dispiace ${userEmail}, l'accesso non è consentito`);
    
}