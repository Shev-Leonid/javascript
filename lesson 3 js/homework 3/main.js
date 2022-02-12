// --створити масив з:
//     - з 5 числових значень
// let number = [29,8,20,30,9];
// - з 5 стrічкових значень
// let arr = ['hello','car','homework','classwork','minecraft'];
// - з 5 значень стрічкового, числового та булевого типу
// let mix = [29,'work',true,20,false];
// - та вивести його в консоль
// console.log(number);
// console.log(arr);
// console.log(mix);
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let empty = [];
// empty[0]='hello';
// empty[1]='world'
// empty[2]=true;
// empty[3]=123;
// empty[4]='dayoff';
// empty[5]=false;
// empty[6]=456;
// console.log(empty);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <=9; i++) {
//     document.write(`<div>Write something</div>`)
//
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <= 9; i++) {
//     document.write(`<div>${i} Something write with index</div>`);
//
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i<=19){
//     document.write(`<h1>Something write with while</h1>`);
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i<=19){
//     document.write(`<h1>Something write with while with index ${i}</h1>`);
//     i++;
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let num = [1,10,20,30,40,50,60,70,80,90];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
//
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrStr = ['hello','car','homework','classwork','minecraft','okten','cool','computer','telephone','device'];
// for (const string of arrStr) {
//     console.log(string);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mix = ['true','false',15,'some','any',45,100,'english',1200,'money'];
// for (let i = 0; i < mix.length; i++) {
//     console.log(mix[i]);

// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//  let mix = [true,false,15,'some','any',45,100,'english',true,'money'];
// // for (const mix1 of mix) {
// //     if (typeof mix1 === 'boolean') {
// //         console.log(mix1)
// //     }
// //
// // }
// for (let i = 0; i < mix.length; i++) {
//    if (typeof mix[i]==='boolean') {
//        console.log(mix[i])
//    }
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mix = [true,false,15,'some','any',45,100,'english',true,'money'];
// for (const mix1 of mix) {
//     if (typeof mix1 === 'number'){
//         console.log(mix1)
//     }
//
// }
// for (let i = 0; i < mix.length; i++) {
//    if (typeof mix[i] === 'number'){
//        console.log(mix[i])
//    }
//
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mix = [true,false,15,'some','any',45,100,'english',true,'money'];
// for (const mix1 of mix) {
//     if (typeof mix1 === 'string') {
//         console.log(mix1)
//     }
//
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let empty = [];
// empty [0] = 12;
// empty [1] = true;
// empty [2] = false;
// empty [3] = 'english';
// empty [4] = 'something';
// empty [5] = 23;
// empty [6] = false;
// empty [7] = 'stringa';
// empty [8] = 'teacher';
// empty [9] = 100;
// console.log(empty);
// for (const emptyElement of empty) {
//     console.log(emptyElement)
//
// }



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`step ${i}`);
//     document.write(`step ${i}`);
//
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`step ${i}`);
//      document.write(`step ${i}`);
//
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(`step ${i}`);
//       document.write(`step ${i}`);
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 ===0) {
//         console.log(`step ${i}`);
//         document.write(`step ${i}`);
//     }
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2===1){
//         console.log(`step ${i}`);
//         document.write(`step ${i}`);
//     }
//
// }