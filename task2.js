/**
 * Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

// Solution task2
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallestName = heights2[0];

for(const name of heights2){
    if(name.length < smallestName.length){
        smallestName = name;
    }    
    
}
console.log(smallestName);