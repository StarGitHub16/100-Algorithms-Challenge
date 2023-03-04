//Idea here is, if the letters following each other keep going down aka a to b to c...etc, return true.

export function alphabetSubsequence(s: string): boolean {

    const chars: string[] = s.split(''); //Took string and made it an array of characters
    const charValues: number[] = []

    chars.forEach((char: string) => {
        charValues.push(char.charCodeAt(0))
    });

    if(new Set(charValues).size !== charValues.length) { //Check for duplicates
        return false;
    }

    for(let i = 0; i < charValues.length; i++) {  //Check to see if the letter after is greater than the previous letter.
        if(charValues[i] >= charValues[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
