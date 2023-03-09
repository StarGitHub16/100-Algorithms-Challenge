export function convertString(s: string, t: string): boolean {

    let word = ''; //Keeping track of the string
    let tIndex =0; //Keeping track of index value

    const sChars: string[] = s.split(''); //Creating array of characters

    for(let i = 0; i < s.length; i++)  
    {
        if(s[i] === t[tIndex]) {    
            word = word.concat(s[i]);
            tIndex++;
        }

        if(word === t) {
            return true;
        }
    }


    return false;
}    

 console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
 console.log(convertString('addbyca', 'abcd'));
