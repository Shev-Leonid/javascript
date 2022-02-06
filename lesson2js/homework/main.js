// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('What time is it?')
// if (time >= 0 && time<= 14){
//     alert('it is first part')
// } else if (time >=15 && time <=29) {
//     alert('it is second part')
// } else if (time >=30 && time <=44){
//     alert( 'it is third part')
// }else if (time >=45 && time <=59){
//     alert('it is fourth part')
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('What day of month now?')
// if (day >=1 && day <=9){
//     console.log('it is first part of month')
// }else if (day >= 10 && day <=19){
//     console.log('it is e middle part of month')
// }else if (day >=20 && day <=31){
//     console.log('It is a last part of the month')
// }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = true;
// if (test === true){
//     alert('VIRNO!!!')
// }else if (test === false){
//     alert('WRONG!!!')
// }else {
//     alert('Something wrong!!!')
// }

// let test = confirm('true or false') ?'Virno' : 'Wrong';
// alert(test);
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = +prompt('Enter number 1 or 0 or -3 ');
// if (a !==0){
//     console.log('Virno');
// }else {
//     console.log('Wrong')
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let week= +prompt('Enter a number day of the week ');
// switch (week) {
//     case 1 :
//         console.log('Lection on Monday at 8:00pm')
//         break
//     case 2 :
//         console.log('Practik in Lviv at 8:00pm')
//         break
//     case 3 :
//         console.log('Lection number 2 at 8:00pm')
//         break
//     case 4 :
//         console.log('Praktik on Thursday at 8:00pm')
//         break
//     case 5 :
//         console.log('Lection on Friday at 8:00pm')
//         break
//     case 6 :
//         console.log('English lesson at 2:00pm')
//         break
//     case 7 :
//         console.log('Day off')
//         break;
//     default:
//         console.log('The week is finish!')
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = +prompt('Enter "How many days in this year"');
// if (year % 2 ===0){
//     console.log('Rik vysokosnuy!!!')
// }else{
//     console.log('Rik ne vysokosnuy!!!')
// }
//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let name = prompt('What the official name of JavaScript?');
// if (name === 'ECMAScript'){
//     console.log('True')
// }else {
//     console.log('Dont know? ECMAScript!')
// }