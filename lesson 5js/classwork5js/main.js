// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minimum =(a,b,c) => {
//     if (a < b && a < c){
//         console.log(a)
//     }else
//         if (b < a && b < c){
//             console.log(b)
//         }else
//             if (c < a && c < b){
//                 console.log(c)
//             }
//
// }
//
// minimum(20,5,40)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maximum = (a,b,c) =>{
//     if (a > b && a > c) {
//         console.log(a)
//     }else
//         if (b > a && b > c){
//             console.log(b)
//         } else
//         {
//             console.log(c)}
// }
// maximum(100,50,200)

// - створити функцію яка повертає найбільше число з масиву
// let maxNum =[10,20,30,40,50,99,45,37];
// let maxNumF = (arr) => {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]){
//             max = arr[i]
//         }
//
//     }
//     return max
// }
//console.log(maxNumF(maxNum))
// - створити функцію яка повертає найменьше число з масиву
// let minNum =[10,20,30,40,50,99,45,37];
// let minNumF =(arr) => {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (min > arr[i]){
//             min = arr[i]
//         }
//
//     }
//     return min
// }
// console.log(minNumF(minNum))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let numbers = [10,20,30,40,55,65,75];
// let numFunc = (arr) => {
//     let suma = 0;
//     for (let arrElement of arr) {
//         suma += arrElement
//     }
//     return suma
// }
//
// console.log(numFunc(numbers))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = [5,10,15];
// let middleOfNum =(arr) => {
//     let middle = 0;
//     for (const arrElement of arr) {
//         middle += arrElement % arr.length
//     }
//     return middle
// }
// console.log(middleOfNum(numbers))



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let someNum = [40,50,60,70,80];
// let minMax = (arr) => {
//     let max = 0;
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (min > arr[i]){
//             min = arr[i];
//         } if (max < arr[i]) {
//             max = arr[i];
//         }
//
//     }
//     console.log(max);
//     return min;
// }
// console.log(minMax(someNum))
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomFunc = (arr) => {
//     let ranNum = [];
//     for (let i = 0; i < arr; i++) {
//         ranNum.push(Math.floor(Math.random()*100))
//
//     }
//     console.log(ranNum)
// }
// randomFunc(+prompt('enter number'));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomFunc = (arr,limit)=>{
//     let random = [];
//     for (let i = 0; i < arr; i++) {
//         random.push(Math.floor(Math.random()*limit))
//
//     }
//     console.log(random)
// }
// console.log(randomFunc(+prompt('enter number'),10))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let arr = [1,2,3];
// let reverse = (arr) => {
//     let revArr = [];
//     for (let i = arr.length-1, ri = 0; i >=0;i--,ri++) {
//         revArr [ri] = arr[i]
//
//     }
//     return  revArr
// }
// console.log(reverse(arr))

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
