// ------------ Constants & variables ------------

const PI = 3.14159

let myAge = 32
let myName = "Gladiador"

console.log(typeof 32)

// ------------ Arrays ------------

const elements = [ 45, "Tomate", true ]
console.log(elements[1])

const fruits = ["Apple", "Tomato", "Strawberry"]
const bittedFruits = fruits.map(fruit => fruit.substr(1, fruit.length-2))

console.log(bittedFruits)

// ------------ Objects ------------

const hero = {
    name: "Capitán Sevilla",
    year: 1983,
    superpower: "Cantar flamenco"
}

console.log(hero.year)

hero.year = 1981
console.log(hero.year)

// ------------ Functions ------------

// Old function notation
function sayHelloAndFirstLetter(palabra) {
    return palabra.substr(0, 1)
}

// Modern function notation
const sayHelloAndFirstLetterArrow = palabra => palabra.substr(0, 1)

sayHelloAndFirstLetter("jamon")
sayHelloAndFirstLetterArrow("jamon")
