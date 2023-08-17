"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const exchangeRate = 1.15; // Example exchange rate: 1 USD to EUR
rl.question('Enter the amount in USD: ', (answer) => {
    const usdAmount = parseFloat(answer);
    if (!isNaN(usdAmount)) {
        const convertedAmount = usdAmount * exchangeRate;
        console.log(`${usdAmount} USD is equal to ${convertedAmount.toFixed(2)} EUR`);
    }
    else {
        console.log('Invalid input. Please enter a number.');
    }
    rl.close();
});
