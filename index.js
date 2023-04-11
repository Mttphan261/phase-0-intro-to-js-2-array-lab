// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catName) {
    cats.push(catName)
}

function destructivelyPrependCat(catName) {
    cats.unshift(catName)
}

function destructivelyRemoveLastCat(catName) {
    cats.pop(catName)
}

function destructivelyRemoveFirstCat(catName) {
    cats.shift(catName)
}

function appendCat(catName) {
    const newCatArray = [...cats, catName]
    return newCatArray
}

function prependCat(catName) {
    const newCatArray = [catName, ...cats]
    return newCatArray
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}

function removeFirstCat() {
    return cats.slice(1)
}























// const cats = ["Milo", "Otis", "Garfield"];
// function destructivelyAppendCat(name) {
//     cats.push (name)
// }
// function destructivelyPrependCat(name) {
//     cats.unshift(name)
// }
// function destructivelyRemoveLastCat(name) {
//     return cats.pop(name)
// }
// function destructivelyRemoveFirstCat(name) {
//     cats.shift(name)
// }
// function appendCat(name) {
//     return [...cats, (name)]
// }
// function prependCat(name) {
//     return [(name), ...cats]
// }
// function removeLastCat() {
//     return cats.slice(0, -1);
// }
// function removeFirstCat() {
//     return cats.slice(1)
// }

// console.log(destructivelyRemoveLastCat())