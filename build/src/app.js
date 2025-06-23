"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const shopping_cart_handler_1 = require("./handlers/shopping-cart-handler");
const validator_1 = require("./utils/validator");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("Enter basket items (comma-separated):");
console.log(`Available items: ${(0, validator_1.getValidItems)().join(", ")}\n`);
// Prompt the user for input
rl.question("Your basket: ", (input) => {
    const rawItems = input.split(",");
    const basket = [];
    // Normalize and validate each item, adding valid ones to the basket
    for (let raw of rawItems) {
        const cleaned = raw.trim().replace(/^['"]+|['"]+$/g, ""); // Remove ' or "
        raw = cleaned; // Update raw to the cleaned value
        const item = (0, validator_1.normalizeItem)(raw);
        if ((0, validator_1.isValidItem)(item)) {
            basket.push(item);
        }
        else {
            console.log(`Skipping invalid item: "${raw.trim()}"`);
        }
    }
    // If the basket is empty, notify the user and exit
    const total = shopping_cart_handler_1.ShoppingCartHandler.calculateTotal(basket);
    console.log(`\n Final basket: ${basket.join(", ")}`);
    console.log(`Total price: £${(total / 100).toFixed(2)}\n`);
    // Close the readline interface
    rl.close();
});
