"use strict";
// One line comment
/*
Multiline comments
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* typeof
    - doesn't compile at runtime
    - can compare things with string
    - can be used as a typeguard ie check if something is of a cerntain type
    - can be replaced with === in certain cases
*/
function isString(x) {
    return typeof x === "string";
}
console.log("Is the word pica a string? ", isString("pica"));
//# sourceMappingURL=5-typeOfInstanceOfDiscriminatedUnions.js.map