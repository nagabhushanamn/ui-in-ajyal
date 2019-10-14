

// higher-order-programming



// me
function f1() {
    console.log("start progress-bar...");
    console.log("f1()")
    console.log("stop progress-bar...");
}

// you
function f2() {
    console.log("start progress-bar...");
    console.log("f2()");
    console.log("stop progress-bar...");
}

f1();
console.log("---------")
f2();

/*


  design issues
  --------------

  => code scattering / duplication
  => code tangling   / tight-coupling

*/