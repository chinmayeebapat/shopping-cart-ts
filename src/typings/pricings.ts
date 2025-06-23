import { ItemName } from "./basket";

// This type defines a mapping from item names to their prices.
// It uses the ItemName type to ensure that only valid item names are used as keys.
export type PricingMap = Record<ItemName, number>;
