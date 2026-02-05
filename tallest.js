// get the max number from the heights array
// get the min number from the heights array
// const heights = [65, 66, 68, 72, 78, 69, 65, 66];

//  Solution 1
const heights = [65, 66, 68, 72, 78, 69, 65, 66];

function getMaxNumber(heights){
    let maxNumber = heights[0];
    for(const max of heights){
        if(maxNumber < max){
            maxNumber = max;
        };
    }
    return maxNumber;
};

const result1 = getMaxNumber(heights);
console.log(result1);


// Solution 2
const heights2 = [65, 66, 68, 72, 78, 69, 65, 66];

function getMinNumber(heights2){
    const minNumber = heights2[0];
    for(const min of heights2){
        if(minNumber > min){
            minNumber = min
        }
    }
    return minNumber;
};

const result2 = getMinNumber(heights2);
console.log(result2);
