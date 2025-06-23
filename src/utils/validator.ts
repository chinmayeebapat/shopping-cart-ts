import { ItemName } from "../typings/basket";

const validItems: ItemName[] = ["Apple", "Banana", "Melon", "Lime"];

// This function checks if the input string is a valid item name.
// It normalizes the input and checks against the list of valid items.
export function isValidItem(input: string): input is ItemName {
  const normalized = normalizeItem(input);
  return validItems.includes(normalized as ItemName);
}

// This function normalizes the input string by trimming whitespace,
// converting it to lowercase, and capitalizing the first letter.
export function normalizeItem(input: string): string {
  const trimmed = input.trim().toLowerCase();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

// This function returns the list of valid item names.
// It can be used to display available items to the user.
export function getValidItems(): ItemName[] {
  return validItems;
}
