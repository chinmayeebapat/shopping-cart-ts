# Shopping Cart CLI (TypeScript)

This is a simple CLI-based shopping cart written in **TypeScript** that calculates the total price of a basket of items with custom pricing rules and offers.

--- 

## Features

- Enter basket items dynamically (all at once)
- Supports quoted, unquoted, and whitespace-tolerant input
- Applies promotional offers:
  - **Apple**: 35p each
  - **Banana**: 20p each
  - **Melon**: 50p each – **Buy One Get One Free**
  - **Lime**: 15p each – **3 for the price of 2**
- Clean architecture with separate modules
- Fully tested with **Jest**

---

## Project Structure

shopping-cart-ts/
├── src/
│ ├── app.ts # CLI entry point
│ ├── constants/pricing.ts # Item pricing
│ ├── handlers/shoppingCartHandler.ts # Business logic
│ ├── utils/validator.ts # Input validation
│ └── typings/ # Type definitions
├── tests/ # Jest test cases
│ └── shoppingCartHandler.test.ts
├── jest.config.js
├── tsconfig.json
├── package.json
└── README.md


---

## Getting Started
1. Clone or Download

git clone https://github.com/your-username/shopping-cart-ts.git
cd shopping-cart-ts

2. Install Dependencies
npm install

3. Run the App
npm run start

4. Run Test Cases
npm run test

# Example input (quoted/unquoted, spaced or not):
'Apple', 'Banana', Melon, melon , Lime,   lime , lime

# Sample Output
Final basket: Apple, Banana, Melon, Melon, Lime, Lime, Lime
Total price: £1.85

# Requirements
1. Node.js ≥ 14
2. TypeScript
3. Jest (installed as devDependency)

# Notes
1. Input is case-insensitive.
2. Invalid items are skipped with a warning.
3. Prices are in pence but displayed in pounds (e.g., 185 → £1.85).

# Author
Chinmayee Bapat