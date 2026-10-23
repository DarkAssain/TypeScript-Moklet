/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. 
 * Every product added to the shopping cart stores the product code, product name, unit price, 
 * quantity purchased, and whether the product is eligible for free shipping.
 * Today, one customer added the following products to the cart.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.
 * 2. Store the product data in a single collection.
 * 3. Display the product data using console.log.
 */

type Product = {
  code: string;
  name: string;
  price: number;
  quantity: number;
  freeShipping: boolean;
};

const activeBasket: Product[] = [
  { 
    name: "Mechanical Keyboard", 
    code: "KB001", 
    price: 850000, 
    freeShipping: true, 
    quantity: 1 
  },
  { 
    name: "Wireless Mouse", 
    code: "MS002", 
    price: 275000, 
    freeShipping: true, 
    quantity: 2 
  },
  { 
    name: "External SSD 1TB", 
    code: "HD003", 
    price: 1650000, 
    freeShipping: false, 
    quantity: 1 
  },
  { 
    name: "Gaming Headset", 
    code: "HP004", 
    price: 720000, 
    freeShipping: true, 
    quantity: 1 
  }
];

console.log("--Active Shopping Basket--");
console.log(activeBasket);
