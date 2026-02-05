// get total price of products from the array below
/**
 * const products = [
  { id: 1, name: "Laptop", brand: "Dell", price: 850, category: "Electronics", quantity: 5 },
  { id: 2, name: "Headphones", brand: "Sony", price: 120, category: "Accessories", quantity: 15 },
  { id: 3, name: "Smart Watch", brand: "Apple", price: 300, category: "Wearable", quantity: 8 },
  { id: 4, name: "Backpack", brand: "Nike", price: 60, category: "Fashion", quantity: 20 },
  { id: 5, name: "Coffee Maker", brand: "Philips", price: 150, category: "Home Appliance", quantity: 10 },
  { id: 6, name: "Gaming Mouse", brand: "Logitech", price: 45, category: "Accessories", quantity: 25 },
  { id: 7, name: "Mobile Phone", brand: "Samsung", price: 950, category: "Electronics", quantity: 12 }
];
 */

const products = [
  { id: 1, name: "Laptop", brand: "Dell", price: 850, category: "Electronics", quantity: 5 },
  { id: 2, name: "Headphones", brand: "Sony", price: 120, category: "Accessories", quantity: 15 },
  { id: 3, name: "Smart Watch", brand: "Apple", price: 300, category: "Wearable", quantity: 8 },
  { id: 4, name: "Backpack", brand: "Nike", price: 60, category: "Fashion", quantity: 20 },
  { id: 5, name: "Coffee Maker", brand: "Philips", price: 150, category: "Home Appliance", quantity: 10 },
  { id: 6, name: "Gaming Mouse", brand: "Logitech", price: 45, category: "Accessories", quantity: 25 },
  { id: 7, name: "Mobile Phone", brand: "Samsung", price: 950, category: "Electronics", quantity: 12 }
];


function getTotalPrice (products) {
    let totalProductCost = 0;

    for(const product of products){
        const eachProductPrice = product.price * product.quantity;
        totalProductCost += eachProductPrice;
    }
    return totalProductCost;
};

const result1 = getTotalPrice(products);
console.log(`Products total cost is ${result1}`);


