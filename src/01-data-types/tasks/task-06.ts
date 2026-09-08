/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
  productCode: string;
  productName: string;
  price: number;
  stock: number;
  weight: number;
  rating: number;
  isDiscounted: boolean;
};

const product1: Product = {
  productCode: "PROD-101",
  productName: "Wireless Mouse Logitech",
  price: 250000,
  stock: 45,
  weight: 0.15,
  rating: 4.8,
  isDiscounted: true
};

const product2: Product = {
  productCode: "PROD-102",
  productName: "Mechanical Keyboard RGB",
  price: 850000,
  stock: 18,
  weight: 0.95,
  rating: 4.7,
  isDiscounted: false
};

const product3: Product = {
  productCode: "PROD-103",
  productName: "USB-C Hub 6-in-1",
  price: 350000,
  stock: 0,
  weight: 0.08,
  rating: 4.5,
  isDiscounted: true
};

console.log("Marketplace Product Data");
console.log(product1);
console.log(product2);
console.log(product3);
