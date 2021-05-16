'use strict'
// const secretNumber = Math.round(Math.random() * 100 + 1;
// console.log('secretNumber', secretNumber);

// const userAnswer = promt('')
// const userNumber = Number.parseInt.(prompt('Enter a number'));
// console.log('userNumber', userNumber);


// if (secretNumber ===userNumber) {
//     console.log('You win')
// }

// if (secretNumber > userNumber) {
//     console.log('x<', userNumber);
// }

const xNumber = Math.round(Math.random() * 100 + 1);
// console.log('randomNumber', xNumber);
let userNumber
do {const userAnswer = prompt('Введите число')
 userNumber = Number.parseInt(userAnswer);
if (xNumber === userNumber) {console.log('вы угадали')}
else if (xNumber < userNumber) {console.log('загаданное число меньше чем', userNumber)}
else if (xNumber > userNumber) {console.log('загаданное число больше чем', userNumber)}
else {console.log('вы вышли')}
}
while (xNumber !== userNumber && !isNaN(userNumber));