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
const numbers = [5, 3, 5, 2, 3, 9, 2, 7];
const numbers2 = [1, 1, 1, 1];


function removedDuplicateNumber(Input) {
    const uniqueArrr = []

    for (const number of Input) {
        if (!uniqueArrr.includes(number)) {
            uniqueArrr.push(number)
        }
    }

    return uniqueArrr

}
const result5 = removedDuplicateNumber(numbers2);
console.log(result5);