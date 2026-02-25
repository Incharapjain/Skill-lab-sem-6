
/*let num=2
//console.log(num);
num="hello"         //while reinitializing dont use let ex:let num="hello"
console.log(num);
//const num=3;
//console.log(num);   //const is used to declare a constant variable which cannot be reinitialized or reassigned.
//num is already declared in the same scope. You cannot redeclare a variable with const. If you want to change the value of num, you should not use const. Instead, you can use let or var.
const num1=3;
console.log(num1);
*/

let num1=100
let num2=200
if(num2>num1) {
    var msg="Done"
    //console.log("Success!!");
}
console.log(msg);  //var is function scoped, so it is accessible outside the if block. However, it is generally recommended to use let or const for variable declarations to avoid unintended consequences of variable hoisting and scope issues.

let n1=10
let n2=20
let mul=n1*n2
console.log(mul);


let number=1
if(number%2==0) {
    console.log("Even");
}
else{
    console.log("Odd");
}


//Functions in JS : block of code that can be reused
/*function sum(a,b) {
    return a+b
}
let result=sum(5,7)
cosole.log(result);
*/
//Arrow function(Explicit return)
const addArrow=(a,b)=>{
    return a+b;
};

//Arrow function(Implicit return-great for single-line React components)
const addArrowImplicit=(a,b)=>a+b;

//Activity 2: The Refractor Challenge
//Instructions: Refractor the following functions into arrow functions. 
function greetUser(name) {
    return `Hello, ${name}! Welcome to React.`;
}

//2. Refractor to an arrow function with an IMPLICIT return
function calculateTotal(price,tax) {
    return price+(price*tax);
}

//arrays:
let arr=[]
//object:
let obj={
    id:1,
    name:"Ram",
    address:{
        city:"xyz"
    },
    isActive:true
}
console.log(obj.name)
console.log(obj.address)
console.log(obj.isActive)

let {name,address}=obj
console.log(name);
console.log(address);

//Activity 3:Unpack the api response
const userProfile={
    id:402,
    username:"react_ninja",
    email:"ninja@example.com",
    address:{
        city:"San Francisco",
        zip:"94105"
    }
};

let {username,email,address:{city}}=userProfile
console.log(username,email,city);  
//spread operator: ... used to expand an iterable (like an array or object) into individual elements. It is denoted by three dots (...).
//let arr1=[1,2,3]
//let arr2=[...arr1]  copying arr1 to arr2 using spread operator
//console.log(arr2);  //Output: [1, 2, 3]

//let arr1=[1,2,3]
//let arr2=[...arr1,4,5]
//let arr3=[...arr1,...arr2]  merging arr1 and arr2 into arr3 using spread operator
//console.log(arr2);
/*
const obj1={a:1};
const obj2={b:2};
const mergedObj={...obj1,...obj2}  //merging obj1 and obj2 into mergedObj using spread operator
console.log(mergedObj);  //Output: {a: 1, b: 2}

//Add item immutably
const newArray={...originalArray,5};
console.log("New Array:", newArray);  //Output: New Array: {0: 1, 1: 2, 2: 3, 5: undefined}

//remove item immutably
const filteredArray=originalArray.filter((num)=>num!==2);
console.log("Removed 2:",filteredArray);  //Output: Removed 2: [1, 3]
*/
//update object immutably
const userState={
    name:"Rahul",
    role:"Developer"
};

const updatedUser={
    ...userState,
    role:"Admin"
};
console.log("Original State:",userState);  //Output: Original State: {name: "Rahul", role: "Developer"}
console.log("Updated State:",updatedUser);  //Output: Updated State: {name: "Rahul", role: "Admin"}


//Array .map() (Transforming data)
//Simple transformation
const numbers=[1,2,3,4,5];
const doubled=numbers.map(num=>num*2);
console.log(doubled);  //Output: [2, 4, 6, 8, 10]
/*
//A React-Style scenario (transforming strings to "UI")
const names=["Alice","Bob","Charlie"];
const userCards=names.map((name)=>{
    return `<Card name="${name}"/>`;
});
*/
/* Reassignment Test */
let count = 10;
count = 20; // Allowed
console.log("Updated let:", count);

const PI = 3.14;
// PI = 3.14159;  Error: Cannot reassign const
console.log("Const value:", PI);

/* Object Mutation with const */
const user = {
  name: "K",
  role: "Developer"
};

// user = {};  Not allowed
user.role = "Admin"; //  Allowed (property change)
console.log("Updated object:", user);

/*
Const prevents reassignment,
but object properties can still be modified.
React prefers immutability (use spread instead).
*/

// Arrow Function

/* Convert normal function to arrow */
function greet(name) {
  return "Hello " + name;
}

