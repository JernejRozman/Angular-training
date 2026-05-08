"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Read input.txt from the same folder as this TypeScript file
const inputPath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(inputPath, "utf-8");
function getPassword(data) {
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
        }
        else if (direction === "L") {
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
//# sourceMappingURL=8-AOC2025D1P1.js.map