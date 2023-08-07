// Find out the total price of a shopping cart. That contains several products in several amount.

let shoppingItems = [
    {product: "shirt1", price: 550, quantity: 3},
    {product: "shirt2", price: 830, quantity: 1},
    {product: "pant", price: 900, quantity: 2},
    {product: "shoe", price: 1600, quantity: 1},
    {product: "mobile charger", price: 200, quantity: 1},
    {product: "cap", price: 150, quantity: 1},
    {product: "sunglass", price: 370, quantity: 1}
]

let totalPrice = shoppingCart(shoppingItems);
console.log(totalPrice);

function shoppingCart (cartTotal){
    let sum = 0;
    for(i = 0; i < cartTotal.length; i++){
        let product = cartTotal[i];
        productCost = product.price * product.quantity
        sum = sum + productCost;
    }
    return sum;
}