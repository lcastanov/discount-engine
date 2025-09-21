// Coding Challenge 04

// STEP 2
let products =
    [{name: "iPad Air", category: "Electronics", price: 399.99, inventory: 200},
    {name: "Crop Top", category: "Apparel", price: 19.72, inventory: 30},
    {name: "Avocados", category: "Groceries", price: 3.99, inventory: 50},
    {name: "Red Leggings", category: "Apparel", price: 8.50, inventory: 15}]


// STEP 3
    for (let product in products) {
    let discount;
    
    switch (product.category) {
        case 'Electronics': 
            discount = .2;
            break;
        case 'Groceries':
            discount = .10;
            break;
        case 'Apparel':
            discount = .15;
            break;
        default:
            discount = 0
    }
}


// STEP 4
let customerType = ['Student', 'Senior']
console.log(customerType);

let subtotal
if (customerType = 'Student') {
  subtotal = subtotal - (subtotal * .05);
} else {
    console.log(`Student Discount does not apply to order. Your order total is: ${subtotal}`);
}

if (customerType = 'Senior') {
  subtotal = subtotal - (subtotal * .07);    
} else {
    console.log(`Senior Discount does not apply to order. Your order total is: ${subtotal}`);
}


// STEP 5
let customerCarts = [{cartID: I-13,}];

for (const color of colors) {
  console.log(color);
}