const greetArrow = (name) => {
  return "Hello " + name;
};

console.log(greetArrow("abc"));

/* Single line arrow return */
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(5, 4));

/* Object Destructuring */
const person = {
  name: "Amit",
  age: 25,
  city: "Bangalore"
};


/* Rename while destructuring */
const { city: location } = person;
console.log("City renamed:", location);

/* Nested Destructuring */
const product = {
  id: 1,
  details: {
    title: "Laptop",
    price: 50000
  }
};

const {
  details: { title, price }
} = product;

console.log("Product:", title, price);

/* Array Destructuring */
const colors = ["Red", "Green", "Blue"];

const [firstColor, secondColor] = colors;
console.log("First:", firstColor);
console.log("Second:", secondColor);

// SPREAD OPERATOR: 
/* Clone Array */
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];

clonedArray.push(4);

console.log("Original:", originalArray);
console.log("Cloned:", clonedArray);

// add numbers in array
const numberS = [2, 3];
const newNumbers = [1, ...numberS, 4];

/* Add item immutably */
const newArray = [...originalArray, 5];
console.log("New Array:", newArray);

/* Remove item immutably */
const filteredArray = originalArray.filter((num) => num !== 2);
console.log("Removed 2:", filteredArray);

/* Simulate state update */

let products = [
  { id: 1, name: "Phone", price: 20000 },
  { id: 2, name: "Laptop", price: 50000 }
];

/* Add product */
const addProduct = (newProduct) => {
  products = [...products, newProduct];
};

addProduct({ id: 3, name: "Tablet", price: 15000 });
console.log("After Add:", products);

/* Update product price */
const updatePrice = (id, newPrice) => {
  products = products.map((product) =>
    product.id === id ? { ...product, price: newPrice } : product
  );
};

updatePrice(1, 25000);
console.log("After Update:", products);

/* Remove product */
const removeProduct = (id) => {
  products = products.filter((product) => product.id !== id);
};

removeProduct(2);
console.log("After Remove:", products);

/*// ##  Let-Const
// const prevents REASSIGNMENT, but doesn't make objects fully immutable
const user = { name: "Alice" };
user.name = "abc"; 
console.log(user.name); // "abc"

// user = { name: "Charlie" }; // ERROR! Cannot reassign a const variable

let score = 10;
score += 5; // let allows reassignment

// =================================================================
// Activity 1: Fix the Leaky Scope

// Instructions: given code using var. refactor it using only let and const so that it runs without errors and adheres to modern best practices.
var maxUsers = 100;
var currentUsers = 99;

if (currentUsers < maxUsers) {
  var message = "Welcome to the platform!";
  currentUsers = currentUsers + 1;
}

// BUG: 'message' leaked out of the if-block because 'var' is not block-scoped!
console.log(message);

// ==================================================================
// 2. Arrow Functions
// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function (Explicit Return)
const addArrow = (a, b) => {
  return a + b;
};

// Arrow Function (Implicit Return - great for single-line React components)
const multiply = (a, b) => a * b;

// Activity 2: The Refactor Challenge

// Instructions: Refactor the following standard functions into arrow functions. For the second function, try to use an implicit return (no {} and no return keyword).

// 1. Refactor to a standard arrow function
function greetUser(name) {
  return `Hello, ${name}! Welcome to React.`;
}
// 2. Refactor to an arrow function with an IMPLICIT return
function calculateTotal(price, tax) {
  return price + (price * tax);
}
// ===================================================================

// 3. Destructuring (Objects & Arrays)
const developer = { firstName: "Jane", role: "Frontend", experience: 3 };

// Old way:
const firstName = developer.firstName;
const role = developer.role;

// ES6 Destructuring:
//const { firstName, role } = developer;
console.log(firstName, role); // "Jane", "Frontend"

// Activity 3: Unpack the API Response
const userProfile = {
  id: 402,
  username: "react_ninja",
  email: "ninja@example.com",
  address: {
    city: "San Francisco",
    zip: "94105"
  }
};
// Expected Output when logged: "react_ninja ninja@example.com San Francisco"

// Solution
// const { username, email, address: { city } } = userProfile;

// console.log(username, email, city);
// Output: react_ninja ninja@example.com San Francisco


// ==================================================================================
// 4. The Spread Operator (...)
// Copying and adding to an array
const oldFruits = ["Apple", "Banana"];
const newFruits = [...oldFruits, "Mango"]; // ["Apple", "Banana", "Mango"]

// Merging Objects
const baseConfig = { theme: "dark", notifications: true };
const userConfig = { ...baseConfig, theme: "light" }; // Overwrites theme, keeps notifications
console.log(userConfig); // { theme: "light", notifications: true }
*/