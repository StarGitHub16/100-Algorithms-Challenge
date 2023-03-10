export function largestOfFour(nums: number[][]): number[] {

    const highestNumbers: number[] = [];


    for(let numberGroup of nums) {   
        let largest = 0;  //Variable that gets reset through a new array

        for(let number of numberGroup) { //Checking to see if it is the largest number within the individual array.
            largest = largest < number ? number : largest;
        }


        highestNumbers.push(largest); //Finally push the number to the empty array, and go to next array if available.


    }
    
    return highestNumbers;
} 


 console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
 console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));