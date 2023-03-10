export function firstNotRepeatingCharacter(s: string): string {

    const chars: string[] = s.split(''); //Split the string into singular characters for evaluation.
    let duplicates = {};                   //Creating a duplicate object.

    let answer = '_';                          //What will be returned for now this is a placeholder.
    let indexAnswer = Number.MAX_SAFE_INTEGER; //Keep track of which number came first.
    

    chars.forEach((element, index) => {   //First iteration, will be checking to see if something is a duplicate in the object.
        if(!duplicates.hasOwnProperty(element)) {
            duplicates[element] = {
                count: 1,
                index
            };
        } else {
            duplicates[element].count++;
            duplicates[element].index = index;
        }
    } )

    for(const key in duplicates) {    //Second iteration going through the key
        if(duplicates[key].count === 1 && duplicates[key].index < indexAnswer) {
            answer = key;
            indexAnswer = duplicates[key].index;
        }
    }
    return answer;
}  


 console.log(firstNotRepeatingCharacter('abacabad'));
 console.log(firstNotRepeatingCharacter('abacabaabacaba'));
