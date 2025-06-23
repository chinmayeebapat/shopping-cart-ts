import { ItemName, BasketItemCount } from "../typings/basket";
import { ITEM_PRICES } from "../constants/prices";

export class ShoppingCartHandler {
  static calculateTotal(basket: ItemName[]): number {
    // Initialize itemCount with zero for each item 
    const itemCount: BasketItemCount = {
      Apple: 0,
      Banana: 0,
      Melon: 0,
      Lime: 0,
    };
    // Count the occurrences of each item in the basket
    for (const item of basket) {
      itemCount[item]++;
    }
    let total = 0;

    // Calculate the total price based on the item counts
    // Each Apple costs 35p, each Banana costs 20p, each Melon costs 50p, and Limes are 15p each
    total += itemCount.Apple * ITEM_PRICES.Apple; 
    total += itemCount.Banana * ITEM_PRICES.Banana;

    // Every second Melon is half price.
    // If there are an odd number of Melons, the last one is full price.
    total += Math.ceil(itemCount.Melon / 2) * ITEM_PRICES.Melon;

    // Every third Lime is free.
    const limeGroups = Math.floor(itemCount.Lime / 3);
    const limeLeft = itemCount.Lime % 3;//0
    total += (limeGroups * 2 + limeLeft) * ITEM_PRICES.Lime;
    return total;
  }
}
