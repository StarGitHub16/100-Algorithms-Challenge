//need to push all letters by one.

export function alphabeticShift(inputString: string): string {
   const alphabet: string[] = ['a','b','c','d','e','f','g','h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let inputShifted = inputString.split('');  //Here we split the alphabetical array.

    for(let i = 0; i < inputShifted.length; i++) {
        let index = 0;    

        if(inputShifted[i] !== 'z') {   //Reason z is not included, is cause our index is 0, which represents 'a' here.
            index = alphabet.indexOf(inputShifted[i]) + 1;
        }

        inputShifted[i] = alphabet[index];
    }

    return inputShifted.join('');   //Joins the letters back together
}

console.log(alphabeticShift('crazy'));