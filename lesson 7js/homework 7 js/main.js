// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// };
// let arrUsers = [
//     new User(10,'Vania','Kuzkin','dhdh@gmail.com',380974747473),
//     new User(2,'Olenka','Kuzkina','qweh@gmail.com',3809747676),
//     new User(3,'Petya','Popovich','asdf@gmail.com',38097767685),
//     new User(4,'Olia','Popovich','jhkhk@gmail.com',38097676767),
//     new User(7,'Roman','Pupkin','djgjh@gmail.com',3809747878),
//     new User(9,'Larisa','Pupkina','jgjgj@gmail.com',38097475656),
//     new User(5,'Vasia','Shah','shah@gmail.com',380999999),
//     new User(8,'Vasylyna','Shah','shaha@gmail.com',3809723343),
//     new User(6,'Nazar','Myha','myxa@gmail.com',380956778),
//     new User(1,'Sveta','Myha','svmx@gmail.com',3809999999),
//]
//console.log(arrUsers)

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let userFilter = arrUsers.filter(value => {
//     if (value.id % 2 === 0){
//         return value
//     }
// })
// console.log(userFilter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userSort = arrUsers.sort((a,b)=>a.id - b.id);
// console.log(userSort)




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
// let arrClients = [
//     new Client(10,'Vania','Kuzkin','dhdh@gmail.com',380974747473,['milk']),
//     new Client(2,'Olenka','Kuzkina','qweh@gmail.com',3809747676,['beer']),
//     new Client(3,'Petya','Popovich','asdf@gmail.com',38097767685,['eggs','chees']),
//     new Client(4,'Olia','Popovich','jhkhk@gmail.com',38097676767,['water','bread']),
//     new Client(7,'Roman','Pupkin','djgjh@gmail.com',3809747878,['butter','rise','eggs']),
//     new Client(9,'Larisa','Pupkina','jgjgj@gmail.com',38097475656,['ice-cream','chokolate']),
//     new Client(5,'Vasia','Shah','shah@gmail.com',380999999,['mashrooms','vodka']),
//     new Client(8,'Vasylyna','Shah','shaha@gmail.com',3809723343,['bananas','orange','tomato','ananas']),
//     new Client(6,'Nazar','Myha','myxa@gmail.com',380956778,['meat','salt']),
//     new Client(1,'Sveta','Myha','svmx@gmail.com',3809999999,['jogurt','cakes'])
// ];
// // console.log(arrClients)
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let orderSort = arrClients.sort((a,b) => a.order.length - b.order.length);
// console.log(orderSort)