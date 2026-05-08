"use strict";
// One line comment
/*
Multiline comments
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
  typeof
    - doesn't compile at runtime
    - can compare things with string
    - can be used as a typeguard ie check if something is of a cerntain type
    - can be replaced with === in certain cases
*/
function isString(x) {
    return typeof x === "string";
}
console.log("Is the word pica a string? ", isString("pica"));
/*
   instanceof
    - tudi guard
    - isto kot instanceof v JS
    - preveri oz. pove če je neki nekega razreda
*/
class Animal {
}
class Dog extends Animal {
}
const myPet = new Dog();
console.log(myPet instanceof Dog); // true
//# sourceMappingURL=5-typeOfInstanceOfDiscriminatedUnions.js.map