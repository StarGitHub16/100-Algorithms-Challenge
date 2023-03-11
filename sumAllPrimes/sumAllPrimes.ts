//Another interview question that has shown up.

export function sumAllPrimes(num: number): number {


    let primesTotal = 0;


    for(let i = 2; i < num; i++) {   //The reason you start at 2, is cause 1 is not a prime number.
        for(let j = 2; j <= i; j++) {
            if (i === j) {
                primesTotal += i;
            }

            if (i % j === 0) {  //Handling the condition for it the number is not prime.
                break;
            }

            
        }
    }

    return primesTotal;
}    

 console.log(sumAllPrimes(10));
 console.log(sumAllPrimes(977));