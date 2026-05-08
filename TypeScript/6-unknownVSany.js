"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processData(data) {
    if (typeof data === 'string') {
        return data.toUpperCase();
    }
    else {
        // Handle other cases appropriately
        return "Invalid data";
    }
}
// No compilation error
const result = processData("Hello, TypeScript!");
function processDynamicData(data) {
    // No compilation error
    return data.toUpperCase();
}
// No compilation error, works as expected
const result1 = processDynamicData("Hello, TypeScript!");
console.log(result1); // Outputs: "HELLO, TYPESCRIPT!"
// No compilation error, but will cause a runtime error
const result2 = processDynamicData(12345);
console.log(result2); // Error: data.toUpperCase is not a function
//# sourceMappingURL=6-unknownVSany.js.map