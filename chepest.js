
// find the chipest phone from an array
// find the expensive phone from an array
/**
 * const phones = [
  { id: 1, brand: "Samsung", model: "Galaxy S23", price: 950, color: "Black" },
  { id: 2, brand: "Apple", model: "iPhone 15", price: 1200, color: "Silver" },
  { id: 3, brand: "Xiaomi", model: "Redmi Note 12", price: 300, color: "Blue" },
  { id: 4, brand: "OnePlus", model: "OnePlus 11", price: 800, color: "Green" },
  { id: 5, brand: "Google", model: "Pixel 8", price: 900, color: "White" }
];
 */

// Task 1 Solution
const phones = [
  { id: 1, brand: "Samsung", model: "Galaxy S23", price: 950, color: "Black" },
  { id: 2, brand: "Apple", model: "iPhone 15", price: 1200, color: "Silver" },
  { id: 3, brand: "Xiaomi", model: "Redmi Note 12", price: 300, color: "Blue" },
  { id: 4, brand: "OnePlus", model: "OnePlus 11", price: 800, color: "Green" },
  { id: 5, brand: "Google", model: "Pixel 8", price: 900, color: "White" }
];

function getCheapestPhone(phones) {
    let cheapestPhone = phones[0];
    for(const phone of phones){
        if(cheapestPhone.price > phone.price){
            cheapestPhone = phone;
        };
    };
    return cheapestPhone;
};

const result1 = getCheapestPhone(phones);
console.log(`The cheapest phone is ${result1.brand} ${result1.model}`);


// Task 2 Solution
const phones2 = [
  { id: 1, brand: "Samsung", model: "Galaxy S23", price: 950, color: "Black" },
  { id: 2, brand: "Apple", model: "iPhone 15", price: 1200, color: "Silver" },
  { id: 3, brand: "Xiaomi", model: "Redmi Note 12", price: 300, color: "Blue" },
  { id: 4, brand: "OnePlus", model: "OnePlus 11", price: 800, color: "Green" },
  { id: 5, brand: "Google", model: "Pixel 8", price: 900, color: "White" }
];

function getExpensivePhone(phones2) {
    let expensivePhone = phones2[0];
    for(const phone of phones2){
        if(expensivePhone.price < phone.price){
            expensivePhone = phone;
        };
    };
    return expensivePhone;
};

const result2 = getExpensivePhone(phones2);
console.log(`The expensive phone is ${result2.brand} ${result2.model}`);
