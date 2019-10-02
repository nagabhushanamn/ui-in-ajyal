

/*

 FP => Functional Progamming

*/



// How to create function in javascipt lang?

// ----------------------------------------------------
// way-1 : function declaation / Named  function
// ----------------------------------------------------

// to  create function statically

/*
    => always get hoist with function-object
    => function-obj got created at scope creation-phase
*/

// console.log(add(12, 13));



// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12, 13));


// ----------------------------------------------------
// way-2 : function expression / Anonymous  function
// ----------------------------------------------------

// ==> to create function dynamically

// console.log(add(12, 13)); // error

// let add = function (n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12, 13));



// ----------------------------------------------------
// function parameters
// ----------------------------------------------------

// function func(a, b, c, d, e) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     console.log(arguments[3]);
//     console.log(arguments[4]);
// }
// func(12, 13, 14, 15);


// e.g

// function sum() {
//     let len = arguments.length,
//         i = 0,
//         result = 0;
//     while (i < len) {
//         result += arguments[i]
//         i++;
//     }
//     return result;
// }



// ----------------------------------------------------
// Quiz
// ----------------------------------------------------

// function getFood() {
//     return "get out";
// }

// function getFood(pay) {
//     if (arguments.length === 0) return "move out";
//     return "biryani";
// }

// console.log(getFood(221));

// ----------------------------------------------------
// function with default params
// ----------------------------------------------------

// function func(a = undefined, b = 2) {
//     console.log(a)
//     console.log(b)
// }
// func(undefined,20);



// ----------------------------------------------------
// function with rest param
// ----------------------------------------------------

// function func(a, b, c, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.dir(arguments)
//     console.log(rest);
// }
// func(1, 2, 3, 4, 5, 6, 7)


// ----------------------------------------------------
// functional programming principls
// ----------------------------------------------------


/**
 *  #1 : function is a object
 *       i.e we can assign function to any variable directly
 */

// function greet() {
//     console.log("hello..");
// }

// let sayHello = greet;
// sayHello();


/**
 *
 * #2 : paratemer of function can be other function
 *
 */

function greet(f) {
    console.log("------------------------");
    if (f)
        f();
    else console.log("i dono how to greet u..");
    console.log("------------------------")
}

let en = function () {
    console.log("hello...");
}
let es = function () {
    console.log("ola..");
}
// greet();
// greet(en);
// greet(es);



// e.g

// let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// /*
//     sort ==> compare and swap
// */
// let asc = function (x, y) {
//     return x - y;
// }
// let desc = function (x, y) {
//     return y - x;
// }
// // numbers.sort(asc);
// numbers.sort(desc);
// console.log(numbers);  



//--------------------------------------------------

/**
 *
 * #3 : return value of function can be other function
 *
 */


function teach() {
    console.log("teaching javascript..");
    let learn = function () {
        console.log("learning javascript..");
    }
    //learn();
    console.log("teaching javascript ends..");
    return learn;
}

let learnFunc=teach();
learnFunc()
learnFunc();