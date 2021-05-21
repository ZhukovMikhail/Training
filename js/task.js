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

// const xNumber = Math.round(Math.random() * 100 + 1);
// // console.log('randomNumber', xNumber);
// let userNumber
// do {const userAnswer = prompt('Введите число')
//  userNumber = Number.parseInt(userAnswer);
// if (xNumber === userNumber) {console.log('вы угадали')}
// else if (xNumber < userNumber) {console.log('загаданное число меньше чем', userNumber)}
// else if (xNumber > userNumber) {console.log('загаданное число больше чем', userNumber)}
// else {console.log('вы вышли')}
// }
// while (xNumber !== userNumber && !isNaN(userNumber));


// let total = 0;

// while (true) {
//     const enterSth = prompt('Введи число');
//     let result;
//     if (enterSth === null) {
//         result = `Общая сумма чисел равна ${total}`;
//         break;
//     } else if (!isNaN(enterSth)) {
//         result = `Общая сумма чисел равна ${total += +enterSth}`;
//     } else {
//         result = 'Введите число';
//     }
//     console.log(result);
// };
// Task 3
// ==========================новая задача=====================
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет 
// значение '1', то в переменную result запишем 'зима', если имеет значение 
// '2' – 'весна' и так далее. Решите задачу через switch-case.

// const num = prompt("введи число");
// let result;

// switch (+num) {
//     case 1:
//         result = "зима";
//         break;
//      case 2:
//         result = "весна";
//         break;
//      case 3:
//         result = "осень";
//         break;
//      case 4:
//         result = "лето";
//         break;
//     default: result = "хз"    
// }
// console.log(result);

// Task 6 
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// let browser = prompt('введите название браузера').toLowerCase();

// if (browser === 'edge') {alert("You've got the Edge!")}
// else if (browser === 'chrome' || browser === 'eirefox' || browser === 'safari' || browser === 'opera') {alert( 'Okay we support these browsers too' )}
// else {alert( 'We hope that this page looks ok!' )}

// Task 4
// воспользуемся циклом while и выведите в консоль числа от 0 до 50

// let x;
// x = 0;
// while (x < 51) {
//     console.log(x);
//     x += 1;
// }

// Task 7
// При помощи цикла for выведите чётные числа от 2 до 10.


// for ( let i = 2; i < 11; i += 2) {
//     console.log(i)
// }

// TASK 4
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

// const age = prompt('Enter your age')

// function isAdult(age) {
//  if (age < 18) {confirm("точно?")}
//  else {return true}
//  }
//  console.log(isAdult(age))

// const age = prompt('Enter your age')
// function isAdult(age) {
// return age < 18 ? confirm("точно?") : true 
// }
// console.log(isAdult(age))


//  for (let i = 2; i < 50; i += 1) {
//      for ( let j = 2; j < 50; j += 1) {
//          console.log(`${i} * ${j} = ${i * j}`)
//      }
//      console.log('=====================');
//  }
//=================масивы===============
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }
// Итерация по массиву
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   let total = 0;
  
//   for (let i = 0; i < matrix.length; i += 1) {
//     console.log('Подмассив матрицы matrix[i]: ', matrix[i]);
  
//     for (let j = 0; j < matrix[i].length; j += 1) {
//       console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//       total += matrix[i][j];
//     }
//   }
  
//   console.log(total); // 45

//   let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// // split
// const message = 'Welcome to Bahamas!';

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split('')); // [много букв :)]

// // join
// const clients = ['Mango', 'Poly', 'Ajax'];

// // Сошьет все элементы массива в строку,
// // между каждой парой элементов будет указанный разделитель
// console.log(clients.join(' ')); // "Mango Poly Ajax"
// console.log(clients.join(',')); // "Mango,Poly,Ajax"
// console.log(clients.join('-')); // "Mango-Poly-Ajax"

// Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
// const scores = [1, 2, 3, 4, 5];

// Следующая операция удаляет три элемента массива,
// начиная с первого элемента (индекс 0).
// const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента.
// console.log(scores.splice(0, 3));
// console.log(scores);

// // А массив deletedScores содержит три удаленных элемента.
// console.log(deletedScores); // [1, 2, 3]



//================== Start Сумма всех чисел от 1 до Number==========================

//  function calculateTotal(number) {

//     let sum = 0;
//      for (let i = 0; i <= number; i += 1) {
       
//        sum += i;}

// }
//      console.log(calculateTotal(1));
//      console.log(calculateTotal(3));
//      console.log(calculateTotal(7));
//      console.log(calculateTotal(18));
//      console.log(calculateTotal(24));
//      console.log(calculateTotal(55));
//================== END Сумма всех чисел от 1 до Number=====================

//=======================Задача: поиск самого длинного слова====================

// function findLongestWord(string) {
//     // Change code below this line
//   const array = string.split(" ");
//     let LongestWord = array[0];
//     for (let i = 0; i < array.length; i += 1) {
//       if (LongestWord.length < array[i].length) {
//       LongestWord = array[i]}
//     }
//   return LongestWord
  
//     // Change code above this line
//   }
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//   console.log(findLongestWord("Google do a roll"));
//   console.log(findLongestWord("May the force be with you"));
//   console.log(findLongestWord("я полюбому буду-айтишником и буду зашибать кучу бабла"));
  //=====================================================================================

  //=======================Задача: Дополни код функции createArrayOfNumbers(min, max) 
// так, чтобы она возвращала массив всех целых чисел от значения min до max.====================
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
    
//     // Change code below this line
   
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);}
 
 
//     // Change code above this line
//  return numbers
// }
//   console.log(createArrayOfNumbers(3, 7));
//   console.log(createArrayOfNumbers(14, 17));
//   console.log(createArrayOfNumbers(29, 34));
//   console.log(createArrayOfNumbers(15, 20));
//=====================================================================================

//======================= Задача: фильтрация массива чисел =============================
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers)
//  и возвращает новый массив, в котором будут только те элементы массива numbers, 
// которые больше чем значение параметра value (число).
// function filterArray(numbers, value) {
//     // Change code below this line
//  //сравниваем value с каждым числов масива, и все что выше него заносим в новый масив.
 
//  const array = [];
//  for (let i = 0; i <= numbers.length; i += 1 ) {
//      if (numbers[i] > value) {array.push(numbers[i])}
//  };
//  return array
//    // Change code above this line
//  }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4,5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]
//=====================================================================================

//==================Задача: общие элементы. =========================================
// Задание: Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
//Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. 
// А числа 0, 1 и 8 присутствуют только в одном из массивов.
//Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, 
//и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
    // Change code below this line
//   проверяем входят ли элементы второго масива в первый
// если входят то пушим их в ноый масив.

// const arr = [];
// for(let i = 0; i < array1.length; i += 1) {
//  if (array2.includes(array1[i])){
// arr.push(array1[i])}
// } 
//  return arr
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Объявлена функция getCommonElements(array1, array2)
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
// В цикле for использовались методы includes и push
//=====================================================================================

//=========Задача: Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of. ==============
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
// // исходный код 
//     // for (let i = 0; i < order.length; i += 1) {
//     //     total += order[i];
//     //   }
// // меняем на :
//     for (const price of order) {
//       total += price;
//     }
  
//     // Change code above this line
//     return total;
//   }
//=====================================================================================

//=========Задача: Выполни рефакторинг кода функции for на for...of


function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  // for (let i = 0; i < numbers.length; i += 1) {
  //   const number = numbers[i];

  for (const number of numbers) {
if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
console.log(filterArray([12, 85, 8, 58, 75], 20));
