




//------------------------------------------------------
// de-structuring
//------------------------------------------------------

// a. object

// let person = {
//     name: 'Nag',
//     age: 35
// }

//------------------------------------------------------
// let myName=person.name;
// let myAge=person.age

// or

// let { name: myName, age: myAge } = person;

//------------------------------------------------------

// let { name: name, age: age } = person;

// or

// let { name, age } = person;

//------------------------------------------------------

// let name;
// let age;

// ({ name, age } = person);


//------------------------------------------------------

// b. array 

let numbers = [10, 20, 30, 40, 50, 60, [70, 80]]

// let n1=numbers[0]
// let n2=numbers[1]
// let n3=numbers[2]

// or

let [n1, n2, n3, n4 = 400, , n6, [n7, n8]] = numbers