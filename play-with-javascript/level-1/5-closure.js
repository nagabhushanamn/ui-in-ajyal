


/**
 * 
 * A closure is a function having access 
 * to the parent scope, 
 * even after the parent function has closed.
 * 
 */

//Ex.

function teach(sub) {
    console.log("teaching " + sub);
    let notes = sub + "-notes";
    let fun = "bla bla bla";
    function learn() {
        console.log('learning with ..' + notes);
    }
    console.log("teaching " + sub + " ends..");
    return learn;
}
let learnFunc = teach('javascript') //.....
learnFunc();


//----------------------------------------------
// why /where we need closures ?
//----------------------------------------------

// e.g  counter module

/*
    count=0;
    increment()
    get()
*/



function init() {
    let count = 0;  // private vaiables
    function increment() {
        count++;
    }
    function get() {
        return count;
    }
    return {
        increment,
        get
    }
}

const counter=init();