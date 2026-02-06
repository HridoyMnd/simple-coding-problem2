/**
 * Function name: calcBill(prices, items)
Statement:  Calculate total bill amount and count how many times each item appears.
Test case 1
Input: 
     prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
     items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

Output:
{
  total: 376,
  itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
}

 */

// problem 4 solution here

const items = ["egg", "egg", "rice", "oil", "egg", "sugar"];
const itemPrices = { rice: 70, oil: 180, egg: 12, sugar: 90 };


function calculateBill(items, itemPrices) {
  let totalBill = 0;
  const itemCount = {};

  for (const item of items) {
    totalBill += itemPrices[item];

    if(itemCount[item]){
      itemCount[item]++;
    }
    else{
      itemCount[item] = 1
    }
  }

  return {
    totalBill: totalBill,
    itemCount: itemCount
  }

};

const result4 = calculateBill(items, itemPrices);
console.log(result4);

