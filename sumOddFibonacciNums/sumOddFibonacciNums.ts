//Could see this in a technical interview.

export function sumOddFibonacciNums(num: number): number {

    let result = 0;   //Variable to store the result in
    let previous = 0; //One to store the previous

    let current = 1;  //And one that contains the current


    while(current <= num) {   //Run through it
        if(current % 2 !== 0) {  //Go theough the Odd numbers.
            result += current;
        }

        const nextCurrent = current + previous; //Keep track of the current vs the previous.
        previous = current;
        current = nextCurrent;
    }

    return result;
}    




 console.log(sumOddFibonacciNums(1000));
 console.log(sumOddFibonacciNums(4000000));
 console.log(sumOddFibonacciNums(10));