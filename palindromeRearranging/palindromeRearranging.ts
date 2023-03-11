//Not a palidrome is something that will be the same forwards and backwards.

export function palindromeRearranging(inputString: string): boolean {
    const chars = inputString.split('');

    const charCount = {};
    let oddCount = 0;

    for( let char of chars) {
        if(charCount.hasOwnProperty(char)) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for(let key in charCount) {
        if(charCount[key] % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount > 1  ? false : true;
}  

 console.log(palindromeRearranging('aabb'));