//Try to get the median value( middle number in an array). 
//The function will need to handle a situation where if there are 2 middle numbers, it returns the least of the 2 aka the one to the left.

export function absoluteValuesSumMinimization(a: number[]): number {

    const isEven = a.length % 2 === 0;  //First checking to see if the length is even.
    
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length/ 2)] //Then if it is is even, we want to take the length divide 2 but subtract 1 to get the middle number that is to the left.
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));