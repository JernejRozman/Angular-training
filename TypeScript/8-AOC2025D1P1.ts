import * as fs from "fs";
import * as path from "path";

// Read input.txt from the same folder as this TypeScript file
const inputPath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(inputPath, "utf-8");

function getPassword(data: string): number {
    let position = 50;
    let count = 0;

    const lines = data
        .trim()
        .split("\n")
        .map(line => line.trim());

    for (const line of lines) {
        const direction = line[0];
        const value = parseInt(line.slice(1));

        if (direction === "R") {
            position = (position + value) % 100;
        } else if (direction === "L") {
            position = (position - value + 100) % 100;
        }

        if (position === 0) {
            count++;
        }
    }

    return count;
}

const result = getPassword(input);

console.log("Password:", result);