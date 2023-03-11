//This was used in a technical interview, good to look over.

export function stringsConstruction(a: string, b: string): number {

    const aCount = getAlphabetCount(a);
    const bCount = getAlphabetCount(b);

    const counts = []; //Array we store values in
    
    for(let char in aCount)  {   //Does our string matching from have that character?
        if(bCount.hasOwnProperty(char)) {
            counts.push(Math.floor(bCount[char]/aCount[char]));
        } else {
            return 0; 
        }
    }


    return Math.min(...counts);


}


function getAlphabetCount(word: string): object { //Normally this would be a private function in TypeScript
    const chars = word.split('');
    const alphabetCount = {};   //Function that makes an object of our count of characters.


    chars.forEach((char) => {
        if (alphabetCount.hasOwnProperty(char)) {
            alphabetCount[char]++;
        } else {
            alphabetCount[char] = 1
        }
    });

    return alphabetCount;
}

 console.log(stringsConstruction('abc', 'abccba'));