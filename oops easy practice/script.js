// 1️⃣ Create a simple class
// Q: Ek class Car banao jisme name, model, price ho.
// Constructor se values set karo aur ek function details() banao jo sari info print kare.
// class Car {
//     constructor() {
//         this.name = "BMW";
//         this.model = "2025";
//         this.price = 140200;
//     }
//     details(){
//         console.log(`Car name is ${this.name} model is ${this.model} and price is $${this.price}`)
//     }
// }
// let car1 = new Car()
// car1.details()


//2️⃣ Make multiple objects
// Q: Question 1 mein banayi class Car ka 3 objects banao.
// Har object ki info print karo.
// class Car {
//     constructor(name, model, price) {
//         this.name = name;
//         this.model = model;
//         this.price = price;
//     }
// }
// Car.prototype.details = function () {
//     console.log(`Car name is ${this.name} model is ${this.model} and price is $${this.price}`)
// }
// let car1 = new Car("BMW", 2025, 140299)
// let car2 = new Car("Tyota", 2024, 1245999)
// let car3 = new Car("Ferrari", 2026, 2000000)
// console.log(car1);
// console.log(car2);
// console.log(car3);
// car1.details()
// car2.details()
// car3.details()


// 3️⃣ Use this keyword

// Q: Ek class Mobile banao.
// Constructor mein this.brand, this.color, this.price set karo.
// Ek method call() banao jo:
// Samsung is calling...
// aisa print kare using this.brand.

// class Mobile{
//     constructor(){
//         this.brand = "Samsung";
//         this.color = "black";
//         this.price = 49999
//     }
//     call(){
//         console.log(`${this.brand} is calling`)
//     }
// }
// let m1 = new Mobile()
// console.log(m1);
// m1.call()



// 4️⃣ Create a class with an array property
// Q: Ek class Student banao jisme
// name
// age
// subjects (array)
// Aur ek function addSubject() banao jo subjects array mein new subject push kare.

// class Student {
//     constructor() {
//         this.name = "Waleed";
//         this.age = 22;
//         this.subjects = ["English", "Math", "Physics", "Computer"];
//     }
//     addSubjects(subject){
//         this.subjects.push(subject)
//     }
// }
// let s1 = new Student()
// s1.addSubjects("Chemistry")
// s1.addSubjects("Urdu")
// console.log(s1);



// 5️⃣ Real-life class example

// Q: Ek BankAccount class banao:
// name
// balance
// Methods:
// deposit(amount)
// withdraw(amount)
// Balance update hote hue dekhna hai.


// class BankAccount {
//     constructor() {
//         this.name = "Waleed";
//         this.balance = 100000;
//     }
//     deposit(amount) {
//         this.balance += amount
//     }
//     withdraw(amount) {
//         this.balance -= amount
//     }
// }
// let ba1 = new BankAccount()
// ba1.deposit(5000)
// ba1.withdraw(15000)
// console.log(ba1);


// 6️⃣ Using Prototype

// Q: Ek function-constructor banao Person(name)
// Aur prototype me ek function sayHi() add karo jo name print kare.
// Hello, I am Waleed

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }
// Person.prototype.sayHi = function () {
//     console.log(`Hello, I am ${this.name}`)
// }
// let p1 = new Person("Waleed")
// p1.sayHi()



// 7️⃣Class with default values

// Q: Ek class Laptop banao jiska constructor brand accept kare.
// Baaki values default hon:
// ram = 8
// storage = 256
// Ek method info() banao.

// class Laptop {
//     constructor(brand) {
//         this.brand = brand;
//         this.ram = 8;
//         this.storage = 256;
//     }
//     info() {
//         console.log(`Laptop brand is ${this.brand} ,ram is ${this.ram}gb and storage is ${256}gb`);
//     }
// }
// let laptop1 = new Laptop("DELL")
// laptop1.info()



// 8️⃣ Factory Style Objects Using Class

// class IceCream {
//     constructor(flavour, price, topping = "chocolate") {
//         this.flavour = flavour;
//         this.price = price;
//         this.topping = topping;
//     }
// }

// let icecream1 = new IceCream("vanilla", 100)
// let icecream2 = new IceCream("mango", 120, "nuts")
// console.log(icecream1);
// console.log(icecream2);


// 🔟 Build your own small system

// Q: Ek tiny OOP system banao:
// Class: Product
// Properties:
// name
// price
// quantity

// Methods:
// buy(x) → quantity kam ho jaye
// restock(x) → quantity badh jaye
// info()

// Phir 2 product objects banao aur method test karo.

// class Product {
//     constructor(name, price, quantity) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity
//     }
// }
// Product.prototype.buy = function (x) {
//     this.quantity -= Number(x)
// }
// Product.prototype.restock = function (x) {
//     this.quantity += Number(x)
// }
// Product.prototype.info = function () {
//     console.log(`Product name is ${this.name} price is ${this.price} and quantity is ${this.quantity}`)
// }
// let product1 = new Product("Laptop", 120000, 10)
// let product2 = new Product("Headphones", 3500, 50)
// product1.buy(4)
// product2.restock(20)
// product1.info()
// product2.info()
// console.log(product1);
// console.log(product2);
