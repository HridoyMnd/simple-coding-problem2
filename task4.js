/**
 * You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

 */

// Solution task4 here
  const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

// funciton for getAveragePhonePrice

function findAveragePhonePrice (phones) {
    const prices = [];
    for(const phone of phones){
        const phonePrice = phone.price;
        prices.push(phonePrice);
    }

    let totalPrice = 0;
    const countPrice = prices.length;
    for(const price of prices){
        totalPrice += price;
    }

    // make average
    const averagePhonePrice = totalPrice /countPrice;
    return (averagePhonePrice);
    
}

const result4 = findAveragePhonePrice(phones);
console.log(result4);
