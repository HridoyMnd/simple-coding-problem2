/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

// Solution task3
const prices = [35000, 15000, 20000];

function calculateElectronicsBudget (prices){
    let totalBudget = 0;

    for(const price of prices){
        totalBudget += price;
    }
    return totalBudget;
};

const result3 = calculateElectronicsBudget(prices);
console.log(result3);


