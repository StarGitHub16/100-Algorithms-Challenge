export function squareDigitsSequence(a0: number): number {

    let count = 1;


    const uniqueNums = [a0];

    while(true)  { //Rule of thumb when we dont know how many times you are iterating that is telling you to use a while loop or recursion.
        count++;   //Iterate till a dupliacte number is found.
        a0 = digitPower(a0);

        if (uniqueNums.includes(a0)) {
            return count;
        }


        uniqueNums.push(a0);
    }


}     

function digitPower(num: number) : number {
    const digits = num.toString().split('').map((element) => parseInt(element) ** 2); //Turn the number into a string, split it, map into a new array, then make it an integer.

    const sum = digits.reduce((a, b) => a + b);

    return sum;
}


 console.log(squareDigitsSequence(16));
 console.log(squareDigitsSequence(103));