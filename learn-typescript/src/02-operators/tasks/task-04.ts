/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const MechanicalKeyboard: number = 850000;
const WirelessMouse: number = 275000;
const MousePad: number = 120000;

const KeyboardQuantity: number = 1;
const MouseQuantity: number = 2; 
const MousePadQuantity: number = 1;

const isPremiumMember: boolean = true;

const subtotal: number = 
(MechanicalKeyboard * KeyboardQuantity) + 
(WirelessMouse * MouseQuantity) + 
(MousePad * MousePadQuantity);

let totalItems: number = 0;
for (let i = 0; i < KeyboardQuantity; i++) totalItems++;
for (let i = 0; i < MouseQuantity; i++) totalItems++;
for (let i = 0; i < MousePadQuantity; i++) totalItems++;

const hasDiscount: boolean = subtotal > 1000000;

const discountAmount: number = hasDiscount ? subtotal * 0.10 : 0;

const shippingFee: number = isPremiumMember ? 0 : 25000; 

const finalPayment: number = subtotal - discountAmount + shippingFee;

console.log(`Subtotal: Rp${subtotal.toLocaleString('id-ID')}`);
console.log(`Total Items Counted:${totalItems} items`);
console.log(`Discount Applied:  Rp${discountAmount.toLocaleString('id-ID')} (${hasDiscount ? '10%' : '0%'})`);
console.log(`Shipping Fee:   Rp${shippingFee.toLocaleString('id-ID')} (Premium Member)`);
console.log(`-------------------------------------------`);
console.log(`Final Payment Amount: Rp${finalPayment.toLocaleString('id-ID')}`);
