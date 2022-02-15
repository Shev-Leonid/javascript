// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minimum(a,b,c) {
//     if (a < b && a < c){
//         console.log(a) ;
//     } else
//         if (b < a && b < c){
//             console.log(b);
//         } else
//             if (c < a && c < b) {
//                 console.log(c)
//             }
//
// }
// minimum(23,24,99)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maximum(a,b,c) {
//     if (a > b && a > c){
//         console.log(a)
//     }else
//         if (b > a && b > c){
//             console.log(b)
//         } else
//             if (c > a && c > b){
//                 console.log(c)
//             }
//
// }
// maximum(100,123,999)
// - створити функцію яка повертає найбільше число з масиву
// let numbers = [10,20,40,70,123];
// function maxNumber(number) {
//     let max = number[0];
//     for (const element of number) {
//         if (element > max){
//             max = element
//         }
//
//     }
//
//     return max
// }
// document.write(`<div>Max number of arr: ${maxNumber(numbers)}</div>`)
// - створити функцію яка повертає найменьше число з масиву
// let numbers = [10,20,40,70,123];
// function minimum(number) {
//     let min = number[0];
//     for (let i = 0; i < min.length; i++) {
//         if (element < min){
//             min = element
//         }
//
//     }
// return min
// }
// document.write(`<div>Min number of arr: ${minimum(numbers)}</div>`)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let someNum = [10,30,30,35];
// function sumator(check) {
//     let suma = 0;
//     for (const checkElement of check) {
//         suma = checkElement + suma
//     }
//     return suma;
// }
//
// console.log(sumator(someNum))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let someNum = [10,30,30,35];
// function middle(number) {
//     let suma = 0;
//     for (const Element of number) {
//         suma =  Element + suma % someNum.length
//     }
//     return suma
// }
//
// console.log(middle(someNum))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);



// - створити функцію яка заповнює масив рандомними числами
// function random (numbers) {
//     let empty = [];
//     for (let i = 0; i < numbers; i++) {
//         empty.push(Math.floor(Math.random()*100));
//     }
// return empty
// };
//
// console.log(random(15))



// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function random (numbers) {
//     let empty = [];
//     for (let i = 0; i < 15; i++) {
//         empty.push(Math.floor(Math.random()*100));
//     }
// return empty
// };
//
// console.log(random(15))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3];
// function reversive(arr) {
//     let newArr = [];
//     for (let i = arr.length -1, ri = 0; i >= 0; i--, ri++);  {
//         newArr[ri] = arr[i]
//
//     }
// return newArr
// }
//
// console.log(reversive(arr))
