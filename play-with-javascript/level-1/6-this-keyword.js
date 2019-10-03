
"use strict"


//---------------------------------------
// Quiz
//---------------------------------------

// let pName = "global";
let person = {
    pName: 'Nag', // obj's property..
    sayName: function () {
        // let pName = "local";
        console.log("im " + this.pName);
    }
}
person.sayName();



//----------------------------------------
// function binding
//----------------------------------------

//-----------------------------------
// a. static function binding
//-----------------------------------

function sayNameForAll() {
    console.log(this);
    console.log("im " + this.name);
}

let p1 = {
    name: 'Nag',
    sayName: sayNameForAll
}

let p2 = {
    name: 'Abu',
    sayName: sayNameForAll
}

sayNameForAll(); // will throw error. this --> undefined

p1.sayName();
p2.sayName();


//-----------------------------------
// b. dynamic function binding
//-----------------------------------

// Ajyal

function doTeach(sub, duration, location) {
    console.log(`${this.name} teaching ${sub} in ${location} for ${duration} days`);
}


// doTeach('javascript', 40, 'abu dhabi'); // error

let tnr = { name: 'Nag' }

tnr.doTeach = doTeach;
tnr.doTeach('javascript', 40, 'abu dhabi');

// way-1:
doTeach.call(tnr, 'javascript', 40, 'abu-dhabi');

// way-2:
doTeach.apply(tnr, ['javascript', 40, 'abu-dhabi'])

//way-3:
let newF = doTeach.bind(tnr, 'javascript')
newF(3, 'india')
newF(40, 'UAE');