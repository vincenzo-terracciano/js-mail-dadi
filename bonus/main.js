/* Dopo aver svolto l'esercizio con il for  fai una cartella bonus e svolgilo anche anche usando un metodo delle array tipo includes */

let mailList = ["lost@gmail.com", "vikings@libero.it", "harrypotter@live.it", "goku@gmail.com"];
const userEmail = prompt("Inserisci la tua email");
console.log(userEmail);
const isMailPresent = mailList.includes(userEmail);

if (isMailPresent == true) {
    console.log(`Ciao ${userEmail}, l'accesso è consentito`);
} else {
    console.log(`Mi dispiace ${userEmail}, l'accesso non è consentito`);
}