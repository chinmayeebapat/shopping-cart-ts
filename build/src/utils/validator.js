"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidItem = isValidItem;
exports.normalizeItem = normalizeItem;
exports.getValidItems = getValidItems;
const validItems = ["Apple", "Banana", "Melon", "Lime"];
// This function checks if the input string is a valid item name.
// It normalizes the input and checks against the list of valid items.
function isValidItem(input) {
    const normalized = normalizeItem(input);
    return validItems.includes(normalized);
}
// This function normalizes the input string by trimming whitespace,
// converting it to lowercase, and capitalizing the first letter.
function normalizeItem(input) {
    const trimmed = input.trim().toLowerCase();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}
// This function returns the list of valid item names.
// It can be used to display available items to the user.
function getValidItems() {
    return validItems;
}
