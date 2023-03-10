export function largestNumber(n: number): number {

    //let word = '';

    //for(let i = 0; i < n; i++) {
        //word = word.concat('9');
    //}

    //OR simply

    const word = '9'.repeat(n);

    return parseInt(word);
}  


 console.log(largestNumber(2));