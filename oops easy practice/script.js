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








// ///////////////////////Second Set ////////////////////////////////




// 1️⃣ Constructor Parameters + Default Values
// Ek class Movie banao jiska constructor teen values accept kare:
// title
// rating
// language (default = "English")
// Ek method banao describe() jo movie ki details print kare.

// class Movie {
//     constructor(title, rating, language = "English") {
//         this.title = title;
//         this.rating = rating;
//         this.language = language;
//     }
// }
// Movie.prototype.describe = function () {
//     console.log(`Movie title is ${this.title}, rating is ${this.rating} and movie language is ${this.language}`)
// }

// let m1 = new Movie("Jungle 2", 6.8)
// m1.describe()



// 2️⃣ Object Copy Behavior
// Ek object user banao. Ek dusra variable me assign karo:
// let u2 = user;
// Question: agar u2 me name change karo to user me change hoga?
// Iss behavior ko console se test karo.

// let user = {
//     name: "Waleed"
// }
// let u2 = user;
// u2.name = "Muhammad"
// console.log(user);
// console.log(u2);


// 3️⃣ Array of Objects

// Ek class Student banao. 5 student objects banao.
// Unko ek array me store karo.
// Ek loop likho jo har student ka name print kare.

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }


// let student1 = new Student("Ali", 20)
// let student2 = new Student("Asif", 22)
// let student3 = new Student("Zain", 25)
// let student4 = new Student("Faisal", 35)
// let student5 = new Student("Bilal", 28)

// let studentArray = []
// studentArray.push(student1, student2, student3, student4, student5)
// console.log(studentArray);
// studentArray.forEach((student)=>{
//     console.log(student.name)
// })



// 4️⃣ Prototype Property Add

// Constructor function Person() banao.
// Person.prototype me ek property country = "Pakistan" add karo.
// 2 objects banao aur verify karo ke dono ko country automatically mil rahi hai ya nahi.

// class Person {
//     constructor(name) {
//         this.name = name
//     }
// }
// Person.prototype.country = "Pakistan"


// let p1 = new Person("Waleed")
// let p2 = new Person("Zain")
// console.log(p1)
// console.log(p2)



// 5️⃣ Delete property test

// Ek object banao jisme name, email ho.
// Phir delete keyword use karke ek property delete karo.
// Console me check karo ke property deleted hui ya nahi.


// let user = {
//     name : "Waleed",
//     email: "waleed@gmail.com"
// }
// delete user.email
// console.log(user);



// 6️⃣ Method Borrowing via call()

// Ek object car banao jisme method start() ho.
// Doosra object banao jisme ye method nahi.
// call() use karke method borrowing test karo.

// let car = {
//     carName: "BMW",
//     start: function () {
//         console.log("Starting!")
//     }
// }
// let car2 = {
//     carName: "Tyota",

// }
// car.start.call(car2)
// console.log(car2);



// 7️⃣ Calculator Class

// Class Calculator banao jisme methods ho:
// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

// Phir har method test karo.

// class Calculator {
//     constructor(val1, val2) {
//         this.firstValue = val1;
//         this.secondValue = val2;
//     }
// }

// Calculator.prototype.add = function () {
//     let answer = this.firstValue + this.secondValue
//     console.log(answer);
// }
// Calculator.prototype.subtract = function () {
//     let answer = this.firstValue - this.secondValue
//     console.log(answer);
// }
// Calculator.prototype.multiply = function () {
//     let answer = this.firstValue * this.secondValue
//     console.log(answer);
// }
// Calculator.prototype.divide = function () {
//     let answer = this.firstValue / this.secondValue
//     console.log(answer);
// }

// let first = new Calculator(10, 5)
// first.add()
// first.subtract()
// first.multiply()
// first.divide()
// console.log(first);


// 9️⃣ bind() + setTimeout

// Ek object banao jisme ek method ho:
// sayHi() {
//    console.log("Hi", this.name)
// }

// Is method ko setTimeout me call karo.
// Bind() lagaye bina kya hoga?
// Bind() lagane ke baad kya hoga?

// Both test karo.


// let obj = {
//     name: "Waleed",
//     sayHi: function () {
//         console.log(`Hi, ${this.name}`)
//     }
// }
// let user = {
//     name: "Muhammad"
// }
// setTimeout(() => {
//     let u = obj.sayHi.bind(user)
//     u()
// }, 4000)


// 🔟 Reuse Logic Using Prototype

// Ek constructor function BankAccount(name, balance) banao.
// Prototype me method add karo:

// deposit(amount)

// withdraw(amount)

// 3 accounts banao aur operations test karo.
// (Ye completely new pattern hai — class nahi, constructor function + prototype.)

// class BankAccount {
//     constructor(name, balance) {
//         this.name = name;
//         this.balance = balance;
//     }
// }
// BankAccount.prototype.deposit = function (amount) {
//     this.balance += Number(amount)
// }
// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= Number(amount)
// }

// let account1 = new BankAccount("Waleed", 100000)
// let account2 = new BankAccount("Zain", 45000)
// account1.deposit(8500)
// account1.withdraw(15000)
// account2.withdraw(20000)
// account2.deposit(3500)
// console.log(account1);
// console.log(account2)
