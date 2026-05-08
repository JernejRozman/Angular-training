function processData(data: unknown): string {
  if (typeof data === 'string') {
    return data.toUpperCase();
  } else {
    // Handle other cases appropriately
    return "Invalid data";
  }
}

// No compilation error
const result = processData("Hello, TypeScript!");



function processDynamicData(data: any): string {
  // No compilation error
  return data.toUpperCase(); 
}

// No compilation error, works as expected
const result1 = processDynamicData("Hello, TypeScript!"); 
console.log(result1); // Outputs: "HELLO, TYPESCRIPT!"

// No compilation error, but will cause a runtime error
const result2 = processDynamicData(12345); 
console.log(result2); // Error: data.toUpperCase is not a function