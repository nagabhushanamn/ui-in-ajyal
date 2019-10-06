"use strict"


//

// let getPrice = function () {
//     return 100 + 200;
// }

// or


// let getPrice = () => {
//     return 100 + 200;
// }

//-------------------------------------------------------------

// let getPrice = (count) => {
//     return count * (100 + 200);
// }

// or


// let getPrice = count => {
//     return count * (100 + 200);
// }


//-------------------------------------------------------------


// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }


//-------------------------------------------------------------


// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }

// or

// let getPrice = (count, tax) =>  count * (100 + 200) + tax;

//-------------------------------------------------------------

// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax;
//     return total
// }


//-------------------------------------------------------------
// when i should use arrow function ?
//-------------------------------------------------------------

//#1 - to keep compact function agument

// let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

// numbers.sort(function (x, y) {
//     return x - y;
// });

// or

// numbers.sort((x, y) => {
//     return x - y;
// });

// or

// numbers.sort((x, y) => x - y);


//-------------------------------------------------------------

//-------------------------------------------------------------



// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(`${this.name} : teaching...`);
//         // let askQues = function (q) {
//         //     console.log(`${this.name} : answeing - ${q}`);
//         // }
//         // or
//         let askQues = (q) => {
//             console.log(`${this.name} : answeing - ${q}`);
//         }
//         console.log(`${this.name} : teaching ends`);
//         return askQues;
//     }
// }

// let askQues = trainer.doTeach();

// // dynamic function binding
// askQues("Q1")
// askQues("Q2")

// let newTrainer = { name: 'sultan' }
// askQues.call(newTrainer, "Q3") // will not bind to new tainer



//-------------------------------------------------------


// Quiz-1

// console.log(this);
// let regFunc = function () {
//     console.log(this);
// }
// regFunc();

// /*
//     --> arrow-function always belongs/bind to ceator 
// */

// let arrFunc = () => {
//     console.log(this);
// }
// arrFunc();



//-------------------------------------------------------


// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     // let incAge = function () {
//     //     this.age++;
//     //     console.log(this.name + " => " + this.age);
//     // };
//     // setInterval(incAge.bind(this), 1000)


//     let incAge = () => {
//         this.age++;
//         console.log(this.name + " => " + this.age);
//     };
//     setInterval(incAge, 1000)


// }

// new Person('Riya', 4)

//-------------------------------------------------------

// invoice


// let inv = {
//     number: 111,
//     process: function () {
//         console.log("inv-" + this.number + " processed..");
//     }
// }

// let inv = {
//     number: 111,
//     process: () => {
//         console.log("inv-" + this.number + " processed..");
//     }
// }


//---------------------------------------------------------------


// let inv = {
//     number: 111,
//     process: function () {
//         console.log("inv-" + this.number + " processed partially");
//         let complete = function () {
//             console.log("inv-" + this.number + " processed completly");
//         }
//         return complete;
//     }
// }

// let inv = {
//     number: 111,
//     process: function () {
//         console.log("inv-" + this.number + " processed partially");
//         let complete = () => {
//             console.log("inv-" + this.number + " processed completly");
//         }
//         return complete;
//     }
// }


// let complete = inv.process();
// complete();
//---------------------------------------------------------------

