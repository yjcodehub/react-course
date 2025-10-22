"use strict";
//Basics and Fundamentals of TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
//1. Variable Declarations
let message = "Hello, TypeScript!";
const pi = 3.14;
var isActive = true;
// console.log(message, pi, isActive);
//2. Functions with Type Annotations
function add(a, b) {
  return a + b;
}
const user = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};
// console.log(user.greet());
//4. Classes
class Animal {
  species;
  constructor(species) {
    this.species = species;
  }
  getSpecies() {
    return this.species;
  }
}
const dog = new Animal("Dog");
// console.log(dog.getSpecies());
//5. Generics
function identity(arg) {
  return arg;
}
// console.log(identity<number>(42));
//6. Enums
//# sourceMappingURL=tsmc.js.map
