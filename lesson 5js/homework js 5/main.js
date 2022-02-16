// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
// let squear = (a,b) => a * b;
// console.log(squear(10,5))

// - створити функцію яка обчислює та повертає площу кола
// let r = +prompt ('radius r' );
// let pi = 3.14;
// let round = (a,pi) => pi * Math.pow(r,2);
// console.log(round(r,pi))

// - створити функцію яка обчислює та повертає площу циліндру
// let r = +prompt ('radius r' );
// let h = +prompt ('height h' );
// let pi = 3.14;
// let sqrCylindr = (r,h,pi) => 2 * pi * r * h;
// console.log(sqrCylindr(r,h,pi));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let number = [45,-123,29,30,06]
// let numFunc = (arr) => {
//     let empty = [];
//     for (let i = 0; i < arr.length; i++) {
//         empty.push(arr[i])
//         console.log(arr[i])
//
//     }
//     return empty
// }
// console.log(numFunc(number))
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let text = txt => document.write(`<p>${txt}</p>`);
// text('Good morning')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = tx  => {
//     document.write(`<ul>`)
//      document.write(`<li>${tx}</li>`)
//      document.write(`<li>${tx}</li>`)
//      document.write(`<li>${tx}</li>`)
//     document.write(`</ul>`)
// }
// list('Hello okten')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (tx,lenght) => {
//     document.write('<ul>')
//     for (let i = 0; i < length; i++) {
//         document.write(`<li>${tx}</li>`);
//
//     }
//     document.write('</ul>')
// //ЧОМУСЬ НЕ ПРАЦЮЄ!!!!!!!!!!!!!!!!!!!!!!!!!
// }
// list('Something',5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mix = ['ivan',true,false,456,-765,'Gena'];
// let mixFunc = arr => {
//     document.write('<ul>');
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//
//     }
//     document.write('</ul>')
// }
// mixFunc (mix)

