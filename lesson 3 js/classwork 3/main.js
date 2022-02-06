// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arrNum = [2,17,13,6,22,31,45,66,100,-18];
//     1. перебрати його циклом while
// i = 0;
// while (i < arrNum.length){
//     console.log(arrNum[i]);
//     i++
// };
//     2. перебрати його циклом for
// for (let i = 0; i < arrNum.length; i++) {
//     console.log(arrNum[i]);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i = 0;
// while (i < arrNum.length){
//     if ([i] % 2 !==0){
//         console.log(arrNum[i])
//     }
//     i++
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arrNum.length; i++) {
//     if ([i] % 2 !== 0){
//         console.log(arrNum[i])
//     }
//
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// i = 0;
// while (i <arrNum.length){
//     if (arrNum[i] % 2 == 0){
//         console.log(arrNum[i])
//     }
//     i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] % 2 === 0){
//         console.log(arrNum[i])
//     }
//
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] % 3 === 0){
//         arrNum [i] = 'okten'
//         console.log(arrNum[i])
//     }
// }
// console.log(arrNum);
// 8. вивести масив в зворотньому порядку.
// for (let i = arrNum.length - 1; i >= 0; i--) {
//     console.log(arrNum[i])
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 7. замінити кожне число кратне 3 на слово "okten" revers

// for (let i = arrNum.length - 1; i >= 0; i--) {
//
//      if (arrNum[i] % 3 === 0){
//          arrNum [i] = 'okten'
//          console.log(arrNum[i])
//      }
//     console.log(arrNum[i])
//  }
// 6. перебрати циклом for та вивести  числа тільки парні  значення revers
// for (let i = arrNum.length - 1; i >=0;i--) {
//     if (arrNum[i] % 2 === 0){
//         console.log(arrNum[i])
//     }
//
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення revers
// i = arrNum.length-1;
// while (i >=0){
//     if (arrNum[i] % 2 == 0){
//         console.log(arrNum[i])
//     }
//     i--
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом revers
// for (let i = arrNum.length-1; i>=0; i--) {
//     if ([i] % 2 !== 0){
//         console.log(arrNum[i])
//     }
//
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом revers
// i =  arrNum.length-1;
// while (i >= 0){
//     if ([i] % 2 !==0){
//         console.log(arrNum[i])
//     }
//     i--
// }
// 1. перебрати його циклом while revers
// i = arrNum.length-1;
// while (i >= 0){
//     console.log(arrNum[i]);
//     i--
// };