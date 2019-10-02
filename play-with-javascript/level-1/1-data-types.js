

/*

 data-types 
 --------------
 
    a. simple / primitives ==> values
        1. string
        2. number
        3. boolean
        4. undefined
     a. complex / refrences ==> objects
        ....
*/

//-------------------------------------------
// a. simple / primitives ==> values
//-------------------------------------------

//-------------------------------------------
// 1. undefined
//-------------------------------------------

var v;


//-------------------------------------------
// 2. string
//-------------------------------------------

var name1 = "Nag"
var name2 = 'Nag'
var dynamicString = `my name is ${name1}`
var multiLineString = `
    im from india,
    now in UAE
`;


//-------------------------------------------
// 3. number
//-------------------------------------------

var count = 10
var cost = 10.00


//-------------------------------------------
// 4. boolean
//-------------------------------------------

var isLunchReady = false

/*

 falsy values in javascipt :

    ==> false,0,"",null,undefined,NAN

REF: https://dorey.github.io/JavaScript-Equality-Table/

*/



//-------------------------------------------
// B. REFRENCE types  ==> object
//-------------------------------------------

/*

syntax:

var ref=new Consructor()

*/

//----------------------------------
// ES5 ==> class
//----------------------------------

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

//----------------------------------
// ES6 ==> class
//----------------------------------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(`im ${this.name}`);
    }
    sayAge() {
        console.log(`im ${this.age} old`);
    }
}
var p1 = new Person('Nag', 35);
/*
    imp-note :
    by default, all javascipt onjects ae extesible i.e we can add new props on fly
*/
p1.currentAddress = "abu dhabi"; // add new prop
delete p1.age; // delete prop
