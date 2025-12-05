// SECTION 1: OOPS Thinking with Objects

// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.

// let laptop = {
//     brand: "Dell",
//     price: 50000,
//     start: function(){
//         console.log("Laptop started.")
//     }
// }
// laptop.start()

// 2.	Add one more method to the same object that increases the price by 10 percent.

// let laptop = {
//     brand: "Dell",
//     price: 50000,
//     start: function () {
//         console.log("Laptop started.")
//     },
//     increase: function () {
//         this.price = Math.floor(this.price *= 1.1)
//         return this.price
//     }
// }
// laptop.increase()
// console.log(laptop);

// laptop.start()


// 3.	Now imagine you need 10 laptops with same structure but different data.
//write down (in words or code) what problems you will face if you keep using plain objects.

//answer: Our code will become longer and clutter for every item we have to create a new object if we create normal to avoid this we use class constructor for cleaner and readable code.


// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.

// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }
// }
// Employee.prototype.showDetails = function () {
//     console.log(`${this.name} and salary ${this.salary}`)
// }
// let e1 = new Employee("asad",50500)
// let e2 = new Employee("nasir",19500)
// e1.showDetails()
// e2.showDetails()


// 5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.

// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }
// }

// Employee.prototype.showDetails = function () {
//     console.log(`${this.name} and salary ${this.salary}`)
// }
// let e1 = new Employee("asad",50500)
// let e2 = new Employee("nasir",19500)
// let e3 = new Employee("javed",35500)
// e2.salary = 22500;
// console.log(e1);
// console.log(e2);
// console.log(e3);


// 6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?
//it is more cleaner and readable way to create objects and easy one than manually create objects again and again we pass params in class constructor and we can create as many objects as we want in simple way.


// SECTION 3: Constructor and Initialization

// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 8.	Inside the constructor, store both values using this.
// 9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.
//because every object is unique if we change in one second will not change

// class BankAccount {
//     constructor(accountHolderName, balance) {
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }
// }
// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount
// }
// let ac1 = new BankAccount("waleed",14000)
// let ac2 = new BankAccount("zain",12000)
// ac1.deposit(6000)
// console.log(ac1);
// console.log(ac2);



// SECTION 4: Understanding this (Very Important)

// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 12.	Call the method normally and observe the output.
// 13.	Store the method in a separate variable and call it
// 14.	Modify the code so that this works correctly again.
// let profile = {
//     username: "Waleed123",
//     printName: function(){
//         console.log(this.username)
//     }
// }
// let fn = profile.printName
// fn()
// profile.printName()


// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.
//prototype approach is best because we add methods inside shared memory so all objects will pick from it soit save space when users increase.

// class Vehicle {
//     constructor(type, wheels) {
//         this.type = type;
//         this.wheels = wheels;
//     }
// }
// Vehicle.prototype.describe = function () {
//     console.log(`${this.type} and wheels ${this.wheels}`);
// }
// let v1 = new Vehicle("car", 4)


// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.
//when we only print this.brand inside func it return undefined in func this refer to window in window there is no brand so it will give undefined using call method we make any other object value to this.brand so it will give value now of brand

// function showBrand(){
//     console.log(this.brand)
// }
// let obj1 = {
//     brand: "Bata"
// }
// let obj2 = {
//     brand : "Services"
// }
// showBrand.call(obj1)
// showBrand.call(obj2)

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.
//apply accept two parameters one is this value other is array which contains all parameters values

// function introduce(city, role) {
//     console.log(city, role, this.name)
// }
// let obj1 = {
//     name: "Waleed",
// }
// introduce.apply(obj1, ["Isb", "Developer"])



// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.
//bind not directly execute function it bind this value and it return a new function with this contain value we can save it and call it later when we want 

// function greet(){
//     console.log(`Hello ${this.name}`)
// }
// let user = {
//     name: "Waleed",
// }
// let ans = greet.bind(user)
// ans()