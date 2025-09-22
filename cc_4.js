// Coding Challenge 04

// STEP 2
let products =
    [{name: 'iPad Air', category: 'Electronics', price: 399.99, inventory: 200},
    {name: 'Crop Top', category: 'Apparel', price: 19.72, inventory: 30},
    {name: 'Avocados', category: 'Groceries', price: 3.99, inventory: 50},
    {name: 'Red Leggings', category: 'Apparel', price: 8.50, inventory: 15}]


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
let customers =
    [{customerID: 1, customerType: 'Student', cart:[{name: 'iPad Air', qty: 1}, {name: 'Red Leggings', qty: 2}]},
    {customerID: 2, customerType: 'Student', cart: [{name: 'Red Leggings', qty: 1}, {name: 'Crop Top', qty: 1}]},
    {customerID: 3, customerType: 'Senior', cart: [{name: 'Avocados', qty: 6}, {name: 'iPad Air', qty: 1}]},]

subtotal = 0;
for (let customer = 0; customer <= 3; customer++) {
    const element = array[index];
    
}