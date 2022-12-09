const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
   return cats.push(name)
}

function  destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function  destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.push(name)
    return copyOfCats
}

function prependCat(name) {
    const copyOfCat = cats.slice()
    copyOfCat.unshift(name)
    return copyOfCat
}

function removeLastCat() {
    const copyOfKitty = cats.slice()
    copyOfKitty.pop()
    return copyOfKitty
}

function removeFirstCat() {
    const copyOfKitties = cats.slice()
    copyOfKitties.shift()
    return copyOfKitties
}