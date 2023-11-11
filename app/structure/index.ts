// Variable
let age: number = 20;

// Array
let fruits: string[] = ["Melons", "Pineapple", "Apples"];

// Functions
function printOutFullName(fName: string, lName: string): void {
  console.log(`${fName} ${lName}`);
  return;
}

// Objects

interface Person {
  fName: string;
  lName: string;
  age: number;
  height: number;
  greetings: () => void;
}

let John: Person = {
  fName: "John",
  lName: "Mwangi",
  greetings: () => console.log(`Hello from a function`),
  age: 12,
  height: 156,
};
