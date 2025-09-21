// Coding Challenge 04

let products = [
    {name: "iPad Air", category: "Electronics", price: 399.99, inventory: 200},
    {name: "Crop Top", category: "Apparel", price: 19.72, inventory: 30},
    {name: "Avocados", category: "Groceries", price: 3.99, inventory: 50},
    {name: "Red Leggings", category: "Apparel", price: 8.50, inventory: 15}
]

for (let products in products) {
    let discount
    
    switch (products.category) {
        case 'Electronics': 
            discount = .2
            break;
        case 'Groceries':
            discount = .10
            break;
        case 'Apparel':
            discount = .15
            break;
        default:
            discount = 0
    }
}