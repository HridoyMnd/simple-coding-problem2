/**
 * Statement:
 Return a new array where duplicate values are removed, keeping the original order.
Test case 1
Input:
 [5, 3, 5, 2, 3, 9, 2, 7]
Output:
[5, 3, 2, 9, 7]

 */

// problem 5 solution here
const numbers =  [5, 3, 5, 2, 3, 9, 2, 7];

const removedDuplicate = []

for(const number of numbers){
    if(!removedDuplicate.includes(number)){
        removedDuplicate.push(number)
    }
}

console.log(removedDuplicate);
console.log(numbers);