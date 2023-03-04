export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    
    let sum = 0; //The sum of the values
    let max = 0; //The max value

    for ( let i = 0; i < k; i++) { //The consective numbers up to k.
        sum += inputArray[i]; 
    }

    max = sum; 

    for( let i = k; i < inputArray.length; i++) { //Then starting at k and minus that value. 
        sum -= inputArray[i-k];
        sum += inputArray[i];

        if( sum > max) { //Check to see if it needs to reset.
            max = sum;
        }
    }

    return max; //Return the maximum value.
}
 
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));