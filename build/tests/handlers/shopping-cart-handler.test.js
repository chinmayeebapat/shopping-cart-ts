"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const shopping_cart_handler_1 = require("../../src/handlers/shopping-cart-handler");
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
        const basket = ['Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
        const total = shopping_cart_handler_1.ShoppingCartHandler.calculateTotal(basket);
        expect(total).toBe(35 + 20 + 50 + 30); // 35 for Apple, 20 for Banana, 50 for first Melon(1 free), 30 for Limes (2 paid, 1 free)
    });
    it("should apply BOGOF offer on melons", () => {
        const basket = ["Melon", "Melon", "Melon"];
        const total = shopping_cart_handler_1.ShoppingCartHandler.calculateTotal(basket);
        expect(total).toBe(100); // 2 charged, 1 free => 50p * 2 = 100p
    });
    it("should apply 3-for-2 offer on limes", () => {
        const basket = ["Lime", "Lime", "Lime"];
        const total = shopping_cart_handler_1.ShoppingCartHandler.calculateTotal(basket);
        expect(total).toBe(30); // only 2 charged => 15p * 2 = 30p
    });
    it("should return 0 for empty basket", () => {
        const basket = [];
        const total = shopping_cart_handler_1.ShoppingCartHandler.calculateTotal(basket);
        expect(total).toBe(0);
    });
});
