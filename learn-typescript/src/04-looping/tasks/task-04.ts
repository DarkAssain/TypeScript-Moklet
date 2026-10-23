/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */


const sales: number[] = [
    125000, 350000, 78000, 910000, 150000, 
    420000, 275000, 99000, 640000, 18000
];

const totalTransactions: number = sales.length;
let totalRevenue: number = 0;
let highestTransaction: number = sales[0];
let lowestTransaction: number = sales[0];
let highValueCount: number = 0;

for (let i: number = 0; i < totalTransactions; i++) {
    const currentTransaction: number = sales[i];
    
    totalRevenue += currentTransaction;
    
    if (currentTransaction > highestTransaction) {
        highestTransaction = currentTransaction;
    }
    
    if (currentTransaction < lowestTransaction) {
        lowestTransaction = currentTransaction;
    }
    
    if (currentTransaction >= 300000) {
        highValueCount++;
    }
}

const averageTransaction: number = totalRevenue / totalTransactions;

console.log(`Total Sales Revenue: Rp${totalRevenue}`);
console.log(`Highest Transaction: Rp${highestTransaction}`);
console.log(`Lowest Transaction: Rp${lowestTransaction}`);
console.log(`Transactions Rp300,000 or more: ${highValueCount}`);
console.log(`Average Transaction Value: Rp${averageTransaction}`);
