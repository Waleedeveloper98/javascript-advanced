// SECTION 1: Objects and OOPS Thinking (Foundation)

// 1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

// let user = {
//     name : "Waleed",
//     email : "waleed@gmail.com",
//     login : function(){
//         console.log("User logged in.")
//     }
// }
// user.login()


// 2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// without class
// let user1 = {
//     name: "waleed",
//     age: 22,
// }
// let user2 = {
//     name: "asif",
//     age: 29,
// }
// let user3 = {
//     name: "ali",
//     age: 33,
// }
// let user4 = {
//     name: "bilal",
//     age: 30,
// }
// let user5 = {
//     name: "adil",
//     age: 25,
// }

//with class
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let user1 = new User("waleed", 22)
// let user2 = new User("asif", 29)
// let user3 = new User("ali", 33)
// let user4 = new User("bilal", 30)
// let user5 = new User("adil", 25)


// 3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// let product = {
//     name : "bag",
//     price: 1500,
//     discount : function(val){
//        return this.price - val
//     }
// }

// console.log(product.discount(500));


// SECTION 2: Classes and Objects

// 4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

// class Car {
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//     }
// }
// Car.prototype.drive = function () {
//     console.log(`Car brand ${this.brand} and speed is ${this.speed}kph`);
// }
// let car1 = new Car("BMW", 300)
// let car2 = new Car("Tyota", 180)
// car1.drive()
// car2.drive()


// 5.	Create two different car objects from the same class and verify that their data is different.

// class Car {
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//     }
// }
// Car.prototype.drive = function () {
//     console.log(`Car brand ${this.brand} and speed is ${this.speed}kph`);
// }
// let car1 = new Car("BMW", 300)
// let car2 = new Car("Tyota", 180)
// console.log(car1.speed === car2.speed);


// SECTION 3: Constructor and this keyword

// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

// class Student {
//     constructor(name, rollNumber) {
//         this.name = name;
//         this.rollNumber = rollNumber;
//     }
//     introduce() {
//         console.log(`name ${this.name} and roll number ${this.rollNumber}`)
//     }
// }
// let s1 = new Student("waleed", 23)
// let s2 = new Student("zain", 34)
// s1.introduce()
// s2.introduce()


// Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// let obj1 = {
//     name: "waleed",
//     print: function () {
//         console.log(this.name);
//     }
// }
// let obj2 = {
//     name: "waleed",
//     print: () => {
//         console.log(this.name);
//     }
// }
// obj1.print()
// obj2.print()


// SECTION 4: Constructor Functions and Prototypes

// 	10.	Create a User constructor function (do not use class syntax).

// function User(){
//     this.name = "waleed";
//     this.age = 22;
// }
// let u = new User()
// console.log(u);


// 11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

// class User {
//     constructor() {
//         this.name = "waleed";
//         this.age = 22;
//     }
//     login(){
//         console.log("user loggedIn.")
//     }
// }


// class User {
//     constructor() {
//         this.name = "waleed";
//         this.age = 22;
//     }
// }
// User.prototype.login = function () {
//     console.log("user loggedIn.")
// }

// 12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     login() {
//         console.log(this.name + " logged in");
//     }
// }
// const u1 = new User("Ali");
// const u2 = new User("Sara");

// console.log(u1.login === u2.login); 


// SECTION 5: call, apply, bind

// 	13.	Create a function that prints this.name.
// 14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it

// function printName() {
//     console.log(this.name)
// }
// let user = {
//     name: "waleed"
// }
// printName.call(user)
// printName.apply(user)
// let fnc = printName.bind(user)
// fnc()


// 15.	Borrow a method from one object and run it for another object using call.

// let user1 = {
//     name: "waleed",
//     print: function () {
//         console.log(this.name)
//     }
// }

// let user2 = {
//     name : "Muhammad",
// }
// user1.print.call(user2)