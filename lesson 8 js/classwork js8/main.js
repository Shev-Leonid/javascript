// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let newClass = document.getElementById('main_header');
// newClass.classList.add('december_2021')
// console.log(newClass)
//
// b) робить шириниу елементу ul 400px
// let list = document.getElementsByTagName('ul');
// console.log(list);
// list[0].style.width = '400px';
// list[0].style.border = '1px solid blue'

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let list = document.getElementsByClassName('lihkList');
//
// for (const listElement of list) {
//     listElement.style.border = '2px solid green';
//     listElement.style.width = '50%'
// }
// console.log(list)
// d) отримує текст який зберігається в елементі з класом listElement2
// let txt = document.getElementsByClassName('listElement2');
// console.log(txt)
// txt[0].innerHTML = '<a href=""><b>SOME NEW TEXT</b></a>';
// e) отримує всі елементи li та змінює ім колір фону на сірий
// let changeColor = document.getElementsByTagName('li');
// console.log(changeColor);
// for (const changeColorElement of changeColor) {
//     changeColorElement.style.backgroundColor = 'red';
//     changeColorElement.style.margin = '4px'
//
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let allA = document.getElementsByTagName('a');
// console.log(allA);
// for (const allAElement of allA) {
//     allAElement.classList.add('anchor');
//     console.log(allAElement)
//
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let allA = document.getElementsByTagName('a');
// console.log(allA);
// for (const allAElement of allA) {
//     if (allAElement.innerText === 'link3') {
//         allAElement.style.fontSize = '40px'
//     }
//
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let allA = document.getElementsByTagName('a');
// console.log(allA)
// for (const allAElement of allA) {
//     console.log(allAElement)
//     let newTag = allAElement.innerText
//     allAElement.classList.add(`element_${newTag}`)
// }



// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let allElem = document.getElementsByClassName('sub-header');
// console.log(allElem)
// // for (const allElemElement of allElem) {
// //     allElemElement.style.color = prompt('Enter color:(red,green,blue ...')
// // }
// allElem[0].style.color = prompt('Enter color:(red,green,blue ...');
// allElem[1].style.color = prompt('Enter color:(red,green,blue ...');
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let getALL = document.getElementsByClassName('sub-header');
// for (const allElement of getALL) {
//     console.log(allElement)
//     if (allElement.innerText === 'conten 2 segment'){
//         allElement.style.color = prompt('Enter color: (red, green, blue ...)');
//     }
//
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let getClass = document.getElementsByClassName('content_1');
// console.log(getClass[0].innerText)
// getClass[0].innerText = prompt('Enter new text')



// l) отримати елементи p та змінити їм padding на 20px
// let getTag = document.getElementsByTagName('p');
// for (const tagElement of getTag) {
//     tagElement.style.padding = '20px';
//     tagElement.style.border = '2px solid orange'
//
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let getClass = document.getElementsByClassName('text2');
// console.log(getClass);
// getClass[0].innerText = 'sep-2021'





