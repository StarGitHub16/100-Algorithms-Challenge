//Trying to get 1,1,1 to be 1,2,3. Thats the idea.

export function arrayChange(inputArray: number[]): number {
     let count = 0;

     for( let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] >= inputArray[i + 1]) { //Comparing to see if the next number is greater.
            const difference = (inputArray[i] + 1) - inputArray[i + 1]; 
            inputArray[i + 1] = inputArray[i] + 1;
            count += difference;
        }
     }

     return count;
}

 console.log(arrayChange([1, 1, 1]));