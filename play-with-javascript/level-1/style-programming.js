

/*

 style of programming
 --------------------

*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//--------------------------------------------
// imperative style  ( what + How )
//--------------------------------------------

// e.g
// function getEvens(inp) {
//     let out = [];
//     for (let i = 0; i < inp.length; i++) {
//         let n = inp[i];
//         if (n % 2 === 0)
//             out.push(n)
//     }
//     return out;
// }

// function getEvensWithMax(inp, max) {
//     let out = [];
//     for (let i = 0; i < inp.length; i++) {
//         let n = inp[i];
//         if (n % 2 === 0 && n > max)
//             out.push(n)
//     }
//     return out;
// }

// function getOdds(inp) {
//     let out = [];
//     for (let i = 0; i < inp.length; i++) {
//         let n = inp[i];
//         if (n % 2 !== 0)
//             out.push(n)
//     }
//     return out;
// }




//--------------------------------------------
// declrative style  ( what  )
//--------------------------------------------


// const util = {
//     filter: function (inp, predicate) {
//         let out = [];
//         for (let i = 0; i < inp.length; i++) {
//             let n = inp[i];
//             if (predicate(n))
//                 out.push(n)
//         }
//         return out;
//     }
// }


// function getEvens(inp) {
//     return util.filter(inp, function (item) {
//         return item % 2 === 0;
//     })
// }

// function getEvensWithMax(inp, max) {
//     return util.filter(inp, function (item) {
//         return item % 2 === 0 && item > max;
//     })
// }

// function getOdds(inp) {
//     return util.filter(inp, function (item) {
//         return item % 2 !== 0;
//     })
// }



//--------------------------------------------
// declarative style  ( what  )  with array   ===> FP
//--------------------------------------------

// function getEvens(inp) {
//     return inp.filter(function (item) {
//         return item % 2 === 0;
//     })
// }

// function getEvensWithMax(inp, max) {
//     return inp.filter(function (item) {
//         return item % 2 === 0 && item > max;
//     })
// }

// function getOdds(inp) {
//     return inp.filter(function (item) {
//         return item % 2 !== 0;
//     })
// }



//--------------------------------------------
// declarative style  ( what  )  with array   ===> FP
//--------------------------------------------

function getEvens(inp) {
    return inp.filter((item) => item % 2 === 0)
}

function getEvensWithMax(inp, max) {
    return inp.filter((item) => item % 2 === 0 && item > max)
}

function getOdds(inp) {
    return inp.filter((item) => item % 2 !== 0)
}

