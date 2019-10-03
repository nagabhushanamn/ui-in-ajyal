



/*
 *
 *  scope / execution-context
 *  --------------------------
 *
 *  ==> memory/stack-frame with args & local variable(s)
 *
 * phase1 : creation / push
 *          note: any variable which is declared with 'var' keyword,
 *                always get hoisted with default value  ( undefined )
 * phase2 : execution / pop
 *
 *
 *
    * ---------------------------------------------------
    *
    * imp-note :
    *
    * => .js-runtime always creates one global-scope
    *    by default
    * 
    * => every function invocation also created new-scope,
    *    which is child of in which scope that function has declared
    *
    */




console.log("- im here -");


var v = 12;
console.log(v);


//---------------------------------
// Quiz-1
//---------------------------------

var v = 12;

function f1() {
    console.log(v);
    var v = 13;
}
f1(); // f1-scope  <--- global-scope


//---------------------------------
// Quiz-2
//--------------------------------

var v = 12;
function f1() {
    function f2() {
        console.log(v);
    }
    var v = 13;
    f2(); // f2-scope <-- f1-scope
}
f1(); // f1-scope <-- global-scope


//---------------------------------
// Quiz-3
//--------------------------------

var v=12;
var v=13;

console.log(v);  


//---------------------------------
// Quiz-4
//--------------------------------

var v = 12;
if (true) {
    var v = 13;
}
console.log(v);  


//----------------------------------------------------------
// problems with 'var' keyword
//----------------------------------------------------------

/**
 * 
 * => always hoist
 * => re-declare same variable within scope
 * => No block-scope
 * 
 * soln : using 'let' & 'const' keywords with block-scope ( ES6 )
 * 
 */

//----------------------------------------------------------

console.log(v);
let v = 12;  

//----------------------------------------------------------

let v = 12;
let v = 13;

//----------------------------------------------------------

let v = 12;
if (true) {
    let v = 13;
}
console.log(v);  

//----------------------------------------------------------

const trainer = {
    name: 'dilip'
}

// trainer = null; // error
trainer.name = "Nag"


//----------------------------------------------------------

// summary

/**
 * 
 *  => use 'let' keyword, for mutable reference
 *  => use 'const' keyword, for immutable reference
 *  => try to avoid 'var' keyword, for better code
 * 
 */
