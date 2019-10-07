



//#1


// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz()

// #2

// function foo() { throw Error("oops") }
// function bar() { foo() }
// function baz() { bar() }
// baz()


// #3

// function foo(){foo()}
// foo();


// #4

// function longRunning(){
//     var i=0;
//     while(i<10){console.log("im long....."); i++ }
// }

// function shortRunning(){
//     console.log("im short");  
// }

// longRunning();
// shortRunning();


// #5
//-------------------------------------------------------

// on event, how browser executes code ?

/*
    <button class="veg">veg-1</button>
    <button class="veg">veg-2</button>
    <button class="non-veg">non-veg-1</button>
*/

// console.log("initial....");  
// $.on('.veg','click',function vegHandler(e){
//     console.log("handling veg event");  
// })
// $.on('.non-veg','click',function nonVegHandler(e){
//     console.log("handling non-veg event");  
// })
// console.log("cont.. with other wk...")

// function longRunning(){
//     var i=0;
//     while(i<10){console.log("im long....."); i++ }
// }
// longRunning();


//-------------------------------------------------------


// How javascript handling IO ?

/*

    --> req to server

*/


// console.log("initial script..")

// setTimeout(function callback(){
//     console.log("aftter timeout..");  
// },5000);

// console.log("cont.. with other wk...")
// function longRunning(){
//     var i=0;
//     while(i<10){console.log("im long....."); i++ }
// }
// longRunning();
