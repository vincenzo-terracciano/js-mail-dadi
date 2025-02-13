/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto */

const user = prompt("Inserisci il tuo nome")

const pcNumber = Math.floor(Math.random() * 6) +1;
console.log(`The pc score is ${pcNumber}`);

const userNumber = Math.floor(Math.random() * 6) +1;
console.log(`${user} scores ${userNumber}`);

if (pcNumber > userNumber) {
    console.log(`${user} you lose! The number ${pcNumber} is bigger than ${userNumber}`);
} else if (userNumber > pcNumber) {
    console.log(`Congratulation ${user} you win! The number ${userNumber} is bigger than ${pcNumber}`);
} else if (userNumber == pcNumber) {
    console.log(`Draw! The numbers are equal`);
}