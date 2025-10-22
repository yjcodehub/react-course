//Basics and Fundamentals of TypeScript

//1. Variable Declarations
let message: string = "Hello, TypeScript!";
const pi: number = 3.14;
var isActive: boolean = true;

// console.log(message, pi, isActive);
//2. Functions with Type Annotations
function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(5, 10));
//3. Interfaces
interface Person {
  name: string;
  age: number;
  greet(): string;
}
const user: Person = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};
// console.log(user.greet());
//4. Classes
class Animal {
  private species: string;
  constructor(species: string) {
    this.species = species;
  }
  public getSpecies(): string {
    return this.species;
  }
}
const dog = new Animal("Dog");
// console.log(dog.getSpecies());
//5. Generics
function identity<T>(arg: T): T {
  return arg;
}
// console.log(identity<number>(42));

//6. Enums
enum Color {
  Red,
  Green,
  Blue,
}
// console.log(Color.Green);
//7. Type Aliases
type ID = string | number;
let userId: ID = "user123";
userId = 456;
// console.log(userId);
//8. Tuples
let tuple: [string, number];
tuple = ["Age", 25];
// console.log(tuple);
//9. Union Types
function formatInput(input: string | number): string {
  return `Input: ${input}`;
}
// console.log(formatInput("Test"));
// console.log(formatInput(100));

//10. Type Assertions
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
// console.log(strLength);

//12. Decorators (Example)
/* function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}
class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}
const calculator = new Calculator(); */
// console.log(calculator.add(2, 3));
//13. Async/Await with TypeScript
async function fetchData(url: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}
// fetchData("https://api.example.com").then(console.log);
