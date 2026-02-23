

// Activity 4: Safe State Updates

// Instructions for Participants: You have a player object and an array of newInventory.
// Create a updatedPlayer object that copies the original player, but changes their level to 5.
// Create a finalInventory array that combines the currentInventory with the newInventory.

const player = {
  name: "Hero",
  level: 4,
  health: 100
};
const currentInventory = ["Sword", "Shield"];
const newInventory = ["Health Potion", "Map"];

// 1. Update the player's level without modifying the original 'player' object:
const updatedPlayer ={...player,level:5}
console.log("Updated Player:", updatedPlayer);

// 2. Combine the inventories into one new array:
const finalInventory = [...currentInventory,...newInventory];
console.log(finalInventory); // Should have 4 items

// Problem 1: Apply Discount to Expensive Products

// Problem Statement:

// You are building a pricing module for an online store.

// Given the following array:


const products = [
    { id: 1, name: "Phone", price: 800 },
    { id: 2, name: "Mouse", price: 40 },
    { id: 3, name: "Laptop", price: 1200 }
];
const updatedProducts = products.map(product =>
    product.price > 500
        ? {
            ...product,
            discountedPrice: product.price * 0.8
        }
        : { ...product }
);

console.log(updatedProducts);

// Problem 2: Add Pass/Fail Status to Students

// Problem Statement:

// You are implementing a grading system.


const students = [
    { name: "Ali", marks: 75 },
    { name: "Sara", marks: 45 },
    { name: "John", marks: 90 }
];
const updatedStudents = students.map(student => ({
    ...student,
    status: student.marks >= 50 ? "Pass" : "Fail"
}));
console.log(updatedStudents);       

// Problem 3: Increase Inventory Quantity

// Problem Statement:

// You are updating stock levels in an inventory system.


const inventory = [
{ item: "Pen", quantity: 10 },
{ item: "Notebook", quantity: 5 },
{ item: "Pencil", quantity: 8 }
];
const updatedInventory = inventory.map(product => ({
    ...product,
    quantity: product.quantity + 2
}));
console.log(updatedInventory);

// Problem 4: Generate Full Names

// Problem Statement:

// You are processing user profile data.


const users = [
{ firstName: "Ali", lastName: "Khan" },
{ firstName: "Sara", lastName: "Ahmed" }
];
const updatedUsers = users.map(user => ({
    ...user,
    fullName: `${user.firstName} ${user.lastName}`
}));
console.log(updatedUsers);

// Problem 5: Mark High Priority Orders

// Problem Statement:

// You are building an order processing feature.


const orders = [
    { id: 1, total: 250 },
    { id: 2, total: 80 },
    { id: 3, total: 150 }
];
const updatedOrders = orders.map(order => ({
    ...order,
    priority: order.total > 200 ? "True" : "False"
}));
console.log(updatedOrders);