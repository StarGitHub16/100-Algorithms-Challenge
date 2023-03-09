export function differentSymbolsNaive(s: string): number {

    const uniqueChars: string[] = [];        //Placeholder array.
    const inputChars: string[] = s.split(''); 

    inputChars.forEach((char) => {
        if(!uniqueChars.includes(char)) { //Check to see if the array has the character if not push to it.
            uniqueChars.push(char)
        }
    })

    return uniqueChars.length; 

}  


 console.log(differentSymbolsNaive('cabca'));


 //OR you can approach the problem this way:

 export function AnotherdifferentSymbolsNaive(s: string): number {
    

    const uniqueChars = {};
    const  inputChars = s.split('');

    inputChars.forEach((char) => {
        uniqueChars[char] = 1;
    });
    return Object.keys(uniqueChars).length;

}  


console.log(AnotherdifferentSymbolsNaive('cabca'));

//YET there is also another way this function can be done. and probably the cleanest and shortest way, check it out.

export function YetanotherdifferentSymbolsNaive(s: string): number {
    const uniqueChars = new Set();

    const inputChars = s.split('');

    inputChars.forEach((char) => {
        uniqueChars.add(char);
    });
    
    return uniqueChars.size;
}

console.log(YetanotherdifferentSymbolsNaive('cabca'));