/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid 
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRicePrice: number = 18000;
const friedRiceQuantity: number = 3;

const waterPrice: number = 5000;
const waterQuantity: number = 2;

const discount: number = 10000;

const totalFoodPrice: number = friedRicePrice * friedRiceQuantity;
const totalDrinkPrice: number = waterPrice * waterQuantity;
const grandTotal: number = totalFoodPrice + totalDrinkPrice;
const finalPayment: number = grandTotal - discount;

console.log(`Total price of fried rice:   Rp${totalFoodPrice.toLocaleString('id-ID')}`);
console.log(`Total price of drinks:       Rp${totalDrinkPrice.toLocaleString('id-ID')}`);
console.log(`Total price before discount: Rp${grandTotal.toLocaleString('id-ID')}`);
console.log(`Final amount to be paid:     Rp${finalPayment.toLocaleString('id-ID')}`);
