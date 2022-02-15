// // - створити функцію яка обчислює та повертає площу прямокутника

// function rectangle(a,b) {
//     let squear = a * b;
//     return squear
// }
//
// console.log(rectangle(10,20))
// document.write('Squear rectangle:'+ rectangle(10,5))
// // - створити функцію яка обчислює та повертає площу круга
// function round(r) {
//     let radius = r ** 2;
//     let sRound = 3.14 * radius;
//     return sRound
//
// }
// console.log(round(7))
// document.write('S Round: ' + round(5))

// //- створити функцію яка обчислює та повертає площу циліндру S= 2πRH

// function cylinder(R,H) {
//         let sCylindr = 2 * 3.14 * R * H;
//             return sCylindr
//
// }
//
// console.log(cylinder(3,4))
//  document.write('S cylindr: ' + cylinder(5, 6))

// створити функцію яка приймає масив та виводить кожен його елемент

// let mixArr = [true,false,12,35,67,'hello','world'];
// function empty(mixArr) {
//     for (let i = 0; i < mixArr.length; i++) {
//         console.log(mixArr[i]);
//
//     }
//
// }
// empty(mixArr)
//  створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createP(text) {
//     // document.write(`<p>${text}</p>`);
//     // document.write(`<p>${text}</p>`);
//     // document.write(`<hr>`);
//     for (let i = 0; i < text.length; i++) {
//          document.write(`<p>${text}</p>`);
//          document.write(`<p>${text}</p>`);
//          document.write(`<hr>`);
//
//     }
// }
// createP(`text`);
// //  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(argument) {
//     document.write(`<ul>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`</ul>`)
//
// }
//
//  list(`text in list`)

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function dynamicList(textarg,number) {
// document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${textarg}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
//
// dynamicList(`write number(how many li ?)`,3);


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mixArr = [true,false,1234,'something',34,'writing'];
// function primitiveElements(arguments) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arguments.length; i++) {
//         document.write(`<li>${arguments[i]}</li>`);
//
//     }
//     document.write(`</ul>`)
// }
// primitiveElements(mixArr)



// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let someObject = [{id:1,name:'Ivan',age:34},{id:2,name:'Igor',age:43},{id:1,name:'Irina',age:35},];
// function object(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id}.${arrElement.name}.${arrElement.age}.`)
//     }
//
// }
//
// object(someObject)








