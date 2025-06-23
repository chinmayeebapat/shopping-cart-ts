import readline from "readline";
import { ItemName } from "./typings/basket";
import { ShoppingCartHandler } from "./handlers/shopping-cart-handler";
import { isValidItem, normalizeItem, getValidItems } from "./utils/validator";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter basket items (comma-separated):");
console.log(`Available items: ${getValidItems().join(", ")}\n`);

// Prompt the user for input
rl.question("Your basket: ", (input) => {
  const rawItems = input.split(",");
  const basket: ItemName[] = [];

  // Normalize and validate each item, adding valid ones to the basket
  for (let raw of rawItems) {
    const cleaned = raw.trim().replace(/^['"]+|['"]+$/g, ""); // Remove ' or "
    raw = cleaned; // Update raw to the cleaned value
    const item = normalizeItem(raw);
    if (isValidItem(item)) {
      basket.push(item);
    } else {
      console.log(`Skipping invalid item: "${raw.trim()}"`);
    }
  }
  // If the basket is empty, notify the user and exit
  const total = ShoppingCartHandler.calculateTotal(basket);

  console.log(`\n Final basket: ${basket.join(", ")}`);
  console.log(`Total price: £${(total / 100).toFixed(2)}\n`);
  // Close the readline interface
  rl.close();
});
