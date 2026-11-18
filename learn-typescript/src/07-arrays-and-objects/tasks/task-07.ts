/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter((order) => order.status === "completed");

const orderTotals = orders.map((order) => ({
    id: order.id,
    customer: order.customer,
    total: order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    ),
}));

const biggestSpender = orderTotals.reduce((highest, order) =>
    order.total > highest.total ? order : highest
);

const totalRevenue = completedOrders.reduce(
    (sum, order) =>
        sum +
        order.items.reduce(
            (orderTotal, item) => orderTotal + item.price * item.quantity,
            0
        ),
    0
);

const purchasedProducts = [
    ...new Set(
        orders.flatMap((order) =>
            order.items.map((item) => item.product)
        )
    ),
];

console.log("Completed orders:", completedOrders);
console.log("Order totals:", orderTotals);
console.log("Customer who spent the most:", biggestSpender);
console.log("Total completed revenue:", totalRevenue);
console.log("Purchased products:", purchasedProducts);