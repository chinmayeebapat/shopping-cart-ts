import 'jest';
import { ShoppingCartHandler } from '../../src/handlers/shopping-cart-handler';
import { ItemName } from '../../src/typings/basket';
jest.mock('../../src/constants/prices', () => ({
  ITEM_PRICES: {
    Apple: 35,
    Banana: 20,
    Melon: 50,
    Lime: 15,
  },
}));

describe('ShoppingCartHandler', () => {
  test('testCalculateTotalWithMixedItems', () => {
    const basket : ItemName[] = ['Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
    const total = ShoppingCartHandler.calculateTotal(basket);
    expect(total).toBe(35 + 20 + 50 + 30); // 35 for Apple, 20 for Banana, 50 for first Melon(1 free), 30 for Limes (2 paid, 1 free)
  });

  it("should apply BOGOF offer on melons", () => {
    const basket: ItemName[] = ["Melon", "Melon", "Melon"];
    const total = ShoppingCartHandler.calculateTotal(basket);
    expect(total).toBe(100); // 2 charged, 1 free => 50p * 2 = 100p
  });

  it("should apply 3-for-2 offer on limes", () => {
    const basket: ItemName[] = ["Lime", "Lime", "Lime"];
    const total = ShoppingCartHandler.calculateTotal(basket);
    expect(total).toBe(30); // only 2 charged => 15p * 2 = 30p
  });

  it("should return 0 for empty basket", () => {
    const basket: ItemName[] = [];
    const total = ShoppingCartHandler.calculateTotal(basket);
    expect(total).toBe(0);
  });

});
