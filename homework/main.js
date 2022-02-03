// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let one='hello';
// let two = 'owu';
// let three = 'com';
// let four ='ua';
// let first = 1;
// let ten = 10;
// let minus = -999;
// let hundred = 123;
// let pi = 3.14;
// let point = 2.7;
// let adult = 16;
// let bul1 = true;
// let bul2 = false;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(first);
// console.log(ten);
// console.log(minus);
// console.log(hundred);
// console.log(pi);
// console.log(point);
// console.log(adult);
// console.log(bul1);
// console.log(bul2);
//
// document.write(`<h3>${one}</h3>`);
// document.write(`<h3>${two}.${three}.${four}</h3>`);
// document.write(`<h3>${first}, ${ten}, ${minus}, ${hundred}, ${pi}</h3>`);
// document.write(`<h3>${bul1} and ${bul2}</h3>`);
//
// alert(`${one}`);
// alert(`${two}.${three}.${four}`);
// alert(`${first}, ${ten}, ${minus}, ${hundred}, ${pi}`);
// alert(`${bul1} and ${bul2}`)



// - Переприсвоїти кожній змінній з завдання значення на довільне.

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// one = 'world';
// two = 'big';
// three = 'data';
// four = 'com';
// first = 5;
// ten = 1010;
// minus =-456;
// hundred = 111;
// pi = 3.145677;
// point = 4.445;
// adult = 18;
// bul1 = false;
// bul2 = true;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(first);
// console.log(ten);
// console.log(minus);
// console.log(hundred);
// console.log(pi);
// console.log(point);
// console.log(adult);
// console.log(bul1);
// console.log(bul2);
// document.write(`<h3>${one}</h3>`);
// document.write(`<h3>${two}.${three}.${four}</h3>`);
// document.write(`<h3>${first}, ${ten}, ${minus}, ${hundred}, ${pi}</h3>`);
// document.write(`<h3>${bul1} and ${bul2}</h3>`);
// alert(`${one}`);
// alert(`${two}.${three}.${four}`);
// alert(`${first}, ${ten}, ${minus}, ${hundred}, ${pi}`);
// alert(`${bul1} and ${bul2}`)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let firstName = 'Leonid';
// let middleName = 'Stepanovych';
// let lastName = 'Shevtsov';
// let person = firstName + ' '+middleName + ' '+ lastName;
// console.log(person);
// let name=prompt('firstName');
// let midName=prompt('middleName');
// let age=prompt('age');
// alert(`HELLO ${name} ${midName}.You have ${age} years old.`)



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
// console.log(5<6);
// console.log(5>6);
// console.log(5===6);
// console.log(5>=6);
// console.log(10===10);
// console.log(10==10);
// console.log(10>10);
// console.log(10<10);
// console.log(10!=10);
// console.log(123==='123');
// console.log(123=='123');



//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");