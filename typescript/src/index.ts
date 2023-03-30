// ------------ Constants & variables ------------

const myName: string = "David"
let myAge: number = 34

// ------------ Functions ------------

// -- Example 1

function sayHelloWorld(): string {
  let message: string = "Hola Mundo, soy " + myName
  message += " y tengo " + myAge + " años"

  return message
}

console.log(sayHelloWorld())

// -- Example 2

// Classic version
function add(a: number, b: number): number {
  return a + b
}

// Arrow version
const addArrow = (a: number, b: number): number => a + b

let num1: number = 3
let num2: number = 8

console.log(add(num1, num2)) // 11
console.log(addArrow(num1, num2)) // 11

// ------------ Tuples ------------

let ourTuple: [number, boolean, string]
ourTuple = [8, true, "Me duele la cara de ser tan guapo"]

// ------------ Enums ------------

enum CardinalDirections {
  North,
  East,
  South,
  West
}

let direction: CardinalDirections = CardinalDirections.South

// ---------------- Classes & Interfaces ----------------

// -- Example 1

interface IDate {
  day: number
  month: number
  year: number
}

const today: IDate = {
  day: 30,
  month: 30,
  year: 2023
}

// -- Example 2

interface ICar {
  type: string,
  model: string,
  year?: number,
  run: (speed: number) => number
}

const myCar: ICar = {
  type: "Tesla",
  model: "Model D",
  run: (speed) => {
    console.log("brrum, brrum")
    return speed + 10
  }
}

myCar.run(40) // 50

// -- Example 3

class Horse {
  name: string
  color: string
  age: number
  speed: number

  constructor(name: string, color: string, age: number) {
    
    // Properties
    this.name = name
    this.color = color
    this.age = age
    this.speed = 0
  }

  // Methods
  run(): void {
    this.speed += 10
  }
}

const myHorse1 = new Horse("Babieca", "Negro azabache", 5)
console.log(myHorse1.name) // "Babieca"

const myHorse2 = new Horse("Sombragrís", "Blanco", 350)
console.log(myHorse2.name) // "Sombragrís"

myHorse1.run()
console.log(myHorse1.speed) // 10

// ---------------------------------------

class Pegasus extends Horse {
  altitude: number

  constructor(name: string, color: string, age: number, altitude: number) {
    super(name, color, age)

    // Extending
    this.altitude = altitude
  }

  fly() {
    this.altitude += 5
  }
}

const myPegasus = new Pegasus("Naoki", "Plateado", 78, 300)
console.log(myPegasus.name)

myPegasus.run()
myPegasus.run()
myPegasus.run()
console.log(myPegasus.speed) // 30

myPegasus.fly()
myPegasus.fly()
console.log(myPegasus.altitude) // 310

// -- Example 4

interface Shape {
  height: number,
  width?: number,
  getArea: () => number
}

// Implementing
class Rectangle implements Shape {
  height: number
  width: number

  constructor(height: number, width: number) {
    this.height = height
    this.width = width
  }

  getArea(): number {
    return this.height * this.width
  }
}

class Square implements Shape {
  height: number

  constructor(height: number) {
    this.height = height
  }

  getArea() {
    return this.height * this.height
  }
}

// Extending
class SuperSquare extends Square {
  private name: string

  constructor(height: number, name: string) {
    super(height)
    this.name = name
  }

  sayMyName(): void {
    console.log("Soy " + this.name)
  }
}

const myRectangle = new Rectangle(3, 4)
console.log(myRectangle.getArea()) // 12

const mySquare = new Square(3)
console.log(mySquare.getArea()) // 9

const mySuperSquare = new SuperSquare(5, "Marty")
console.log(mySuperSquare.getArea()) // 25
mySuperSquare.sayMyName() // "Soy Marty"

// -- Example 5

interface Spider {
  // Spider properties & methods
}
interface Human {
  // Human properties & methods
}

class Spiderman implements Spider, Human {
  // Spider properties & methods
  // Human properties & methods
}

// ------------ Casting ------------

let x: number = 345;
let xString = String(x);

console.log(xString.length);

let p: string = "345";
let pNumber = Number(p);

// ------------ Generics ------------

function createPair<type1, type2>(a: type1, b: type2): [type1, type2] {
  return [ a, b ]
}

console.log(createPair<string, number>("abcd", 45)) // ["abcd", 45]
console.log(createPair<boolean, string>(true, "jkl")) // [true, "jkl"]
