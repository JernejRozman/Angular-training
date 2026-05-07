// One line comment
/*
Multiline comments
*/ 

/* 
  typeof
    - doesn't compile at runtime
    - can compare things with string
    - can be used as a typeguard ie check if something is of a cerntain type
    - can be replaced with === in certain cases
*/

function isString(x: any): x is string {
  return typeof x === "string";
}

console.log("Is the word pica a string? ", isString("pica"));

/*
   instanceof
    - tudi guard
    - isto kot instanceof v JS
    - preveri oz. pove če je neki nekega razreda
*/

class Animal {}
class Dog extends Animal {}

const myPet = new Dog();

console.log(myPet instanceof Dog);    // true

/*
  Discriminative Unions

  we can use it to extend types with an & to different types
*/


type MotorBike = {
  type: 'motorbike';
  fuel: 'petrol';
}

type Car = {
  type: 'car';
  doors: number;
  bootSize: number;
}

type Vehicle = {
  make: string;
  model: string;
  fuel: 'petrol' | 'diesel',
} & (Car | MotorBike);