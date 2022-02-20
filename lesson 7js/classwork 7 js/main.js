// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars (model, factory, year, maxspeed, capacity) {
//     this.model = model;
//     this.factory = factory;
//     this.maxspeed = maxspeed;
//     this.capacity = capacity;
//
//     this.drive = function (){
//         console.log( `їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//
//         }
//
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//        this.maxspeed = this.maxspeed + newSpeed;
//         console.log(`My new speed ${this.maxspeed}`)
//     };
//     this.changeYear = function (newYear) {
//         this.year = this.year + newYear
//         console.log(`I have car ${this.year} of year.`)
//
//     };
//     this.addDriver = function (driverName, driverOld) {
//         this.driver = driverName;
//         this.old = driverOld
//
//     }
// }
//
// let car = new Cars ('530D','BMW', 2016, 250, 3.0);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(200);
// car.changeYear(2);
// car.addDriver('Leonid',38);
// console.log('----------')
// car.info();
// console.log('----------')
// console.log(car)


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car { model;factory;year;maxspeed;capacity
//
//     constructor(model, factory, year, maxspeed, capacity) {
//         this.model = model;
//         this.factory = factory;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.capacity = capacity;
//     }
//     drive (){
//         // console.log(`їдемо зі швидкістю ${максимальна швидкість} на годину`);
//     }
//     info (){
//         for (const key in this) {
//             // console.log(`${key} - ${this{key}}`)
//         }
//
//     }
//     increaseMaxSpeed (newSpeed){
//     return this.maxspeed = this.maxspeed + newSpeed
//         // console.log(`My new speed ${this.maxspeed}`)
//     }
//     changeYear (newValue) {
//     return this.year = this.year + newValue;
//         console.log(`i have a car of ${this.year} old`)
//     };
//     addDriver (driverName,driverOld) {
//         this.driver = driverName;
//         this.old = driverOld
//     };
// }
//
// let car2 = new Car('520 GT','BMW',2012,230,2.0);
// console.log(car2)
// car2.drive()
// console.log(car2.increaseMaxSpeed(20));
// car2.info()
// car2.changeYear(5);
// console.log(`I have a car of ${car2.changeYear(2) } years old.`)
// car2.addDriver('Dima', 29);
// console.log(car2.addDriver('Dima',29))
// car2.info()

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Popelushka { name;age;footsize
//// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// // //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// // class Prince {name;age;shuzefound
// //
class Popelushka {
    constructor(name, age, footsize) {
    this.name = name;
    this.age = age;
    this.footsize = footsize;
}
}


let arrayPop = [
    new Popelushka ('Katya', 35, 36),
    new Popelushka ('Olya', 26, 37),
    new Popelushka ('Victoriya', 40, 42),
    new Popelushka ('Ira', 33, 35),
    new Popelushka ('Ruslana', 21, 36),
    new Popelushka ('Sveta', 29, 38),
    new Popelushka ('Orisya', 28, 37),
    new Popelushka ('Marta', 42, 39),
    new Popelushka ('Olesya', 19, 36),
    new Popelushka ('Tanya', 22, 36),
];
console.log(arrayPop)
class Prince {
    constructor(name, age, shuzefound) {
    this.name = name;
    this.age = age;
    this.shuzefound = shuzefound;
};
};
let prince = new Prince('Danylo',33,38);

let newPara =(Popelushka,prince)=> {
    for (const item of arrayPop) {

    } {
        if (item.footsize === prince.shuzefound) {
            return `tvoya popelushka: ${item.name}`
        }

    }
}
console.log(newPara(arrayPop,prince))


let princess = arrayPop.find(x=>x.footsize === prince.shuzefound);
console.log(princess)
