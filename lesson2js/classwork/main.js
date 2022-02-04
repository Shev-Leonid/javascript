// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let first = +prompt('enter first number');
// let second = +prompt('enter second number');
// if (first > second) {
//     console.log(first)
// } else if ( first === second){
//     console.log('enter same numbers')
// } else {
//     console.log(second)
// }





// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let enterNumber = +prompt('enter flat number');
// if (enterNumber > 0 && enterNumber <=20) {
//     console.log('this flat in first entrance')
// } else if (enterNumber > 21 && enterNumber <=48) {
//     console.log('this flat in second entrance')
// } else if (enterNumber > 49 && enterNumber <=90) {
//     console.log('this flat in third entrance')
// }



//
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt('enter number');
// if (number === 10) {
//     console.log(true)
// }else if (number !== 10) {
//     console.log(false)
// }
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
// let x = prompt(["ENTER"]); DONT WORK !!!!!!!!!!
// if (typeof x === 'number') {
//     console.log(1)
// } else if (typeof x === 'string') {
//     console.log(2)
// }else if (typeof x === 'boolean' || 'object') {
//     console.log(3)
// } else {
//     console.log('Something WRONG!!!')
// }
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let study = +prompt('what temperature outside?');
// if (study >=10 && study <=22){
//     console.log('go study')
// }else {
//     console.log('stay study at home')
// }
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let game =+prompt('enter number from 1 to 5');
// switch (game) {
//     case 1 : game = 1
//         console.log('You win auto');
//     break;
//     case 2 : game = 2
//         console.log('You win motobike!!!');
//         break;
//     case 3 : game = 3
//         console.log('You win Iphone 20!!!');
//         break;
//     case 4 : game = 4
//         console.log('You win chokolate!!!');
//         break;
//     case 5 : game = 5
//         console.log('You win parfums!!!');
//         break;
//     default:
//         alert('You enter something wrong!!!Bye!!!!')
// }


