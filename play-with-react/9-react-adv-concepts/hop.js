

// higher-order-programming



// me
// function f1() {
//     console.log("start progress-bar...");
//     console.log("f1()")
//     console.log("stop progress-bar...");
// }

// // you
// function f2() {
//     console.log("start progress-bar...");
//     console.log("f2()");
//     console.log("stop progress-bar...");
// }

// f1();
// console.log("---------")
// f2();

/*


  design issues
  --------------

  => code scattering / duplication
  => code tangling   / tight-coupling

*/

// DRY ( DONOT REPEAT YOURSELF ) ==> try to re-use

/*

 2 ways

 ==> inheritance
 ==> composition

*/


//----------------------------------------
// function compostion
//----------------------------------------

function f1() {
    console.log("f1()");
}

function f2() {
    console.log("f2()");
}
// higher-order-function  ===> // higher-order-programming
function wrapProgress(f) {
    return function () {
        console.log("start progress-bar...");
        f();
        console.log("stop progress-bar...");
    }
}
function wrapSec(f) {
    return function () {
        console.log("sec check..")
        f();
    }
}

let f1WithProgess = wrapProgress(f1);
// f1WithProgess();
let f1WithSecAndProgress=wrapSec(f1WithProgess)
f1WithSecAndProgress()

// let f2WithProgress = wrapProgress(f2);
// f2WithProgress();

