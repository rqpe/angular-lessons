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

myCar.run(40)

// -- Example 2

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

  getArea() {
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
