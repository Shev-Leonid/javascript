// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


//  let n1 = 'Harry..Potter'
//  let n2 = 'Ron---Whisley'
//  let n3 = 'Hermione__Granger'
// let names = (name,surname) => {
//     let newName = [];
//     if (name.includes(surname)){
//         let a = name.split(surname)
//         a.forEach((item) => {
//             if (item) newName.push(item);
//         })
//         console.log(newName.join(' '))
//     }
// }
// names(n1,'..')



//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random = (number,limit) => {
//     let newArr = [];
//     for (let i = 0; i < number; i++) {
//         newArr.push(Math.floor(Math.random()*limit));
//
//     }
//     return newArr
// }
// console.log(random(10,100))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let random = (number,limit) => {
//     let newArr = [];
//     for (let i = 0; i < number; i++) {
//         newArr.push(Math.floor(Math.random()*limit));
//
//     }
//     return newArr.sort((a,b)=> {
//         return a - b
//     })
// }
// console.log(random(30,100))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let random = (number,limit) => {
//     let newArr = [];
//     for (let i = 0; i < number; i++) {
//         newArr.push(Math.floor(Math.random()*limit)) ;
//
//     }
//     return newArr.filter(num => num % 2 === 0);
// }
// console.log(random(40,100))
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let random = (number,limit) => {
//     let newArr = [];
//     for (let i = 0; i < number; i++) {
//         newArr.push(Math.floor(Math.random()*limit)) ;
//
//     }
//     return newArr.map(num => num + '')
// }
// console.log(random(40,100))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,23,3];
// let sortNums = (num,direction) => {
//     if (direction === 'ascending'){
//         num.sort((a,b)=> a - b)
//     }else if (direction === 'descending') {
//         num.sort((a,b) => b - a)
//     }
//     return num
// }
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums,'descending'));
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let someSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(someSort);
// let someFilter = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// });
// console.log(someFilter)


