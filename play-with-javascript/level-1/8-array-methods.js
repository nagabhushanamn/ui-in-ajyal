

let items = [
    { id: 1, name: 'item-1', price: 100.00 },
    { id: 2, name: 'item-2', price: 200.00 },
    { id: 3, name: 'item-3', price: 300.00 }
]

//-----------------------------------------------------------------

items.push({ id: 4, name: 'item-4', price: 400.00 })  // mutable
items.unshift({ id: 4, name: 'item-4', price: 400.00 }) // mutable
let newItems = items.concat({ id: 4, name: 'item-4', price: 400.00 }) // immutable

//-----------------------------------------------------------------

delete items[0]
items.splice(0, 1)
items.splice(1, 2)
items.splice(1, 2, { id: 4, name: 'item-4', price: 400.00 }, { id: 5, name: 'item-5', price: 500.00 })

//-----------------------------------------------------------------

let newArr = items.filter(function (item) {
    return item.price > 200;
})

//-----------------------------------------------------------------
let newArr = items.map(function (item, idx) {
    // console.log(idx);
    return item.name;
})

//-----------------------------------------------------------------

let total = items.reduce(function (v, nextItem) {
    // console.log(v)
    // console.log(nextItem)
    return v + nextItem.price;
}, 0)

console.log(total);

//-----------------------------------------------------------------

let bo = items.every(function (item) {
    return item.price >= 200
})
console.log(bo);


//-----------------------------------------------------------------


let bo = items.some(function (item) {
    return item.price >= 200
})
console.log(bo);


//-----------------------------------------------------------------


let result = items.find(function (item) {
    return item.price === 200;
})
console.log(result);


//-----------------------------------------------------------------


let result = items.findIndex(function (item) {
    return item.price === 200;
})
console.log(result);


//-----------------------------------------------------------------

let result = items.slice(0, 1)

//-----------------------------------------------------------------

items.forEach(function (item) {
    console.log(item);
})

