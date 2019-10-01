


let numbers=[1,2,3,5,6,7,8,9]

// numbers.forEach(i=>{
//     console.log(i);  
// })

let newNumbers=numbers.map(i=>{
    return i*i;
})

newNumbers.forEach(i=>{
    console.log(i);  
})