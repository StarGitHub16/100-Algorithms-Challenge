export function pigLatin(str: string): string {

    const letters = str.split('');
    const vowelRegex = /[aeiou]/;

    if(vowelRegex.test(str[0])) {
        return `${str}way`;
    }

    while(true) {
        if(!vowelRegex.test(letters[0])) {
            letters.push(letters.splice(0,1)[0]); 
        } else {
            break;
        }
    }

    str = letters.join('') + 'ay';
    
    return str;
}    


 console.log(pigLatin("glove"));
 console.log(pigLatin("eight"));
